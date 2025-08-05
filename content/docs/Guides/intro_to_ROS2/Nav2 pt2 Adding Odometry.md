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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=795e54b24cb4834f7e4fc446012c6a5539b8849cd80c8b3cd36ed7d1433360d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=06b6a51f1f79b18fc6e871b04f034e77164a9d76aed011849b1614a2c514e89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=85492ddf525b8abd1c18d7854002f106ba0539e7b9346ab828154b8df8bb34aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=b09201e48176219f35600c64dcc295bec691146c29080aad19f1084c53e6e2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=65befc4ccd7961edb4c292c6c75b0b43259c6a3446e2260acf3c92b741aa5cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=87b2dc10c9c594783a78a4e7ab5effdc2b2fd8bae7146a01c197195006efb53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=956796cd30154f3620413f36928f3d80f0d198e197fab93cfb3956a1f4a57c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=6de9d17041961c625de7abb05e093dd70a87f88858b9333dbffffef3a55e3b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=07b10f97044ca8e82bc09892a3c1c7e017202109b2e1294b9a34a10cfdde1d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PI3DX2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIHz%2FkzaBKMyXG5KsxBj3lBpk1A2xFAJ4LDMNS9o7D8ZoAiEAntVwvrXM1PrVcL7HS5IsvYfKQXQoXtekk7b55dzZYI4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMNKUahpFQ5YJaZCASrcA2b%2FBPaR%2BIvwCvnHG1066hFLuGVaGDViG9ovPKfaiOwggTlwhqjXGWDpA%2Fzt1KQvSOxkt7hkJqnB5GZkQofxwqLKe8ie%2FSz7C6SCTe5P9Le2G1iBYwzd497kPt5zO4DPeakqT2reG8kq0GIQGTyDkDcwbMh1B6Xj8FH1dr8TP6kKj3qEZ3kls%2BZOhx7TMxns1mTMFVSIbXOGl77P6fT3twdy%2FnFzrZGE7f3JmE1fGNshQ7bdBPxmbJJ7ECyIB1iYwGFv%2BdvRX6uYdhI8Rki1muKGyv3sd%2F6iZ0cUw4GJ9%2BiGJXVRVA8sta3xesxdlW0QekKCeR%2Fyl89CQ6u93pYmR2sCldtuZsC5cgDRIh3UVUiaQGyalRBIOiYu5%2Be6FSPs3REIfDd4ElD8h6cygTbASvcCxWfwXQPy5gYQP9%2FlRLvhgK%2B6HOUbIJ%2BDKg4B2meY0dwYlX%2FhL91E1U8o%2FMda8P4Jup%2FtGzO2KpKFVp%2FiN9DCpWh5LhzAKGk65M9d0pE3sIvW%2B%2F6xsAW5wJkLAwWb8d8pBms%2BLPd6pmHTOO0mLtYLRf8FtA9ZXHRlQEbqFwAdFth1e8%2FRBA5Us6Hdk8kd6xrGgkJBR61nL%2FycsMzmMhxCqYdd%2FPhx%2BRk2ChP5MJriycQGOqUB346eGXRodH%2B5ckNLN1a2um69ku7yu9eAFPzvHRIz%2FumOaTmfZE8%2BGvtTySRBmHxUFeZvy%2BPh0f789zz2iZwGaaMGFEkB3ZHpkte7QiMDHvtGJ163yOr44u3jYmdJaT8elWyMDNVEFcKGDprJZcEz3cGrn0TlavwCCGWASzpBiB3P1PKUrQdZ7GgolBljOGRMgmzdgO6NQlOj6nExHu0Kt1XOumre&X-Amz-Signature=9a2f07152701ec95fa0df0f7c20d9c3b1bbda244bad0fd6b2a0912735978b465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEW53J7U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnub86Fv%2BG8kMSxAVmgUAMWMNfVtR7rYZfqRbCONN53gIgB5MT6%2FU7kN4EIfjTIadvxcC5dWu6BjLSYsLOUj0gxgoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDApe3E1fq%2B7FZN0%2BfCrcA33T1p6m6NRpOCUr4JaMcH%2B2UQhGq0K2GouyORC1c9Af99O7uOspkQe%2FqxYtGP%2FODvspSKiabsMlb2BPj5p3dxtktKkrcrlz5MVt8QKJuS8s4T%2F7Rqy%2BZrGsq%2F4CRyZrJZRMvl5gckgKgEIsI83PHVGLVgvVyr%2BvJxOuRAbyJyt1EUaR%2BfICTQQHIoQUzq7zq7bhbCT5KnTyL7f6M%2B4qCAxWgIMjiia9F0hhJilKag2AnpyBkKZ51fxbUSECawoEnSUvKZ%2BfC30jB9n0P36ON1qrLsuqEAKw3ut2xuljLZpZaiuYOLB5TQR506v1BqvvphZtZsdJKqizirL2M3X8f5WPt3LuJaY5GHXuY4whw4Ih0dVIDzIwORgWWMbSfreDeicaC4Jq208FjB46zRbuEtOsZrwESvHVPvEFyHnt6CbNQSfTxKp2Cim07zYAlPbOEq67jYN2vrXXZggAPVVoaT93P3uYQo%2BiMsBpkoSDVsDB5kuMjFvE8ZY2fbJbOd3IPmBVUQ1AXZQdKHh%2F%2B1X7OWAJ7QkUKnbVklNmSOl1vWdDKKwHDmL97h5AhCDDt1Iyk0S7%2Bb06d9YJK0BI2x89bu1pp%2B6yx45zfZw06WYDzypeGLCv6Yf20XIIQw8EMJbiycQGOqUBL1PUOaK%2BnOmB3jVyddfSrQVESs6kwyanYihlJAf5UBJAJTTj%2F1Lb7GInncEuejIycP%2BDUIFQ3JdazeApLnG5sXEwEy5jJeOS75BAkKMRLxo9aDMtdyy76MTmWGUqnAkpqof5rbN3Nthaq3keTzWB9L3YZn9qumbWgU%2B7hVwjeWsX8YCTbK4IkQOYQ7R9Fk9vwX9itBTIvxWZd%2BXftTnjaoxhEOeR&X-Amz-Signature=4b5e8fff105e73ac5a98a5e5ea815e2ccd4a6c6731386b845211ed9e8f01e54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=e2d38c6a15fb3870fc162ba494ebd77788642051d0086eaa5156f48a0c29a405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=1ee423c55335cc2ac543496dc90d38aee7ca0227fcc2a8377a778677c8f073c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=703e20f26276e569ce9a59c07126d93849ae853ea09ca1657bdf4d9df416935a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=86b4b8220d4f18a9728d27226d66ea54a8cb32791b32fbd40681a4f189e5f397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=3d5386485e3c15cbd0d2220b88f579501942a269502ce3e0a9bcb5f68fd0ae9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=1808465b66415e671a805ae2c5bfcc362029322f0f3bb8338701578ffd43284e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=1420ed5088551e450e406f6bb9372ac921edab8fe7b792a5b9ede2c2dbd87750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=50ee47a79093856ae2bd5ae00fa90f6cd630897be0437b0e1a1a7351c592f728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSIJXIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAYmMK35KPuSCZvl7nUAYAaBpSXKSBc8PYQvgTDP4vaHAiBZj%2B%2Bdqz2f41%2BSzl2tC7pJY2XId9rQdrR7eDZWWlvLFyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM9zFM%2Fhqo%2FsBVmXQNKtwDFX1JnskoOQeMJ9M0bimUtsd2gL3LO6%2BA4NfATz7a4aBRb8V5Cu2rjIAPT7qSgxsB4069D22cs45ZpRGg7FAbXh7HDTf0rs1B2B2iJe3o8%2FVO8suyKuBJOSZf1bRH45AWuX7gHwprvm1KNsBZEW4vLnAqrB5Bjw%2FkF41Ure7figA2m%2BgX%2F0ZE%2BmvDcDuatRh1KECGAKuom4u%2BZM4zjOWyP2pXdJIvVDZq42AiyK4ezh1BdnUlGvUgzA%2Ftn%2FwjIIsYqj5jsXIdk7G9aCy304%2BqBtsT14RmXbis539jxYN6NGDVcGlpgnNsbneOikNvFkwckojMBFRODkm7wjgxHxSpNa4zx5o%2BgGzsFFaix4HJ10SoUH2bAJHoVUSWWi%2BT65mQEJRAdF%2ByqrLZlKQXznbJDvCDJ8Lq3PY4VoLPrBgEMtcx%2Bl9otyyaDfTizAhgfwjIBsRCCH60ORx8YTi%2FOTRrOR54GemGXVo%2BIGIxypZ4uRC8bfy%2B%2BFF9QWgLQebepOhR4zTGsDlnlp2sFBGypWb7ZNH1RoPxnV3qC6qn30X6%2FddFSZr%2FgB4C1EnvBQRlLBNbGObMwmkRJfN0BEuVD5cpEfs4EznXcG6sjUuGAvNkgf%2Bx0G9CXM1Bcx1njnYwjeLJxAY6pgFm7nAYhPLRZvsAvatHWz6mKgxpXhiDIOs9itRwkqjg7jP8Vg8F%2BFw8JI0qQNcVmEcku5HWUczPmCzcmQphM1UZa4h%2Bh%2BwnaAExvoLCJ9VmgJhXcXqIv%2Bin3j3X%2Bp5o9S8tyg67%2FmQaAQgCp7cEiy6fmdbHMn75rfBedOf4wVNs5nOWbhvHfEuAMhEw1tg2vRWtajfktETLCtFRvHE3zbypAh9VPKYH&X-Amz-Signature=232e4711ce3800452ca8216908d36ce1a5c54181770e8fc89dd8de1b84da8ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
