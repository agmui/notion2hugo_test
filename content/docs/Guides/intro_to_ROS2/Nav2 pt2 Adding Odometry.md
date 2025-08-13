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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=a0c817875b32d0ff7ee6db8e4b4582c5f1bae2d1afdc9a38b531fb2ac54e05e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=57bddcd9120a8658fbc69efde2020efc9332f81692a11da3d0569f3889dfb959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=71cffa12487dfa53f4c3ff4a76e186a0062dc6f845dedb8b70f69ad254c04076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=f2084b4468558b2c421555727c399aa19ee0f687ffbc4f85a695a85c38be9e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=6ed91bee67a44897080f22f6d01e4b889c6bc0d376a9b9b78cf397e750c9cd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=805bd4752f9716d9e9819a022cae67daa78db422791a9d8421bff6cd37646f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=a19afd46a4e869c52007478489f69b27d5f96a3638a6928a77cb2f16a05ba719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=4741180df0c04e50ebf0dd582ef7b03e62ae5215793aafdad9809d9aa9bf5082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=3f6ff45fd3f30aa8bb9673aaff9001de9e81d73dcec66f130edb03583e5eee4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6P2UJL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnfl3SKleZpa35h5sY8uP4NTHQ9%2B%2FNUdOJ6S6jBc0FwIhAOgRuZWhpBUbDIebQqdcf9sp%2BmH6A6Ft8%2BfrIdjjkPJKKv8DCCQQABoMNjM3NDIzMTgzODA1Igybbqzd0yjQ3SzjAVwq3AN39yhefxJRbw5AfDN9iDmAYEGsnBAYC7g%2BYYvFPJHT6gFmtoEOHuDorg%2FLyPMSbzXgXhgE4kpN%2FfZxxOBq%2Ba2ZGmqP%2FZMMVijoSoc1tkq2%2FTjjgLxDN7fuizIjHAx5CA6vmkJMQZZAUFb9k56l2UHOs%2FCYkbf3HDS0y66t%2BnKWi8G%2Bf1k7V0R%2FJNN1Zi8zvUJLc2rkBFf0flUoYFiEUoX2xWYQDSUAtMub%2FpaT3B8n4OZs7HYj58zf7KAXGNIQr8ZafRD1Spwb2UfQtHVskaptMYwR8D21%2B7Q6dC4F98Lzd%2BArwZsymGzWr5wihZyJiBajQPuvr6eYKEECCs7pXXEOBDtpBWHMsJkrSeaVyC6ehw3cmKKgjmnQH2fIGgIXsF%2FyrjTsbciMsnddrLZcWe%2BytVslBq9slc7ZQthMOdgak%2FezxoSGTqlWSQgCYsu%2Bag3iW7TtlmPoYoOIcx3aiZqa2L11V2C94Gxo8ANU5NvRO%2Fh4g4EApRs2bVTfOMJLqFQwdeZYj2hVQKK6xg1%2Bd4ToleexNRl%2FUgo%2B7o4mQq%2FdnQfJhl1yjkH3m7Ry5hiDjstdH0E%2Bqonmt%2FDRQx8WbHaheiwTyUM0d4nuZb7chDBZ8tno7gRE5FosOM5KrTDWh%2FDEBjqkAdJPvC6wElrYE0R4IhH1F6zAUyTCMgLbLnLsOu5UOgV7GkuFZ4Y3cnsOuvli7AApRlHI%2F5BuTxM%2FdyZpGx3jAUG9vyml%2FfSbAyyDGazCHTiQd%2FGOBW5wnRotvxckEpOcPDBv%2BcFVtJ73cYOn8T3HRU%2Fq9%2Bjy2HClzIl6EDZQzNvD5GDIemjtdzCQhgVQ430nFmuPoORYWOOgVZpt9LiPrldn9%2BRh&X-Amz-Signature=40a464b5dd1fd1ad0119a57f0abd922a49db1e7aae323754fcb93ef41969ac73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKM3TNJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCueWW7VacIQBR4KGtYCVrG4LewEYwFLkr2YaCegLD%2FrAIgB4OLuU44a%2Bm9LyyvSwEStrGCU%2BBog4vg%2BGO%2FKq9fbv4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCNdcXLgD9dtb5qE%2FSrcAyvlx%2BIfqDSRovt7iajd%2FNscbqPrWNRi2Aj9xNoVnUmY50ffP9Gd%2BOJp%2Bd3an19PQuTJwiZ%2Fp4K8MT7lvR3DRu74rolIdJEXPJ4zxBONzUzzYMvmU8mKxZak2si%2FpUd7iKuVPqarufDTNmxuVWNXbIzbn8Tlrk7bE%2F4v5OW1pNm2xO1KoPVi%2BEpylZJj7VFo25Q3wg6Dm2fRdLZvmVaLLYXrUJGwo1%2FV3%2FIBwKTs5Cc%2Bd3nCS7j8130orJqXbZScc0c%2BklsZXIZfatWxNt2tET5gpwLGxTRIjWWokbKlYHzDslr%2BLd9W6f9Uu3eATZR5%2B8foOT7eyoUo1%2FgMGfBoujZGoA6%2FcG1dlYzXKlc2CCwYoPnvfaKHLfzDks6Ymsz6o7eWSJiQ4Z%2B%2BLpLH1XqTCQAn%2FUXIsapWuXRQeYxGxq07TfvAF42UKJZc1JvIqzHWTkqsAtjGIOgUsMM%2FvAnxfPypAZtwSjNrUFGGXzjMYiMHeiVvEVKiEz%2BgGDcpRAI42fEt2ImzYRic%2BCDAaakRZosXqW7uH3Leh5c%2BfDD6FX9JhIrnwZzjqVrUV5jI4paeBU56Dw%2BoFYmiHXYdODuSae%2B4YsWVui7Q3JjfoDNRwt9wfIaK0hECeiwTeaNmMOmF8MQGOqUBRfT0iRRUUQOE9YYinsRDsa44YAwLZ3TGUweBwsvx9JxDqkK3jUdIgOBDRQkTLl6ez1IrG7acSpeq8HB4NhVzQuxyJtiHaXn5Vz3BXO2Tuc7Ua%2FOGPVaNw8dZyCWR252DtLa2T2CWDQXdmmpNvt4RiRY%2Fc5d8kwuQgW6yXduIFLltQ3S6YZFEvaaBdrTWdZosC4E%2F%2B6V0sExn3Gdm2txBP9VrmybY&X-Amz-Signature=cdca4b38b08bbb9f3bfa8b9018e9db1a28dd90e96322361d214472c3cbbff7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=58232c9ba4fc2051dfb8164e556749b154381f61e8be3369547dfad0b46b8fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=644d7fae73dc18df1a8be03d82a07221b8e2ae023ee5dcefdff6187a910732d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=cd54add55aa1c7c9f5dc09ff5df49a6092b25a7ac6ebf5608626ddbd0bc7d37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=e1e1ac8f7a74bfe29e324be146c71ee7831a98227b2bead0ca535f6418947388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=64245592c1cc629d88005e745e29d6d48c8d2a2438c4e4b1a6e5efa3cb9989d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=c82caf164a8250ee80ade7c9a572549ccc1a545372cc04a9d0bda9b1580ed313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=3e948dbeb922ddb73aa6607f25d2430dab72662c6e4eac5c1b7a20811d731869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=73d12ca06d085acc9e1db0f8609c272044be4c887b160771d0331cb2178c70e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUF55SW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVMMndu%2F3jG47zvLGAg5zplt4kB%2Fct7fKMT78QN4HLwIgaOXQUBqvnawW8daH%2F7mbSCMWbvRv4yb9zKrSdSQllFIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKovweGCCJyX1CGubCrcA0Y6y3Ihz5LTAdGu7N84EutVBlB%2BrmBdPn78KK%2B%2FLN8ruRlcuolBxw3oUEx3uAk2uGFqHSMEnAKXEZjhZ64WlLoAb60K%2FkenZP9bRSccCehN6jgWlIyU75QPvZVKlkqb54EaMl5DBHVL%2FINitdlT0PzyQDcwRZNxKttZ8vx%2F5rYjjtVtmSzXrx0ib%2BAsAL5H3PIMsW4nHeVOwviXLB1bWJUR%2FV17blRTlOW5TVrlUBvNWqcqwlkJwePIpWyuOfZUHG1merbH%2B9DMggAirRe1zUonQFWRtB7nCx1G5wc71EyVRQE5X6wwJ9YgCl1WPkQ9FIMf4gtffla7hPO27ARAT%2FpgLb6Gtv4s8qWVwGgTXPO3X9Gqek3ISWLDj%2B2oFa4VZUy2i%2BsDsdsQw8BfrHwD8MzGJSXhffVg6xPHrLinsdGGHDbAMmrsJBUIKARopsOvQWT%2FuzT%2BNlgCL5hTZLhwCU%2ByL9ZGbOzuvYqfLkFLEEOSW%2FBwVbNuKvMaHh2DjQ6XLn%2FUYL5FWviCeuugCzSvLWCMgKGX5PLoAhRF8qmGl52pJSwowO5bxxdW37BUqNhRpIS0vGWBD9sHrapgNMV0vu%2FqVTst7yIYErGeezfS%2F%2BIZkH4NbpilBQfs3akmMOiG8MQGOqUBrV9%2FmyFARdjVjEK7CFjTLkcHuR3grWzGCwZY2YJKBEhYCrsoUOhcZ2rbHmsxn7%2BlzDQEyo%2BpauLdCiruduZfsZ8zohnHOWZeWZ7uZysSt7g%2BZYVpQ6JOD%2BLoOw8adIwBq%2BD%2BmGqByqJ2KalNqzJOVhnn%2FzYPL78bgRjMFWC%2Fnszh0rNcqaV8ydGfLkZFjoY6ODDu74zib3%2FLBsIb2OumYhTHdBye&X-Amz-Signature=7e714e95d35ab57f311854161ebbd6bba17158770c7facc2400d2e84977cd00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
