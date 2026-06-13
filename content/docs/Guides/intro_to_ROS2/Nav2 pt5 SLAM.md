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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=6cc09eb0224bcf0761561cab12659bdd71e7133234b8a7697f2a66bbcfeecc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=0a52fe361e18743e88034eac481949b16723ef5a4cb2755eb8a309843a5ee4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=e7ff3db70d9f82c4e7b31caa90fc50473dc8548cee7a3ebe9a3eecff783e2b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=c6846d7914f62067362f1f4730a6afdec67e8531ad2d52e091b60c214383bca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=2d76abca5c4e4b71611b88c8c01cc1a9ac40d7fd7514457273e599b8fddd1eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=2ed8da9039658b32e0e3bb4e2b203d714e3c9a1c95e91c0316f104bd03601a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=2a5b749e9640a0acf0c5567a6d2cf32a3a365348c1e1d575c741554cd72148c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=91b12a481a04cfacb014815367fe7e79c5b57f1810d36a6d49ffb1f388928988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=de9c3ae64a35a726fc8146bc1cbbeacf8b9871a36f2a916c10ddd70fe9301e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=2df548ff0b00870a9086deee87ed09a728511eb480830421860a1b7af41d04e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=3b4ee59a6a95a52af7a2cebb3883c7d6251bd827d6bfeee62327a6e967904dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=acd29486cc4e94c2f61e47ff7526c75082c2ba615841ec44b42f1d1850f5e2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=2da2e5708a9f2fb4a51650eff9f59183a7b0e68560d6bc97f4621ea88894d292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCDBNS2%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD02G2qF0kpgaD0l4eGxV6Rqf5nOsCnkXvu8H1DEEPoWwIhAK1fqNniXJ47QDHsD5T55Fq%2FWyD35Pjqyjn368NkSZ8EKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYTWYokUxRxbvgmkIq3AMlkgfOZIVzmi7%2Biy5EjgVg2Hlg9Q3S1sBeJtaX6VXcmlYIKfTXqVCh3IAMeUlqJjaGArNp0Q9j0lotYDG0j1n1XfgF6uAkkD5h6JtlweKbFqawgOpgGDwOmgoNQkfx3bmB2Drnwg7nLlDjqhxwU1wET17%2B9kXEYLwTakAUwwyekzZV3KzXSNFaS0PI%2F03g%2FsyWqfRtunX9%2FercPCDYkcesQ5LA6KojXSfOq%2FBstYEkWFUqze8KVANUN%2BG6%2FYJBxQTK%2FziwvtGLUefuxIKg2VI2fdT2WUY8FWYeINW%2FB91AzJvXiEx747q8%2FkrRI0NuYH5scFEwdO3RpnH8Q6dCQjLIlWoLyER5LTabX9e3XPsuG5cs6wkw%2BWHb7CTm%2FfGOVL%2BhQNdiUe39ZJ8Tzh8RpekOhxhCq4gUI3TAOWxCE6%2FNqwGM9O8UMOzylGA5kH9Vtyo4ml8C3eD8pUvRGopMZ5k99zCvDyjB4FokI8H7NwWXuwZvIsC6qR%2FjTo5Axqr%2FxmKdLlC5OY4NNhebZ%2BWYHuFSPfef4PMhvmJuWprTI4pVJOmkLPPyz8r1tHMZfCtTQmOdaOG303mVhLrvXKmuS7ts83KGRT7fAt%2Bvc9nW4J0UnfG4GEwt6w27SHJvrDDK%2BrLRBjqkAR%2Bp3rb3IflGTsOIRZCz1iGCprQJAXnOIN6%2FyM9jv%2FEg0%2Fj68Nl79o3htw%2BTEyzZ8Mea5qVg1f7JhTCWivc2Y2qSpVER55R7kei2PrTGEms3gSviUDbqdWx7LnkufleQZjDHzsMeKWqfteZwCvkOri%2FpNy5MGoK284LBOvwHLIkwDj23MzCcU4MxRr6FNBCZhm3cU16fzUkCRrBrhJSJcmd8AGtJ&X-Amz-Signature=5983987d8d67d2d1820bff64ff7124c6f5d0c199a4c1ab717728dacaf4564e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
