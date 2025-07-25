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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=80748237bc6281e67119a5d3527d951d241887f81032520001f3a991294bec99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=4c005b592b5f8cbf0125649bbdba237f1d5a1b992b102f1436b25f8d7fbcbe59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=91460f1c5acc3bcf53de82b48d676e8fa2d52e3ccf2ab3b20c148d0f9a98f605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=a4df3a0c083036c92d6fdabb6cf4aee6abe4b1f34dcd3df4178d01cde3603b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=d84c461a70d35ad0a97a51924b30c20ff8143018a809c6e90cf98339e4243ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=53b70963a66e9f8fd052efe263845d341998a43dc3527564a4fb5fc50eab63a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=ab1dce58a49e2a773dc850bceb908d908d97b5248e6fdbc57f18907020463911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=91c738c67a709d7c7e312f75f09978120562d97aacff19dc0f5731397eb8ce74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=ceb91064c2adc4d2d9391d46c8a8df9b0e3407e95f72a928c9a85b4a72dae2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQJWJBJF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAF3S5cvOKw8RFMQRQKjMdmEzJBErZv196iiFGZPTXdaAiAhvpDpftWm9Ve4IAv781Zxnk26KbPi0jgP6OkoGXrHgSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMmL7299WLBWGpOMTJKtwDJ1ckYXGKKMS%2FBXX5z9i4Zl29YOty8ukByDB6rjFlopilz8BRcIHn0VKN%2FAQrT9wo7DugxP5h%2FLhykUGmGcx%2FPaHwpuoYZTZqUp3tD9aBOC2vmOHTEqifXEbdLiNFCWLhTGoI110iJf7lqm5HIRTKXqIcBMNco5%2BOze19pXGX6PvRR3HUw9aYkSIyx1qrcr0sk8paL%2B%2BzBC9O5RvlP8p3E28AIwatA9fpHqDGNPGmNql78RjXV7EfETsx89TBLbA411nX4kaqBP2b7dzdfSxLDudJRzaVtCc6XNOz7dX%2FGlSwLqP%2Fm%2BOOLT%2Bi%2BYcrs8GyZKVFs11qt06T11fDTvJ%2BEgiTWphrLDGbLiQLgE%2BPcDA0HzpWMV3OGn846Myn1yFPInvqyXLCJXe3snGdWOhm%2BBSLjWZgEDuXhmg6W7vxgbJirurXtHHqmTeprXk3tUiuQT1owx8%2Bf53uUMmPDFrai4vfja7%2FJvGcLrDmXIdMcGE8O2ffrwJ3FB9b%2BNYhuNlUsU%2BDCfNh2FuAVcHJ1uY7rfRANehoj3U0ZqLyB8suQa59mhgouFJzTI1T5rXQts8dhi%2F8kvE7%2B%2BHfQlXkwYv82TLpVixhyeeRI7zuDJ5%2FvyAA795jehT40tB3dE8wruiMxAY6pgG%2FlfnISfRY9eKkno6CWPwI%2BeYbqCVsjw0H%2Fyb1wQ9jGBNtbanCC%2BCm8%2FPzBnOFyvI4Cn%2Fg0W0ZEKoTIy4n2LgFL69r4a0LFC8GNnnw%2BqEMjzisBt74y5b01eRjHshfooMQkui2vei48kBs8A7mzMFnR%2FdSubT%2Fz2nS%2Fgrqt%2FvFI4DHdhHq4AFZT5XEQrM23KktX4C%2FnIMRCflB5c%2F4e7n3psXFujZ%2B&X-Amz-Signature=cd81ffde85fbefa96e9f88ae5c13d6c544b420bcbe9f452a403f29962d903102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YNDUHR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE1DB%2BeM%2FlhHIkgmQM9%2BsUIJ81q9ji760Erw7K2U8WnNAiEAuP55iqCQJTlayEMvnVlg2%2F%2BXANe8ReSUouEBi%2Bcz%2BsIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHXbFKKYrgPmxEhhuCrcAyG%2BUTNYNC266dPtyYq3eh8U8zSfLYMgvG28eyX6xO%2FzvN7qRzwKX6eHG0Pc05tEuB23U2QzY2TfsMFgT%2Fy3s%2FKLDJKpgdHrTaz%2Bx%2F51U1i2bo0AZ8zH8EOqFJoMWwply3zm3iCwbWTiEFYDqb2LaXWpSEVqxHB8aaxDQFGcg%2B8ImydL1Z6f4bMWWsxaafOzrPCyNqw9%2Fli9jwMXfgk6JVw%2Bl8jIbkECQNsima2hyG8KS%2FJy%2B7NPl2QMUF12i5phw5E9hHcI8H33zqg2U2GKq46nxhXInBMGe21%2BN8bTChb8kUBohwxz9w%2BYti8x8L8D%2FX2bZ5Q4znaowzOSZ12N%2B2hSmdH12cF5sOLOTGb9xAMeHa4g57cdAsTJCOQVYJDihX4w6ZwVlOWWzbxeH0%2FnWVQDOL46LwyRe58F2SOSHgM8xvq3ITZPCRdYV8Zbf%2BdUY9jXWLiljRV9a4Oq36RZ8Xz3BsTmErogMphGFG2jNdmEvEm4FY%2F5IzzjeX9%2BEx0PycC7MfiWVcfppAVuyS0%2FAe0FEGisdi2dHe6xdgJJ3QKkwroIic7qE1dw67YPstusZEy5G8tZH2%2FGtVUTzqfwEydwG%2BZCDYypmXCL0dckdt2zRd2u5k%2Ff0kpVedp6MMjnjMQGOqUB7DCBSXu4NHTMHhF%2BaQKhZCHagTmgi4h2WwIOUIXtsXyddkkjC%2FpyRwmUgWfIaupSYq3GLJzwQs2Nrs2Fn5bnZJq%2BxQ%2BTREWWx4%2FK8IRieZbjKh%2Bfoe9aKbvDfBTOqDANd3ewhjLqfbMlO%2FJx0%2BVO9dfG63EdWVCFpeGQG10cRn1%2F3hRLLoT39%2BxU%2FombsAegA16MFgFdRq4Ff%2BG%2BoD1%2FEtfyBu5W&X-Amz-Signature=a314e081e5e46fd2f9327348bf2cb6b6bbafbb50d8ebb3e38e7c9ddafca76347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=0e7e83fd4b0446241173d41e0f43a75531f4f84b564189192b733912720d93d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=9642495dcb5bd8ded51dfceaed5c9e07fd582c83defac9f6321b68bcfeea3b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=9818f97795fad2882bf064c2d252844366c576fee90043e4486fe125fb4285d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=932a94b952eba1701c0e7f348b72887c9904f6ef3318b2fe911216c663d3c818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=0c81eb74c3a74617165374a5877e81991190486a12bf63675b52980e295cae0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=72a1f908cba1efb8b2f326058ee6e210aa3ab7a69eb85056408c7a46e3848d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QI3JT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDmYIW76RuxEvwrsHp9WtLcgnabfRBrQ0VYVGcVEizdJgIhAL0B31fHZmyjpVnLE8cbVIU5oTRme%2BgyzHiVwlp%2FRErvKv8DCEEQABoMNjM3NDIzMTgzODA1Igz1QyGgY1AkM5ZpBjoq3APqbl%2BJCublDbz9o6FX%2BshYPbrHVPDSGkjwEGHYC%2BWsKKRlDoCnaAz%2BXV0UlnI%2FE4hYvFrZfyjGDe%2BwJs%2FUaRcyzDsMdfJBvKKmFpFwuyIXSRix1r6tdupoLAnDPwP%2F7CXoPJtfcuc68bNQRd8tUht%2Fu5P%2BbCcfo16ZMngzamkWkRUD66DF%2B6CY0E0RgOOQ5xPwBosCTpr2%2Bq1VqOLUK72wPso4oab8mVNTKlvAV1fUeuM0am1cfu4h2MwzrNMc2oJXKkzJFjSfYuNQHjSk8w56wtbRUl9zKPkZMTSdCbX8CftUEnBFbjIvXYfD7PsHshaJCIq7Z1bw8YYDuN0J309xrHnPHHsA%2Bp%2BUfkq47ns5QzryOgbL3N68w5oLR7XBRUz2eub0fvnS4yK1J6U5%2B4otgzvEXFWfPZjp1SEhJDVecu7k5K2E4LSQmdlMjstMur6W8Si4KmXTL82%2BmMa9W7Pm3NWJP18VzwNLfUyBtNRKyZGkiH15fZvv%2Fr4Vqc15hLsJ%2BSL2kcvw%2FZil7otBPrLA7937j76%2FFE9A%2BGwT1zdONZxHPeGZl1Z92s8JHe1pVTt8LN%2BQhE4BFYeasnigvjl1zAolgYsQQxtQeVRxvo1oETeh3w%2BDvZFS55Y4LDDD6IzEBjqkASjT5j89FOFGLJWSqXZ5QaLrCkHyhTst16%2BS1kIumdBfC3CTZfFis3DGcgd3CX7Ys%2BXxdZoUrfZ0y4jVITmNWI3GIsgW3ecJ%2FBcG8bG7IYFf8oHf5vUC%2FTMyIyeb0rbSCzGXBsaDKzzl3u6Ru4XKVsC8IkAOWk%2BMmbjxzdHMy11yKJAoSC4U52uhJx5u0u51A307eI1WmIYXGbp840A81wBx1aNe&X-Amz-Signature=ac518e178af7df09c957ab57aa33ea64b568f3e6dfb5febdb5a534cab4bb2cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
