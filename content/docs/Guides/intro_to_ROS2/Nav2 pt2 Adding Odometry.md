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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=b48e018c38b3df308f3f402fb2fa8509aad79f133fb4e37d2e5f3776e76094f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=8a11c1191610745e1c25ba38a98b21e7c4caea7c6fd87b8177e5b11f1198db32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=fd2071c8661948bc2c40ba35d21e645afa1ff7eeecfee7ff51ab2f8d29ed4043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=f662f2fb7c9639868cb9917eac4366b3a64e556c64b349359b59ddcb20006483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=13457916f952516d4df46924cc96804d7d7e827d6f34c880a45221bc44d6a026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=c15c0b5e5fcddd9c4118607976de11283961cbfad8d8f7b0c71970ea69b4789a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=cb0153d2db6ca55e3aa4d28123bc119d210d941e4e965007f265902ccae075b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=fd24e9dbdc047a0ee221b394e517240c036eb9e78bcfbeca70f09b560a03458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=5e5b3fd732e772d490203ab02911918782b6b52abe24bb97e3ed6be30245b739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNPFWH2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD8H%2B7nAT6g3xWvNqPlE6kwiR1j%2B9ijCOUr8hW9%2FrMAwQIgTV7vxFQf7h5fdwU9jaNyR3WSsE%2BgYj8%2FpMhqTfBqMwwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOGKtnK0Mv3nGSR8WSrcA9AtiC%2Fb0YQVf2h9NbFcIPkcCxWj7sCdBeS9kf65jsfGGfXKrs%2BaycVsNXH1dUpejZDlhJoprvD5v023M42lL3IxjATfv7O3O6Co7risQX4McIogBrhPLrScamNnGradDAcF6fjkhWhRqyL9e55E2nP9gRFwLENhaYkFmEFteyUjM6oLni2z61WKL6qcKaVHy%2FBebuysSnZayWDdTsOxtwdGqed9csrV8xThf0Gsv40QDBlieYRGjeUTyFGzp5Ryryj6IbD6pakD5%2BdTRp0dtobJMGaS3pgL6AcUNR6qAqJQPHBlYHPW008pUM2YMVHhDAWYWBFvxALyRKAho7eb6%2FiuwxWrLDVg64y%2Bq72YpglcJegS3k8uT1n7agRs5NwHXP98GpQ03QBZr%2BCJ6ZyC%2FLe2APSiXFUmDEopd7kPkJd5S%2BbjUyyjYtCkBxxiC7vDHkpsXuMWQkSGz%2B4oxNLKp5%2Fm1unOBTNor5lWmyCsWV2Co%2F0ytfrigMiEJ9sftLxuQ8pqlr5PnqnjE01nHfItjSbR8IoqNXzrJM3GlqYlQDK%2FMgMkj1qWGBvqtvtjvCFwNv6qbWQFzXpy0h1tJx%2B%2BI%2BDDxBz0SnQb2GR9Z3npcJHSm0lRE7w6TX3lgLpzMPb5ksQGOqUBuGPSY3k4XahpGoKVfq4rXWRDAcD9Bw0HcjgI17ZIQG%2BKAzmzztULvhK64wJRRPVwjUnlgJMjWEkv%2FQMl7ia9Sba3f0GyMfMz5cWei7zvYhcQO8b%2BITw66FtMXyJtuJiPsWrkTbtDu%2FCD8EDXMzTEWPiNxAd49TuT%2F6rwz8U0M04anuoWBt3wZI3SfrV9dCOW5wk8xXrP9ZFnXNvMIrPXFNwc8%2F5A&X-Amz-Signature=526fbadd47f916ee995b6fe9e63c8eb71fee5e494498b0ca39425bcd64ff8632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJLB5IF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1eWzqGA%2F16DfR63nNyu8TLib71b0iLkQ3QVrP3yLxDAiEAmlIUYHDhUlPWgXjtpPLapq3uHOGNNjvktaGbqVXFIscq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB8TKuWpXPrQbzPUUCrcA%2F06UqjC6a5AZQfkn3WkQbGEZe6mr8yIblJMAh7AoG6zIWqHSYeYTF68GL0P7WxM%2FvCMO8QSchPyj5s4xZc7qHLTfTeu7NYU%2B60AlN57oHNdZBvDhRO48bJnc2pLWa6j2s92d7NR1uhUCJAQXgTU8cHkhXdUVwctivdN0g10yyKG8mK%2BDfXuy8EeCNBB2FIQKkIh7Lw58rV%2BMELP%2Fg5TAJL9zl6V2FL31IDKXvKbCgLogY0BQv9i%2BcxfOEV9QLdwpuGohGCmneGTkJXz%2BYPriOnc2h6wbh2aOmX6aXi950WejCsYSDErQTVNhRiRk0eezptPnLWMiLt89B7TWLSyX0kLQAGbmmcfoXSH%2BJBYRJ%2FV%2BK59Pyco6H9AgMxfBS3V0W4ZCJiwFqJDH9HBpdlbyig2UuTpOAeKIhli%2BXtDvZxvk9vwMtaTfrqx7YEkIl7vTWoDbMNqa8Nb22xcUbdlkOI8irTiQDeEGuWJEmceBbFUSp2CjIM6MVDBtxWrky6V32F0Q%2Fe2ZFm9kA7CUXGXb%2Bis%2F9l38%2FA7z5BFR%2BG0qjEY7VDEdeCKyWXqr6DCNtg0qdyrqKvPKJ%2FeVVc6hNr8yyobraZ1%2BQIahnMygJD4xX6pJgjB035NYPgwiua3MMb6ksQGOqUBf6T%2BLK6BNZLmTRSgFeloPhPK9i1diWNfmPGnvZ3uCl%2Fqdd0ODXE6ja%2FES4ZNVvxyQakrU9tKTBBVy6XKIB2JAXVPOy9W7QeDPUhY3c%2B0IFb8S07aG5qvH8fzvQG8rB7fd5Fst7F6nYAv51yG079ZfpXy5VME3QQp81zUJ1T1W1QTf%2BiZoC6nJttkrqBP7bmi9%2B2sHetFNM18uQboKGritppjOB2u&X-Amz-Signature=024e820562817cf82219c5103935f8ddf172278fa77a1ff48ae73b62dce0d002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=9dfb997efb0192a36063e5c8ad5596d0ae20bfa0bf4d0743c84cfee8bb645024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=ba337a3dcc899a4486e82097ba023ed43d766a08e54f7a7a7e8220c94f42572c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=fb8f9baed5733435d97c8dbad979123eba2d48c58a1e13c0d3f1c1eeae881152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=02218b52bbabd680b59d9d6ac39682262a6376de7a6aa932ad15a178737bc5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=3e57fc85ac4bef05ffa6204a5efdfea38cead0498472a0565052c8070a7d7e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=4c4f27f3bcb46e2970d66775e7652934985581a587f852c618dd5c0e1dded941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C76XNM2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGLJApJjmY6X29btBB8mzFHrf2EXStil0Kx5l5s4pRGTAiAH9GsLaxyLYMwhnsS%2BrbIreORNpZnwrgNbRpmr0P0A6Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGVie3CGfwdQEvi5GKtwDz0kqMQa7rmGwHcQZEAZEVtM8pJYVKrksZekc%2Fniuo%2B3NkgpzPqX0iEGTuCwCYE2CR8Yb5w7B5KoZPzS9RiZTVG6bwnObofeChnzihfCFpEh9cX39t%2Fzpa%2F5gS8pyAwaFkWEs0CDjGIqTA5f%2Bdw7heVlPR31LIbqygFPqiYzhGvGbLaaI%2BQY4z%2Fj7hmmLyTxtIHE3BroN3edMXgXXIyWULKcycNCxtIDcCJ6isn319IRR1EkShqchDwflM6QkLQ2J6AZqJwFFzT257DEy1TcCV78RBDgqn8NkeHGawSWuGKOtJcNfZ%2FAHa89%2B5UcEtWhzmq5fAjAiDggwxKpXMV70Dacp1MSiGbDsi4PT%2BEzjqpf4%2BZm9VMpdAzq1t7o2uysc5GaAzN7HWRlhlDTvscQnNP2Gw1Tm%2B8yR8dXEfUoql341Ahn3dtWHME6pKmEY8h5FXFHlMSwTp%2FJ1jY4IbHUJPZDPPcFn4EaVLManB0gTvbP%2B8d1DSmuDQQuRbXDcCUyz962dHFZNjBAtFd%2Foe%2Frc0btQGhCBW7sGFsFsKClgmiigtzfgkirHAxZpQwxuJZPQCkMkgYRU42ywIvKYdsG3RYGNYnpsayGUuZ5ihjcgGk%2BUI8Hd1LhJox4wE%2FYwrfqSxAY6pgFSvQRZKSH6JkoaPnJS9WSYFYQmmmnPalXoceptdKUIXs09fshiFMSANb8krV47SA54X32%2FzHt2g51USO5xdkTMYcIanPZ0jFEP5ca8GURCGlBh%2BLQOKDOjgFJID9qvYLGMGkP9GSa49e9Vpp991aWpVtMJp6tIuuIKuDVNcn7iIBn5fq551VAaLLn0a3pRXFTjR8Ip1BKXJhfM6%2BMnMy8A7BhZFJBR&X-Amz-Signature=e5341420d9a395e7bf77860d32244df77c1408df7b33e35b92561dffff419281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
