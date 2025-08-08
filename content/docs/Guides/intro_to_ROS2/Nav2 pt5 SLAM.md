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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=c46682b69f624cb719f57d81cfa750c7f4b4d1803029f4f6f015fb5b63fab26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=18ca3a1e0994d3f39d694d43846db5f9f7956d8ba6356991cc67ddd43bb1b4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=edbd383f03b090d8ebfb589dd06f9501220b1f740199ca04b013d7beb9509af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=bb792b84fb0f9faa13750862a67943f15aedd6754b5ad5cfc95acc490ed3cf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=9ac69702421dd30766f8212366bf46226bd681b9ec93fd4abf75025a404859b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=7521638711556b8e9813eb4b88cda5d0a094814d206e5a3ba96d2f3da5e1d0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=a3503c12a8fea1fc80f0a8353029d8c642bc07bf5247de6b39df0191286a69ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=fa3912c4ab58580d23f2b32abdb8f690f0dae3ef74c0391eb054e8c788a852fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=5a1357326614844146fa75ba9381287cdb53024981c4ec6f79d9310591e11197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=7458f64dda81236777caaa72409f2698acc276b7b6e92ebc11d6661d18920b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=0f30b0f875502358cd7a431dd67cb21a42ba24bdecfc051be4382191683bf028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=a6a9adbed6860e7af8e5aeb0d10c43c5be87ef7419d854d2c9d7f0ea939c7dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=8f7eedcbe7c9fab8f44172f7ed88f6f730b331d6b63e2fa6dcb8bf82333c5e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQFJUHW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC6DrMI%2BJ7NoFheBGLykEHmMH1Q19gZVIyBe9nAJFIO%2BwIgRqCMl5lYAenBp2jw%2FEy5DCnySkrVr27ComR8ngESSIUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU9T1ak5g8tp8l0JSrcA6pBHNP4%2FeWbVX3%2FGH0r%2BkjRHtE2PLJSuz76owyY9RND5md83eSoeDWCVKe%2ByKtb1oRBfbLslpx8VTh10wwjStJFkpEZOTNr3%2FKDidlJhMuFhYx5PY3mVi2hd%2BKjlSyIxwUY7OpHzkoyd8cBdsORUIaJTDEPxMON9GmzJPA1tgWhN1Rz5FTf5lQXE88oHP8%2FNF%2BCGIZtwHcr2IFvSULIfZ%2BzB7nrzQxzfMDon7XnRpTIhW%2BVKRPPiDxut7fmLdKv5mRc1oe5FvC66BrFLn8r%2Be5OPK9Wu2Hq5Id8Eyh63J%2BaUbfMlTk%2F74H8RG8cVnS71hg6qVpogPW4H7dT82drSTiFMO6caSatlwZq49J25qe0fAtLZyKWq1mlZnTbzHYm6tmHMqtNbMpY4i5fRCw%2BbhLpS1q1IoGGMPNvFm4XYJWl0a1DN24QUa347yLIgFx1A6etpWM8EDaNWlZgKi8DGW%2BUhVq3qI8BshKh38ro7rvdm3LG5jHcAs9YpnVqHRbwcYdzFBou7FhzO%2BWNFk6VnWbeoD%2Brgis5EBgIoPOQkMwaotzPlY3EKI5U3VAn6kOyGB0zd0aE7anSzl31vQXfoeDW6uKWEJmmFRqb3qxhKM%2B003hX1zliOcp3ZnemMOTb18QGOqUB4Zli1O51%2BLb3471a7rVb84CoADTjqJmevd1n%2Bklw3UWz%2B2AhXRKFEuQ0v7oeoMamNt2hLisig%2Bq4KYidDpTFNFzTCkwBQMCixnYcXU0g%2B97xk%2BEcqMlQT3WFX6SD7gUdlqTu%2FxHAAu7F5z9cT00SDK6xpXViVemoIi2miqypUj%2FXlutVKJXKPhZJz6K9d3a96iObNlkxGrRdqy%2FZPElMfMYeWdTr&X-Amz-Signature=c44ed8b6e12778c9854f75603eb32b93e742ca03aa2684257f562163d0f7c823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
