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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=f832dc1ce04737388cc7044750e9d72cff92c0d727038e91aa643c504d310d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=3e9a4b9423e3e8c83fff029e62ce35a0c7b95c052967d3568cb5a70a19f1cba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=2935ff902cce7bc46af813b017033271abf631bcd2c6ec344c70f2e1d47808f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=e0416d7e360f15487b9e6484750c403376b8985fc1db7dbedf3201f75f540f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=503988721833e729a6dc0480e5b46a565f2664a3e500c5d8b5aefa9361ef68da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=541435a967937c069ec500e33fb94de3a0187d4b32ad8bd3c6a5d9b9eac6fb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=42bd0950f47d8a446ba51ec440a815771dc22180eccaf4881103050791a09128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=4dc8c77b8aac9ca69c32f2d4fa02c122e87ada5680850c422f57877b28334c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=3f9c77c2e77bfef58b98d866644ec5e305a76c2d52e062fc8256e6557fc67c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7BWGNN%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpt69asbiqaMjkzrcfXwmRxCZS6AmkMipXn7M4K6mVgIgXAfHBjWwmv7QkP7s3yD368%2Bty92cCyWT5OZpjB%2BZz50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2F6339QLWzUx1UECrcAzHXK6UdP5hC3ceNzNY6%2F0qo6%2BWso7KxFxdDe4%2BWsP1Eb5jXXO%2FUlu9PBDIx29mdtjFbsD%2Fpji%2BZWrXo8rRHNk%2Fp5ndll7qMiIYGxXb%2F8YCzfvWB97wejqbf7U9DVK2EZNqe39VxhZ3U1z%2Bw7II%2FF6ZI8izKw8MRo4lC8MBtLNc4PIvWV5ziOaUxfed4BjP5xXZzPMP6qdmhEpMpCY%2BVe2buufTzV1OIU9k4C95TIFa%2B2pEEmghw1iZdLsLYXXy%2FnNu5sX5hLmDWXJ%2FXKu566ugzjPQQJBU9wuGQnpEoks4S2tQPzViyU5QrgVnOK1oz7M1EgbICHxb84yH4rCP8gOfdDjmDA15q78EBYlwDk0bSWwtGnCtkJ6CDM6ocY%2FhJne%2BTR1k0VUhgvyukiRmHdk0qmnoBWvILpDE4M6F6V6NGB0zMAAtPC8MFu3Mvia4UmprQnvH8wa%2Bq79vsMbKecVdSXis%2BXbTf2AcUSp0GGhwlgmVMGebxmc82QAs7OOlUrE4ma7r%2BTwSqlCyEeDlTuzk6Q7nSeEOt2PHRNtpaV28rM2lr%2FD4S%2BSMbRVRvjEOPu2DPdv4iWLGznGJiO3zamvLq396rZThva7RHKmMGUIaEQbahRz2PCSkONqtWMKqfzsUGOqUBBUNzhJFKD8vvXWamy0mSZ6WNW1TDvbymWM30RBTZcj1tWyPQO4%2BGfmX2CyCsL0dMIC%2BBtcvNiURXX2I5RFPSNtu01JDy6AG7HSfDbxM96hikwLh2aqgPf7ZURCPYmkM84WZgPgtJEqy317AhpdojnAhxucG%2B3ANae6rt4ZMq%2Bzx6smAdVIl0ZXKk%2F5m3G7UqV4t4brPncezyLKm45mWgiW7FRLNz&X-Amz-Signature=412de6eb468beef274ec6140ab9510ce8a8673b90c165ca74cf070138f993d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=1a08d959bb9c0335a83656341c609bc94b8253d32474d7df7e8fbf0bd0c85b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=e6b735e0812b8e226f97c13807f312544244c5024f83484cc3f4e3fa1a8788ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=f34aff12a5889044879ccb80f9e0f299d538271520544ad2b8dab9246b768203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=4623acc3adfdfbeb31b9423a014b371e22e888404093c68f44cb4ae7147f233b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=20911ed362e350a9cd42ab5bd35bb0ca2d90d814f7c20207b8f77dc8fc9d8cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=ea589fe0b35fe48907d5a65bfb09f57f7f1f23e05be3c2cd7afc565fa1a8949c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=774c3a215a9cc210895725c8f2629f4f3eab9878fef4d7412f4c7d3d535d9717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=5b4d82222c54306242faa925d7aa6942a4bb409d7e0c960e6457a159febf07c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=66349d234696b6917e4ece170423a4a34447f057fd00822510c6edb783ac1eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6XP2BE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0lZ9nGSs8ibdvlPVg7RysGc4PkJWOYPyLqtHKsIuYgIhAI29F5p%2Bnd8BaMW9EbB3da8J7ZJkCbG3PyfM4w%2BPvLupKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFZhVgzS4VYRVFW2oq3AM9JKzzvTtEccSryT7w4nN4G5nkDJDp8PTASXykIWk3IteOlOxq3is4ehqHrrKz1gQPS8hknrtQFDxcOFZDzfj4pqUAsMWd4stmwrzKtvyP16zxSdOvhto9ggylOb9JSTd1aMXV6ysZsa8bLK7y9TmlTyN3uR7%2BMhrwlZ%2Bz4iC5uD3N7j8J%2F3QLUYBBbhSYD2SvkGQsrsr%2FqzzS57lTWE53jQhiRAmB1DHkcNFXv89P4SRxLAkA0jRfoE2G2Fq8muTTLNXAqRZDidwW%2BPthUOCtFQjyBAPLprNAXRsH8003wKPImChBd6D%2F7WbY%2F3dCrXN%2FeIitRL8YXT1K%2F3crrQQ5Ap1G%2Fh3LA7V71UV9HWr852mNL2u22Fcik4nQ09%2B9eFQvGMMwqTMrN7ybSNXgQwG6HLq7MRiEQ8mQBejOCl62rvJdKCQ3LMfl3PDtvwqrfoTeB8aNb6DOS8PFf272TbfPZ3M64Jhk4bxXrCNwU6oDnjRSXeWQu%2F1rlaTunC33I%2BzzZ%2F7XzpkfO8vs%2FWTHkQGiyKevn7LstC0xO1PhLBue1caYzPlt6u8E18yJdernQDurV2uNs%2Bl%2Fy0KiteAE2GYY6%2ByM71trfDpMyWloJEt8ypYHUZO5L9dJZHGu%2FzDHns7FBjqkARhsDs%2BRFzZAn1DIpyDTV%2FIN77oTSDSrRnEZcK9B5%2FFsnZ0OiMkbhloB6h5u8scKEJwWPjdq4F%2F0EGR1%2BdCuM49abtRebsScDxauxxu4az%2BvzUzEG6RFIw2Gg6PksFcU2t%2BABimVTMgCTr6Kp4%2F4BN9j7hp7bXodYpSA2vFNbmn%2F%2FQQmxvrkvC0VIwZAyoKg6wD%2FpMGdjI8Wq%2Bd295e%2BTLOJp5BQ&X-Amz-Signature=55469fd797b82d510798ca5467d11a3f9d34cf62107c7e8074c1c0f765ff5f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
