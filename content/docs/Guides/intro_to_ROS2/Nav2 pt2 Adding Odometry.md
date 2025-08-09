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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=a2c7e935ae930c03560d8d2036a2eb59a50eb6cee35ffc657728baa2cb9b08af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=3f6b30633def9bc44fabbc9e08c3098e7cd04e8a1d9164e13e93889d847a0b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=2e2f2ebfdec00e4702e7d715276e5e4e173997474d1ab4b73e54045e9bbe8f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=510240f9a7478572d4a0397883a9b9a74a4e3a642e255e8735769bcf540a9707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=ddceb0a804c515199e7d0e179d9ce7f15c5b0e40a434aacbc4b7df433f4aa36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=6a239c7d456ce875cc1e0d04a492e98032460d9d1280d5c6cb8438168eec565c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=3e5854961860f92153472338eac899083e42ba4c37ad4df6136c74cdfa41d93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=546f83e6911289210ed15bd40496daf9081cb469ba382f28ffe1f35ab69b9c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=a78af8c7fe407385bd8f53ea42fa4a6dfcea21b67a8542ed92b00ecc89bedfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR4HZK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIENHX1EbviaVgk7EKT3DoJEcUoI2YhP%2BwNSwii1JzV3GAiBLiR18N5D7GQLUBZpiPPGU0QifcQBCgDErOUG%2FD8KCVCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPkHRcVTTl8IiHtEKtwDFD24gQiAXYX6Xe9rsMU9s3U%2BuJOQMnsAqmVL2UHdmXPChVhCaCFVfltDSHq8qXoYrGYWhgpAU3Vi3Xx48HozKsRoippUTNhH25vGJGc4oOvGrdxcYwIkh%2FwxePJrHj%2FA9rbCpI37SkkY983qrDUz82sIqiR0j78L0ips7YxUxxqUapB63NPCL%2FG49SYQVQ54xu5za2%2BAKwEeIWl0Y0HY054eX27wfk8CrE4eJ94bBoK41K57MqUpFPqRo5ZdWBFYuOVlfRchvKWm%2BA7jc8ahxIPtzuHMlf%2BniciA3896zL05bIakRR29sTN%2BuboqPL4yTwYyYCTLBxEQCgeh5xvp%2BrKr8a77dq%2FkKSf4ZiI0v1Ssj%2Fdhp0CsoEHHQdfTs5KkPtOptCE2%2BUOY3Sm0chns7hUYNjcj2BzJEjvLhnFimVYBOtJzyFsupvxNyzfTs9S0PFnWNhFdRVAn5ITJIXXHysLGXa68AvJUmlGSCkhOKbpjFbfXXBOFBCk7jyXZ9SKm3g1CHvMt4LdXSHCLpGd0l37dRLv4Dh98bdoqLakaduS8%2FK7JbwI4L5WBPbMcczVYR0lu94mYJmuSaw6hEM6vkd5S%2F60sXDabICw0xfmb0Omt35BkAntdg7qxT4wwzMTbxAY6pgEQWmnKRHHc5lnCzVpIhnaL345hH6FjmS8cDMWe2j7Ttv5dYBtp8B87MYEamsHYguBxN2r9hbSql%2BueQSPYn7chw6lp04RDT%2F7QnA0ktSNOIpJC01eiyuva50J92ztR9vikVBBs9tir5IGtpwmzjRvPPeqLzkdrfDrry9xwhwe9rwYiZWcyP42n0Ay2xWjHAH5EQP5GNTEFyd9LpghQFiz%2BAPBjRRrX&X-Amz-Signature=07efb364db2dbe00d2d22b32449a514bd064d74526f236404a82960bbd463de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSXAWO4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFOvowdWkErEIDoinHl%2FWrH20bj7KFJt8qpy9CpdYJmVAiA3mW7cVbXLMpZUhff%2FLyQTbBXNgYkwPtAT5GkJ1GtegSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLRDFZL4XL6rQ9OcKtwD4qDV0PcEGKYKJx4V8P%2Bk5OuG0yvz76SXhlCK9rPHiM5dCXdONenIv4gCEwBzZqcLv9TsvUU85AedAtYK9vHPOkjXXhiE1VgXwz6lGZj7uNuBfs1x4IJoFfGdU1qQ2A1%2BfugQkoonMHbc%2Bn2Ub4TymZ02X7s7IoEWMSw7bDlHpcpRIobA5gBTPl1BDbipA0qWtVCeYyUDkru6B%2BLHbvVKVyo2d2zoOCM9cdl%2FAJe%2Fc2xNT6uanFplxKhu3HFznJCAK8EyDDUonKqnO2NoX%2FhI1KC%2FBzTZlizcHGBbPA5Er8okLwe8e%2FRCzBMPeSeNGVrcA8mbs%2FlGRQE4zx2SPH9sGqrZGow2L85PfTwc3on6txjGYmyx5CQQ1pjOqAtUdEX5RQdn92CnBFdk24AP7XG%2BTB6Otx%2FEqPFSNTQzHbWlg1OApN5oK7GoW67%2FRIWH6PYmXssqah7zaXd%2BMNiLcG%2FIPmfVyahFarvUc9cqg3YGynGEIeiKGlIj1PHt3eZ%2Fr2netuU2%2Bs9sYmty%2BMpNaGQuDVos5dYPK1sIt4zBq7dnKtr4P45XSO87zKzd0ZaXoG0MbYi%2FEqCK0ggswsHtf8K8mcohqp8Bgmu00qiaOUnsjyipjmPtnpFOh%2BSPc14w3MTbxAY6pgHb45lKEueR4Qv94Un6i0Xsce1OKkmWiSclZ3%2BAt6UWaUJgynw2a3DT5ggARagSThpAsxNU1SVxNlNZkpkEjYPnfHBGMfWhvmtm9X9mG6njEtA0ruHo%2BR0Y66RPa20vBvZn4ck2Gyaxn5lv1CXEXH1leouTPS%2B8ciRHQbkRIYjPFojb2cMsITNQu3P2P1Y%2Blv6eEdWwuvzhYVL3LShvWT2g0Pe9RkfH&X-Amz-Signature=4db6e2cc8ca7c33794bd755825934677e155cfe8766b7fb781ffe76a34d74d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=5b4b73d87535de6684d0798c946a1109bda9c44151a8629317f42cd5de20ce0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=682ecf9e9f42fbae53f8f3c3e54dd2da785edd5eaa1c6dcb5710ad22f2ce6328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=e1f5df2206d19c4aa6d48c6246af1ee9e883b1e4e6cde53ede166dc48f18faeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=65cd3e53d9aa8502b40c0920c1556406c805f590d30ff995849ee62365263a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=178450149065cdf14803c64396bc992141971ae73621f6a1e4b2c5e7ccaa069b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=693e32ec56e33908ec4a7f05dab8714f5c99f79b1bff0be1ee520435bf972c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=749e52f3d6fd398a3352c5e9c99814d9ca356b3cb86faed1d601d0f5d4161cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=fd1bb77b84e001f77a1e2cced58187aa7b030adfa7f46269c9bae4d547f40c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYVHRHW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICJrz9XThHkUIlT%2BFPmJm3lQwcByCU5kjiKYRIRVNZffAiEAzlf4rypvPT75aoYSVn9fyOpE6vJ4RewqsUKa9cO%2FPiwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSg84cb5ww5NNOVHSrcAyrir%2FOWTYzvgcj3cwjvHB1FikTKp6TOHOXCchG%2BaJyq04uxjZT%2BbNxyqmfel445w5xO7xpL2FB3roLoo%2FFX443lYDHLfAZuHs3CpalTOca0FP3ZYyi2mB4ZOO6h3TlshEQqpw%2BIh7DA2pgJk4bLk5Ddnote4UbjDuXBhW69I9QrwvTWhKejmEOlCW7HHvjqW%2BZC96lISZCPYiBH9pyL3yKUlra9b825tm6o47JJMMw2SGUGknJivbIrwB5aZTbKYm5PBNaXXhFu5tyr9isa0KgyLyrQ0TfTEv8Sr0WDCg92bdrZy1iKJi0My5z%2FX9fKnpbZFHUjMM%2FCVKEcNzWLuMet4DyPX2SmgOE%2BAc8aT1jZFCxt4Bu6Si1CDIk3%2F99qJou6S7vmS%2FAdshOdBcF6ZnmFgjOIC5OaeVml9DiOsiN2hX%2F4W8N%2BY%2BpiK7IuScPxoID1QvORfvEK1rGfD9zXYCkjBqs2btyANfBJjQb%2BwDsmDNfvCVrolD9JSHETv11bOOXO2u0yoJYxAAgxTCxitGOQ%2BfkRPmEzjUIKOJHQn0sFRwnzaCzcklneCDmRHJUgz2WMiGT7%2FQoo4n88GcWll9KeeZtjdyT8cSHl%2BW22DQ64bwNVUBgeo70UTMsVMObE28QGOqUBNVmeEj5xWd41WCc3493JmbAUpDE7kwUMZk2B37TR3kS5wdq%2F1cQ4wDg1Aeb67JLgQz7WVoMdc2y44fn53ADH52KPH3LyMTtsxwoo4QLip2EJOEvGYkZukKy13%2F5Hy4o3Ki4fXWpTrvWdX%2BoRdJ%2BnrztCOhABbL5RRRNWQCJU%2BqvFYQw19C2zOc8nKNqN5BzCN9%2BhFgxoms6Iq1RkYF42rzOxZQFq&X-Amz-Signature=3fb737bab17bc515687b8699598860e1487f5e591d686ae2aadd5bddde20349d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
