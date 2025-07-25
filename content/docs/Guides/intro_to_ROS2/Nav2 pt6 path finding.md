---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PK2TI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDywVYVTaFgM28T3O3XykxNTBEGUW0OFSEd%2Fmk82ZyjAwIgCoCFEdBpahWg3HRHC7enVfOzFgWzHn6HcI3yF1LhAToq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB6hnBaWhLvP1gKXgSrcA1f%2FN0t3sSQ9BxTzqNwAF6DH6UQGIP6vFmK9IuAx5XuwRe%2BHMSxvs%2FkVDPKP1vpUVE5COMoHbPkangApQw3gJ9X3XNdw6hA%2BdBRenjzsMGH8NgLVMbgVV4OZNREHiWBxFU%2FET3mjKKbwpsUmBjV2lHm5cyI6DQE97R%2FNq07dfANvaKBs0%2B6r0M9MaTkb%2Bp1WDPaQbDSLJNiX3WipGHeDOg9uVM9%2B6XnrgqTCFt%2FawDdYeV1guqYM2PBC%2BDreKTqV1IaK1dIE%2BtMoZqQU4BNUMCkSr2JRf2LYwmC1Osuxu1URaCk6%2F9NFDZUSs2%2BxcHbRhvSdsiS4QNX8YXzm1eskR5xlyQGALYkdUQdCDlTuX3ezMDrDo48X7GWrbyfLqeph4rIWoNNl%2B517FTRqOjanywCgUvBGgjKdiV7OSZcyckHukcpnaVhtnx8%2FaLpAsSlerQrl3XewzGVOTn%2BcN0LhubWqR%2FmC5%2FmKe%2BP%2BdaMBjXWIQFgY9Eq%2BGsTW%2BysGoor65b9yuFINssrFQ3YvXA2GURkF5URrcfepY5JGsFSm%2F50bFuk6Y%2FuaFVGQN7Wpl5%2FFA%2BlueP4SfhPhzK%2BHBR08LvOwgsAMzFT4hqYNeQ1cX69JXRGavb31mTdqfr10MJy8jcQGOqUBBtJIB2gPWQEw87xcdEptrl7mXen%2Bt0Dnwie9YQPP9p0L7Wu93iQ2U%2BA3MN08nJ2odJ79uvuvomf83dBdyPGfhamIkG%2FDGWJOAsRit0Vyf7u3Qob3hE4miMxmvmIf94pWxd5KJLCx1yPjmp3zwU9XrT2s6ZOExbvJUUIIt2R%2BN1VfC%2Bie1QEmmmLM%2BbBM6fsbPzwq%2F3zpKYjAwhT4J8GMiuyVhk1a&X-Amz-Signature=3ffe2ab7efa70a7e7afe32f53122072e81959d11e3068107861f6e19ab421427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PK2TI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDywVYVTaFgM28T3O3XykxNTBEGUW0OFSEd%2Fmk82ZyjAwIgCoCFEdBpahWg3HRHC7enVfOzFgWzHn6HcI3yF1LhAToq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB6hnBaWhLvP1gKXgSrcA1f%2FN0t3sSQ9BxTzqNwAF6DH6UQGIP6vFmK9IuAx5XuwRe%2BHMSxvs%2FkVDPKP1vpUVE5COMoHbPkangApQw3gJ9X3XNdw6hA%2BdBRenjzsMGH8NgLVMbgVV4OZNREHiWBxFU%2FET3mjKKbwpsUmBjV2lHm5cyI6DQE97R%2FNq07dfANvaKBs0%2B6r0M9MaTkb%2Bp1WDPaQbDSLJNiX3WipGHeDOg9uVM9%2B6XnrgqTCFt%2FawDdYeV1guqYM2PBC%2BDreKTqV1IaK1dIE%2BtMoZqQU4BNUMCkSr2JRf2LYwmC1Osuxu1URaCk6%2F9NFDZUSs2%2BxcHbRhvSdsiS4QNX8YXzm1eskR5xlyQGALYkdUQdCDlTuX3ezMDrDo48X7GWrbyfLqeph4rIWoNNl%2B517FTRqOjanywCgUvBGgjKdiV7OSZcyckHukcpnaVhtnx8%2FaLpAsSlerQrl3XewzGVOTn%2BcN0LhubWqR%2FmC5%2FmKe%2BP%2BdaMBjXWIQFgY9Eq%2BGsTW%2BysGoor65b9yuFINssrFQ3YvXA2GURkF5URrcfepY5JGsFSm%2F50bFuk6Y%2FuaFVGQN7Wpl5%2FFA%2BlueP4SfhPhzK%2BHBR08LvOwgsAMzFT4hqYNeQ1cX69JXRGavb31mTdqfr10MJy8jcQGOqUBBtJIB2gPWQEw87xcdEptrl7mXen%2Bt0Dnwie9YQPP9p0L7Wu93iQ2U%2BA3MN08nJ2odJ79uvuvomf83dBdyPGfhamIkG%2FDGWJOAsRit0Vyf7u3Qob3hE4miMxmvmIf94pWxd5KJLCx1yPjmp3zwU9XrT2s6ZOExbvJUUIIt2R%2BN1VfC%2Bie1QEmmmLM%2BbBM6fsbPzwq%2F3zpKYjAwhT4J8GMiuyVhk1a&X-Amz-Signature=eb16914c0856feeca8a8f908d7ff61245976a4697c15803a3400baf8ef8c62ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PK2TI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDywVYVTaFgM28T3O3XykxNTBEGUW0OFSEd%2Fmk82ZyjAwIgCoCFEdBpahWg3HRHC7enVfOzFgWzHn6HcI3yF1LhAToq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB6hnBaWhLvP1gKXgSrcA1f%2FN0t3sSQ9BxTzqNwAF6DH6UQGIP6vFmK9IuAx5XuwRe%2BHMSxvs%2FkVDPKP1vpUVE5COMoHbPkangApQw3gJ9X3XNdw6hA%2BdBRenjzsMGH8NgLVMbgVV4OZNREHiWBxFU%2FET3mjKKbwpsUmBjV2lHm5cyI6DQE97R%2FNq07dfANvaKBs0%2B6r0M9MaTkb%2Bp1WDPaQbDSLJNiX3WipGHeDOg9uVM9%2B6XnrgqTCFt%2FawDdYeV1guqYM2PBC%2BDreKTqV1IaK1dIE%2BtMoZqQU4BNUMCkSr2JRf2LYwmC1Osuxu1URaCk6%2F9NFDZUSs2%2BxcHbRhvSdsiS4QNX8YXzm1eskR5xlyQGALYkdUQdCDlTuX3ezMDrDo48X7GWrbyfLqeph4rIWoNNl%2B517FTRqOjanywCgUvBGgjKdiV7OSZcyckHukcpnaVhtnx8%2FaLpAsSlerQrl3XewzGVOTn%2BcN0LhubWqR%2FmC5%2FmKe%2BP%2BdaMBjXWIQFgY9Eq%2BGsTW%2BysGoor65b9yuFINssrFQ3YvXA2GURkF5URrcfepY5JGsFSm%2F50bFuk6Y%2FuaFVGQN7Wpl5%2FFA%2BlueP4SfhPhzK%2BHBR08LvOwgsAMzFT4hqYNeQ1cX69JXRGavb31mTdqfr10MJy8jcQGOqUBBtJIB2gPWQEw87xcdEptrl7mXen%2Bt0Dnwie9YQPP9p0L7Wu93iQ2U%2BA3MN08nJ2odJ79uvuvomf83dBdyPGfhamIkG%2FDGWJOAsRit0Vyf7u3Qob3hE4miMxmvmIf94pWxd5KJLCx1yPjmp3zwU9XrT2s6ZOExbvJUUIIt2R%2BN1VfC%2Bie1QEmmmLM%2BbBM6fsbPzwq%2F3zpKYjAwhT4J8GMiuyVhk1a&X-Amz-Signature=1ac4bb01ed4663f4858ba018042efd757db21d8a10290f038308f8cb56c2efa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PK2TI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDywVYVTaFgM28T3O3XykxNTBEGUW0OFSEd%2Fmk82ZyjAwIgCoCFEdBpahWg3HRHC7enVfOzFgWzHn6HcI3yF1LhAToq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB6hnBaWhLvP1gKXgSrcA1f%2FN0t3sSQ9BxTzqNwAF6DH6UQGIP6vFmK9IuAx5XuwRe%2BHMSxvs%2FkVDPKP1vpUVE5COMoHbPkangApQw3gJ9X3XNdw6hA%2BdBRenjzsMGH8NgLVMbgVV4OZNREHiWBxFU%2FET3mjKKbwpsUmBjV2lHm5cyI6DQE97R%2FNq07dfANvaKBs0%2B6r0M9MaTkb%2Bp1WDPaQbDSLJNiX3WipGHeDOg9uVM9%2B6XnrgqTCFt%2FawDdYeV1guqYM2PBC%2BDreKTqV1IaK1dIE%2BtMoZqQU4BNUMCkSr2JRf2LYwmC1Osuxu1URaCk6%2F9NFDZUSs2%2BxcHbRhvSdsiS4QNX8YXzm1eskR5xlyQGALYkdUQdCDlTuX3ezMDrDo48X7GWrbyfLqeph4rIWoNNl%2B517FTRqOjanywCgUvBGgjKdiV7OSZcyckHukcpnaVhtnx8%2FaLpAsSlerQrl3XewzGVOTn%2BcN0LhubWqR%2FmC5%2FmKe%2BP%2BdaMBjXWIQFgY9Eq%2BGsTW%2BysGoor65b9yuFINssrFQ3YvXA2GURkF5URrcfepY5JGsFSm%2F50bFuk6Y%2FuaFVGQN7Wpl5%2FFA%2BlueP4SfhPhzK%2BHBR08LvOwgsAMzFT4hqYNeQ1cX69JXRGavb31mTdqfr10MJy8jcQGOqUBBtJIB2gPWQEw87xcdEptrl7mXen%2Bt0Dnwie9YQPP9p0L7Wu93iQ2U%2BA3MN08nJ2odJ79uvuvomf83dBdyPGfhamIkG%2FDGWJOAsRit0Vyf7u3Qob3hE4miMxmvmIf94pWxd5KJLCx1yPjmp3zwU9XrT2s6ZOExbvJUUIIt2R%2BN1VfC%2Bie1QEmmmLM%2BbBM6fsbPzwq%2F3zpKYjAwhT4J8GMiuyVhk1a&X-Amz-Signature=5cc76938417ef0e4a1324eb609ee29d44544f9caa363a5457939501a0a88c818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PK2TI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDywVYVTaFgM28T3O3XykxNTBEGUW0OFSEd%2Fmk82ZyjAwIgCoCFEdBpahWg3HRHC7enVfOzFgWzHn6HcI3yF1LhAToq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB6hnBaWhLvP1gKXgSrcA1f%2FN0t3sSQ9BxTzqNwAF6DH6UQGIP6vFmK9IuAx5XuwRe%2BHMSxvs%2FkVDPKP1vpUVE5COMoHbPkangApQw3gJ9X3XNdw6hA%2BdBRenjzsMGH8NgLVMbgVV4OZNREHiWBxFU%2FET3mjKKbwpsUmBjV2lHm5cyI6DQE97R%2FNq07dfANvaKBs0%2B6r0M9MaTkb%2Bp1WDPaQbDSLJNiX3WipGHeDOg9uVM9%2B6XnrgqTCFt%2FawDdYeV1guqYM2PBC%2BDreKTqV1IaK1dIE%2BtMoZqQU4BNUMCkSr2JRf2LYwmC1Osuxu1URaCk6%2F9NFDZUSs2%2BxcHbRhvSdsiS4QNX8YXzm1eskR5xlyQGALYkdUQdCDlTuX3ezMDrDo48X7GWrbyfLqeph4rIWoNNl%2B517FTRqOjanywCgUvBGgjKdiV7OSZcyckHukcpnaVhtnx8%2FaLpAsSlerQrl3XewzGVOTn%2BcN0LhubWqR%2FmC5%2FmKe%2BP%2BdaMBjXWIQFgY9Eq%2BGsTW%2BysGoor65b9yuFINssrFQ3YvXA2GURkF5URrcfepY5JGsFSm%2F50bFuk6Y%2FuaFVGQN7Wpl5%2FFA%2BlueP4SfhPhzK%2BHBR08LvOwgsAMzFT4hqYNeQ1cX69JXRGavb31mTdqfr10MJy8jcQGOqUBBtJIB2gPWQEw87xcdEptrl7mXen%2Bt0Dnwie9YQPP9p0L7Wu93iQ2U%2BA3MN08nJ2odJ79uvuvomf83dBdyPGfhamIkG%2FDGWJOAsRit0Vyf7u3Qob3hE4miMxmvmIf94pWxd5KJLCx1yPjmp3zwU9XrT2s6ZOExbvJUUIIt2R%2BN1VfC%2Bie1QEmmmLM%2BbBM6fsbPzwq%2F3zpKYjAwhT4J8GMiuyVhk1a&X-Amz-Signature=97720e5600650868ae20405c08f9464fdeea301b6306b1caebdd64677f8ce2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PK2TI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDywVYVTaFgM28T3O3XykxNTBEGUW0OFSEd%2Fmk82ZyjAwIgCoCFEdBpahWg3HRHC7enVfOzFgWzHn6HcI3yF1LhAToq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB6hnBaWhLvP1gKXgSrcA1f%2FN0t3sSQ9BxTzqNwAF6DH6UQGIP6vFmK9IuAx5XuwRe%2BHMSxvs%2FkVDPKP1vpUVE5COMoHbPkangApQw3gJ9X3XNdw6hA%2BdBRenjzsMGH8NgLVMbgVV4OZNREHiWBxFU%2FET3mjKKbwpsUmBjV2lHm5cyI6DQE97R%2FNq07dfANvaKBs0%2B6r0M9MaTkb%2Bp1WDPaQbDSLJNiX3WipGHeDOg9uVM9%2B6XnrgqTCFt%2FawDdYeV1guqYM2PBC%2BDreKTqV1IaK1dIE%2BtMoZqQU4BNUMCkSr2JRf2LYwmC1Osuxu1URaCk6%2F9NFDZUSs2%2BxcHbRhvSdsiS4QNX8YXzm1eskR5xlyQGALYkdUQdCDlTuX3ezMDrDo48X7GWrbyfLqeph4rIWoNNl%2B517FTRqOjanywCgUvBGgjKdiV7OSZcyckHukcpnaVhtnx8%2FaLpAsSlerQrl3XewzGVOTn%2BcN0LhubWqR%2FmC5%2FmKe%2BP%2BdaMBjXWIQFgY9Eq%2BGsTW%2BysGoor65b9yuFINssrFQ3YvXA2GURkF5URrcfepY5JGsFSm%2F50bFuk6Y%2FuaFVGQN7Wpl5%2FFA%2BlueP4SfhPhzK%2BHBR08LvOwgsAMzFT4hqYNeQ1cX69JXRGavb31mTdqfr10MJy8jcQGOqUBBtJIB2gPWQEw87xcdEptrl7mXen%2Bt0Dnwie9YQPP9p0L7Wu93iQ2U%2BA3MN08nJ2odJ79uvuvomf83dBdyPGfhamIkG%2FDGWJOAsRit0Vyf7u3Qob3hE4miMxmvmIf94pWxd5KJLCx1yPjmp3zwU9XrT2s6ZOExbvJUUIIt2R%2BN1VfC%2Bie1QEmmmLM%2BbBM6fsbPzwq%2F3zpKYjAwhT4J8GMiuyVhk1a&X-Amz-Signature=983bdc9368e29ce98a47b96cc975947b9952fa4964aac84917e17e47f7a6ddf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
