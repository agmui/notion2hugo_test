---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=8d6ce25167c8f3be46fe80cab9e342d9eba32826dfcbd27f5e573e0c36b07a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=8d44f7263fce214ab488fa407a38763794e193e984198407e4fe1edbe0c440b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=5e19285c03aa8eb11843968e896ad40bc4eebae7816e54d995b8a23ba634d87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=6a744b90d61e6323d9897870d53afe725b8aea0be03752991147894f166a4a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=1d1340acdf64bd9e78efff6c42750300d417b721fc980be5b3891f513eabe48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=3f2d51c1cb92637b3848233183ef0b91faf2ecf9be22ffd0ada66e26e18f9c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=4beef9fde2de489e06b97a9bfa7da37f75ae8980092e9f18744950938d4e6b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=2daba99fe4276e8a2ea2d7aaee40fbe1058a47fdf2c78725f3f261b47e1f58d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=4488c381bbc36f517a0e24520b35cabfe81e791293bf155fc3385b8dc8f0e6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=b3b4ccb46d8e44801222d6ecd77fd584f1b2c21c69d26d418f493d112fd88d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=6f57bbdd325e1404f5a57c6bada40e855b9a70fd7848eaa731b7673b3bfa4e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=759966b720cbd3631a5f9e3416819bc0d04b1ec3d0d02bd47b3f584820ca26df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5DK2CB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHVzY3%2FT49m8TxcmDVzc7rTXTDl2a5TyNUzjfQaDL%2BARAiBZxf2ryNGHp97tNGa%2FBKGg%2FXIffwx8WATnScmhDloagSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM53SRmBIMOeJao7KXKtwDtSXiVXHY88O2IGrX%2FxDWsDENsadSpskyWg%2Bl%2BsyzFWi32JYti7%2FTTx7tC8bGYm4ovi7QvoOPwGuQyrKJSO70yNWRuzGCQNDivAHFe%2FCg2YMMsTvNAHQUfFONNJy5T6kldeuktsKpa%2FvUchPS9Ay9fV%2B8BBnKgsXWVvQYw86HYqi%2FtqGh3YXz%2BWNPLETFO1VDmcwhSL%2BD7WgYtDfTGNZ2i24bdmPv%2Fp6RGng1Jg3hvxbOB8mJc8U1xyOeiE5SmR33Hr9qIgnKJ7yjFLDi55L7hzvt%2FT%2B59EG0eaHtustm2ulrOyYQNZ%2FbN1CsL98YE7LFan1hkjKT9ZnC%2BNkIvwGRToTxPQMcmXNQkA5FF52lYEWzYdbHiNKBfdrwVTr7A6fNyyxTErUcS1dfh%2BRodrdaUER033aV9VFFuFfsD8wqcx2CXaYOo7y1VnHkfVkXPg8au59Z0wxwe93RyuK8pK9pZNn%2B5LNqbV17lGLWFDCUsp8SkUhnYmhmvxxtuqsucRaRIHh2r9Ivd3swEPcbZGoGKI6bVlR0c9ihn%2FJQmNSPnIzK78y5PoDPEBGxc6WFShjPsWBkkS8Qw2XwbJPJXpjN85a7wG47OnIwS8D8V0y0CEwGlmyX%2Bqy0pVr0DJMw9sL4xAY6pgHJIvJ8zIO%2BMWPcLy91AjeWqoDFYYRg7OSHYwmEMjCMBF0YqPJNfHPEEe8NvSr2vc%2FC0MTA6jM3KtKE%2BKQWBMESNyibv7o%2FLFoR3CF5R9gnHb9uFUlFdeESSu%2Fl4rPDcfUJ3A0JdF3zQ0L9NGA75RIYfmka6cLNWQeF%2Feesuitu4CgBG4pNpTVZ0XDIlvYo94oZ2BPhiXjWopva3RPEwSy5xsLxz%2BB0&X-Amz-Signature=66f68f5e6040b7e77561c76143dd02aa710de8bf123dffbe9c0dfd39aa3253e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
