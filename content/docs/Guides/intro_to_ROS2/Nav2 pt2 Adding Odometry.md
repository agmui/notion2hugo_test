---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=2458fc0180933b6a6968d78491cc20f7d9a323ed6bea881427538cafea201805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=355ea9f1cbdd4560d5b431129d97ec528bb441205dc806db9c75803fdf220c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=83c789d7b6f7d5dc65ac84c18cd9ba8ca45649938484c6f35e54e24b5139d68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=eeb0e75d895f45d482170ca7f66d806dfcb9a157cba4b2303ab80d16dde9c9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=09f5c9dd7e7b8d24bc4be1b30bc518772851f6a1cf6eb8843a7a23488d32d42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=e70f8cf005fb3af520da9495d2bb9b23a38dfb59e6498aa59db5b5b768e9359c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=806b25268864dd25a833b737a873c776f9a94b430c5b0b821f64237d66fc2a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=ed9d37d1b0f81d2554d053ca412c75f7f4d6fa3277821ba19a2f6c0820ed8d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=76a311c8e1c32fc43a4c1a0e4f67491791eeba977c36af8fe5a5dc10392928c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=d59290b8e76229daab15e3b628e3103355f5cd7c411070198f8a3f3e76918c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4JIMDY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEI9PopZ4pz7FcphLEM%2FFJECEg9lQ%2BdRPiIDgbvInriAiEApNQk8hbDE6fwPvdXfeRZoumTWWkUo57r5%2F7mDIeHKHsq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDE%2F2dBzeUNH1Qn84wircA6S6uSDqRHNRPmsv8hTuUUlx3hvC%2FScIBetgr%2F0DJODVrlF1fLchn2B5nnR%2F%2Fdt8O%2FdfVW3%2Fju2zj%2BYPkw6IekppyxUKioSUKwQKMNvZDIm3o00yxZs2Oq61CRzGZFgeW%2Bfy49XLNs7A0IjtxaHMrHRZ1ec8Al16qQa6swxB4zbKxisO9ILBCyIpxSFFvH2Y05gU%2B%2FifomrFCbKmwunEdLIRkacWgarxUZTClEC6zdZAemcA3Pc5MIZfvZpgNd9Vyb2zDVvpdQ47Cgp%2Bqwk%2B87Q3ITV%2BU2SQ5W79VvG3fiyTHee1WOjA7aFWCN0Vm8%2BdzgqKR2VbpdeTT6qDS6p58OHw3buyxgF8D9t0qJWqkhdvbGz6Qn07Mx2g1QUpRDFcGLazRmX6rq5MJTTuBMANYvUtPlNqEo2OTSBLajYdYCL4%2BxqPUcSWJRyLXvUHngSp%2FBE8HIZQtQJe3MLYKPh4uwcXZ%2By0OGal4GNYlibC8Fqj59bCYwrldata5uyUWmjsAyIKwq4lkAAC1Qq%2BSSn3kDZKTRUUc4VsjiyYZtlBCQxL50q1WDgB0%2BdH5gxAEQ3bUsg8032iDIAyvIu63Ao1cvATpdyILtpVR69LBSX0Rrwq7yv%2F31yKlW8lvT%2FlMLPSvcQGOqUBAFEHp4m%2FUkqDXYG%2BiCknWjDcEujHSlKRL4Nuo7PEP2Il%2F%2F%2FH2nA2XGxq1sTiZ3U9Yb94FAVXi%2B8Zn6W9kYPF0bwUmTfNNd4Lx%2FAs2rRVFvUEAaGxDK9spnABGiaUbqTH3DtY09xEbZwz58UFwhDo4mKUI2eWJZSfNrGjj0qxYG7bZD2uKp5Sev6eEy33tULIOWLiC9LGDUEeD9Riy5oigShFWn4S&X-Amz-Signature=c0571fc98c41e8ff3bd5b41cbeb6d116df436296591dfaa47ddca23cdd030023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBGFJUJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eL3fprBeS9bnb%2Fu9Bg0USpuqg6HPu%2Fb4xZdlZ6IgkgIhAMZallAsn0V33mf5v0h4ef3T891edYqmTcBnGifbd2%2FxKv8DCC8QABoMNjM3NDIzMTgzODA1Igzi48l4rgX9msHSjvYq3AOPqOdXGAxvxaPrxQz725p3aVJuhQZVyxQPTvQqIAZr9HjOdAIPPeC9nxHUaCspD71Z6JcFUNifLB%2Fhzc3q30SDl3Qu8xADEjOVB9dplmMjglBrjq1jbZVcDfUraCEcRg0xdPNr3fI9Aaz2KIf2fnB%2FOWml58%2BlCH3Ru36TTmHKxG%2BVWiWVKXKcVDMi6JoY1qasV2SJERssAJD0qietIcUYo8DrhtHB332ngELESY4VwsLtNfbNGkZuK7sqb4ymxr%2F%2BFrrWyavz%2Beb8q1dD%2BcbGSdrMJfIzR194nhkjcDKfNB2Faz7A01oqz%2BFHGZB7XzYdA5V09Bo91wryJtp3UKyUFr4q5BpElYouegFDvIikiTBT17r%2BjRMIADDT1TzQGyevWM%2Bx%2FuVSg%2FA597KQLBscMVXCSEAZyAftktrALAvrpLJfJCw2cd45hX0%2BKQOXH%2BVjTDnYjFzq3uI7eIihyIfvK59GO3f9Kc3yFKxSSU%2BjQ5q7FA5JL0X5YuT52u3%2FcSy8co2JHQNJhhMz5yUy2wJ1HKf0Thhq5J3g5DB3A9OEkDS6mjr%2BO43W4s1jwyKlDfmf8pjSz6IncuL8UfU13oUy%2FAC2ghA4EqhxUScOZVJLQSkx9ajsIAl0upBISDDx0b3EBjqkAa2fm%2BfdMAzVA8lkoxsXFvDr4jVrm26eJNraXObVfOR7VBemxpuKQxnQbF6YtUw8mKe0vf%2FatRFz0M4v5B9%2BtpXhbt%2FR1e2f4cp6A%2Fj%2BotAveJAwOK5jN%2Bra5LxZBHIsvCZotDAPbax816qBXFX75p1WkQt8ygl9%2FTQnkJbOk1Nx54vRewZ0Z5q4VLhvJkiAVZ9zuh89mZJrkryyNw3MgbaWotJp&X-Amz-Signature=34e4fd4ebcb1adcf3cd311b0a11f9dd63278c674687c9ec8024b735e2a69c5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=ba1400c59bdc527f425a59f499cd07ee07a808b79e89b81f0d570e04ea46bd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=e3fcff3bf95315df7c41264e28f5ef02a0c5e9aa0b9259f882dd4927431cf476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=ad574a593a9e5b3b7e183f224f680cb504b748f67c1472261764774078380e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=89d4d75c70923df9bd58cfb1e72ad342170b803c5d1c8fbaf0da3b9e431c6c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=d15f18686f2db567daf3ea651131c4d749813818206f8fe2c9e49b375fe308f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=1ae4353e12e5e27c337c5ae9aa7ae8472b1e438b5f99c6bdde776b3effdf36f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=90119d2971cc2c91a1071d8e04636755ae92690a2f4f45f50caf4886b2275125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HLOS4Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDFEz8yzeI7mK3rcJediBarCka0cl0QpWu6dtt2AtrPgIhANmmdBak3NBZ5XpZWRW4AafnpsakfE5A7GSLbbyr6QucKv8DCC8QABoMNjM3NDIzMTgzODA1IgzPndmnPXEtrGjeVNoq3AODn6QXzkeVDmx1UASDb1t4sPMgYynswQo0U8JsD9C2EJqwLjadoCjgj9sU3pdIF%2BKxxf7I1%2BnENHcuY7L6Z21DYkDG3bCu1ftC6jHyC711Yp3QnY0tJyLNqMvh805oZaMUTwR02eHO6of5RLLB1CrqlsK6AZwy14CqAmo3%2F4uhGd%2BT9tPv4u1Ua2Hz6jpEmjIYx5sM1Ucw2ktcnQUP2vEmPyevGPsQCbBHpujt4puD4aI%2B83l0%2FrJw5iHEjNrfDfbUUsKMF%2Fq3OdXw%2Fw%2B50CTN%2B8ydwwRLxLr8CByiNFM2w2CzSDDct0KnuveJ3wYbghc9PMCKgR6RN%2Besv36NvH3uP%2FpW3fZhPDjYRclFodEXchzv0nCtLGqFZuK84lO%2FtOLB1PPBx7hG3fIIrIH5Js7tWDtDcdbt4vzL99LQGhMPKEtq2D%2BoASq9kUrV%2Ba3QtQPOxFhNrLkopw%2BPaiO1ROpfiNI4TnBjsie%2Fpj5EBkxBd3dlCHIXqBwD3OwUHofEWPjYMxsfj5J62RAuDVNYQD9VFD1d2sA%2FGI1PcPbh9eMeV5V4c14n04OsEASbVora8Iq7bD4poMazfTkjsq8pX4wcUQuSvb5NSrtTD3TFBqesFUFCeb2JrJaVD%2FRD0zD90b3EBjqkAbYbxVaptfuepOhi6x7L5PdcPtkR76QAoGk0bZXQpHvoIHdQtaBlokoEU%2FsIZYsRiXs3Ao%2BGIOTIdqSfX1e%2BckMmd4vQ8sk%2B%2FUrHHJa7Elf3V%2Bx9BK%2BMsk8rGrIQIJHokGLud3uJI53NtNNrLNUk4B%2B2drwtoWORn32YGGcwrj7ZmWByj%2BHjGxLxZPTnK0JNhtWGwqiZfQeltPkitWocjYzsS5l2&X-Amz-Signature=384330befed83c205535c8a3078ca6cfb61427229270ab941e7a7c752b4dd735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
