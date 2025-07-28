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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=2141fbacc68ac67d79e4eec261b3ca572dc9f9054bf217fbde8844428fd48f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=0051e6e38f0f171fa4d64c95b5bd201ac904da0809996a3aedbef5d501505ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=c7bab7ae4a3ecc6eb5d493fb2f218be9e42aa72b3342626ff9e0cfe326bb90af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=f11b3f7890056627b16acb5fee4532cb034f52d5efdd1adeca1fb91609f614e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=478cdfd9342ab4b93e4e9c2a247805cf57638a8c4641ccce046cb8b7fbe0f09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=e3678979d1aa445b562e027ddbd5eac5bdbafa3f5190d534b4146f9de410765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=9cd5762f55ead6cd46971da2bae2b42172563363ed5d4d47abdb80adb0299f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=dcaa7739f17f8fa5467809ee96951cfd7a8ccdf910ad0d560ee3510f78b39fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=014e1bd191afc53d80933afb422c2fd18e731f29840094d7d60c4ab5c9641d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAZ5Q2H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE%2BSoy%2BLpTPZ0dFjbZ00SOF4fPWBZqGO5Ltpc1c8EVSGAiAJ5ZxiSPpTdcMjOegzqdjoyaMY4Qtd6a6ii0Gk7O%2FTNSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJu20iqd9vw82durwKtwDHGMuOdTtUJAmBNcjdQaIZ0FbNrKJIF7qHtd1rQ2uLKbGOJVhNMaBlEuneyofbq0knFH1T3lxC62jsI%2FoXC35FkoPdzguetfT0yTmSpEGxweWw%2BVxIHLavm5lzM8AF%2B%2Fr2CziWemChkpn8xtQWUgP%2Fhfb4RamAMRpwOKGyTvmgwyBT4nvH06HvD6b62LeuJS0%2BgBszRFWFyAWyX0fj1aLlcdpyOSaPzCHMcyMC0YnL7XfMLsLDQN0%2Bs1tqJDh494pZvZPSVynbSh6byGvo%2BbLmj%2FSb41fZb%2B2Ezbmzyd6%2BZHxkM0QtHdsfe1otiwyPr2Y9ilTS67wJd%2FyYGAo70%2F58Q7J%2B%2B3Hz86RfdyLUoTyy5vLdBWrbsZa7wJvfgiQtLPMI02QF5HGP3OUzY3abILia9rtLVPjW8%2BkqzYctBxbdHmQXRpHBwFLBD7LMxK50NRVjra4ed5BUP9G1fAwudD%2BiV25gGk0ERItd22NZbmhUWkE0ALii7b8sTpn%2B7EIXK7XBaJhrBWja%2FjrjAXgTwXsimOp%2FxLcy6y63tWrPB%2B8cp%2Bl%2BDtllRhbHfcfkZumdrdRayVjapdcRVCc6Hdf1ihDG%2Br9n8o5J2qaCFnknKHTPYfm6GElbt3onUOaaJUw6dedxAY6pgElytkZdJKOk8rKjjZei66IhtuytzLTSIMLd7XWCUPkkydAP%2B350x%2BFfJx47umU35Oe1S92xWf6Xd8B6BA2Icxa9KorJSQ%2BoTHLtAfcqNyyZyMP%2BpKsPKCYoHXdB%2FEdib25upaoRNNyBqv5dWyTjVWv36mKMMdJeJKYXsaQ4Kg59W7xfLYLMqGJGArOsGyOSwvkATorfc2ZzuGb32r1ZX%2FbTmCgWgs%2F&X-Amz-Signature=9879bb574f4ff1a699f1320ef701d296f9b44866413c428e2e8425bd565a27e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ36MFIG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC5Ren%2BKj2tbOzJC3GK1OsD9dUD%2B3Ib8%2BH82U7nDby3wgIgE0BvVUDppYTQWgfn6kS58hDtuJdlq6TRmRZxGPsrwBEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnW8nE%2F0jR3i4%2BQjircA9sZ0Gk9kG%2FrWm6vAaUXTzRmzRZoCjO8%2F9xE0ZjfRS8hCJLA%2BzJMKz2UWpmqq1lIXzxSlL2%2BrRYIOdHx8i8ckNj5hCxOHoT2gGgwppdXTo5H4WoMIixdneKkBdF24TkutQgWFmgJiQKWc1YvZacGY0j7Ug%2BJPErsgPLAtsXliJNHXCeNFVFBYAH37yHEs%2BB8ZfnH5Qr31GsVo922qKPYlp7zgNOvKvsKZF4T7EtNLYulqWRt3eeYHOHuAIkys%2FHgJQ%2BtmLmFnv%2BfFRa0pXgkS4ebTq43XBIk1088PLDva7lDEN4LNgh%2BIjyAKGk94Od0sFtOZWl5Kcira1WG446OqeRKBZryhFP9EiwM83M5sBUpwAuvEeDPQ%2Bo52pXgssrUY9u%2FD8RkR6II0%2BamXAx67r12%2FwOxYsPiZdaZ2vEftNFRHBsXlwk7EBlXdpCo6LX525SOZIVPftjGZFVjeQCcYGqN%2F2jVn4%2BvgELyX9%2FMj4%2BFV6YGJ63D0SNi%2FkTGDni6CvOELoe5xHIpYqGiTFfoKpfMs12jB30ZsZXtwfKV9AGCq7gm2iyW2om3GytHeDbFryHKYY6kMgEiqK0FanlKuiHzKmbHe7f4vu2F4Y%2FSZAdZWenhQzL17RBvRiKvMMvXncQGOqUBxE4yL5IBFu%2Bg9tZ99WMnqiql6NwBuyEG3D44ZqhYT%2BwHihlLyzMcUpxQkEmjoSSFxkPAFlTs8v0jwHfaha74ghQ3JjizID6NmQJdSS7jEUNy88dJWQYxpiGkgKMPypv51R9nPT21Z8qku6SZIZIBiHnqMuB57gf%2FPgx6nAR%2FGeNqd257so%2BZQN6gHgkIr03DnS4x1RQO9woDP5Kmbi2S54TWdYOD&X-Amz-Signature=a406966fba5a3f603ee7bf4544542e025347dc8a88530faffeee3757698dd690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=64d44ba6104d5ffaf31a1b648350fb2492b4964d1216fbbd4fd4b53eed343c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=7f9e2424a93cc91c7418dc451b35c1a48783d049ee916f6d9ca7faa9f60a9acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=85416c90e6b7f18f9e76c301d72a1b30b661fd3e37d39647916eb480c907cb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=37ce1e9a4c51a66a98af5c7f43443877f3cfc2bd78213b1e2ea874f194653e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=11f152cea6b8cc890e432504beb8acba9787c3a18227e267bdb7cc54bf08050a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=5d2900c3de50c602496ac72a7ad1e69b365b56b9b135e43841b9093a998dc7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJSXYDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC49bH4JK3hIvnwo3zLm0%2BD6hAAUzeUwXyIafjwIyR0VAiBeDwkU4%2FFtMVrqVh30C1kHds%2FRZ5FDdTDSAfYe7ndfTCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbGi5nfRiwykFyU%2FKtwDbRhDsunuBpQpyMogk9YHg018SC47O8%2FunhbRMZTnsyI0opF%2FzsgOYbEPFW3%2BMB%2FgC0t5tAYLI522FnmhrpPKB4CyjXqfZCZv5Jksr%2F%2BXbruZGcgV7NjYnkWuQ60YuuXlkaO6Z%2FMQHjpyoTX%2BMjfktBXZ7QbKwmclMIEZWzVk1gT%2FAQU8iwOC48T1wrdr%2BikGhWl8Fxu5Zp9N%2BY%2FgfnybH41Jd7Z7Wc2DJCUO6LoTIjc3fvXWXa32ST5dx%2F9PIlY0Gp%2FeJKAs6UeVa3PVnrw52QIFLaVs1sEtPFAGyNik5aBvn%2BficQKaFSlAjOtl%2BX2PL8CpixFPg62pTN0L10vOh54qpEIXsEAK04rStQjdCcax8Trx1XgTW8m6T%2FzjXeN5wyofUdrZZmLkhs13rzTprHG9CY8NifdlN1TX7zJ8eNTbNdr85Hf5En2NkbS96d41zUyjJarh8x4ycwhRGdenfPp3feefGTVwRz2S9ROCjPa7BmclCRHs8rOYP5l6j5C7akpWPTY6PIf3bV%2Fxap0KkI0x32p34w6v%2BHU8roJLaSfwQqCSfNqZ84ZTzVDSK1cv5Vzytc46cH3MurrPKvVsalIW%2Bcmgx0Ihwd3jesodsAjSMyysW1fqKcRjl3ow2NedxAY6pgG3MSZd6E1iHXyv9dLBSHbSnfFkPOtig3dsl9V6tIEAkMVy%2FoZxs6cgm82gzQK1ZWk0p2iF9By%2FXI3gFj3tiVdS0u12c%2B0rRgyIDL8iZdROKfkbJM65D8ZST2gf%2F2iSv1etEy%2Fl2WUiYGDvGp25RUWQWY13NRX%2F6mIJ0czwh1rhQQJHkZOwHVpSDZVKBP990ovNgf3F27c6KC6ggK9fA6w5954Curhk&X-Amz-Signature=1faec59e510f1d4eb08363a05e5b1a504e605fc05fa48fb8f8fd092375c56eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
