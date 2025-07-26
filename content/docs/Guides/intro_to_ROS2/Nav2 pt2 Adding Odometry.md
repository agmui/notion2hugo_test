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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=125580301ec03da70c8743960eae7b715342c5f40ffddd1893131b598bc1527c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=49939342a016c90301d11b49f1eafc7537f33b86d3c1b369d729fc4876ab9842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=9296dc1b25ac07af8c2dc015b481f1611aead8b762fb3b531abb0c852a31cbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=52a873de8c4b4bff1a5fa33a1d95a5fdc16eae9d39f73edb9babcac3443ec374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=c5244cbe4c0a93997e31d013828d1e481bac169d92e83989ffd1387bdd065a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=c209b2a9e4c8ba034f90d1c733e21b26a78147d5c1d056aa38c7c236a2ec55cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=fddc1d6d8b8adcf428f08d09cf9f1a0d89a0a25b8e68b0e1269468e599adfa06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=7fcca6d4d0e81de9d2e43ac5a5bbd0008a88f64e66c7ecde7d5656d8d87ddedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=55d84ecdb3e1083b510b41ae3a9c1a9f22754b676794bf86f76a632d6127372b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3L7LEI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEAf3oyVpgC%2BThsMI6ylYSV8D6MF5%2F1%2Fwb1UOTRGmxkOAiEA%2FCp3GyNBPEkHNqZs6joJK%2FyfP3m2j20%2BncWkKgo9o5Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHzo0%2BcItZJ6WssZiyrcA98QC9xd%2BrMLhdChVtAAcRGugGLXRnOjtxC0UxOLSCSna6pR8xyxwuEKxyprWEeIcPJ0gbLHDrnoCvXchpHppkpzoFfVG0B4oRCgWdrDxwoXy%2Bi%2Fq7cjuU1JFMSaeypFxueAKQIgLzOAXEJOAsA5on3s3ggaMVZ7JxBe97VaQ0%2F1diQiBo8QUI9YN2M6ILrgfC1sW5bM5bbykL2QkYSy1mgHsoCDbydVCCk7szmCcO7vg%2BsYssS%2F17Ztd7WeyLSkajsxC1bz%2B1jKWOrZj%2Bxr6DvrU7BDHGzDRxg4PHyDXVl7vbMVSqrU8T65lZKvzGRG7jqJnRxsGrp4GvaZAbpymF8nssECDXXxlDdRbP2RVQs1uFXQij3ayJocAHRiERvBTx%2FSZFfyGK%2FaHmV2fvgqNMZimkt1NOqjxgLgHeQ%2FtlFuG9oYPq%2BzPasD69sc7bZOEk8s%2FI7pIn%2Fjy4K8fvNXir%2BQkYCAmgjLZ4NC03PnB1topup6u488Uh4mwji8%2FXWAPrniWmSD4zDT6l6kBa7Sxf%2BvZ2hipj7nkvWYeDLtxcEUb%2BHK3jQEN1Gn9O3A17fe1vuFVMdo3VtJ%2BBntDNyiEUpguXkhFmI0aSjFxSjWDxQQSQfd1bkvWCILZRLWMOX%2FlMQGOqUBlkzv7yCgkhurMVCT4mMx2GV5LbBS6kg9u4%2FPuCcktkdidFs1xZPcG59c8QUqscLB0UysTL0h8pDcV8tB%2F5D%2FIxdJh5wpuz9nGBTYtVUt1AlIsMCCSb52hSF9JllbEV1hj4jrufJizquWvO6Z8r%2FOaff%2BqAP1umWx9tNC46%2B5r1DsBfU%2FCIr2ycuhTKbOl31QGmdipuQlciD4rEqa4f24ol6XJJxW&X-Amz-Signature=83ae61db4b7bfd2d51de890593918d842b5a6a77efba9fdc4efac557b74ca4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFF3EPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDuv7NrzoVsUgwlSVf3yWnQTYC2f6%2BoG%2BV8aewuzAV%2BCQIhAKuCkLkJSgofmvSOB0g0fVLIX7LNyndlwRJ5RXEZv4Y%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRpv5QGuzaY7Ggum4q3AMTogAg4Nm3CVltmKhsLhHZkYy8W0yococegKiRL%2B9A8BitK5MB8%2BjvZ%2FggfZwCTReb7qbwMvbJXLrwhYvqi4CELGYybO4gbNWI7sLZELTU4d0lcqDaL39VcEcs0TVwlIphc1N%2F0%2Bc0hzYoiVKzaR8Yxmfk%2Fz8TThBGOa0EmyhbuM5yElnC0h19YbClDQmgPgPZD4oM8fh8bV7u8XIoxgWrvZJbN%2FP5tfyQ3MHC2QYP%2FEYPdVxzktkD5%2BZ8Ih9nS8fi%2BkGy8ABZfsLLMxnty5aHtAW%2FVaUucKtOZA9CIeWXyx9t34vhn4YnyDlG6QCvAix8n5p5JJyUGDEbv0dNQMhSKG%2FBfJA8VcHnUySj2kDH%2F4Aa7IHW768hzt9BUVoLvgSaz1MOW85XyZk1zSB4fAMkrr3GOTcZmdjuWzQ8Mlhof2eZml4Axp6BPshriVCL6MTbagroHXBh5D6jgrR90fbXNf3iQKDSDGOf5NPmn6XnbMx4vQojR8tEIc9p9CgvWAzIxedXB3xseXpa9cXIbnLs%2Fr4WhAt11las9LYjOnuXvdgcf6TpOwBg%2Bl4oNj7CiXItOQFJrA4dhPox%2BCuWUsxCpqD1Xs51QVZRvlQnojvasgYDiDqB7B3v2ImmKTD9%2FpTEBjqkARbMWXpW71G%2FYhqGqznVc7ZSuXmAOoCB5uxk252UetYPsvclM1UFgjBRfSxYvyTX3uUR8auYUVdfwQ7y3L0ep2zTk3SUSTQI34yq23XZB7T53hha%2Br2A2SXdN406b3CZ%2BoncryGEpwS4tpdBQm25Cu7V4hu0ywbvOqeYHrC8Wi7vGrpI2Z0nXyN6MPo6olHzMfoIoOWyGmaw0mngo9nT8OHGW0%2BX&X-Amz-Signature=c5d9ac58673bd11aa2ff32081dbf4e09b3c38b91dcfbace70e7481908f6f1b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=b567814b77eacdf847e1cdf1ecef05bd2de66b91400dd2871af62921c755e721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=d7b57cdff7233b16ca8a58c56f5c3b89e191a4a979220620b5c686cdb50174d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=6ca5625b0cbfe1ac43b2f642d2116ccf74437970ea04d59256583f91e4280c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=a40803c7a0459a701d194ab336858111226ae00182e4d5d2d4e79ba4b1986682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=7e8a8d827f92074f5bf66cce6546b6282f5e1b4ec54136284726343ebed5126f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=f909223fc79fedaafd35893299b3c5b588ec36723f4bfd5eeaa3440981749e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4ETH3W%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFWPOh18W1CqVItpOamMSxo1Ec3ekWwbYfVMY1WpJLklAiEA2tAgVJVhTG5CrrbDDdn0F4sX8Td4KPGALCSrQ97j1WAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKwTEn05IHjbU4%2Fn2CrcA4qh0OSn6%2BjfHNQDGsPEUdghpffPJNSvFdLwikC6uMc%2FRAH0tT64MGj%2F7Co0hx9JjPbDv9bytl4yJMh7I3H%2BVwKR5zN7U8uz6oAwjbYL2rdCUdMItpyLDniu1lfZj%2BmenOSKeG4t4xswbjYEUKk3bznCRwjIxaGgUWzVHTjhgDCM4f%2BuDkEeLNs8j9u2ZrEJVfLK%2BOTfksfQ4wbMfi9VuJt7gO9S%2BHpP7zEogUl12ivrClciwzJLnkZT0zkNlIntaw20L%2BercyMMZFh%2BaNLbnCL7jPFBWOHqNoQ7kC719uM0ZpbNp2Aq0trY%2FRbceUx3dq5SJgsmvkw9El5aLxXqg4Obng7VcFgFUYXy%2Ff%2BNmVnWUjs%2B7aQX6iaKnWUkrPaRPcUr%2BF6N6ISWD6S9S%2FryqwCrRu0uvugQFhcyyL9ve4TT3W9IUxw%2Fm3Xai%2BQH17G%2FwaSxai0jd05p9UzVtXSSpKMePc%2B%2B1YNmGvhlzb2lpShoC7VIeB4isGzjR5%2BPDKKZXxjUXNty1wyUbgzpg8htowcNoB8xygq0iRORXFwukV3WzDfcG2f%2BUTkwTERoa3o4BV0oOyCrWUHEpQjU3l8KII74Us1s18brU%2BqCmm4K9DS4el5LplkAAsJDDuiEMNz%2FlMQGOqUBNpL3hBApLhAT8KBv7DyQJ3SwDBU870KlRDtntP14o9S18xk7IsCIhnh4nWZRipnendFpkzu6mYk6o43qVcVeDCLqNzXQPrz6zHJ6GIdvfFLHP9FzcnLnQ141G9ashboriD%2Fvq%2BC3tAZb7ILmkRaglM4%2BBgVXDV0hAbVGmhFM890RFkRJMwPSiVtDalE%2FJ7ss2GEMlhalf01UR5WcOdZuLgVLmgjA&X-Amz-Signature=ba44e224f8fab6e2740cde0d3e304727ae284a668a252a4b98dc99636098a33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
