---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=94b39d4bd351f41ec2903eb36668913924759c09456d02adf84e0d3fafc8395f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=5da26451deb83510b2c32c678f918e054b5bd53f895d0cbb2119f55f2d2f216f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=d1e968726f14e08d178d769c58ce4cdb6b0da4b4763d2426e93b6804e452562d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=ff4d9b095e20d4a3fedcba81f1d321d779294caa99f11270764b4e70edd6e480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=e57e0c4cbdb2e98edb3680f9bb7bcc766d18b52854c7abd90225aa2a027e806d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=01c101ae0b267f02e1adef0e1e469095797d7ab6eeded5bc2f224a50907addab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=f0dc1abc0881539e7086716b95b1ad883e91e209a1f45aec4a5b1c63941e492f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=474df5e41279048ddc32943f48da54dd87c04840f5d0af5779569c51df963667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=116825dd8ea32e330506288aa45034c3a3e909f45f715ff602542c024b6cd150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=1f8fec7ce654c755919e4987f480449d3e8cf57d6df97888fb9b052d43e6b3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=c8abdc52154abc9c1c42eaf80debccdbc79e5c5edc2cd09ab872cbf16452bce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=2e7d235ab375cfbc77ada125dce9ac8932445dfc0e4c49338f3dca339ab24f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=292f98772a80027b8eb71a3959cb14c07ba4378d2e537fb70d55ea7dd63c9cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR644NXN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCcHb9dzww45%2FZPFwvHGW1I91mELphWU%2BH1czNmGJNO8wIhAPabAFM9r%2BRrbTzR%2Bu%2BIrJEVgJyjpV85qBoj2AG7OaCMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAu1BP9MLX0ZxRhyAq3ANn3fY904tk9mdW0370JA1luJnQ5ZikiaTBoQW7WIEpCO0BFv1x7Kqujpv%2FXFK6%2FSWvYNuBALjmMQT%2Fbv19spRfLqRwKR13L3Dklu5nHY79W2WvpwH8%2B7duOlhi3GxzMyAql48MBxDNmAhhh47hPQfLG%2FFBbrCbLutwnlxny2vUdMOws%2B3kaOLmH8dwA7nqtwinE9FWT6%2ByGp0yrQX3JiCBofqcot2Uvp%2FPvvTWGkb3QAgNOOxEd4Hr6WMZA4PmzZQjiXUr2HE1p%2FnWhszM%2BlP5k6bGmnAkknJiwuIgxdWFKf5lJqsP5%2BZLH3JRCyVilL7%2Fspv9KuRWJA1X9uXt2Ll7UXEv8gsMBB6zyy53Qg2mNqfCOdUKdBftI8rNOBU3XE3QjMmYWHhtpL5lIHfGywKJPOSEGA%2FrMVc22P1K2XHLolTtg6EOz2c0br6IZLKfS7dp1G8f%2BaZlTv8SlJVNTQTCRm5ihfPl834pZb9LCvydDhXmR4KDtL2z%2Fw0Ipogj6wq8WBjeKeazeBE1CcVlDOkMxdQFh16wnt%2FW%2BfzGVhkihsMjtR0xO5LN5VEQ2nxYO87n36x%2BEiCvh5geeH7MNBAFRkvA6DicwNuhIad77Of%2FYmZlPmNyUGc1txNzsDD0ktnEBjqkAfQUZ2FA3NDzjgfQVBgYn2FvsFfuY3hHLTjNblXHgqbI9Pq8JPnECUbqQPiKTl8pcc7JuhhFbLS9GMFvTHyhzkeHBxZY2Rxny9YQ4Myql12MQ%2BOnObtdwYExYvWP0d9iFLuVQI8%2BfN%2BSphZyOCG2dqmbZkcI839uXqkXEmk2kM1Ip7vyG1jSk6fHgqznKHTMub33PQXavw1xZCk%2FSETv58BruI%2By&X-Amz-Signature=1a79a2c3270595b3e14493c1cc778b9d3a5486fa96c38bef599f7cbd14a5252d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
