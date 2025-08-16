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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=8cc89bc536e5d094e57f4a5ea9f450b26c98358f85fea80b489f8fda34f3d5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=42e18f6ebc0a7a32a02101a5312eb62a14b097317556d6f80121d4559c9d8080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=788ea57cfc290b238b38a118a4c71a56de2ddec79e7190f6a986ae9e18fb203e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=d095d897954e79bca959d96a674da9e9a0782aa14131ea31289e0c647699a9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=09d4cbb05419672aec79ca28149f6211b8ad7d19f031965e03398fdfeb6cdbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=81c82ef26a4284528b3df7f72697baaf6e0ae5ee3578753d7bd7ed0c8a6abac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=6923764b2ae4f135997fa8eeb467b192e7a61a62e41adbd48588bf4e7eb86b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=8f4fcda8da8549f2647bddeee911ecfc41a8bfc16199677b7424338f52cb8197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=f1c9f468af72ea7acb80bdcf0e5c98ed7609126dddfa143599ee27522c5a6857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B4KMEW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDMSP1xBI8Uox1Gbkjl60UGBZT7CPCdHe1wHUAlTXsp2wIhANI7BQTliXJ7wUhj4eLn%2BEesJasrem7M9gKPsNUN9sLfKv8DCG0QABoMNjM3NDIzMTgzODA1IgwJTFleiD1sLQzDM90q3ANQXYc44jdiGrH6Ajqnq77dQaNvWYVIZuA92kjyVSu00Xp41kUE4%2FtqVBI5lJv72RrrIhBWj472pl8poXgubijivY5D9JkD%2BpsyNFVJhK2H8oO4NdlFj1HHZK9yfjhy8%2F5c%2BiNsagtQnjeSe1ZltsvZ8oYAYKcvwyiCg40CKniTnuYQhxLwg3Fq7O8wh0Lg2T5rJil65LvrTYaulJQ0pQuOxlMv6GJRe1tqisK6x8HUafjV%2F4msPB7dSoZGLKHWcTyTcZc2Uk0eyghZpnwmv9ozTSLRp2fyTis1%2BVHlwZqdsiWk1gc7mcNu63psAeXJ90Rn8mkdPbs92r%2FEruUXZ%2Ff6xq93s1qvk5s9pvfIzB%2FaXvvCAinWE2zCkubqrGlYN04rZirhZUNaHOx5oPSBBbzCj8js6Cu7RiUtrvtu1bssPw%2BQ8O9fSxR0kurrmcEegJjS2frUHrs7FR5rIwvDHmlP0p2kw7CV%2B6dQ5lG4B0IShKgHx6KaZe2pB8R4N0M7KvB2Z4wgo7J8ly9yaxPy3p64ZVadpRyvo2YQmBU31qNfMQYC65xl3KtQR28v44eDzl%2BBqSVaYHXhhZ9T41wJ69GII3F0l%2BseL%2Bc1VsafopRik9ynHWkQk3rzM9Y7HzDPioDFBjqkAQmPMblMvzfaG15o0qup9lc8ZX8DBlj8QfDgLl0cZkF0rkaxNxmjrRxLTzmItTX7L2OPfgDSIqgVvz1NerKpXTvewUVCbmZdXIogqb86VUWE2aiyweqqAEaCf7xYIfeGKroH3Zbhm4jORUc5dqIaTunENzJ%2FtagJhliOp8ioXSWaxFMRZGBFfBFEAjFlNjgv75kK1VeHuVVpn5EYu3uNjj9nPhaT&X-Amz-Signature=1d7567dae62cb559fd8d0afb7d7959f3e05eb38bd52d767e250998dc0d9c4f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INNBF6C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDLf%2BblEHnlfXlcz%2BaWzYA2GC6qfHmxWr25BvLumsa7lwIgc6R0HZ7lf%2BjRSRexd9ataSFP8BYji794Jq1639xigqAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFUkmNPLuSTNyJcKfCrcA%2Bo5VNu1F37o5v7MSmoHgoLHCtZRvW8gdizg22pdGBFjkiY9mQHVa4pIpfREkz%2FgNM146tLhoxmuwxL1gg81fzlBT7UnubR5mR0SlTefbD3o313Eje2EFz3vo%2BQnuixb%2FAo6jgSBPYR1rObzCt2EnaNiNhC2F2bOw9UGnBJkD%2F9tmyptOOjmHF%2BvV0Yhk7RiXGw6h342Ae23kuTaN%2BbAboUXbAzcYHWJxebnlROvV8g7XvGFDgywRcg%2FR4ghxjOrzOM1gInBycMryycN95B1is1udo4zrOSggyJ2aY7N6I1YrCZaNJeL%2FPiJpiH6wfEj%2BlPO1sWf946TxGFn7cBLeKcGOQSzZ8gS%2FAhYuhclrajRktz9%2B1toQqU7aCB53Sk6kddZpDZxpi1YWx6NfYmzBgPqQHXw69ZCk12Iz8cspkIHYSAdLqHAoZlUlSmEqJBAhU9m%2FvciqWRWid%2B6RoHxQ%2B8bvkJUgvbTiDlmrfknybsd2LzrSIcCJyzoqT%2FRLq%2BfUCZEStgDXi0H2Slt5rUwa%2BhbJiCnsqxVNQTClvGYcolWXPTCQM81kEbYb%2FiLQNf9FAn5Guk7qX9dkLkT2HPfn%2FreZ422BitB0b3VHkem4FowNTX3Tydo%2FzFCgL2aMKiLgMUGOqUBWw%2FsNhkxhaCGgIGA9Ew%2Bkgsz9sQc4rl6H3iyteI1vX3rmUd7hVx4IJjI7m0QlQHAZqrVHuP%2BXCaFGl2AN3LBvuQEd3Ei2RSDP7uSHDrczUaiXrLeGFmilmkUjupybhy09vS0LZ7l%2BsdVdU1qMvN1rk2ijHM2%2FAKbtJ%2BJXXD5n2vwdXQU0lPo%2FaHNJsuovG7itjtdMQcmxApD%2B7EH2Ilyt9tSjMaN&X-Amz-Signature=037b04cd27cde781beaefb67674719c6a61051f55ee9b568268266e8da9ecbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=c6f1701948d3bf66cc14fa2b68c3caf278a661d9eaccdee48417d87d145c2c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=6626a5cd32c34d8338a928407b469e5bbac65214c2c5bef138f4060e707b0979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=7f1e2c71289d33c2d9059ae9969a54e64f8dfa9d05bdba321b6d0cd0892d7e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=345a97da2db5c3ca06bf9ad3639a78dd0aedd69f0fd2eaaf05b3bbd81abdc26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=dab30173bdc680dcfb5caf0d281c864821adabb3567664191dc0e29d934460ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=559ac410ffc7c0b0b8b048f14b32c2d771491c472a5e16c95167b242d099a373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=18b7cf0322eeadd4e8d89d4390283ce23a2560b7a94e80745480e20e49eac2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=d825ec64f34f2b5237a36786ac2e44a75e274365c94ee7e50952d18c879ee513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIR5ZW7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzQrGizmsGqIWmIE231C5NCxJJEYJgoe2M8ojeVluP9wIhAL9xiokKRELr5Xqc%2Bv970kV5Brgu8WR94i3rk06NrJQvKv8DCG0QABoMNjM3NDIzMTgzODA1IgwKM4%2FeVyWmRTGqUoYq3AO2q20ypjQ9msAUEXH6OcewIKnsHKRsFOkvNWba%2BqXS4rdE6BQe8IZmdO8DRxKhtmW3m2OMd4h7a26Mr0GVwgpiPkMdtr38IqzDYfkSFcqoS3lkc1u5KC1QgwQaVzUi6Dc9nPjo6W08aVN3418aDw%2FScmPzZJvmAWeZxvLvo5QjypLpr4XS6HBww1vHBIDiQZCq6yvm2NYk2wFcyxXBJiJVkhUkcK79d3X3NDNwDLcOeuEOU%2FnZQkZd5ft04y%2BBPVWNdiBdIKjmRXQCK9A20Bprit8X65soHaMdM6t65q1ctq9MF53fGgCXg0317bSbdqHvIRVCyVusV9NIQBVA5StoGenUpVZYhqul4VfmK9z1ZlwBrBs%2BMHdeQRaTRsitJYtzRp50yq8gugreCefLR6imLvZXsj2VqkzL6rB4P%2B0n05TcW9kBSG9BOhdAdMNu3E5zJXTmyU59rpN3ZRzO%2BB4YJxeqECBvyWtx86FkmNKFEEdbiJITLWPQKFqU5VVvn7GlCSRKN27%2Br0IE9WYZoS5XQfRyMOGAnNRpIGuGy4y9pWOiHk4SkiKCLxN375bIRmR2HR%2Fs3mAGCo5Gb%2FAV%2BLd%2FufLx3fF%2BcCjRX0cmRZtYFJQT0kSsagA2K%2BG3IzDnioDFBjqkAbkn2J4QkVu4U9v%2FWzN%2BfEpo2rlEJx6UH8aRVKhKeMKFfWZlvdKo0PBsKaQytxEyqkfbnODPUDTxGuuySFV4wyt7vqbPCWBQmJdUdhV9HXkfLD0mtNrYkjZYaKiHPvalIdprIMNayV72dy6seokXAUY5nVWLuih8%2BxIrJqsGNWRIEnZQLW1NiJwqIYEE3MzQhFP2cBv6Sl0GqJGSsHMvwD%2BbRLWv&X-Amz-Signature=7ae0c6e1fa7bbe519e6a59e4564af894d01ae6c6697613ef3abf30298fcc085c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
