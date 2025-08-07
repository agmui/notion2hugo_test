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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=f5b2202ce27860910cf48aa2bddf701ba9850ce4bbe1afb364dce3287a4dd376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=d9fdd6f4726d35066397d17728c91e4f2be591369fc3ca83349358b309711d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=1b0e7c81e64021fd1db265b88ec40c023649325dd27ede22931a4b6c5b6c0fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=6024b6db5834a60731256f64b7e526bcf8ffab4d78277be6dc33e36a279563bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=7d278bdc7751090bfb9b61feb7d8f64ec7559e131eaad25ecebcbe03aeff02b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=c957e5b45224885aa2796c387622dc442cf47036d56195a82617f7e199eab79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=3dbe652b33b123f5989e610fd831af6bf1dda5bfbc747cf405ebce29f49ac606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=7d871f14a602399f7be0c44261b2d68affa15ea0f6b8a9611b9bf696a662ea43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=7c623d006c6a4974a61fcce13098bc7a9e34ae1020fe932eb22de877451ac823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=fad4c2cf498494a8ee48e57491bf5a2cc880e6fe8d053a4c6cb08f4f82f1eabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=88f08d40c0a94520bd563da726e6c838b56b3a7e9cea1bc3e20adce95c080ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=76f3c332230939ea36d51834dcf153db1942123e7e2dfa06831c08c13c9c53cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=50ee21fe51ca5c50742a43cd5209cc3486db6decb3327a1bcc65a890b8babe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEG36IB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICO%2FxR7333X24sL1GDsK4OIS5vPS4yhaJoQD3Ul7DjEyAiEA2bzwqe22JllDTVaMMXrbsnXl5aBph5Lel1ZQFZmU3H0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8jxaG6gpks3mTSpSrcA5Jiyzy1WprYxfCPM7rr8QNGAwiaQ36C61lgg0dYh5GQIN2D2Ti%2B53Vcz6Cu3xJ%2BQ2d%2FKmPhNSEOAHT13%2FfZXmrJvRXfH397jrkKvRMhxv7TanjiPHRSdx8rH17pSR1Xpg6VBj%2BH50dyqaJqf%2FMcjglG9pC5d7dWW8FSqffTaKiux1HkU6YtMmRJmyewuobphQLFHMH3X1177L1gFV0Kb0S38WfLxFyyFSADskJ9gCIH94a0yOafMeP52abBzJCd6yCjZRJUHepmsR%2BtwGbQzR0ymdZ%2BtLbBN0Qb2lq3cUYJSnyMGDIXcxgi2GIY2yE9GcE1f3aphXohuGOfGHL02AJ9RRcYEUU%2BA%2BfKyIEI0uqb3vbqbjDeOJ2KfDw7RXZrR7IgAZvQti5gYiWOmrhYGh7pQ%2F%2BxvHllI4iQeeIwBY%2BikVmxa6HDYNDAAFciNl55I0kR1z%2BTQoJi6ZN79TTryfCOAxDRFFXgk5Y97xk64IGdIz3ER201O6ra4Byx3JJLPU7lrEN1GwjZiv9toAzkVmYwCMBuHuIZ%2Bdepx0Lzf6dAUi8NaFfKBGP6bqv8jRgJq8PzgluHcKdPa44lV0pxRSatdyCCWidCl8Q67reBHJQqRNwLIqFVUSLYUb8GMKD50sQGOqUBofqLQHKiqj6gLpvdnXynlE2hSOrX50PYedQT2t4UP8K0%2Bp1wiZj3gCgFFBM9NNde6IIIsSD9BSsmlWfKgRpgTDSxYuLu3xLyYngoJ2aPnzmHid4sFQOmbg2RJzer1h5QTQAT4%2BLx7r6F9E884I%2Ba%2FRAmUfBL9K484H1ZwnvMVgCoBBn91kvknEs%2BqeS163DgBnchN2RQteRAaF0ZOSydrN8qjVEu&X-Amz-Signature=51862053ae29df84ee14fb35674a6685dc6a1b73f2ba396bffa7f6324b0489a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
