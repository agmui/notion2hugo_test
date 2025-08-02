---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=8492bc8b4779fe8635fda22af436e035a19e9c53deb36c66c61963c27c52a101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=764828b1310b8a34ec405b0a52060d6d8fcf45f9b49d5f287dfef426db2de922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=9bf40ef0bbe09c9e57c290bba5b12bc58228998493001ec7120b9739f09f70c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=a180c9520b420b1affe9f510b496c5624c95e66c999b298279ccdef91d87ade2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=3982a494349a723c3c273f2f5fab6c1bf78c63dbd8318f880733517762c08a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=365957e6f94fcd8a2f612d681a13d77d980131cd144b628a6f8702d9995a86b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=fe60682e7b15c5b00c61ca04aad5e69efd32dca8153e061d24536da40d181de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=9cf9fa1ae95e75f84d5e72370bbb5d4af8cb73876f2031297ced28f0f0085d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=31061a23841b0b18ae84d69ee8b92194a8148aab6df5a382a8affc7222bff0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=93d2fb393f45753a8d61ffc30fb124870c25d61b71cc850d046b001c864ac727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMIQL2N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeL8RmNr5btzz7xg%2Fi2odbKAOEhxb%2BoudqDGA8pS5JgwIgG2e3vN3sBrWkkkm%2B5LaBcdXCqfeQ6m%2FpopL%2FZgRA1XQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ59b%2FyZTtMSRjGJBSrcA3Z%2BaTYkQ%2B1gRpkSUSB1uijiD2X6Pfdhwxr4y3mMj30zkQV2cm6ehvDUVJWk2iXjJJ32O4erC%2FCLVpOUIqxbOXiZgWzriKceL5D5WNH%2BJWCI2dzqjkijCUiPeE7IJkoC%2FJqPho9w5R%2FwSIT9Uss8408HgHrjlvu%2BdXZQmzZIpQtn7CjecHy2qBTl2AUhzf4TAkSFseG1NuoyINUWkwSMlS1vcBTk7xSJLWIb5FoepY9kAE%2Fp6rkwXAU7yKnes4MlPPnfKZ0aT%2BkNa45EiXINOJtO8EoYICcSoiK4vEcp6lAAlemujQfwkuMpAnhhjCHk2CujvCO4FZML7PwoFgWrlT97gqRyLCr9ze8lRhHrxD1NYRuq4km1yxozCZWS3%2Fe5n4cCQRkvR81ibbO87iCihkp1RJzFTT1QwHfZBu%2FJnt1gqUekcAWNPpA11qTfZbJRKaST4%2FO8caS45Q70q2arEM2IqrHuLUlmcPzbeRJ%2FCl9Gy3GK9qQ33aqquX6%2FTt5gVZvwU%2Bfj%2BMmKv0oGcZU9COn3fYI9r6gfM8N8lDQ93QJXLWtNY6duaty8NqkWte%2FjMeF6p8XZ3oBUG8qCRNm9Dbe8ahQx4Bh9NEAn4BOPVrM2%2FOiDspAOFc%2FLBVucMLPEucQGOqUBAXo1xVH2fjnqHqRkkRZ5Bv5mPVT9TkXJJajnzYwnAHYPiS3YXBdkJVdZNCiBKZtoVYnDtm9mbMQWmKgH59%2Brg%2FgXI0XaD10QHtD%2BFGz1mSibJvb3XulN%2FccUE%2BCvzgCdbOyEZmtfAemJ%2FgQS4RQ67F2I%2B%2F8IAs0%2BzOCGPs6s8KgzFiy1v3QeXon0%2F%2FP0L%2BmP5LDX5vHixU8c4fQud25%2B741BMSkS&X-Amz-Signature=2492c1d36932487b5e01c4d9c80677ec923648f81a563e7b2d343c90288e6869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJ4F5LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauSWOmk75644uttjx9dcDMwHY0G1O9kB8hp3McPbOVAIhANzu6EEoXbrqjHxOVyZ3LrEe9IjD9vKLX6iAM2DQvLMGKv8DCBwQABoMNjM3NDIzMTgzODA1Igyu5Vr%2BHGUPSm0yW5Aq3ANtYOSTNxMAPfsqFDJMPdETC8pUvxEj4GOqR3WgSi1Ohc2%2FpHJqpQkxTyLO%2BimBvAyb%2BmtxVYYUWMv7PyitxXO05DgmrRY7rjvVSvXThTMNFfvikcGf1aJ5LcsFPgbjClt4z%2F9tZoEI4gSQLp6xpvLI3FQbhklQ4NgE70B2PYMujQHJmJWqiiUot7y7vv8QUWEP%2Fo6d8c%2FoEEMEHKwfrI4TOs2OYjki90VCavlaf2Vsl1Q2bzefmf7aHcmAe3rm4fUolsA7S4aBv5N%2Bn%2BS3WMTgxNupeaN3IGpaJhGRCJhkY6ZuS5YK7oNuVWTVQv7h%2BYi%2BIhlwALv5EIjruyXOKfsKBOkN6mjDmO1%2FsIOqFLMUpgiyL0Geq1fBqX0DbRGRQ9bjM7tOJnaqo6A44eUh2jHrGNRJkc1NydQsHeNbjkMt6Zu3xig8nwWCEYOLsBf%2FVHCOlgPgJfdfUBvVNEk%2BQ2tJ1WGk8yA8e%2FK%2FmrbzKJEWwLWKzWOkysv7q8g2tzz62rtE9566eR0%2BqgYJEu9ZwVEuZKFxRMZ9r2iL2%2BNRnrccLEWyYeBfV2TuJo1xFsKAxi8snvovkWazVRh8XIzusHSmDz5%2FJR0JOMTCqdND8uGUZLpnfPkzQsvjZJu6SzDsw7nEBjqkAalIeXk%2FdspT7LdvN%2B1l30kxTZynXFDjyBrmfd8BnvYOnOgMpNewbdt1QwfRoQkT1NbnCjAO5aMLU61rrt9QcMf3d5VP0HFinIOTc6mDOTRZXucTCJkVOEE5RE%2FfDYmPv2ub%2FtgO2O6mYqS0upA2X%2BrMYvZooiRb4faU6q0ehnxkQJRHuUitYr5xMfdoRTWfHPDQ78FSCHsmgBk7hyKcIQ%2FZIPxk&X-Amz-Signature=9395e0ac962f12df3f608bc0a49e78c2c1829d8a6f3b9a493e60c164df6eec13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=be56d3a18dfb2385b96db18addd4f147546b4c9b39a05b2e4cd2c19873ad5285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=7d3178574d2ffe963748ddf743784f6d783158bdb64bed6d6e9a6bfb711f23c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=d43aa8d93008e32636afd9d25cc4f82ad5925c2fa7710ad24adb3b2b748d8378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=ee43c9dd38d16f1eece80b37d7d6c318852fafa9c21b3cb191f499dcea1f3cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=b94aa3b1ace3337af24c80d5d542288d7ec3fea485d5d88fd1f991f121796d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=f596266b7b631452c10056cbc0c2ca5687656928d4c0c81229069ed368bdbf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=241920eadeef703330014708b74c86944353e62f5677745e94f0df90cfd5c8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCUCJOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FmwudMHMY6HfTyzfK9j%2Btq4O67EE7Mk4tmFd5s2SCFQIhAIVCdgs%2FPesoEUSRHVGNf%2BXlNbevXlgEHRlWeQ4vhaj%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igye46Y%2BVzaqKTK26Ywq3APqZeV3gef12%2BNj8NLzyQFXVRw0LKp4W1q%2BPaBhjAy4NhJfGPuciKOdhTZOh0KgeIDK9l%2BmVgNQjRGX1WOzkIPg0kwOeJcP4psP8wGLgWdZsu%2BdyR0rQtVMJoLIe%2FOww%2F5RI0tjmDLF63sOctRBEzt5qBB6frcmBPywYYxJnEcN9hK6TRXGFTrjMomBxfTaXvE57VvZQUJHTjGQ%2F7gRTB5CZXXjfLaCqPOncTRrh5LdrZLOhrkWU3n%2FP%2FCZ4WrIslx8Q%2Bn%2FFjdHuxbXZpd7cSwwincKFx1uen3tqzWcwPJXtWSPtZvqsvE3GEwsIufpLR0JJaGxlMLHjuj00l2dQ5%2FUHrY0tcIFuNaU4OOL5EnphXzM44ZuvlS%2Be9hWYswXXYqeh7Ea5L6teSm8uSNGIUA6ENshB9Igk9QN14zY1DjUSE1dcMPxIPwPEVmuoocatthjma%2FAGcpPJgh%2FPDl2nSMS53%2F8YUjEnAV5A%2FgE%2F%2F%2FvtNsbTC7og195kEnxJwjh1HtA1XlNpME1nLFWecxSrNdaVwk7KMJCernqriCH50frYB%2FRgZxl1xF0YaFg0pNyjYGexJ3rnyTOOFTaRwF1c9LPXQ6kKMQuXFR1g4hSMF447sPAIDbLcJMJ8U12nzDQw7nEBjqkAVe7Rd4bY%2BfxgVLi7cycfBbkPjZAMdyuR60KhiP94p4G9GUdwKyO3PvlxU8znJd5Tyvp5UHU30wP7OANQJxAWBbHkfovrQrwfLlYJ2WT0fh%2FcambdcqPSmthH7ZBjMPKvPsjYkphxO6QtAFSmzCJm3D%2Fq4aZhv5KK6SAT7CYb7wFXNIAAagN6RuHFrfPM2N%2FkBX1GzKHSCjnMB%2F7bk3RO8rNkdeR&X-Amz-Signature=4f3fa66700c553900d50e9065001b125dc3e92fb0abfe2ea593339a145d5e2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
