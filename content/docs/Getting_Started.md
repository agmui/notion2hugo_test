---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6ISFUS%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEqjnX0RR86gHvjgxd%2F1aLtS2uUB5gQ%2BHBMh%2B9ISTqnTAiEAhWvTSO7aPRwIAu25bjag9ESH0KSSWOJ3E5AMV8oV3cgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB43T3BleWc8hhugryrcA%2BHx5bpBDwN089pMUN6sXpGN91GP6bBSHStvdvtTnUMfjUwPFxKo8g6MaIbOMcMVW58u9C1%2F3rzbDsGh5WdqKooXbJdPQhbqd%2FraEGF6vA%2Fc1DJvh%2F0eYZUv3bHq%2B8Mlg%2BxHWKrjCnEdU6S%2F8wW6Cnhy0ZAu%2FyQCElg%2BQHxTCSxWt1wFhJtFVSPTj7Y4Fw%2FXsX081gOuH0APYwPuSD3qOcp4i4ccNK5LMaAqE9c0vm7vFQi6YOZ57rPi1psVKXccJsrdbgnSc9LGDGZ9DxGR55r5zzxRhzhx9TDWEzHGFRA5gW83xpJq7B83dtRHLn245IuGPZM6ecDgVsnMQUyZMQT5jR8fipw5WUpZepV%2BzneJEXNILtgVb7dcJXn3TUjCYxBvuVUtV0SN6dvOz37IgA23MPr5do3W8TvxhuVV08u1zSnFBjkqKDyHezO0aZ%2B1%2BmBwwlUZb%2BEAX4PzCQ83W9XtWdROJdOt0ILwdrdAhhlwrgGIMYeRVO%2Fa%2FGsfZFdKYA%2BJIKE6DkZRc%2BIlAmc%2FenRkGFSpKG8kxTC474jCzWOIbqckVTmxWga4QH%2FGciI%2FYEEclwEC16bKkotOQLEWsHC4QdEVqd66kO%2BFApGemw5aWa0CBabMG%2FKfmCcmMLHOj8wGOqUBn51KAQhxRr08%2FsgKF2PcedWXX3F5tm2mDIIVDVuCzZKVYk%2By%2F4A7egSdLlwd4LT42UiacQXak1hPImulDTxvrlgU7SbX3UOtn%2FGZvP%2FN4I7l7oto3yTvEhlwvSnH3rL%2Fbxu17axol44MFjJVQE29uD4ftfCdm85k8F5Ox2A85reITkJeNrizfVHMWaEWBk8%2FvIfCXX1QifR8MJnqkXwLWJFoo%2B4y&X-Amz-Signature=4ea14b0a255d28e7b8ac905ed2d6dad528631b0f0200a5b77b51c150f5c4a7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6ISFUS%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEqjnX0RR86gHvjgxd%2F1aLtS2uUB5gQ%2BHBMh%2B9ISTqnTAiEAhWvTSO7aPRwIAu25bjag9ESH0KSSWOJ3E5AMV8oV3cgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB43T3BleWc8hhugryrcA%2BHx5bpBDwN089pMUN6sXpGN91GP6bBSHStvdvtTnUMfjUwPFxKo8g6MaIbOMcMVW58u9C1%2F3rzbDsGh5WdqKooXbJdPQhbqd%2FraEGF6vA%2Fc1DJvh%2F0eYZUv3bHq%2B8Mlg%2BxHWKrjCnEdU6S%2F8wW6Cnhy0ZAu%2FyQCElg%2BQHxTCSxWt1wFhJtFVSPTj7Y4Fw%2FXsX081gOuH0APYwPuSD3qOcp4i4ccNK5LMaAqE9c0vm7vFQi6YOZ57rPi1psVKXccJsrdbgnSc9LGDGZ9DxGR55r5zzxRhzhx9TDWEzHGFRA5gW83xpJq7B83dtRHLn245IuGPZM6ecDgVsnMQUyZMQT5jR8fipw5WUpZepV%2BzneJEXNILtgVb7dcJXn3TUjCYxBvuVUtV0SN6dvOz37IgA23MPr5do3W8TvxhuVV08u1zSnFBjkqKDyHezO0aZ%2B1%2BmBwwlUZb%2BEAX4PzCQ83W9XtWdROJdOt0ILwdrdAhhlwrgGIMYeRVO%2Fa%2FGsfZFdKYA%2BJIKE6DkZRc%2BIlAmc%2FenRkGFSpKG8kxTC474jCzWOIbqckVTmxWga4QH%2FGciI%2FYEEclwEC16bKkotOQLEWsHC4QdEVqd66kO%2BFApGemw5aWa0CBabMG%2FKfmCcmMLHOj8wGOqUBn51KAQhxRr08%2FsgKF2PcedWXX3F5tm2mDIIVDVuCzZKVYk%2By%2F4A7egSdLlwd4LT42UiacQXak1hPImulDTxvrlgU7SbX3UOtn%2FGZvP%2FN4I7l7oto3yTvEhlwvSnH3rL%2Fbxu17axol44MFjJVQE29uD4ftfCdm85k8F5Ox2A85reITkJeNrizfVHMWaEWBk8%2FvIfCXX1QifR8MJnqkXwLWJFoo%2B4y&X-Amz-Signature=5f8101121469ca4dd9b5bf695bfb8637446ee6cde0dde2cae9e01e6df61d4d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6ISFUS%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEqjnX0RR86gHvjgxd%2F1aLtS2uUB5gQ%2BHBMh%2B9ISTqnTAiEAhWvTSO7aPRwIAu25bjag9ESH0KSSWOJ3E5AMV8oV3cgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB43T3BleWc8hhugryrcA%2BHx5bpBDwN089pMUN6sXpGN91GP6bBSHStvdvtTnUMfjUwPFxKo8g6MaIbOMcMVW58u9C1%2F3rzbDsGh5WdqKooXbJdPQhbqd%2FraEGF6vA%2Fc1DJvh%2F0eYZUv3bHq%2B8Mlg%2BxHWKrjCnEdU6S%2F8wW6Cnhy0ZAu%2FyQCElg%2BQHxTCSxWt1wFhJtFVSPTj7Y4Fw%2FXsX081gOuH0APYwPuSD3qOcp4i4ccNK5LMaAqE9c0vm7vFQi6YOZ57rPi1psVKXccJsrdbgnSc9LGDGZ9DxGR55r5zzxRhzhx9TDWEzHGFRA5gW83xpJq7B83dtRHLn245IuGPZM6ecDgVsnMQUyZMQT5jR8fipw5WUpZepV%2BzneJEXNILtgVb7dcJXn3TUjCYxBvuVUtV0SN6dvOz37IgA23MPr5do3W8TvxhuVV08u1zSnFBjkqKDyHezO0aZ%2B1%2BmBwwlUZb%2BEAX4PzCQ83W9XtWdROJdOt0ILwdrdAhhlwrgGIMYeRVO%2Fa%2FGsfZFdKYA%2BJIKE6DkZRc%2BIlAmc%2FenRkGFSpKG8kxTC474jCzWOIbqckVTmxWga4QH%2FGciI%2FYEEclwEC16bKkotOQLEWsHC4QdEVqd66kO%2BFApGemw5aWa0CBabMG%2FKfmCcmMLHOj8wGOqUBn51KAQhxRr08%2FsgKF2PcedWXX3F5tm2mDIIVDVuCzZKVYk%2By%2F4A7egSdLlwd4LT42UiacQXak1hPImulDTxvrlgU7SbX3UOtn%2FGZvP%2FN4I7l7oto3yTvEhlwvSnH3rL%2Fbxu17axol44MFjJVQE29uD4ftfCdm85k8F5Ox2A85reITkJeNrizfVHMWaEWBk8%2FvIfCXX1QifR8MJnqkXwLWJFoo%2B4y&X-Amz-Signature=e8d7bb34360f9223eb3d1b798e5e7a0e79600e5f8d78506bd07f7dc38655f136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WRCOVS%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDd7iQM%2BzaB0W78dEPU1b5uFnP2u%2F1DtvofO%2B%2Bg3k7VRAiATPa44FM8X%2F3e3iuDFLdcfh4nFPBt%2FiffLZA9Z2Nzc7yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMgY8Y7wydvcEJ69FIKtwDbU8rrMoGxhoH7jGFGnTbx22MTDiUoyP8VYU2xdbl%2F6MLdJ7xxSh70pu9BKaTDWNw4Kt3liCDqg%2B1n7ifUPS6HEYeMiZBaBGZ52FIVv49yEtybwYTtwsfPefcBLuo%2BcokRiDkcWzmx0YIuqknj7jmIFlNIc1fESgDOr9npeQkbHSP%2BfPqb71pgbEG%2FQFzA6Wcla%2FjWOQ%2FvmcULEuZ51KwU44w%2BwblzeAaqLKHQqUV0lIIYb%2Bzm7hGMpkOtMHfRZV0ufaNPJW%2Be%2BoDgDgOqngSZu8ygzQ3yMekO%2BtffMDEhxVzj0aG3S%2FYp6Jb9Nx6%2Fwr3L8SXBryVp97NCaeheYAngQu9%2FS%2FFTWC1iz2Ew0OtOLk2Nc9%2F7s%2BF8ehhZ%2FtQTAZOo8XD%2FDnYYkwwhn8FRNOaaY5aPEGfY%2Fa7rz%2Fi9AZMsLRP6yxBrj5hb2YKLqmhMciwQNeomVTPI7o60tkSEpGltyFX1GUFRQOv7rBbq8nVcFq5XKIAWzP1jEPW%2BUWEy5TXwS45yvSGqAs%2BS6DU%2BVyojeWohPiK6blq0nSm4nbvekpm%2F49KW3fp7%2F79OID4ImBahIL9fKMvSD3mvX%2BSImLZMGyEwDVfzUQjPlMs5dgoNb8vqw%2BnBTrFSSjlwEUwps6PzAY6pgFwN%2FNsnTj%2Bm6x5oz5BWUPl%2Frdn84a0Zo4kZe2iAetKpHFBYLF%2FgxAVs9VOXjd8msBjqO6D7WMy2JfA174gPg1jwXQ%2FC4czXoKdARGHfXqBjWGciXJb3pu8v3JWdd6zy4zQgGt6DliBigcmJsU%2FeNElhY%2Bqd4nKhFD4xjCk7LxVCG%2FXtG3FIpj4Iftq5lSfa%2BEj2aAosNb%2Fm%2BrJxK1YcF8Z3NxqM54B&X-Amz-Signature=baae00ae50beed32a26ccb34a2d71bfbb27ec4608dc1b7ceca06635ccbc1399e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQ4KAEC%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICZgDC1sTXLN4zdc49K0p40Q%2BXzgKOmepePe8Dhr7wJSAiEA0Hq700HM7gyzkAgv%2FgWJSQ7rNKGoZdY595R%2Fx5NGnZIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNCmWlS8t14Yzgns5SrcAwgYZg0sAvubYxLHepXuHZr70Mt%2BV6XEHZMzY%2FFMLMNdBNYCCDNKwMJ2GzrwBiaGHXsYa0GFJAfzek%2BgUC%2FkosmPi7IXUGEvsrBiahzXC%2F3yjUvEQYKBQf%2FRvREvQWenLERvtvYA9ITVrukgqe4qFY3nM1PgSajmxH%2FYVQrdmYtFLl0IcDp24%2BG26DBf3KbAz919YYS1ldZO3W8n9vNVfkVEIhZKFf%2FE2gHzgdhsV21qFeOp%2BX61R8l6sQxClg2bWgOV36G5AlcMqeO%2FETj%2B%2BRPHsFrIYpmf5pqSd6fCdd6GJMxmIMD5l6%2FukzihKUvbfz53F3rM3mWtgvN5w%2FGQuRQOkffG3PTPqoMYNBo9dzTHgyFPosZSrq70OqYnbXnW%2BEUg%2F6FkOXGMt99HlpTuddkKY4xO7u5OwBv4OiJe0uTgPh1iJkhsQlNjWgyDYFFo62nbQZxMQvOrE3cZ0so%2FxSUFdmjWtyXjFJLU6C8Aqlod1JUhfKh%2Fbo3yi2zdI6GorNdJDYrsx5I4k2RCDqoMVkzXwa6zrtV3aQ9vmj3%2FeWwsKkbJT7D%2FR8b9ZoMa0gcF%2Bm0WT1RM50%2FWj3NRhwPj9K7MEhrIZsgF6DzipHq8TiuR3FRIQrG8GJsAju5RMLLOj8wGOqUBHNzben%2FCJ%2BmUWkUAwJNexaSMvW7SqCS5ffbQJbWSE5AczEmIIDsyBtYEvGDGN8DwCaJBfUOOnY4bSsJYle1rkEoDPLMxNeYcqfxYUK%2F26Ur5BMSPhX1AFS3avV29j0b8FhN8XGFmM%2FHX8i72kmPSL%2FgcjdP0oZI4Ss8SdZkVNRJysI%2F3KMNe2Pprqnwp523MO2m9Ev0MpA7N%2FvFNQ4fMDWH8rZDH&X-Amz-Signature=930dfccacb254e2492884b6c1412ccf6296dcbf5afc411a463fe0ffabd64b8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6ISFUS%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEqjnX0RR86gHvjgxd%2F1aLtS2uUB5gQ%2BHBMh%2B9ISTqnTAiEAhWvTSO7aPRwIAu25bjag9ESH0KSSWOJ3E5AMV8oV3cgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDB43T3BleWc8hhugryrcA%2BHx5bpBDwN089pMUN6sXpGN91GP6bBSHStvdvtTnUMfjUwPFxKo8g6MaIbOMcMVW58u9C1%2F3rzbDsGh5WdqKooXbJdPQhbqd%2FraEGF6vA%2Fc1DJvh%2F0eYZUv3bHq%2B8Mlg%2BxHWKrjCnEdU6S%2F8wW6Cnhy0ZAu%2FyQCElg%2BQHxTCSxWt1wFhJtFVSPTj7Y4Fw%2FXsX081gOuH0APYwPuSD3qOcp4i4ccNK5LMaAqE9c0vm7vFQi6YOZ57rPi1psVKXccJsrdbgnSc9LGDGZ9DxGR55r5zzxRhzhx9TDWEzHGFRA5gW83xpJq7B83dtRHLn245IuGPZM6ecDgVsnMQUyZMQT5jR8fipw5WUpZepV%2BzneJEXNILtgVb7dcJXn3TUjCYxBvuVUtV0SN6dvOz37IgA23MPr5do3W8TvxhuVV08u1zSnFBjkqKDyHezO0aZ%2B1%2BmBwwlUZb%2BEAX4PzCQ83W9XtWdROJdOt0ILwdrdAhhlwrgGIMYeRVO%2Fa%2FGsfZFdKYA%2BJIKE6DkZRc%2BIlAmc%2FenRkGFSpKG8kxTC474jCzWOIbqckVTmxWga4QH%2FGciI%2FYEEclwEC16bKkotOQLEWsHC4QdEVqd66kO%2BFApGemw5aWa0CBabMG%2FKfmCcmMLHOj8wGOqUBn51KAQhxRr08%2FsgKF2PcedWXX3F5tm2mDIIVDVuCzZKVYk%2By%2F4A7egSdLlwd4LT42UiacQXak1hPImulDTxvrlgU7SbX3UOtn%2FGZvP%2FN4I7l7oto3yTvEhlwvSnH3rL%2Fbxu17axol44MFjJVQE29uD4ftfCdm85k8F5Ox2A85reITkJeNrizfVHMWaEWBk8%2FvIfCXX1QifR8MJnqkXwLWJFoo%2B4y&X-Amz-Signature=bae67431715f3d7e3d18e8eb394c4b78e44124df97198788512352e85677be1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
