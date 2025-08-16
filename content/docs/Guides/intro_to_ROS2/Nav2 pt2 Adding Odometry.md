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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=842ec2e8978b81a7d7eed7a16ddb90c8ba0de27dbbb5b775d7567ac27b98b6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=b7c99c954df6f19a2dede8f239fe8e8c4dc173b35fc82cd59abda52762d04cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=92d6c562eb21be48496aa78c655d1e1e2c2c069acdc28fcd9929f719d2d535f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=1130726ef4b7e0e5106963d1eaceaa2b112914299f7aa86b5505eea81c4f0e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=d79e4c842188dfb9cc23f7b334247c0979e042e09e7b44ff40557586a5137ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=98673e13f688cddf7c8e00f0d3451971882011b74604fd3fee6ff26ca6617630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=2040b90b4e3586024b73fc2d761d627bcf03a81a7626069f5092815b5958107b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=135eae92707a776c6b18683f9566e2fc38843401293d78f1b354887e1e58d1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=a29bc01dcaf9bef0263bb0c80e2dd82cb171c573051315b484f746bd1d8cc474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=409a80c2a6e643b7641e8acc6a44300e85fcf6dbd3db58eea72302e3d89dd004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYYWXAC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDEdon1TfOWQuJCsBeQVFk73oWYZz7WnbpO0VaHgHKPIwIhAI35oi2dmcb1PTfygBWmRJlMBQa1%2BLsfDEAJdDB9AMc%2BKv8DCHcQABoMNjM3NDIzMTgzODA1Igwg6SV235U0kr08cN8q3AOS8cne6ULFR2wR90Z2e%2FSaY%2BQ6Tp4SKZ%2BqlLG0LXwSSRZd5ss3f71np%2B2RnDi4MsSWWPpMeAe2maCufRDQ0Dl8KX4Gx%2FNj%2F7rYmOia3HApIgxWO9QljLVphZMiLP4%2FO0t6EU7kh7b3qq4JfEUBfrBIRWqSd%2F%2FMNzpUjkSBrpx7P8wYxVIWiyK3zts4ZUsSct5U2G4QH26LJAw8OEMGv2W%2FEnnNfhrfouT1EWtsnF%2FBocbZ2dU1bgVKdZW9e4fT9u75%2FColiABOXamMM74L6KK0TLmXCgqFnyxqgLA8dirJ9QVA59VhDgyiqTCfMq2gXDWrKiLwQEagadqH55tvSJT5w2R49AeXAQqNH2p9Yfj0RZ3i7u6%2FJDHsDG%2Fo9o6%2FhutUkhI6EPMDcD5oUqX8TOqryvNoYfDJtv3j530KXOpQRf%2Fl%2FCZG9SD%2BUsQL4f6JQ0Z3XoSikT6%2F3QCyf7eBsFuB931T30Zj9rTJUc6%2BOXGDex30HqRbLEvb8mabqiKiZbhp9LxfI3sR3yzYKDgO3FiDesStSFj9x5lt95wpg66AcfW1CrR4H4YueTRUA3aAshym5oYUHoORJHf6S3oP6h4ZGwBGY6LxnnknlbfmSzy9JM2skT9qeW72DAYvRTCJmILFBjqkAczZ2MOxNfOMmjV1f54R0OX%2FhUhcrLHzkUPXiXWsizKaK%2F0DyL0syGNBszyg8jLgskmYc%2B8klJV1C%2B%2BaN2NUX%2FTmp0DN9T2w%2BzAeGZsy%2Fy9%2BXAn5YxtRkFgRVtRP3ouRqNXg9h5bxl9vDgKR9bVHAqGm8%2FLa2uEuzCHWxNxFwTdjCFAQjY%2FYLH7bSVy6BVur6ME1QNhfqvE7koW6G4pgz%2FIdG7oA&X-Amz-Signature=a1abbae56a51baded21d1d937bc61d505bca581882bcd909b04e54b57122c5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=35e3cfa4b965445b61040a9492bc77a68cccf58b4b63567efd230682767139fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=4011853a08d158c4f72a83f18a2a84bf194f1836cc861e3f1f2ce2ab55737cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=6caa1bd94c93413fcd6c97b007d368fe73500a3cea60cac055ee0a2269ef1723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=afd31e19cbfc2077064a75c9c007e6f0bae89ffcb841952c7fc6e52eaaa1e073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=c660099db276117090f9a14d4a4dd7229a6e165e0459a2e2b69e8eaa15035366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=20eb714343275002f85dee13b9e0c61a3a55ba310e9a1f55e65889de4d78bd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=81c53a70fb69fd03e5de6b5b09746ea4e953835cefc277a365fb314c776f14a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=b124e1de2f394e97b0862126f72e1573b81931633cf8eb65e9b4a3d814003f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JABRKTX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIB92k%2FTijFCLN4xvKNj1UACbvGxwyF0OWOowBPC967f0AiEAkDOu4i2Lnk9lJu9QpMIQPYBKG7AWDwItzL4wwjdwoq8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGu5YEgegXZdLK7KcSrcA3rMwmapH9ldXPSCoPFymdVeebW4pwblPdChJV3a6dykbdJjXia%2B4WjSVFVJDeqyYjLRDbHhmHaZZWk5MwQ39ZkpN7RnzhBfUz54ieWxWghn12gtgj6Lf%2BBsPga%2FagblwcVLnFzS%2FBJJ3ZTN6%2Fv%2FTltJ2Rajuxeu6n0lvp7Ch%2FEneF5G3WqXu30XgrIUEVvX5PAi9fhegFwKn%2BJEpLgWyLiikT6aQ2GeBzWriu%2Bg9Q7NkeiuUVBD6FbxaP%2FdRL0bjy3d7JMsKeYqnQFekQsj4zaBSvG0qt%2F1iQFBfNsfhFVCwVqCwS4VJdol0UpMFf25E94du0qw9KKhuAyeKD%2Fj6NUKqjCx0Ru9FvA%2Bn5bpcnsKIcs99iEceLSYz%2F01DMxJEW53%2Ff0jQZHYwh0t%2B%2FIm5xLv6IJsiUQmrPGhol48o0ei9pLeW3MaLJsVQ0NaAIE%2BJy5Xfz%2BAXHZQToJa91hSq%2B8cFErUqMgfkXiWXP0%2BGJ5syrRA%2BffP6Q1xI7TVUo2784QDQd%2FVjMBAohw6LbCGb1ayTg5yk6tWPKsIu5ucZp3fIn%2F0HCKLs7faYY%2FMc%2FYgkASpszvxYfZi%2FG4qHTegajwgTcnDQHrQ7%2BkumEj%2BqJZ%2B3r38gLvK3eKLgoDiMPWdgsUGOqUBbjvT3UD0Mn5z%2FWIzjlVNjJGCqfEmucHAx82EmGhEtVEn8A7wH5Qs0l1ye0txcVra4CYc6D0MQdUmoJLLmT8%2BTxQlstiisR8yxAnwBs4DmOrk%2FAmNphr9BtI4b8vuyTm4kghrn7jP%2FGmI%2BzwO8UAlhEeeMhTawPwl50UM0asrDv6D%2BHG%2Fb%2FrHW1SjM2UQDelKwjbICkp5xa0vDt6y2knieg7d4fAk&X-Amz-Signature=04b2d59070eb383b45b54e2777d9735096c0555a05e74f899b4c508bda9da30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
