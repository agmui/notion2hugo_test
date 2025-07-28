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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=495b2eea57b00b178a88d3070d4cfe708ac07502eda03a2dd4a13b8ba702565a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=7591299509830d117c96006452abb4c7857690ca097820eb3b047e281b1adcb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=73a0688e6638f2bdc5b6237ebc92408e6dab0d934a4e07d71cdc8aa2f099f71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=acdd87bd8e564fe2c25402d9320b47d84a73a528e32df449b5bbe47c0e9f0393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=be44720498281991e2c551c4b93bef1a43a53174ecee6ab568844fcd912ca4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=300abd3e9dbbe104e8df24f1d8c3e6e4d76237db98c8d4368e0967d6a1c6f55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=22085e051d3f088a7a312b8b4aa25573b8d6995770fa0b4b00913b62c4208b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=f7870d9c02e5d358724409fa0eb0d7a4643e2e0778d36e8af3095e0b708144aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=ac6e0d9b7cd367cac1ae936bf92c8d851b42838284aaf206b08128b3457cc7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537G7VOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7w8p41LofRws0lq2SuX3Uq7%2BrwDQ3QIxUQ1XMJyi5ygIgHIWAq5ZDqw8la8qynXLdtbrZ7OMe6SboRfa3Vk7Jy7wqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjN11PJ%2FR95Aq1vIyrcA2ULP5EEaG8qVrgeiNUuT%2FEAC93poffehuHB3fVD190kHSJgPA7BEkOZ02mlU0A%2B00ieVPOpBfPUzGSwdegjicV9O%2F6ldJlvr5QTtCsRNYxc5cEG5hwN2foW2aMmDKeV95yOViS9E2R7pXEas1sDUznG1HGEAAc7i%2BNIr8HDOfQiSttX1PTI9sST8q0HWkIxEcqfSMIaHpHutg%2FbpQ8r0usDE2uv2yRoZo8e1dqOQ8dETjraZEvwrwpPj1aT8%2BTrV5%2BniPYkxoGBepAyQUHT%2BykO9%2BVujJ4s0o4c8crrfeEQlRFFmsWEh87DL599oLp2FwCsi%2BqDf%2FfGawSKEGoFxwRireD9pt71qA9Q9jy4T74DjO1XsdgBw%2BBmGctzz7ScorXx%2Fy4%2BpNahu%2BvsUtsZ%2B%2BbCumVNAUCfQi35hVyOYubaUm5%2BAZSYtF7t%2FxbFsph5Vk%2Bk2hf8dl%2FnJ%2F%2F%2Bryf61L6zxiCfMMUUYBcPJ0pgt1IT%2Bhno%2Fs%2B4B4Ic3WppS66RRtPr9MxvIh%2BnW2aAR6Hxo%2B1WrSckfXy1LkOL65K4FhpCttxmgtJTtVDsBP4trDi518MzhoCXaXzjl3k6YGONwsclBAM14l1q%2FlX894k%2BJYwiJHYCoUVWnaWOX63tMIuLn8QGOqUBwtuF0L0Gz6jA1Mn70ANXeYnGHlzQn7gmXn5adzLtiIvg2Y%2BtViFcscKVie7Jev063Ndt6bbu2K%2Fl122Ha5I0T%2F9%2FgZyd7r1t8zY5viCU45nK546hAQXSVwNz0ewAS8I%2Ftr9i2CZ2jukuLNiNhHnwvmwFNxKOwexqrVVVTakMqmD9XGNztcZOD%2BZ3Sbe%2BCxnksi5dl0yjt96lJbjyaECACTehHXuM&X-Amz-Signature=30aec38af341ec2b0836bf7dc765b0d42ca4343a701070e5501578cf9423a756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRHZIA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA1wADJTorKYEDKlijb%2BhXJBQoxRSz7VVxNxMBNV%2B4GeAiEAzwTqwZxllPvcXFRyx8nuPxk99%2BJXWvxPc9SYkSnWISkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlPJuRL%2FyLoFa57myrcAzPGHBUs5hW2y5pVKbwvzJbKzQ4EhIkuDgu9%2FB0SpAn2oskFhfqWA6rkcRCE4JlhDxdq4QweOd9G05HsBDJW8kSpT1bPTAoWxSYBUR8PxiPxMkVA4YTcIDS6bkSyaCv5iL8poicCuFXFnTgWykEBZW7%2BkNMiA8hTK5GK%2FEEqvLUfl5Caj2E26DqejZ2lWfuURyVozkWJyv8PXT5L0oPddWjHhjYT%2BKcOf7cO9lXMw3aY4uImF%2BoQ4D3djh3WBlYrE1ravzhX5eK%2BaVx0Oj8jZ6DMm7bARguFcRnmsjq9gWYPKJAxz4Wc2lIpx00UDSi6GtxZQTNqyJ7QMhnytrAuWM%2FLZXk8OImIx1NHTB8tv%2BuTSY5aBSIqjTCnYv4OFV8f17igjeY10NSMuwHMTElVZXla232LZTt3WOQWp%2F3R36g%2F06Sxrx5TmmWvrWJ2SSrFkrzR9FxYF4wef3Ilk5zg5guRrVJQizlADYOSCFUh0GuipY73xbqWhaHPIsftUK3tG49aBCSODmymmlpK3mbs4wBHUPcdg3ngd01xxHf%2FoHYuVKfA1pHmDygWGIyTbVP1oCMaEdu73j%2BUlg7yX5DCdWG0R4DhdAJ%2FW8qVcrx3teTmuqGI00N%2FQgDjBox4MMCKn8QGOqUBdETs8yOxkCm7TUJ5nnGTRPbtb2x9v6kKwcf13cto0DEQSu688NfotHPgi0qcMuOv5rCJ3RL%2FFX2bBRXJpw2IP1i66Gv7nYEiov2tGADJtBzC2qgP42oL%2B%2BejfYB0sg9deGKkJwWxNtDLPpeS5MNW%2Bok4B2ydfkueFcO0%2FaYbHDG8ZgvOVmNQR5xqH6MUlqWPOsY6Xsqy2p%2Ff0jhZJkN6ItUuBisO&X-Amz-Signature=4aba1eae59b0367e7c3cfc27f36aa2030231e1c5032c2e5cbdfd8e98a5d1b5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=eae3016a4fc6965a72c3af6a10b41cd5f7abe1c4fbf9bc094e1a6a533073b698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=cbcc180e02717dcd92434f9e9419ea8af6ac03eeb070178bde5a7bbc83f83db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=0a5f764c57cdb47f389ef65d0febf7c79522b82fa4e59dffaf3b97e8a3981cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=d7ceabb5a3af29609a3d26a23f30ced9d160edb09b18074df058b35d2d56d8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=c91a6648c2f2d6e70db014f1c2b42b701d3ea3010df19d1fe305ea60a00d9a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=7a3342af73c4e47c111763d13bbb6e42f66a3858b4e60b5dbc07fa564f0812cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2KNJ3B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDzlbyjO964HwkiJP1Q%2BUeaO317YCEXVg6zWePSKyv3OAiBt1n%2Bi%2F754GeeXk83nNffGK2mBp7ck3CFldExzDKLNzyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdxs7L1VZndchG1UKtwDUeAjXwgKAL5sDo%2BzotR%2Bl5VKvhF45qL0MaO3SjCRw4hjUi0oBwYojo1k0L9j7qX%2BmVZKZ1VSYdczoxa6AY%2BT%2FNOE3WcB49B9u4yHDwAvBhOU7VxmoE2wD7Qeh7XqAJ5F%2BCEEsCNrZR0AtTJ9QMiaBf3qZ%2FQ8VXlHeOUuEXMOkKhZyFAx1R%2FBF%2FesI4Ehas3UbXYAYdgeKEOxECVUxRLnGoh78tZaLqh5HMRamJRLoJQaDpEDSCBdhAMWqGU73JuBphMamJgTxIhuH5waoo14UD5WSHUUf2GfoeM2cGSAaDa7ijHJ1poVnwJMp3pCmU8VFGHslTcIAnSDkwMwYAEwTL1VMsJecvMh3ydegNyL2gYqaeZksqWXzjEUN5fWvjqvIUCrCE9u6jtkAhbV8A5Xhwvs8P6yF7g5sVIozl%2F9XhG7kCSbQ0GdtzzLCDziIXdkFRfYfRreesgwNlw2W4FTmz2KiH6eQhNppuyg9XFHSNzR0I3ZXNFC2ESQUK%2B9RWn2f6fGnfGJ9DNQhgY1EmxBd9gtoxTSArKdIDsi755bdgu8fu2NK8JQkKYSMpNXCZPF%2B1Vy3lgQ8wXXU1yx0oanDjkI9ub%2FqRH5GhDAPXgfpW71Y7n3NYSk%2B82in68wz4qfxAY6pgF9hll3w1L4bZSfbNvwS0Gt07jebxtR7DxhsVW9RSzDA%2BFLW%2BpbnuxbULC7gPd4teMUdG5FFK7GTuD%2BkDwlk%2FK9RIebpNF2COAUkUBYfrRdYGDI1v6amtzUwJdgun4tMoXUccf0kKZSBmGOrzIn%2ByloSlwow3M55xSB%2BKmU0l9qH1ANJnYy8XuOzcGTsj5dVvX%2F1yMMyaX7bDtulQXwukS8cvUr%2F99C&X-Amz-Signature=b2e188c96644bf27a59ed2940db13c7a4f56241e401b2b255a82d081b4c287a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
