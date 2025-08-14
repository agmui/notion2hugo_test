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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=66ccdb09415ca2405c792d457d71369ca3b77f964a8adda7f46ac7c2b6f505c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=9a759586719cd6c2c63f83c1f93954aaa6f2089f10559dd04178fc33aec42521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=4513e1297d3a7433d7b44ffa49d50f03c534fe6a49608690a9dadf264f2e8e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=56b73a0135931791bff0aece3c00a99e8aa463a6b0ce94c01632c6555059ceb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=02e083e096ef63cad4bb004e229bec1492014ebc9cdaedaac8980d1661a0dc7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=eb5cbf7278c6e33f2c66c522585e7a5be53208db44d3a8a8db0a5ed3ae4aae26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=fcbe8b0d7d01178cd92dbeb4674a2dbcaebc92053b4060d65e913a8816aa20f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=1f90b8c2944fa15fe1c51ba1d0ceace2921fc2ffae2f40617850fa4ddd68afdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=4759c021820e5419cf319a7e03f34a1067e40ea1de3b52f9307db794fd63e538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXLZB5B%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpEwBewE8Tu1zCG79Ko5t4vSsCdaOdV0mJSqckA%2Ftl%2FAiBDrET3%2BD4vshZztRBCpwzoOUm5AashtaBAV%2FThtWzi3ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEr20y49ssMeyUdaIKtwDsk0l%2BA9Xwi3gFKPS%2BPy7Wr0POQcVFFJgMJfTbUxUfvdTppN6cpCYe%2B65dr62Fn%2FdKACiWpbaJJA3SfhukIo7Olr7DK%2FGoeoErNQDYiM04MQl0wPhE0nAopAz%2FdgiJpgmfvxQAtJWkctLavgorwLtEDdwYgAss7IBPaKJctVa458ln09691fsC5YpbDyJlgmjAg%2BhrrUjoPqvDzD3W31F%2FhKXk4xoF8%2FYDeyjs7E05cgisrgHiFhKrFsAl62BWwf77wU86hN%2FumctU5BwfhXMewJaTvqTSi9bY5UhU1lNwrCznL2eEKgyA7NVc7sZNrAj%2FI6pMmaYxMG2nu70oSz7ENBKSVrqPtIb0a5WVeep55pBCGge%2FlpnGTQ68ryC6xfTiVK64hplze0CHZ7VuDRV%2BdiCcFAWv9aQ88D%2FerCz%2BEAUmNx1lKaAVfoGsMDodc93CpCyU7bTp6BorImvRl%2BJZmWBFQYF7TAGTs26543EYw4v8p7MqvjMV38vmAflhP1q5m%2BVfPYUd3%2FmHWpnGd3QfApsVengGZFnpp2KiLQYEDAJZCow7ix7ORwgTTqwNds3ngVks1%2FCK4h2Jn%2BCYtiClv293WWLr2jDrWt14Uy0REsquCjrdDb0MOhdak8whK%2F2xAY6pgHAeI%2BOE97%2BzIZ%2BDdyCLW2Reg8ZNa5S7pA%2FkacDBBkod8BH0Txu9%2BhPyjghRs7x94nmUQgcQR%2B4b9fCDHramBUCEEtouXKHXpX8qt2oy%2F3Mm2mnMWnYQsDHyoxbv7r0cOmWFPVi7OO04mNYXumg1hk6ct%2FydYI2arzXJJ%2F9P6BM78GBlBuWtbdHlDlfJddHV5KFlSdJ7mwhSN93YGOu8A4zuJIM2zOF&X-Amz-Signature=84af19bab072ba08688b7cbf0083c727c19e01386397576b8951db44d9efb974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2XMUKUJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwKxgp9iIK349phxtpyIckDaagsO6bmuL1rcMHPTxp4gIgLVTMFCpSi5gialF6Ar1byZYvDxm%2FKKeDhHx9YfHgRA4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCE0bNObXl990jUNUSrcA3nq8%2BQVRxNQTiHFB%2FMoIZ9FgCXELeC4Ll6Pqhsm9jFwBoKOQgVFN850AD9MUn%2BqmdStRe5UXyHucim5bNFukOBpu2TTzBgPADMzWShsl%2FNoJXpmDL4aRPh4YM6aX%2BjfUgrlnfaI9%2BM1YJV2Yn8QLO4hmvnJWzEHcnGVTRi2GvRNN3GE9qS4gPjuO%2Fr7Sa%2FDsonJ7o8GQT%2BpKiZm4cCcqEXLJ9m3kviaAe904Nwlz8wdn6NYXxWJQ0rFCFKK9s%2BAvr47Anu9bOWddiini6IRQEJWruSVwBpNsSzJnSXSaN4jCHljO%2B6JtcDRaw%2BVNtMroapICPL5PNk6%2FAs36rQRAKbskC8ngwuCPBKNoMYOWxfc7yJVpWPnMjxIfBQr7unCJAvAWQPm%2FAO106MH1hv50lMJm0zbnxF277mrSCr%2BSMIriH%2BLpC8MMVVpZda7QjHwbztmgSzszk2gAIUxgU4T9TlEsuDl6skiIIa5gis4GUD4V5ET%2BFvwTnmD1MgBC17knWzlHiMZ8nqC0dSkRIejxZOCTaBI9tNDz2Y3mbDo4NlxHGaj5QTGeq5rgxSgVKwdtMVmWWF7AIh57xQUDrQqWiz9dyfWoDu8krVC3%2FnwDWXEicA4YxGu7m1oZyBEMIWu9sQGOqUBKo8PvFm9cVSnUg6050zN%2B2ZTog%2FUgxbkzoxOPDPSYp%2B8YVtDyNOzcL2hZJg03lqflVrTJDHj1biEcWEgkIXcd7GFiA2%2FFmzXs03SIE7bUPuFo2Lz1l4NrRchTsCkNDIN%2FN3Pt3vXwQpBRa6K9jiuZc65aEXgy%2BKfsFIyWc1SjgmNNcq6FXnqb4d4RyBQvGyOA6uWhyGohPlRJIjh8uzuz73xgRds&X-Amz-Signature=b642b58d5d7ad80eb29d164405d20b07176560fedb2ca4fc85b75778e8038c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=a4dc3b90d64680ad6cea64c5bbc99bedefb40145ce026279c369771b1d4d41e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=7fe2a3318f8fb815b91ca97ae5bcf2dd50c0d0c6cb9312b1d86351f6541040be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=6fdd752dd1a4b9ff657a199f0a2fceb76775a25e323dab237d061483c4cbb991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=6f10897845553eccba63ce9f7e3438f6ac57622851341a4f12a5f12100bbcaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=4231979db13d10e20746dd277d1506ba2ae18fd6486a55867cfe2f225ab83e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=8837a1fc7421be07e1a1da4dcd0b200f2f269432ee3e3f56bd863e2c7e8ee679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=b83d3d9a3292869ef134c697f4f53c7ca5c0470ce99e5e22e59fdb7f91298ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=9ae41594b55f54434aa08f81a0b04c18950f942f667679602d9d84f7e03197a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXPJ7ON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIIoDBSshryvl3RY59g2IfiwnOMSZCOJYaNFWKEPQmWAIhAKlXT9dobH7Efo68FCzWr9ePDxPn%2FJlwaFT8I3swTRcqKv8DCEEQABoMNjM3NDIzMTgzODA1IgxyN9aFelYxoRowF0Iq3ANroSsMSjHPyW7cOctUFKG9MafQXOdBWSFdYAFjxpPU5byojwARJO8M17XU2jA29s%2Bjww7R6j2UUZRh%2FWE1XOzVSd3mzXSvFbr5a3Rt90Cu1C3xuEdfUcg6QveAX%2B1x0x%2FIsOydBDKdTZxGDXcFgd9ChSt9WD%2BGTNCskonW5t1Eb8umZA1Z65GT6bNDcXcv7KOBtgOYL1CRI5pd6R2lNeyfw7dI25jTWBhgZgcJydKY5i4f9ERhmr1tJY%2FgYcefodIrd320JjkAETpprZOtCmuZOjR9pJAGBny2pBkBvPUpOr5b9Fo17p67X76rREz2zHsrI4muj%2Bu17uiQJFsvkgxt4tK2XikqwBIVgj3VvvrC1QUwKKD9nlxSw6UlCSCNsKOA9%2Ba6q8wXQsQObeQMBd5tol2XRxQ2cYInD0okjqY9YXGhhsUnm4YWeSsEUd%2Bo2XvcXuHiKnve5LrQ4vFJ8NCBN6G%2FV2e1pTLLSlH%2BCkSGk9ZC9rA927CKNrRajhzm%2F2msL9XXTAgtte7Roc6QTtIQccai7I9sBAQx%2BF0WcG%2Fogt4ziXVjKgIOxEs3t14UypKJGfp6LG3oVsvnA%2FZsAj3GS6DidMVCxBc5za2PtwXbihuuGMd%2BfahrlksHgDCmr%2FbEBjqkAbtxSZvWckFJI2n4ZA41ACX0j05TrwkTwuvv%2FmJuk8nMOyOtIY32BsPrHprjBxlfxPLltgjC%2BxWlqSQGwyvXQIV4z1D52OTm5dP0U3KXnbha5d%2F36fJHlzL5xmQlbv%2FhgNw22THLaNqU%2BedpgEvnJSZRSp%2FOpaFKgQJ7A3%2B7qU8FoORI5EcMOBEuSVTUXzF3eEdjcPKDB9xjbxDFgYJ3mMiYFBn6&X-Amz-Signature=a8b3dc75bb5673dcd5032659f1b268f70b39031a38a204d73409e72af352da63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
