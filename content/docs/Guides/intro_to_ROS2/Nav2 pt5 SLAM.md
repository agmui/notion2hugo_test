---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=41960c0b4bd23350c4c24385c007d23b942f97d08a03ac62105cf53cda7d82d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=7610426ac37a97f1d57570fef64098cc99bd1dc87097fa5f855136495c95eb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=7e66d5b87e9bf7e564e77cc96e178e063aa5772938b1ecfe4b7ab77f55bac840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=8aed804936242ab0c17c3a8a504606c2fc5cc6be9d61a72ec64412115bb5ef7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=b990b4ad4fab934ac1474ed03626629ef5ecf196d06841fca78e921e68f9d7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=4537f16277727d575370a363a94b100d634dd33558b8dcfa074c5d3672330f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=4712b9bb80bf98b249163845b2151fe1d55cd44b92784ac33d1059c827d16f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=fda081e206f19144d91da33b63c9313f2d2c384dbae71512042da2300e07beb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=00530b02b86b9d98e4708b47fa7c7de5afbd60b9776c019fe19382f6fd7f71c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=95a576d467d743306679ad1ee6ed31d84c84a567fb5279d8fbcdc07203b50cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=436e8c8db959d08d3f1eba85a57d8aed218ccfe00bad112ec32135df9cdc8280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=ff0f6d65118642dcc7f056492051f487711d4575d27eae6fffa0836fb236cf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=e291decb06f927b330ad02fbab546f5d3550ee57d3e6c4d0f73a207ad20ef431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUYNVSJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Gccn9a4X11kd0cOaXwGSEVP%2FWJEcet6ZYtuNU0ELqAiEAsnzZGGoDG4aZss8LIjcUnqk1G9ACfyUqD2jLEZwr4jEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDDLx7chQd5kXQ8UCrcA%2F4z4vS8qfal5TYjq6LJnkbDA7yGQoaEyLu6T5lB%2FTYo7B3pP2yQjACK4tjRiiOjTdkzmiAj0wCk4pvGd4v3TYxE%2FuA3Bw4OfYlyKg8ph9p8QIItdltAikJBiRMOZrW6p56Qtp%2FLZ%2B7nOX9tb2Hzd1rIa3etDZC6Iw5dpo6p0fBjPVm0PKpbGROl7yr7CCDlDS4LuGGIF1wjojZWWzt4tuGi0zeRelhApbtooa5%2BrDsN8SlafuvlWn6n4RX%2BHf5y6Cmkll4bW1n03SqIzP3gkzx5I0XVFmpiCFapphVIyB6EujtmaPJLBRNUanPBLlHoDXOGV6014nqTwISK3LL5%2FITtwpXQ8eEKBkEyeAY4J2EzqJp9%2BEMs%2F1Fgcut2uDqGosI5yuIfa1CzKIVHLvaiUpnEiG6n%2BouWMsg%2Bq8mmhZUehVmhegriuJ0bPQWID867M%2BQ39Am7B922E4TAgsyu9fHkf6lencq1Pq7PLsmHEPJ63dMvWxEoZRiKsrrN4X9UC29ejZvWdk979WOK9V3B%2BFNPgeDyqQqKWgH%2FGbO6MwbgK3fRw3j5au4NGg3jpfUyu6vAVHe1s4BMLwupWYIT35H0gzfJRcC6Y3ksEykRN1Cx2EBuWmg6KDvlqWa5MLjsscQGOqUBhUQy0g0GFQngT5LEu5sWhNxxMLPt9j0eR2lRnINttV5rjBgcrD95WHGPkPd2kQyBAuh1KW5ykIbu9i8UGzqq52%2BDJhsjVwJwmZPN1B8pUWm4kz%2FxiPWIh9c7h%2B7sJ32cy046wpEsxPGQO8QhuG88UPGjbaQ1%2FxZ7hnMFOLTQ6zKf%2FvMF3%2FDl4BHfVe8%2F3fozkjwVP9Mu5pWRsYiClnRhH4EA1%2FyI&X-Amz-Signature=65105e3430fa9b1754307031c5d0ee7829a762c7e0b4fc297b88b7ab4bcac352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
