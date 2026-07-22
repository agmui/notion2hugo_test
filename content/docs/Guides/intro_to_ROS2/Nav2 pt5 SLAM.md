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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=e2241697401862cc3053376c0594107a70d8520b9371d8e3db8be8141bb9aa0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=cb3083a79f7a64dffa1cdb42cc7389fff705f2fb8b6cb18bead81a79808b0346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=ae70e2de835f93d81e263cdc2b12124e6660a0ffcfeb617e8f049b0248b39345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=494e72093b6cda411432ef12f40c1556dd30d5a22b72b8ccc5a0ec34616c54b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=375b3a2c33060c31fd8fd129646ac9098f29967ef65b862c9d39f19ad0dad03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=115db1b6441e730abc0509dd7cfe3129af610799be5f407e6e1ea68356d9d1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=0bf652b19fd8b18a514751e80d9b33286d8b0fbc6dce68701d9e558239bb5d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=7d3d9ac12a7494019f9de6c5bea670eb8e7e9ea33743ffde723ea5e7e459d358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=d1103bfef08611c63d1d3ea3245dc4ef42ea8bfa0d1fd627d554c3fe615267af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=c3d9df153da1997c5e446a774339a3c5fb9028abc3a48d7009e594cc9b14f5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=532625e77207488282673f19c7b01928547650cdb1afbe43fb99e0263e630881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=4a8011b305dda71b9ebdb69f025a35e8e7ad5c7ee6dfeb2ae00423d9f4ad16d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=ed812433259189a53ff1e92d95efb6d3de23bd6b67f9a9c9f93b6fdec76a95c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMYPJ5N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCfjzHvOeRcMAfQX2iW%2Fk3yCXdVAfosYcO%2FfFtwv5k%2BdwIgP5VJvatn3Vpo%2FcHrPPXYYXiH1tJfYhya1k3pqUUCesIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4e7LTi0ZxTce0sKSrcA6jz5DSW2ckO3IVh6qkuoakI4xlHo9qQAJPRY0TyxSjTXvWxJpY3f2%2B1KQ4NwX0xuSB8Rau4ObQJvU%2F%2B8Erz1E3%2BCv3Vs%2Fe8At%2BPXH7wnmoPsjTO9Y3YEaZIcUYUBIm3iO2Hzb03ByVXEn%2Fwe7YMoy%2FmtLmjFvutvlZ2W0ciql8xBYZMGbIWGDpUxpepHGXT%2BAj%2BIPK7tAYOdS5nBiGzN8t2L01gIixixAgStgdkC9EUmN%2F%2Bvwf%2F9SQxEXTJ0%2FGH2AFaq4h8QPqWCOuC0INWvcW4f4rRfbDln3MCNgvmvhc%2FgLULYPh2pRszOg88g3JBTU%2B%2FJ5qvMUTqfK4UVeWJUM4fe0Q1yePFhxGyKy27kyBbXrPrPqJv2cUwdyXojlkt%2BFhgSUZawnUN%2Fwx6VJD5AYcAW0UIQArC0DRxvJjCLY2qWd94yCGZLwhwVyRME%2FPrLOZC2bmmpJngUkLZmx%2FjEUggxbF2%2BndUvZzFZiUepD8NOPiddvVpHUrqcrZw3M6qnfoXAT9MI2NI2qOvLlaPaURcnHYV7Siz9yH%2FJRcqVlloFOzCtDI99eeIN2HIK5OHsufD%2FyKNJz922iWw5vG24Q3hGuM%2F5NLlUUNVOevNfL2nq8lK3oWwFnEBr2saMIjEgNMGOqUBeYnAulPun0rsatRAb55AwjSMyCB9PUX7Fy%2F2KUqEAEpSwJlTJ7WZ2REkpSKehrbmxc4KF141IKC6kmE5tGo4yaJmpe2PYAD1DQcpUDtywKnfmAjM2ufQuSjR74iPv%2FaPxTw2xTTPnjCQKGeNqcVzZQ3JP7Yng3Rd5GuL0iMHgYDFfEIBBAI%2F4iEW8ECUYjKP9BzgmVX3XtPo8624ITY0%2F964OFIu&X-Amz-Signature=66b5bb893f7cc70394f2d23799ab5b1935c47017a004f6c498dec5f623b371ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
