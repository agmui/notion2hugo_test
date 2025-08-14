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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=1ef123e935919bf69b90698b9ed2d70e76ebaf644cdba4adee5d4e6bf94a6e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=3634a41cf765326ad3e8dc0a9f2de1f2e6b13082abde675e67d3fdfe5ce9964e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=7035add529a7cca53ddbc4ba8d2d753358b0db91234e5f5e9bb392ca5d6c1b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=53d9605445823bd591be15d4d672bc899320894ab41cdab76497b61360433f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=5435a5d65d172752f1e01e9827b7ed39d46734418645deea21c53b28cabb2c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=bcd26dd2f67a4c307cbf9e1869442ba3295cfe28149d361bf855e82790f5b68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=21f8d5d01c281c1cdfd5f89fed09a30376e179e87df80ecea16a7fe2b72b5e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=5e49c07a39b0409dce756c01630b189439a4430be68775a4a5e99551ee73c098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=1c3cf45f4ff3e2fecb07a8496ccf6939ad7b4a05960c52cd28a84959b629de7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDGYBMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBCAxeThNWoHLZcae9T0bA9ERCHOjZGyhu7TIhXumIhZAiEAoPPzxxcM%2B7XW7ImvSv6n%2BBO%2BehPQbI9L0fRfcU3rszYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDP2HYyqhLMHGVxOaECrcA0d4OeKM1Texi2%2BDOf7zEyWh0zLNsmSWnrPQAzI0yP8yu7QwRDEg3JlIntzhuDwXuFyP1nGntPWHuIrGWQ0flh9EOM34xFv0pEk55OzxGpOBLGlqPFK38be2MVBKhf0tK042%2FZB6h089wV1CIkC60RGFmLJSDA9rpCX%2BSFERPD1t0S8v2m%2BWJ8BiRLCi8A2ncuwE32Ir8xMuyv%2F518NIK6mcCYJhavHkJ4bDV0vTsSFDC3T0bF1S1wGWWSo9uNhWbLblb%2BcUMyB2uI%2FdBtn9pDvpJVb9O79gklswixR1Tbzmo0OdpulgBkpQnGYrY2bOT7n5yOYiT6EHeAzmDUMrL76K4vnZ3h2gWZ0veitxiQD%2Bu1soz0hPsSK8RvcwN19c6%2F%2BbRuCCIczoGvtmd7Y0ei0jOZPaI0s4PkK7Z9uVycXcWYD%2FCCnxniedzXSh%2FszuczEPOevKbN4MTF%2FvUPl%2BckEAgsYoiCo5dUMmrUPjmYdM53KQocR4cQXhJZVN9finh7KR8ELR7lfG2635Y9fQ%2FBugbTqS4KmvV9iNaKxs59fy%2BktHq8jOKek1cZbsyq6Zcf07BviZz%2FxPYLxNLJTo2YJeNxUIefcTAbl8zyfL%2Bxz0f7qMwV9ecrP5RVT1MJSz%2BcQGOqUBlaznoo%2BDice6fGwaOpr2eOSppe5JWvPM9Apn0Jls78tMyL%2FdiOi7dyCVnA4m2Jd2Ss3ZML399ZZPrtoyZRRpFR4PBQh2jDdzleOT0fLiwUCJxgVhM5KM83yEqRn3gzQP4dQ5avhX7S9KDkFVXjqo78ndft%2FHEiv4gzWAUcrWvwavBKcafnDCLGR%2FlxJtamu2rhktkDT%2BX80adxFLclFK4Mj19LIQ&X-Amz-Signature=f5858f197dfecd2c780440b682d65fd2a11d8711a045f97e16cefd0a1d8439d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCLUJUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDT17%2FFGbS08eWHwGsmoEzQaurd%2BtxDunTuDW8PmkfoDAiEA6OL0DFVSU2AB4%2Bjj0Xc43b5%2Bwvk56PVzmtkqEC04t%2FIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLPuQTsQthi%2Fd3qU8SrcA0lT4AO09TqSMAczHUd8IbXtz%2FvGTPVGDeudh2uIM8%2FMvwA%2FhE8nBLhy9QF%2FCymzM6pBp2b2SoMiGYmvnwv8Ins2yLfnquUG9LCmq5AJDZJekVhuOE4ooorijLxYUuTyUFMdHjyDiO31zpUfxqXkzkPhVsbIXXoydkB7fL851pVmAokuZauw69UY4CE2ZlyH0CNwUS%2BW2vFXp%2BhqOfWirY0tZ1hKBupp8xy2%2BsiXDg%2B7v%2BI%2BUqHpLnEHocN24pGxm5OEuhNeQBaYQ8NyCqMuDZjzh6%2FwykGIQrj3FZXtal%2BxZaktMBTDe3k02R6IrEJsOBWtZWf2HoOUcxziIYzQIRVZ4Q0XfyBh6XwRA0JzWnkSNWOkMv4NqUngRQdnNp5ZAjK1IjQtADz7Awf%2Bm%2Fn97JxE05amCkgometUCZQkriDh0aHa%2FRpwq0PIgMYh7yFsKSS1kV9DXVboQb1f4epXkV33GqPhl6QlV4TBn2tQ%2B5WRp7%2B4F%2BMgmIcXIXQcDJwZxLng1sqBjyvNXNk667pl8NvRCNvZryz17YnqTKPvd%2FLgeVak2WT4S8QkaKebqEvPXzAR9uBuPfDV1Ebe2ZqtrXt5PJOFj5%2BGx2FH%2FT5oDt15%2BrmH2qIQhGz%2Fc273MPGy%2BcQGOqUBZOLbLWDGjy7uK5%2FKQrFQlvBqPE%2FhBOMamaLX%2FAOUHdSW3bzWRi0rc%2BqvNyP0fv6tI25UyOyXSX1ONzWFkQ1idKrriJM96XNic9TjulOESnnyPNkxCs166WAW%2F%2BFbwuFJMhyxTs4qJpztyS3uxm9gpE696PXH64DdxgZkYGfeMBi63dvRC3oIrHtvGXxJQIVliTFCK2a%2BLrYcCjX8dODfkI29fUyn&X-Amz-Signature=f6490600eccc22cc8e8ca641c3c75dd592db7cf7356384aaab64af8f6d685073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=5eed3eb712b53e905b458417f4aadf3621e530625c332f3eb983264541741171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=3572ad543f9e3ed6aec9cff0ac26a7398b96da6f62c7ec9a758b7826d832c65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=4190ca75112f7b60448374d7ff3899f757e3a99729d66a7c260e172c5b308af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=a947deeca4a4c943a36e7058e9c5ff0e6ee821e09ad8fbaf16095a705f692e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=ab9865d9d8cb7129d8305aba1a543e926c35096bb49bf8c582f0bd63ac860ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=08e974f08e426f24bdd30594e2eac48e4d81e7ef6730ab446e4b1bdb279ff8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=c0295cab372bb77c8622f3491cb14f18f25ff40e7a3cf4dc86b227fbd1253429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=e1660947ad11ab020df339b56832e98727e8147db4fff713e9a2f55dce0acfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIKME6G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxTwod4OREC%2FDk6sSOTUpKo8mywIqRnrDvH9TmZDbuOAiEAzSpEmLk8csl%2B1%2BZMUhM2yCiA4q9lKw%2Bk0KBttZIPc7Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL4diree5Iow0q2H7ircAzy%2BBBUVfO7nwqCEv%2F%2Baa8Piv%2FR5g6MOqz56x5eSY%2FRhXoMN9o0AImXEWLKdQP00kDXnuWjcfZZlmeBPdgAoBUS91YSfGm36KpGDd86DJJVgW6m1fMPOwy3NBK3ry2DJF%2F7xffJ2ON4YFEWwXJpaIWbk6AZRLZWS9QdU3uHLVmgz53dIz1KZEDf2kOu6za5LAeKZvkL4D3U%2BipmDP2QOAIMfn8ZWxRxOqkYY9AeBizNAPWqpjpQ1x73s50UzUzxNmEVExnp3cyH%2BbKS1rA9NhYhYYVP%2Fn%2FENPfX2Zz1TrC1KzJOLLYI3CBgy%2FnDZqIO%2F1CTofVykR4a7POJq%2FMCeCZdaVjbBktx2kZDfTW1sD7vV7VH0J66izVmAAptykBZ53htlaaHJokkAZA7ToE%2Bk7z4Grf5%2BK%2FIJ7OXZHFu9yp08THpztRnvHRpOXpw6y7GEzh2LdsgqIzNH0ESEXQjKfLJxlMmwSoPHt9WDenv5I8p8sS2Qkks8cT5QfpFRTqzlH7t6VfpguFQVCsbOZzjgf9FFjOQusrOeVoJ80eI8fAZdWFf4H1SaBHZeGG4jRpEwl6F8qgqFQuwJ1OxsDJYUgkBrVViWWNmiu2K6TAwBHTn1oC470IU99J6gZi7uMKuy%2BcQGOqUBHKdtWdsfzi%2BpdAMF7bP0FNTzyT4160Q3zvyshzuRaf5KOnscmPyB9hhOoybE5p5cCriijYZ8%2B7%2Fb7bPxjaOLD3rPgFoTeRFdomypDX5R%2BvJR8c7rKBoAf9U0vaKA29vKWsPezSv3KQ11xhxCCRFTW6V9%2F3i2CrL4nZAKNERCh2hFe%2FHaQEGsZqk0E%2FsthW7KkMYXmWGZGiD5B3FKQf73gxqfqCn6&X-Amz-Signature=16a0258d2f25b714e12863d5b5334690ceabf7ced25e9ed20ff6d0b3e0e33506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
