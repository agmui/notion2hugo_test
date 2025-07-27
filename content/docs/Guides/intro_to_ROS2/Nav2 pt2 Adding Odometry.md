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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=3c1633d8ec576a2f76daff7caf51036d7c054cddbd6eb1a03aed2970e344c195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=ba8b20acb5257d095866bb932317dcca05ce1d3d9b8d2838d14cdf0b07de6feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=7007bfe02ceff0ef7c25f2478d02f5e4ec949c14460ae9c393770d4615935781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=9fcc5ccd4027dea894d35eee2e234dce612e6be0ebe74cb0ab81e6617185d5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=f749901d97d30eb0f6fb08b0fae4a5fabdc1ae192518a8fd5a19d401fe3367a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=710a3552c1ecba608f907835cafcbc890f8d4dcb06a34cfe5040f908f350be91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=f70f15ce055d9b2916595ac10c6091b5b195bfa9eaa996b9b172a481035b22ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=fde31164225a9e6ec88e51550df420a584010c025ffa07ed11dc309ed6c3f7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=a765f6167ed174ac9e15eae3e074df65f79b8056a8dd288fc920cb49bf9ddae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIDMJ2Z%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDgSgs9IkqAyD2tOSXQBDofArEBvAedD2VwCvDTbLYkaAiEA3GAbTYkHe3gWdlOVKrJ5HxsbdWCYIaxTGo6xnBUCKdIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEzW%2B1v2rsrsyUvsASrcA04k%2BvtTVDNOThVuDs%2BB%2F0DTLT2WYNpechN3nKWmkHyLdehkNOo0pISzWY0tTmWBjJ3UoiWHJUx2h3cPp%2Bx%2FP5gWF0uGfYDPC1SkFn4yQOmKg56AIMCRScuoe1Ck0Cz7KZtnCVyXNycXWJ1uEar5CebeJ%2BTysYEOFsq2WA4ABTdaJ4zY%2Fh5stzohTWx65brvSAKVKkyxwzmCdRXfPeZDnwY4kf53UGHe6tRiM9MYb%2BdCLctzhWDM2AopbtygmgdZPY7XeTkonrOVkFiCZT3v4zYJUexVMn7p9qyoDOHN%2FFGwnJ8hHq9aEr0uol2lZ8c46AC7OXo29HPRAATaiPHy%2F2AxEPG3dudcJhNu4Nw%2B0UMyZMl2eI8iMC%2BWpZpl%2Br7nOT7DPoK7ZXd6lL0SKjxDRRkwJPdVsuREM2Me65pXLxtKa0h1XZJxES5JBaUOGduF7UQMATxqeet9tQCtwLr7R5wy60qCNuENYyg40AK66gf8OVpJekdlGgNcHZZ5CKQzp89CKhvbZRPY4yrGOQwo93vP7gi7EX46hNZv%2BPTP9J1Jt8TxE7pC9oGP0HW607Q5CNWkDUbTUdTXQrbO1Ql2u3yxVPjZElDekHIULVqDA2sZWgn5unb9mxZwChY2MJu7lsQGOqUB1xKAiXVz7x%2FqN5cOwV9FRTmy3S0DFLpwFyP4L%2Bv%2FFH%2FqkzxouzOEzXIufGOnSq5RONidUMXbhU4d5RM8RqhDbIy5GpaMcXrpeVM1G9YxhQeq67MCXflBeikGf8wbcKNlASRWWDI889ZU3%2FKQGkH0EKXICt3XxU3OjrykYRgYLBBntTgo39J1vwDn3IAfX%2B1F5BTRWWQRinoNnS20LaNM%2BejYXxoa&X-Amz-Signature=882909e73af7e99e2b54e8216722b32af23f359561e0e3316fde572a2eb02acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LBCYEZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD7JJbeajIqrtzr%2Fo%2FSvTsG8wQFrqBr%2FqZztlRCvT8Z9wIgCLq3bSuAdXWDTnc4vlZrbPcD6yUtErI%2BREO%2BGU%2BsOaUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMKCuY7mi9f1OllVVyrcA75yCvdS9HtcG53%2F2Q8bgfieluMP%2FqtorZl%2BSDiVUy8JtVFmxhlWR6Kr0WFBuVOzg4NI3NJCSd0EZtkatAYWTze8Iu%2BJ6MyP6N0xSl8%2B80tYjdsS79434f%2BB6SE2SgcSmxr%2BfKL8quy80rBm1N3pQwLu1GqXqYD0HTAikj5Y%2FOmPH9rXF03J%2BRAHew%2BHxAYW9lvaGAJd20LuS84Ea5qBFWxt69kbZfnLhZn78FymMVdNTnB3oCnMiolTgVUokJ%2FGCX9O8XfZGHCj%2BuucND6uBf0koWJBKUYJtL0NPGGpHDjMUkLsZXhZ7%2BdZLmt3%2Byg%2FmJNSHavnelL%2FBzXo27Pb1zP2uKzWRUvErm8XPYlSwcNHw7YQToIjpbbhBHGrxeP8g1qPdlgXScTp0zJF06aeP1Q6dPZcaOEPltWofF8YCMf9cEAuyLnpPv5AZsuI26l%2B54Z7u5LIC628EhX%2B7qcHPpTKd3hp0LHb2OhfqEytlcBKEEQCSzvqkB3YTYsTElhtHCz8GM3dr3AkMo%2BF8bi4uU9lVE1IlRP4IkZx7vLXoyXXrenDo9rswLcFrCxQgBQKLmH7pY2SfPWMWlU9djgIYyGyhCOc%2FLf7H8DJenKOxQcfHX67dhoL%2FSQwyhS3MN26lsQGOqUBipSUnrKodW36FPqE0vtW1qtvkzayFCUjfHUTN562T3FOg82AmG02fMBbNAfIIgxUU7xTCe2KMFsYqcx0bgesmx84QzUQ6GI0mpffjlhFmNp4OIdDC69buqWYULEEwNyggc2uxamh3J4Av1nBXWUpjYy7F94rKB0EMO1EAobVTo0bEJhwr63maucMnt8HJkW%2FhjNOCTX%2FveOHLJXeyFHzB4CwECKK&X-Amz-Signature=bb235e989bbfdbc436c2638ff001d82d944a52caca86a2a2c473764667fadc02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=0c8ee9fdb90f7375a765cc9cc962c5472f4e86520237b2234a32b19f33b1a703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=e67662346695ddbb9d4c97603e484ba4015d1352219396003ff4696e0e7ea585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=fdd05fbcf882a9135fe1965ed017a916c74c5ccb9fd67ec91b0ce36078a3f841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=cd932fb671ba914168d991b790f46a4e3dd678d8d1eaa1241b2845db7772cb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=31872bcd1c1f12d943b1834f4dfc321acaafd50224c5cb83ba2323a13777bc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=a4d5eac3b682d9077a7b9421d198979b7d5112dd8f6bbb4d80232c6c3477dae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QK5PKA4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2Fs5q%2FTHFtQfnXo3tnsjQAK96EebEnWjvGRghyDBzqggIhAOXJ9TvOoc7Ao5eIdbnz9lStWbRsT4YvutnAEQpdj1rmKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZ3f84Ckgxs4xnaqoq3AOeY7yuGnS33c2WtjrsQ%2BFqEgAvmjvdh3VO52f0uABbtmhjC6NaRmROxS9RZ3ADqKOU%2FEZ1lKzpgxCY%2FAQ65tvqHGrmCPBtUnEfR8G6iYXEkJGrI2HFbLNibTcc%2FF6p%2FPoMSnnfbiXVT6hV%2Ft%2F3MsfWr0NooRt5cMH%2FE%2B6SbDdrpIfFE%2B%2FyiJiJlwZQ%2Bu3VXhIFy25sRi98Qy6K536pnNhkm5vsF83EUtK4EDbfkfrr1UpNBLXDeSTsrADRe%2BlVsfhNH6mR7pJ0zQyT5L7Kj53t3igSfUeIGTKME6CCFOVqFCg4s5edN1v%2B8FynWOvZnsrh%2BBWkabknWUSTbczQJ6XcMSC0O2GnJ2yUXeYbxy93xGHbamyTMUMomA3PWUZD7NcYMGUHScvklsToTX5o5r%2FsHhmCZXpRV3Ek%2FdzplyxFpUphddO212%2B3M8pDp8bBT9J9LoQccVitw80%2B16ZRyMwAsWX0Qy6cToxNmmfKzEDrZqmBd8ogfx0t1eGYOOBqZbNqIgW3uCPTwCfHqsxNIFNQ3tkDlWzEnpPMGyElpwfaGaCZBE3snplbU3GYNYg4d0Fmw2PIX4Ddue07LYx0c9a%2FRd5zrVJ5VjTMR20%2FCxdgxaplIn%2FA7LuCy3BoojDoupbEBjqkAXrlXofS2TtPrZKQO5lxmE3YbeeJPTfcgD07vDF6CtFemU4u9JGsxw%2Bc8VwXi%2FvusJ40Rci6i6E4Sd8cdyYwcovsp8%2BQ%2FOXrHPVlNsTYlAMUOqp4B9RATqEIQ8CnGYTSeHW3Vl4JYwV0gIeTA0SQ46xElV0nOZdOqqzmeFW%2F7xS58j5g2WcH34PO10EMWi2N3mmW%2FzN3d4dD70M8eelqWdhI9WSL&X-Amz-Signature=e01aac5ec3356b7b0e02723af99d8829abe2cb1a14a4ec6fd527297e1cb6ba75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
