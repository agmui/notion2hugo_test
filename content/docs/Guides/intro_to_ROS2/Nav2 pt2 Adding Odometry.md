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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=c0f662e0af719788b2e807a666663d6e8d2922a30751602ecdd07f8c01c78af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=881beedca46f516296b1d2372ef4a1f69a9bce184804ced874b09696820c8b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=667e6018839766824bb71735644b2d62513e30e563ef1b2213fdb6b72593cd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=e364722d46820b13ea1a0fa59bc5af9d9f2fbfed51a9258024cefead712d07b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=555e60a58cf71f25f28715d76fc0afb22392293237f793f20e398c14586c4d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=33ddfd3098be18714c3a4c3f8c443fb50b0352afa48716060ff673582bd9ce61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=577ccbb5bd3d9767b6d63b900e48da434798bd44adcdd4120fc745fdf69804d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=d531c201b599e41213c689a6ad709e865a8c45315df15bfc8d8c9925d63ad65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=a101d519b6e7dc131b28f2fd92ebde7be1260e001af080cecb6a772b8d14fd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKU5FM2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHnj%2F%2Bex9JAAom%2B4NXDlVy5FLiS7mfha3gXh2Dbq1XEHAiBjzCJJRU2prxCJDiSEliFyaZ2%2F6oVFm2I9wbof8kGE3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpRY69fPos7BShDfyKtwDztuqDSdkS4crPIq2C6BV4YKK5acXKcT5l%2FvrIMLgzm9YfD9eUaq5so3iiHJ%2FI36Fi6H3hzsf9dmKF88XKv19CuxC6BQc3lpBOkQk%2FwiIuIGQiWnUXgq8h2zSU9CwpFd1KefdNU5cbO3PQmnxHlFJp3JudGixunbK6RZL8fUsqgAbaQpEwKnM893uXmedCsRkb%2F837cR8pcGBi85ChNeZXsfw1F0oTqXFP%2B41zynIyJsPtGqJyM0EQCe3vRZmSI04G8QtAjplWhGM5vG577Zor6EVgtdgQ0JGz6LELbql87e9%2B92hTZeSBj8mEuqJAUH8aJsvN%2BXoWOoinza23EsTZ7TIBOX%2BH4JjjrdkZpNHEzPS7c2z%2BtJ%2F%2BEvPjM3ILXJAQS%2FbPFGmesRNqhMPkgDg6ICj58prN4pltJS9%2FJdqUV4VTmrEN4wrbtbj8zqCKFT0QzN4ULKkR4Gymi6237OTvnUZbKaAKx9DyZd6vwQLMCcw2OhVCNH5KELNWXEazJWO3jPccRstLvXwChmoRIMQCRFoQRzEi9KsaXQTQEkXafS%2BdPK1EKl8nCtpwpqBroo%2FnRGcuvcP1xKZqbP2OPDp0uUoQA6mtSsa5F62El4LHD1%2FwhJA69%2FozuDoyyEwv5qCxQY6pgGL6anscogjdh8wr31IeAXL4wHEVgwGvCmKzBEbtP8LKh8YArTjrYVlUcDDXiNzF5JY1LOQQPefHe1My6P2Sby5yzQoC54dT%2FRvn%2BG9qv8LNyX6Ao3c6b3trOp4tU2UHv5EbRLE%2FqR0IlVq4I98WcGzyF8OiMKqyonkmDNIPnIIyY2U8B4DfYVkopTVvScEXySACK%2FmOgq%2FACF75tBlyGtjYPvMjoHk&X-Amz-Signature=6c15ca68b29266f5be1b7fac767070451988921d0359a0fc3e0d4ba2af03f0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64QIO2P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDaA6dJYdkYsaWd8zOb5eRjyyjRyuf65UAQkQGBD%2FdFgQIgWvYC4k71tlDNaeEwPYu9KUOUDSNs7WKW%2BVZVKk1RZ4kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKD%2BUSpih7CFp5jzByrcAwPcc170F67UchGS5uqkyTqquCqLu27cNVY0Q0cip2vBKtK3ZYNXaBph%2FMMTWKKV4GU2VWnZ6v6TC%2F%2BwxkKHOD7iv%2F0bxbLJ%2FX8Em0WSYYucYTEueMSNA14uWprpySD2tXhrJS4hZ%2FpU9C%2BIWe2%2Bwa7jP%2FNTGRUXnpRyUi96p8YFv0yvWXu5Pck8a5n%2FvV9%2BjADfwxrXbGfMxopGYWSDIaKQTYCgN4UzQIgtFLG9t41UZK5PeP0e%2FU%2B%2FUOpT3k56qBtwEL7%2Bx%2BcJiXdDnOhSvoLk%2FuSCSt7oE16QHv5J91cwBz0yZNMdFnRvYVX7e9atqX1IzjLOmF%2B2Uj0cDulgedeYz1Pjs5Q%2BLHREfw%2B4q7Y6aIUVGGexTZxzcZmA6YtrKgAWeitQcBmgVI%2FSVzGStT4yiRtAPfNmaJelnbLXIvJGs0TqC2ojhzZqScaw8CKas7OJzSz%2FZJV%2FXjBK2PcP82RyQa5IfzsG7t%2FPebD2Ae3XSKUGevACPJ%2BnzdPgnOtg16lUI3Dc8EewmdBIp6gzDZfrR7rvAyKWVVEKDGnd1%2BheqPJQuKfl3AYA0rO3RXHi3GLDVDsRnx3EqXgbDvhR8YEo36ywccITENU1%2FogF5H%2FH1cnMRzBT2qGkOt2iMKmYgsUGOqUBtBkQFi6%2FbQyZ7uyZ%2BnRXHLA3ACAbR2WDQQvjJl9NuyBv7URCZgYej%2F0jcqMiQBMfdQN7wW%2F%2BRFv8D51S8K7MoC7wVdg5MUPRO6OhJ0Wsn9MPnBR7N26SYNxWeANmfMUYg6He19cMci4BCucO0hqkv1elapFayAIGW1g8WKmdd7oMczVJvhMRuzT%2BQYxx8q72pjLbaAH19O9GFuE%2FUVU9bHcsa%2Fhy&X-Amz-Signature=38251dde307d4d6e3b626e3fd77d689670af5be60bd816b47a0f143d14ff1867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=77a0550aa00493dfb87f4af7375eb2e5e4c46eddbce50a5542be34393d6e8516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=8077bb78ffc22c3cdb37645b5b87a9116069dbc064c7ec21d0f381592f3eb5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=7120fa8a6ad0fde842ad64a78707461f86a2408ee0138bcb0326621f92052655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=a57f41747d5467f664b7059f182bf08dec2c6b69d0d4a1613d5b2494cff70143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=35da63774434315184c7663eb380a4cb4737ab23d5bf894565360fedf5b13b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=dbf1f49a80e2de451262f4f716979739637e1b8b9b9a5e2a9c778c146872d5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=7146c355c802d4b204f90c1a5512299af21cf12de2d34461d4ebf8b61db91d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=cbd587272fe398649138299817cab59259e1ac2e8b8230574f8dc947497795f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFFFFGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHCzLlGA7hOr5bQQ2CBERzHaAC5TGuK09zl8UVyjIkxGAiAlx1chHyVCRBtNxegvjH3oyX9gNW%2FOb9I7bnkVPOxdkir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOYT6CnYUyEaYzRJSKtwDiKhjuV4CcMCcbEFKZW8x8hmGozCIdi%2BK8kfde3AiNhRqwNpSTfzf0kgOukozZHE50vrZbdPTHTaRnRYWC7PI6LSS3giOmTc%2BYiYP71zWFt7h%2FCA8WsV%2BIhGZYOCG4alRFhQo59mw9qi7XyhIwsA6lsuJrBrUcrjJvZSJ1zuDEFsiy0awyngFYddE4DlBP7I4m9im1SXYmg7HGlxw9DAotV7lQvFz7BiHRnIlhijLudjfc8OK0p%2BafFZHz6plEwpHWNYzQghX0hks6e6hpeNUgHeW9yGo4WEi%2B%2BbWh1nXbc0mB2MMNs50uNvOq6Qrc2s7QMhmrcMog4dFOPvunNTjBrcUtv3%2FAUl%2BJhahdbFx%2BxZFqxuJ3t0rfxDUBKjOdOF5Quy%2F7uqNWiG84fIckmh4q3qN21%2Bc1c6cyKcHvIaqS%2FB8HCN8ei4dCvJSNZd27d7W1nifuL0zbLPQGd76sEG9IWu%2Fk96xpt6Qv03sBrwefUNYe1OlSNhLu5ahwXhz%2Bm25sF55LaTK1c3e5Zhv0QZjsglCR7ihzFgCyPxV2WRGjsmpLq7YLhrT%2B2GP%2F2GX24PCo4%2FBOw%2BvpmWtHaIeMR%2BxcvJlE%2BBeVIbne7qiTuGrRvQjfM0OCWTZcxURVyYw8pmCxQY6pgHJjlG6zbd0EaYicaWVyfUMxnpgm0ZTLdOPWa0F92sPhnCeU8Nnt0Y1jF8d%2BjOjGQOkDFh3PeVEOrbY7GAuTZXSaDQN3oPwVIn%2FOHiHIG8dRacNF%2BICwm5AsU9iR%2Bt55Ep4Xw50xTUR%2F1ih1D8wrt1wDwWrMCdJZjBDkzzrQFbYD9aGlBDvU3NleVGWItPxtlHZAjhc87jGgXaDP1a1iajS3vPTP%2FQV&X-Amz-Signature=d46da015407e09a82bd3a4cf0f1c0c3a7930609d4bf44b0e3e2bb7a5cb18c4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
