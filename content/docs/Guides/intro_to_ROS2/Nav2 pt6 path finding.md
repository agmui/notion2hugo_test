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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHSTRFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGeZu7gB610HjGwfRcu18oqH%2FkgtZpxUI4KpgnEx8cnQIhAPliPJIXfUhrEmFlQt3Q1iSKLVqZZrffT6Q1FsptuaLcKv8DCE4QABoMNjM3NDIzMTgzODA1Igw9e%2Fnob1ts10Lo2Ooq3AObzIEjsDigRM5h1FUaHLDGzc1vT9V%2FhLIuNC8G%2FYrZzE%2Bfx524zFWyH5NZwbN%2B%2BamzonyWwTjToNSv2DkhnJx1hkffRvEuiWwR%2FfUhLqdg3qOCX5j18qwz%2FefoidPk0T0bvRWOxeThdfP5XTUj2cckBQk8EEMD7tAH4agFn4yBnHn0kchUD4Lxj4Q724ZKIG%2F4knk4hHIjdsMo6CBXcj%2Beb699EdYSBRG2vQztbbWOFClkRn9IL4JnS%2Bzx%2Bgq6lHGawAXuN8dJwGsyWTpRXAuCz9EsyTHQhQ3dB5BI8nFpQAFVYWRW2ZczIuXm2HIQnkaQY5ia6Qhr7TRbpA2Gotj1O7bVzKNLl3OekP4jJ5Hd4ipbAYjA%2Bc7F9zMLwXmqtvC5g4huMVEej%2FXbwh%2BWGP7u4CwwwAPq3NRbV%2BEUqcH5hQpXPJxUIc1RnXyTKwQAJ8g8J6VAd1stw9ajgZtFYklIzte5jWAbWo3EzHsYO2FBkwza4BD4h5JdRChZtRgEzhErZR4%2BkZu8m8bzJ8NbqwDYqx1sj9VqPWB3lnpoJNCYNcJdQca6gIYdiZngzo4he%2BbPYbEvAgZReul2c5HftxetsFtxJpcrdoTzK8a9%2Brr6WVAaR21eINNCvxawZzDM0Y%2FEBjqkAevu9E6YJRPWW0xCv4Gib2E%2BicnWw3gV8C2YvgHGAi42FlaSbkD0jxd0wm3T1obRHgViLNjjAbSEwaxvhNQyhYjJ4J0O5cQ%2BLr0qG3U5sfOsrR4ntuhV4NvnZhZg5uEEcD7akYAZZ0wLtL0ELZU9nKEsmxVV3fK8VgLpw5VWTscGUJ8QckNh3C5VCPc1K5e3ZT7Yfu%2FNv0EPKJPlgSzp%2Bd2%2FQmwC&X-Amz-Signature=3d5866c8d03f75255067fd6bead33efcd9740bf83e9d91f4c1077d0ed6745149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHSTRFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGeZu7gB610HjGwfRcu18oqH%2FkgtZpxUI4KpgnEx8cnQIhAPliPJIXfUhrEmFlQt3Q1iSKLVqZZrffT6Q1FsptuaLcKv8DCE4QABoMNjM3NDIzMTgzODA1Igw9e%2Fnob1ts10Lo2Ooq3AObzIEjsDigRM5h1FUaHLDGzc1vT9V%2FhLIuNC8G%2FYrZzE%2Bfx524zFWyH5NZwbN%2B%2BamzonyWwTjToNSv2DkhnJx1hkffRvEuiWwR%2FfUhLqdg3qOCX5j18qwz%2FefoidPk0T0bvRWOxeThdfP5XTUj2cckBQk8EEMD7tAH4agFn4yBnHn0kchUD4Lxj4Q724ZKIG%2F4knk4hHIjdsMo6CBXcj%2Beb699EdYSBRG2vQztbbWOFClkRn9IL4JnS%2Bzx%2Bgq6lHGawAXuN8dJwGsyWTpRXAuCz9EsyTHQhQ3dB5BI8nFpQAFVYWRW2ZczIuXm2HIQnkaQY5ia6Qhr7TRbpA2Gotj1O7bVzKNLl3OekP4jJ5Hd4ipbAYjA%2Bc7F9zMLwXmqtvC5g4huMVEej%2FXbwh%2BWGP7u4CwwwAPq3NRbV%2BEUqcH5hQpXPJxUIc1RnXyTKwQAJ8g8J6VAd1stw9ajgZtFYklIzte5jWAbWo3EzHsYO2FBkwza4BD4h5JdRChZtRgEzhErZR4%2BkZu8m8bzJ8NbqwDYqx1sj9VqPWB3lnpoJNCYNcJdQca6gIYdiZngzo4he%2BbPYbEvAgZReul2c5HftxetsFtxJpcrdoTzK8a9%2Brr6WVAaR21eINNCvxawZzDM0Y%2FEBjqkAevu9E6YJRPWW0xCv4Gib2E%2BicnWw3gV8C2YvgHGAi42FlaSbkD0jxd0wm3T1obRHgViLNjjAbSEwaxvhNQyhYjJ4J0O5cQ%2BLr0qG3U5sfOsrR4ntuhV4NvnZhZg5uEEcD7akYAZZ0wLtL0ELZU9nKEsmxVV3fK8VgLpw5VWTscGUJ8QckNh3C5VCPc1K5e3ZT7Yfu%2FNv0EPKJPlgSzp%2Bd2%2FQmwC&X-Amz-Signature=bd1799138491e62b8965feb0add00dde71f6b9b7719f35405704fcbc0249f19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHSTRFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGeZu7gB610HjGwfRcu18oqH%2FkgtZpxUI4KpgnEx8cnQIhAPliPJIXfUhrEmFlQt3Q1iSKLVqZZrffT6Q1FsptuaLcKv8DCE4QABoMNjM3NDIzMTgzODA1Igw9e%2Fnob1ts10Lo2Ooq3AObzIEjsDigRM5h1FUaHLDGzc1vT9V%2FhLIuNC8G%2FYrZzE%2Bfx524zFWyH5NZwbN%2B%2BamzonyWwTjToNSv2DkhnJx1hkffRvEuiWwR%2FfUhLqdg3qOCX5j18qwz%2FefoidPk0T0bvRWOxeThdfP5XTUj2cckBQk8EEMD7tAH4agFn4yBnHn0kchUD4Lxj4Q724ZKIG%2F4knk4hHIjdsMo6CBXcj%2Beb699EdYSBRG2vQztbbWOFClkRn9IL4JnS%2Bzx%2Bgq6lHGawAXuN8dJwGsyWTpRXAuCz9EsyTHQhQ3dB5BI8nFpQAFVYWRW2ZczIuXm2HIQnkaQY5ia6Qhr7TRbpA2Gotj1O7bVzKNLl3OekP4jJ5Hd4ipbAYjA%2Bc7F9zMLwXmqtvC5g4huMVEej%2FXbwh%2BWGP7u4CwwwAPq3NRbV%2BEUqcH5hQpXPJxUIc1RnXyTKwQAJ8g8J6VAd1stw9ajgZtFYklIzte5jWAbWo3EzHsYO2FBkwza4BD4h5JdRChZtRgEzhErZR4%2BkZu8m8bzJ8NbqwDYqx1sj9VqPWB3lnpoJNCYNcJdQca6gIYdiZngzo4he%2BbPYbEvAgZReul2c5HftxetsFtxJpcrdoTzK8a9%2Brr6WVAaR21eINNCvxawZzDM0Y%2FEBjqkAevu9E6YJRPWW0xCv4Gib2E%2BicnWw3gV8C2YvgHGAi42FlaSbkD0jxd0wm3T1obRHgViLNjjAbSEwaxvhNQyhYjJ4J0O5cQ%2BLr0qG3U5sfOsrR4ntuhV4NvnZhZg5uEEcD7akYAZZ0wLtL0ELZU9nKEsmxVV3fK8VgLpw5VWTscGUJ8QckNh3C5VCPc1K5e3ZT7Yfu%2FNv0EPKJPlgSzp%2Bd2%2FQmwC&X-Amz-Signature=9c02b0b11b7dac2247baa7a57dc97f62caf0bd8cfc042a55b3f84445b54a5665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHSTRFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGeZu7gB610HjGwfRcu18oqH%2FkgtZpxUI4KpgnEx8cnQIhAPliPJIXfUhrEmFlQt3Q1iSKLVqZZrffT6Q1FsptuaLcKv8DCE4QABoMNjM3NDIzMTgzODA1Igw9e%2Fnob1ts10Lo2Ooq3AObzIEjsDigRM5h1FUaHLDGzc1vT9V%2FhLIuNC8G%2FYrZzE%2Bfx524zFWyH5NZwbN%2B%2BamzonyWwTjToNSv2DkhnJx1hkffRvEuiWwR%2FfUhLqdg3qOCX5j18qwz%2FefoidPk0T0bvRWOxeThdfP5XTUj2cckBQk8EEMD7tAH4agFn4yBnHn0kchUD4Lxj4Q724ZKIG%2F4knk4hHIjdsMo6CBXcj%2Beb699EdYSBRG2vQztbbWOFClkRn9IL4JnS%2Bzx%2Bgq6lHGawAXuN8dJwGsyWTpRXAuCz9EsyTHQhQ3dB5BI8nFpQAFVYWRW2ZczIuXm2HIQnkaQY5ia6Qhr7TRbpA2Gotj1O7bVzKNLl3OekP4jJ5Hd4ipbAYjA%2Bc7F9zMLwXmqtvC5g4huMVEej%2FXbwh%2BWGP7u4CwwwAPq3NRbV%2BEUqcH5hQpXPJxUIc1RnXyTKwQAJ8g8J6VAd1stw9ajgZtFYklIzte5jWAbWo3EzHsYO2FBkwza4BD4h5JdRChZtRgEzhErZR4%2BkZu8m8bzJ8NbqwDYqx1sj9VqPWB3lnpoJNCYNcJdQca6gIYdiZngzo4he%2BbPYbEvAgZReul2c5HftxetsFtxJpcrdoTzK8a9%2Brr6WVAaR21eINNCvxawZzDM0Y%2FEBjqkAevu9E6YJRPWW0xCv4Gib2E%2BicnWw3gV8C2YvgHGAi42FlaSbkD0jxd0wm3T1obRHgViLNjjAbSEwaxvhNQyhYjJ4J0O5cQ%2BLr0qG3U5sfOsrR4ntuhV4NvnZhZg5uEEcD7akYAZZ0wLtL0ELZU9nKEsmxVV3fK8VgLpw5VWTscGUJ8QckNh3C5VCPc1K5e3ZT7Yfu%2FNv0EPKJPlgSzp%2Bd2%2FQmwC&X-Amz-Signature=f4fed4a45dcb3d3e1a4d4d634901335bb7603669dd8abaf6c9860b13506cf694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHSTRFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGeZu7gB610HjGwfRcu18oqH%2FkgtZpxUI4KpgnEx8cnQIhAPliPJIXfUhrEmFlQt3Q1iSKLVqZZrffT6Q1FsptuaLcKv8DCE4QABoMNjM3NDIzMTgzODA1Igw9e%2Fnob1ts10Lo2Ooq3AObzIEjsDigRM5h1FUaHLDGzc1vT9V%2FhLIuNC8G%2FYrZzE%2Bfx524zFWyH5NZwbN%2B%2BamzonyWwTjToNSv2DkhnJx1hkffRvEuiWwR%2FfUhLqdg3qOCX5j18qwz%2FefoidPk0T0bvRWOxeThdfP5XTUj2cckBQk8EEMD7tAH4agFn4yBnHn0kchUD4Lxj4Q724ZKIG%2F4knk4hHIjdsMo6CBXcj%2Beb699EdYSBRG2vQztbbWOFClkRn9IL4JnS%2Bzx%2Bgq6lHGawAXuN8dJwGsyWTpRXAuCz9EsyTHQhQ3dB5BI8nFpQAFVYWRW2ZczIuXm2HIQnkaQY5ia6Qhr7TRbpA2Gotj1O7bVzKNLl3OekP4jJ5Hd4ipbAYjA%2Bc7F9zMLwXmqtvC5g4huMVEej%2FXbwh%2BWGP7u4CwwwAPq3NRbV%2BEUqcH5hQpXPJxUIc1RnXyTKwQAJ8g8J6VAd1stw9ajgZtFYklIzte5jWAbWo3EzHsYO2FBkwza4BD4h5JdRChZtRgEzhErZR4%2BkZu8m8bzJ8NbqwDYqx1sj9VqPWB3lnpoJNCYNcJdQca6gIYdiZngzo4he%2BbPYbEvAgZReul2c5HftxetsFtxJpcrdoTzK8a9%2Brr6WVAaR21eINNCvxawZzDM0Y%2FEBjqkAevu9E6YJRPWW0xCv4Gib2E%2BicnWw3gV8C2YvgHGAi42FlaSbkD0jxd0wm3T1obRHgViLNjjAbSEwaxvhNQyhYjJ4J0O5cQ%2BLr0qG3U5sfOsrR4ntuhV4NvnZhZg5uEEcD7akYAZZ0wLtL0ELZU9nKEsmxVV3fK8VgLpw5VWTscGUJ8QckNh3C5VCPc1K5e3ZT7Yfu%2FNv0EPKJPlgSzp%2Bd2%2FQmwC&X-Amz-Signature=4f886ab05c134835236b3b047d7fb511b1b98402080f6a84e052b399a4f48dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHSTRFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGeZu7gB610HjGwfRcu18oqH%2FkgtZpxUI4KpgnEx8cnQIhAPliPJIXfUhrEmFlQt3Q1iSKLVqZZrffT6Q1FsptuaLcKv8DCE4QABoMNjM3NDIzMTgzODA1Igw9e%2Fnob1ts10Lo2Ooq3AObzIEjsDigRM5h1FUaHLDGzc1vT9V%2FhLIuNC8G%2FYrZzE%2Bfx524zFWyH5NZwbN%2B%2BamzonyWwTjToNSv2DkhnJx1hkffRvEuiWwR%2FfUhLqdg3qOCX5j18qwz%2FefoidPk0T0bvRWOxeThdfP5XTUj2cckBQk8EEMD7tAH4agFn4yBnHn0kchUD4Lxj4Q724ZKIG%2F4knk4hHIjdsMo6CBXcj%2Beb699EdYSBRG2vQztbbWOFClkRn9IL4JnS%2Bzx%2Bgq6lHGawAXuN8dJwGsyWTpRXAuCz9EsyTHQhQ3dB5BI8nFpQAFVYWRW2ZczIuXm2HIQnkaQY5ia6Qhr7TRbpA2Gotj1O7bVzKNLl3OekP4jJ5Hd4ipbAYjA%2Bc7F9zMLwXmqtvC5g4huMVEej%2FXbwh%2BWGP7u4CwwwAPq3NRbV%2BEUqcH5hQpXPJxUIc1RnXyTKwQAJ8g8J6VAd1stw9ajgZtFYklIzte5jWAbWo3EzHsYO2FBkwza4BD4h5JdRChZtRgEzhErZR4%2BkZu8m8bzJ8NbqwDYqx1sj9VqPWB3lnpoJNCYNcJdQca6gIYdiZngzo4he%2BbPYbEvAgZReul2c5HftxetsFtxJpcrdoTzK8a9%2Brr6WVAaR21eINNCvxawZzDM0Y%2FEBjqkAevu9E6YJRPWW0xCv4Gib2E%2BicnWw3gV8C2YvgHGAi42FlaSbkD0jxd0wm3T1obRHgViLNjjAbSEwaxvhNQyhYjJ4J0O5cQ%2BLr0qG3U5sfOsrR4ntuhV4NvnZhZg5uEEcD7akYAZZ0wLtL0ELZU9nKEsmxVV3fK8VgLpw5VWTscGUJ8QckNh3C5VCPc1K5e3ZT7Yfu%2FNv0EPKJPlgSzp%2Bd2%2FQmwC&X-Amz-Signature=2e3d7fd90147ec1bcc1141a5cad060d8534f0137db01efcb54422a2c12fe8dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
