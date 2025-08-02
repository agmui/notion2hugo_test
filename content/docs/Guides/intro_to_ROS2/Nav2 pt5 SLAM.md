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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=61614fb183bf86484d919d7d1f54549ad4431ad352a657ec97e1a3cc0c1b4ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=089e27d992310c772095d7b3a0758c3b9cc5a7e2e2411eddf6a94915c6232353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=0be2ea2a07ab7c2d8257f8dafeebc33f90b850969133161225a3c2459e5a450d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=6f90d00b5aa20ce1ab5f34e55822cdea778329f068d4c4a909b7232cf1622a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=f36bc4504082a2d781c29f176e1a3ae88185df2adea72c41f9d4fc0001dbf4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=3df417a89d6b6d6a3912fe7594a3ddba8392d8b43aec263abaf661b50e688414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=3d436699c1a142bcf9e66a105b730b5a88ec6c2a38e13ab46ac63ac1ec2b8d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=ede0c0673c747990e3e6174eca4bfeb5104cba8fb14e1397ffc918ae15531ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=086e906ea0b82f4f766c839eb01713891339d1d443514b85edb52c945c895965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=1cc81d9ebf84d7da6b394d2274d8cbef3f0a872c5f9f3930b35b61019d0e387f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=1720a000d9de67f54ae53cdfc5ee2dbd720f88dcba36e22674e0fdc661161657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=dc3f73460f7c9f9c175cd28489f6d79ee80096456e435638c2cc1f936450231b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=5be51eea30f9375a4eab4483708c7f9be2741bc067590d9d3a36e968c7e930a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF4CCDI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwyayOdibaDSwZ2XbQVRTZHoV%2F0qeXGNwsLlDzaZD6PAiAy02eMq%2BTH5PYacwf9mTRVJfmCZsZ9pia2%2BeIC40PA9SqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZmyd27i%2Bg6U%2BhJCwKtwDel4EpWq3j22kD8X6H0RH83oyrf7wrp7AfrjcTrnLuyozehERUZdEzrFm0gqe9IkZrtellqnLnwMSjv9WoQu0ZYZd9QFHJ0CKGrfmnwc6IwUKMaaybnA%2Fm59tqEdqtcXHpyioDGkQ8sSmmkiMiPz8zv4iyzSPdSv7L5oeh1E2eNzWF6c4mfBbpNFRdPhptS7TfB%2BSbNwrD1TzBzD5pqhgJsQhaIEVZ3w6IX4GD01SovnXE2Z3KaFSydoxjsxbJh3lCrA0exagfPF5YXi%2FL6fejf7WQ03faXhCEn6z7mcVgG64hANntnoW06TnfGlXDlR0igrwM1UoUKGFeChVD7ge%2Bw7RQKt%2Fu90o0Chf%2BUYA5skzH8llbHxTVgqUbCYwLb9sWlO8CqpMBBHzC3oXyJDb1Alo3IA86Y1zAxmJEk31jEosgPdYEtxGBkWJA7vi%2BYrh%2BcAbe1%2FZ5TIf41iNH86XDkLDpK%2FbS0zl4NdSkGtSpRe5uyJJvj9eljBV04c9eG6CWZpoQ05y%2BctWabPM7n6e0hNTOeO8opxuGD6ZT13d8WjF3u8xzkFa6JbgNw6OS7K6rAsP2wtu2SCHLyWya7OfQPwemwsOtWMoZM1Grc7How26Sc43OaZiEKsOFJkw%2Bqy1xAY6pgGhEMf6xGLVyU0kTsjlyvB1I%2BVLfkZu%2FxaEdHvvGeDuoF1qJJxC1AqMU%2BsOp2hPy5ZcSCJiR8XG7yWkJmJ%2F6e3JsYmxfysvsQmyg%2BAV7DcBfm9uHWCJl46EoeTSB7X9uYKowMrUJLWnZU8CDFlJ09sEVUmdi7JwpSpfS%2Fe0Nk9F3oNXJGOM32r%2BJFOlUmQvXA7vQ9%2FUggtcuYbyRUJhmAYb4jbE2U9w&X-Amz-Signature=d412a1153bba25d68e1b196b10fe62927c1085490e41e2177df4df3fa492ff3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
