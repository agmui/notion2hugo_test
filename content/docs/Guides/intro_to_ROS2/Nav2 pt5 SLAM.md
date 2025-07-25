---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=26fd52f080341249dd1932231dc02466b7b1ce78691171ff276b599593ca4c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=37cf328777ef5e6a6c709c19550fdaa30a86bb7b91199e5e13313dbf02721a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=7711819e46476047dbfc9334deee48fca06040f9b950b3e66e448652ee2e3b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=62b2e0c5b16048bb1a5377e418db503fec852091cf7c75e2848f4dcbb60d9649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=adef45c85384c5123882848a2f8f3bdc21fecb419cb44c3674a89b88731d287c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=ecbbc6194dfc19abb84cc7fe319f3f18a87100eb4bd10b53e61690cdc47ecd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=f346cd5d7e37ff447301c95991c449388d1d7b304ae90e14c777fb71a8c4bd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=ab0a961784c7cf004253755319ff1874c524f162be0d4a98d6dfe51885a5c13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYX5CLN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCWTzpVeoQ36V7ClsHv2zjaj8pH3R0moKA7KeR4%2FoCPpwIgVQYQELSfeawm6ZjTLquzepBRwtGkPCSAYS2pZw4PaNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNVV7plkVKzH95MaDyrcA5X%2F3pZBPaKw4a4CZZ%2Fh6gRh8e9BnYmsDE2dpi4cUbca04u%2B1sZUComVmPUDXvi8tm4bv%2F7sOy94ksoyt9okdQq5wV0Lij0vuy3LT8UF3fsAO3p1NOQYgyTpRn1Ie2HlYKK%2B2OfjW4fDRyxekxO7rtc7LAutLJgEo6K4Dyob3NvvT0sopf2HLQV9NnJXXxMEroGGGfVh64GcjDThXs9AXVI1dzANkiv%2B7hA5k0rJYmBcSLdb1rGXCOkahCKUpnQlfJ8tOn5mwHRkZrLCm7w5XuZ%2FxWIHGcxy2A98UiSsVVdgaLpHJ9%2BJyafUoETE5B8GqLK39LpKSIbYHlsZNu05tkzxs1nF9bviiIDz6161tK5sOXKlFToi2TXpe0mHhSjJ%2BuI3LaZwsuuCuZV9D51iAWNfGw50EAcCc8O5BzG3fkSS06kyjVSOjfwMtL%2BrtqL92vV7QcbfsV9pGmqxDyBaEC8bdKwsJOOXOawUELweX%2FioCzo4hkLp2B%2FD6QLsnVe1F6wFHwIrazVUNM1oBakLoCe3fg%2FtfoZSsmyN7onO6xzWo7WwoIX43SF6ViHce7jKolFPQnU3%2BupjQ5UdbPlYmln56xOzYfZ4WWT%2FdD8l7UJ7ulEy9yCWNZpGDlrYMNGGjsQGOqUB%2BfSjzZKHAr4dQHLL4plhytvnhIW%2BJxOlQUi9OhtwK65a10QWFb4ODsuZOpKfHNbK4I1YBIYM42h%2BQDkQvuzATe5cyZ3GIN11uEqlIdjYuhImhYNp8EbMyHCL1OEpBigAJPJ69%2Bcq7DnJ89OncYwjq54VfUrSBnGsfiJIzB92vbL%2BV6dx%2F4mhxv2lJ8EjxcW51DOQs7LUS6dhZorF0%2FZ4wgVADtxp&X-Amz-Signature=e1c003f67b21a25837bd453eb2f92a56bf115f9189300c85deb2986b96cfb256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
