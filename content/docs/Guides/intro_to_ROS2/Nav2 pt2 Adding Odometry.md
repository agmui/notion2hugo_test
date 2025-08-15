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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=5f7703f8054bddd8de907cec8448e3bcfe833209ac3045a65eb2c81b8622e8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=e83231fdb18fbb990c49b7c9b41f62b6a7b06ac0b15b74a93de91890f2a7fb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=d8cfe592049a4ca39a36951b9eea41f0d19e916e63c6ae3c58b71ab5a5fcf4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=4890f48628e029f616c83fb3075f2002225757901ce0b606800d20928577c464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=c1fcc123282337f8592574d009ab4fb6fa3d68827849134ed8d5069eab2f8852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=c9894277016c8b8bb526f0a2fd7f07fb3dee25f512e96d3df6cbf0f54237f60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=4e59675def5ecbe8e5e4e02f02ab60c1344c594e95c70257c9133e73f64c2c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=f482b440805ae0f4fa230473b09f5ca8a2a7298de38678cee2b7c629d8506842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=cddbbaba7512345ee139733110f551d8cf3cf065de8460d7ad4c413c7f3c4917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVHNQ6F%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAGMBzw2NZ4JwX4RKhTC6fUK2UuewUJOc0RqKlPuN2m%2FAiAYhzmHHj6hMojWBJLtBIuGYDIBnG8c0DI4H%2BwKJnEdhSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM0w4Den823jx%2BplHcKtwDDTiqwXtYMwo9rtnMoawzmeJ7APW%2F%2Fy4gZopJ1SmZdcqhY9Q%2BAqWB8TV4W1wZDGLx%2B9bhg34OPzTW2EgYnaq1WFjbGogGr1ZjLYlVoqWIgpzmJtVyzOdse5kiSoy3K5hj8h%2FVCUvLeC3MAGhcEY6XjVrb6GYbh8UUnpIssv5tW6yk7%2FwtUZC%2Fldfqx4y8truchdsGT0QEbsVih1%2FDrDYh6PuIpUzG75AgqpM2VVvkno0pbqqNPHrjDhnSFtb93yyPd1yyOeJnwafg3tQeR2bI9autE08LmpDWTdIPpde1WGmTvwU0E6vRbErp78sCryPZtxVFooWGE%2FyyaV8dfmz30bBHTJiGqJMeoaPWJp2ftgdiCimUTwX3RjHkIxYcTHC5gyY%2FMDBMzJ0DWTUrRFhB7iDSyo0f2Yz%2F7jFLQqIs0pNFe93JfKjGEy0LgSvCvGw8RSRwA1OHjoXmHgRULMFT2f0iKmjvO64EQDIO4POD%2B3LjiJrgT8pqU180a%2BG5aSt%2FK72VXq4dbP24gTLbGTKaiBDREwNIhLbb11BRP%2FKmldPuxrxAwGgWpuWOJYeyOhFXjvgeUsNA8sLrwmDfxH7%2BWpPW2BkCP9MfWR3bVEUnlToB9PDWoMg1lTyk5vYwn9j%2BxAY6pgGttqHI%2FyIP3OSR2ggBxL9BRM12AwQJFfH1wOJ9UkMR55pGDuZ6yN%2BMYHgw0xXaC5yyOk9VcEbVKMTLXDFCqBf68YAVdGW4cqheWOFlO7gP%2FuWadjOT9fDCOfzcAavGg%2FZ7TuoI%2FR4ZxbpPGgXaOPutzUM0CKZoPYpsUq7xlvnprQx6M0P0adyioc91KljaLO%2BboWypz%2FiLWHRExF8swNzCbxffGYtj&X-Amz-Signature=15f8bcf832fe96f69cb8a1de6fcc2bd9cd71c1177ce44ba727e9e8613f53a00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQIZXIZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzQpJUE1U%2FA6ui5MFlLO5hCUv3y4OtB1rnxtOHtOaZ1AIhAOL8J1UpQnDIFoh55dLDWxgH9iwMuLUTKqWKNHxAF6hvKv8DCGcQABoMNjM3NDIzMTgzODA1IgwyZNX77tTTzJf8pIEq3AP%2ByRD8p%2BzOy6otyYLdbIId2TP83oYyFQBlwzVxL2u64Mf9g6MlDuwe8o4OnHyZgbiP9cfuRsUySLCgzK7epBrHpTO7p9qBGt7vxRNjceeMZuQ6T2zqxHpX7W%2BgqdvsGD60oJ1Arwc0WkPt01%2FtUHj3v8mUEV5WTY8VW7mwxAnSvLybP7qnWdd3jBuW3gquV0E8FNu0sBaSwum6HvfN0cRMY%2Fo0QaA%2FTZ715Ei9KK%2BomkKaJnerWAClakIPSYr1%2Ff4A%2BNkTe0w7yt9sY2GvijXBxtx4vvmwDHcRYxuHs7zXGGtqy4aUePYDHBG6p6gcqeAERQ77lpkMdeZuB7c8Cv9Ux3s3WponCvwXTJtG2uG65jqvP0BOjov%2FyfvzIxB6wuJSB9feJ3YO8iuwyAAY12gtEcTgAORctpqG7zNOPJlu123%2FWGJRqmLtbNBe2OZX91ra9BlW30ct5j80wT8Fbk9UP3a2APCYWbS6TeDxhdoQ4jfOseOt0BmB5AyPgx015J2Ufx5HbbWdxpyx4AInV3QgPcjit7daX0gog49Hdhi4SkUFABQnMzXNib8Z%2FcS0aU%2FlHLdHNtnS4U6LJqmez6q%2FRlMd9ongHGz5NczC1H95qmnda57kNX%2BBtZK%2BWjCf2P7EBjqkAcEjQGiBZqqkSyHDg2ALMRuJOVKqZll4BM4u3iuXY7z94zYwsOgETT0NRslHKWm133g3iPjDckIvJSGQIfoWvc9kRQpL%2FWliOT3pW4Z60Lfw2ouX7fhufMK4148Lh7QU6HUutMlKTzAT%2BXu9C%2BubvXHYbb6yR%2F01QvN7sKcBBW7NpdObSX5FaqUcQTMN%2BeNcq4o0SHHNKJKRgYjdqoXIDGGTSJj6&X-Amz-Signature=e8eb268d01099b34a1779b11b0997f070575de060982c46f2b8aa1bf9dcc0ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=853fd8eeb5c6b275d995c06477450fce4b3ff29862bc23bd77b6451a6985c4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=6b6b8bf63fc7344d8e3f27472612e81bc4add3940d864bf421eb43ddc5e742c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=d4e68c459ad6ae1791de5323e240051b97abf8d4f746c9834708ae33e000388c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=06e68f31b2bf4272bfe33d0f9f28a1d5f587a78482340bbabaf8621c50be68cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=eea5a7157c6309b282986b9448f876b429b6d37cb26cee0152dd0cef34acfcc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=7f869b3f0b7721a421b8a99496e3c2a1f44fedc9bb6e2cc3826aaa30d9679f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=95a01d159ebe3051862b80c04a9c3bb6fb88b56402d87f33f78f0e4ce54e4228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=fa422a567f5fa0376a4d60dd9557b78181db9b0d083a21bddf4e1b73272b1a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=58c456566cf33984183f10f4103caee979f1d339eb875ab60f9c2ef8b0f4915c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
