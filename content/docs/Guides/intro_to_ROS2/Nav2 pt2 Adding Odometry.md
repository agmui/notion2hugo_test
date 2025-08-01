---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=ba6fb45074ac3e78fc582ab584bcc75b1b021478c98f9b38678edd22dde16158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=6c2e5566362001107388bce852e85d9b163e16caf02a4b0edd4d507a1f4c6836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=9ffb7248d413e516656dbf12f2f35cdf6d71c10e26c1160007174c8c2547eae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=e53495e765e0a2d43b20308186323b1a3ce0601229a942c3d9d1e6e88524fb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=a6691466c9938aa2d15f9ef471d4ac577c7d1788d116e153e7ea656565afc5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=969553796d25628302c6df990dd342c856a2fe950ad9cbc8f58e3ca372b65f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=1e21428295516802c1b681f9047357ab809e231eef130c0abc2afa42ae8c3850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=a1fe3509a782d3a4835295ace3d874111e9bf080b4332a0a41347c1c20e0afde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=a7371a0113ecc971dcd327b4811f5be7cf7798397acb543eb636a98080396ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTRKMC3L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIcI029Omc%2F%2F2RDVJ8tp6VOS1DX%2FfGtELCGSCJqBo15wIgYjKKkxJz2I0%2B%2BvRkn7c7IaVkrFhsEvh4BbshSZjvSM0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSIm5Rw6f%2FiVB5HJCrcA7XH1aKBI0ztESYtqmibtc8maDd8JZFXFsyFmfK63w05UtuImm1u99R6mT3XUgZF%2FfybtDtKDvehs2zdsTQ5xTfdkmYuBc3ap5je%2FQrYgzbmhH29UvBqY5mzDSQ8PW%2BQ90UqlhBoPV7SUTgSV7YTHtB4OB4zuU%2F6v068EZ9UoKppWiBsZAqrBkDYlR5ZoGnHazZHG7jYZST%2F3lS8xmuaG0lJ47nPwmM4hEECnInqXSRnzs91SymVC97OAmTD4W95mq5rkO3X%2BPY%2BIvgfctikuOD59cD4AC2Z%2F%2FavS%2F43o8vQL5BHWE4r7Wvwh3AYlSEroWGXEbhEX%2Fshyvbe%2BqhAcnUPHS4IQ%2FqrUUbvlm5QjaqvEYixv5JU%2FDK3a59QQVBC8vp4wQW90N1G%2BJM7XWomf2tmY9l9Z3vTDyZNjybSoZXXaUyh5oNO1j6vrtWqV93UHCtWOJ1epYBPf%2Fq4w4X4YM3WKZKUWM0dcW00Ikyl9TV8%2BK%2BK%2FWnZJiwSeAb%2F%2BF8Nol4BevDCmmm0XBnWTgMZqaPCnnoQVLFiajMiy4YqI5kX3zm5RRUaMERC2UCLYtNwbW8pUvLBSWom2%2FmJoapdOKZvaWe%2Bd6RJlfxMVt21Y%2FUOHT%2F9eQRGSYu8jIW%2BMPTsscQGOqUB%2BeC0H0ZdhMEysrxsN2Fb416%2BFW32BODtPT%2B7N9%2BXI5v9w2w1kXVGDbX6L85s%2BeSJIJkRYUhVL40m%2F%2BoHUydDbc%2Bti%2BZh%2Bjac%2FEIspnQjW%2BiecsOWoJ9g%2FKsTG0NW%2FmVu7GqNziw%2Fq%2BmcGH4XR1YE3HfYxMK%2BodiBqiGtzhPAf4vTnXgWUCJpoBLaOkE6R1Ak%2BBiiYBSvp7wG7YUo%2Ff6GiFirr7se&X-Amz-Signature=e1b4537a451bb98ee9bf44e21da8eaea9ed3c2990fe837cac28375308b493821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6DGKQW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV25lMaSsIEy1l%2FM9zOGvEbe3yn8V94tihSbe47qsUvAIgIBv1Nzq97Mnbt4v1HtVxndTa08Cu8MzXck10mGPs9DoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKP0qXEi%2B9hG3wnnryrcA7qZqWQySvUjOm9jSo5Uz56q7RFdvuhnP%2BpLAtCQhCEzY8HjxzO3ysX%2BgTmPBPJsgP5rMZBqwB566cuEDPBPx6mB5UH9RSAYTIlmv1yCP%2B6O5L9ngOMD1Lghk3lyX5LEWWHt8cTsQPf80FLrVC3ulBoCIwcD4OujxziMYrcsaBIBhkqn596CnGdgKjW9pXBaqfGWLy4MjQzZRMIJAozLTDIhSOIrkuQgLLud5pVsbw%2FNPwiclHsQUkrbaEtMF6%2BZVuM4H3UzYoIojCA0OQYbTXurjsmZJE%2BpN4xt%2FMTWPtq4Q4YiljDWT%2B%2FAEYE6LIU50l7hvwfWXi2e6u55JvAAXjP3RdYRPlsXJzNuOpkc95EFnPJE5TJGqxzMXAzAGlpRffa8612X95LVdA8xoiW6lgAfsXCUTyctKJpTuAzZvDVkU02ryiVqNqsxvMixVZeTY5wxRIzct9P%2B4E9nE9OjpL%2BqobMzSBj7m03iq2VCpWa3SwLuA%2FOAw3MIx%2FIy4eOJ7eBnsHsoU0tjrIhVK2I4z91rMjKfgkewgRUjU8RCmZ8VjP45WJoBawISJuEs51JcyJfCOYSgAZXH9XwFmUMutobzRbAGpj5MbZNZ9NOxLSOI2xy4%2BapFh%2B2U%2BkZhMJHsscQGOqUBglXPzmta4apG9RLB5XoPDkJHiDhSTNKgMtuVpe%2FHVBvnXrOqRmWIwpx4fEc2uRe2MwOL5v%2BxZXkUPs%2BDlk1DPN4Iu6XLRDBRFadhVZ%2F3j2rUXG9tI9P07dnyveXv7BuTb2BKAFMDThMRB2bN2pP%2FDBrDVW0JqOV0epV0O724A0hxcYixkkqW8x%2Bx1O52Jx%2B6z7vyU64o%2BOD%2BJqbTQ9Xjh7Oi60ve&X-Amz-Signature=81a347a7478a9e18bd5396bafaf951eeb3514a1e9aa95a8d7bbc9bb91a43d0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=8104a38bf31dff46cc1cc5f5301d9626f1b7f1334e7695cb2bf7b15ee6380ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=fedbe4d9a8b13189859c9094381d2da541a0ec9a8e84a93e0b41dc658d06123c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=e77478f98c4b63efd515aeda57cb2d60ea8f07bdf25416ac224e67e73f19a3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=2d7128ca3d881138a0abc840cd5a25527b8181dc4f8d72359d248d6475aea795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=7ad794c4fde15ea560c463d6c964e8c71f49f03b81b29df54e79d5758861fb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=ce0c32f60243497aa5cdeec01947b1d30961e157155f5868ce94c0512e8827a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=97b3f100fdd6f748ff27ba24d1d00950a28d31fd53a08f8470ce0c760080aba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTUXNC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2BVyMXCHvu2TwPI%2FPqRxr1BrGHJNvv%2Fj1KeqOofNUfAIgfp%2BNfOKNvm%2BH%2BjzRJ2sy713gTB1mUS50TzJg9fny71QqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFR2PW9b8sJjwIAnyrcAyNJG5SiuoYkMNVMPf6R5zEV3KGYSpqp3zAy7RmSxPS%2B%2FmIM1ClncKHK9oSPNTh6Z3YbVGeU%2F65MTLy2wShryKlputmV4BL7Jqcy4ljMUuT2UJEj5merEk0iqd1vFKgXwO93NxEZzq%2BxevE%2BldUTuNVf5KJq931JzanufJ%2FWPrchuhoEW4AZI%2FR6AE3db8xxu%2BhzCz1vSrU18RW5lo1CGy2P2%2FOJm3KEGteXtfRJUI%2BK5pVre1%2F9pIxuCoTM4tftkghE0iTUwZ04ZMKAuNM946AEsFqd%2FkrQX501YJFgHgx4TvdPsyM%2FpxI0AZeDmDKupIKHMuL7w68RXf74oFdlZHTnMmZApXNfDJKNLBX574IPaSbE2IcwHRVLMbliq6DsanzB33oKwjy1fVM68CGS0pixQHHL0bnYNZTkDAlng92E0s4NzA3MLGXnfscpATX6oW8ZBlSLFXhqEm61SnfTi3I1kvND4eN6IR3xuQ41Q7Qy%2BZcopjZH7yp%2BwUrN079eEs%2F2bn%2B%2Bg4v4OBSniA9ljddrIq%2BjSMzEq%2FIbs9EIXmKbYJjW%2FL1pkMErrG%2FXJXqp8aqb3959lDM4Q%2F4JFv%2F5XrYPdbkWXsmsxb0aUteUaMcOjFAsiQ2qkLmquMK2MKfsscQGOqUBbea7ovaXbNwiT036NLZXS%2BwuC8JkON53PF2OQiKaXrtjZaCYLf59WzwmagCj1iGTe54%2FVUcnLnGiAYq%2FlufUJlsyKt9IrDSK8Ph3LfqibkYu5qweMj9XoGfxB93BMHjlLgEX7SBbkJocgzWChAh2rZ4brTgTv81eLec%2BGyGNsYBXL3IGsTVpuvt2NAUBGaLJu6PLYF%2BSZScHA%2BDTn5EkS6hXuoHY&X-Amz-Signature=e317458e92fe6e2a042f2944b0237113bdd4c3e403557ab5d7fccd7db15b550a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
