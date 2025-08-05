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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=5d5e2349f3db63e66f20ac704befd14e1a5bb3bb732d039f22c6ba157c02d928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=87003b18f9b05002e9c41faca278d0545df2fa84bbac922ca92a9bfe2d0b9cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=7850bbb2fa89e6f6bd82723e82c317fb9248b87b2241f6c18c78532804b26646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=6e1958299b7326547c6629a14f64b067e0388068647391736232d00a779abedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=ed0634d4fff524a3661864ff006491defdadc4fba663e1a8fc14d71e53a95ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=bb54d7179c4809de4f22058094c4987e4b4207778639f50c0725811153c46262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=609c29516c6753235ad6846c435a3bc2770fa4686abb843887c0e829e230c2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=58cf5fa0bf7d83044bf0d35745f89f802dc43648756d56f2a768c22d3ef38d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=7e79d811ba3cd5162fc19384e4534425009bbd878ed19dc96267746108b839c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVCTCFR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIC01gJdFzSr1tCn%2FbabiFZmbwTbIbQUG0Fk431WRfttsAiADYRfljh9TgdXWNPaNU2Ct1fnuSiWETACRib93y3ZCvCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq%2FX%2B55uoV7uH6DhFKtwDim7frthKsCF%2FyaFlSRaAIIV4k%2FQCHQDZxNMdvXVLeS0lz4YP1lrxMqbzLAJ3bbQD%2B%2BiIgPKXISw%2BdCz81Xvz4TjRLvqt6wK1zpllpqtERMy1pSXlmdclKb7C%2BpWpq3Fc5fm6W14fey%2BjEWU52vEGGjMIXBn17GuUt5tlWP%2FHQfiRamNajsTbGHZcOKCXyojcifzL0tUgt%2Fpy6CUI6xCVj%2FjWtqbnmZQCt1PJ6eE9i2X02IQtg2yYjdUT5Edv79H6FBj3Ie1kN4A2%2BW9aV6AyjvNaLsYReMGAOUAWJmjl8ETbzQy4CE3AZU75v74uKced7JBiJoPHQH%2BR3Z%2BUn2R5Qjpm6AdZefmoNldDnL0L9vbXscwmYwfGIydDAPOdZHV7g%2FRkkn1hNWpXgf22fJg2bsfqJXI7gtz6xdJ2e8Ger09JbtJKSuGzGQl6PpSPmq2LDrTCNFBB%2FyQr%2FcHaHB567D8fWXa10Vvtb5aMwtlT7%2BhvTbqGwcB9Qms8CDOim48%2Bzc%2FNGiu7U%2BmtWS2277gClRUpWZhSnZ%2BXfOVE4x3WMT2TfZfP5%2FXojIoRZJh67G38fa4Q1PPY%2FkQiQ1meYB8vCQ6E3ibzyC0cChVGJr0pomKMGbCJUz0oZCGAqNYw2MzIxAY6pgEKkoHVBwZJgG%2FVPyIkGfeakLvZJimef1L7XyjE56bMdNLe%2Fnfqq%2FkmuMGVwSiT71xdKE5WRtp%2FYvyX7ea15xOe6mvHMEdULWCyHCHrjzMerEbiaPha95MpxUjElz90lT7XJYkgTxmqWsmA3ksz8bCluwA32jAT6faAVaXesTgZsjez3HWNNFrxdxUhhHAB2Uue4VDkKQpSyjHJzWAnUNtaPpjuESIu&X-Amz-Signature=f5ea74ed2bfa86b8df74a5285ea87939497772ccfca6e94e595ecdd90ac4054b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CBTDVG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfRwXy9d1gGyv5peWkRHutaH%2FIlQKKdEQYREh7gPHYbgIgbCvibGJqt3qKmirDiveYckf7XbpT%2BpDIBxSgwyyyUk0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDF%2FqVQPrI9q29n9K3SrcA0W7z8O%2BSu%2FsM2S%2BQrRUEmqdid5jfweT1f4AhhUvYYkGK1ety%2FIUewTwjXTZPu7aE0YuACdJ55Q2Yg4XqotwYiBY3VVxq%2FADhqafs2%2FVPJZ99gWKP%2FU0e3tCFDfibM9b6hHf5T52kEl46q3R3oaSDkzZtM4RYIdPZR0phpDI1GjbaQcJ4L4Do2mbq9H%2FtBqePLPa20MfBhjprTbOZ%2B5NXwe%2FhVYPXzupX%2BnCZwv%2Fkf5FoIwXqI6iae8S1AL053E15%2Bk9qY7%2FtnT3cZMTF1jRLGpUelqllbPL2sxnh6wJH6nS6fPZrZE6WFO3PCFdeKQ1%2FrBSQbXZ6UWpW1tw97lzCxiJzXVFa1DJY5EK77vPQSb6wz7%2BqakQ361b0fMQWgW4S9PK0QRUZvIBczviAn2XBRRFFAQ2Q35qU1SgjOSvZl0MnTemMsICfZ7BINRm%2F%2FURJuzvY98R2hwKOzNUwBALB%2BsILKPqfH0%2FSbjqGmQ7Sm4jHoFq0E%2FEBBp4EyRZMpaKNKHyL9lGDae4YkGvHpYNKDYAeLAZD4BD4hEFuIu8uwPLDMiUdH7tXepkGNhS7%2FCOURa3Bgbk3Po8722FiEYK7vT0lDT2jgUK8Xs0G3lEwGc1al2qI2pOsdvI5HZOMPXMyMQGOqUBLnRz08Q84ZFuZ%2BtTH3qh5V0QXX2tnmtYCHku4cZLrZ1AZCbfWXqsbHoer%2FWR4ULSyv1ZnywtlpVmrfHyqVbr3AB9ERblCHrJPryCJ7%2FxKgt40J8l9ahd%2F7sbQOVl9QTQKKz4buQE6yjYBIK294wojjpEXIPSk4B0vIcbu0qrjAFQkXYRos7ZpJvMt8M9NnsIzY0NbZNGOdrQ57WoOiW4mVKT4kXu&X-Amz-Signature=0aa4167d3fb93e6b606afdb84abcd1aed2866fd68be40931724172e53db1335e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=e56f78b036c15f76272e882fd10e3a45b77c63d8280f49c281e8d2362664e0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=8fd499212ac90a3b49196c44350e986c15af8475e8eb716bb103a592edb01ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=2757538d50972f2f58c6cb71b6b19cc81bd5efae86c14447e1e6a7bd7a7cc644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=fcca2c7345852ea118180e760d0987703b3969c9fee49dcfcfefe699c246ff2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=8b38d18fdab9c03d38f40b60947fc6e89fbbf67f5112269b8fff35b9d19eba0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=cc40577a086c7b34c03c281daeda7db79a04aa5186c22e80e74aaad5fce1cf85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=cf7a40a6a0a162a81005d19ae105d1afad5ce219c8358ed36907b404832f4b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=76d5b48a5c55aa29930b6775016b2ffb218ec89981e9aa2d03be2d4f46bb5b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJIRVHS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCIKjDGKKGnqXDXIy3YByaJ4ucxOLlsEY2VqC%2FN10ssxwIhAKShI8Qy3gNjf6tiOM2d%2B9UDfjEPPFYD3GUdx%2FUu%2FjvQKv8DCGEQABoMNjM3NDIzMTgzODA1Igwbjd8aRB%2BVS5A%2Ftioq3AO8DXvWQ2ZQw2y%2FNveYnqkyMT6tmShFTpIdPJVgGCP58eF9bEQIRlW%2BGTcpj%2FjdLOW4GkUhk7CWt6rFLqnjK6hv1ZAkIryiCavlv3a2bf3bmhwjHafdvWzu%2BTIJfGOd6%2F0yWWaotR%2FUjOWO905E6J3tGUORyYKQXAhIp1w9Z%2BJ8sHg77DQpQba2wUV6l%2FD87J6bo8Fw2K8ZO3OXuTlVibBVRyidFqlLG40kQijAy4lK6s4O8n9PyZIjkHhbmF47NGDKSADFt6ICIZbnXrnRbN9WBipaukix2wj2jEfaJpISX%2B7DsSbwdft35TOXVMKwRzsqdJk9IiemE1NU0FlEY5r0l8lrG%2FM%2FWJSKDNy0eTw5PoqiJXHk%2BnMFcn6aSxTHeB80QV%2Fr6M%2B1nnDNf6asR7lYCASpYhaIJxTXbJi8f05A%2F4%2FJ5qmyYcAikEgjWADfqCFx3JMKttmoWyly43W3Y1IBCwcdfauwrNVDKaooXmYtx9rXww99ISZY2FEK9W5VlAalF06oR7anRTidsQts2mYBqGxjqQlADpw0%2BmDQE4M%2B2iJubj5PeHTgzIdpBse0HyVFc1QJ%2FTmBwU5VwdWkIS7hpfUQGxrlMeG2tRSjhTxUXvWWhGbBbknBysBeijCFzMjEBjqkAaSEFlTcPkmudbdVEeJ3KIfHn7z5SNilf3qf9rpqQQQiy63QOesQGsqSw7bepL8UPNL%2Fz%2FGkp9YUPF8cdjNjZGDTN6jk2fJRsp3CWhskKwCEyU5lfZbn8NslodjsxjccU25Bx60oJ5SrzZJZ4mHbczBH4VF6vlZYqvWWkP2wR8vbWi6tmkCzKGitv3EZR6jWYGd0ClrLvji0Pef9jh39y%2BXd%2Bvx%2F&X-Amz-Signature=51ce31fd4606b5e6c6b04debb3b2a719ac5f61be3465a4da7180c33cc710cf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
