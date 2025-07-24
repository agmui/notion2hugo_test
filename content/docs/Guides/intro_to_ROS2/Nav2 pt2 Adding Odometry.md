---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:09:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=dea4e89768ae14daae2fcd752adabf509e1b9a184c0590c128f57ce27f837a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not </summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=9a5c83a7fff9a5a0eef7249083d04d27b5e9d5c160bfc13a160433a4c8904c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=08b69afecd5b5ead7f84e5a296acab9a591151027c8646a057066417e99ae81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=807f41067a04a1f882a1f8eb5bfc94112ab5a6f0b7ff7f535ed68570cb313983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=9c58aa1d9a2ed50c91fd3481622491a21360c660095f65fd76e7898aad74772b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
        self.get_logger().info('Publishing position')       # print msg
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

## Testing our code

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=a14dddb4af064b4f72b898f20c03cfb14cff39b6a9b9bc00c68d0e022b278a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=e91ee6764cde972cd4f9f42a5d70133e05b194c47199711b8031f12f3af4e9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=22ed6f75d44e789d64f4ea81293d1da53a4c147251af4cdac39ad6b3fabc610d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## updating launch file

Lets add our new node to the launch file

```python
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

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=6b48066573c61703dd787cfdf2270f0c88a2d14464b3739695353cf69483406d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2C7FB7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T231009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBTzP9jFUYDyKEgkkm7FwPkqVeIVTHtCxbM6jU%2B5OzSTAiEAlAPnlXY8KKT4IzF3O7v8xjtdM5sOmKBT9JWPiHNfoFsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIxJSr4LLjS%2FbgYmrircA%2FQY6zuvEvOr43pRy%2FKFylO4w7NRS8FpCzAM26pbOf4CaPyBkZB7xL2KsE%2Fw0eDjc4cGSLou6b59yFeudNBj%2BN7Oje4WuhSGlCITBgHvtnFCrpWkfrfFnuYDrqstHfvnPIHr4qU4UmWi5gx39oDShyB1qBfnjgjIo%2F9uW1K1itbe0PGq0hfKwDnxf4Wko%2Fj4y%2BFRsb3DmMbA7vCybkpWvpgbTf3bgS44uvpycjl%2BkZBeXTPS%2Bs8uX8oL4el4Y%2BtzyBCEByY4bDLDeylWy1lERTIeUaGmu4gm%2FQXtEXl7v14ibDyHj6mo3Wmuuz92DruUY5m7lPIfxUPUjXr5EmAU6X5In2Qp6f%2Fn1ArDHJ3JRrqnVFpOxXhjZzJfjQdgao2Arsiirxi19%2BWqRq32ClvsBExi8v8xNgbKZ%2FPGj0aB5GfhmB1oOxbYmVWUYdUlgDrwp7Gb13AZqiEgAuQjYLobVCuviv8QFP15w7IIkSZytoCzMXtsXx4XPjvyXkEJz0uhCXTKFjgek7zwbcthHdxr5RbywokZ%2BrXvOEIU3%2FcfcIUo5fC2tHtrJ1iVbEkc4DLnMegRQp%2BP3fFTt%2B4%2BeZw2UCZxKJ1%2F22EueEwaT3zJUT1yAt6FiEimn3fBJFTmMJjYisQGOqUBmPgZJTIEEZMX%2BRnDX7kmQzrXX97QV%2BqhKIuVm8Kfgc%2FNKvPv2ooAINyRTs6Ha7hPfR%2FZdZfux8xDCc4pl6WM01HoYA7B7tNYk5hghg3uUHow5V65WkS8glUWV%2FKKTaHUN%2F2DPl4JqTegbFqPnZwgqbGXfHfxF14fx7RXJ2lvvIixNMoEVZFOmQTcJ4qvJflRbQh%2FMOPDu9qktFN2nXTpJEOqXIjD&X-Amz-Signature=cc88e2ea0e9d36907a12e0d8c2fa65916d1dc0484475d60096fc26d722b59903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=1edde3f4da929df1c91d353a1783d6a695710d61e4f34d21b87c4bdd67b4c6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BBE7SE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCz2jkVIGCwXUidT0ewBt3WFvm7u%2BFeYU1NHXtClebXhAIgDGD2avsuvbVGVU4M0x4Bj6Nenq9AigCHmYaC7umzaxIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCiKNWQVwp2i%2BgnPTircA7ykiRFtks2VnTtD8bU9hMRsOb%2Bo9X3hH%2BSotbpILsHtK3WhDw7qcYeOBlJTS85zPcy1o3VxFSkQi0EDty3Y5O1mbNwZwH93PS8m0izZ7gkY%2BmXXRcSjl6PsHmPI6GlnGOZ8TBzZsa%2FrlDw8V3kAtx%2Bc8J8zGOfJD5Fi900%2BPtCgnGC8A2sXipTONuFBaXTb3FrCWQKWzN7E%2FuoFH9yppbD%2FAlzHPhmDiSHfqaM%2BbPa31Ua781y1xaYqVC5wUnbqO2o85qiq%2BcBlk5J0GcmXxqtNWk9Y%2FlNRGzJJJiLH%2FAcjkSosJHmw4VChRHelQzBQC38Qw6eZUWuGmfSQXMX8OQ8D1y7HR4XEF2cwaoHTvrPPzJ%2F6LL3yaEEFni%2FIKSN5nfbCwbAn5nhQk6PWPXZPg2L3PIcXmI58SCs6s%2FeCb4VpLWBVNIkIGE2VCUJPyTsq7KZMJcSXmXNMJmINrNP40swJ1pX56sOzkWmZPLi%2FvxF0COasbUPhvSdQDtVOcWZn4DVh%2FkNzch8BnN83BDtcJtyakuPScl2rgvTo3UblGFGNUWX6YnXXTFN9BASZt4zvPimDaPWWhNFnunEUy%2FPTTzURMdSt9Gi9n3mXLbHEzAbiyz4LjV6dcUF63bqlMInYisQGOqUBFcSXdgeR3eu2lR88TO2ZNTrb3VO5YlW0eJqphHTRtFr%2BvgBmAxXP5z%2FrZtCoWY1rJ9L20%2Bl5YeDdru6%2BOilCkEywYsT5Hjh%2FkCj0cXhibgb27w8fD25oOvWAvvtNo%2FQgIStXYbP4atSqSmYJ%2FDZ9zC2%2BUg1%2FJPruIRdlEm1aVJlGRshqGjA%2BknsOVtojE0hlAiuv06C8kSHSyWRVkkdnAG%2BVwFsK&X-Amz-Signature=4d7ca6384dbcc71b7ce080cc6ea981476ab702ea66225effb8f63d876b4f0856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWZGQXY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDKkQsvs4fQej4cPSmpwvl1xQTn26W1nAtWLX9pw1mtywIgYeaFfM0PEKHDZuSkhAA5X7losdrXXWpswyyRUIRqwq8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB1zbk%2BzYub1NigrbyrcA1HjcufzhIkjNMW9LO43Ul7ihS0r1F7j3ZbrcGA15w0cix6VElWcEiosliGebJV5RuMQhskbKCSJzvxjriDaCr4%2F9YD1E9nYHg6DnpDhRiKPJlN1EvDcQOaBX6SIW5JFO0ZiNyT%2FY9UEnhVZa6VLm5dKq6nQId5RA4Ops%2BLoiOtkBjh8Oc0RytzihL0j5n1XCmF7JrjxO%2BRTsOtFWTROybeZPt1UkJzjsNJV4p5%2BG1qaklSg%2BTGzb%2Biqcu26xnmTLSZmKoz%2FnYbJuSfjYWgxUSMRb%2FXMj27asrZAJC8cByv735FGGxgc8lEXMKADGCjPnydXdDawshrY4JLcx79E2h%2B62Qjn1ZbfT1I%2BegfkJf5qmtOiWQ2uDHnehvVrTK88xIFnF%2BDc2QPZCiVNDY5sKIte6SHNP39UnonhZONZQ32ufu0U642yWjUkeD3X5zoNw25nL%2FCFAKxF1uVGLf2BP9SU3bH2bXgVPcvCNCCM7E2TlZEbMRogBvLjh4wWCmsk7k08BkPqtVGsDpjfXfTT4yYW5ben2Ez2DQnyXGYfzkoRfznUbbLlN9890H0FWa0kQNf6SSncOUKlcz9xA5%2FArB23N2YF4ths%2FWq8OIEdq6BchbYVf%2BuoFgMeJuUQMP3XisQGOqUBQ9e60aQ5ZXFFW0uRauSMn5m8qFoC4SQqyAiuHY%2BztiiTysg%2BymFoM7SRtryLkxfDlbKlph0Uywc9%2BRhuos361p9jtOlbsJD2LgTdznIa9F1rjjA5resgtLJdxGW7v75MYabXm93QJTVLZLVvl6GxmLrkRN2rwLa9XE9SK6dXcMVlkyLzH4a9Xvhhwf1rciMKLRJybuGIkNIPfHZsZFpBIAIgKVFI&X-Amz-Signature=97816f72d65ae7fc5662a48ec830b4d12582f396376d88ce56861c925d04d7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWZGQXY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDKkQsvs4fQej4cPSmpwvl1xQTn26W1nAtWLX9pw1mtywIgYeaFfM0PEKHDZuSkhAA5X7losdrXXWpswyyRUIRqwq8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB1zbk%2BzYub1NigrbyrcA1HjcufzhIkjNMW9LO43Ul7ihS0r1F7j3ZbrcGA15w0cix6VElWcEiosliGebJV5RuMQhskbKCSJzvxjriDaCr4%2F9YD1E9nYHg6DnpDhRiKPJlN1EvDcQOaBX6SIW5JFO0ZiNyT%2FY9UEnhVZa6VLm5dKq6nQId5RA4Ops%2BLoiOtkBjh8Oc0RytzihL0j5n1XCmF7JrjxO%2BRTsOtFWTROybeZPt1UkJzjsNJV4p5%2BG1qaklSg%2BTGzb%2Biqcu26xnmTLSZmKoz%2FnYbJuSfjYWgxUSMRb%2FXMj27asrZAJC8cByv735FGGxgc8lEXMKADGCjPnydXdDawshrY4JLcx79E2h%2B62Qjn1ZbfT1I%2BegfkJf5qmtOiWQ2uDHnehvVrTK88xIFnF%2BDc2QPZCiVNDY5sKIte6SHNP39UnonhZONZQ32ufu0U642yWjUkeD3X5zoNw25nL%2FCFAKxF1uVGLf2BP9SU3bH2bXgVPcvCNCCM7E2TlZEbMRogBvLjh4wWCmsk7k08BkPqtVGsDpjfXfTT4yYW5ben2Ez2DQnyXGYfzkoRfznUbbLlN9890H0FWa0kQNf6SSncOUKlcz9xA5%2FArB23N2YF4ths%2FWq8OIEdq6BchbYVf%2BuoFgMeJuUQMP3XisQGOqUBQ9e60aQ5ZXFFW0uRauSMn5m8qFoC4SQqyAiuHY%2BztiiTysg%2BymFoM7SRtryLkxfDlbKlph0Uywc9%2BRhuos361p9jtOlbsJD2LgTdznIa9F1rjjA5resgtLJdxGW7v75MYabXm93QJTVLZLVvl6GxmLrkRN2rwLa9XE9SK6dXcMVlkyLzH4a9Xvhhwf1rciMKLRJybuGIkNIPfHZsZFpBIAIgKVFI&X-Amz-Signature=9c5330b6c5830667d4297393e15c38a5b22a087b3d4a6dddb41a92533efea762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWZGQXY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDKkQsvs4fQej4cPSmpwvl1xQTn26W1nAtWLX9pw1mtywIgYeaFfM0PEKHDZuSkhAA5X7losdrXXWpswyyRUIRqwq8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB1zbk%2BzYub1NigrbyrcA1HjcufzhIkjNMW9LO43Ul7ihS0r1F7j3ZbrcGA15w0cix6VElWcEiosliGebJV5RuMQhskbKCSJzvxjriDaCr4%2F9YD1E9nYHg6DnpDhRiKPJlN1EvDcQOaBX6SIW5JFO0ZiNyT%2FY9UEnhVZa6VLm5dKq6nQId5RA4Ops%2BLoiOtkBjh8Oc0RytzihL0j5n1XCmF7JrjxO%2BRTsOtFWTROybeZPt1UkJzjsNJV4p5%2BG1qaklSg%2BTGzb%2Biqcu26xnmTLSZmKoz%2FnYbJuSfjYWgxUSMRb%2FXMj27asrZAJC8cByv735FGGxgc8lEXMKADGCjPnydXdDawshrY4JLcx79E2h%2B62Qjn1ZbfT1I%2BegfkJf5qmtOiWQ2uDHnehvVrTK88xIFnF%2BDc2QPZCiVNDY5sKIte6SHNP39UnonhZONZQ32ufu0U642yWjUkeD3X5zoNw25nL%2FCFAKxF1uVGLf2BP9SU3bH2bXgVPcvCNCCM7E2TlZEbMRogBvLjh4wWCmsk7k08BkPqtVGsDpjfXfTT4yYW5ben2Ez2DQnyXGYfzkoRfznUbbLlN9890H0FWa0kQNf6SSncOUKlcz9xA5%2FArB23N2YF4ths%2FWq8OIEdq6BchbYVf%2BuoFgMeJuUQMP3XisQGOqUBQ9e60aQ5ZXFFW0uRauSMn5m8qFoC4SQqyAiuHY%2BztiiTysg%2BymFoM7SRtryLkxfDlbKlph0Uywc9%2BRhuos361p9jtOlbsJD2LgTdznIa9F1rjjA5resgtLJdxGW7v75MYabXm93QJTVLZLVvl6GxmLrkRN2rwLa9XE9SK6dXcMVlkyLzH4a9Xvhhwf1rciMKLRJybuGIkNIPfHZsZFpBIAIgKVFI&X-Amz-Signature=4010f42a3cda7539102ce73f64e3d94364dce163bd05d958aaa2d15117b8e168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWZGQXY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDKkQsvs4fQej4cPSmpwvl1xQTn26W1nAtWLX9pw1mtywIgYeaFfM0PEKHDZuSkhAA5X7losdrXXWpswyyRUIRqwq8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB1zbk%2BzYub1NigrbyrcA1HjcufzhIkjNMW9LO43Ul7ihS0r1F7j3ZbrcGA15w0cix6VElWcEiosliGebJV5RuMQhskbKCSJzvxjriDaCr4%2F9YD1E9nYHg6DnpDhRiKPJlN1EvDcQOaBX6SIW5JFO0ZiNyT%2FY9UEnhVZa6VLm5dKq6nQId5RA4Ops%2BLoiOtkBjh8Oc0RytzihL0j5n1XCmF7JrjxO%2BRTsOtFWTROybeZPt1UkJzjsNJV4p5%2BG1qaklSg%2BTGzb%2Biqcu26xnmTLSZmKoz%2FnYbJuSfjYWgxUSMRb%2FXMj27asrZAJC8cByv735FGGxgc8lEXMKADGCjPnydXdDawshrY4JLcx79E2h%2B62Qjn1ZbfT1I%2BegfkJf5qmtOiWQ2uDHnehvVrTK88xIFnF%2BDc2QPZCiVNDY5sKIte6SHNP39UnonhZONZQ32ufu0U642yWjUkeD3X5zoNw25nL%2FCFAKxF1uVGLf2BP9SU3bH2bXgVPcvCNCCM7E2TlZEbMRogBvLjh4wWCmsk7k08BkPqtVGsDpjfXfTT4yYW5ben2Ez2DQnyXGYfzkoRfznUbbLlN9890H0FWa0kQNf6SSncOUKlcz9xA5%2FArB23N2YF4ths%2FWq8OIEdq6BchbYVf%2BuoFgMeJuUQMP3XisQGOqUBQ9e60aQ5ZXFFW0uRauSMn5m8qFoC4SQqyAiuHY%2BztiiTysg%2BymFoM7SRtryLkxfDlbKlph0Uywc9%2BRhuos361p9jtOlbsJD2LgTdznIa9F1rjjA5resgtLJdxGW7v75MYabXm93QJTVLZLVvl6GxmLrkRN2rwLa9XE9SK6dXcMVlkyLzH4a9Xvhhwf1rciMKLRJybuGIkNIPfHZsZFpBIAIgKVFI&X-Amz-Signature=4be5225395a6a682a293fcdfa3a4a1ca7d26cbfbec4eb4273ecb02a7bdae6c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWZGQXY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDKkQsvs4fQej4cPSmpwvl1xQTn26W1nAtWLX9pw1mtywIgYeaFfM0PEKHDZuSkhAA5X7losdrXXWpswyyRUIRqwq8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB1zbk%2BzYub1NigrbyrcA1HjcufzhIkjNMW9LO43Ul7ihS0r1F7j3ZbrcGA15w0cix6VElWcEiosliGebJV5RuMQhskbKCSJzvxjriDaCr4%2F9YD1E9nYHg6DnpDhRiKPJlN1EvDcQOaBX6SIW5JFO0ZiNyT%2FY9UEnhVZa6VLm5dKq6nQId5RA4Ops%2BLoiOtkBjh8Oc0RytzihL0j5n1XCmF7JrjxO%2BRTsOtFWTROybeZPt1UkJzjsNJV4p5%2BG1qaklSg%2BTGzb%2Biqcu26xnmTLSZmKoz%2FnYbJuSfjYWgxUSMRb%2FXMj27asrZAJC8cByv735FGGxgc8lEXMKADGCjPnydXdDawshrY4JLcx79E2h%2B62Qjn1ZbfT1I%2BegfkJf5qmtOiWQ2uDHnehvVrTK88xIFnF%2BDc2QPZCiVNDY5sKIte6SHNP39UnonhZONZQ32ufu0U642yWjUkeD3X5zoNw25nL%2FCFAKxF1uVGLf2BP9SU3bH2bXgVPcvCNCCM7E2TlZEbMRogBvLjh4wWCmsk7k08BkPqtVGsDpjfXfTT4yYW5ben2Ez2DQnyXGYfzkoRfznUbbLlN9890H0FWa0kQNf6SSncOUKlcz9xA5%2FArB23N2YF4ths%2FWq8OIEdq6BchbYVf%2BuoFgMeJuUQMP3XisQGOqUBQ9e60aQ5ZXFFW0uRauSMn5m8qFoC4SQqyAiuHY%2BztiiTysg%2BymFoM7SRtryLkxfDlbKlph0Uywc9%2BRhuos361p9jtOlbsJD2LgTdznIa9F1rjjA5resgtLJdxGW7v75MYabXm93QJTVLZLVvl6GxmLrkRN2rwLa9XE9SK6dXcMVlkyLzH4a9Xvhhwf1rciMKLRJybuGIkNIPfHZsZFpBIAIgKVFI&X-Amz-Signature=1c15d45c775f7540fd77b4a3d431a2f9cd4a348bbf351895d2e9bdfc03a6fa84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWZGQXY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDKkQsvs4fQej4cPSmpwvl1xQTn26W1nAtWLX9pw1mtywIgYeaFfM0PEKHDZuSkhAA5X7losdrXXWpswyyRUIRqwq8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB1zbk%2BzYub1NigrbyrcA1HjcufzhIkjNMW9LO43Ul7ihS0r1F7j3ZbrcGA15w0cix6VElWcEiosliGebJV5RuMQhskbKCSJzvxjriDaCr4%2F9YD1E9nYHg6DnpDhRiKPJlN1EvDcQOaBX6SIW5JFO0ZiNyT%2FY9UEnhVZa6VLm5dKq6nQId5RA4Ops%2BLoiOtkBjh8Oc0RytzihL0j5n1XCmF7JrjxO%2BRTsOtFWTROybeZPt1UkJzjsNJV4p5%2BG1qaklSg%2BTGzb%2Biqcu26xnmTLSZmKoz%2FnYbJuSfjYWgxUSMRb%2FXMj27asrZAJC8cByv735FGGxgc8lEXMKADGCjPnydXdDawshrY4JLcx79E2h%2B62Qjn1ZbfT1I%2BegfkJf5qmtOiWQ2uDHnehvVrTK88xIFnF%2BDc2QPZCiVNDY5sKIte6SHNP39UnonhZONZQ32ufu0U642yWjUkeD3X5zoNw25nL%2FCFAKxF1uVGLf2BP9SU3bH2bXgVPcvCNCCM7E2TlZEbMRogBvLjh4wWCmsk7k08BkPqtVGsDpjfXfTT4yYW5ben2Ez2DQnyXGYfzkoRfznUbbLlN9890H0FWa0kQNf6SSncOUKlcz9xA5%2FArB23N2YF4ths%2FWq8OIEdq6BchbYVf%2BuoFgMeJuUQMP3XisQGOqUBQ9e60aQ5ZXFFW0uRauSMn5m8qFoC4SQqyAiuHY%2BztiiTysg%2BymFoM7SRtryLkxfDlbKlph0Uywc9%2BRhuos361p9jtOlbsJD2LgTdznIa9F1rjjA5resgtLJdxGW7v75MYabXm93QJTVLZLVvl6GxmLrkRN2rwLa9XE9SK6dXcMVlkyLzH4a9Xvhhwf1rciMKLRJybuGIkNIPfHZsZFpBIAIgKVFI&X-Amz-Signature=5e677adf57fb0447fe2e0936ef36d809c166319ffe182596571e507bf631f6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
