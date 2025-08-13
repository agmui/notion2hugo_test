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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=e7cd249f06132a56222a472b34f8443369a5e7ad193d6cd4ab1f591933296478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=8b15e0f98aa3c7bf1c14c155b2cf2fbfb79f2012b862c5ced8309c29084e4b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=08e1189ab1951aaaa09598c8659685de68ce717feef46f2796f54f879fbabca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=f645ea469b9bf8eb96d6a61137426dd3535cb711f606ec665a864651c0138e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=cc044b74673566e978a8f0c1b8d727e2c3fe78e267a9cf335461b250f9e80b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=d189389bde96e67d23e699e84f5da5cc1d4471102d6a20e1b72925a2455199e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=c45d1b397eab5750ec76c119195beae81221f92d006ad2b4b26a60a13bc8bc3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=c5e96062bde8c7c53df4efe2b8f4e3928fc8a94a73c7aa8255b6dcf483b8efa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=45a4aa5955c270312e6c1ee13d964caa7ca62ae9f7ee82cb3b87e07684413cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKUBD2N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnh6IAy%2BEavtp6C73T769b%2FLFzT2A02kLfqfylrsGC4gIgfmOJh2PwLiJeebgMyJy79Eec4U7%2FKpGh6TipBKbHD%2Boq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJWMeVUew8L2ohX7QircA66sxTFKY55m58xTH0QX5ONqrnepgzf%2Bj824D30BnxHFF2%2BSaA575Kcun43p%2Bas6GhkjAlg7dQO0eXLHUCnvLUHOs7Y0Agee6hk9gPuJhHhAvKafYOw5kWxeXsDGRNeKeuXxtFUE7ZkFRqh%2FVgON0xbEULN6ijaRVWPE4EdVDKzwFKNwf9NTsDKwW4u8ECEx2FSOHrhUES9JqHsgscrquqf0PDtvitPLD%2F1tQ4Dgx1Fdut%2FI0I8pGchPzOYmmnAmRGK0EnfFEh4%2Fwx4Z0iIsgM73agFT8Wgt93r9kOqqxYgxjbtjY5K444VbqFimMAfdOJbfYuKWbw%2FYcDblBRorj4EQKAKQ3ZVgupDz4%2Fh93G%2BEf9peibC57pwdknbjEaR4GvgrGeGKyNhiTmvc2KXTWEn67CaXNEtG5pJVdCwDCxlbmbkVUdd%2BLbBNCv2H7hUK%2BXSpcUTBz4jYZjMO90uuQV74d%2F0ZY6h%2FY%2FWJo9dwGOPK2XVf%2F7o76H5FhHhPSWtJMJ1gE1Jef7SRc4woVOtMSyiKoVi2mTBO1Ljm7IWB8BSOf%2BP3STCB8yFfGPIPCk4n7hnpdjkijrlrkWcBPbHiNJrfG3lWJeAabo6HQHBsIn89bdmiR2AEciLWvk0hMITG88QGOqUBUHi%2Fc36ZiOM%2B9Vsd5s0WR7AEiP70q8WXTcauitq56%2FqR6JlBgQyxbhi9mqaDyD0y0XMlBlPsH7PfBdDHXiXKz8n%2FVsT24rWUtRt89XVM4eEZY8cm%2FcaesI0%2F2XUcgSDnPu1qP%2F8v0dmVNSP2KBEt62voEKoX2Ut0MUxSZqHZ7tOWP03OiLpA9hmWVFJStL5wKxbNS6dy8FtycEAA%2B6snkWbja7JL&X-Amz-Signature=b287fc972e91809a8a91292c503d0e6cb40ed5ff6f0409b4749ce242b4143eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SB7LWO7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQimdg3KEDQBW%2FcXve16O%2FQ5ofcju2urYKu9E4e6QAjgIgT3n9he4F%2BGvy%2B6uydIh6hYN3YWlHoV15%2BjiK%2FfEXomwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCzSx8Lwe7bFBnvZwyrcA%2FOV1%2B7dsBslcWPrsry%2BOdnB6mU0WW%2FShcc8NYsfttcWa1bUynKG8R6EM82vYY4Kz3e4LtYpGukVg3Zl0h6zTtAdlUd5e6jJdkXoLM80ue9wtST0zSSgD1EZhKzV5%2FKjLkyCx%2Bd7xDbX2x40v3I%2BuMXPmnPOksqAculkgnV%2FifUQwQolXkOAqehp4HMaAmhxKJn%2BQMfOSXRJ6JCEfSAKsCcnDPhwOdxo8wuIVhY4mQokmw2TOU3iwtLTbHrzUEr6EFoVV34yOHrboGDqF%2FKFD8H6eFOb23NE30nItyOKXDcYDHg50B3qOED7BAWgX%2BgrfPQ8lD5S6UiOvO5wCCL%2FiICKb37bT%2FKpsfGGbYVCr0ZULzLSaAR%2BkQn5%2BiLDx9yqfu9yETj268tARIikng5OclWtmm7vqKqFZmHJAfhbmX5McnEcr3aEMzTqVDGRMrl7YE58%2BJ%2FXrIz5%2BXJkP8ozTyWDagtg7Zjf9VGupvlEefNn813q0c8NmzY6bENOehX19wQaLrxpjXyS0FtBy6Cc%2B3s4gYUm%2FjGUikUFUxqpnhFad2ySvhJBDnVbrD00YTjPfdWF%2FLPiN1YWOCfsy8gR%2FyHXiM5AinqOXR2sp3mOCJih3rnrazpQTb8rhGB9MJ7G88QGOqUBfph4PQSayHEdi646YIq5pisIGCUsbxWq0vVCeEu5cHkM8anEU0yDyOQC0o24ktXafJYwmAM6KswNkFXBLTJoflf48U6i%2Bhujg8TJeSDxCO4y70NnZmrAxG9vHCzYJ3Su2fZ60hoev1B7zSl69J0e9TxQ6TjGfSwbhq5S549b9bdbaDJH%2B%2F%2BMQdtkvHNLcMCeUhWQc7ESCjPAngf8UPQOCr38LJ1g&X-Amz-Signature=b4544e11f471f02ff1ae0c54d87407ba72e2d8c5705d49b3df1e30bb90139063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=11887bab527945db428c062a8b86d43f9ff64db67391406bbe2fcc3574dc3376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=5547eb40daa59946f73aa8dd0f313ce5a5d55951362989db35315e7e6c5acfa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=8ee2e7485dc3ce59c48719b670e3029a85248d294738b057b84b3b2bcd3b80c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=72e0dcd68417346d25111818265d69570937e55def9cc5b8a42c672b600173fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=4971af00598c7956fe27e80825a1539d540484cd835c08382c0b845fd4e0a396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=423c130af5c8c0495364a1e7361dc8e3adf32b191bbd2425a946b6856aab075f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=a4996678352d87dc79f6cefb5821b738b151a7dfae1ce36b6a84a49622e0aee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=4807802153cfac1e89239ff31b865e643614b9e7a1cdb0780c3e29576546af2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JU22LZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FtlK3pIfyBVe6JoBHukhrfVygyE7OuzQ3PHdurE8F6AiEA1p4%2BgBFtFyf1jhirmGYLmC%2B2gEH7PCdqCPiiN%2F3kpLwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFLG6Q%2BdbIk5%2F0WMUyrcAwahWA9exjySkcUr4o3V1j2N9QT6PDSHTEsza2IOIr0Ad6LtjNgdSKcFK1Ug%2F3Dzx0Lz3N9XrOYSayPOzE7IM0CTL3Wn5X%2FJLdyfgYcLO%2F%2BvDTv%2Fp6cP96fo52BqO3O7xTVUqk35TquurGecNZa0Oy3RA0%2F6tTpXuaj8PkjJp%2FFFeGPx9WsudTO9%2BIx1SusxADhKXVRI1VvPYCz9E5lz0h3%2Fd1EE%2BvV5WaVWNDPVa4Ls9LB6trZjGOC33JTanXKmPQtVp7UIkjvDlK2scLGTjv9NAamUNFob3TXwn1QdFpvxDphZ13dX1tIV5ku7XqRohGyQS4ATkqY4ccc7utL5CJr0Ba3kT7AVguu%2Fi6oSnWzOJJG6NqwXUIyTXHK5id8RTWyzABdu7z9Qk2fm%2BEVhy%2BkMQnuf9UtyM7WWSGlAhX6YUMzIzTu%2FOCcjd0FM%2FJnWM7SxWu%2FGVkPNv0zKgG0qlPi%2BLVeqwNRt9ziSo7e2CCrGY7%2BinMa3oxIgjRMAcjxerZGFBFudQ%2BR111gKQyq2vBGpBY4mvxCqSoOvunE%2FGAiPdyPqyesxm39p2AgdY8CH%2BX0hzy8ZwioVm2AA4hIvAOJc8TPN54PxAbuQg%2FlEbK2KpfWR42DWZ0UDCMk1MLbG88QGOqUBHY5vWsEz6CEuGjzdh8b0d5IIRUFB8ML2SoI7C6RHF92S0nowvNBjYDsVFQvKtLUvv2ircPAfKQG9U8SrqTtkmEctw2Vc1GMCU2YqRr99nkb5GaTnxv8dnLKK4b1Ni8znC5qUteMdbhFPd2f2tAY0%2Fp%2FEfKiejxLmDpV8nXqvcPhmbUj8f5QcvAl0mexI8qC8D14YzL0m0q2QtvH039odgCVEKDt%2B&X-Amz-Signature=9b2495b5e8a728c6a1a18bc513bb77ecd7f368742d819dd5c507a0e1b53b7e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
