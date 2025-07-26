---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=55497e9ad90e8f245bff77f243fdc72cdd6004847b0fa5996fa4cc4a2c0ae351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=73af2cbd5d70c629d45a752149aaafb84c1cff3c9808019c16ff7c1091e029d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=d036a1278c401a695851c1c2ecbe45185dd3871aa60f24d8e23d61934607862f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=7f70f99b0df5060679c3d8b364cbbf5e7cfebe1c03012f8ae826139d898ce541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=9069b6391a731a0a0eccb730b09b6955c36ae0a52033436c3193fa367201137d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=9cd496aa6bdcc157075f4b4cfa6eb376afac8e54f493b3746f2849950bb40be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=51f60f1ba5acbf0720b56e6d575657b12f501d42c9860ab5b5b7e17e552ad060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=0ffd1becf7c19134cb9f775b2730920fd0e587024d1327f6ae2d3f12445c48fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=ab0e726d00c7f5f9a2547df912785d3636cd52bbb93e6ab902b342e8c8521fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OULSQSW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDjmDi%2BRX3iobr988atLxJF5Dsyakg4ty5m9Elbldah4AiEAj2voia2Qyz1sAyN3bUC684KjMm2iyC25RJp7xv8f7r4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGdTqlYmRa8jlDKQxSrcA%2BA%2F88i80ButJT1zGxuCVY8lLA7V%2Be1J5H6kmT7gMxjdfpGMwq%2FUG3Uci6vr%2B9M1iD8AnW91zn4dweEzc5AIQDGMPHA2SI%2FbGPLIDHl%2FM4U8ouX%2Faiz3Vm2cMAUCFXQZy7ATTi2nIKXdAZGujsblfMV4tCUe99HYAEhWX72XX7X0Uj%2B65ALQs4K8HBUeTVKXNoLDwRH%2Bc37Hn22Av8ApRmmiwHr3Gfkz13MIfoox7n2pMQSs%2FBP89ABxWkw9SV%2FileDgeiHC8N9ypPTesvXyZJJd6WYD6DrNdQygFaLNt6kqF%2B01H30gW7HY6wdSBbaJoQVIsIgHKuMoOn3Qo%2F34mZwdh1vVZBlwF7rj1IVnfUr9ADpHCO1chSxzsnFSw1LQQgimaJ5Nl%2FeX3yrJjCYb0AuH4i9bmIo91CDbxkDroC9D2F%2BBgAaHA3e3ip82e4k0Cyq%2FdnzIA9aCeEh2jFXR9u6%2FABoHZdwgGIjKEcQF0Dekq7QRG%2Br0we0Pm4QCXKauMqPmSytcWvdOsV0zTelke6uwbuYhJwJRC77N%2Fynr2GnW%2BiTT7h6ZRop5%2BrPlPESl9d%2FDv1UNqrJChqA4jhTq9Egm0HQwnemdHuFXpFvRY%2B8gWDngjVa1N75sKBpPMND2kMQGOqUBx2X4XeNe2IF8788uZ%2B72iCDYQAvWU%2FLtbh2Ik%2FsAPs%2FiNp%2BGdnjk4ebAV1Iv%2BDIX%2FLoBmFsHtCaT7eq55zEmQjQPaz83cxG9HZvk4%2FX0xqOn8GQ045mxgwNS%2FzSsiK%2FETYar1j4RZlKAnwYnniSqMDl3hgc9Qmi3kILiIonbx1053SKy3%2BaYhpSr2aeZwsJYOZW9Cl1PELmlILoo7VLpClTG0lik&X-Amz-Signature=c3addf8f3f8792d339f4d0d46d92f87db4e77d59e2a0bd32239a292f9192d7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7WDGUT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIB%2BsdypS6rfJ1bXnve18XZa6l3I%2Bfduo2tADtpJVJAa9AiEA46l6fJql17Xj1qL5pZ1fG6ZGrozxMVsna%2BFucba3WmIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLEpxh%2FmzD93qSLJGSrcA2cZKK00ayei1CJAOE0SDqamidl4z2%2FzhsAfw8I9sPqyEJZFKJC%2BnRoz4OZRwD33fgyiJHBWNew7beVoAo5RjICegZuGYhb2%2BkWgG03bHnUPmIJCPvnoSfx3KUKCh4NC07Zy98bDdgGOWjy2ajKL9Efu9A%2BgBarM2bMegKjNIwG3HqQ2EbbLN0J979ZjtbfUeJ1lTSrCO6ZrQYDtSTYI67KsBSEBlCuDgBU1%2BLQ2v72DNSBq%2Fv0vMPrckXWR0KmFUxGqBbRl8%2FmxPue3I6ZxaeIJkom2BnyeeZO07aUKVwRkgrWOx88goxd8QIlueOtjUYc%2FiwM967Dm5NAmm4zIWUOFY%2FItRT64y0z1wkVcsobc5CRU9o9PYFnbOG1c50PbpfzD0lDlcc8ruc2qUDISKsvl433NLc8JtRKaZMVvPgLW%2F98fNR%2ByzrjvJj6PEgY12I8oHeuqDTeeQSI7H1miTVWKqKrxByp7zyspg%2FsbLFXHzeENYGzvazXoSRDMaNSH5IhbH0R%2B%2FXY4xMmYM0uLRDFe6GG70kyqwfhcrCfq02eL3ERwUm28SZcqq3AWh5jzJK8S6ewdls%2F%2F9l5bvXxwH%2BnYTDsshWOi1dYxSHJcni%2FcJfL5FolMPbdh8JkOMM%2F2kMQGOqUBunH%2BzF5N%2FuXmIquZbnXq5%2F9SxveOFt%2BGSrJBenNqyqBW0hbYwn6SoZTkYI38NYeDX%2BAjdqLaJErPCIqBCBnnDEHhLk1f%2BsEzR%2BAHtWxACymDLvK3cEMcy4TzQsCFpvYsAV4l47Rvtqi7f5YTWKAxCK6rrqwGnPp%2FSI7FyJ26136xQjUEf8T6GLL3nJcpl28tn2jUPQcLgqvkatycMLlpomXvqZ1Y&X-Amz-Signature=19d0fceb8cfffd6644d90cd778d3ea9f5486ffc07c1b96700c13f958234a5bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=8b8feff6e7c4fc0070fbf879f5b55fc5e3be827892fed2b210ad78fcdc7edacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=ec2bc4c2840692baf0d656cf825ceb4b3cd3833a9d04b436da0fabfc68876c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=50f2991f3f67c742bae1fee57f496f94f49d47ce166418b302248c6ab9c4ddcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=1aaba989aa9099d5198c3aa095062d1b7ad4812ab4a993d97b637d9795802ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=393dc465595d78034e0982fee070b456dc71ba1c26ea426ed91a9fc8e22b12a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=d04410fd6912ae762783478f6dae411c67024630d96074e178206ce881e1f48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VLBIPB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCvZ%2F82DYG5C5cvq%2BgYLsaJRbmEZj0caNBLPFkoyX2OMgIhAPfIXpxgjuvHE%2BH9Hk3TL8GTFtXTZV68WHk7QzymCO85Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxJ2%2F0hbWzNblZP%2B0Iq3AMTQjXftlA0OArbKlttFnDE1NfcYalgHHqteSfRGspZYX2%2Bn08QEOe2WUfMe3TiV7kLqgBGApozrWHhAhyEhfELb7%2BcR3ztF0W30RNanYM1V6T0psudtnm%2FjaIzGQ0YTYc3zlfVVDpld%2Bf9%2Bg48CV6Dwl9a5I1Z2VqoGKpIRclcFfEBAX%2B%2FAF6PGqgfLFIHYyNX1ZsMhKcEaxsEpA8lGC8En7tGAGzoDdLWjO6GBIDSVkoppDC4SSE7XRYdL3F5%2BYQQ3tFGoaHYEXi8iUPE4jGafoOaF%2BYHCNqgfFmmHF2%2FLJGPt1uhKX4COEmcjGGRTyyXZmNGSp22F5FXBKZYjBI2LTbYh13qUf9VKifvHQJk2VRT%2Bnu2UoOTX4wlFYgzeW4JGMJEkNVgVPEzxPAuE0aNfL2Sm515wXqrtxlgqNJa9nrbX%2FSZifU16Dck%2B61baCQ8Ai1CFHS9W6GBdDLcwdibwY1dMirUJc0XXDr8ejj7LFzq2B648%2FCR%2F3VhkX3HWiH3DIk4ReaNJdLzRlu7GR%2F3fRtcPjH6xfr3sviG4RIkx4UH0SyFA%2Fi6FlGh0k7kLEZDwp9l5mb9t5US7R9geESMJyVCVM%2BMtkWP%2FtJp2tnScWZ1XQItJ1PE36HqYjDZ6pDEBjqkAcznZ0HDikJikDCjFjAubKv3Q3Whe8uwyYKIdJ0hl5UFQNVgvNMRPkaIxqMbutKBLTcPegHd3Jj7PYXK2qN3dV6x9oC0zin3%2BV%2FpUWDNrFvGMkjoDTzxIqfj9a76o6ZshdcBe17I2c7yGzVleOsbeuWJ9XQkksUFomN8ECM2tOp0jeGPcFI%2BCyK%2BDd%2B5VIxTkFpb1uw0sEItWD3f6J%2FJpPhHTWaf&X-Amz-Signature=ca2e4400ff4e67e576f1670739c050926dde0a50d63b98e90d9dfc3eadd975f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
