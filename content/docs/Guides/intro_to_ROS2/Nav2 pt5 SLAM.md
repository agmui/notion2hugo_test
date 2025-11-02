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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=1495e8eb1f564ca4821bbb0d613c19565bed09d537d2588990491bd38bfda3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=97dae07ace969e6563fbbb6fabac1e51c4c72e8662d03db3300c6fa233c7e7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=29ceda330f6f2551990300ac06ad035a2bd2abf40bbec22760cf6c65e216efac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=392a88c0443ae8156ce23b093db7db719b1df87cf631249227a3bc0f02de7a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=2e2747c01f1a43099f66b7d87359d6f312b8388e3ec4083ae333d044de476436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=98f047be33474417804bbe318183d59c6c900808cb4df5f844343993aeded148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=bf79f84516eb4ad030a5c96e836cba20008559b2265b413907b3d376c0515050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=94056596649946a7d9fb48ce32fc7a76d18531aa9970c9d02afbecfcd45a6f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=106a610d8f143fb73cf810d0b01730a2ba9b3d88ce77e2be182ee440545945bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=c72a411336db53fc104f04eb61cd3e213c60fc9bd7b25a5c6c416d0989802587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=2fbd60b2d412323cd33fddd1cd7f8db8884ee7768cd1ad15fc814f82cefe6eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=994d29ec79c6e3651d9e75ea3cab3fb7540e3db57897a153a05d7e8761e10e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=21e83187d0ac6ffb8a1951388e3e7f16e976152748cedff6633919b3b6c9d41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYVM4EJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEbvUfYIQVmxNtBJ0TPPsPoBf5AkMccAW1IJ%2FZ1NscECAiBzHMtxAhD900yNaD4i7k1SvYF6sVrkOEx6omrysHsVxyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvoZl3lxC26%2B4TxbYKtwDkqPGbh%2F639QbGkvWl%2BqrjZv1l67OrhvB9SzPdzKahQAMbMf%2Fj3agTVfPdN6S%2FNM8hVFw9k5%2Byq2EK%2F7M87ebR0FI1jQUsJqUJiLDNw78bTMfsf3aFal64d%2FGAALW28VDEEDoqTICrAelhyOXdBEDvO2fNdRrqQpaLesVw1%2F2pzxVXYh34RWa18wYxC5esZ6SxVSmcO0N55YwcX%2FYIpVcsWRSVqw3fUP7s2NQlXxXfPzGCdfpfa2iUtSZeHa6a%2BzvT7AiPHSAWuxt6ESCuKJZrhTkc1IR1S1iyvilKPpuYtwIRMSZVmfodPIZjgMA6Vuu7%2FQGLZbIGCBCq%2B%2F5Ts8dhWlnS4n3lxOaI5muUQ6T%2BOGGAYVayFZ1bvuOpnsGMDyUlGnSGbvFiDD80SLydFkiFFUvUd1yN13cgv9t1ULClQHzwLKFesmXZ7oXw2j3KAeTGundjiO5MO0imL7VLfgj9zTXRJz%2FEsmzE0Gl%2BSW%2FHnS1m8NHxMjqaiOAaYUz%2Fm9NnORaFtuTl3RYIGJQCxQYRh26WOhL9Lct7NdIlqtHGXAY201mfY4dKFx2palS1EQCTM5Pxlpuh6MLCxyo5qP2nh6tAZWidd8HsMJtToDVlrZ3CCrZCabKdVo%2BJ24wuueayAY6pgFCGCZXlL0ToEcWDbusKIWC905nFZNRzLPhOt4ubTA5NfPulKhsNJyjQgkWcRk9uwYmac9bo8393sp0FyIo1%2BVSOitIJW3IlS5sZxWeU6uSwpZoHgQdTuoMxoZ00OadNNjtHrtO%2BIM0EvWWfVVXOIgYitDr%2Bh%2B8NPQSUALUSYsI9G7RS4cRvJpq9lX2UhzD7v54sjYazLxHtkxJGin%2F29%2Bt8P8EEqDr&X-Amz-Signature=fe2d5ed198359552888c95601012fae9bcef1d2071a3c625a7ace61d35e8576f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
