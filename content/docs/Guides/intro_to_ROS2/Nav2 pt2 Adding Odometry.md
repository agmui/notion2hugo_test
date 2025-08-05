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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=8ec8b005de5805877511f387d8bd21828aaa6c5f3611aae943254e792dd496b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=b923255b7df4b9418869e52a98c57c62b63b7dc5cc69cc8465f17d1ab38ee62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=850aba806b122702e02c35a917a6e743c3e4530cf64d5ffd2b57b42b10b0da24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=9b8e3780f45c4e13f15ec8b93ee49fa4fc44f7d2bbde4ccb8767360e6e602683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=5351094a9709b8d371532e87c8b3bf3ea1b36108607cf22d4192b9e20a22940a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=ce4f89785b838a3cd783e42eeddaeb4ceb073be0623996825d720a126492a4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=ad6e5347f291e75f5e5f6f05d50c42d190133a414eacb87894b6af32f9598e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=1776d41758fbb7c54ae601a0cb14fb392a17e89eae76021eff083c6ecbd29b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=f74a483d00c2788ee63050b286753a92ec2172b6280c34a80ea347a1dbd8880c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDNSLS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDWH2NAjXXK6X6jgQS6Y7x6tb5JWMllmA09J%2BqSBu7eqAIgbKvNyI9AQXmUiwnGYTUJYYwOYhgTXhuIyCnIit26q%2BQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDChpF5b%2F%2BlVsr8KkuircA5QaL%2BtiyZWH9OkqUIWEqD7RSuiIkhu%2FT1tXl7mcH5W6qHZQ3E9FwB1MbizTbzPd96%2FgtHQpU8tzJ%2B1%2F2sRqNhJv1Wtzw9hJCzzSRs93HVsHlRB%2Bx%2BVXEKa1dVsFGGzA7MbtBakJtipA9L3WKeJweBan8PgKNBtZhiX7d5w0BWzpMc1QbkW7hspOQ2h6TG8de8Q147yI5SnKrEz6OEE2%2B3LIKK1tqp%2BBOaDi5xnkduDsX4Q577ExnsS2SAsgTaz2DEMz0V2OxDCibd%2F4ScGCxGYXM8ivqaySGpqmyASmj4d46fo0ifxEDI6vKeGU7nTr27MIx%2Btxgpwuj4Diczn6ExZKYS4C59KdMtecZTHpWxbJVIslBOmubytjrpsyhZV695TW8AssKreFBra%2B%2FaJJnz8KKN1ceVjWctwIoDN1KNcrOx3dMGAEeYKz4ZX%2BNg2gYn3tM5pXmuW02XdILJdK%2B1n5iMjImmoFLv%2FOIGeexTLHlTJCmJI6NuF5BMz%2FNLK0z4r7o7RI4P1m6RJ9v4WSmZHvg14iU9Z9ODs0MG3eRXCL7COrP13uhD4SWnl8DNudffb7DAnEjcfwxxXFmZ126aYd0GF56AEDMWkywPVVHJ5Z%2BTruyJqtNbFu5U5mMKODyMQGOqUBNjDetYDaKeK1ll6uddzXEIMTkS3%2BJsN4HrjOW%2B3lneIKHuvrAAGG2Mxu5d61L%2F0jRJlauO%2BTKus0spA%2FSlfFEsH2wGtWOEicKVrDloojXPTfM4c9wUho90HGvPOm5bdjqUFQ8ypT6WnSMXxHsv%2BRgZnkNh173OCbzXXoNGIj7ETTxx2Et9n8Ii5XffWQCALB%2BmZAVvWRNrI6PkkDhx0e%2FW5Uv7NB&X-Amz-Signature=5945c1b20b7413f40babff2aba671c4fa29c8d01cc1b75fa9dc3d23b0b25b393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N35IJSI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA7EJnhK424zecj%2Btuwe8QE0U6rHXqh%2FI%2F2G4g17%2BA0RAiAHovnZtqSCJcxu7am7AAniGyAcXie2G0a1Fgz%2FW5pUzir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMWQK173S9PV24xfjjKtwDm6gyMy8MQ1VreOI703svQhF4c5BiKJbxYmePUyAJQf0tax5eNBzEIyMiF8bdjuaDPPurR4XHRjEZ%2FRbeavHlvfE8jf7QmbDAgcZtthBXuMXqQnxcTzsnyVruCWk36MTtCEUUKFNE%2BgmeSWSVvLUPPh%2B3BdR%2BrqdeZNrr6CpzIVDPcpjf1%2FyCSGMdm%2BdMHHYfxJcEZcMTSgaQ3K0spWxMEL4wKM7SytsLpff2cdRAbk9%2BrcXCK7XNfOtHBdmzdzibm8uAQuSzAE0iz07AQK9iwFi8MEOG%2Bejr6UjduEh5VWopxEMY5O73%2BAps5TRiiUSbMJzknaaWy0nK9sKX9UgggC6Az5wj38%2FXnZOuVpeyWrpZbvloZnPZVgDmStiHLr3Ac%2F5Y0PU%2BbdwJ4EB2eEDCPd3hkCPvqO1kc3IRId7v3ew9PH3WThIYMUGxd%2FSXKx56vJ2ec%2BEjl%2BDd5Lkxq28AP%2F4v5SuePxkxBH4O8B0%2F7as%2BF2EZUCVkrM0t87HGkWyWuhtj1OYf5GD6pMwnyd%2F7r5BFKK%2Bhvqhx7FpzRsJ79S4m%2B%2Fnkau81QUnEIxTxErllOWk%2B1r3aeo6%2BPQbUYlArz%2BMDmZ2EddxiL95ezJiG1KEgzVGuIcP3lO4rMA4w2YPIxAY6pgGO4uWlIulNA2hJZ9hU4yCt3%2B7rL33Xzb8vkA6bddmFj4eZzKQPg%2FKOEzfdCXNfI8U%2BkJsZQ1FzrW3qowbO6QmQnUCEupO11vmqE6ZZCeiKK%2Fn08TF6nOgZhHV8yM5%2BvTamAkH2UfQB8hsggyDfF9QHEH6jxIqOZQWKaA8ExZvo1OvBaBb3JtmqUrz51YkO8Tk6tf%2Fhl8Ox7rILqeU5mOhbKm00VPjt&X-Amz-Signature=0cda32010e65f1cfb077fe357961c0e12e82c5d982c23aa0a695efe7117c7290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=f1860d67e7ddbaf28812155c6e8b6040b811d91ae82d7d529a3973850a9b7878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=77a0c89d749014a6779bbc319eb506d716c1341692446cb98a4e09e15e5a3332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=a06574c3642edd8ee9414fbc1d8ce69baf884adefb3d27548c5e8945f9f152ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=0c09c57b0377d4ab99191ac853a19ad7c26e758b875af0563038239887009c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=8dc128b07aa8f6a10733497697c8c2a86eb0c4ba766fbd934243f3fcf680c408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=41ca42364d466ee6bddcf7fe6312e25fb4a0c2bd751f0404dc49f0c4beefd236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=48218bc2cfbc831d4c638f51d437051db7f42b6ad7ceaad266808b240234bf08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=39e8d6b5e7efd82162959ac5baf7c2e18fe1e4c62197b8f65e0ae7dc167d7989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2F2P24H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDJV9V%2Be5wLarkRH0v2Q77wsYn7W3M2UULICpTQ%2F6zqcgIhAKOe8kGBL4TidBBXniVTKsG%2FCd3pXcQ%2BJVdbIt4yQRv9Kv8DCF4QABoMNjM3NDIzMTgzODA1IgyNe9kCmM4gH%2FvNr2Uq3APxdcSj5Ewy8xJXeKyhrrtw9j%2FUmrCtZ54bZv0mgi2jIoDWrqjWR4c9k%2BhUJlU42ApuLOIGDWX5sI8aE9I505fFgChjUt%2FSl6BTK7aqi2tBTWedrfFWEvW%2FoSOSdgiQQ9S4x1hMZpauqDADZFpjuklnKtLGjcgFxmfmxW%2FFY68w7ocEZZt22DtjCNmNa4PV6XDgBOKVGnvIcbInjho6YPmIjcF5SRswUNnQ4ozCFm2%2FLmou9JIT9goACozRGeM09yVGCvUssh2CsIvlDxPON5Kp2Xu12RmfrtMNfmJm9K6bX9nwcqNtxIlUb%2BwfwtkJk6%2Fz660Kx%2Fur7V4XiGlrQ2E%2FdeIa3Wt8SuOxKd0du%2BfFH72cHrR0QwHE5%2BfNNvwZ2P8egeDQVh3TWFf8KsDcghj4RPiOBKnHp5Uhvf3kAlhQSY%2BMeUOzPREf5xecqlBRwWPiF7jgPtnGkMXBWmtz8TyV0uIeWwr9wLI4hMRSbJZ2V9THFYRsBqwn0IoP3xJm1kMAUnezTCf8SV2g4pm6i%2Fe%2BNiGA03pNPMSCddRxoUtHxqzAdrdjgZU1L%2FdXWfZniZHVto9sjWB4PZzhMVHRZd%2Fo2%2F%2B6N8guUxtHglu6JVXHvnEIkaahd1lgvitZFTCpg8jEBjqkAT2uPdPPM7srJb5%2BCn8hNGII43Mv6r3xHv%2F%2Fdt21%2BfNLBymbhGyX%2B2JCvaVjvA7qdIffD%2Bi1RVpwTDpyezm1fb7fD49Rbsj0hdiVHDZViE3KcPYwW2IfAYnN8vMrGssl1PQ0z%2BPr%2BTEBQ1wCeCpBMIQN06pdBpZ%2F5HkrsW4fAVefEUHZo0IZIFjtIe1mBGIEh2jGEwr%2B80pA%2BRTNIWP9FFFkyvbY&X-Amz-Signature=6c61143f0ac6e53bfcd0fb001bff4e14c3b41d5da99fb674aecd7051c147f83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
