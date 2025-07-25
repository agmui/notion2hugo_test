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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=789d659c6bfb673586b44538a9743ebfe55a57fd9e1511c5428dd5831def3116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=acc2ae3f583246423990c31c7ebd9ebe316155b2d20f69974ec546f70b481ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=48ce92a23188604cdf4c903b8e50d6215c722c6a611b6cf6f6884a78adbc9064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=1f7c8b483c2feb3bdf072fed0c63e6cc057a11c6b31e395262044cc835cd66af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=0ca2e56333faa90f0f7f236ab8178fb319f9632d8f049da51c3ffc64c1be4458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=388df72f965b6721c310e2c6d8912c276f522a823df33190164cbe679d6b2b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=a0b31287e41c9ee873e65bf56c550f162d9e4961ea1d6a188d4ae946c5017ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=2ae9e731f5308ce69dfbcacc34e54edef5824fbdd0ae6294e3b3868eab5543b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=1bd96522d749b892734a46988276a81d50f71cef8ecfab6f91b51a975e019c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3KOLXF5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDKGWwI4nYBG1ByKKlrIy%2Fgt1iKkl7HgJTMqsQ6wwbOGAiEA%2B2t%2BYphdZfs428ZifMG%2Fuznj9VZZRlniXo%2BAShsbQzcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDN4XLKmz2BOuSc2THircA2KgKV95fk9DHFkmaI7deJ9Ls022dCKLXvmQgCSxS3SYIH%2Bj%2BGINZ974hV6wQmo9YDylcqqEW39yWXPf1TD%2FkEbumtkb3WzTQF9qWD%2BC7lFIwf1raRe52QaF3asB4xVm0UNRKUnybgeM%2BvRde6%2FeGyENBP4KWiB2e4fD%2BMh8X4Sha7LNORtCs5mQjloquM33YywX8d%2BupWCbUn2mW7rS%2FRt4GCNLTKzNxk2BuBOv5xmV9uGy8ybTynYKJTRGwWe5QrExs3h3OGbKIZZ885dtkc5mtMaL%2FC%2F181WvXG%2B6LUpGK8awxKpChR50PxETujXSo9rTJkp3tQDnDaK94fYvlrO%2FKVXBez5FUyav5LQZDBkGSjxxzdd9N8OTE5rhrRwcj4ttbe%2FP%2FpsV5yy4F2%2BysHr%2F29lsMsCkBLNOfDpzGNwCOMxlpxbuwVU1O3wT43P3CDsI%2Bs7l300FR6KU5KNzB6qspQtD%2FF2pqOLHCrA8gRJkErw66j1pfPTIPJWM3mHJbp4FqBcUy4kLCs2NgUNwAZLo%2BGU6buTyTD2RHoMz8%2BUzDIuisy3hyUMR%2FPlbTdybpsDvOEi6wbpuu7%2BDnfse08rYxb2%2BEufTv2wltNu0ilnJbroj79pgCHxTo1q0MO28jsQGOqUBU45vNvZfsGuVfTFa0KSI2%2FrC8y8o4Ayy9UQG6NHkHZbRH7F2XNAjZXK9fv6egLV2VMPDUlOa3K25dqpyjE6yEqTbQXanVyFxrXEzGUIq5c1XJzcdCyJrjLUFofeYx%2Bt8%2BTJ%2BK7eyMrfsu8Zr0yzvDoN%2FfSu9nlCXKpQwJmru%2BJwDxzDx3msAoNtCiIgANybTSuvVdEAqmQ6xOmGgpC17hLSER4eK&X-Amz-Signature=81acfa46d35933af99aa066b430e8a4899603d0d5e9a8da92a3cf421ede2b522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUGJIIN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCVFvCi%2FgW4iwoh0lWsvAToawV6DyIrX4uFOGOkzBRu1gIhAJmX3zMf2UG%2FwrRTb3hRJzDsGfFjGoZfRwzeTjRhjPlYKv8DCEgQABoMNjM3NDIzMTgzODA1IgyRcmX2AUNi%2F6MeekYq3ANT3bjLF2%2B69zl8%2B060igQupgRU0mKnpM6gp1hsBfCqw96wbYqysZ43H5kR%2BbpMZaXpYjvILXPELtjh0LszVPI0RN6Hbbq7gxruptuHu01njs59r%2B7RXtT2BhfFyarQ7JZMRGkgp0Gf2t7vidGbzFW4QziGptk2P7abi%2BbdAz43zhBTMMkv7G4mfTo9bkZzvDJCwDMo5M9L%2BZC2TYr2Ol6akwdrjb3tiHf7lDuxHXJWF%2FUo%2BCAzcWt2V8ViWT57wlqbq5Pw6pmhcOAr41BuV4r6OKxn1%2FYlZeZF6P%2FaWh9fMkEPZzEl2S2LVPn%2BjRqt3o33lS9gRQT2GOBM70ZsxLhv5h5o%2FNbXCqz6hNgIe3PfvGKZYjSaygYgeWANVJEiUlbLFsgCMktto0UCW8%2B1877%2BSwSYIMkHJxW1WbkzUkgCMAIlDmnJ5j5xYvn0tFl2jiNf2b%2FO8G8Xx3KhSP325KyrgWiVgfa7nj9AUjVhzvxD12ZMQUffnge9Q6nyuYDi8GWk6D%2BKVHQaPEd2PM57yu01x%2BXYsV1ZotzFQ4JKIjbs1So0Mf0hxc8ypBwajkW4dyu7CP1A%2BPPncXAg1k8XEdrpJmXEywmXTQz0uHxCG0ZyY8z7O2wDIZtvjguhTzC7vI7EBjqkAZ5H9KHnUVq664EddWmBgky6E8eBKWppUbANBRGWYNIIZZ3dLGW16W2gcQLULNomZIlwy4jbfDHVeahNr6TsmcZU2lWdrMIDJA%2FP%2FJMAz8dQI10V8nBZZD36bNMOb%2B4O91VYa3w4ch5dXSMrelGLiWr7I%2F0ehukGwr%2F7JlLo2a7CNFIzgNQKcSB%2F3c4tsOUcdtau3aN8xtgm9FPkTFYb7VOWx8Gp&X-Amz-Signature=3a2d24c044ebd48463fd89338ad4a41ff5a3bcfa5cc17840094aba1f0924d6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=c61486625c09459212dcee2aaf0f07f164d0ddcf0c6b56f446ced1a30121d152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=b430d55624a96e7659b404089edee9ab362a717c2e40b3549e9176e8c7211cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=cb33dc011639a669fb785491e72b278b035b44013dcfaa71e189b751695433a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=963626931b64054ad3157aed5a2acdd85aa8f2f868de82eb92c2ac6c3701d595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=abd3e443381ce84faaf424db676c5ce861301bdbf87b76e1cf904bf25179abbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=c6153ef3bb5ad30bd72a009abbb346d3c195674ac634893d57a1ac0820879819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOFKCZM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDXnp5vVyxRXeVNmASt1uTgwLbkWU1dQr%2FUH5hBrygrwAIhAO29h8o%2BlesvNEneGZFeINVWW5mRYdBM0fFUvsOv6AdlKv8DCEgQABoMNjM3NDIzMTgzODA1Igy5njcHE%2BgYNe4vxfsq3AOX%2FEva7VYegTzljaB3nj6%2Fp6ABqxDw1ANgVgY8cePWAIi%2FhqpmiYIk0MZRTRo6icZmoRMtt0LVFHL1SL6VCfFc0GdcJh6vV%2B%2F5snoVgpqiBDCP1woSmIirIIT993rmDp5gIaylMeyEsvyIzlQ9sMv7P782glDSXPjkgZkIEMhYyNezuNP7yxBCSjsyqY0IYuTduL9VDGMf2c0KtS3cfksB844AuszOoOC6p0Mxe%2BgX5FjUJBR12yRk%2FnzogHhpjb0DzwEUaibpxI9%2B9SJ1NhCGxoXGHYIk%2Fr5h1D6UiJ7XAW2HVanBfFY1DDAZA%2BBcHyws29ZRs8BykXbpcom6JkQRGaZDafyHUXWC6iS%2BwVgPJndttdTEKN3%2FZjkFR9T1tESKWyUEKgh1UB7TULrrQwQTEsMAK5NVG0q%2FogXTLTYLHM8Z%2FEWcie0NcCa7u%2Fh%2B7XsHoQoQ0SFin4H4rco8o18Yopu2wD9n7ovni09Q%2FaES5hjwJu2xdWT5ukE0YZ8NJj875TZfGfW0NjEY5ZX8aGXcnES1%2BZQv2pbJCBi0qkzin1NjrhitIxMters07MyzTAQ9GE6Nh9CRLMah0WCEQhdY%2BxBYCEn9B9XB5qCzhdJfrFAeQaqU2DqeeDrvujCMvY7EBjqkARlZucu8WCJp39LJgPfc6u%2FlCz2BFYBqzqXjsdY8pLd0N5Osxkw5DPTVu2UXMbVL3U20DrPBofQtIPMvp8UvFUC3Kx1DmoaQts25lq4p1d9%2BAWdFSTze6uksktbx83%2FohIB%2F0qguzZGR6lgchA3cs1v4K6EuzYCHV6FTWd6BTqCC3kG7Qx3OElgT70nY2wOEuJ8XlGuXmOzETQQ%2FqXxxo511oifl&X-Amz-Signature=1560b9924b6803b92cd43c573e03a6197bc58886cb4dbca3640be90d2e3f5128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
