---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=55bda9e8e1065a5db571abb3e9e0e66222958cb72e98e187f70889fefc49e2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=ce5aa0b2554dbac22ca4c2bc80f74f461ffe7f1ef816300d4fbc09bc5cfc7430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=049b2f16f50ccb69c4f7d10189d7a65c57a37e5ae9a993fd6a786c37c41be9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=26c6d2f8d7c959e9c8ed686eac029d8e6ebd03b87669e494d2d5909590ffdcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=a40317fe8e81a40a3e31b17c11461bdcbe09d706fb471b02a5233146b89b346b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=651da968dea1719f79c23c96eebab429af7de2e2fb630983f1b97792164167e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=5339dbe9daa133d27ec7ee6f62fc229482bd7e6068315635e94f8d40cd5f41b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=c11bfaf0baac34bab85b310b92e6390e22a03df00d7f1466fec0890173620e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=f56167c4197aa329ac01e7395d5d4005667a0f3ee88839be1b7574d386056148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MTYECB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJH72biz0L3Vzye%2Bv5W9F5kLxhKEPVK56sJmBgsRvFIAIgL0Vdn45y0c%2FXR1wGgkS53%2Btmdw9aFdai1VWp72Qo2q4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAjUzJCeUVLrqLtCrcAw2czy7XLVCXbx715wpK%2FFwmMsRLhVqCsIC8Q0h%2B%2BClIMNXFITbE6Hb%2FT7tRoKHwZs%2B3sA8y4ZvIyUcaRHohYt3vbQngYJYCxei%2BQnF8%2F0jET4Dz3FqA01%2FldmJduOap5qWDObgDEMAA5u0ILSemYTueFjIzMsb5VJhymC5RcrI6vzYkA3ta6px1bfrLEbqRn%2Bc0p4pYoIGdZU9Qa3TePg%2FVqcHcfs%2FgAFr%2BP%2BMXUlXuYUJ4f5uzBLE4j91kbXqHcCogsDO7PX1rLhyhYL1GWgQ9RR80CzycJeoRk7MLNm6629roTNC2QI9GujGK2mhCn59gF%2FjbB3UsmJ%2BMwfcB2nZjOFDElxUWj2nYShp8e%2FqunlIi9X%2Bwx5MryR7IZQ65Ffp%2B5sc%2B5YCqjijPORzEr4V%2FSykyrgrAUsbnZ4e5mAUvFXhmkcrBB07E3jEuvxgMKHewTbtlv%2F%2FMdIj7wQJB4%2Fg9Tb55fayYrohjEQfOGWqkQRmqKLMVSIWstAYw9VLSvqkCmffG6Samh5%2BsYBBPxYFxmP9NjKMStQ%2B%2BXzQbPS4ijsIpFdiYR2GN8rooFySvY11VMTQfGWoUWp3HIM4ucYHho9a7abrEUAMLSWwhO1WhfrFQw4ezUE09H6Z%2BMOX14MQGOqUB9GMHM5cXsga9ozbuya%2Ba0bye0w6UHS1%2BXP9VwDxm%2F9SX7ZGiJF3f8EvnumzqjP0BeVVwVTwwRvvUlLU5mZlGOxipreSb5IcLK4soxewUrSPw71DiXTR%2FEeg6X9Zw6Jjz7QevrX4UwFZRmIdJyF23Z52Ivss9zWIP%2FZTo9m90coS5IIPY1jHhXlYU6puSJ5keWywuWnZMdNpk62s9qbss5zU20okW&X-Amz-Signature=020bd9fa29a1027281ea48bc77545e884bcdb7f93eba771f2af60f90ad73184f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLSONJA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJJmq1kBARWMnMjgrTQr2QaJTqZCQMDMRH1T%2BWW6a6OAiBZqJ7mYzUEG7hqGI5pm%2BJCPqHsAKjB3OcYrmK4FaGFsyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1HS2q%2Bk5qk%2B8R%2B5KtwDXfNrALmSZA9DEOfWdrZChYLOcmPj5y79uq503UYBunOkR8wRcCDk%2B%2FoYM9s6PfxL0c0JYkpdigLqQa%2BP7rqIvTCM3KBTQeekDIc2uuE70D7zTpdv2mTR1K5A%2BRohgbzzMhniMOTlh1ROq%2FSJeOz6LltxIP%2BBe0HDrMrdnYW4hjeurhbfnWRAu51yrHJjxC0LJblbe553eepQnPaAcvk3Sp%2Bmkl3UMmDayEN4ggNTJx21e67HFunWc9DZx1o1n4Gvx1ZjUAEbJvgv9ceS%2BM3K5vN3Clajav5p%2BSv3ymG1O6ZvMiTUVT656Cmw3wxkFQwHSyrRh8BQW8EJQO8qc39MUJk%2BpoxbRU%2BMdmwCyYsGb3uCJkXZHbeMIy3gsf8Be62w7vT3GEi4jI%2Fd%2BqgLxs3jMi0B%2FO0ebtGSfEcpyFIXd059iLpvMIdqg5b6hPRjnrakHgQFmsN9X04attTQ82Y7YlXTlvtu1pTPUhztgZaiPDHtO7HvEFgGiL3EctLu47v%2FKlkoqa9bkaGfHv8RBLFQ5GcCYavJRZjoZUj8%2FaWFdapOagfmmrxCHlubTHLyjCGGolaQy3WncZcV0Q5XSOj64bV4ZnFRfLfJF2HPmekvoWaTwM2Rn8qQW5Y6mYMwqPXgxAY6pgHMSLOOnCBz9SoDdkx17UfHwqn1XzV6brHXD31hADejd6rq6dSOjQsp8eWaozdWiqrmJh%2BvDt%2BCte9ubSbOJG3Q2Bg1kqQOi8cKJ7pZ6CKwgOGA2ADAbiZH97yrwI92Ct63%2F9oscxP8gJdinIHfLt1%2FPSG8qOvJGN6AZSwmTrYHugwCGaPIqjvv6uswK6ZL7xEQDBLw6UrCSjf8P7AwJUc%2FhsXW9AOF&X-Amz-Signature=18d7e9bb9d3135df0c9d7d071cc3d26f77242f0e91710fd7b6a993cf0ae848dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=f0543f7c15180a0cba6004ae67e5563b2eddc3efd2866f3041953a44a1ec04bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=3545227dc1f4f4260e7ca0fbdcd5337c32dd99b4950b7cf1f6998aa097a4c561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=7b94ecac368e3d59da3ef199be921a3f7f405dd9e444d4678882f13b4c1872c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=4992b4e9f3ad34aa7d9d11b0e6fbc1fc2feb120a734a4d107e71b024820fa70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=c0dd0b143dfa7c15d43c53dab41bb547d3f585b1f7f632958db697918ef358c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=327b79c59555e0961cb2172816265082e8a26f8139b8a47a38c668532054f9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=d9ce72898177558fb656d246b50939b03033839274bd26a3d910eae3e1dc13da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=c39b52af4b1d1500554303fc3a43dd8c99f9cfc0affee12e31b4482ae209f58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RKSQEK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyIJBxqAVNmQNdXdQJhBO1TRYKTQau2oOarvkkFD3VAAiEAg5Xi42Ig1CMtndUBTtcF8ujIOBRiH0s0KKbT7sWg%2BJ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlN59ifZOdvS5qooyrcA76bcUTI3xRNwCGEz%2Bb3obOPCBNKIkO7Djj6XpkH1AK1eMVp%2BQcmAWo7Gjpf%2B3XkjjbkywbMTW0om6A6OVjOw5nHUA1x%2FTBu%2FjVVrucqkXm%2B%2Fb5dOY3KGEEj3wBYbubwWbHNxyDSD13Lm5SuHxQ6iAiGlaof3Snq%2BiIATNN64M3SP2Y4davCjM5rF6Bgt%2BRg%2BG1rdB9l5oUUikFQG7hiRnxojoj1dmhJPaCptL0dT3tXCxdMbYI1wnmL924WH4%2FitxO%2Becz8SQ5Fu232gvFWiaidk1e2tv2RdgyWVmzf%2F3OaAYhR6ERjJmgngaPdWlDD3CRY3fVZ%2F6MzQiqA%2BP79KmMBWCDSBQRq2wTrF8kqO7ouytFsX3LGKPErtlU2kCmCc77IQaJ6xap8RImx7S53%2BMUWXL5Ygp5%2FTwGkHC1OJSKoraPtPozDPA7XbNJAK8H0QdJtS5LG2Hmuo6g1xLcWSorpvlj8LzGOLuY4woN4Pb1VPa4R1TKxq%2B4woSSH2ijNaid7EppG2m0efzx6AJSkXLrJhE5jriKidUPGXdBWc4JufYcdA1ci%2FajryUjlxjvtpCELo1WGjQAe7ST6gSUUXKKYWCXyBLFOCy74huhQhcpz56zj5RKQEA594%2F4pMIb14MQGOqUBRsoE9zmo7hbSGvolZaoqgixsRUVClHwzYArL3Vs4IuepWLhkoGdmFY%2BUuh1BZ9ndUASY2YziJCIc6uLvV7ULPjYZLGVaLbZGdgSqh%2BP4KL%2FLZfCyvUy8tdQM3fQlRrDxGNZm8tuyOHId7clMd9Yo7KoHD%2BMQux7oEhAe3P9bRjNrOW42plKWcMkqAEo0OmQWRqI5t%2FpV9KMrLtqiHNIJjoqtveWs&X-Amz-Signature=94b35317500f8d00198ab7bd7560f65403afc990cf71dadaada7e2bff67d807f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
