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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=a29bc5f147191a91e1c121268355ba89de410e83c4b68328da31e71090c03d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=0e8ffe6b5e963604b5f634b6e7ca7af8a3f809bcb50166d4c9d0d24feb582348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=61c0b6aa92a0d7e8e2e7c057e6a89ac2b15fa8d255599ddcce68df8e1f5e60a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=4bb8fd4ad7e9c40fb7b2c804b2a1e5b966fcdbbbe381617d88e537abe42e54a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=98d237027034bac578630bb98360d2d9052d532b9c1b0871b868406c11482a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=f734c185716d12df116e57b7fcb89ed33dd5db78050f1de1d3b1013954cdebb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=999355ec326d8025c059b4507b447b3a44a9498bd10ee3ff4b387ad6f1223a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=69b191de8763ef4f68d6c8d6d1e165504abfefa312485d728102f766ad7b82d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=341c97f008e5069fd45eb6ebb83cd982b282fb34d4a2a6e1c19cf5d03e3a43da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYZWIVE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDhNqBUhB9Hre7%2BvSA1NqgP7%2BfkNW8qvgKWc4GYoFEdagIhAIjm%2F88oQDtzGRTTKja97f61JggArAU%2FnvVOAEoRNWAcKv8DCFoQABoMNjM3NDIzMTgzODA1IgyARcLCd%2F0d5Mxd4ocq3APBkTF8PBdZIRZqt806fB8H3wT1LsugRHCo63q4g72mgeHMsTCIuealtLU9qEUipDRau1lrrKv7z2r1shD8R0IIOZVgFfYS7FQ4H%2FQo%2BLOxdITlk1ARDv%2BUk9eiiDa86rahwEKlVfudov1E7vrMMgL83ZiX3qtZMpBvduI%2BIoZ2osw8Sa51JbIu8jWmclS3feLZZZj%2BoxIkakbRZ1nNxAmrpuoh4n%2BnR3D8F%2FvsapmBGKJy0IK%2FZVGwEi0zMEGegiv6uc%2FBSYXp2W0xHgw%2FumJLK0PKA8kuEq%2BlLIOjIUpXKpC%2B4A5K39HV7J%2FAzEbqmfgFxylUD1itRs3F78P3qAFXxb2cQXxV9X9VYxIe4EyKzMkmxtrAi6POL9huLvYND6YpWzGT24PLp8u7h%2B2wsSWUDUQFmis2IP1RNPMslwoissuUgxFNTj80TrIcFLcKE9IUo34uTWhxeB36eFUybBgV7WIOUzLccF2oomQxLSmSMkbqWXE26VQPiAmiqruLBMBlY5TgjMBjNjVkT7zm6I7zYGMCXROhcpqWQ9barsatPmj1MndtpNCPCMs9cFU6zGlraQrHYmfSaVsBFl%2F2TZWMCHV1ztNQefKBEw856ntPjehMiUCHctbm7ek6yzDdq5LEBjqkATl7PwenLdJagHVW%2FinzoUwNIqVcWtdIthaJcC%2F3oAfsedx3zu83hEGN%2BRFXfkgXNrmCGAeHxNIhdxX5wOlI6KNUYq2QwWKCdnq%2FDqHgHTRoD3%2FHNlvAkI3GysD0TfLFlnEO5A6pG5%2B5qen3cjXOvOSSXlp%2Bw1H%2BFm5PMyEuSogYR4tEFv5eUvB1WtUnO4QALBqNOru2MYJWnmdccqFRtA6NBnIB&X-Amz-Signature=0ef48ebde88d91588dc654e86413181ff408424a3965559db431e0ab6083ee96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXCUTAX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAEPIQQklhfZpUnjY2iGi7XJYdL1dB8iuuA3h6hflkFPAiBimRppQ8o2AmeDmiXMpx%2FhlN0AM48%2F%2FLx9ZVv4qGzNByr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMgKyjBNQEyy6Vu63cKtwDBW%2BnshFQrTfFmg%2Fx0A3WmtFUKVeJf0018O41PxxZQhhnCKIRp24MSRpUJd1%2BclxZ4FxxiX3cwzU2C%2FxfO1%2BHbQipi7TdDt2jEY2fpa%2FkBN8%2FoKXiaSh%2Fjor8nxa9aMnoL0N9jmK%2Fba2OeA3MQh97Qpu%2F8pyR3JV4HWiLD%2FvvLiV4%2B7VZo1%2FRn2tpUnqoiDCEt2%2BKfsA4ZL8%2BDsvgyO2XBlkByy6IG4yn4pubQvEPzqBIUt7Nsa%2FW9VJp4Mu%2Bzivydzu6I%2FJbxeKXiGl995MxcQLVCYxs0qzgdfKPDVE4RyUqF19Kvh0TkSaXIWSAUJKNPKgX8SEUFjRcbHYnj4QAPArrxxphLNFO36%2FkJUIb5h05xzscME43DmgnlrnPNzdurMrumqlztD8tpNBLA00OavZoMdvBs1bjg0QZaLa2rVz%2FQx4bj5RfVzVCd4gFBfGZ0qnBEwsSfs994IuFvNDmq5e5fwRbbPJXEt62%2FxSGWeCXqELN0ivLjjT4uJ9FLo5TWQo6xk4afyW4dzRAmlTVeqtrX7eIim5iSZnv4CNUxvjeRnFaH4zeD%2Fztj87QO7ZnteIsLzCkwITx%2BY2crAsQrQUNgOIONdFzJU32d3kdzLQwiwKd2lNHSpxwfy8wz6uSxAY6pgGBo969GqBQIqsAkt2M99HfqEuOixcZagZOx8iuOIsLucwsr4LJslPyzaWE9cgKU2wvZ%2BOd9iG0Qpp%2B5WyZnA4HPTEyDKpsI9mVPjvvQFhbUbI3jW7GK8yRiIjFO%2Bh5I%2FxZw5LU6p3rbmiVo6vK8%2B%2BtTlKrVLIVSVgYa49KGN758rNUsfpdtZgyl7AQJNG397cECQ7F0P%2FLgd4%2BdNX861%2BhP28nUAiJ&X-Amz-Signature=5bc52c1107ccef2c7d3c3f7bcc3e3966fcfa2aad3fbcf0cb677199d5d3ad14b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=3ad62c8aa2767770ccc6238b7ef580f61591501d05dd18baaa049e9a337e4b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=36d421169120dcfd07f904fd969d17da84ccbb35fa4720509c9bd4315b60ed72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=e087abb19ddab69c2931f0186208b08ec9dc299879633116c1edad25c25ac309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=b552448fec4043d49144e7498110d0dd959e06cc078ebaa04433fd598292caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=b84bbbdd1a8cd42f20798af73e89f5198d6038db4f124bfb375eeba7d63b0db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=782614677c4c29b1e707092adfa9f533005f7d740ee6ca1bfc5048c50abc57b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEWGSXB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCfYSf1ryVwRTpp3FTgTQCKJZOkIMQeNbnCYY%2F7RQqUQQIhALag6%2BYPbCAGjzq0vyhpTTqKAcrf%2FDYDkU0qdZzzbQomKv8DCFoQABoMNjM3NDIzMTgzODA1Igz1H7Gua5P1ajJKc3Mq3AOyr%2FeLqgYIrNFmnBWvduiojj%2BDyChF0HWEMCEpZlSNn9MxnshHBE7jt%2FBzkmvTSPEQCQzKs%2FSuabrSQRkn15Xih65TTTIljTeWfibiIKmmFyw6lxrCRfnhEozmlSMUI0egxgSPORECU2ivxVi1H07mDKLKPwwel%2B0D2t9Je7%2BPCJpustXj9wjycebZR6A9vNxzuvSJHOvnxaiHg9neIVcMllttHULmpzy9Gq%2Bj2LjBZYfAfguQsJDjU5b%2ByVLYlnk%2FfHbFYD0YsGRqyJDnFXBbl6EPP547GrHHBfBo3gkwTk3bU%2FdMFVa%2FaAgQfpSsulJyyrNyBWTUcLbGB2CNB5AYFmprRU1UJeqbZ6%2F96NfPILjGbNlBMsqTBYq%2B72lFHX8ePfzGILJqXzc0clLIln5n5%2B7cRk9PPKum1F%2FpvBcNeWf1VjAYuyEXGlOkdJ3SrcrY7yShkHDs6Bfeap0b4GjCsqUve5InzlPVfLM3sAg5qQHO4NAxKodjWe9CgorpeoiXLBCWDwe4LasYYXNcqrgZp4dnRwwuiLxDVsUlChVACIRUeUC%2BZ3vr%2Bx4S8wGUutI57HFfU0zIaDyoh1ylXZCqX%2F%2FAzmYC0kRUbxuQJzUvnf16tZHfyzPNU%2BBhvDCDq5LEBjqkAQ0axIfyPHlefGlq7LWAlFxLMfG24ActtCQjE2k3GqmDHfe4MFgMRAeZeiJoLFxVaqgYIr2Z1e90y8RSjY4rFvma0q1ZPBcqKkM6PVGVgDey6irMYr1yXVZ68gTQVZKz077QXEbSVxJsr4ZCwY%2FIq05ASSVVz128rfKfkIVFeZ4hEktx9ny1O8Vf5twMfJvMA4mCcX2qyX9LmVRrKQqTWrJgsWbr&X-Amz-Signature=b08af58cdc1ebcc4c0b9d444da67dd073a7cb42402a08c47c2471fd848743d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
