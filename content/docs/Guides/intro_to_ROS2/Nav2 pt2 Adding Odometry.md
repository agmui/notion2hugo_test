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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=deca6600bab4455483c8457d472f815a3a834a4575d04a16829cd89d514a46e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=e321fd49768ac362e255aaf64e1037a42d4af1831df71321bdbaf512850afac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=10971e70d0e54991e160da942d01928f558801732606d406443516369947b0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=6f5fb4d7c2ef6f158e9207bc6f8d9105e4738a60d989df848ef60cb74a4c62d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=aae4979d163fa986c28cb5e65bb226785de22936b2ba9e0f43ddcf20a060042b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=9df54e3068329956963a90e9740cc5d5dbaa3b47e37238a343595533d883aed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=ad800a08b88690a548de864e17f355e7c5724f340894e051e076b4ca19598d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=6ba5c8945de638d88ae7fce8bc3b96e8adb2919a1a2a580849c524dda37f695c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=4e9d5c2f113af79f615666cb398f30ee1456f8e7fe2cf6d339e32887e76ef744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVN4OPWJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCmV9oiXYX6BzE0aGPV4CpneZ%2FfZdO0op3fdlSIFmjeqwIgCiNZpxQjtt7Sv5xtlKk9PYksA4PDZTGCZ8U%2BzarXe50qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnAoljgIKOTzSZx4SrcAzsSQKph3x5W5S9ilAT0B5divJrC%2BDui6xmX6uNrJMq3HbJXz2%2FCmIGruFLByrrBUT%2BlSwMDEhXARMYJ1wdR%2BBmoLcNEsFKyOSvKUMqYI%2BJ8dPZU6yLfO2athMzUKbvTww4UHLUhIB03U09YvGrCWS2JrkTQ9UGE5aCfQ0xWKOHBvOEfLauxb1XF8r1uunLcag%2FMjbGv4GPXHFfNi7tneBKz3bpYHoe%2BSdJ1dqV6OH6aXatlXI8bIpMQcCo2vtbkgDZKl1HNKubckq6ZBDdOfbBFekYcUCiaDxsg4%2F1tIord%2BBIaiRYkWrFRGJ8Sa1JbkrTYNlTEevuXcI%2F0q4SvKeACZVKEAgvfLjJtu46hoSw%2Bwcf6obI0Dr2M18ehha%2BPSg%2FrSfYJrCUsIiYhAuqKcJ3MxPKt1vva9kjyf4Ns1lx%2FbrWuzBMjkZRFkKUiRK7hXqfCty6rrTSbu0u5WLbe3hNQn%2BiG3W8xCip30uU069vR86BeyGTnB2FKTdl3TS7Dja49CEmUsjdQqkQQoEQZQmBpiL%2FnVApFEAKfuzulfjWKtPcdnKW9xn7iiK9f%2BVY%2FFDCrHAY2fF4acFTCRyqz5KhWgRM0gUHIJOJTp4d6z8VNvM2g%2Fs2xit60zJeZMPrI0MQGOqUBrTUaXfN6LMGTdVyGE%2BpKmqGUc6p6tZmdpxjxQwB%2ByTK2KzyjhmQ5DNQzPS6HjlEFHBVMg7jRSBh2yko3%2BmCWvpUKEuR0uhMbq20JHQAMtf8NWtuPr%2FE1NmnR6JlUifmvpR8dfEiGVGdipC6p2e8xSThlHogYujO2nw6ITO5HIV83ZkRdXKmcLm5PA2P7XmRBZWjjU1ahfhAr3n4%2BH%2FyvLZBbOSCJ&X-Amz-Signature=5ce52371d4b46d74551aacb7af90cd84a67b394845afc57b5386b0bd1d885858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYWUAFI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAxEQvpkWTpKlkCzdxmXwxtskCdrj2URFyjAZvdAhVv3AiEAjpCZW8FLVeBRLFKRb5je3GzG6ykWeT0ydfZh1MSxkrAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9MDCEzWmcbVnT6xyrcAwNbHZMI09Xk1QHudsbxEcN%2BBWXhRe9y7%2FvYes8%2BUhKPMHaxDPk4OIR1LQVM8J1%2BCS3OIJljIDXBsSt9EF8CpWLIeLv81ffqLQEAGSVaEuWeZZ8xV1G8i9Jd%2F0eW6vuXbSbdk%2Bc23YBTTKBvOVNFhVrJAsBhutLvJuE4c1cxVJlPiXwxZ%2BLK8U4i9C%2F9giDX0tFTkH5NIcTBHvhj7sGMbi8n1IjyLbTCMZ4xg5bmekBLgMm6n1%2BSpqp%2FsKdRAzHJXaOKLjd097fmWg37tPW7LOYV2cq3zVkS7mSdEbO59RhsH4pJWuxkXceOaAV2iBTFQAa5NjlHReXuhYDjHCVnl2cmLGwc4FTcPy%2FKhuDKbDX%2Bg6ns7d%2F%2BlOV62aZLb6y5jXZ1uV5w0lqMm3FsqVfkL5xPq5yXvAmSESI3wi4j5u%2BHfSD6zyXjk2O0%2Bgeps6h5CqV5o9jNDOtyN2Ds3q3jcD4pXMfLl%2BM7aoyeyzu%2B7lPV798UWdkp80JvCgF%2F6FO%2B%2BfSCA9omQFCPH8IWh%2BH6jC6GWpdiFJGgK0hhiOUEFrjF504%2FsrYz39i62pswuSzDWbuGHYB62SyKY9FyWBY20KznOLwic22M9%2BsqURixhWvIJ9gMUozm51xRUnPYMIbJ0MQGOqUBnjv%2BcriTbd9xh%2BDxo0c%2FySttnfmNiM%2BzdcbxX8TJ0cizGV4GpJeoerEb2u8QhJmwOCRPtFX1%2BvvPR9iD%2F62%2Bl990tEiAUBqs8P4HnVmNwC9VCEJhNAy6VJtvq9ztwo2jUwhR7wUw5Laeu1cHF4ZmNl4v6NKXMg%2BGQDfQx2xlacTGCiWkkvbGykS%2BN5X5uFW78pHrxtdDcGP6f50zatq5GCgYmQGY&X-Amz-Signature=390c01e8eb24e0477b61a048eb26500749b38e518b951ee34fb9be49ef50a944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=c87a2f8c98636c1268439078c5d5512f199c5accaff3ab6a983ff75a024c1132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=dbd74984e2835ca33d9522e5b66583ba8c150f53031dbb566b27046aec755ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=7f4ed765eedb8f717c8c8982ffd14381fa6922df8827f3aa89856892ba8948c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=23989e073df69b2bf73b2260324ec12a3e38a68030575ba52742ddca71d9aa60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=4663f31816c021bee1da7402e070c672404143abaf7fbf1a04674b0608b8f008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=0c846feada95a355c0b4936477785db0363c7a03031af5afa0d11a07b9942dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=15a2ece3d04f0d7175a1705618acc88fcca62739aec75b2f3147a6da0543c656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=d04a1906bac3bf1fa95e8d477d63fd8e4538f88c151a101414ee16f968535e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDGLL6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDYASn48PlGF4D6EpgTK9sCjJfgvID9coW0jLQK2Hn%2BdgIhAO7y%2FIDvwFGkUfpyC88fzwfCSF%2FHVc3qALd6mzDD2J2kKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVS5MPhjjZufJsmLUq3ANryqPtO00Ym%2BvVZP6zVtAcxAjZD6guU77B8%2FhtcVOrDTrC3UjHxcf1IkxQbM4Z7SM%2FGd%2B4rqoa7f1X37yu8G%2BlHo7WN7Qw%2B2EUEajykELng2UGi0NSb2JhbufdkSnzp5ZugF42Hbq0c2J1ljPX4rUhDqZ7b7O23QiqWCBnNNbjO9ihhVRQLBm0Tg98yIvQnEPhasQWFqA0u7bRlnYz9P99w7w2jMN9oBrKG2zHsry%2Bp1r%2B4K0UKGJQa4BMIUgxntSNcxFsGUguD42nQCakDOUKJTtXtV2VCK4x4RJojYPi%2BVFWVSFXW%2BCP1IaWA5hXlVGglTi2GHoUJ0iMk25RXH0EOWvPxXZLM%2FamWRhebd4IjkE72sGAEqMQkMi8AEuADszTcxihMyKCqs22kHq5ZnDN5dp35gWFuIIB2MVKDclramhquqGI9vzGXc3KsGQ111vZWApu0VYpj62LIFA2L4rD3XW2ux3M0wokSBgCoNePkFefA3uyUHhrLfe9tPaJqpqj%2FVnDdVACRO5CdsiVngkksNKlUO3eYj1w0VPafWQXc1YXolM3nLaii3a8Jcj4MhBKARPdrvWiS%2BhbIcAXXjDOfulmCSsuLkGunI9jiozJCbvPfA2zCn0bL32DYjDiyNDEBjqkAbJ8xapGL6jgcevk%2F5MU8pcxsqhnxbBulSD1mCKw8AsXc%2BaPfiv0bAouvHmS0CToHlysxcCxclXrO2xODM%2F6KNlkX9MPyU%2BAuvXCGCmeZpgzquXkjkNnDFV7rxWZrNfXeEoh24i6L6KoadhyNz299Q%2BBFoQKenQY9%2FYaSHLxgreKnTRFNH1IJF1MCj7JlEkCIx5Q8mU1buxRNPHbfS8eEYqtjdDh&X-Amz-Signature=b535eaeebd9a8c26b312f632219577b8224eacdd90575347ce53dd1fda044450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
