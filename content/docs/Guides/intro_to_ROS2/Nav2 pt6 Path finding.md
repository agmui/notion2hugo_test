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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=50f445be5596fc94a764e01b15ecb7731a7d264e3ece4a441c3d3ccdc86d7948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=7f14b33af1f8240a13cefe1e7c43d6770e79cb63fffaecbdaba62d893d82a6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=53ae20d216bed4f61c180619c7d0a59108dcf74943e3a62ddc8a3824036f1497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=c16929190f9ba43a493d41ba647bd8f6b5df600158dcc948e4e6abd9261e617b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=a51c207cd10fe4fd7c76b00c75b2f22513fdc3eb62f7354e832bfa5836c6c9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=b1c1e8800c48170ddd8e3aeefda035fbc2acbcd0703fffeb51058b487a861335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=54089018991f67282eb24d079dfd733947ce04b78df09227583da4ea4b49121e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=40ccdc954dceae3ac97eb14216d4b85c542a721e60154af6a6c4aed777d68efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=a8ee2b1abd709a4406408181b69702ff3ed473d936d8c641223f4649d84e82d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=8d27a0f4eafb621d224985c31d0d29210b5cb82a1d2b83ad05f9d6efdf96a52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=38d1ccd05ff30d410eac26d74ba6d6ffc5c42f49ac1f083e7ce1335623f9f733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=8fc1d4bcfe1730c556417f777e6916a20e1f4e11a1a8a5bad1e41b68fd0a039d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJ2G4TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL0MkhkqP4WEu1pZFCWBWUFYoe%2BL6WMsLY%2BHFnbhT43wIgE%2FtZX7d8xjtvyB18BodvS%2B3npSGDBzM1hKGUUXPYKbgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FnjckUcHrJfRZ8yrcA0f1obzDJJoBMcjwtSuTUV%2BMMYiYKdI482mN%2FmRG0ydf8KAFxR2t97jWKofaLt461cW8Uu8Tox2ieNhg0uaKO60NpzoTtzAAbOf8FmF88DB9x2t%2BESRa1CRmrQOs0GyTxf0bze%2FDrHljLs7oxc6bsS5E6Pd1rIYNR8h2PLgpBalO0DIZAeLXP%2BVFFTm9wjEpGIVh6V8MtQ44WTBLHOScPw7pDUlXwld00r3m662tYgcWsdi5xgWe%2FZPbrjdrTb3x2L37USGvuDS5SXyzdfhkpKI1lXexv3NLS3hHCpdhR%2Bfv8rEF98P8yn%2BfQeBraN2gGrxp%2Bg5zleiu2kw5IsS5MXxftF%2FvAn0r7f%2BFHwyFqCOJKHkalahnyG7l2fIu%2BGF7CdtQxxiPRbPNmYbx5K3LoUHgH%2FFd4V7DKun%2BU2YT1id155UnKFRslsS6yY1N7suj82HcYuAWUynfJsQnIJ3tzAuTSg4v%2FTUBWZcbs7Y8rWLsY4qyoqtSXrGu7Db%2BLAvzAih5b1TVySDTKCS2ch%2F5rK62p%2FIQNSsUpW70k7MPU0CSjn48ZZUHLeOgm8SFK227x%2Filo48zrXJ4nDHOKWkRiBiuTeBF0VfvauXAOa0iWI06P2Rl2Z1tFL0pqjDLMMWY4sQGOqUBvWxwOF8tMfISfh62ieNdWRlSoYTRBrDoFMHy%2Fr5s%2FD9rSIZ4I0k%2BcyEx%2B1LYisV92boGk3He2QUYw8ihcv0XFHH6NyEmcgVcOr3W0Zbxjny1D%2FzYo6x78WgqngCSYG1mbSWCm8QOAvmj1%2Bv8pIwgAbKchC9fQNwrMROdOK2N2m3SzTsunCRJP1%2FvSA1CZQb6c5QFzKInTWyDLklPui9NB6STPcNC&X-Amz-Signature=3724ec670daac7b89aee7476f54d2658058502f09828cdbb6119cf783e07e3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
