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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=398a225c5b784142e521193d121c9786609b565da68fc1d619543172ec354c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=fdfd17ef206a9495a7dc1bf60f218f05c96ec255b75618b25f57fcc61cb75be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=7774dfbc066425c66b142c407edd4884ba116f26406244876e8158fa75d21bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=5001aa9e227d3d1e312ea6d9ea9b26e6d9427e59bc1bc71ca34a3471d647030a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=9e98d072a7910dbf3535cebf1af36d7f1df6fe373289d837533437a017d7798a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=68f562a95f216f0fdc26ea3d7afaff82ad767c5f51034152c903c424e8f807b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=62b463aa7043f0752d98834cd23b50612432ae13a379ea59f6d5d8a5c623fde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=431357329ec15ef71815e9176803a3d76885cd5b31e227cc31e56fcd81a5bf2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=c280b01b04acf2bb2c2c70cbdefb8e6c0f655ec049f5b39d699ddae53cf63383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=79393e7bb5bbd1ab3a99a7e33c3568396b7128dbbe250d12f6469035a6e681e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=4201fc8ee13482315c11c0931f04a95fa75564497a2cd7cdced83df93c09ea07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=4f03e14708a75fe1133705a70ff245a046095b82e59656f9b00351beffdefdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=d330192995fbc6963e3cbd9378150f2df22a7e6df99e5aefecc381329ef124c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAN6RJT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTi1zJQY5dBUjp9VtuhWlOiH8ZrRSw3g%2FyfFNqv%2FQfAIhAMIvkx3ltjeoXYeZn%2FohbuA9RYwxInamRmL7xywCpg27KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO7pOY03NXop4kaggq3AMAxb%2BFfrmVTEL%2Bjy3E4CgQaEP7FAMhaLaaRHNyr5WWVN2FYGk0cy1ThkIhsiQUKj%2F9WplDMz2sr1OyJg6uu%2FmO2%2F8KjEHkWPu2QSIj3FxqB5ExCDiNxliDpe7nuq4ynJuxDe3%2BpEQYS2JLMvTnoAEDXXl%2Fs%2BqLPsEOYRLKtR4TtS%2FHSn9JJVXCvQFg%2FuNLq22mMvW7yv7w5GpZ8UGKsCgpJontauc7Sw%2BtLE7t1YcO85VM85rWPt0GBqhv8CaeuSFgKteKG18rcoUuRcplFoDjCUV2KZk1tZog2UEe6ka94GhNDpFoG0I30ZBFmWx7AMJosd3CFbIRyiOrq1ghgSIeRQnEDR1wXKFU03N1HjdmzsL9ALmQHSnS7%2F2m9NQ5W5HWBSKwA4u8hLfvz7ZRiad1zXvdNxfn6ZQt4J6EQ0cjh3w4ReNH%2FpZ0hsmE0%2Bro7IBV6p95JN%2B1Y2aC3dE2viDS%2BqhonqzQNkwb0wyVJTp7omGaPIsp0P1nbUQzaJoQxHrPaFQj1Prpty8hH8iRrCAPQdSGrASXmeCVN6sfK92Fhp6Ld6lKKnvXxQOsP2fs%2FUbexr4bjm7G1DZQjx4SaWlpdXqul1YlCoNoEdpKh2BWMAbWAbPzav7t6IphYjCcparEBjqkAR%2FaqJq9xUX3sTuvXUWgJz7EuVEInI%2F3C9JpjUq%2BnFezZm1B0Z0byLmy%2FaNA4b2%2BdIAavtFaYHpgrOTSnayWeNzzeA6ZREqpAPaFFv%2BrUvA%2FtZboH4a0YyQhhUb61mGEwCn7AakOJKz52I2OO6FmQBcKB%2BstVKNpXtSUfVmMdoCQZuTEKprmygocInN25lWz4PdZ83eNxmqryEtSCNPpqZH5rvUi&X-Amz-Signature=9812ca6f98d237d6ffd9f5a9739a1b2691f481e14cb1e766d72bbb828a32b239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
