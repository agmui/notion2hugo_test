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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=d6ea89c0b4bdde36132270ffd3dbe5b96017535aa1a2e8230068a051fbc244ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=ea8e3e4c44fee75536ed8c68e4b64839a1c13c119c274cd3401576da2ba54de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=adfe9f922c0dea6a918e3a8a512ab4c74a30c5f0e528061e49f98a53b4e27175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=1152058b9408d0a175a4d0cb09483673521cbe033b0013a98694b988f5ee2338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=268e1e385aacd5c05b287b5860b76e6c33d359aa09f957cf4572fbce95550ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=be32196165a6a8339bbbcc4c3ad6ff3fb1f9895feeb309ab3827e14cf970541d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=21675bc525c417c401f20af4d0af15024eeb4156c3dfded6d8b33b47bc984a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=cc243a474888fad4fe4034c6c6557c5416dc1987823d19ea16255034952f9282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=65dd1f30878507acd2ee0dddd91f35aa7c90de03e04574a5859534f8f47d52eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473YIQXP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDiwmv8mMhkJufxfmOaugGjx1BpB9srfiuGJVHl6J3b2QIgQ0eZVNn%2BKWRJzxWwpL%2F%2FKv3Ys0EIbCsF83tBHmynWF0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDYxcYXo6rTxLvNmUCrcA9d0c0kSst%2FkMwmeYScY9noHyx2qVCukc2zeHDJVd9JjHgPIDeERBpOVG8CkN5eUmsHFolQYDEzQqtQmQ%2F4%2F%2FoUPPNu43BymBaSYqjawcgdmQnQq0ApCU4E%2FZLbvuiQoHdk4ueDVpUPw%2FdluIccj31HSPhrLVyIvG1Zn1715OcvVDRLjGMRFrt12wWbMcDYxKYfyAAjy2%2FR2t%2FhmnDoPniKMyavigGEUoZbokpDi%2BvoeAwG4PiFasB%2FYFXAHgDwMW27%2B7Hoel8pH578VxtK9V%2BF2A9IYqS%2BImipYa1wz1UZgmZKnH18DRAUquWnjNvANSHWl5CyYW7AwNaxRey0WSKi94bDS57eaYHCzCA1dl8X%2FyilieSrdRiH8Ld3oUnbGpRyb9FUXwSthNgoy9%2BKh1J1E97bTTNDYWsqq%2Fxw%2F01ACes5%2Fk5BRaXSmzg9fsKYZGoF6ds3hrHF4l5%2FBWIf%2ByBPBwpF%2FR2UzTlBga744%2BipMkETC1luaxQntD%2Fnap8QPCwFgevOwvJvKJ5SpW2byk8xngw45vPChcehAMdrfqau4bnuw38L57hxm9XWYQG4rNaqHVM%2Bp5SNtpft2G3DgsC1fR1BmxL8RSHfA8R0kjPzxwUD6RIhJsvlqFFJMMLy0%2FcQGOqUBMCuVP3a5icppCoV2yrb4E8KmtPc3PMJp7NFsMomF%2B3Y4t3ix%2FgiTjXkZOK2tmpaezUWCkg2Y%2BFbLbEyLYE7AfZnpp8%2Bs7kVVZOrOLpfybPZu1e3VvSZnmOr%2FbBqMVAvVtzbR%2BXGPwoGw5UWeH4W2Cv0CTu3olvWvvo7TRsmlfTm6RzRy88sZ4xT3DYI7JqYldowKDZtqvirk%2B8S8L59oPQLFQBoa&X-Amz-Signature=37acf4eb3ed61a75e407814eb98a82affdd2e8f97e982d2debc36e57c08618e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=b6e54eee148f5c3a025f4a0968780498e4b9d15885494cfe070171392942a63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=a2d65221b49cb7d25d36a95c3aa16475747edcb82a6bd2d2cb2b5b5c852bfca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=b7d7ea765ee7d697b29fef089ed89d269061478fb5c44520e91671bbc3fe6539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=a9a4d2dc8d44a5b5edac7759f1dcceeefabe311befd15cb8518ebdd9adad9efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=de9acd2f3dada0aac4039cd6a0dcf31dd98970d6ae23ecea6d9d9f884f278c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=cee90c77c44f52a390db310fd22461d58c2cb9d5478173fec0a33f0692592d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=d887d38ec72baa0786261bd815c6dac4782e128a5c905d3e21da090e2aadb173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=764bcae4f832c93131c73829a840b35dcd43c555c1415b2d49883bfbeb4e1faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=c3e7e0be3e74a7a4d27e882c6a3fbe1e1c436aca56665894a16725f7f66a15bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCLKDJP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCkdRgKupXyLCTz6C9M25Ulqr1i1DcSMCaRKu2NwuGhWQIgRgb8dGWHex8Yrxybc9pEq7Dr2Uho%2Bv8CaWOLZX7vV%2Bgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMDkd8RUjlkS4A0lSircA7XPWoHz6V3eb7Yr3ZI09nnRv%2FlM0K5J92MvN179pPC1UHVglRpBrpNko1Vsw3S5iqK960H3%2Fk8De%2BMby7so3GesjGcU3fPdYhOgtM1Jlk65EKbgkwDqod3K1M3D2F0fFz%2F6tPT4w8oa2h5F1MSGhlz%2FLCz7M8bPxHqEyFctS1pUKAcRF86wLbdR04k4qOiwjTixMQy62jig%2F4If%2BFlANzCfoDSDmUkTAIFYEcSJVqUk3GwwQ1bVgpYX%2BQ8XQ0rRXrhHTTmsZdHqMiiwkxQJO4JqzfkZ1i%2FBT8W6XCyO9J%2BeoyR%2BCzw%2Bp0naF0a1InJ3qAtvSyZohuiBBLdzl36BbsvZNZSH2kUWgt4l30AiFF1TFE%2BdkaT06K3601J9ZsdUxQ%2FUnbIzCJ7pDMbalBuALX7rmQVweorAbigejiOiaQO5wotwbQIrECH6xTCznewzzQkfCIW0GTrJZbXYCJMq4JX98kF7cKQKghISgBDEZjWnhkDlwnkQ5tMrBnjOl4IfOsxEqmv0k0d75EF9793dxbJGyKkNyoG8y2jLaZmMI1PurzQ%2B72Arb3U4RlcwwgXkN8g04q3NXi0TW7aROMSSU0cAKNQPXdJbfEDyuirmFp5WpzkrNzIFIOFobZtfMMu1%2FcQGOqUBTw0cYjO%2Bg%2FrpaE2HmMrLjKxSUgx2aOEJHEaSRcO9BuM9xPkq3vmOExariaGvwfNm%2B15DxHtxUh0SQSpHDJ0x6Bn5IXewmYrEtyzReIE2MJsH2PcN%2BPAgHYDHab8LdOuDyGvnCC9c2tVE7%2BU3mGwAmlIhjdxEvzwKyX69Tm0DKtYJUT3SubH3QiUYfgvaNolMldPaetbTzTEj2CsGMvbdMJDWG70w&X-Amz-Signature=1f1e09c46e8ccfafd0f51b9ebb500b2ecf7421215b2a7a5e3626e640baeb9c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
