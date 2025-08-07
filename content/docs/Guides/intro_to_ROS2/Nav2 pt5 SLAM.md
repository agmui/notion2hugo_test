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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=34ce8a58f117e875ba5abbe2dd2fdee4b7a1a1585da42340b09d2c930580ab70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=5fc472c47ec010fb416ac7db40631d339df1470c8b95dcab9017bff71220d44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=eec1318a2921164fc970e05ec6911c264cfed1e598cb12d88eee4b49ed38d7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=f229fd590d2e7d51eca7e29d03dcf8e7e065add4f2a43e44d3523da6232076bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=643b1c918af2f13f18fa2916ee20d4fd45b67118af22a8dcd292eff5251dbfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=6f17d13adbf2d3ee9f5d3721fa2536c52423822fd3d2fda2848eb87ff9ed658f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=61c30d0b5555f0e1066c34db0d13f556fe4d5c37389b13c84a9a9548b242a91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=122406cc05be2366d085218d0cdff8924f2cfcf8e41d6e48898b7cb095816df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=6c2b50a133ed214ccf88fe905a23a8ccb40d10848b735dbbd958c2b730918e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=0898f952ce0d64d6eb0d8b2273b41e27893aaa43946e4c8350cd3ef7deac095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=f13b02bbd503b703cf0f5cd38b729a8d79901961da549a721f96fdc52d1cefb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=81cb79373a7e790507116bf6b515d5041f89544de6b5073d323b2fa784fcc6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=921953f17bad9b527ba4515f4a4169ffd049c6c09a06032dc63f2c67868c6329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHIGYSV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHUPK%2FPq0WevSGrEMSp0imJxCDU1tM15Pva56RU4y%2BbAIhAKvZbNo9PT3cX64uEEhOdD%2FMD9EvMHYl32zdlApPPHPgKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ2YwM7hzGdFcxNj4q3APkJ7FZ17sfL2GzQIVeZr%2FmyeUYWdM5ongizngNzB%2FLLIr38s5dqdYwe7hlKvqROEelMBYQPRRmRuvFOYNGo8oTXCk6lOHot%2FhXlFGbX%2FLip4XuONFMYZomXI5fF%2B7cHZ%2BnIc9LnOYIfUufcmKKsbCvDj%2Fnpr6JeTv5a%2B4WB9JVSUCVQENwndaSe84yxAumqVj4XaYNk4iR2FAdQ4yeZIS1nKiC2nYjk3O%2BdSeWRnwYmxU%2F9YemQzwufkQI8m8By0y8RmuT%2BVYXb7wQWnk5OT8urmg8btidM0FjHafG%2BiN8myMnXgLvwOcpV%2FdUMw%2BUoB5YeJpLR5R6BU9lLHZJ4pqbWljJgL97c1DFxMv2OBtQA1Iw%2Ff9fGTPKTjTOrx5rIazf%2BWnkshLaCaThbgcBe2sBWnJoDcQmwLaR3%2FD18NLdQgZtxDhEit4djkmne%2F0OwC8b0JM9wHl%2F7hSczvATO%2Foqb8xCoHGgCazO%2BK2xHPMX6mR9krO3IoUqwW1XXA4DT61ofINmXMh9UQMiPzS1%2BgMK04R98EYMK%2FJYP9GjCNeHMyb9qrhc577irKRSub1bIh2hnTpLs2T9grctwPpDJ6rdwN1%2FCKEcexWmclW1KGZwCJfi4uROjW8Fxv5EQzDj7dPEBjqkAeitAN%2BUtm%2FSSSlCJNX8xsPm2X3O98JDIMv2mKi0GC649iT4NuIr5%2FJhwsfbW7WpmMen0RQRLikqiPGZQX6L9Ye2XC8y671X2bss6dpEhkrOyuXHSwRLXdhGaJJSTJZIhSJm83s1TWP6LfQSDekQ6xkTMajCS7c%2BIW83Bapmyf6tDfNb%2BjB5GuGd0At3Us0Zow4p0OhLhd7vwg8kYJBpW2Q7ntoY&X-Amz-Signature=90e7a733550445da5e9f138597c5e0ebb77678c6ae55a93210d6a7ebc37e6bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
