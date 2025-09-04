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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=2d86da36dc8cf120d960c3a3d00add803a74f1e0940f5b84f1915e5ef8ea253e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=a4861d38f9ff3b4ae7710aaeafebb5ddf5976861eefc788176e5ca656dd3f797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=cf657b97d82438f0495a4727228a9a3b21c028fbafdef7d0a87777858df78f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=be39c75de278ee2dad7f1469ca262d547ea2d090c390fd12bf2fc262688f5708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=abddc107a8bd47cecc3c5af02ab5a3889882738d31d1285a96eca7a80a02c96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=ee6cc72148ab4c7cdb4004fe6aa1bb81f92018145470c31d6156f38a0213de12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=82acbc980b2f5c2644547c1cea4c6dc74db0918cfbdb654ed8437ceb95728234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=09d6b8a2a1f69f62baa71f42a4c43fcf96d2bd9e2edd46f2255333365c0c61f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=22d45581e7831774468182538ea8731453e04d3f7e76c2feb3018cf7fc02edc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=b1a6e6a85e97d1fcb7ef96813ac0b5b7b1d4715530ea09de6f33eb94c282c5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=2aa40acb4de04dd7fff8dc327c9eb69ad500b8b95df1415e4d39f37c7f307d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=e86875d4d542790873dfd33e595b37535daf09266e34372a3ec268100e30a957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOHWTWV%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYuCdVEvgCYX8x4TxwBPEmntPijGRcIs6oxXVzJ4LlmAiEAyPDV%2BX%2FbY6Bi9oSS%2BIHwf2zu8aEW26aJDDtlhaV0r6Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMcLTYaePqI6quWR4ircA8h74c5SGhS1OLl%2BIZaNlYNuJlBZxHiwjupykfeLQAgBNd%2B5EttZjfN%2BQEF70Vsjb17BN9cf7%2BlqftrXkbQBMhRm9Z8opx00W7YAk4KS%2BK4LoFL3YeFkpdBR7hNESmg7NziXSOypm9dmskzlF37wrfxXn0wtOb7Ka6sh9ARgZsgkae41sQEOb3phIGW1UVwPxV%2F5hdlXiVDTGWCMyD7m9FhPLnJ%2B6NES8FVhFvWb7lU6viurwY0gGPyVfhR1zYnF4kRCFd6891isdajteUSbnxkuWyIoCBQnBVv7HcCrH%2FOOhcApwH%2BazNRGQRUNw8LPHIPXAXEqk%2FRMg6m2C2Kp965j0i3kzpfWrgfTiJZH4riMABj8eaLPdWIR3eWuZ2PNZIActL%2FnvydmWPkj%2BHFefD47nVRpnL92OfPtT%2FMic9yl7Vie3OaaR%2F31c3bEEx8zyE39ntiqwf4%2BhjKZJgx1u5osVzjV27j0%2B4wo2F2pLmsI8%2FCxmWrhzSErD%2B6iI4viAYBTfRM4mPJWiEDt08mrYa4ECgmdXrdf9CjHSTBnncs8mUlcP8Uj1YHfORQWLHh0W3ELFm9ZE2P3SpfsomQxtd2dzE9FusUviqcOKrSrR4O1eOpFMbMhAFmAu5vzMKq248UGOqUBplpI2v5UFGMfhTl3H2JX6sEzbLcJdOi3y%2FpWZNRpTLUagXgYSJDpM5Kn74pPanI%2F1oJ%2BEuszb3NidLccaF7FAn1DJdvuw109gdLLKxfgQOHRWjRsztlSSq9lElDxhs9gFeQ6607%2Fx%2FTbO3PnftO9ckW6jGbrJSD4kgztPbm2QgQ4RRDuRBx7i%2BxKcNzKX5YGHa80iZ8fp0syf6jLTrO%2Fls%2BV%2B3B1&X-Amz-Signature=058fd81731df408ec244b6c4f6debde23526bd66cd0c548a702ffc5e684c62c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
