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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=32c5f5e7b129c4873d07112fe82ee9211d7259cb63c5b8191a761c3eb47fa96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=2c52fbf5c140c32bdab83cdd1ad0541e60c96cb5408bfb3f164e85ccb04431fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=1658f7a045ca92b34f9942dde4800e96f63ebad2ad01e9a4d2e405a894eb8d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=a11b7ea8e6533132e926881bbe8e8fefcc0b2a85e5992cd6d2eed38cf54f34a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=85ed65d6b073aa889ebd65c34217c5130e967c5676eb48f10a3054cfd7de598c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=8286e0f74e8bced87c6a2af7be16355330376ff684936e12f3364b6512de0b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=1e350a715f737a42360769f87bed41967d7bae0711a6de5b851f00d7474c6bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=2a68b6360165adb5f83ebd7029d392e79223eee442f6ee430bc2c3985bba8c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=f6840b2803ab9d18cbcf86da1dacef692aeb60da3e6202d192c9dc48146568a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIYQLD3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIANB799N%2Fm0e5mWhwkR57aNvlaNyl1sbiLTGWA9rst%2F%2FAiEAhs%2Bn2a57jIQcugrWv1JsEQoCTY8gZJD9pNpS8WQk6Xcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDArpE7A8x6BaazK7GCrcA8CUN%2BFbg%2FZFod8UxKG1XfvM4LFhhmIEjYMtoDTNz8vTzWdurXO693WoT%2F4rNUbvwlh6snav%2BMqcnGtnqz9mKIvtzWu8VGvu9pXFfQFCpu0uFc1m0P%2FyjyhYTCO4QbI%2BzM%2FgE3LQGkIt1wzA51fv%2FTYQwJUTftr75ke%2FBU7YOZhfAO07XCGp98FNrhnIbsrUhFQeR5vouDdrZLuRuaiaYP7guNurhmePA8lqKBACfAK%2FmXC35EITeduzCf6xzJXfL0gQRw7KQL9c%2FmC%2FmIii4H3gVpXopaJK05QOkOyT%2B%2FlchikXxz7jAqdXmNqQ4%2BX8bpBcUqx53M0sX0W2K7lLQ%2BhhcIzpu7n6xkdhm5JNcOwrgkA98T4%2BbxwqZ8LMUa4SSjCZdG8q41jWksakDfiXwQaMmaZSzljJ1cm6%2FcaWFwiY0RHuTrIh9V6ZgotgWVnp%2Bq8qGD%2FzrobfosHy42JTk9hPIQeNaA5ZIQNTJ%2BSGkM6qtYz5C1YOxKTZGqpFI9ZBZPbt6mufBFzvD61wKr3ogXBglmdKF7%2FT%2FDf0GzN91ESUJrl4vL%2FkgJ3014N2IcSex0IwNMhw%2BRiJOb3ZPXZQtdG%2B3e7fxq7a8%2FJCiU1zd%2BLoOGcoFMTVWDE1HIGCMJHCk8QGOqUBWBIkxA%2BMl7EIMAiwuKSPX9%2FlEGZfNIVBoZPykubSxrcdjdTf%2Bq04L1%2BKhH3K3VITdUG80ifD4or1oGWL2GUYeT1v1p26BkPozyx1gcKjhNFPKBGrt136Y1KVxXcitz6ZmxmMzJ%2FxEC18muGJIfcmGHvTG7TS0qGZqcCCZRKu1yp1BStrAoRabfEIoYrcLmLqwpAiiiocdxNbN6CZodG75esdiqnW&X-Amz-Signature=f1c3c58afb9a4c47ba88862d352428c7fd0d7563600a4fdd633635ffe305e8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LKZM7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDnehgAtCu4OwHsg9Cn0M8vpwStbx5%2B7u9HWVJ5diNVYQIhALkuVFknoEaC2BIM%2BrHhwLhOKBJUp9UlCRU7YBMiIfhhKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBstZYOn6l%2B3SNHYYq3APCyJUgVyug772B95YGA9Ij7x8vVuQoAzYZtBFTQ%2Bb8%2Fzaz1YEqQZml5IpWFLXvJdReEEYdigfm3uhHF7l7saJ%2FWktsa04rUcgovbJb17Fk%2FlrE%2BvR3YjGySfmLRDJmT4yOquBM3xAFh3QhQSDPyNP3ctLUT2M%2BQNkXYzXzh6wE%2FINFzEBE6AywdMUDCUylFDGFkQTLtDOvZgvyAlzYgxtQKActBwYGakcxubKnOqcy7hg3R%2B9L2c9hwCD3LUGjEQUMcgOVdtNmU5wYeWOyXztWPH2IJn8VI8BrQRBB%2BcDyVBv5TyOIRe65xQuJDPUDS3%2Fg2mNqHFy%2FNdTaqcsWrAnPvk3Z9YMWJoehVmS%2Bp%2FChFCqX0n6GuiaA8AhikwVs3WugD5%2FDcLjGtsObRcTWw7cAik8ATdQQd3IGAmIKz5TkwmhVpM5pNPMtA1cbb2z2FXwGxUnkFYSJoZ2CLN%2FbZGEoPOhW0fTP9yBjtY0ygnUPFBerY7nG9trqgbfsys63fvHQ7lM%2BQ%2BDuTLpo6panjJGr9%2FeyGYYHXpGdDnwywQrH9HNP8sZwMl5%2Bimtbg6bEjHJ0E81zD0UfD9i3UFvuymnJR64VvHffzxKrU38We9KNSN0g8%2BmoICNaHmquWTCiwZPEBjqkAaDKObOqlbqqC1z09D60VnsAPMJpo4spz8kBDAYEER128sejfdvC7QD5yc9qusp7zoIl7MsKxWNwgMG0De3q8FgNY4MRV5AdefR0P3iBdUxFFYgCZC2VjuplBVnpTuQu1dBBiiqUcMvIm%2Bimu6koOnSTLPvx1YuAKX0fjvbTsAyRRjMgZSnVOXY6iLEYtx0Xq9y2AHH1YbpCHphD%2Fb%2Fu14EWkgrF&X-Amz-Signature=944b732dbd44a6266d6bc7f6d5f6557e8c18b3a9221cf79cd11f40d1e6b6b7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=d4e8c1a4fc577c4bdf4013031dad9a14bd197d9699fbe0983b21867a09704ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=878a60a883e78322459f49a687b8bbe242fc6880fc3cec6e59511fe6ba155f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=e3df01a7fcf57c9412455c2e66d7faff856b1be050434b54ce05d28020292d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=b94c21b7ba66b968a02b063031714a0a7e7d2767e219c209c93e67b92f781083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=585babdea4a399ca74a76979a9da6576aaf3ae4a72359633904665126ef7aca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=4fad1ad45b288bf015a4795f13783453752700e4aa33f1e99d60d769b039f6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNQO35A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEzAIrn0uyUmXp3Mr0UYkZKDzaKsOsgRy1a4DtT1VCNxAiA3rBCOJPYqIfSwQAt1yBmudPE6vyTksGxkbudNyTorQir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMdA8j0ynJP7LKgPy0KtwDDbdyKdT%2FiRHMJZcEvulcOuGSPoayDGVYkwAY60IdSIi%2BkgAiF6Hon9KMPBskfdLU4NlBuy2k2qzE7KPApG2OX4J2Fre0z0BVjnRwOAZZeI%2BaEM9J%2FmnhEfEM5uKDELLNx7mlZrCtl5PswYEDo2%2Blle5bPro5YsLFRj0521D%2BiEAJfc3atnicsTaeCuRk0MyuLEFy3mGQSSsctXikq5Y0QFCso8JW8NSIcbKEpfTCGZ%2FbkRjVuNgtIxpA6i6mOxoR%2BK3IUiqWhDqu0dBT6iWTKph4Tr2DgI3qxJWaT49h0RRqU%2FRuptXcZrF4u5qvuVeRDZJ0kE5JfXLUVxhnNUpQMAqJ5R2lOI%2FzdIsR1Dy2%2FON3e7X22X6uZxskiNn68mQhNip8a%2Bwjg9xQETwaeiIskDuSppZfP6tRtI7HYxPWKQxSthoVF2l5zIUGMdmG%2F7V0FeNzk8VHblY2RClhF6j6m0hgAxamSSX72l6Flg7J00ofW3mPImqfrUKULQ0q6vvNmZMik8Q0WxrPDpuxz6kyn6mGedTokWfawPBMVadieYB36gL1ImyRlBFU5FuhgAj85hsU7DCYNHcmH39ec0CaBOURQbDEfqr5y%2F9Wuks1nwhCSHUB%2FcVhEuCioFAwoMGTxAY6pgH5Klmwu%2FTBR0wPuWuTes2PhgSrQubF2SfZ5Unwn%2Fch5TbTDuBH6Fi%2BkImmJeSElcGS6U73I%2BQnfWqGmlkR86%2Br0e0v3ltApX5slO%2BViVKX26Urt6u7HJjEVzU7fulezbiUY5CgNZxQCy%2FQKQzriYYRGnHmE49BYWJRTJLwplkaEtZzviJhb4C9CmlcaUWnnBTBnTZ3S9ons1mZ0l%2B%2FUbYFEzMKyKb7&X-Amz-Signature=6b0d78d17b42f862b15fae53d0e24df04f90b7dfad96e87fbc5cb4062f81cffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
