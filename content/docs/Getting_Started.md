---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTBKKTT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBWzSyJ1sTYPlA5UMR7OsZg7FtOZtN3HNuHJcNjdtNYsAiEA3O4egQpmL37J3TDGSesD%2F4grDh2Ya8STQKZxFMDwWb8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAPhc25kaBAllO3%2BWSrcA%2FZY%2B9Zn51%2F%2Bo95HhkOlY6%2BLYTz9Q3TZe%2FNOnYThzJxsv%2Bkz7Uc5BF3FDJkNjJBz8bttnt2j1DP5o0fktrMO3LfDPPBp7vK9JpEMAKNVM3DRppQfKV42U3vxMx2tSPQLxGsH0htX%2FMUnNDryEXDbWTB%2BNmW3CZhNKiIRbrVWtXg8yAbiz4Ovn0vc%2F%2Fz0N7rjI4z6oTZEPQHoiYA5zrSLmMuB%2F%2BacIfdziNWBzXsz3mAzg7to5Nz0Ulmo8xxJGyzQPVfsrliymjfXL9E%2FbSwlhiCajxZiobBeKFOqgAN4a7bnWwSEgTnoMeN1f1af6bMxJiVwkkBO6n3i2myX%2BzmxE2oEMyERYpeQ9ivsUp%2BVVXI3NhuVauUXvHoZnZCtKE1ppB9nCvIMwnmNLZTXAJ0UejXs6hKmPkx6zwZGPNw8fAFEn8EDn%2FikMkbsEwWlObqRKffRDhMMqkc1EILwrtWZROuuR%2B7ZSqUHvYybwKsxaNQaAkP56Bvy3hIzR4%2FVteAEuBKTPgWulbqSPHJwtyqf1fAROE9paAHD0OKfilzRbhsWK7ReP22PZuts0bpc%2BX4oyQwm4v7HzjDbh6Thfa%2FQnOMIhvsFO1N2pS2P9I2QHPEwh2Yh6jNZDXG6EczDMICqsMIGOqUBlLTQp6QYZI%2BNsO3tZMFkYopjwpS8veYY97HzlqbRYG3BE0%2BkUmriuOe4beCtvO0QADqJtj7mGQY0sOH%2BUqYH6Z14dUoXXKwQYds%2FNzdXz9V7HhjigjRWZ8HpvIv8ZrmwLNoCimeU960k%2BCUBvfbsPTeJPSWzbS5PqHbJwJLMKhpmidkGiA7De0mGyx%2FM8L4uGOxyCIhqHMXVwfl02UKlQnzTCtcX&X-Amz-Signature=bd41cfdbfb0a573aff927db743696934ba8f6af7481f248aa6fe4454b3168d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTBKKTT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBWzSyJ1sTYPlA5UMR7OsZg7FtOZtN3HNuHJcNjdtNYsAiEA3O4egQpmL37J3TDGSesD%2F4grDh2Ya8STQKZxFMDwWb8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAPhc25kaBAllO3%2BWSrcA%2FZY%2B9Zn51%2F%2Bo95HhkOlY6%2BLYTz9Q3TZe%2FNOnYThzJxsv%2Bkz7Uc5BF3FDJkNjJBz8bttnt2j1DP5o0fktrMO3LfDPPBp7vK9JpEMAKNVM3DRppQfKV42U3vxMx2tSPQLxGsH0htX%2FMUnNDryEXDbWTB%2BNmW3CZhNKiIRbrVWtXg8yAbiz4Ovn0vc%2F%2Fz0N7rjI4z6oTZEPQHoiYA5zrSLmMuB%2F%2BacIfdziNWBzXsz3mAzg7to5Nz0Ulmo8xxJGyzQPVfsrliymjfXL9E%2FbSwlhiCajxZiobBeKFOqgAN4a7bnWwSEgTnoMeN1f1af6bMxJiVwkkBO6n3i2myX%2BzmxE2oEMyERYpeQ9ivsUp%2BVVXI3NhuVauUXvHoZnZCtKE1ppB9nCvIMwnmNLZTXAJ0UejXs6hKmPkx6zwZGPNw8fAFEn8EDn%2FikMkbsEwWlObqRKffRDhMMqkc1EILwrtWZROuuR%2B7ZSqUHvYybwKsxaNQaAkP56Bvy3hIzR4%2FVteAEuBKTPgWulbqSPHJwtyqf1fAROE9paAHD0OKfilzRbhsWK7ReP22PZuts0bpc%2BX4oyQwm4v7HzjDbh6Thfa%2FQnOMIhvsFO1N2pS2P9I2QHPEwh2Yh6jNZDXG6EczDMICqsMIGOqUBlLTQp6QYZI%2BNsO3tZMFkYopjwpS8veYY97HzlqbRYG3BE0%2BkUmriuOe4beCtvO0QADqJtj7mGQY0sOH%2BUqYH6Z14dUoXXKwQYds%2FNzdXz9V7HhjigjRWZ8HpvIv8ZrmwLNoCimeU960k%2BCUBvfbsPTeJPSWzbS5PqHbJwJLMKhpmidkGiA7De0mGyx%2FM8L4uGOxyCIhqHMXVwfl02UKlQnzTCtcX&X-Amz-Signature=860cf245156b9c67f642c6d0f57ab9e971e581e7b0130afa3563c3a8378e0716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTBKKTT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBWzSyJ1sTYPlA5UMR7OsZg7FtOZtN3HNuHJcNjdtNYsAiEA3O4egQpmL37J3TDGSesD%2F4grDh2Ya8STQKZxFMDwWb8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAPhc25kaBAllO3%2BWSrcA%2FZY%2B9Zn51%2F%2Bo95HhkOlY6%2BLYTz9Q3TZe%2FNOnYThzJxsv%2Bkz7Uc5BF3FDJkNjJBz8bttnt2j1DP5o0fktrMO3LfDPPBp7vK9JpEMAKNVM3DRppQfKV42U3vxMx2tSPQLxGsH0htX%2FMUnNDryEXDbWTB%2BNmW3CZhNKiIRbrVWtXg8yAbiz4Ovn0vc%2F%2Fz0N7rjI4z6oTZEPQHoiYA5zrSLmMuB%2F%2BacIfdziNWBzXsz3mAzg7to5Nz0Ulmo8xxJGyzQPVfsrliymjfXL9E%2FbSwlhiCajxZiobBeKFOqgAN4a7bnWwSEgTnoMeN1f1af6bMxJiVwkkBO6n3i2myX%2BzmxE2oEMyERYpeQ9ivsUp%2BVVXI3NhuVauUXvHoZnZCtKE1ppB9nCvIMwnmNLZTXAJ0UejXs6hKmPkx6zwZGPNw8fAFEn8EDn%2FikMkbsEwWlObqRKffRDhMMqkc1EILwrtWZROuuR%2B7ZSqUHvYybwKsxaNQaAkP56Bvy3hIzR4%2FVteAEuBKTPgWulbqSPHJwtyqf1fAROE9paAHD0OKfilzRbhsWK7ReP22PZuts0bpc%2BX4oyQwm4v7HzjDbh6Thfa%2FQnOMIhvsFO1N2pS2P9I2QHPEwh2Yh6jNZDXG6EczDMICqsMIGOqUBlLTQp6QYZI%2BNsO3tZMFkYopjwpS8veYY97HzlqbRYG3BE0%2BkUmriuOe4beCtvO0QADqJtj7mGQY0sOH%2BUqYH6Z14dUoXXKwQYds%2FNzdXz9V7HhjigjRWZ8HpvIv8ZrmwLNoCimeU960k%2BCUBvfbsPTeJPSWzbS5PqHbJwJLMKhpmidkGiA7De0mGyx%2FM8L4uGOxyCIhqHMXVwfl02UKlQnzTCtcX&X-Amz-Signature=d0750c2a37e737577ee94ed4c7ca2adde36f312397b0c4eeb7ddce9935b55dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRN7XG55%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIArBX%2F6Pfk4gxVwZnIJTQrrOvPB91i%2F5fvJk%2B5qxVlpVAiAdqctal8vwpmE7c%2BQyPOwqXwU0Ubr%2BCIQUauYUIjyoSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMhS%2Fg0zwlSKhH9RKKKtwDdrBc5adOebrtFXQGj95tuiqtvHFScw8yB0uWMyQ7Mv9zN3rlcuQ5wxtqyw450Spt05k4MtJ%2B6Sz1lZ46GLMKTGj2mxrAA3rHv2USMB87RSgrKoHwgw3DRy4aNmwFdVLpkx%2BeDQjb5hbjqpv552LLCEdCXoWIQcwS6ngHBD%2FOpK8qBAx%2FkLd%2FS1JpmXlitUEg%2BPHrtxhACGNN3cj8KjTKmtW%2FeUzOOvTXgi5I1zyHnvRaW2zRyuiiZRM6t4QzZniy68%2BR6k7zoSZySojnJ50DHfWv0fOr31IzS6TmCmidnOiCr7s6piRyOFLpOV9WDm1bngxjWziccvGxKZYqC8AEnwrBQouJ6b8scG5m19OVkPASZ19aRL4oWslfxvRXbjFuitVqXoHNpK4Hhsc2fJCQCHW4EEDfYT%2F8CR7xzJNqlAGw07yQuQbTZsT%2Fx28%2FjzvyVOjm2ljhv3YD%2F3pnOwFRqIaLVxu%2FZKfdTh2F4Z8VpDXJRDJhzU7TkxlqadmwaCb4zqlRAf2F3fiUhrOStOzCM9mbx%2Fzb8XqVclTchBrnmrc0aZ5KPDmG5uMiItrOSxWOaGfZ3TgxY60U3xJMziW3vndTkegB8C8cNSTb6RoOTdPCRIWyrtSMQPU1C78wrrmwwgY6pgHZxm6tXUP8HFhj%2BjwTRFD0ofMRIg%2B%2Fe13G4cHb2ORXs1a0bKUNHsaAdOEBj2MDvkuc088ZKVtciKqKPFFpCYqeeozNYqVgpbWcHWvWJ%2BKQEjTwJalZA5yYb2VT7JLpDW%2BsqgeeK8YkDQtL%2FPTAzISk%2FRonYSK3ZC6ZqIp%2Bcv4JddnY15cxcgvR%2B7oPniDvR1iQtyai1MCHPX3myi1e81Q6FrvUT5AU&X-Amz-Signature=64d9d3610f57e0d7e9f5477050aa7f836fcaea7bf9af13ca6cd98e59d75596cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXE4AHQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGSr5geEWjKMZDQRgNXE3sBYfL1P4PynaUlHC4b82%2FETAiEAlLPTZ47BUerhzL5zNipCPU%2B2R3wDmGbwK9AuDXVOgfIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJauBrvXwre3W8lUvSrcA%2BmdZBW6qn7p0CARheO5BxBP1hhqBuT44jSLWLOoDr7v2t0GyKAmiIFYLlAwjrB%2BOoCq5vpoHGp3ywMwMZS3877R4WjSi28%2BaiRtIogvipleI0Zg0Pwrju3lzkdM94AI9jTVnd0NFOYBu4pbjvt%2Fdh2gd9ikqSCZO88BDrZo%2FFbhP3UJ7nwbP6Kvpe%2B%2B4JGPhcuE%2BlU6LdW2TiCzQYvHx9FQ59UJLntVOxKh9ujS6zZEw6UIJfFyZXWowFv4e2%2Fl9t2YxE7I9o8dMbSclag3OaFpo0RWcFDMo9lMag3G%2Fojx2VrMVpyWpeeSQs5r87Jt7IXnclq86DlvBZMcTGsLEvhh3ersDTkeQyGhXWaniJIDru%2FIt9VplhjkjOtsOdqevbL5QeavijMaRxveaypITTlPK71BUl3l1%2FAvR32Rf%2FGWnPNoxwAIvAfCdAnpQ7ewMAm7xf4Gg8a%2FB74YJ1%2F5UOD%2BObN5y%2Bl%2FlGrTym9LvKY4pYqnuXa2rCdTKasYKXYQckRZN4UuOeqfGaRs742Vr1ZnFZVZYAC5%2BZ0oamJPEEW2PRnZkcRbIOTICEWjcOSYd9GCnZAQmO9RO8cNqZc0osqfYutsfeBdrkRWyRhJXyO1b5qoGB2BS8QAQk%2BtMIK2sMIGOqUBmHioFU0jJUp6dANOsk2xqqagEp07q3%2FTFOAHn3GZazeII9iA3KoPI3yaSY7TFw0rs8EV7e%2FI6NdT58qjuFQv7SOpkMicOqiwHltiFl8%2Bpnop9MEHiDUImVMJ1BxJtBIXudwc3iwV8hjH9BbYxxVcT3NjRrfke2h4yYadPcbwOW8IxDP57Sd0clfOsMLS%2FGeK12%2BbNQG7Z4ObNL%2BQHRUDmthQ9taa&X-Amz-Signature=68c866ba19b96125b8e0f31232e1f31fa25d76f7402848cf9376d89c1394a3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTBKKTT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBWzSyJ1sTYPlA5UMR7OsZg7FtOZtN3HNuHJcNjdtNYsAiEA3O4egQpmL37J3TDGSesD%2F4grDh2Ya8STQKZxFMDwWb8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAPhc25kaBAllO3%2BWSrcA%2FZY%2B9Zn51%2F%2Bo95HhkOlY6%2BLYTz9Q3TZe%2FNOnYThzJxsv%2Bkz7Uc5BF3FDJkNjJBz8bttnt2j1DP5o0fktrMO3LfDPPBp7vK9JpEMAKNVM3DRppQfKV42U3vxMx2tSPQLxGsH0htX%2FMUnNDryEXDbWTB%2BNmW3CZhNKiIRbrVWtXg8yAbiz4Ovn0vc%2F%2Fz0N7rjI4z6oTZEPQHoiYA5zrSLmMuB%2F%2BacIfdziNWBzXsz3mAzg7to5Nz0Ulmo8xxJGyzQPVfsrliymjfXL9E%2FbSwlhiCajxZiobBeKFOqgAN4a7bnWwSEgTnoMeN1f1af6bMxJiVwkkBO6n3i2myX%2BzmxE2oEMyERYpeQ9ivsUp%2BVVXI3NhuVauUXvHoZnZCtKE1ppB9nCvIMwnmNLZTXAJ0UejXs6hKmPkx6zwZGPNw8fAFEn8EDn%2FikMkbsEwWlObqRKffRDhMMqkc1EILwrtWZROuuR%2B7ZSqUHvYybwKsxaNQaAkP56Bvy3hIzR4%2FVteAEuBKTPgWulbqSPHJwtyqf1fAROE9paAHD0OKfilzRbhsWK7ReP22PZuts0bpc%2BX4oyQwm4v7HzjDbh6Thfa%2FQnOMIhvsFO1N2pS2P9I2QHPEwh2Yh6jNZDXG6EczDMICqsMIGOqUBlLTQp6QYZI%2BNsO3tZMFkYopjwpS8veYY97HzlqbRYG3BE0%2BkUmriuOe4beCtvO0QADqJtj7mGQY0sOH%2BUqYH6Z14dUoXXKwQYds%2FNzdXz9V7HhjigjRWZ8HpvIv8ZrmwLNoCimeU960k%2BCUBvfbsPTeJPSWzbS5PqHbJwJLMKhpmidkGiA7De0mGyx%2FM8L4uGOxyCIhqHMXVwfl02UKlQnzTCtcX&X-Amz-Signature=e1bb3cc7e62ddbfd5510a832bee4533149f8e23a9feab457040b2edc21f13fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
