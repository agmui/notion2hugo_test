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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=07d8bbd771d7c8f468bc9eaa47587231957a5bf45fb4c2f1c08c7512d1c724af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=d8f11fbe1b2872bf27db0bf601970343fac0d006dba08b6f0b10d56586da79e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=b219c89affca625ed8d2b03798dbe19add13ff5bb46ea5fcb0caf2f702053b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=416e7fc46bb4db6bebd6646351c7123d391ecbbcd9e9f61dbc016b8bfc5f69f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=96e22ffcfcc32293ff5f2f0db0d16f67e3b0b69c6ea4aa0940348868f18355ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=3856645183fec0acb7e4a444afc00acd5c07ddb7c662e00ba868e934ed0d1690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=f594ac86f2195a41483671bf01af88d6861af76dcffd70b654fc61eb786ae0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=93396abbde12f11fec5e3de22f93ace65d01c2e30eaf54d00ea7bf56856f8221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=0991908cfaf6ca9b13155d977f52c3f9978200d7af988eee0925ea060496b911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQBKYPD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbmRbM4xZs98uubGlN2ZhllTM940XUllJrIzId24DGAIhAM8XEIbMX9mvGdNFJTNTDm9oqH9IrzvgTTcSaWRjCExqKv8DCCYQABoMNjM3NDIzMTgzODA1IgxhPkN2R1gfkfdjvuMq3AMOPC%2BYlAsJdvLqSgGgvNjJH5OVnNSEAHTevbw%2FNqoTLa39p4X6riLz3wAtlYKmFHypcuMPv%2FBrIb9XKVbmpPnLlsMkazH1VOBCqmF1jF23Uw3MHOUzmtDqvbqbaD0jst2A2TV3hYL3dNEop%2BU0OaFA6qAiT8jDnumkUN%2FSmEOI6UyN3t9R8meJHjcBadVGCfygkiKyDivAmbKGZ1EaWVjD2fVQrxhWbCRV8oSFSiOGkGNW9Q3DsVLp2oSrPxFbxqu%2BxUZNCyp1jaG18yLak5mbcYWdDN95FkW67rMq3LvHsfiNm9hmaYtVBwCsZt47UsqxwlYTWIW4Gii%2FMF4YMiGDCs0TErGQRa1%2B0XJOBVOQH2g5i410tvb7v%2BLSFTJg%2BHGCt1MhzX5IHdVcRe0pi1%2FtZQ9YvBQhBNU09O11OBB0G4%2F1%2F3U9MrAT3wr46udjPrTCS%2FKiW0ghkpBPY9V0CJ0uVknre%2F%2BAxVGoWQjS7U%2BsSh7LbNg0z8g7R3Ten%2F3ldOR9Qtvh8DxesDtJ8UrlatulOr%2BEMZhD8XRFdvr82trLgzT%2Fbb8NZKDvaUi7UD%2BKmdHnwx5d3wNXYfE4k02fCCxaMlm8VAA7XUb0sHbEykG4yv8UH8nRyZ7oVyv8YjCpq%2FDEBjqkAcvLKQwfCw%2B4rNkU3sZeDWQbJt9IGiuwqWiuPfev9J1Hl4%2FhKsRdT0n17zbXP5xHZqU7P5kWJumSpWw1v3RZtguEikVYq5S0wofnf0ktiVKZyrvUmx%2FiCnvNxeaExYBP0SurAzp4LrOQbw8nW0qFtnADMBDPLqnZLT0%2FJrbLRYLKkp4JCMxozlANuTCU%2BQ9E5%2BZ5R8QCS7zAwBBxHjaV0lvKgNMl&X-Amz-Signature=d5797a7802d2691f27b616f0831852bb53df8087fc4fa3bd92cbdbaab3961667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQFYQO5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNib%2FywewHpASre03%2FsbjOEJ8hpzLsDr1P75m4tvR5%2BQIgY%2BLDNAueWh8o8U%2FRqJCjOsZ2%2BI4E6N9WN%2BmWrMjpkVIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDC3S%2FTnekaqAQiBAJyrcA5oaDOMkpxDavXMQRO%2F1FbiuY7H67D7jzDiLsP4lG11mAOtLttcFVgygsRCjsTQf6xdZnqM%2BjxNlTY9aJO6yJZayB%2BwBCLSm6K%2BawGWQxx5F6lDNsjONJBDeNr6KMKkVAAj7migXa7ldFNTfZB%2BYPVSPmSuK3H9leucT2dcJ7sRZ91WZ1mvybLIhHQGAQq5A93HGodUb8NjWZXYfvbWsBBC595nPc%2Feypu%2FUJ1RyN7z6Vg3Ey4p4eYmd%2Bvnr4wxtAPHZ8C9wdpMaylRGEmjkS9fBGCH9d28N7403n6B4v9KYbKBJrIdZz7nhZZRTitSHv97JikDhTwHPQ5NE5ib%2B4669AogLkcFrLNDi4iv%2Bw2WrR7yB0AtRvPk%2F9DLvsub3%2BEL82DMD3T43llibMlqkxrxhZr3Se33Z%2FleLlYaRuWBt8qn4WFvfxNoGg9Mew9ZxQcuGevFiG3esmuB2R4ejdx2WUdUdJGTGM3NFHHef5%2FnoYwHh33zHL5II2XagWa1g9goT9NpDSFYRkHsusApR60y2J1JOZ9jdP9h5avaAQ9tniX7ecmaHY%2BNCn%2FDCg5fa47zac9MAP4qzA6K9mAA0wZIYo1xCQOpeZN5jBVnLUIxG5AZDXich4B%2F%2FlxAsMKyr8MQGOqUBrrpQderog8F%2FHG1p8VtYysmcwj2q%2F9F9Pn4gIoQatvN5APQO9Pzauy30rVmigZFIe%2FyBlnywd7nplDe3sjCEIr3FUYfkfKPo68gBfW%2FzhMAj2CyCZ58Ch%2B80Kzp4ixcbHBKu%2FCkyJAp%2BpYNX5PtM8%2BJWbQ6fNvuX5Awz1mt6Oam1EXrbt0NdaEt1KdA9zNyGs4qNQ9Tq5qgbzyJ%2BsAkvZ96zgeLV&X-Amz-Signature=5c1b7ff469207e85a825ccc62632f835f412393ffd0a02c015af074e3fa5f048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=cd806706aabaedf9518979ee7d8b43399942ba406b294b544568f2247329f63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=85b25dd2153a8666b5d838133c68c9556681c3ce0c3287d1a0463286001777fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=e0dafcb9a4905e763577a5f38a85f471993cae1eea3f44c9c8b03e9cb5a995a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=6bea63d29f9d78eee88f16078a619307521c31466b666080696447773e38b187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=0406320c48c5358f5b7afac219b62a2956521660e0f8376f3bad22ca7c37140d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=510367c814f446cad0b14aa3a7379fe343eb937aa83943721b831042432f2ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=b5c66ad73737af3361c3484fa7a477348e213f79641e86645a9bd35f84f58666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=33c42723de44f9d7d08e6d0ac6aad36514c1ec2d0284336d6c5134966b2221b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWK6NNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1KD6Jjvxz9luaVjMD7GDwamrI%2FsxGPkHWXYtYjJARvQIgKpB%2BXtqiJwuKmmsZp4l3sU1dxelqMNxs%2FC4HJoKPkaAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwKWjx5JmigiCV3RircA0GxShBiVscePZLQbZqDTBFSejLIqXbGVz5KP%2FfMAC2AMRPocn29MqzblfGSyomRiyphxPXC3SNJaSpp6PPkY1%2FlNBe1fRSoBmUTpENWyG8Q%2Bie1hlbeEg8ns42sAL7UegEE8VnkN9rD0dNfglPWcJPldqs7ppN8CJbKj3VBwtxC7KaSt7hHZvlxImxdHiUlkO6wWZpzEECzyFRa45SAK4fL1QuNpdoD9ZwVpj6ZR6PQOo877hucIjkQ8v%2B2Efo3Beo5BiXGAmhTSudRmfvjsLU92iyv624ZItK8eEnUeymIQzxWqUrkCvxeuZNiFhbC7x6sA1DyDLhDO89EKhEaC2tSLtCIGWdGFHpbDHAkCveY%2FpSllIKMZLi1rAjaWy%2BUzCH7X45NgGgAEy4OqufnK5fb%2BIWCDRfZdX5JQEt4LpUyySvfD07P7KR01%2FvuEipdWrsotkl%2BlOxwsJO4ynT8hlH3BYNOZMmtRktEcUpSYRqqYumqVFkGPN2i5mIuqLkG%2FAcj85HvkDWIj3Oa%2FfWFFm%2FlEIQerZnhZSVJ4m8LWGnHgziF93l4K26beYL25PRZJOEOLel%2BTAInt1E0xUAEMC0TGtL%2Bf49VRVj5wQEXSyea%2BBERxQwUBEprl1rWMJur8MQGOqUBZ6yNQYZARL7WFLgk7wKNuLeUUnQpPX%2F1I4dOxOUp8P7oIrCiKS8N0Ov985nr%2FwFrJ9ukglG2kP9oXO9ZjdOgzm1R8hD5Q1Onjly3piWn2ObI0E2smVHBSb160XBwBreUq3H%2B547FmBGBNrn0eF96K6l8cU2VQbnBU1c4JPlVCoO%2FWpcXqheCC1uo8y2SWkREmRFKjKU5PNdQZix03me8yfcpcNd5&X-Amz-Signature=08a2ac48b32cb9a4c7bc8a24cd5cc168e27ff2eb889dca1ae4279f84c0bf14ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
