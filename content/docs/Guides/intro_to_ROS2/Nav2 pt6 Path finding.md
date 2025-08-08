---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=216abc70bcc4dbbae411f7f7ba3f8fe1315bbb60d838f70c8eac2137419067d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=2a32dcbe82d3153f7cce714b8bbb780fa1e7bda8d63ffeb7e38ef8ed0814374b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=43bf97b9df29507a766ff982deb3e4249177fac14f88c36d6402c96f48bf5ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=7136b20ed799dd3b2da1382292c1377c53e600b4634a46e43ea21800e2024893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=7c990e3f7068de3a31e60219876789ab6da81b5d6534c370a0c89d490023a442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=caff0058e053b9949b1bb2229e5f86490b1fbac516958f6ad7602e7a516bf36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=b5b5ef5081af694c0806f45753db0f315da0d067395d9969ab874ae029172f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=170768c1a5d919532c174fd4d43fdfb16cb00af81abc59cecff780a383761c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=40375096b0b998e19d19d0783f91bef9e3e41c74dc75cb2d550aec25e51198b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=4ab40eebd4d5143ddf6c03cc9030ff8ecc8adb248d60ff8a6120efacd970a0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=b7c129dadcc2007b7c9275c6e0130a9966745d592abcded127e8b229fa5fb535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=e288423b0b82ab3d25660456018c75c8051fbf554f40c207e90255f6ccae074d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMGXM5U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDztbaFg9Q251j9UAYdejXUD4Au7L4A18%2FaWiRlK84iAQIgRqySqGmfNEd%2B%2BIqMIAqNfAtASTnz6M63iL%2BVt7Ar6D8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO6CL4FJfbrPMaPOSrcAz8MCgkuvhUc0SZWSTdx3w7EjSJw2MHGtgPTVttiZfOx6796uI3tqkAFj5foQFDlxxtcN%2FuzTyv2vJeV2xHSdYNo6iWb0CQvz6E8wWseFMHg3OhDsN4o8eTnbQxQfAaRnmTy1vmO8b5Gq73lczt1q9qPsLPsGGIgSi4bMWSh3fngalmOm%2B%2FQsz58WUFpZFTGN7Uhs9E%2FtFcrTCq87iNiJwY%2BPtG%2FsWjRk70eBpDiElbbQh2szs%2B0bd0WD%2B%2BHveJZlIG0FqBGYafgTfSGrQwDkLZezEomjnqkWSF5pjub6t5rOO%2F3U3W%2FLvzNFR76Yo369thBc8zF%2FdZu5GXdikGzyzGWxwKrR1MRQ%2F%2BVb8LkIK9X0RQMNDNNMBQ9%2BIycoKeFqRL9Aw%2Fgz%2Fc1SwQpseK0%2FS3Np6epocUWHMnynHTrCXZhG2l4ZyXLe2oh%2FABr6P1kFVeHEZ55w06jMA0izdIaKelAKefoyYUVahtd%2F9KWVws7UmZOxCqF9kSGsX5PXWxXTWY2re4u0IGDUjGmu23%2FxAdnZ4HMILXd4GsaKRt1zLHcJvl3mvVimlo8Ae9PGAIiXAofy%2B63j0GB5XPDJRXmrFhCSTQEhIsG84HjVLo7ajZyOviK6J0JQ89eO8urMKaT18QGOqUBf77ZrNTtsQEkDCguuhCmf3RT9ylqGo1%2Bs19i8WJX64GG11G4iG129pEtkqNIj8mLnM4u3%2F8LMkRzqCnGYduPjBgP2U8WvhnsEgZnfYHzPA4cerkNpNIgGizosNF3tmcsZR5D23%2BCE8iv%2FXYek9BJGqSS97c1Bb%2BfxwhXwv4mq9vQ00ZYDud0fpYhXTxSQSO7tszcMOMLuKGSDsUs0d3Bes2ewCQN&X-Amz-Signature=3844cd5f037b592a316e37dfd79d13c3f9a6b80d630d8217305c00ce6456ae7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
