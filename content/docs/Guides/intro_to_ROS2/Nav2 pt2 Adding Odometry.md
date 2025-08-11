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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=223e7654b9c7e82a5b59332cd08af41b0da6bb8757c29ff303f5dbf2a490ed32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=fe942fd9d67c4773198bfc996b79dca9df1732ca8263082f32190e55450dca7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=3eb94715d13ecd28d315b31a2ed67308fcd7542364e3fc592f4d13b30c83f0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=e4bfc07107f06a72572630dc56a73cac2b878ad08313629dc242610189f527dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=59a6faa4c41329b71cd28b593713fff55f5baee95a098d4276651ec118eb9e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=132fdd31b89cbe7ddb74a7f1ba6baecadf5ab2968c21c0cc594ac263e57e8d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=8016b61af9c9999a86d282697676115871dd1c70fa741ad4d15ff0f50abfc4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=7e1d570a9f9dab2ad22cef181919b77fefe55d9ca4ee1ee0b7388cb6f3f2820f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=14ac5182ffa724e26bcaad55b4099953e3b4a46e61ec68afb25bb2c5addb0980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFDLL5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDwrRin7MAKTLXxuhxZ1R%2FMuJlcmpSiXh4tcWZKJaMfAiB%2FqJ3%2F%2Fc48NUK4Z%2B423AvYYKzDjoSMEF5R%2FQ30oDCVDCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5qfLUR0MQmlDLARKtwDYTOTTP%2B%2Ba%2FLmCLf3JUQfQFqz5yyyPjyPh0VNd9Lyrw5Oln2GAmoGF80kmawTr9pJNugMxFegLvOLf9Vb4ZWuaEEYucrQuCf5Sfy1fJpSLbC7K5KrP58RoA9r1MkIUnPpETd69%2F8eYGb0M85VMWU93Ja4bd43Avv4QiD2eo5Lm3qzqWXO%2F6nS2QnjjmR%2B9zBI4WP%2Ftqf7MgvGahSIx96iwLiQbfFqsAGIDeV7IASNDUSTc6MYiveiQ4EkrkxmSdbP12Ek20CjyxvA4%2B4L2R50%2FrIpFNoSK6v%2FSuGs5SBxxzsuCGmRhg2aCy%2FC1%2FVFVJlcqGx666jJ92tTt%2FPOGIVSotWcD3z8%2FyaD6WtfqoyJngLZvVNH6D9v%2Bq6KaCSP4F4%2By9LQbidhkvPEHwBX%2BX%2FCsBs1puXeq1oQXSTgloz%2FFgPa2YXVyeTZdFw7BR4dcHZhOfMvqjmswn662duvZqnLxUMRCrRedXptXfiiBm%2F7ECHlA4OorgVonrtJrf%2B1Pvo0qsPhbs6xAzFtizo5GT21d659Igtkmi%2FqZNp2WR6qrPFKRpGqt709hYHBFpukS5fHx7XDNOwWu2SojD0eyD%2BNOaBn5oSEw4vQhPwdBjL6XLzomBx3BZydRC8LIq8wop7lxAY6pgEiLHK4ov1smZDxTF1%2BsUc%2B3GedGDyt5%2BWiSW47gKr0uKwPR7vMj41MhvFR%2F3rE0i%2F3hSJREI2eC9gJC%2F0P22QUksTPQoaNK1YAMfEEpbZztL6JDqoXsWILlTng4f1hx7B%2BhV0Ixl47sda5vYoy6qHUZV3A9IVcneiIznNzP7BOORGS9Sb1YvUpsBzJL2ywi8oJpy9Ut04lHlmXvIaxtMWGc%2Fu5NsEf&X-Amz-Signature=b5e8b9aa3727b31d102ac1a29ec6f464085671d6c411e1ee5a7022d72bb23372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTV6GY5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrEsW4JST5eU2WSGZvrtDWbSfvHbieysVO2UKuMfk5tAiEAgOi6jGX8wSGWGLD1CChqSmVEcQRTq%2B5H3z9KSEOSGdQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2F0m7y%2Bu%2BkryP6qJSrcA9FdEgQdQwGk0tr9CPurqil2CZEbSO%2BFW2qghvINT9pB4WK0GNy3T5%2B7PGX2AfUu0WihSYhrFZ5ZFi1HJf%2FLyp6UeQlF9aFkBdiUdUdZZhPHPkL%2BEBSOcCx3ebRdayp6wI3chwXzMtN56cbDuPSZ17bOM895gDo7FER%2F0FLNn%2BD5%2FQfzHv%2Bvz6aE9mrHraE6eI4ZPYedrdNBw2S6Ai%2B8PvvsehM8IOcBYvESflF%2Fox4Mb8%2FdVJVoC3a8kxlcZSGmCECwM3NBq7ZNAi6l89gshTcRVIZ0aJ15q168Xhxg5sLdVnqFxATlChsmetmwwFdcg2vCE1v%2BqHEgQxCRHKoaZjlJxdGPBpEJ%2FsQCJ6n9%2F5alpO5cXSOE70d90iWX9nvClfj5MZrgSKUqjmknViLZzJ9tvYlNCYBOlloUkQBKdWG6SKzv4Gnkr%2B0V6NRVpo0u3AAxjjBJsDoxEJkGrQB64j%2FN2jtRoypocDSlZXzXBIVO%2FrRVXNzuF5fN%2FDuixJq9Y7qKpjx0WxpYlgaAlJ0q6W1ErTFZTQ%2F9RitAd9eS7rTROLCOz1aTPfrqOZgKOmH2YcTsMH4WEwR7DXnYKC%2BZs8AQVi1JrPJX%2FpLZflEq2I%2BpOSHfS2Xwr6sqHhk4MJ2e5cQGOqUBhdGNiUJvGetdBcOR%2FYFEP7D9jyBdKWm7gHgVp%2BK75kcC%2FuQ%2BqkCr%2BeHdaE3wJchIQfOwPni6%2FX4jT3C57mkffRXfAh8cbMh5%2BKIm5D9gRhw94oRwpmhlr0%2BD32HLA%2FLAtghCLjB59Qn%2FAewY7QPRPVbT7aepzgLhP0u7QsOqsrNg8%2Bu5YFWCXuDxjnoimZfgFobv8FOF8D4IxLm2t2A2c7NdS3l5&X-Amz-Signature=413501b625ec29a68295fe742a4288c689adba9def0bcc702fccc17fcc4f881c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=9f5aa6a873c0d53011a0d002b52a25395d43179176ccb3168b03d44f3ec82a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=988a1ddf6b493cb383bc769c5ed9b51d5e2e748b4cfdc650095f7ffebef8bf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=07ef41503a10c8b6f3f3dec6a413d8b7a0da590b889ef183a68d057baefc11cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=904eba16c3dcf410d203e6ed41f1d9045b35d63a08caaa058eb791b0b0ae8d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=51bc2adf6d9f305cc6f4fb826774ffb89da37ebadf80ecb479e500b2cbd19a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=d1d8decfc153b32cadce8b86fb9389e65c55be65cfc91f5e758a12ae7a0b4125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=a2207921b3ac055f662b25e104f797546f4466b59226da42d14539b9a145e60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=744c271fd0c7179eda45447ecd2e8edb15e06679d4fce93c6890042122f67b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PO4EPGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSWTHLWEIKD9%2F8pWjmtxHxhNOHsQ%2BTulHRGI8Q%2FhYXoAiEAjhHEGu4Zj9R1AG9MAroekuf4MUI%2FPUbV9z%2FySDkqsU4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BwA3TyWp80tVQZ2CrcA9fOiIysS1x3sz57i4%2FM50V7JemlCpL8qxV6pJpylhqUrbx7irUJVNdM8XUNJfDz9LlkWSHB0020xxIVBjgcDhm%2F%2Fnq0Og8VYAqy8sQi31qh4YGrzu%2BbU2IumZNiFR5ADohKSoozK8Jyk9QY2Pxfe1u%2FyOoDCLsnaj9kyDFoBtZnPTHBNESivJtn8SaCmNMaGnp6F%2Bdp3Zm8jMsNdIgVcJL9yIM5WahW2tiJLHKvYRMEyUtZLSmdJ8AYCXNVfym00FFog0THdHKOVBkFydQc%2F4F9k68Rz3rzVVpkXQq%2B4vXYzNks0RkPWXV5uYmUb%2BOFjMjIJTv4XBqUkzjL8YTzSNMyY3zU1cQg52VAk%2FGoqujlPwK9yEez4o5cWXbp0KLD8kt6rCLgrGMxtvQ47Z4R8sqcAcS5bxDB6927IZVjscNiLtD1cePaBKiLHNYv4IudhYOVisdxGU33QdXLBB4s8DSBzRmaqzr1t6KRCSqIZPHUAp0TG2Mi0kg1QrVSWSJGIlvEo4jgpcYClvw9Pt4VLLUiU4paNUbaZErjkwULM18rIOSYVR76xeRNa3%2BilaASR0D%2BaYSBrlP0VJeA25fc%2BIoxu6%2FGB7ZyklURrt9f24HQhH4ajeHUHWdIZFAFMOWc5cQGOqUBXKME66JkmKJAFgWK6he8m62W7r3SrJzuv%2F6XMdd7I7vFAg5M0p6q2Fk50yC6DHkXwbR1d%2F9LsEFePAzuLtvWNmNZfmdB8BGjddTa8qnDoCskSTpxOYCFSt4ger26%2F4E263J7fiUoLdnkaXC5KHWuIyz4M3yAr96mg9EoKHVzbPy2awIdUZsQzEHM6hoxCqjV4flt9B8intTEdLyL5lIXoe%2BOPegl&X-Amz-Signature=b6b6312198a9086697e84d6639a4a1a8645f912951ddd06f8897633fc80cabf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
