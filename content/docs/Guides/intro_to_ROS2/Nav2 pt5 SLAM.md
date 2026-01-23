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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=69429cee3413bae30fd7993c4c700c153f701e5466db3d4d51e91d9e4c3fe29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=c6edbffd54f492534391ff76c45b064fa97317f33cc3208596c5f7215441fe05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=710972598447ee1fa3160e971fba460cc48cbef384cac88d6a29bbafdd2a7e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=914813432f2c8d7fc3728b0988a43b309cc5c44fc930477f40cb80a889f24cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=9783645d27f782938dc6dbbed4c678cb34a26dcde32d850879e7a682513fd4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=a6158008a5faf0f2d5bfb66a1a46f18bda41a5191c81509c4ab1133f7bd341cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=4451a0ebec05a0e4a048ba61590e107cdb9b89d36fad4284c04e52b86abf9c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=70ec42f6e069ccb929412ad24db841f0b6ab602c8da5c29a059614ad81124e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=565c14b21d7ea0108d5c123778a1a7f6040b0b3625033311a5b549b0f4fba26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=102ac1f1a600cf5d2f8982775aeade00a5a97afe4173589c644c3dcf84471433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=ba8b32dd1ff9a120850f880bb3623bd7d7d8bc4b42d9e1d515cd3fb391875ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=bcb1cf019af5ca930fb4caa88c5d3bc18bdf7c89f9ebe3986ec0976cf78da3c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=71d23c91b5b06db2f63beb15b8eab1e95de4b2cc813b349a80137e8cc007f032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTQ6VUE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIClRAEljiOZMMBjXrYJFpQzOjne3pveaTdEj0AHani7GAiB3hAWGkr3ZphvWT1h4XQPFYZLkXDSRETfrTs7Tr39I1SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9mExjO0h2h19Z5LKtwDhBHtSfiqILpIasfKoeaIzq3g%2FASQ7vOHeV3zi%2FfICdAX4LFRsfMHF1aaafFz4cQA3AnXDSCXj8naQ%2B4Lr2u4pY52HU6F8tqI44HbAKD2wGrcNvenFIVaR0F6wO2601ubmKhCFeF7jb0GOdHzSEpfXTzJQWc4hMQliMyuufChPdQw6brOLTTwQBnwhyKN%2BAu8jV8936jwPWg8bhqDm8zaeiPzr9m2letsobvZzSxaXtIO8KH8LoMw1onxhUZjJF2zgC4z%2FlQ3xMCd9U%2FMw%2BMGzg75H%2FmRgaUBpkwbJQmp8pYGGEhgkoMLYpas9CoPE49d086nB9YhFl30rMYCnwwQrMTuWuyC%2BNqQOTAQfYt%2FvSdqj2dXazZhDZN13iniASGI5gSMf4h0hgsQeB5byVyY4DJpE%2BzXwg7Cjq6mQsk%2FJYmyz4sCpodBuwtLqUODqBw2JJRPJVUiNO%2F0X%2F%2FEqUPyMIFRsTG7M7woyqBYI0KLMRRqRdHi%2Bb%2Bi0AoS7F2Qa6KsD9m%2FfVa3MhgFUZTTQEz%2BRMRyn2i4J2U9IBLxNEw%2F1X2J2A1jAfkLljWMM6ABO43F7jSPVzP4Craoye99kKBVl7iXsAT5NaJgb%2BgMF45dBmj31LS8l0y7AYQOs6MwxIrLywY6pgGq7UQnvMyoFpwryPkYYNqXgkiLRSbWb6hKNRW9qH3ajdcfGwfJshS%2FYkZNlUi82zT1rCjfDIRAcbFtgAqtZKI%2FQfdLDi3VJVYaCKi9pnY7%2Fy6YNw%2BE6mCPoeYKZKO3kogm%2BGY%2BQZWGn07zV5DfKo8m0wnGe1zgXQck7cJGkMoqtT8Y9wFJj2q17Dr0c1685wz64YPzkVImuucM0vvap7QAaama2ze9&X-Amz-Signature=6349cd3f77b13dc7c7b9fb3ce6754d2a0012cacd9cd31fc3aed4a1af05b8a2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
