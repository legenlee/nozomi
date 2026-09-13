<script setup lang="ts">
import {
  VAppBar,
  VAvatar,
  VDivider,
  VLayout,
  VList,
  VListItem,
  VMain,
  VNavigationDrawer,
} from "vuetify/components";
</script>

<template>
  <VLayout class="bg-surface-container" full-height>
    <VNavigationDrawer floating>
      <template #prepend>
        <VList>
          <VListItem title="LegenLee" subtitle="Account Placeholder">
            <template #prepend>
              <VAvatar color="grey" />
            </template>
          </VListItem>
        </VList>
        <VDivider />

        <VList nav>
          <VListItem link prepend-icon="mdi-view-grid" title="Library" />
          <VListItem link prepend-icon="mdi-cog" title="Settings" />
        </VList>
        <VDivider />
      </template>

      <VList>
        <VListItem v-for="value in 30" :key="value">
          {{ value }}
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VAppBar></VAppBar>

    <VMain scrollable>
      <div class="fill-height rounded-t-lg bg-background">
        <RouterView />
      </div>
    </VMain>
  </VLayout>
</template>
