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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=b6b1fc59a857d709194ac749cc9ccc043d4f5a95b0bbcd4386f38965e00373bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=8394c13fe23ac1853c03fb745584e41d2dde27d62a0364a4ba241ec1dd19d536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=b7c095ee48672938a3c202370ea93925ede518c1ff4f0413f312fe374d5e7b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=7944515bbc2225baa63e7ada1f82332dd9c1e7d6efdaea8ac5ce3944f371016a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=3031ebc340dec7822cc99ec23a730a7c7c4c2c58a27353cd878db18e51d02f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=957343963ef994c84b8363d9f0fd1ac80dd0467c4c26e7089a83d4a42dba99bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=6da949c1ad921baa9041d51c735690369b48f68f3460872a79b42a2b8995354a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=c79023a419b5a2c870a7f2f6e2820b54b75c95b953652c0344dfdb4c042c7ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=34753ae3ca53460a6a9e9146b4b3a821c3598a10321a1f9645607aba0783ab8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPVP3IL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICgxv8ef0b3khf3%2B1qL6gu8VpnK6iVLG34noeZMPYd%2BpAiEA8QhuJDxtSQVzzA42TbvvMswOSoWFQFw%2Fn5vUm4NsSw4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS%2BoDhD4WVpIRHkNyrcAz%2FC6Fzb0%2FD7S4pSO505n2QJvvqfFm0xk3zwga4UZdd4ukK2jYtqq17vW2NVQTMyLQvHh%2FfKYzn0cCM%2FoMzgAJzIfrZGiAup9xSGbk57hO%2BVStke0Eg3yhYfcARkhKfXICtkQSFZyW%2FXcUHKu4%2BbL8XF82ZfX6i3d4E78PzMBFqG8vlBTvhi5QbPoNwDMk4OhsVyCaPhmdOM44wsJeHxK%2BSdis%2FJ0vfGwQybidkXYpHQHhupGsdc3F1KrkZTz4FHqn6CAnUUFnhjbvMCvXl2d6HJK6YjInixyCdkZ4LOT60xnr7CWPQOgOkCbvIAOvdoIwBlnnBplaOQQqm1IosiyI%2FwJWYSoVSGv99akOx%2BE5ZV70CY2Q24UT1PNFRXcnxefl52ecEmpmtzRjcDOepVm3Ut%2F1lAERXS9lcivtdPtqkwjVMUcEVhzr7RSCE47cPCp8HyZcVK%2BNoGEzUIenow%2BclG%2BE92J15K%2BYqVsRiTl856P0e9gQPsfeB8A0Xj4sbDfRw2vrbzpXFw%2FaKFSTMF6I4UHVUQgGalR7mWgu3Xmw9U306UG%2FIReyjQG0iYcdQu%2ByyUY9ksJWoH3o0OA2ppVk%2BVZN3AFgfkBbe5W1GO3qu8%2F4oMNoXcmyBW4%2F5%2FMPPE28QGOqUB%2Fi8x0mFjNtYiA67DDseNLvCioGqEK50LKjTLO%2BjdeMQJwcQJ2%2F1G9%2FN341BzzwG51l9xed%2BpEateMir5F9QB%2BWYpWA3pdmjPlo9xGA3MENZzul%2FGuUfZVtg4Oa1LF6RKFqEEzZmgWqeBj36fTVb89NIaH3jMOGCp5mT3V3n9d1aOHkQYMORZUtx8qA%2FI%2Bal2hvb3cGJiBbW6UZVesAwizWJgslFi&X-Amz-Signature=dec9e495ff58817f69feb2cd77b7d276a9c1b43c79905b5b85dfe4f5aeb0699c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQNSZ6B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDwp%2Fk9BdT9eDKirghitVIwTFq1WGwZ4FJqT8ThyajowwIhAIB8RwzCPESykE73jVFWBn4Ovq2MaFZBhoT2YBcvdg7QKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwamoHw5nC15JxBdIq3AMKJFjFmpvh9gvpUXguhU0lbZwjAV2RT%2FnA3%2Bg6N8d6rH9oZUW50khW1oB9l%2B4TAejPHvvSRbdn0XcSvt3eiFd6%2BNvNsa0HCwfe1ZoftSe5EhUHQIiAL4SOT21XU0ODiwBQrX8nB8NQyqTqAQjNCPuGfXn%2BAJxq5pXS2hcN6mG2RH3C%2F4ZdJ48hA2JIPvXrl0%2F5s8nmAjm%2Be4IGqAjJmsGmkcMBfyzTxUvkH7bqxyQgDknsYsizvvepwLPO96dbFUJGU151PDHcFqt%2FHG88MBaGJN6nCJ9mdd%2FgW9%2FKQWPGAJMNaGUTXdJpCudf0yqNHT8%2F%2BZ7S7f7V2JE4XMXIn65FCT2DAALyZsZdpg3SrW%2BrcFwLcnM02DvEOtmxdGQd4SOklUSC1gYPiRoANBAQf%2F8sYOcLnB7OtreFcr9xOT5b6R3diKaMtOtpq05IZKPWKeVXPhvJaqG22kBmAYki1MZDzXKwMSh9g75HYUmm4avcBqAV%2BZxZ2LxSy7VE%2Bn02%2FBg7CAx%2B3Ytoq5EpATWdYVu9KxcijX714N2MwZzImbhQBb5V6LTrd9zfg7exUcICoI3Qc0y%2F7SmjRHEm50T%2FHZuMIBmf8j%2Fb77pZshedsFnkzD4M6K5vP%2F8R3PVk6DCXxdvEBjqkATyBXXFk4NgjqSgnh4hMUZUp3DjqsNlnviuLa8PT3W97iA1WocHKQpTmUsmN09THjCfjwPWUh0IpS0RQ7cgqVKGHNvGtu5Xt1fFdxj5Aos%2FpgTtBMnK3C1tdoD3BKjIXVrpSRAvOfNBVWfnqRyoNS6E7rema1IPbUqTSKtZrir1dOXzwcsoGRnkkD19ML4BGx6e10uHrs1%2B9jk8Ij3sLwBovksbo&X-Amz-Signature=06b8c0f2395526c13546bc7bf6831b5dd627510e58ccccbe52e3afde7d61dd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=1e4bf39d92b620c52b8ab917032c4fc0b47b3f697b73dbf12a5575a222f6ca4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=0732414318b1da616719016496bb45e59477e2085c44594006d2ce4b003f9c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=0a877f2857d1824c1d1bc72e6a9407b543e762bda939c5df0f0824c123a56a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=d45a9e2b5afe569af99fc20a1e9d14d8565f98b6fc4f007512732b0d96a5efdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=401473ebc1ede3140bfaf7b08609ccab9dfa5cb237dfa6a33a0ff99a6efa57bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=b6e45b5437bea3fad7d5be044fc18759b25ec2549f4ed0249d1c314353c68731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=57f552cb07f2816a08785a1821f5b349ca1ee56d1bbd86ad0bca6b0a1d9e6457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=0821b993865a610fc3cb967f00873d2f02b1b133f7160870b8b1c891ce07ad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AU3C5NJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJoRBAj8dRCB0FgH0H3iHVMFTPrVlhszMyDBzinyZKIAiEA%2Bh03CLdKy9jshc22qwvEI0CTmj4uMqZm4uDD%2F8Ja09cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlPd0WrPsr5atefAyrcA4gVtpvGUDV68pHsFAprRB97Sp4wBrAD3CLcxr6P4Qa%2F0Quzty7QTwX8Lb8Y1a9BFV2bj11kIXKdLqtHHRiJmXsX5SA8h%2BBZvWbrnuQjQkBhfzRPnEi%2BtGWAcvKs4uGhif9uumR7qan9pDvEVrAhi26gWxOegiUIdNFHXxQN2LB9PW%2Bknw3Kv8QLQKvHQzV9YmAowEaaPLY5tgD1od5DdpHWti2pzuz26%2FjPTKRB7LXdkbom0cOLKGSQiLTIDJIx8bBDeEdJAvUu0fC4wvZ8h7hVUqENE0EPUbX4QogoL8kbVd5oroP3bPn1PAFDa%2Bhw5l9ssZb4wChqWsn9oxa8jqeFa1GhqVoS1QPYsim153cG9FqcSWa8RktmwfMje8PmXPq6gLehx%2FEDbCvxkjDUvv9bWMPcCtK05mqgz4%2BYevf06VxVaNjTJnYUEOvnD19afr%2FvqVLu1R1Mva8gvcgHO%2FboVaFsLvEOqwaOHe3ing4Qj3LdJcvo5pWqoxRSDCLBbF79H5JVh87lFFJdhGzLL5%2F70Utg6BTFNsABdwMXDr6xK02zxq8Gj3%2BLDEjUguvKobg2kmboUqav7DH8P5WTp7gJ9MH3OALGblcQsHY7cPrj%2FjLk9kPNgv1dvJiRMIrF28QGOqUBkW11RnyPHpXkzFDrmA9sdPxUmlPeep83t6%2F0l7%2Bm9N088kFW43ttfQHZiG0v%2BNgGuY9Z3Jy9wMxnXCyWgMdpH9tUMQyIE3lNUNZN8NDF1cdm7fDYnUhg5c68c4An%2B47%2BWax8P325btZpC7D7z9sGW0lFQAWEuRftxLXjacINKWK%2BNcHX0YKdkwela1ymth%2FDxHqELXyZCcmLkYwjLWizgO5hHdy9&X-Amz-Signature=d458909e900bdad1f35c29878e57577f68db29f06523e547d6e9e8f86642010d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
