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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=6e3ee55581dce99a1843aa698b0f19cdce8221d633a900f733c1d90ea1311d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=821da7b4cb052ba881e7a1bf08b02df94ef5f4376b95cd7835347178cf225751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=0d1f3f96f56d506f734fb3005fee53a04a4992d11cf85f8b13b63584bb273e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=7d48f4f0580e5e0b2e4f7dcdd513d4b920850eacbdf6fbe3b69f1fb75214eac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=f54f30fb34c3ff6b29034105efc689d028cef64a8754ee8976d1437283196534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=ea4333adf7e857024e6c048b922df7cfcef220c4aab43f92e65b8ae0ba93bc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=fa4ef0200a1d0dc3297603334da1b7807151fa1f0e1bdad72673c98e4d935af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=9d4e83e38485d9400de2017b77e8bdacd5f0e6762e365779f135dce14d9a9a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=5d1d300ab3ace8d6a9f8b51fe029cf93e1923874f79562d3349506fc7dc1ab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=3ca01a9332321f398cf9778e793e4a4a070d5b78b73bd3a413fcbdad0ab1748e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=d3973ee8161bb0b1aaba8ba124581e1c1cb96c5531af8eab6d66b5c52b7cdcfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=f86701d6d46df8ff7be94077b0fa0422740907ddd7cd0b5bea650a13a9b3c296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGZNTAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDgp1AUcPR5pRi9Ts%2FSsv%2B3iT9cPcadB3y823kPoZJ5wQIgC69tuMgc9yY3j%2BqVDN9xd2si32%2B3%2FPPN2S9ANB3xf4wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBXAol1B%2BLlcbMXukCrcAxWhkJ5SoMqWQMDlVUguo10ATCOtcR%2BbsNFvjTCzdljn8IQHpAWdpXl%2BAKrqLzxJlWB6IwnMByqDatKotlPthLU0ubixpk6Chm49Lu3jYOXM6ysYXUbvrZeZhYf11j%2BuuKnemTKf3pdu0oLH8Q8eoh%2FqUpysVyVdZSWqrWdRJ3byFRiAVe58JCbcx2xdwNUDuOnOWwlbcfjdJR1V9iTqIcvNiXwEMKLyvJrqGIgQSjoNahmhT3oR7lrarI3LB9oZH2TpWFswhe2UcFXplAUh84sWfsCBOowuOf5kqtZSRuCBRdQMa8JiQyDpyDzFlSKoST8rgiOjjPpG7bm62Drq5rREIV8odkFAbm4GJCI13kByeYlLMBH%2BHeVrsEM6BgWnJ%2BgzAnVM7LFp%2BDSLy6baNN%2BkdpalZuY2LUndzoLZpRFKQUzk7%2F5Msif5oi5UALh%2FGxpBocqwT1vJji5Dd4MQjJ%2F2a3O%2BH7Kjex%2FPKZqMII7uj%2FsKtDRBYnJZ9FoRX3B9BRLbS5F3rR6XWOG1mXlLhocTMB%2BgP7FwzOGB%2FmCiR%2F332FMC9uN%2B6bDhjxmwF7BHkWZ%2Fv7%2BjhjFr5%2F2suM5SWN5hNCEkFOF6s%2BThIP0J5DWfWi0gz0ao9DYMytHkMLiWvskGOqUBFhKzafkV2Z9J3PTZJii0vV0UXdPNpiTJdOR21DgrN%2BVSMgFoIwkqTHTSqsKeP7P8jjplIJMY%2FePquMxylrXdLNYfFgf1ISTHwPEqEvBHeaSgo6bg9n%2BH%2FGd8pzBzPeLrxgAgRSKKWHGFvXe5DJDMsbl6o7b%2FtGgoxJmYNPcDiBSZ7VNikhkod1wtgb3phS6Sw8Q3KHLHjcE8r%2BkK8whpvVCFUDaJ&X-Amz-Signature=222b3b105ef473b9f0f0077baaed41b8f59355543bbba30ecbc24e5f63c7da19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
