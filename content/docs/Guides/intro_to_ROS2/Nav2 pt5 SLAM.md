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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=72a0b30e812fd4c4d422e629860a589f3431846a040118c27432b45620f4e37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=425ae072732a5f9a79cffd278e2720b2deb7311b0234e1797746368c632a92a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=b5da601c5ba3017dc618aded43f73616d91921b07f60e81e51ba79efeaafd62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=45f5879b814f73ae89cef92ef7a4a16ba3062e24cf64b0dc88423af9ddace4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=9fd478856d777993d97886a3b83696f9249336038282cb42b7486035dd130ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=2ba2e1f5929dd4b0bcb5177ef807a0320c314563a720262e224b21825d214da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=4933200b68a1e5dcc55e3d415cfcb40da416bf1514911f83f72f89da74cfaf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=711b22d07220720b834cb8a20be196be92c5324c3299f0713e9a457281ee10e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=fea07dcf9df32669ec7d092c5e57b2311d51b7b6e880e07bd601c3323176f17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=3fda752c0950a4bb60ccb4f0c6d7b9799b8468796425c8b7e8850a8c19703d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=7f8b3fcf3db336808887e47b4ac6ec0f03a37e27a9952d02ab69b739de43b757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=9ce8a1d277e86391c25d62365cbe13c8ae8bbcc12654aa95e451b17b754a634f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=29054fa8d8ca63895b63bb2816aa4437770f6ce0a13e17111d505036e05a1987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF37GUFT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVikc5PWxLk2uTRnK6A%2B3VoWRdGM%2Fbh34rB0hnCaGwJwIgXrm%2BF0kUqQfZTWQiDrHGMq8BXphrjGZdv2SRhXR6FksqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2OFToRe0wTifwO9SrcAwz8RBC2FxUAHI1i9MI%2BuxpIQwJhRd6ZnvS7DtfMCuW18Efqs%2B654lvyNL%2Fq0MZrynyDT3gnT%2FgrmBOwjoijjqgeLe%2Broj%2BUc5ncpUnOxkX78UEImtwyWjY2l%2FqQgfow3JGexJNGLEM0Sj2%2FLsNEiYYjCiAH9r4otYrn7BbWFPYgrHZx8kgClEg6uoN%2BuytZ9YE2LHmbJdtwUto%2BABvYqN0vrSoJXYT9GjQcO2E%2BYccoraYUoLd1d5l4KGUAIuhRNuikNHAWlrtUuf%2FkXXPg38I0z%2FN9amRgIifKBPj2TSONcKwxqHVXnci%2BuPSzC10wGVsOs%2BcT9wvs%2FOIL46zN8w8tteG9uEfonio50fSV%2B2g21vHGP4TYK0jB8Atex0LPCZVc7iMOehmjCHG9rBqco6BVa7%2Fy7Rlv0LmzyOeJKJJFsNhVRmDnxYUJ6shFX2INfJCWqf%2BxLwVMqN54k3KaZgxOWfQf6tlap4MC3W2X2kXcQeYeNKE5w9BjYP8yF4yCCb%2FDNTCHoLUlwHcN1UvtvhRJPVN92ZhmU8SLtBa3pBBv0tJ4ORp7G5rH5Bq7a6lu4ZF%2FHQN3NM2rYpteJKWfNnX5LLTh8ikmgmYVo7NeacEz4IUXNr6VV%2F72MVXcMJGP%2B8cGOqUBS89p97hvzyhoTu16bGpzzC7BOea52D4Qp6YCKWTNdgzPAHPlwM97HJVyZqbbQh25kSuFTmb6oGWP6P02arKK9RDxHGrRImKdwRDMBYPrKONkziRZ4EelASlT4QN5L2FXLGE7N4hax7%2Fqndg7hs4efvqpJhA9x%2BDc%2FEtEm2qqcP%2BE6YjwoRDXilgksVdgXyzth9%2F34v5mt5zwqwENckOE8%2BOT7NOp&X-Amz-Signature=1e4f783380ced8c36ef2c64afe15c0c25ce741f259bbef1232ddb351c598552e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
