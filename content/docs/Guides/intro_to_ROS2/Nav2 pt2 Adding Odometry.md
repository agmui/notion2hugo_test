---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=c3e3207b3ab57d95fe25260f905fbcfea6a41076ae3eea38d141c031a1f362a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=605f860e6e87322d24b0e98fd12544e4ef78f33f74cd05964166c41588b06141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=73bf957e86f6b9bb6cc03bae59fca62553ca2ec5d84d92636ce9e0490260fb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=8af6523d9cf4d1d4a101b9d739639df04ddf6d3b550eac493f4b431ee3047194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=bc4aca6dba55da8947b88b9447c14e082a700777a8aa8bf15a5de76742b90ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=501cd5ef101c71e49391819de64d7838a0c2614ddd6e9bf1e732848621fe63bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=83f6772f3dbb00bbde04306a2ed3d06658e3faca7d91695889cc72cb19999c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=2665f8c2f51db1ad7a89d0cdaacdf66e8a3fa74a655f788a5b378ce919ead1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=4ade02e01615323707b786a060401c2682c454f49143fd3610d46004ba8f50f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK7T2H2E%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfmE7VSFUeLoQhYEeM4%2BeeYitWivcarzvLccxFPmaIOAiEAu1Op1ricfe9Re4%2FmmEkz0KqrZDYcwK6BNw%2BiV0%2FSsawqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7oYuBCW8H%2BJLWMSircAy5GAHKeKRgwqc5iVPqfwJi5ckbainTZoY2x1jXm1oSw%2BdhRjHNBUydrNjlV%2BwQM1r1noDAgxEGbedO6rNm5vJ%2BswdRFrswL2MmEZRGVcL1Y4pUTVshYAxWFZUcD5XpcyQE5MQ1pDzIlazx%2BIe6jyQJbDB5DtPxNtiGIjd%2FLvZK6GCfmnZPcwjAM%2Fz0TBYMaCYq5Rlnc8kvyfu3uDY7bIoD%2B27vQ6WGfsr27%2F%2BRl3gVZW1ktQM1gAXDaXfsS4Ja09mELC9fUfdlVINRFcWwWCEc%2BVJOoq6Z43lNYhSnm%2BcFDmu62shi%2F2vPJKUjRGi783tVeU0UIR2h6nyOCyuzJybniVo%2BHCJ3LpeiJsVrk%2FTOv7vDRkuXWRIuO5YcN89yuw4Sowqmd6gl9uw0PdQQnQxgdK8LXlNFDHI6%2F7bIL%2BNTPT9HqMLeFVfeI0T6cKYc%2BBbc6aYuNKwLb2GlExqe0eheaYA3F0cHok8CJx1LIfCq4mgsLyk5xtw666ODzlLrY3zz7eyVPiexkwP5wE4%2B7GPRHv4flaz9fV1XSoI%2BLrA%2BJUOXHCZIR6YViDSUzj3i7EqDyy7%2Fqjrh8anIe0wYneIiX5ISixyeJ1vMbbu9CB7uhxxcq4nvxwmK9hdjUMJSarMQGOqUBVr2QHuk80Y%2FRgR2mzKiNIn301grvaZinUAgZHtBLofQeu400v9uQ1tcgJo%2Bu4ohJWq%2Fx5ELoeC%2F97gzoRbmY11dUiRWNk4zy8UCIajXsxKj1yLltCkbMjRczIcbICnprnCzOjSDKyP6rUzmE5%2BVErws9Z8LgDzNJbyMIrQ1mrsTW43b5Fehpf1%2FOihJmaAF%2BlZ36bEjf8dE5VqeTZor3zCiDI%2FG7&X-Amz-Signature=e019721b49a8e93d6f006473cd8304bf4918d2fcb9c9c28ee55f4a89a1114277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T242Q42%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfuNi1iQloQsnRdzm2Q6PdasHCSQsNgN8pR9Meo5%2B8pAiEA%2BuLi8mxHj7kRgcpE0tk%2FIx9KrjkdYxw055F6J01l5lAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvTNsJCSyuLx4ghzircA4TilJPs%2BohGdEHrLxyW4aQLAsV3KXfc3SCsDlHDWL2gH5UvSnmo6JSppOxhcbFck1Dk%2FNxpsoXumXsCCnMUxdOK6osFPrE6HakJsZAUWsjhvESMpINo0FvvDSHdmXkZU0yv9O0UWWKkdu4yLHaxvBxs2aO6GqR53AEEdzbQC9b3Ptlhjobpy%2F27B8MiqA989W7Q0%2Fo%2B%2FFf8KyK9BhO8U5CTnpDFCvD%2FnAuBZCf0RiHksFLkIeT%2FHScIcEWj10YOBkEhfoUjRPGoOxvYhXJzjjbyUBSRsSuHsSi2JU73nUc8Xuy58PLbdvyqZTLj3D1Y%2BSOjRSVZPYETjrZK7rtX47w2MQxgKhdcX7BuSvBZqN%2F6%2BDErSvXEQ6qigLnacCscUxiPZu0VkRzdriY4AG%2FPk6jjWH8hXVCh%2B4glOwGil3E6JpkdmvMKebBmZXZyOcAFIwc7YFrdET6WJy9z1EqsGvdhvrkos5Nl05Chp5SIfgSyaMLD1k1BDwc1xJSjHWdPa0VTqR0NBRrgW7kifanhCMtotwIQZuxg4VjcaGOTuA51aPP%2BLKv%2FJlBEfKtN1esVsrT6rTCQCUc8geWrhg%2BpGZjsqkhR3umY8u1fy07cGyN5jFe0%2BjZcXrP2qcKqMKmZrMQGOqUBBkUGpYg7K5cki15PSeBSoH9NipOuIEStWMaCKe4Bnr030DozlAATpR7yeKFYYp%2FRA9G8Y497bO8C6INAR0e9pmyijntbOXLjbwg%2FIxHUc8LYEHZ%2B1nYIFvo%2FJYb3aT2HjYylsO1DmWxc%2F59RlY2x3MUBtbbIEiAkGZ%2F%2F9s1Ql63aJtsfi1%2BzT3zvqKjG1MEhE7hzmkqYNODMKNUTylgAJEpW3PDi&X-Amz-Signature=1ed1abd9695d001a1066147b80d5b746b9f7f727d9d3e07f364c00d9d7b6354f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=15bb7a4c27a42a43f4882bde56752aada9edcec4a1e88522bd7b16d3afbf4a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=5bbea0b7fd0ca75c55213703d916fde826253ee25f39f4457af783f7674afb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=99041c8e13beb87da92b1c30e0f4e4d81687ce27ee253bb4f7d81e5c673f79d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=11cca1ffe7fc51da2274e897013da3336596e3bf9436d63635b8ded36c2c569b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=473874aaf3ed02b2fa57d400b86e78ae8f74da4f08014e3216a910d9ec09932f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=74f0df9ee54f8edfe718bb5cfd45333897ac280c1f56ed2f44f4e0628fbbe831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=0d62decb79bbac1d6da5f7c0e2722274a7019075c7f4602c947c4b553345c5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGA2QT4F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccs2pkIW%2FirWvBTY7zlQNB%2BWtzif7Pmmu8r4hgEIIzQIhAPDl4LRJix1w%2Bi1mA%2BMk0PyN7%2FE4ByvHWPxhuQJeaJnFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynjvIRSG6kPOBfTDAq3ANAi4XSQ6mwu3o35IhkNmhjLkDGAV5vv3%2B2ijU3XPDDBOS1Q9hMK7fwOY9Xe%2FOFuIFYvzHPOg9shrwDqq6UuHDffQRjfRMq8F3nhalAkcneWqgbDzxQczRkpSfhz76FjDz217jc7tBeY3LZWR978RJTpkH9LYJnCFucA1W2cJObFprdPD0BZBNhPz%2B9IGYHhSiqSGuPPmo%2FjiUvjPybEp0e9Dx3mX3ueOBUHiMciwPD3bLcDyde5pqGx0Yr51w8sQSVckdGnbn1T2qGH3Y61%2BYeM%2FMycOsCZseYdArtXXAmP4rIXxfncsVfGcGk7ue2OcsdgBltpA%2F4AXnZKBz7NWvLSD9nXq3rNfK8VSeZZsK%2BsDFvbTlTb9Xq%2BOczP5YOxuhcNTgw3sJRCHxf0YytjntPgtb9VRMOpPg5uQOmS%2BIVSVipAqSl2kgsRhHJUq7eownBjrsWUE2kcxXR5qdgi%2BM2fejCljBJFAUsAWPkBrrRTM8mz4qOO3PgqHLwKvVdroJ36AkD9%2BGQozQ20A4iEl7PfGsiUWx4iAWghdnqWBmIZHf5cqj911wKJNma%2FmSEuV6VFtt1gCpZ%2FyDaDa7MpSNZ7BogUZSTQmZeBO7dqZZpktB6dmGlJ7%2B8csvFwDCkmazEBjqkAVnvPyX9z1Pza6db00sCL4klvWwq5tGwCs2bMYet59Wx2e3QCnKC%2F77n9Gtw3HG7ZWFrvdUdT0dElPfbZZJdEMktssAHly0cBEh6eNaHQJ7VWK7hBx86LnBqNrRAfAW%2FPCnsxkF8vut%2BgQCe%2FeLEFIDNAmm6PF93sgL7geNHmts5BP1XrsCp0lOdp7nSR57dtQJ5WIrReRcprbMYSdQNwLFaD9Nb&X-Amz-Signature=ef19c572457c29312a8db92a80b95ada0cf3de48b2e6dbafa90ffd19a746fdf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
