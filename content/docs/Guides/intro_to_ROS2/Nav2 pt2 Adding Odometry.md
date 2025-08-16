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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=435e435bcb6013b391c7b13e1bd7a9f3fba6fb63f602ba99f5065787ba544492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=f182493ffdf064339a275875f70361526eab09a03d50b159478edfa0a6d7c8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=6ded1975bed1c8a06312b680ce6e226344ad41c2e5520def06b44318c7bef9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=94e3eace92b1e7bba350b31506e889d28269b519357008bdda667f2ac14fa121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=d74e3a26ade7fa600235b5b0ca1abeb4310ffb6ae58571c63d01eaeb92711fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=2de3014f1ea05d2a8e197f9260cccd1976f7bc171bef6dfe810d3c08e87456cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=ed0e8d0e9c5e57323bd18603d6f9d38db09f6f646cf66d20e9017ad5aac71c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=c257350fe6db8ecc540caac3ea31856e20a9a09461945e9bedf6f9279796aece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=5c47f35e3244ed25dd3d62a7d4261d1c2b8e8d86f89715bf6d6e22cfad5a1d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKKZTJO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCzwcQZNK0Zb00h3g%2BdamwCa1A%2F5mzAb5r%2FNJANh4hXbAIhAJzXbj1a1FoFl2fQ7%2BeBiGencFzTbGipiCc0SrqdUxlkKv8DCHEQABoMNjM3NDIzMTgzODA1IgzW5iU1J0vTs6%2B%2F2Poq3AOqPz8dgRNr39JPa7o2Ub3%2B3P1MlLcMx1hH3SnN13AZ2qXuzRlmU3zoolLc2eGFfw6BYG68wrT5ryBaZigMVlMRtNwLhN5ocqoRd5BXY0MLAnAhfHFvNzT1oWfu1IYcw3svjpGiIRDwTQ59VupWntl7WZFkG9BHNGLbZNGFDfr23%2F61yCX%2FjvmdOASICpwpUcsHFG85HdGgwTsAdKeGz8YwImPJx7gUQftU%2F6lK6dWO5pdCIqqw0UvFIegqC7vZjYcQlgXlo1UTBKLM96T%2FzQx2TIAZlKhn0GghTSvSr1IP6CZUxGTLfk4WN9Q85O9oajPkyISNhrkj8fHcXZOH7oa093DVfJt4hSUL7R48eNx9lzz%2F%2BgxZhLygywE0cixjUHBgw%2BL2b9ZeemdJ2dUW%2BISGcNZTF7ggJjWa08KRJaO%2F4wFMvh8isTc2NRd0HZNGxxqy1fTn4%2B%2FlcJ2ms%2Ba%2Fs3qzCL9HjOKnI7gN9%2BwS5aRNnPIb1tI%2FIU4s68pVibavJiBXAnuDmufPxpnFXkwuNHvPFqyEvXLctL%2Figjm2mLnBakVOkNa9P7H30JT%2B5%2FUpSPlZkxL4xdxPNKXSm6pJXV%2BGdi3fJUmt4O4ZSAiH6iN1RlHBqlZt5LiNLi2%2BUjD%2B94DFBjqkAcqGoPmAn5UFYwDdpkBen3xCzyRjaWZxfhhrmNNyiI2aVRriaAv%2FyWarPWEkL2%2F%2BahQ%2B3s7GTl4%2FgU7f2LMRRs9UPsuAG30Y6%2BwqqlSUrWHUtc0eHrxjbT9NtNkT2MF6aQ4SxdDeCG1dTOmWh6D1PrvM5NvQsJyZq7ywHOEensdHW%2B%2B1%2FoEohUQD9svADqtVv0ewz7QnQQolfWn35owUESNXCvKC&X-Amz-Signature=165739608f5e160d07090abf996661fa3e00cb07535fc61e9fba768885821484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=c944e686459bf3263fefc48a0263555df3f711b48da6f4177a43e1ddc197cf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=e3317101b2d4f56ac2e17a0eeb73b9e436c2e6d3a26df7c71ee41faa9fb2f6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=d3a44777a76f99975f0b65814ccf3b7438e8fc40c76da3432937cf3757f731ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=3578b4f8be092e8732c87cff8e276d7a74fd561e64722a5a8964209816cce00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=8a405111c21158197c30e8ba5efb30b000c34d661d60dc69924751b90766d539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=37f7284af1550c16e0f709e2261ce3bc1088ebe978b6b34d0b035aaeb92e9e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=c74346812d344dc1055b85d39be8ae757b18f7b7bd4673a03a3606881a8c4071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=23c6b3123ac439028917169ead59e4ca4f6c7b58dee10f47ffde46eef0c75536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=819b18bba7cea90e2f1436f90b3e6c4fd5144dec28bc68f5e3a8dcfdac4da5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPJAR2X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC8FED5FLHQBI5Ip4eQXNz5f3kinAB4iCAUlTQ8tx%2FQUgIgWNm6sMv%2Bey%2FOkXhiv0R%2Bb2usPGhaMvAjMgL1LWhzzzAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDd%2BeqzFcXohL4UIxircAy0QVdSGl7pYIsex6385UD4PHQ%2BrxtGHy8Za9kyqvX2GyPdXQlFbl1JBj5Q8r%2BlNl8LbEXLFBENEY7XpEo%2Ba%2FVUisRtqCbbbBFtaMzCAwQH7c024nxisPcxEs3QZlnkzzOHmv9YBSQQCtLxTjLbCBQ1LACpk4fdssZ0RYk2%2FwJ6Q%2FD7Lf7C4Q%2B37fQVzfCPT4G%2FRzs7NpfqM2YxIm%2BHVpXYMmvnS08F5WXHxnHGTDmUszrdc7yvQZhflwiewzYDsVZE0Rrt7W1%2FPMZJK%2B8ySu3U7ZWhH%2FQY4euyPCsi651Z2HjTuBYwvGiGG3mzRU4uiCA5EpKG1clcWgyTYn2KZXE2mNLYLbGoS1nBLz0mlUZxMKtByPLR%2Brk1sTG0V%2FWW4bLwQKuTttq%2F5CXh%2Fj1U9Bcttn04gbpzrOl6TTJam%2FqqYmVM9u6kevMVKqC1l7yN2lq2qXyEIfHEfBkDKtfiGciIIZDee%2FwV%2BKbxQC3xlaT%2FgRJ1%2ByYzR%2BDmNVOuUM9w9E4nk4beiEs5xEm7wwk7ieoC%2FJ6Qup%2FZXmN0YJotWdVhhs4MmPxtpNzhsDIFcsW9V48apiX5CX4oSvB8fM6cRmPrLsILoPRFksB7FQdnhB3gN4I%2F3uZma%2BUFGHyk1MP%2F3gMUGOqUB%2FPUDPHPfKbJY5pTcZeER6dohEpGBWgqmwpkfV3Pc2ubXXB0qZ8qMPOPQ0HJ%2BaiYfpfKmekXCsfbOo8BjVUaiDtMfmgDTI4lMuhTnKlbtrB2UUWkJd7lqox4VfH9uYg%2FcOd20taad2d0IMIvjnrMpb3RaUf2oB9dy5pM6Vrb3klUR2j%2BlQ8Vx8mD97Pf9gsuNy5sOhbQxrqq9LhKrJsDRC%2BZ8tpWG&X-Amz-Signature=ad7304d10a781dae135c4dfcb61a2bdacf091cff2e7caddf0c9370f58748e2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
