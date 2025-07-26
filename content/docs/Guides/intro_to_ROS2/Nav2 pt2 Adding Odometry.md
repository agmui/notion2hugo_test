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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=bd8cdb2f8e6d3bed1560ab67574d317fee2e2af6cd6dcda2edc46657c4c8abe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=7f7d2495a65249d2c168cca83fe62056058ccfa4c157480d910131f803db428b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=88de072ab822c8aa9734d5a8a5b5bd946da9a9c1ebd5f93592887f11aa2e3ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=6ef02a9eaf799afd39ad903302f9a70dd11936cdd37303832758b206f695f6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=83f6cbd653785fd0a8a13ccca3b2b73b7285810dee71aa2ed3c864314daa3d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=24ea293e481ac9a3e857e95bbbc6e79c33a8f760d41e768c60a34c769b73d646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=aac60d178c4edc486ee7630e760d18f609f68dec6f6e4c50de2a3833f4ec3b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=b04275c5776d64afb8e4dc5ca40ed53430fed366b4f5edee1371a62fdf6540cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=6f4da8357d8371caaef051fc30dfb6d0a91770b56810c3d8b3fc7572a0125279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2XPG4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD6j0VoUpKG6MRcsmQstd9IquMq9Yueh4UMro0l3qwYFAIhAPFiK89HL3Wae8i9GdwL9K7sbjD%2BsDPPErPvKlLiZ7lKKv8DCFkQABoMNjM3NDIzMTgzODA1IgwFL8x4EWw1Eu1BFvAq3AO9YBUC2HF%2F3MA4oUAA1l9J33AS2v5u%2Bjshz4Sctk105%2BKmMHLkBEgtK1%2Bs23pBcU%2FqW67N9dbJ%2F98jVi7FqtBqzif5RZKUaAhXWSA8%2Fhx%2F%2BfhJdLtXLX9uDmfRooHgI3e3GrCLMfg5jER7ZJgnG3Ydu4x2oTGVDAFQwUWFY%2BcShvArVirwpA%2BRWTFwM3oGhKdDIL86lQZoxiyUPQF%2FsKWgfCHFigMIGObvkTUng1xrLgT27CicjRzm5R9c%2B0MapFytOojVE1rZBkYbba4YxGFhJ1CO%2FRoG7CXaP2mE5xltZsJCKbblaiqXfb0SjAM5uzcNLIQ7UYzQTMYscIADnfZctS4o6hw2MPhy2uIDnduCAJaLlPUYkQnwTM6wKYxSTgVZhuEFVGsNm3cUkKEYKJqiXJWWeFblgEFxOTdlEnP1aq9zxMwp5PuUn3Xg%2FKcdMLvt1UVeq3teG2S4DjT3qKUib%2BlNDN1EYSBXoTEWU7rWdhV0BAHOD3%2FwZ8ddfTAjpmDzMd0SgXhMESUAgdvJh9uxEQm6k5vQyPF9k0sdI5ZLN9uO92SkoRNW%2BqXhkoS6opTY7LYSdwYp32s%2BmZcUg5CMHZan%2BkFQRMF6gOivlfS7oRNnGfKconMYTULSiTDqhpLEBjqkAYqIjCwuFXAu710O5FiDfL94BMisZ7RvEa3l76m3XQJBUvr0Sff7%2Fj4WUbH2Ley6303fnkYWUfuqRU1drFkaCfrVJDomgtXp36agSmnsOPy%2FKQuGVNVljD%2Fsc11xHOaTLpwuXwllUJs3iT72RF9KLksG3nJgSp780DMpshGnQJ2QyHS8or8fVu3q4bU0B56INMfWmidhGLU8VrsR6Ni3a0D3b1zz&X-Amz-Signature=999aa040c17f7b3f494b75407e8ebb4f66a97a2dc668b76645066c25257b35fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667US2DSA5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDipCFu0m2a1cSHEK%2BQ2i8HEqILrwY%2F22KadPEXGZkIWQIhAPLbXavTinL%2FS87IhHGxOV79fMr4H%2FEPkZF8ztwsqGm9Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxPqOBNeU3G2JHaZpEq3APSAP6j8P5fpZKG5pz5%2BrJuVU8tUbdrKn0kyWnI9IqK0YGkvI8qgTQjW2uaJQiH%2FoRwRSsEECQrOG2y5Fo9X%2BJ8F6aSV3ys%2BxFCkcxKVTr61Y8ihlkQqEaaXEQeqEjZX%2FzooA%2BoVHQ5g%2BHrLZ%2FxblAd8RCZ7kJaORXba9qexPzI8zLzwZu1SmV3Mvb2dEnz%2FtWA0dm1a8SfZ6kJcodf6RrU%2BbxJqta0Z9t21MzIeYb08jQYyC6PHwsbsPzIZ4efS4uhoDYO2%2BMsaQVFVia1ZQ36%2FACP7as6RcdctCp%2F7tA1aVB57Mg4wTl7KoTW5Xt9JQ%2Bel1YAahCY3pvhjW%2B05cxe44bxaspSEm%2F9M8hph3QUHKuDoYnkNbNtdce2FPT3g7tofp158CcefeDL1HABeDWV3ua7Q71rv8MN0GH%2FPldxpz88TGvVC7vHU5ay421Md9WybJXm3QjAW5%2F1iTQAZEkfjnf9veL0b%2F9FtpvhnQ6ATVVUwXkP1znnAgil3yr3I9u3rqU7TwhQrNg%2BNenvX2QBtG0TrDm68lakUyilvZ6Fx4rpyj7WiaPeTzbiUmbletQDcGyUaYGwhFJCNMaEXJoMnDCfDb7pa2xcuTDsAc3OegGlgPbr82LpZmotVTD2hpLEBjqkAWLF8GjCD%2Ftw%2BxPzol2gZU%2BDgID85Uxs4utYphLxzupQOEq7x%2BUXK6I314XZ8mKCVRq4vD8DPm3%2FcW4S0IxksVmZThODW09gHzT4eIw9Qr%2Bdv5NFcsVG2eU1cQ9i6sMmiRmyuoDxgr51OJPNoecnqdSQhOg00wRmTp95BQmaV%2FySOcElPKpkNEKZ8TMIWAcsoNIWssIypM%2Fi6dmHOSIKwf0MDX0f&X-Amz-Signature=a912ebe437b906c8bf76a34688235f853d1209077169e33e818ff931ccd5e0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=c3df4ac2eb33fa56ca5cca4052fa9ecda2514e878300266b5108596ce46fac3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=b69be6170f5177ae5acc107869d8fc982bc8c1fdfb559b589b89cde55f67f142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=8b990221f201885a8816cc6641adc63c2f1b2ee38575c87f5d1eb6142f527034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=2ee36d245c5c82ce2b9249fa7c0f51f6ae541f6c7481a8fbcaaaaf101c65497a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=3c9ef51a5dc780c03ae82445fea9a9aff1907cfc0bd2be763eff4529c669bfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=92be230f0ca9c99cb0d6b9010bc4fc2678f99a108e1eb113c02a2e29cd55662f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4BDJIA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIFrwvU8sF8pVSM07ZLgndA0naQGQl9LYCy7yO%2BfgWKJ2AiEA17JlSV80ZYFUBj%2BBEoq01EUydtwK7lSkWS4H136BsYsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFBIV5gXEOtPps%2F%2BPircA3ztVFY8Wt2DjRrOmxh77ER6mOzKT9pVpV9NUzPr%2Frg%2FQNtbR214TOOSaUH7Ku9srOdks0REwWOo3OWcdb6VQA8bKG5VHCz6GlqBQUXty%2Bhww4OpbFgoEaSVLgTxcIV75%2Fi9TceZHKMRq%2FSY0Y39lnyWRXOE1pyFzngJyMcRhCBz%2BHQYDgnx7AiwI%2FGbkKTEsi1DxdqnPHdCuFhslM1ClhwcKJngBeG%2B9YR%2FFXuNefV9noQZZUbNunnPOXvIn87I32Mp0vjcPxDuRDZYNpeGjsWNXd0sFGuEjWzk9lYaQOd3cN9JiZWanlS0pjQzqoBH8ulqg4gTNz6KAb0SWkyKjXHinmjSgTNMjRiUotE95fSkcq1wnydcYCzGB%2BWdQ%2FWov7zo7clLJiA7BlxfXrcEn7eXqmJTn%2BaNGiax4Jy8s1tyEZVdaRNmjgJC1jA2xRacAsUTbDXxGz%2FvYZmmcD7yVRBZ1SzA4i%2Fgefcp7PMmr1HL0GR7fTEW1%2F%2F0vZ%2F30mtSY1pC76QlNYpvKN7soGnK3cGysIC2JwVi8BpLoi3JkBeGC5KgciKVGYEtFCLwDk72RcJf7hBkK13bTCcV17Tp%2F3Z50njQy2NNY8HkwnfoQRnJthMR%2B2iQGuV3RXiTMOuGksQGOqUBJJAATYNBm6X6Z0FpSgqPABurrAIUFn%2B01NFW00tGG6kSLpZnURQiRzqM%2BjN%2BtDPnuBNzcaUDghWAfXB14r5M1qHdOAV7AwiPfFUJzomSTVMQHS7gBdOO8s9Ar%2F55eE9t%2FbM4IIKgQxy0%2Fn0GcnH%2F2rQyoDiPlT0FkNZwPNFdU%2FWlyZ8yhHkT9gCOgXCD%2FQ07CO%2F1jql8g5Z2LOnA82VPsttCM6yk&X-Amz-Signature=9e17fd620eb124c1a2b50608d828c7491fe616145a933cfce4ae1bcc4de7b305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
