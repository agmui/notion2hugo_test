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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=9e578eb395426e19d45d5508857ed66ee1dae88526ef713251f3cac14e03c5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=3d70bfd9d0882f3d587b040a317b51aae5e4e30d3fce6700789f357f230ca08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=628676943688f533250e859f0407d4814c742c42f60559790545648cbb5fc15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=c8c30b1bffdf74f878e319e633788d0e8883dbb01a9f662514de72751f48bd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=e86b9f5b6ea3d9634e4f33fe62f2b869df03fb330b4efa189e25d1f129a9a65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=5a3855ac4ccb4973abda35e9142f78a918d48067f8038ca037b97afa2e5665ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=5bf1e2c47e83c218860a2c1ddfe92fd1f059416469854c8968b9fe9dff036fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=f7aac51616e007e3d407288fc083328d89e023341036fd5df7cca595addfe8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=bbaf1e10dd673d3fefd8b7926169eaef4c6a2e49f6a23a79f0c3c3324624b52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=d939ea740282f82814716cb1a81a3ddf74a73211c3c19b0b9074c04c3caa2515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VKKRM5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDmxQyL1B0OQEpwMDVnPI7dg%2FxXb4dmSE70sUQTVQBlHAIgacF%2BCzDgz6eWeMe%2FdRV%2Bmu%2BCMQe1GNCcxWDsKrGt9EIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMLuMMnaNe8wRO9qjCrcA%2BUeY4s7Dw%2BL7kX4eYKIDf%2F%2B%2B8H8S7BH17JNCiZIuEHpqYW%2FOQuxrzwLJkJMhQQfL3LW2SW%2B0uCz53P9f4rUIu3a9Ym77ikro6dktsIQarh%2BlYxBEAQvXkJ0dcJtDuWdAO3MWQamN5BYeXzXeAN6S7%2FSLLODoTA%2Ft%2FCK395K96hhUKMr6LVpScdodxNLJgFfNDa2lv0cHVcQPvVGvja6dfJ5wihuaiuS85mFRnO5o3zbSp1U%2B3KB82a8FB0mEZwrAzxU3D%2FdsztUuqxrrSbs2vZ22Ic9C35h0LQP5qILSFQ79GUWGxvzlrMfQSADbLv92GReP4kVawJDz70AgXPZuxz0OVUoUmQi3G0zlVzDGosTagBb0YKiRlJc%2BEk7V%2BTTpv1789mjBdeKF3Kz%2BiZ2YW7R29hL%2BB7vmqrXBNcoaxOT2EJctgQHW7%2FKJRZJ49kQ%2BklXYRnnEC06Ba3R8VJeDTJsZ1IItazvUtPPuUSGD%2BN73z69smgR6CAHKKznbiQNHrAviOLZV%2FQ9JHDp9mECWfdIU434GI0BKnzHjTbVDJJrWjksDBsx2Z5iP%2Fw4ch16h%2BdHBRKi5yq%2BEqtWNAANeaXYgEmZvlHqeMqiThM8EJBkbDadSJIgrOk5NZF6MJDC%2BMQGOqUBRYHEeN0uLpToVEjylqwXnjnZHziutOxjrQ3ruBrmtMD7Ixcne8eUKMXA%2B%2FUiT0%2BWnnuvbUMLRho8MPQ3bB5xKs0ADwfNXnqpos6Y1NIXxGC%2F%2FKd6yGls%2FInOl0R41UyxX4TFZyubwHDaLMeFwn0D%2BVc0j2UsKMgrlEPigliAZBNROMcWQToViZSkhormyeml8TNPHMtcXtubn8fi6i201q8gWws7&X-Amz-Signature=3f397335f191fccdd24b395e07191c51a5570a901c006ceb482ae3baab69db38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=8336846f81108d2ed5c06783bd94ad10c14cdaf035a4a23fce13cff4f5d88711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=e45db637cd303c28b1d4c3af34be9fbcc53db71a64a4684b9af28194ad6e081b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=b82d2b168805cee9bc044e212ed0bd62258bd2d66628f7deaac2449dbb7df6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=2ddd12493e9f5cd9026e3505011b6a434173adfa4007b1c5dc76511676271c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=858e7e91c401a794d8884976b7e6240c9e12cd475d2dedef036911dcf19d3118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=e244a8822b7f959756321f1eff36651f81c7424876d5e4b5ee6eb99f7e92fe75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=fd1fe0f9eb6b1ca1857c7478b2f4121cd7648ee751b77925953b2f5debc6a8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=a9e5093b06c5e3a79df7bd587759dba851ae913ddc0f7a0351a6c293d0b8c95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBI26OZ6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD1rZsFjI8ytd9uz2bEok3uDWvsueN%2BitEbJmwrq1uklgIhAN6Mc5spDLqfM7XJcyWVfKPHa5Rr%2F69Sg3PDqYj8JuUFKv8DCEsQABoMNjM3NDIzMTgzODA1IgzE5B9y6rMw%2Bmi3YgYq3AM0ipwl9i4EImmhoktVGYyKmwUm84yXmvGhbCDCM21alM8TgT%2FF%2Frqy%2B5gNSFC88%2BZVQG%2Fhw3LciW8hsOV7qLp%2BOr6y30OhpejSZs4FdmJyGIbMuYs53gGIMNOt8wPm5knjmzXEecXeIABV0LEXCG0RjfTBipGQp9jEJg5%2Bn5d2YefpICjFBQSvr03DOovu8WvS2IOwQzdRB2R%2FP3TwUtEJXj6DaljbxBkXfCUK3bf2ddj953DS3DhE4jhzoj9WBZhW8C48FMl8TCjq%2FJgoHNWEbJyIgh06UcKsvy9mnAcN%2BPN0D4uSMmyIprgzfxvO05kMRD3QY3PMeVnUU6AT3S%2FUaZ5yCIFAKUypZfVBy%2BkwQKYrQQoaXMt2gyIOel1zDj03OL9429WWz3ZpTe9F8iOZ7kTn80d5RJvv5JO2R8YzyMYHa0NG9wUs2E%2FVXLwggSrDwrVmzMF7gksM9hJ0yXHbnI%2Fc6Uv6UrWRpV43SfL97VqthmfUKm%2FgUE5bjSGUNfo3g9OSVWWsfamX8ZRMvbqkH%2BIZddAS8PYQYsVcL22PrWm7gR8PKISS83hfnR2M3Lacl%2BP%2FgtoBQ8alyFCjQ3xzX5ANs74cx%2BCLaYd1soVE6trYZgc6Q7w%2BLuhO8TCywvjEBjqkAXgEM4L8d3exTpel%2BV7o3wzaWGGiJbG68%2B8YB5MAR14IhStf%2B6%2BThCR7QUSFNIUCeEcDdZjd3sztgp17RPvf1vBMSXe6AsK4OJWsXcD5CEf98ZuA0DsDsYBO1StIs1NoAfBTUgWPsDrQpGUZV%2Fg3GBDtUWDPE38yMOmEUq1Mc7A3BOC1VdQguqSTjqGvKm%2FEx3FIJWPYTIaqoToXtNrzxioGcc%2BA&X-Amz-Signature=04e2e9051b91f95749a15594cfc6ac2bc7ef31b8045d9a968a00b9e973dd09cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
