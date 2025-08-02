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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=081a8b40e540b8f3fb5675ab106de3a9df5bbc1e47f06455edd5d90884b79bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=46f750a665b6c5b4cb6baed272e4eca8c357c75e5359ae64d8ac1c07d4c7e0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=2dee73b49f71c8977cbb9862d837bcbc3bc3904872b315044f1ff335b875a1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=bc825d84c4d7f2ef2e9f74240a0d10a0936cb1988d9ad5d3604b4cf2045e042a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=a837405b4a96bc31c0f09235725bc9d110ac2d266c569d356dd08cb74191a486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=f9911685a5d31ef2594ae6285267d3f66c8c3f651c9abcdd025ed94de39ba5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=1bebd11cd73ea3ded032e25d2d0aa5a779bb961b84d2bb4d95f58cf59d2155a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=302741cf1cb596654777d3f10402aeedcd09278b9754075ba3477f546b1afa24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=808dc7fd235c167fb7fb8a13f1fc307fcafae923f01ae97db4b71202f28294dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=83dc765311ca9f38e37ac1b56369af17717a4c37e9adfb7f77f60bfb3cc75c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=6a16ffe4866a4de832def4ea62bded7c9493d0b7094ea7d6ab98d55b73d15581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=3293c15ad03bc1f3c99b03d6bcedfb56459042940be7d2b7f9748fb0e53884fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=125705cfd69e82134728e9121efc5d8d1f19f25f417d10b9698e4856bc7b7731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
