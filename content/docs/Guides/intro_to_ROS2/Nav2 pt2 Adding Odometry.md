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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=d82e8c5607d80beeb5d96ab1976ae3a1b5b8d959cb6adb52a80fcc3e19728e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=4b4139d5679408d2672fca52b0eadb03b97162f49bd9081b9a4662e8fa5f5de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=28494afc0eb50d8acb4ebaf27d474d4373969297b19fcfee239f11b8d7f411a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=3f8be1968b499df3c1068906f4f36662698fce91b52f7a1ec077575392799a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=84d40bd777f2e996e7db8651ad3411f8024f40881a9fd712a818c7c23502fd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=623547e079717c05d117f6d8de04b84df12ecdc475d16bef33076787932b5413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=c5de897bdc41538ad5c0f22f8a0ec92c45091646be2bdc07df7e900160d02986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=5f50cef5f803dca81892507dc9a65bc14b8ab4bb7f89683c2499c114c07e3744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=df7f60a117ff65d4f0d0cb8fcd6f7d7291ced09497f4d92dab7bc4a7d437d5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZBFBS5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdA03ZUrAlmygK8FIFHZXAWFiD4Zl6CWCRDSOLhJuwlgIhAMnjBmdeU1D5ageZkh8GZLZSolYMBiBp8LE1tUno6sqgKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDXDNcRwhMzE%2FnGPYq3APYzltMK%2BuOiNfB03UhFEoMICrFXO9KlLYtEIzmKVF80ory1QX8o55Yjwkb%2FB5P61IvE%2BJNMP5ObGiJMVs%2FqI6tkpDO7pHav0h54eOcmky9PTfwGMwtsFOJ%2FbdM2LlBvoZEkx0jBrLULyWo%2BhUCiy3j3%2Bx27HuZkCi7e0osPoVxTZJMComjAyWS6EEDFb8aKFt27jY%2FyFNPFAABa7M2aVRpLF6WiVaOs%2Bo%2BPx%2FLKJyYpxGgEPMD%2BsyIsx3Eq8IP1uDno0Tpm%2B1TZK1KXdNyEIC6H%2BXuUWGAxa%2F9%2B%2BEK3GbQ0VgYcCWgacmO%2BNawl9Xho8bTkyLrckOPvvClFn%2FCRoD9XOiKvFNaMC57ajwpQxI6Vnt1plNqcqZvcEjJC3Fks2uQ6b3Kk2%2BdL5ygsDf%2Bm1lTlUwj9gzkbv48em6c5X%2FbPmiOcQx73A2xralUYa5GVHu%2FU%2BB7s2sWp1EewVEwuB2UlHTdfgKXoh9JkRmWQu2tjcPrsfQu9Mipiwv9aouBGnceUGl5v3zNd5km2ymFBUCm3NrmQJmf0XlW03QDcuHM3AVQLy5RB8RGqgtQUBmL9dRESQN4z4S9iFNXdm6SYc0yduVAV0D4UyBIXbBhwcaW0iEbjt0U7IthaJ1KeDDa9drEBjqkAWPgHlen1kU7px03GG2k8E4w%2B1hJFOCxwIi%2F%2FrC7oyDo4q2BCrYKlVGLwEOcuSZ872%2BI0dogAzPM5GolX3ySj7amjtSkghxXKHDGhkYKa00ndisQfAEuK1Np%2BxesgBa2wteYyVxL4bkIic4Klq4GZ7B4aKDxJsg6b%2FbhwVe93cQWE7tyyGHVEg6v5f8xHSN1iiQm8OMKhLU7qExPWBVBg8YhYqAG&X-Amz-Signature=e4bb86fe65bde145d0b1647c6785ac486bdc17c447ad998c4575b33ea8f984e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPQV2JA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBhVj3bjCor6n4HstZtJO3njj6KtTy7wUcznsG87tnXEAiBdE18Ey4ccWA9QM9kAJWIAtGulfSY5lFrZ%2Fipt9AzqlSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2FnAYEFoElPq%2FmLdKtwDcuZ5zWCvyQiO251Md%2BtaB3RAYlW7sGy8ygBDJ8AB9YRQSNs5EIb6M4F%2BvYDKgz6PGPVaWmb1xYomtD603BI9cXkz2Npqufpj7aOvzYKPhZ1Ch9VK6S7EHMpIS5z%2BCowWJMHxM6NtQQ3TEOnzzeaCAtOrng3uPMutbHMIM9LH5me2hZW6DTz2CxnsL0fiic4oMLU9ICfcIk3T7%2BezWgCHntIf8qun9E5JGuenCouD%2BJ6LMUPNvV2JVQTh0VLVscyesixru9TSUGsnu0R4Jfhhg%2FbFuqVBBySdZvVlvPsIHd06P52HpOhk4QA9RomdZkSB93MRauFlj3%2F3Gu8UtsruhRa%2FKp%2B7CAj6x8vLjCLsif62xqbwgV%2BIymKII83VCFZ%2F3BiqoBl5nCU3AcxV6FPUnHqdomdscyuUDHi%2BXpWofu3%2Fff62%2BDpSHjw91XUMHhRv%2BjkYsbVp2o2woaz%2BmQhsBIPlp2LjZOKUDS8kLLr3S1A7cNsQx4kCZBGd%2FLtVYQ9qktKQlgw7frqcQPd%2F69jwJyg5P9fGVifc4xNRUqfZYAd%2F4%2Bb3jBU87U9p3LfBkwbOu7C1MgB9c897Y%2F2CGTeqecgvYn%2Bb2vktZm01gWC8I6LiyFXNUwRUKIohfNMwivbaxAY6pgHAIT3VcXY4SV7dB0Yo8E0558LsMIJt2KEi857TEvm8lt3%2FtahRzOu8tAEBpzCQLgI7WszqQCWQmETPd0DwwLRQHkL7r3gWnx%2B8NDt%2B89LtAOnlgXDXOlfrwF0CzoyQobMdNQSYK%2FYzyOVo%2FbFyiD55F3xVR9Xltb31dqx7e0vMJUh5L2MhFwL3sy5GqCuKLli0dwlH6vasgf7w0AMzvEqBPVx0gAMd&X-Amz-Signature=09472233fe0f66104b7493b3a9e7a9d4ba7a39e6a14222f5e13f1dd7c5d5dc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=2e6c27f3cb15530a144f5a0f6c1c3646789f7f521d2033552d9680ea40c9d1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=020627aad2719804abf5885b3d544763d8d4ab9b8f0bbf3700ad965009ce460e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=8e329e800648cb16f4f3a9ce2a2cee6b793d826cc43201d3564431ab79f1b666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=b301d40f35e8ed3b39045fd5bbaa15ecc0bf828aed5f016523694896fc478685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=6a51d9f8dad30a71a968d094273be04bf5373d8f35f43ab5143e3da88f90f491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=53de3fe0138583870d699dc50e70ba9e85f3e6af2a96dd3d45064adb46c401dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=a38d60ecbcdce4cc72f4fc0626dd45ddb08fb4d089b0e1ea68eeab18c15042a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=fd3c287b1f724d52ff405d22d099af6b001667485e8e29a47954a862fabce19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VLIP4T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGL%2B%2BEP2SGLUpoCE4LUy8IQXOZG%2B1SB%2F4HeanFAIKxAAAiEAxIAIxnTC8F5merwrFld5BN8ywItOtb4VU8QjUyPQOw8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoH%2FrM91fIqAA0%2FKyrcAx7OKZzB5AUMbqCQbdfbUXs%2FIiWAShwuXXx6marGO4HS0R9sjtwXSHaPmTFuVQmcrlbFYHXfFs9qQosuAynvx8sPgWBhah9dANUKdn33beHLdSt4osaXDCWow8glYSMx%2FTsqDNs1FWY12ahGTrzFIxfwEurGkFNB1HD99sBo2QmVN5CT6%2F7ILZlFl18uNM9Kl7H3jEDKj7OrVOtgidrN4mpJ0NAagZEeI47s3bBjkVoZxkdQtYTzYWF5YKsQtCd4fe0rY%2BJRavh91J1Bdjk9l%2B5CjNBAhpa%2B1x7BR6ajn07tPm86tJd%2FQAkbCOA66afxmHPtxQIA%2Bl9iA0SR%2BONu7lP2Lg9vM9ebVShrFUTc4%2F0Fs9yh%2BxzWNEKi3B34RhWYNuo%2FoQOoed44JPmF4aWVwpQRFaFEl2AMgZR%2FS4J4w2OHAyUVTD481uBbZM7mAqYHCtnm8MH9YF4jpznqVEo83bPfB5LqEfi2bafqSjxRE7SutoCdV9tLd%2Fp3ppUmLvKLm90Ro2n0ohUpPDQwZcPhfuUIRy15I7vySxXBSsrnq%2BfrS1p7hkkNIl%2BxUbQAZyuPUn1p92s6UDC2DcVINgDVio%2F7vVdqjRtC02XrynqTtNqQ8f5vidGRMixQrQlgMLH22sQGOqUB5sGKjZB7yyVgDurEAOT%2FgFYEAl0yRr4MuqC%2BC6P5jUVInRtpuOjWkr7jLnyTT%2FYo1GVJksRJ9A9utEJUb62VEfJjvdGiwvMyFEt5EO75MGEg7gSvP6qpGALEBICIKEljxicefmdP01gaVueJI3Yd0jIbhVsMEnTYJIRsh0WxLXA8t4Oa3BKeWgnfqcZ9NMZzfGknyv3yuhKBEx9NRgD63ExjqjrG&X-Amz-Signature=d64ab6558b5b8add27fcebd3db1615398fd1e25e7494276853cf873561d629ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
