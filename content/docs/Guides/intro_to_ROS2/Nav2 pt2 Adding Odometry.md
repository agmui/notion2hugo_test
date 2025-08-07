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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=7f1d05a72d3bdff0717a07b14eb31325552c05d39d8ad7188bb422a82f219315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=493eeeb9400f52b88d6f143e2150d0247a844f15ce7c2c64e534edd18a38a93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=61bc4196b89514081c9fb48095807e35cbace09455838255fd18e6e94c2f7dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=52e5bde192bd983f2c70db65bfec17b54a044baff7696c2a5d5a87f4fe65d961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=498612420d6409c317ffcad805ca049def266b705e82db6c51f0b441ef6292e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=d31f51a9f3353ccb555eb8c6140eb23a82d5282464a2ea94466dc555b2924301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=042ca06432e0dbfda3257eaa2329619c467c2331200f9ffa11f34c2be443ae6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=b0c0147a052358f9d66dbabe0403c6acfc5d89883f2f9463dbb8f126c34b846a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=0597616e7672c42f9c5c01c08f99dca4235358de8382846924027b0692162c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPWBIPK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQC2E1n9KeHenT2T59d91LUexlCISabsItcLDrcYcyHbMAIgIL7mS1qWkD0uamR7lapNs5j5IyBajlp41KOsp2r9kX8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDorbIMHXmsz1m7oRircA4R98RsBoeNzmnCfiCIt1adGqXcryAoezqLoRL23%2Feg%2FkMU4Goqqe%2FUoXqAhfrw86QfsroijpP5FaAdGN1n6vvDKEPjNluxZx22Nq8L6AX6j24VC4l9bLfFt3IQtMGRp5CqiLX7SPjTmsJa%2BUGJiwQO1ubxhqo%2F4KOGFpEcXaI5gFvNYpOeGmRbQpp%2FgRKy%2BpQBHApSYAtNATVWokcK3dqQqPJAbAASXsPZ5rpd7rwLNr%2FgH1qHdXckPHf%2F3AXnIgPb1DUocJluMR3c01DfE13oh62geXUrzFdibSHjF5LwRjIzK8McaDkzQE%2BBtzmqd0RXLTf4rDyDjMTAZXAwhyePK%2FeSxuwLAoRRrNXUNUEVpy1tPO1NxMkDMDcbQufAgd0EE1Yrrt1JocrYjomDkdjYpsYH7Bk510j0Ch3H1C1KhgzFoQ33dKfus2uvLZoJahU4CPpp5%2F55HK9iPzHmSXVptzsG32a4z02bODDWwZprA7l1dfJg8ATgRdXxfFy42bouIJpWXznUXT%2FKIFzm1q3A5YFxEemWL29oKs6Um%2FF07z8vwgpaQH6N30jNVycVSCbHtb%2BLFJqpWeS%2B4MYK0OeRqVFHDz59Mz2DIsuhQmhnmNuhcFuUi0uXr2d2YMOaQ0cQGOqUB9K2W%2FmKxVUolqrSVFK9SL6%2FPq8fw1MgHcfEq6pvYUQ98%2B0T8%2FGioRYx95UGG0rlZN2%2F7ABH9mUoO4YOxzJv5Luh%2FFoOiSwgkmznYrt7Ce31mW%2BgJZZElNvLdv%2BSTMuq5WUP7t3uas6okaII4gazBgmCsHgQ7JQXYMROBmf%2BTZL%2FmxWhOeaIqVzPUZ0rS2LXzmKYjyT5Sew5OUMGeeHdmol4o43IH&X-Amz-Signature=c97696507af44b10ed1ce1b9d57c818de7003d907743d311557f1e4305c67476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDHTHVR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG3TLxu%2Ft8N4PViET0w%2BKBoaKEwQGoW981kNl4KRVS%2FXAiEAkqEdhwRJFX0IjaIXAKYYGOIZuh3eiFd9F6oXGmPDAngqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7J1iaDgEtoNbvsSircA3%2FjgEv1C6Yd0PoEvZw5QZ1K0kwlaOnp6hVr7zEahJ9NthoJtRxCvFZTvDgIrYiYoRM%2Fn%2BFJ8UppdqlPdsdA4rOT0ydXvqi9gHF4d4hyaj70ioxJu2E914RP4yOfYfIrKht7jiwp8Ze1dMzGDiyx4hKJdKQIi09ZEBF2z%2BQGojV5xRbTBANsvBAw1D5ZUstkdSKl6GwqjYU05zxSZ4XUmds3PvT0ZLxPuFxFHKl4rKxCMoprlR6wALwC0fpvypi%2BWcC3hrrgGQOtbLdGLBO8mY2QRb%2ByurNHhg9c1VV8fcTEfvNb3zAOln4nmUzOzM3UwZvxMzJj%2BQ0G3BxDaTfxdMrbxi9mwnDKGOLCFnfXlAE2m0P80KzKmvvMDxpHCqdcLIwsMOa8%2FKTrvvNU8O848v6Ub5LfBaK%2Fw6cXt08bF%2Bhm%2F6G3W5%2Fm4STrsApqCMaC8G51LvPHJyjRvAzohJFd5Cdbi8TbN4BeYHvlB9SNhnhb9KpTt1Bh4XaIdbvFqXBFg3C7024AWVSq3NWWR3aNJoTI%2BMlk%2B495%2FXC2TacZq4h6PO%2FN4D%2BOvdEvFHUNCqTQmbjQ6oVx%2FKuhSDS7BSuvI1QXZOoeIXOVuN400wgnFoNqtLXoHl9rrbvw%2Bt3TMJKQ0cQGOqUBRIoSpjAriSqNoZYTXO%2BC8eKK1hiYmI1UGj8Kuxgw8SFhNtMLlLiV82P94cJ8L5ge5nwpgyoGft4UB9qGqFMj0TxEc1kGrpaQ9wBfNVfm0jVpZ%2BI6cCVeiigg19sz%2FF9TPhgyH7bPns153Yk6G37OrpIzYYiWk3Iw82bKsI1jMOc9DXOpmUFceKx8WWdMU9aNR8S%2BIbi4WAJ9YJXMxeoJEFHENVLu&X-Amz-Signature=d6ad8ad4e2c3aaf6d201fac8f97c1a82a6f09e2d1d85d782bbd1d61d5a83fe45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=d73ff369ec08872d5aef2ffda280be1dd429abe92a2ba7708f7186e1934b85df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=d9e485aff7e989b5b408a4929203d7476e7e6a2b9ac22093738c970f84fe2844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=04753c00c7369e31d8de110598cf7786d650fb454ad109b09f076bef6e9b7a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=265592a9a8c0ef9b789337dfb524325921ccab4c1d9003b8db0d595eace2137e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=07df291bb070ef880bbcde4e20b172e0d72808dc46011b4eebc1c5b5bb02f21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=64e46f8357184e6d49b66623c3701cf02d55aa3d29c17a97b1d901b8242f5a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=1d1696ae966a2400406269a187b9f18383c052304f1b9a4057027fb8a5aa9b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=17678d37efb9fc4c17bdcfb0cdac2f53f1c18cf98802cd1f8fcbdf10f188e3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JHVQNB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF4hw8BKfdXfXfeJqUHp%2FV3DMMI2DbDOkzd1EVu4QApgIgUR4ib0tUkXUbshT4gXmGbagAAFr%2Fbng%2FoT2lxEeWTFEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpzJpP0eC%2FP3nBL3yrcAy%2F5aoIT8%2FZ25RsvTFGWLKIa5aBbriKWVrYuuFRRj1woeUBJwN9aorJROWVrmekxBB50cPrYu3%2BeazaybbJ1Pev8seu6j3U84j83xKtF%2FfhdivSMyhjh8FKHmjorUFcLCQlkwoTlo14G6C4MlUzAcn4TjsckcINR0bUdTYKt%2FQuS7Zlk%2FFilFlSnAlSieugxr5zGEDS52PKHmY1ikYVbDhFZWJTBUXE7x9STj%2F9jA0%2B4B8nXMRXztemJUETR9JQiJlvy3y%2Fz6WoH8MR47k9tvwu%2FeRiVA0R3C7cFRcRkhW7C5gqo76TB33tV1Nc5VXwL9Lq9O%2FIMYtV4rP66CZesKRQAnkKigIpdpENLdrDV5PQ1IfdBlkEOCm%2FNCH4mxHpKbfI3v52i%2FGjLOMQ2J6IhGlyLMY8wMa%2BHJa9sVRK1rMwG7ysRYtYbwjcUtRrsFSt2hOcOCNA%2FUW3aOCFjpjQLetbEuoooxkEM4%2BoOWS9WbQeQ2EX2VTsEn3cEtoLFmJ7ii9fFXSELcJNHMaD9LnwbyYua5WykeInZRsmSi4vWA0D12dTHqW2jMlOIHIDbcO4zBAPP%2FglKL9x9W7X8F9%2FlJtFyn3kLTjomMk4XkimZ8ESTkreD6kkridbh1Il7MO2Q0cQGOqUBjzjjxvN5Z6zbCZpqpXByL4LEei7ZtIHDufhZzKiLp%2BmvTjStz9mDRf%2BVhO0Y5mOQGggMbkEjLTrzS5RiqEyCVOc%2BEorxNG3hwA1rqxoIcL0SShjhLkUPZ6iFxgRCcXX6pHP1SGS6l00iNTqHu%2BbJZhH0m4amLA73PHetiAoHtqsS2s0rnmg672hU8NLx3krfZSVNaEBb3qO56ekjZTFLq9ZA0lE8&X-Amz-Signature=c0e4eb70248f9291b3e35585fa428e14b943059ae3fb52a8ef769ced64e1ee30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
