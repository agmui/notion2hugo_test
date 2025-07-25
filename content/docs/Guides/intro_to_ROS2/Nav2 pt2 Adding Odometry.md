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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=6ce6a952ecfbd3d4a5ef7b989748548683c2493ca2aff5381d65bd52b754abc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=6de61f80466c8992ab61308697c49bb0169114d56e4e3a755ba9f3ae057a98c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=4a58a1b5f2e1d677db6381de4b7e1e92ecfe4ea5025df9bcd18a51d86160d40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=6f55070f1f45519cba31809470fa64c927e0b489fff5f19c24a33ff941961440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=c0a0bd630b9c9b57ddb93e4aa735d6b562f83d4976e710bd1b3ce72fb147d317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=4a3abc4371f1861bf4245e4bae3a644dc28a2620cc7d0a00a3a64279493413e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=59942b97055261516bf5eb6fa87635719f122e33cbcc44d19ae77387277e39f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=5115138a169539d892ca700d17dc7e64f764acfc66595fd74532946f71b172f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=679da5fbda3568f2b23e4dc85ddc5f89f17cc26dc2bfaae5bdb19b79f7206137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZUQXANT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEi1xZwdPSTcG55Xqt%2FiwJigo5WqFA0e4l97oQ8uiAuQAiAfEppg0PCJIPOFDUOzFPP%2B2gPiXGuv7vMaTqvhaRdOvyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMbl1pmknuFNO8TJx4KtwDsih8DZUTCxKOtEgOEEOfE4uGsKmX9sba2sEfsThJi69BoGiY%2F4THoCqt4H%2B63cgmxNRyg2zpm8GfH%2B7T9Rv2NeIkUbyIr1HnEhmJDwXJubqTJlIQoMmzAbWGzKL1uUs%2BFSIbFSpFZxDwVDhVBq3pGLXTZwlF8EIUGu5JRJsC13YG4UKv%2FYm1BBNVfxAcyI%2FRF4z5QJRs%2FjGvzSbrodE%2FgpbautYfgBS2U1XMpU1w3rpnZgCxYef%2BSAP3GtTfryD4nOsZObLnpkwST%2BzXP0tT2TKgVhtP9TBSzQ9jjc3sh%2BJEyshk95%2Fx65rwtaLQ6ShU%2BUmgqU9Rf8hNPmYNnu7BOjNVCCRWl7vBFOcFZ6Yp1IOLW393v07xrJRneTfd0FOd7gYv93l7ZHyemaD8l4QD89F1IntqhpYOoop9YTsnZUDV18WebKnY1OD41wLGfakNyTy0UHZ%2BxZa7HDkhbR8mfy40EMYoH3ajWogTZvODOqe%2BPlH01giXRaQ92xqGkg%2FEEcrc%2FRPjVV4MGC7vqkzCdqYf2%2F1LyJnUMgGspyl%2B2pWubllZ0CXsp8zf1HiS6yx8OBLtvIWTKL%2Fkp69WEzNFCiiHPKzqsVcdXJ2QIGYFtBbMkYsFy7ctnl%2F6D1Iwt4aPxAY6pgEeOoMlOZrR2IKvgxVSKdhDtG1uZ%2FlhEkwUuoy5acwJeLEmjmJKuHWPgbbN7ILImIEeEtAPEoa%2B7M92fdKsAgzVlfsiLpNK8Pw1odGCnM94cKcoBk5mPFBocS5O4fm74dmIrYTDjOhRd78K%2FoGM94pnMVWpeuNjjC1U0EC6mXKyIZ%2B4eu7ZhluU%2BX7%2BRa1smmQjdeaHfgFE8eRRMaiPVs05Axc%2Bvle8&X-Amz-Signature=d3c644b82a4f351ca006ef27458efe58c61e9b5797ab081da5849b8870fd7a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVA777C%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDgo1JoR3vzimyneZ72%2FkwS%2BNHB0KMug9fg%2F%2FKMmL0SXwIhAOk21jjgfWoHZ97ZIXYlEMNWWiW8q9i3oFZP3nqTEGykKv8DCEsQABoMNjM3NDIzMTgzODA1IgyL0iIFhSXwKNXwtD8q3ANie%2F6vR68AGFmggjSNy%2FL9yTcfZjkqWtuq%2BBjDh5%2F%2B%2B00Yao1WLmWsWYSAGUte9%2FJFRIohV%2BMLpnQrGAlHMJP4CYFPc3LUca389GhAXWOa74EhBOOIQi31D73jA0rU%2BWB6rzIfVX6gzco9n%2BlLUBce3QJGYjUTuMoE85ZAesrteKsY%2F1%2BcBaktYn%2B13cnq91cnlwC%2BOfoH4N6vwHVYXQS1I2OpmsuE8f6r%2BJSX%2BtCsXyGmNVOLiKmwoM1%2FI8ZYV%2BFLq1lyV%2FfnUy19eXo37v96WzgirZTB%2FNmgx5%2BvIOlOn%2BkxE1%2Bn6erb5PtMFFnJTVJPZuml5q94QYW52P2jVLT9oSrnHbFtd%2FQGhw53Whh5%2BgJz1%2FL1h7HLYX7DS9c1XIYzZeUh%2FMTU35X8BFSFiwTMQBpTdRJzDtf6olMHrajtumvweImwnK7iGh1s%2B3VoJGH8%2FgDBtxesUK7RwzzDZKuUboZHRNY%2FssxOIksvADpBHJ%2BtowF%2BTM6GmnNM%2F77c9Yo%2BUi%2BvX7EFU%2FJQn5AzNDLg55nL666Vb1raZ%2Fi%2B9zgpAifktCj8z6jhiwOc3KD8qqL8t%2FjtqENYu%2Fgdd5stguHbkyFE%2F9FckvrPqcfMCyT7PnYAC2VMInLTN%2BvQpzCrho%2FEBjqkAYW8iyZZ6dBkQXaTMu8A8jWqhghtukkFaPiEHk%2BRLd2gL4kPymlqxT6R2ZAR2j2ZmdMh7QD7zbs3dEZvZ9uAXreTsNkoq3HhO4m159lYY38jW2lTW9bXYDoyolzYJI7pxUvNfSL9xTBrVfOYFqdxCNZeJUIYc4WiC0UiBm0S9%2F7YxjSSjRKoZRYAtbd90OQKmqVY5pWeIfvSDEhtPrbTzq9I1i6Z&X-Amz-Signature=55b95822dc5a59a9b3265963e4ca8c7bab78fb863afc122e517ac129dd923138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=709569b7338c05dff6a39c3574068602d9e60aefa5df2725ad1e39687bb63113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=7133aa0c4507e5e6de58fb297d75757014e24c4787aa2a1a05d93856b0844ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=b024bec48a23a6978d55954dfae6ef7add8f7c2d871f61c13de083de7b5b4b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=ee97204d8379bdf3a4d301c4fbbe84e4b786b6240a35f67406f08bcd391170d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=2a722a929d73ac5dcee85fc32f6320b5857d1ddd431359bf7e05eac9ffe9e335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=1172f994acc563834339fe211f0ac1e5b6063cff48f7726b417d50a9e5850771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5F7ABXW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDcFzYAzvZdoDhTmEnGfAoDQv4YpkJEnrh9b%2FxDrgHo8AIgBLAgbvTk%2BOz98f1ZqZR%2FFoDYNiV82l1NYTzy0k7zVkcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIxGribd6%2FJmh12pgSrcA44jRhpqFv3fD3wvbTYPHS4pM5B3W39nCs8uz0pHngcZdzWaKGuyKxD7cvjBX%2B%2BsdCyZkq6dke1jCr10fhpS%2BwTny1VNI5%2Fd4rhvr%2BSsziYUfkXSSrZO1JrwkJtKGkJLOQI58b3b99JBnYjU5AuoVAQ6F94ji6YL%2B0V3zbNVsmBL6DQgy2%2FLrwK2TnzDWR4v%2Fsi%2Ft%2Bl8OFnylbn7PDw9GMXkcrEu%2B0gJZvkM7QlJs%2B04I97iRX7dRSGAleSLrjfBMwaUGpD6HRcQAhvWs8UsYN5DqUFvAvJoB21QiEKVl1OHWib%2BFmOT64Ov89TFaeqfGl%2FWOh7KUPVkrbiAsiEqZc%2Bk%2B7n66H4Tp1gI6YgKJoclh7g4haqCZsSsSb%2BeV6w3pzIUnPSItBvPcj1x2eE5HX8gKqg0KsAtaDgG2dtXCAmOtbGYIpfJz4MSov1q2SWLeUiWXas9y2%2FmYPGDHWh%2FUS%2FA%2B%2FnObcs0tUlxVwyAcNeMmISzDLAunqn%2FPQnwndNPdMlR%2BLQcD8zd%2B0W5SIMZH9nnL5SCPwGsDSP6fnec7wHk3jzGIKjAO%2B2VRchzM%2BX%2BUlvhyCyrUIiEhba0VFhmbBteATG%2BPXp46ppAWQhZzxlbkReHQljNsbN0ai14MKuGj8QGOqUBCQMllaCN96Wvhz7nBNBBUj1siMPjDjnsHjpS3G3Qm2gTjBXKujn5zQFyBQkzxnCqRx9DxsyTmgPH5Im1JzcXhupEqa3t28buB34afqM31hTq9PTUYbG1c75ZJOq193yO%2Fm4wnLi8m1n0GQO9cPA15VHGdevOX9tr8kdYIS64y59J%2F3%2BRBEeLSVuRoFNEel4J6ZNSUXZUkabzgP67%2BA2hTG2r8Ta1&X-Amz-Signature=b5f65817549c076eece146e43f30077e7539e1af4fc1b921e2aa4bb3835107bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
