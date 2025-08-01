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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=8f684e128559207e3e792526c611b6f7234bdd425424bdc3e1edec41bb74547f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=ec35466398eee2232634233a9a8930439f1265572038382bfe1d60f80f7b93be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=82e30a9af4b2c576120c2473fb2cd022093c3a41a307f6cfd8ee88b0aa5a9b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=15c7bb06863ea0897a5e55a2c5679eb224da128f553e9748de1f22c7e2edd0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=5af6921672b5a2d6930d5734043831a54896681e561d10c485c0dfdfb7d6f054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=23ec6ab2878e9e605bbee8f67e4662c0b4633cc4bc7412e21517c4de11aee732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=0d681e42ba71ad06b1d721612419cd529c1dcfcb27b2263ce1069b9d6066fd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=96d45dd3730af91ac54145b313dda4a5d8d692878a849d02f500fa4adf274aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=cc3a5ebdbcb614244698bd6d9e88a1a1222ed489dc1f834094c4c1f363fccf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=8cb6cf1e91e2bb03f934a513aa9a6cd5eb9a4d1a422d395a1b0afd003ca6e76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=3bbfe310cbcdccec1d3c505bee459b70ac612d36a4ac8b0dac5fdb64911d8280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=801b59901009a006f5198db0bd90ffbd52b5b6ebcc31dee1f9f6ac2838ecdb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=2266cc1dbfeb82dde1eb1ff70ac742f0f009362436bf081a32aebc8f77facbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=75ac2d115e3bfa3864bfb063633166617142cc90dd406ffdc371ed652d26007f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
