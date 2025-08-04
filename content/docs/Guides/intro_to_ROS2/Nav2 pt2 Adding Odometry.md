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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=c4c4b4f0645209ff71e77cd0087943e8796d3c83aee4f1de912edc0254a686af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=51791b9f3ed1a87638f57de77cc2d96bb2f2af51db4381e6eaa25236b6249589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=f6cd12ec3fbf8fdbbc08665d974a7088b567e297f4a1ffae21e2f6dbe8df44fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=ce95166cecec046a3e99879a44b43442a1de0f349a7b364f0d2453ec41f8c5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=cd705ef96c8171d74ebc87a737d15307da55ffb6db8ce290b69c28d0c100dd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=b47a72739d53292bd9bbf1f4d45448d22daf3d2bcf91fd851a5cdb76ae32080b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=b5462071ba439e4875d35c0388f82a20bbc01f10d7d3480ff3395e2fa30fbe50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=d32d14ecccfead3d3c8ceafc86e29f33078fe4909e81c5c077733ef98fb8bcfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=1333dc4fbba353e2bbc31d660d767d230b81c87dc8b4d5895159512a4422ede7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZ64JBX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYi8%2FZpdrb8PY%2Bznuj5djuE%2BOwEhvzpS%2FxTq1qBjYCPwIhAPY50H0rxXELcePJ5RXoQwezB8eLE2J%2FzszWYThUIXWEKv8DCEMQABoMNjM3NDIzMTgzODA1IgzSWnMlMLaytvKoGcUq3AP%2B1IHzUACB0iv2LVzj31mZIHnmJy4YlNfX%2BP6XXu5x7NatF8l%2B4YumfRSl3fnzPr4zrJc5rhrc4pBrYoGQFfIBeAHOzTbNWhD2z9u0uh4zKe8eVebl4CjGnJjqbyFIsYJ0zJdTxLAfA%2FoZO7HruW%2Bv5gmu1dZaLkOESVdrqMD1OSb31ZtDPgf1FHfK29tUdcibg6rGrLjo3so4I8rK1hbj4hny7tXrivN2lMZFhI7o4aP3OyXP%2FZhdZFEShIeAnj37Kt821PBh0uyF4bmZ8VocM3lvHMv3tZr98OsyTiEubSOUcj73h20Z949fre62gNmWpSIrFVyyVRaUOf0f%2FNurQKwJmzfCD1UOPfA5%2F0ghYny4NfL7lcMLDQviFw8Nvx9TYieq82PuhcOTiUeXSir5kqySuJvTJPrkdA6c22ZmsZREAV2TofkYdO1%2BnvmhsgdxNokXIe7yzsy3hcrt0wC2lmedCnEeb%2FEX9wJBrdxU%2FZWZ4u7sYQk5lRUagVKtc9hQn8ooq3pmvy%2F6t4awGMcgjha0gqJ6K3KecWiYUp8GGilvhz6A%2BEA75ugmmW6Ji04DPCXBoFEohcDz%2FHb3gHBqOgXvQF35kzSg2j24lRXS6siRAbS%2FaQ77boqHRDDqgcLEBjqkAeKm94sh5Q5awUxZi%2BcFobX3WLszxeXcFdibBEYrZ3cO5ckpeoTORzjHDD42hx8DOrd9coNQ2auLIzMg0noZzVaPKkSEDWmnEGtpjM%2BSCb%2FjTXcM9gE9Da36MI8pu5y8j4BMrV3Ubn%2FBcy9wFgC7K5%2BddOnLbBKmDFSoDTp1%2Bogj9C1sb9uFSH5%2FabrJWlc1eeom530TPvXfEDcjvjdhot83wXyA&X-Amz-Signature=8b969fad9b8a14777cb4b33f020b3a4aacd32acefa6f7876d7230ff67e795f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55IBG7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsQvmsJkhhfrmdAmF9U9sRvKsNrTASx3DueYFmSHjUhQIhAMfbjhPEfqEF6nj1mUpqlJdZMutRB4XPqE8a3Ps0WU1gKv8DCEMQABoMNjM3NDIzMTgzODA1Igzs%2FDOEShNde1K0c%2Fcq3AOby%2BE%2Fq8DJm%2FlkaQzBUk82%2F34X1i9Mt1DuGbN%2FqzBk62h0NqskFpNxGwYD455ewGSTGxl4MoQNTmOJ7dgf56CmugAzcbZUXouhskaB5nNb7%2F%2B07dfhjSY63nQMtfdHl0skfcJi8ucXDVnhVArhSKxzEFDZLiJ%2Fa8jKBwQyqUF2iCZ0RFG%2F6Y24tkfyUYvgz2YbCeRV9qlJ%2FU2RdeuZ8kBhj9Gv0MrM4OtfVt%2BFg8RQMwR6Yu2W%2BXRGEVAs24E5IFEOr%2FRyzsVsNy9jcuEYeWUOxJyQkCg8VCXsH3AO4VRw7Oykwmd6tDW2YuMjtFM9vBXBEsbAsCrgW6JOWUkBYnPf6t2petUKWjSumRGkFQcZGtsHQhCWzyPt0KqiyFVLFTKAsp6lQy4854UuHb3FYbL0TrcRBnYPKJfaIQ1%2FMfn%2BTwSM8ixlL58sHYZRwE309Af0zYarS6oo0gtHeit88E45WoYK%2FH5jsYfnxOj%2B9TIRBRPshW%2FJW9Ws9nsZwgOOkoY1kmztE96I3s6h61dzZ2UOVeSrnE3z75IrbPKhpL6GrNAOhvv7LCokF3vflISVSvku4AZNW8HrVyVinsPo84pE7RmQAjNoKl%2BpkiU7iri854I0TBdlU5GI118mxDDsgMLEBjqkAbqLNK4rWIFXPEDGY137%2BWxd5I1zr%2BO2%2FlkA%2FTaLXExWZzQvYojDlj93UAomTEt0mZ28ce6RBqw5t0%2BOVZnwiV65k1Q2WAiciOvsBKpPyZzefGgqXXrWti%2FvXgLNiaaxFLzfCQGZy8wc%2Fu9oIxWr8OtN1OL%2BKpqwOb3Z1tK2LJsImwGxZg1qoOtBR67g7JiIPvjzTk3jgNdLk58vUyJToryaq6Nz&X-Amz-Signature=426ded17690d3ece647e6db2f3bbdf57b0b7deaedf034c8e8b8c9897284e6851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=36765a63cd541a996d1094234cf16cfcb36c460af7938fcbfdfa22b1b2fdbb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=232173a3914f5393fa6ad0ff1b02fe4611e39b2f66baf8bcd9b7c023ffaa97eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=2819953f885109ec2e8394be2d3b8b0bf01b06c8b6f9429301d77279fe916f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=7d8f4cd0bc0ac01a39a19c56eb8d716dd2155d68e2123f15bbefaeea61d66ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=c6fcf10606daa820224a42e32b4bf95b5c0a07af818be570812493d7f3efe68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=9809cbb7314f889dce610af3460d5c0b895d74f251ae2aff05d39cddcf3356cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=abce29cda3c6829bdf9a4d1a11420ee2124cfb651816b60268e7698de57b441c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=a4c6545ed726b0e10f9f00efa6864d032358cc6eb0943de1a27b4337783bea24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535WWPBS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIB5VgMSe7niWbCLZtIHdTxKkoNVrr4VD4h2m8EY%2B0Ly%2BAiEAgWXUGpi59R%2BkZfn3ZzRFMETNhsCDoXvGHrHkfl1Rlscq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOr6lpJImmrWzT2jMircAxmSlJtpq4cWIt9Yfi2UOd4nykpTqiqXbwLaWmc644Zhdt3HRwPNm5PdLu0lbkxs6Iuk7xGk8IFChTY9PH4NLMlqX49EncKQPmf7pKVxcgpRHmLPHM6qGywtRNEgO9aBP1PIDk2JCMqPeco82l8Z8vEE%2FC5D3KKj25SfemXNJFUlz4fmRp9xan6OezIQcAyv3AP2Uwz1sJspFAUnPr2N%2BTGwSW%2BE4GfsihyAKtTNMmDHqQNORrtg%2BIHBmYWn4c951QYVJ9xCK37MW%2BAGXXt72jYBELqLYBC62%2FunD4DJfj8NN6BnS7G19WdMfJbMVzz85dKAC2zZF8k05xXsG3%2FoH1Tk4ZF%2Fk5aX4yicJLGdzvf9NJQKYradFN%2BamdU2JTEfJu0fyfVQacXdzJ9IT9hZ1HIYatE2CNnhNBbCSQR%2BLO8CsSSJ75%2BDPL0E9XEqp8USwvFXLN0h5v3By%2BbmMSoTi1PsGadXYg4bOGYjje7GjaDmIHhrvkSKllGKW4OsVz4a7BuHTtOVmD4IA0hY9UzNAFJayTrGraftygVQQalSvnhBaaps%2Bf%2FIrO8c7HZUXpwJH%2BWFoZ0A%2BjDWWqhXF6j4N7aUBIxWLEWAlkdriavRJgUdmsTc%2F8b3vQs5tWQXMP6BwsQGOqUBJGv6yXJCE1RT9pBNOL2hTmdsD8ofwfTLmtN8JiexXi3otDwQtRes756SJIDfGl2vV%2F9ZyA6N3ag49XRxLUs%2FVx2QTS4fL5Nsyej0UZbK9378copAcF8mZStbf%2Bzcuo%2BG9kSXd8cCqGjTrz2RVINyL83UJl6UTB3lcigG%2BF84ry9jqBECHVEN3KsnNT39wWd15BpAnAfB%2BBSCtiuzEuR5hSmM6C%2BA&X-Amz-Signature=9c2be54149bc01a804a39e237e2506775446b22135d8769e88da2fbfa9abce4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
