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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=29e21e57ab3848e200a6395ac76e4d4de20c7268fa649d79eced222869af65fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=d8afebe9d419e26e7c3abe1c37342789f1a4ea712a68c71d726ce4f9c46d111f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=0b9a87135524d1147533e124d4673313c6a55d92dbaead3f612cba89eb803e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=ca9bf4c42ab1255dc14e6ea92c7a91ac9f8a3976f5a3dc8052708a1ee75ad5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=5c7bfe996650587f223588fb6150b52d0397659fd183c6100d0d0eca4cf535a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=aa4a95abef70a4d9cda56a58e10664e21a7ff90e5bed90c33bd64f0caf894999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=becc93585bad8da3e2c663a301d850e3addde01f1543dea553f7692aee5c773b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=3b4955e4447a8f8d95178fb48c1bfa51f68f1015b843e4bfe2d451e998080e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=1975a8d242cdef61d0f8d793d6b97f47e595356fb86806dd81e5bdf959611944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XQ3XB5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtxYQHD1ctP3N%2FCz3Gp1N7mNm1GWo9FJwz%2F%2FWEOacFCAiB7fiioR6lgg0cZs75TjmkbPtujMU3TQpiCNGVmeQ4atSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2Bf8ClYg4Byy2gwKNKtwDKVjJnpmMBNDKBrV%2FM8%2BVTfSnM3bfB0oBox2Ur92j47mzw6eeFKkZyilUFzGZBdhlnry9BSgbXv5LbCf3U%2FIjoOMaXHBt9q1KHJYBuNgkK6e%2BVqjqkbBv3Pwfjk%2FyK25QujjTqB9k681DAqv9Z7IbErK6AGM1LXuS%2B6yyPIOgUs2cCzl0zIsk2HbnCLQbWd7dFRGqXmClqDBJBKViDbIJw%2BvY2jXxGdCy9nFBcVs5QG5JRa2%2Fbmlcld96oZhLyxGW1Vsz11dn5YMJt7b7ysvAJeGQWf1HwQv1YEqUjqa3z%2BPXEyu1ckyy3Jp2lW9TEqj7tP5QhZBcbqdHImsDNLP4qwG5fJOQivm36%2B9dOnZnNf0JC8zSkUwQb7QRHPUCYizdEdAZPllP6KqFb40r5rn%2BTH4dYtW8W9Og1LQl4DvaGfme6UBv3fiaGXb2i8SMCazJHILzu%2BNqloN5eI0ZAMJyEHb3X6P5Sn1OWhnMuCZ1NFeO%2FjDgiqAmGllgRl1zuLgRO9EGrfeCLlu4%2BVO0SfPPzLQo5q2PTO%2FKIeW9h3vWctTC5%2BWQPGxbJNwfFvqtWD%2BPComDZlyJPKD1S4nj4EF8%2B%2FUb7A6BQxueaPFo5T7T1AngZ4SPjn1awnwL9aUwxrr1xAY6pgGbZX1VjZI0wRmkaJivlqiDyZGMjW0FJDpGJc2iBBJrqfEvKSntLMWeJvh6dSzYy2aokd%2BDwO4u0%2FvHeGdnSMTYd8ZzStgz3uLNblj1OY%2BbifvlbgTuvMfu1Cr1WrB44SA0RRPgjGsyZwHnCkpS%2BclBotw1%2FtJZO9Qg023GQynACSYCRbfhjUq%2B3WERiMQ%2F98otKSmOB17NmyHldkLUvHlMkeyxbUaa&X-Amz-Signature=bfa4632ef54155cd4fff4814f6ff47060b2bac436ca13a8ebd4b4c10e26375d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEQH7ZS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxPO1998ZEzSlN94pY63OIDcZQqCsOA%2B503b3TBmEj1AiEA84sxSrcl%2FRyVWoEcwtsF6trA4jNKHvwFtoup3bOGjPYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE%2F4RTiucmaJSe8T6yrcA8LRPW4d5sEs%2BIFxugfwZcCTukt7gi59XfR59OaustOTVcv%2B4eS4BNUjYRQchRta50SQKnHuQycJ6W9nT9hytPQIjZgLE7z88yBuApjG9Wq%2F91LGTcy22S%2Bn0fzX8Iv3np1%2Bt2fFtJs4C1yJjovoI5tQt%2BNpEsO5cJf%2FRBkEiqNcMwwSmgaC5voEBlYa7u5ckLMOZ9BjConcRG83mwVKvmU4yupm9%2BkU6UXv%2B5b7ECAHtzRvKyWvrVZn%2F7YQ5zt8puDYik5RzsbyRPcXUudQytednvBuKMRshncOduhlw1%2Fz6BYO0OC09sTACMQbhdH5MEP3O3NlNYyDJsV6Wh0RyP3a9QM9bPUvWeLCIr14LX5x9cQIp73IQYBew%2BZiHggBFQsU3p2gsZVLTxuq0E%2BXeU0nvmt1ak%2FkzyUl0CeqtiONczpJsHT0bSfvWipVm54BH4H9q6jmKA57vyucvql2u6GGa%2BR8kIWcZTv2tqfHkYeU9Gk171uIwxSLZeqp39JMifTDB7AAAtCYoTx7l9Sm4NSXiYC4Gm4fCL2RXJVAU9uRz%2BOfa3K0MfeN%2BCmy8x1KaJazF5gFKGHvSLgOr%2BVI13dpNwhO97kTk0FsDMuaQC3C5jUy2k3DkZAEZauaMMm69cQGOqUBKI5n0YvAGisq%2Bh2CqYAFewWULFORxDsNhVMy%2F1c4mrSp7ex8YJAbCc5RN2Nbj64xcOInbF1MXYLYZJBTEeKDbKWWveCN%2FP6jJ%2BstyML%2FrarjOCB8I2woVKpRCfSe4%2BhCaGVVo0aPKAtI6Y2I7VAhV5HPJ11Z8WuDnSchjfj2Jpo6lTXEiFaLYz2t8oTFapnbSWsV9o1VNj0oD%2BTlMXucXcU%2B6G5r&X-Amz-Signature=1fee4aca91aaea84a16e8d781546bdd73765bf887c3ef2e5753eaf09d084d5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=d1c1da86650364250f6e83c2dcab9f0702bfcf721a8d854959d69eca5adef1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=3723be311ad6b8e22cb37c44613c4e1b78d4f668cb145cef06ed66ed71b4d1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=8551492500bbeb059bf0da0567d575cdbd355f3664e43e029f6fd7caa62ca793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=e0424efce243b3bf225925b67870f779bb54848f2666ef36c20487abda9d6fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=4d42d292c387c2bc0437d4898f21de075b12194e536f6bc71f82fb95e99f7214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=cc24b2c35179cdcb6a79f5afce1e9bf1c2ef5947f3f47a3878c2021a486d2a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=eba3edca37aa508f745a4ac94cf50862a6cdfb0acf81ce335285e28a05bc804e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=db138affefe0f8cbafa18e51020a0b6349f9ee91f9a15c1891e9d4315de1f6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W74NYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBh0MPTzzNtM8QXAghS2%2B5RoJRYQ1vDmbVq8RZbxbS9AiBO%2FcllxE4zU%2B34sdCldGgIhGQZzz0B1ghyXN%2BJkTrqHSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2B2JHSG%2BbaNshAz%2FbKtwDhIF%2FapJBdHzdVh3X0q89d4QYG5brKMk%2Bt0u8cpVfIa63%2BWskgCj4ncV%2BaKX6fazGUo8xTrdelEZn2%2FdIPHs8H5DlsEaaqSUjyg%2FSHavxA1FTiqGkQXy9pEGpIcJVkZe4UlVMmlJwMRAPayB7De8G1RfqbC0X4tv%2BzGeYTl6zivv7lyJdBSj2600oMfEscNdzQm0K2gke0FZq5bqNWSQWo4sQRxR722ZISxtatkR9x8l%2B8dW5N3rrmgWp5gP0TjHpAGoje86b5I8wbGKb8DnwdbkXJD4ArObx4Jn%2FSSY%2FfgzznlgdIoJ0y%2FO5hlatkCWbsv%2Fsfi7Zp5VeecAkjVXDz5zAT1Frk5e6xogNgCzJ41L7pe5nk1LgspU%2FV3wCo34YgcYB4Ir9emdTdrzu6az4069mHj1U%2BX%2BXk4oFGt3ojcd2ge5OkYVEk0mRu7MDYoQiJ%2Bgb5%2FhthJ%2B1HPj8iRdirumHE5PnKLMP%2F%2BbeAZyjoAVVesClVqu66Jw%2FA8%2Fyv5niObe4SCsn53rNW9%2BPfKwH9thkcev4PzxHTZv5eiOSXdV9QkdfjSu6I1xvmojFRStzuiV61s5qKUNg%2BtcUhF9Cb53rz81OHdchS3VgtzcoEp9blRnGBT%2BJIqst7aEwqrr1xAY6pgEnQEOjKiaiz0Zy4bhcHWWZuw%2B5mA2oqU9VgZN%2F64G3YYuPWpBhRgMusQcrPoi%2FRn7jKrE%2FJmpz%2FKiG086LwfuSUR9v%2BLkGOYLDDnkAxxtQAR9ms9i5eFXaUIrWC%2FR7lWYn%2BC5alcJVISp0gcWUho9YwzwrtxRfckRYEJrd2fldKqH3EqT60PNpvLrOp6nl3uArQYOGHjQ%2FLGjSLsLkIQ%2BmujgrSTQQ&X-Amz-Signature=2589c376746ff13f2e0da08983502c659fdf3369c98236d31e5e33a5b024d3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
