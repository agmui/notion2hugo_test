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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=341aaa6f5f2fe3f7e075c22e6d48f46844a3238784b921572613e317957d624f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=28699972d79a6344360a5937dbd701577f9575ab4ed95ef60c3f0b8b37937080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=8f868f1e535fc273a6df4e76eebf32cb2f4546629d43cb85f52f667e772e360b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=4936571e58c113bc418bab9ef773403155fc8f9fc21513e0c6eb42c8f7b16f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=d65f0d4f1fb0d1de073459df49992ae9d471349dfb1bdb6d26aa6b46010eca15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=d970f1246004d5cc9e79ddc06569ffe35e31f51eeddf89bf7c28cc2b6366366d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=8de84667d48a2f37b2792d3df7dfc24e1dca714cc0f9a6cf4fe21d0849a2dbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=635db4e25f2c7a5d3cdecf66287b6c28f90ff91967ba8183ea8a51593cfce23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=bc8bbda6a85697fff2fc4f1fe6447cb916bb354b1dc67088dc83091e80f4be34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPZRP5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcZG4spMsLDWsaIQeh3Wz%2F5o%2FKtPS89PaOcA7t57ww3AiAZWbb8SQ05851zZe9SJZ2QG%2Bqa5OQ8KJcKgzVhd5WnFyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMI3790%2BOo5h8ASvxOKtwDKKz%2BrtkJlq7d2RC%2FKHDV9QhXBnaCVwHKjztgFGK%2BWMZlLc09FI3d5Fitg%2FHkSEerK31300Z%2FPcHh6YJ4hs7H7ubw232xjqLRBAgKXaEIYWoq8adLhuJcHRAUJbFAyXTg3pCd%2BO12%2BuMoHZYKMlo6nOv4nMpzusE0R%2FuaJSAfrO%2BIemhETya2QCEWAogYQ4NrvIdbja0XJPFpS4nZ0s3SYziDS8%2BO%2Fo%2BoIAg41SbxOhqxtZzI10orQPrY2Sk%2BjeJfPTPqtdNjBBgCVDqMVCehcXPmGJGtOOGkJ8ZSG%2FHRxmyrl8z17A98L7O9aa7yUJapw5CvguPD03G3RkSiFw61pSrdTrVlsd1foWa2AzUNwmS0bORbwWkPIN2zuVtzmOsUrVTq1H%2B3LyW7vv5ltvLupUt2CL%2FQw8d%2BB%2BA5sSDznhTEkA8z4rnTRee1OMOg9FM8TDIhlbqmT6XrCBqB8xTBvucnO5BmakkjFgwqQie%2BheN7m7jlKMcnEbgWR4glIXiEFlqu0HGcug%2BMPoj4F73SDWiMayjTzPHMOfERONvR4MObKTWyN8leHQuH9Hgcv5ZlfAi%2BKKhb6twimcmS3yCdK749FD4hNEDunETcB%2BobdDUWRgONtX2iIT6%2B930w78bxxAY6pgGT%2ByT9yc88e6OtLI7ODioYAtxCWKMjQHlxDjbt5LvQ78QiLqixg%2Bbnw9XVIsDK4Wco3uam8YFg2GmzSG6VBaIaZlQx%2FX%2FXFTiswUYV1S%2FtJipNiKbsVd3Djoh1XlUp%2B6d01z5%2B2MEbJg6iLKzs%2FAIo9ouib0fz%2BxMQcL3btN9F0B2%2BzdzxczWY79SoFxWxu4ZfIL31gYJ9ho%2BzjjG5Lz4PYGCEbXNW&X-Amz-Signature=5050baca6376280e052b98c7265a248a8f493a80cfc6e18c9929a1257a604d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ZRNHKU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmiMLK5ljKYpsC91%2B7iHl%2BZuAa6Zx5VI1cmF9kJ46KQgIhAPp613CKOIjsSi0IOAXivIN5MimSuo60%2F5L2%2F47qx01YKv8DCCsQABoMNjM3NDIzMTgzODA1Igxm18X3VR1bA51zo1sq3AN7uXnK9YV%2FrAY04CZPBN6gHCLlSe1%2FvDexuydTzQMdiivcSOl5mru%2FkPhpEnl9XHq7DfzBSROgAxeQUzyQfF1ftwdm%2FmWyZed0RnII%2Fu1hQGfoj33V0zMsLRj5AKIIFBpmvwOP48CNVBgclHJsjMdDEwYiuwhkLyXlbhWeCmiB9dB24uwgYyYpaQGgXKW8FfpZRZIgeWglNRGDfTXA0kfSI2kPQtEoomroFDjqrqeUEjErAW%2Fs%2FtGmJ31y7umWUzBBR8yRr%2Bdw8pPP8gvTYp508n7JlgfRWtT8TnU3Q00v4rt5INVp%2FIbC5%2Fsd%2FwUlKrjueM0%2Fwk8r0zvTvbu%2Bo62ktV8S0r8g5z%2B3IyeQDMumydeeDSTQgtxiRzJOfYkpzAmyWWgDPawt2qPpJPD0CkoeWn%2B8sjBNHlVOim%2FBuuVSG6uWMVVSV%2FEXG014eB4Q4ES6xPUe83AjJPd1BjhSCNi8raEbi4s%2Br1fN8h9MbBpvwTfcCRyVJcDNXMcd%2F%2BOIEIrr%2FsIwy6KRQn7tXy1DYr0Q1aNfgvxoqbLOBWyk8ArU%2Bx%2Bm0OQA6CSL5WuW90cxyuZx6G7nv1qHLie3T4gx7MT1kDhInN6m6wetvaLhZpQwHvi1i35fkJJfypJU9DDPxvHEBjqkAXrO%2BSyd9f%2B%2BN7A89RFMkj9mjJWhw7D0iIcWihmlehgFu5Jr8NICERQalnhuzx7JauyD0Sb33TeHtHnq3p3t0U3b6Dl%2By%2F4hkd7xRqtlf1Uwz5HcZv4G08YBEi0XsL80PKlyNwdBarlkx6OzMJAOvlJq56RKCZZ%2FTvGn%2BeYwKZ7mTGAIHP%2FQg5UtYbjWOtPuEqemfUUiTbD0guGNe40tWOmVm0Ia&X-Amz-Signature=634e525778fb9ee2eb03416fece03c273a3ba34f2ac0a8ee75d5abf136dc4fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=1bca287530d1b1e74d08b340364d06842b3a007e82043a5ea9ed66da3356874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=e6755d6358a3c703dc737e205949b5bbe67269d859df4901f2396ea41e99bf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=4730d1143796a1693edb01a8f2ff95bd91aee946f34b5391f85e4febcb39c4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=b31abd4d8a1815eadadefe7a5ebe23a3b0e47455721c3477c97385d39a01b237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=e0f545700edf0944b168785cdb8047190e7a2d88ea65e9cede001a61b0f456fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=8f630cc273fa8202838230d5c67e3f91308ce6922936624634aad5843361e629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=3c3b4dae3f59c8c1732abf0e9b4e37149366ed5ff9e6ca22013b6988f3ae7ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=85474108f8437d92d818ff9b7e5eccbe7b616f7d01153d3c412f6d5c328a7203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGY3LDI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJvn9QI8TLR8i1JF3l%2B2AKsv%2Faj2tTCilyFxlBOv8VdAiEArhdhlU3m%2BVZIZXBV6HsB22BOZSqEZD8pxAZ3oAYd7YIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDemKv1wgcObhE1QxSrcA39OqBb96m3iKjbGebCsvtO5FCBJLRM1qW%2B6EQe6rl5G6wHaODvQ9t6L%2F7K6JT94e3JSEkyBQPOQHHhyEsw%2BGi2JANNLSVJ8d8PImq86M4LZF57wh6u9o4ccWs07tbYAy%2FkLQIwInU08WXvafAlpuxYB2kjDqCbyf7a8hsyEJPOnMUcarWW3ngfw52PX7loa2fXvgHYmRPOEmhu3STNBWDtetF9L%2Fz44BXY3L1Hje%2BFMnWWkw8CJ3SghGihSvIllULTJJ3gUOBLoGrZppM6HQPeVzwJRvM61wsGE9GvyknmFkz%2FvR1bqa62eOUwWu00%2FykJxnSoHvrzjFISE3WmXhG7Bj2f232dyFpHPuDlN6tK03xBfCJFBe8FC46%2FAb6RXBTIYoCNHMCnf26T0lubrXkh7ERj5xSV4F%2BtDRfkxwDj3ooTYOWL1UlrM6ZmUUdGmsYLVR2aiyeVKO8QorLxLdAxTWKXIrns2L7gI1d1DF3WmaWpDQvFAlGp1rmBYsXx1GUiY9wXB9wODIO1YxrwM8eD%2Bbuft5rfBjRX2BJehKHcZEo6O3YR5AzIkGExNi6i0Frt%2F%2B2Jvt1APgLdVtmhFsLdJWjB7zFotB0k8nGjvvj%2BWbqyNSeYvnNtAuoTdMJnG8cQGOqUBFb%2F2L2vfOtoVbUZ2W2cSXLPiSGOEG8ibzII54Xgu5hS2RaUKfVejs6l0tH2t89bMBMYnqQR7%2BEtrPF51Ac0RK7AaRBL%2BrnekIQmQf8utM2vuLKzpT8QaWXZqVjVd82vAwVRkAGzBvNCoXo%2Bi%2FxciKGgAFxgzppZaqyLokYfnS6ubGs2NfhxViTy%2B7VFiKWW2GE3dMkibzLSWn1vfsLhF3ASnA4NB&X-Amz-Signature=e02b4f99a13c5d821fa9255eccbb1a17bd0ac864fae20dbfed894c1d3d741331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
