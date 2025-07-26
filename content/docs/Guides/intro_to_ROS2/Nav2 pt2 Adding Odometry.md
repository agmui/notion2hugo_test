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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=f22276a7e1c766c14c04766b3dbc99b2b26c4e8f1a7cada90f83ae17be40027a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=59fd9917ff9c717261eb26e58ebfc4f0cc469b94961d028658a3b4838eae97a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=bea9ab12f013f263159bd79f6b57e3158465ccbac506bbe5924391871bcbb5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=c0d9d3444df7996a364067ab7695eeaf3887b2991d9baf198c2e1d28eec57f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=bf66ed5f44f489cc731ee24882bdde9b7f8b5310ff044e97113987b3d6174c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=52183c7a0f59499542c64184b9c6c3e91c898a97a2b92637856a42e6db70a7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=a246abcbe2aeab3f29c293e50477d1369e29a14acd6595304cf3a81af9b722f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=5c7a46f468631aca0049dfac3f6a3b1340ea96780c603a0e4e43bce32a0d8ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=c9ba405c9408f9cddd2e6cae17bec81cedf80f3448f18cd7c37e8dd16bf6f311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLEXYPO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDTA%2FMl2CzS8mUwkcksAvXeo59MuhGaz3zNLS6QvOhD8AIgFGtn88MDHXV33WoZZv%2FAbt8N6zvk7Ma7HtOcO7aR8L8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOOxFxx2av0S2Q%2FvESrcA5L5m4YFueA%2FMSGdZ%2FqHl6R49DrQH3BHelfSPZOs2OPcMJj3LhCCOvo%2BuObJWNtVwPgnNYVAQB9OgKAHxHLNLM7zLPgumNfNFT5TX2NjOs3AoyCSzp1MZFvPqcLQ6hiXQs%2F9UJzKgbe2iAY3epvLfMjwIvJLHYFPliVS5%2FMVUdsSn%2FsIv5qlELo6pGCdNWGsOtS0KAndQUYS%2FAGfGVYZLUwxEHP1AfIXi5hAq3As8sCnwMIE4kb%2BRKdpRznff5Ety19lol9MPM%2F4UAN%2BMsIoivxJPiVBRNZI1WUcw%2BuC5SLJ2eSXams9F8%2BNSOSngd4YGpGQmE0y3RzzXQO%2FK9ZqdpjBj%2BRyDXaW8hPV3nKRudOC8CWiYeBG%2BNbfFHF6dc%2B%2FK8%2FXTh1p%2FC4%2Bn%2BqjsrcFmhALZQg63lSQS2ZfAkoKNVLiH8IEFvrIN2pCwQaHC5yT3O5sXNSshgpL3TjseDqcHuyDBWjGu4KvbOEUqWD0hrPNlBfF2Pd0XAuzEdvnOzT5gT3kl%2BNuMWMUpWTOpcqtVqeNfWeCMMpG08%2Bzls9Xn%2FMByt01J7iwJ6FyQFEn%2FpSxjn37XBk7fvIgHAq2RInBHGiESDSXL4UMS3NmbSSmWaHCczFg%2F0Y9iSsw9qPcMNe8kcQGOqUByNdH7QTNbBSGgWPXcQKwz14MyhxCXw5ekE71chDwER%2BnwsrjpsJ4C0FRTbpBtyeoTeBvLcooLD2JdDTzU34X9hR4MGK5UU9TewcsTvuksQJXK3ZddbM5LPS0LE7wMvuVJiVt5AkWf1q%2FAEhkiH8wkqHNjmLBXvpSBOdSwzQS6dX7bCLyltagVQIh9BV05YemfSdvAN0bTPf3JuUqC5MqEqarDHVP&X-Amz-Signature=616297ecd7c814b51bda9f4468da1780f4c54de674b6e21cdcd8b49a7504438d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPDGR4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCWNFcBYL%2F%2BnDypgX7smlaAM5Ziar9%2Bg10D03VmAu68JQIhALY%2BLL%2BzPckUWfFQA38IT7QPvIvKIiBSMKszX26uuFB6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyUegNyC0jOxHn%2FDF8q3ANSDlt9IrqKaGl9PLUKktgJPCOun9Eeu4X8sKeIT4X2nMOenMr%2FCFQY3vzFgssTvGzhzlSFbjJ0sAygSgfPNbrbYLHjeAvz6wxf7N6nmQ9Un3sqLHngkORA6wwnUEc1qyQh8Oes6bVhKFjgErVeWs6Vatwp4%2B3LupqYxR3vv%2BaJvnTPawAIm2oTsTPP2b58VverNBn2cBlNshMyLCzxxTo0xqW58JbuuBXxCTl1leCKVb60BQJrKSi%2BlObhy2dKQi2B1VW9J4%2FmqDSPOzsX4TrB4MVB6fKhZ8chXxlUh0wZ4NXTUaA5Ev8g7GhCJcoyMR53Bo%2BujM9eBlfDOeIDxqiJ6L6Uv2owLdblbjYSYTZSOj1yJSjZVye0Rw1%2F17W5A6fPLylKd1Xl0A9RaFcKV0Pfvc90WvU1eETrtCy8scEiPGLxTfwFrTveGwLMig%2FwBjZoNpmw4SFyKrlBypQD00AWa%2BqsIEfReF%2B%2BoRvBiZ5x%2FcSuDX%2F4Q473M7KC6rwFPRDrwEm%2F78A2NUlH6p1OJIo6HI2g0il2u%2FvVIBJI26icNBEqiRDnbxUjpa54D6%2Flnk7Wbh5%2BtKckiABsz%2F5qLrC2TO9rMJNCVsILBEWMPgKy48czF43hoQuUNu49tzDrvJHEBjqkARS0WuGxjL3lzAG3KaasSbgF59PrKlbrn6rYAhD%2FtzigrdvDkjlQ%2BohYNmVu%2BZNbXx2nw1q1RQEy1yY%2BjxThodYZSVu%2Bc%2BKdFXGfFTjGxyjiku9KCfHm2pNnu%2F%2B3wO7ZlXKa9Ef5y0zkPrHpqeHAhiBRduH0MLwOX%2FgLiLCZkGMNIqmS4qPvluCSAew5kmBrmDC0DCgRTQph2codfj3HrNpa1bRa&X-Amz-Signature=8a9df38d564dee680ccf24e0c3b98410778328a19684a1a5d699414ba12541f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=4b3acd2a6ff6ab72f459b3a6106fe5e16d2d1f38be8e2ed23e17c37d7789360e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=55570284d50053cc4b20769d9e2ce62beffee97b86fae7e1e1d7a6d37dc9d675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=42261629dd10d79ac9addbc24f06fcb8a5c7534026020ac9cc0c41195f4ec7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=66ceb44244930762e9266119bdd26d04f0a9e7fd71ba68722b5876c5e17ca0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=1352de6789e73b7d28764ea7fd2894ed649e739b03cc9f1eea9cbb450c8494b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=0dc87151ef484d0205e8b19114eb62a9c90265d8a4409fe798259d48c0225735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY23MYCC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE46SOBF7VOCuPJUKFqPY5nGUiKMB9Wg53K0MISoMnqOAiEAkZQD8nn63Q80l%2Fst0D8dosla5tD4KrZpfRCC25sEB8Yq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDL%2F7yxbvj50tjVqE6ircA7pPA5weqxbtdJIyVHQIWnhN%2BHQHW9R71UKppi9UcQ8FuJ7xnqtkx0o8Jxh6elbXeYIdTk2bOn80h72OxyJdUraB5F%2FEZmKQRk35flgdnC8EjbfaSwqlEUOhj9WtuMpfpRLydyrlWNZ85yS7Iem2O0lKuk%2FxR%2Frvjcd6mfhc32O9dIpSlB7ZYW7YtgHGXFpV1m5CDabEoNyvoTEKaFp%2BCisfdIVv4qt6f6BCql%2FHQcYenFJrlr86t4agMAQVRip9rUdU%2FK%2FC%2FyZSCMpvnLCqPakkRlXGzTnOxHgGjEq%2FDMppnH7qA3k8%2BmE3P9oZujNNnX1e73KurOCQKamxckn3VuwiswVrEeGzSB9ZqOrkeW5ImRoWUj1bPOYDV%2FXlM%2BVpFvQHDZHofstb%2BQwakBG%2BjfKnnw1jb%2BCbkcqXmmG3Ub%2Byrxb6EL64TXP3AEIbbtvnsUT5xOC91SHVIsXUDYXPgbQTZAEmszriIvDBorFGkFnhPfVZqFHvRKTlFcd18miHFhnXZl5uKLRwfP3gK4XF6orPiVMsePDbVwK3X71LwMQO%2FA%2FFq09Peu76n5ncMhfh2ceke6fvfJu3dS2714uV4kTqZnC9p7eyDSbQBP0DSMhsUTpzIll8Xw4sNHJNMIi9kcQGOqUB0pAbZLbLdebekoY7gRbHdAQqdMc%2BoCyUQ9eaz2pu%2BOQGQxe0WuCtKR6EbAejfb2NYGNNlR%2FWBxEP806A6%2BkoQvZ%2FcHReNJgFLqjQeDZxdRv6CHoFcGcYHXwFGN1fw%2BTRFGmNH1BSZ9YORfYmdREUEiCUi5RTUdjXe7xo%2BXY4fFOuYjaKl9NDTQ9S9miS2LIZXCxeP6J9uwQYS9OH8urqrRn7G7mL&X-Amz-Signature=cfb0f038c932f39b160812718795a1fe5c276fdf0684067a32ece27335c366eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
