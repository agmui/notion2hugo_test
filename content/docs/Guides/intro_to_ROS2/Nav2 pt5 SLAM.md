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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=57828237b958d0467e68d723050198da6c687ca2395ae861b09c9f6bcc0a92ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=d29ff491b442cdb3b929a3b6708b1c3f45fdf153a9b4cedd39ec817259bc583f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=bf770d8d03624e6ad65906fbc0a5f05a64a29cee257aec5a4d08464d48b380b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=3846a34da1398806d3513a88d49354b63b981145bc1026f3c9bc84b8376012f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=8a5438691ac9c3167474686991e08fb6a2dff376662699a0e90a45f83f3cd6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=15a227115e153b74cf96d10c80e5f1295947fbe1bad26bc9cdb6c535ed395256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=396ac193851e151baada2c3eb791806da59e24443eda11141c27212f51451fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=520436b121eff16f84ddda73973ff87a5249b6732e8f24647fa4722ad7f8973d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=5a1f27731083a71ae1c727978917037b68f5d8463efe5b055c7ecbfb88576cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=a652b0236404a2d6c12d1eb905efd710f5017c84d5ab2f667b5497b76f392a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=ed5f599fcc528162c1db3be83310e8a42ece29970c27a4a419df043562cadd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=427416805171a5423e8a86dda45e4fb2f972e1eca6094e93150b3c13938e8800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=7f4b1d151ffef5c826329d7db482a2f0a806c5e3bad701bb46c1c4dc1ac98b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56TFXCI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComYdp%2Bz8r6TuW4T9Ah7FllFVvaqKmoaX9CqdznUg9sQIgaj%2BVxQc%2FkqNF3YS9yW%2F%2F664BBkHQU9V5Lt3riM3h2LMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFik2vkH75gwzD4JircA3vahJ2bJE4JNI%2F0tPKd2wCATvXZIXFqi96ncI5NT75vDHdA%2BnRFz8zme1IXxikjvFlqrgRHdYrA2znV4PYxF4veKTKzFnYb%2B8UCYBOTg9G7BkUKdaShky7rG4mlOu8ETnhuEzD%2FICUyGYHGIjzdO%2BxmdVnsLIfYMTn5CbSRmEZggU9CGM8Jd9gjYQLwx1o4ZbI6UnceGD7C6pZinSrC%2BjMFdmB7iD8cjQjPMUVnU5FXRi1ajnIkX3hdD0CsrpqnX1L%2BuRP8sgOCAGUakod5KhhUjK6GVwe1mCvTp%2B9KoKr7rxXWdlKRhuScTRG4eGLAEv8M2MpmSGK692bjZXewhIzYdzMw78XL%2BY6I4lXw1IzyXSXczyz3%2BZVWskaNDxDXZ%2FYuNnbvbizPuaZ%2FX7CZzmuiGP0S4GuUJk92NmcU4Z%2Bshj5PB85xEiQR5xLwQ4elfjsomKM2ViOMD65n4j52VJMEnH2NfqRC36Q8gZLN43zngNm8O0so4nSl44Uz8eLFTNzs4s13FnjP0LuViYp40yUEMCfpzTUaH4cF2LksNdaDomV5j9nooO3TVv51U2Q3Zmc2eXUm41Jy8Tg9nJ3H8nB9sSqoshj0HxLN1orb8XmcY192g8b3Np4Apn0KMM2r5sQGOqUBKLd9c8EFP3VRliIBP2a5VBAPTKNRG4B0ePsE0%2BgJUYlncgP%2FUwnn0cDr8BsExPXrbL9emzO9XJJkj1WwptCsd0duCZM%2BqX%2FG2T%2BEGuLbBZ8firDjK9KjiuW7P3c2PCHVelI2TABozlCXST9JzCv6rYuhfnXdlEbrdDf2GB7rtzM%2F%2F2GurLtLYDhBqGIjMwRPta8XaVRoRGzA8a3sTlRABFuhlPqT&X-Amz-Signature=9f8ea82b6456572d6f04ee3b5d5859b3e3fd25589a2982cad2ae1576a7ba96e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
