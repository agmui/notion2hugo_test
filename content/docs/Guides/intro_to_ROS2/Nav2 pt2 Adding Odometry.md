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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=0c093b803919d96efe66fadfbfcbb73b10acb8a78ca436514b86da37dd236dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=980bf7f9a02adb2cb8562b472fc7e364faa632e9b8c42644f7f078d453f49b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=c164b20814e92f8fc319ca8a20c6f0e6e360bd7a0590b9efd234615e715bd472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=ebbe53a0ebc88922b5d857c900e455a19c6d08cc062164669c34f965be1e7a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=5d6c1bf799e9266860de802c592b624aedb032fa1688e9f39c014b9272a2cc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=88abfca07a29688f0c876187d9fd57b7f94c0125dc09149136eb05d7eef68a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=d4414943d828def6ad145c38ffa4a9b4599c63ebf270a74c8c71ffe8aa659321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=a724d3332ed7240dbdf586d3c964680fecc23a6154511223956faa702111c0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=d059a8323644aa5dfef418ecc83129e344177a44db32fdeca99ae29595f2e870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEQPVBT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE%2FhkxCiXIPvVdWphVvlZaWJKsCB6mifdDRs01DGqMe7AiAdaZpFADmLyS17hZQEIHLSCAwVXg9Y3N73CO9ATn5h1yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMuF1uvI%2FaTej9mnM%2BKtwD68kHiVc03%2FtLvC9XgQZpCNsA6Flr3I9gx%2FABlEPhg3ktbP6zOfkdBtekSo4o1mXytrDsIxDWGuK3I%2FS9rZZxPpEt%2FWABEmGgRWTNZC2gEQ4RIHBZP4eb6TCaTsWxUd5xW%2FD%2F0Ebd5%2FEwjB6LJlq%2BUH74FVslN0EFmifDydKvPxeooCWfjRhAX1ZQ24DkM1pjwBZ7kkew%2Baki2mdX2d%2BEP2Z58JkNRVTgDpjob6AL20OnEFd0MFcF9WhsZdeptno11Vr6JLzP4HOoKJJFkQrO%2FnAF28hMSmuHAjMsfV8sAYRFIOPMNP9088Zgd%2FclJkstm7Otxmf6oR4%2FhsaD5buCQVO7XBBcZmDWHhuwXqi1p0vKsVGUKIiE989YFmDEn0ueYkqDmekhFrUVUAGhNKvLBHbpxH3zIePnuvs9ZklEq382wvm%2FXwfZt23cmhhUU6KfneCmUmEi2vFZ%2BiApC1m3%2BAJV3XmgEtdaOQKgznCCqXH6mGJVDtQPP1HBm%2Bx%2FfmNokkt4vGtpia3bwtZYjQBdDMjzN28WX%2FvXGIchzooH7PmI8px0kbXOgrnej6DK4ZqgVNIQ4Q37p8d4EiiBDp6fraD5xEC4LNIqeV5eV%2FbOfDbQ8AXG8Xe6j0k4AeQw6NnGxAY6pgGRGU99z0fvIjALKputKnikUXnCMW5NQaLVBx%2BNnzfOMmRO1p0whjY1vIHXYsqSXahR0KfxTAfy21Y2FElN4OARYqGOoO3J%2FRbe3zcdJq6u%2FyehCFL6p6xk430bgT95ncLFHbc7j6k1YUxdDfX5No4eB%2BAGgtLArah0P8vePlR6S9CUTmmeFu992Y2YxJanb1n5eYwUUMcdhB3wTLbg0XOo%2FiR9xSts&X-Amz-Signature=758392463ecb1371c93944af743ab9593aa712dfe890accefba8c13a1a78831b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAARYA2H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDvvQ%2FdDt5CUyTrmip06%2FeGyXFBbAFoFCHhWjMH4F%2BCMwIgCMo64wPx0S6hSMysLTi%2BqdTuzpoIX51rf6Ya%2BkrUsH0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIyHqUEI6BZX2Oo%2BFSrcA6oqFis323gA2Fu9nFyvTghuUVJ1GNiNP4DASW5NX6TPYjPjIcguSY7O8iHyLTluLjVydxIpD2YcLQWlJBpQnTKBnuc1vl6xqwbpMw6xlikmjvOlGv24r89RfF7%2FSTLLphKxiDkUWYQwVNr2duMXIy2LtKHfHtsSjog53tbkt9TwRrC4kSqkA7j790HX1lqEclMkqCGYddEYcGyyUbU3c8zosNzX7WMSA4s7G1YbwgvMVOW9lbsve8Fiuz2mCk%2FgwsSbbetUUIvtl6zFj%2BzjNlq%2F9A4ycyGnKj28HwBdhRyJXzX99qklYoZOmABvBkGrOwmiqEquYkhSxXmUw43P5UwFtWz9EtCczkm1aSFLmUSPiQRaNn6EcyqTsXDG2PmCNYKkWnUVbUqSElT%2FAecC4boH3vMj1cwtmMSNx7EXa7ckffalxWrdcHedVmuFb3UVvy%2BQuKsObjlRiGzQABZMoV5LrY5ch%2BsZtC4j1u5pk%2BesyGM4%2Fw2RwXrgsiQn5TGKmL%2BpI2OLk7YaZvihwfC2VC2q505qKSM0ppKeuZKG4LKpG%2BwULvZAVV6kJpKR8X%2BWvwD1e8wvM3UxHTrrLfpxzponGg5XEYbQkkmQh5iuo1dpNtZtdvaDuOmumKRtMPPaxsQGOqUBuM%2Bp0BV7yu9%2B%2BoK5Be6OaXtu%2F7rdedTpsntAU%2FLrI535PhJaA2bBUqQVuf%2FVva7S8qL74UXAys8%2FddmeFqJ6nejzPTh3sOC0%2BMlyfhyFKUfRyYpaNZ2LpMTSKF5yaTlSiU9w8%2BZno8q7qC924F7LxQZhXGCVwmNUtiJ5gEeJujJHDkC6iyaSLIk%2FFb3LHLeIv8QIbHQD3JcgdRKVawMQf9sNoicK&X-Amz-Signature=ea101b5be3ca0f9c424db52a986aaaf5760e61494808386b26294e0350d9dd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=9072508864e327c1cd86792820b698d88ad1f08a3d8a997d597b6aa707521357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=9d860f35fb966c311c305ebe2785c0e0a875ea8a0b818e5911ab142192100f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=f78f98091ee9c53f2028067fcae3ba9f8888c485ff0be19409308086e852fe7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=7cdcb473f3b6cec59fda1a0d3b40c7c6deda51082338ad138d473486e071cccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=9aace7c0d1ea5ed0c19f4556d99d992add401a886480d507ff247aa67368dc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=34343d6fe99880e2595b1a4cead0f7498c7d50318a1bebf914861e043a577c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=02bcf0fed56a557b13932bf0b8f3c432ed93a1705c4fbe0505451fd9c6b3ed30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=30033483de454aa523151904f61fc1c77a37fc13ac7eff55c9461df8bf6268a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX7Z5C5X%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjHwmhmPr19uZoGfvvHE40920iacTt0%2FyfbeQjqhU6kwIhAPFGvzMi8XIpY4CC499Puw5V1DzbSbkRvzPOk0zMlb64Kv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BKx4D6GkkG3qg2hQq3AM3TPUm4EdRPeIdmjPwA%2FIdwzsdb6xVJ239SFMjDKaErb1RseM4n6PYbw3PTfuqQmUdr4KPhV8IXvars85wIz7CXX%2Ba2ouwf0kubQitzE4a1FC%2BN4nN%2FHJ%2Bg1afZLaQlW4YMX237b%2F7nxQLnWXnplRhjIvRt3SlcmdHDBhF90Lnel0zaAyQEXj5WtoP8EEpL4T9wnXabHKr5aLs%2BqRFH9Yo41Le4WZ%2FgIm53SspqvUTpWaACep28Rd6qCjZUyCqfhctr2q1jQTxVOoDsDBVwq1%2BuudcCKjTCJGFCFSpl0SPu79iTbmriTcFNr1UsFShE1rLoriaG0Cqwwk6XFp79p2zLV2x2aF123SKHkvnEEM5%2Bst4mBkBV1FHE%2F6hf7jUjlPfFAVcJ%2FodxPJMmzDCF28mbrdigqGm24vn79Pql1YyLgFE9lp6FJpkUl%2F%2BxLdUbZgFO6aQtmmuthnBExZbkP5xrMkFgwmiksX%2FnoLAZ068MEvqU5q7zyhM%2BDi3XNDjs4dWjM6dlFZqdUJ8jeZGSQelEMH717GuKNfPYw%2BzejvRH4SxElNKnVhKb9bq%2Bg%2FKO%2F58C6KcIwGDlkLJs60HgpPPNlCPp%2FYvGbpq%2FWy%2F%2Bx23LEeaLrdR3%2B8pDUkE%2BDD92sbEBjqkAVsytMmt%2FlfGmU%2F%2FRonVw5kXotS8HwOPrP6faNhH67oIR1Kq6Sp%2Bw%2B4yB8jKgteoIEWJbkTcQrNqfEcvHxdO%2FkOBRONmkbjdqjhsCkVVX5PODrj59a%2FaB%2F%2BOWbarqBhRH%2FxrU0EhEHPtmMZ6Sm4nkLK2cSRsmBANmEIMlXBDm7BmBSf6K42UgwEclnmDpCILSY1O99ajvLhEfcT8ou1mqrTKg7og&X-Amz-Signature=a83af807e6475beb3c18f404cbb78361bb5d0fc10caa5fdb4f54bc7e92ccf8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
