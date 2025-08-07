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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=5e7e162cbf9843fe13355c1cd9b42376202095c9dbc113523cf4b6ba05a5bf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=857b312672f5f84376fb8a137624b90286deaab40c346d1bf539aff05506b452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=0d8efebf6d1e466e445be02ec94877ee5bdfc953a0619342c5d36afae9e86b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=45b3dd5de7610c668b1b1377abad3a34675930c41114c4ee0c84719955ed97a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=c5d6be34de994000adf6cd32f6578c213b725387d18af60ade0b2396a45fb3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=a93b52b9b88684942a90cf0ad9836a133098f7d4bc38d76f939e79ed1fbb33ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=be7f20757b6e903d10a208f12c8dd5f26601b247bade2929e943c7ecbc14508a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=a2a9bebd074c382d80ab5198cf489cfe951f7b8a00bb68c1329379d676d3a6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=e95c2f8fcef04827e709a22fce613811225fb596e33bfbe3cf4ce217ccfd9bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKVPX3T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD%2Bxh63L3Rt9Mm3Xcuqz9wZaMRIkM38JU4359u2fnZEHAIgTi3pz%2BlTHZqRoHxRagveQK7zZiFtfOiv%2F5wIabp1N3IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGet0z8ZUEmHSKXe8yrcAzPOLgM6dKvyVDkjB7w1ls75o%2Btm6UNSMO1QLiS8mtDAdZkxNQ%2F%2Bli9XnDrIWykoGDLD1sZ0tqVSnDzlYD3GRB87et2UZFgXH9gbmMdnDJ3FxBtRObgNAiRIpVqlAj9kZzcW7dzWbg5ROKEVLICrASKvkchmrl83doTFhyOmoWqrJEoseTw3EKqe3kBkG5bxAlUtMZiEtjiLG1%2Ff3QPNrzcX6zT3gknQD5RQS9lfGHWtK6NRcO1ZN4ibF7kL6MNLIRmM24AuUCQYNKzYLKm3VQhM6oa5NoRB1LKqkhOQwj29ltTzZA7xEgSdxwjgWpWTijHsOT1Zc8r5IB65ZoWf%2B8XGaqUsvdU7LcmgzX3AnbD8fBUI4SeDMkJgaYpsf1G%2BS%2BbeITNSKrZZCcfXrCWUavylyd7gvwHg4XDAEBvMslVtMswdTeS92fOvxWhsAigdRkmd%2BF33bAjc1Vd9kpfc9mY00XBtv5vlrhEMaU69s8oh0fYnz2OyKOG1kcCsH2WgjfyBaaGbtpWByXNuGVZaHxbd%2BkAGV%2BLpNHxsr93GF0OnyMo1V1FD8rHaiJzImgnCnVUafs46PEofaEoDhV2lC%2BCar309Iftplzt8EpbZ3Oz3vmMgTTx87bGD3RAQMI280cQGOqUBp9Xkb6%2Bnl45xQ2v4ei5Y8Imz%2F0A1e1nKAGlTwhOxhio%2F356lDRqwhfw5u9RrmDZVJN%2BP%2FtDYla2CYrgE6OZKjhaZov%2BHoOGcWHGtyRj62P5vb4yblbpkk3aAzs8GBiFXX9uFN5eNMw%2BKHQ2tFC5QMUW%2FVe8muILNdxcossNF2eOrnizr%2F27DS8GZvhrTHa9JbfQLJJvRusYJXc6EjIRvsWU08cxG&X-Amz-Signature=30dc68763091f32aa2d96e8f20d41fb53abfded8706bab1c4ce94d41ca1e3908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEMHBO5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCmoxCHqze4uEiIq31mOBnBG0WAmwyhECQacOyjXcVDjwIgf%2FiyQmKK6nskBmnvG84SKNM7LfZHmm7QENIK7kt3%2BHIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCamLEQ7dPdVMJd1ircA2JRz%2BUjQ%2Fqq8q1T1EBeN0OteJKnequuu1POBxaPdjKYzfaUU3z%2Bi2VSdWGAKNKazVQxJvV7c8ZS9vOnLg7Jzy%2BXE4TEKsHHes9ulBMSO%2FAOCb1e%2FNLxCqx2AOo3odKodWytcV2fst4%2B%2FvyWqlroX0H7mYCfis4CtRA8KcOa8MNWkRmMzxbXlcm5LU3rYR6LGj8SOqp5N9Pio3xd8ccOvGnvp1r%2BgnPl3f4NDc%2F8XLLHVHlRl5gnRd5h%2Bj6d2UzqS0PVzdchaAGAlSHlYSwWCqBvDFSonxOjmjOp%2BJyw91jBacFQg2uWBAZa4aRK%2F8xalD4BKqrgtwuJrZ7vHiB5NXOoSMYXBkjZdCeIsTB79UagnULTr1YrIlJYIdoDIbc8648Lm7GRzv7fwosLPxR2PkpCLkZ5rWtNcgBcyggymEzb2beU2v2XbJN8Mk17HwKGF5ot0q1fMPMHGk6gd58yrvDweZ5ZH41UqYJ8zaZU9nsp5nALRWfjKCtsR%2Bj6mbUEYe0sEeml1hNrpGBXcWtVvZRtqkw9xnkEhms6mVZUUvLZ5nQRXdHaXaUnlsJ3Ydh3jHEmSIo8D%2FtNwU7gPXGIIdqY138c2%2BxYv3Ge6%2BYH%2B6HkhY526GsiJiH9Wza6MLe10cQGOqUBpteHcavLyPIhLLWNFOVKkD7UnH2LZwbUgf%2FhraBETbAHGv6Vzkc%2FabrfSq12jkDk2zxm%2FNkxyTQWM14rbDBYYdlcq0IKzQILTKcLfur4oMq2Wn44xeyZf5hxyVEOGDiyQbhPczHdk6ZhAvaiXABR9KLab6FA9UcesuFJE4GNTCcb9HYqcg9PsKK7RPEvYmGm8Pcmp2pi%2F6LSz8imfMM6HJQ37ALN&X-Amz-Signature=850868cb17adec3087c92d9bbda1c646b2cb63d2a0ea78259abc9c13d7a4c375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=857ab758d0e9ea27c1bfcce42a26c880d13868bc50d0da60b62cabe588ea6982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=6014ef4306b10b61b9c2cec56c0e1cd617b2f02081574aa0edf941686eeb22f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=42469523fa7097e9059137bbbec0b2dbd0c9865ab8f5ccc3e9057db522eb066b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=80445f0f6ce0498114fb25834f48e2d4c0597fe1a6783c0b685f67baac55f0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=8031e20182dd6bbb8a3b4cab395db670c2cfee5c9a8c04b72aee875961d30cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=77e1f1b64d99562a5aded335c288629b0228aefca7a00e54ce2138d0d17c5773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=b85ff494153e046f933445a57dd3315e7eca2c7956efc605c1f1791aef67a685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=8d164e3feb7f1d25070bafe2014b9689cc9ac46f9e0150ccd9b61f7bad59a6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOOWMRE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIQCGz8AqJV%2F64gosiIO9lauJrgtGuRmXwmK4jgBo6JBtKgIfNMBpJY%2BB8c9VTX%2FFtaE%2BYt3%2Bt4w2Ot5lnTf19OH4zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXY%2ByPBlh%2FjVQBQbKtwDyDL%2F4Bbd%2BpBxQbz4%2FiiijwDEOJTy4w82tFw59fjcQme%2BduaxXi8%2FxTQ%2BioDWzRYxrWdZs1mN8enk31zUrQV4qG%2BNKXng9VFbFFJDtm3DZmcAdN03lq9Db7D0kUaougQ%2BEU8ehALY6Ztum8%2BB4O%2BJCkTOYxYHyTsb2aho8XS4uskmh7QrhV1E9lICb4P0tU1HaAWaANQ3nCW9aa5U01OFvRRcah%2B0g9oj58D2I6NwF0CUZqzV3RWS5UEs0MmoVp23OSXLy4ZbNGfynUNUR2oECd4%2BwNPXr5AZmqKDczAEIunkYo2NifsKLHMLOIW09kFFmJFxJ6nkUebAl2l197Ggqvx1a5XbXCyC5hh9ZPGlXwF8d3SbzeS6NKSLzzrCD6u4%2FrWTTueYvl108wYZBWYRgMKSs4uAmbv62SJo98u5n4KnhhJhzOztfP9%2FAXbc3KvyXyv6fB7tFxux3JhihqAjUQuJ12BKdWXvfssEzGcW3Pbzb4MzYayMhws4UPmB1Mt%2BHyNitPBYYiU2ObGaFzBKkXPWMMgleVP8GlSMsBENPWFcPdhycUUynWoZH6CkFVw3tUvQfs8dYuczewPjhdhVvXqXI6uxkul9aB7ctbZL28%2FjhpMvKvpNrTfNQogwhLbRxAY6pgGI%2Frm8gi74j0i5bdnFHixTYRlOViAtU6%2FopQTaEJ4R0gV2Y2Dwm98Y%2Fm%2FvLc%2FikRRDLlL5kv7Kfm6nNSGa0pIYAzHXDRXlVHezZgFq5oH0bGFrExB9lUFPw0x3clpTt%2FFGiSngSYri4tzVMH3V%2BFcHiBLaww4O7C%2BABFLdYctXa%2BK6hNro72bbmI0NNlR00U3EnD%2B6cXhR%2BmqWhQexqncuNS9DrAVf&X-Amz-Signature=24daac3908af4c87850718c920cf56024381e4ca40691ea0bace20e6e824de65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
