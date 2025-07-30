---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=1cdcca986aae9dc184174571ce6f94485f42a95fe5d2c53e1fb1830173963ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=dfbaaa8388082ce18111a22b11186fbd031106d9c837b851766d3a03b43e170f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=d6b77214b171b30a4f7b3c78c080654cdec257a74d8f16240a247f66026ce69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=5d67a41f7230e6f8d039b9634243ab2fc418588f71b4afb2dad2c2ceb41340d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=33c522b5efdcea3d23370847194a0964ea22ddd2f53d973bc781c84155928f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=eef4f554a27010c386e18145880f85e0ae134173e029bbc2ee1e33e9a4aff86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=19cb1091586a8866a80e1d90777d787d40437ae7bbfaa913ad3744c48a9cbe7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=894ecb4751a3b76ff09f50206845790bb898840b32097f7754303cfd13393d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=133ab56deff729b036dacbc379fc0ee342af75a47fb50a49870e091c4ef2a4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITATMO2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdqWETpNlQ3fYQEWpdwCqnx%2BvIDRBBLW%2B45u6kaTvlJAiEAsbJa2B9WuDaKzC9EGb3akSRofiA788FclEras4mGFrQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1gOe6J8BEYkDOOqyrcAxXNpjLMA%2FWHeJbj4ISx3XeSW%2Bo23Wr5d%2FosHZoEQbGp1cC0M0ZVNifTg8NmabOukuIdCJfvI9mVf3utA3s5KcbRvVehiAunEDtQbukD1XVrBJrA1SS2iI8d5VoCsK6k2piVvOpAXNswGAJV2UJ%2F07sMblIdAMo8AFNMYCvZ8XpQE9p%2Bw%2FcmFq9JCOU9hKqFHBA73aK%2F24RQ94N3ie48sW7hHZhAAmtDsXBcoWnzlVeqHzJra%2B1nNfJTDi5ZcQDKFzfEtNFmaNkJnX7rv21usMS6ZIr3uzxurdT6jgymNytcN6LPWkoclGsoft9CMmZZUMtwWwdIs13Zfwn8csCJSlVbH4SN99hbRW18cSq%2Btq0aUY2NbPIcg6WUJXzrCujoZJwQCMMCK%2BhNDKR7E68iCeL9Lwrn3PhXEETgKdz%2BuN4Obcsjd1ZUcEcL%2FD5EPnsL5egcFY8UG8ofJn7ZNerQHuTm23blDPaUHi1kUuzQ7Qw2wIdsZGbM9iEaR4ZJ1Sptoc%2FVSfXYT4y7NAXzuKOClMs6wFaMOE8SHOtDMAjL7fGnwkvdGBVKYy734PgAIWfJmetDCwwdtMIfvUZGMnzbWf%2BMzh%2F0ZSAS3qF8rAae4VUp9zlGU%2BsHPDEdSH1uMIejqMQGOqUBNm68Lormb3cDSh5UbIyo2J0NM6TKgcBd%2Bm8%2ByQxHdaaoVl7b4mAdR%2FPUIktxpV3aAjO%2F%2BHF2ZpxWMqpt%2F3qIKgq18n4d3RzHcVR4V4n3Q%2FDSCnGvEPHTo3S32jibaiy0BZtCk2SdrAPNGLuvyDvb7wECu5Mr6F4TFpc5MBMSrsYABCFitLTUFu9GIgjf1znCeHS%2BdZNupn1izDAuckDpeX8RtNEr&X-Amz-Signature=29cfee798acfb533f414929914d6de8ec6a51d24f585b7234bbf6d9f6c7933a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SQR3QZD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnoZGU111%2FzeZfPYih%2FG9q8ImctaOzZH0p1tudVAJbIQIgbOeFHjAjB8aGES%2FgCOcjG7%2B4Rqm9GsusFOYBQd9yEqUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB968zzTGFl91YIuYircAyJh76aPJWWngDl9sNUOq2aueQxqWeDmH7gyc%2BnXoAL7bh%2FKbvof%2F1ie%2BEB2T%2Bg3rT2Fjh4R%2FqjIfpZryxRaligdfTDZdGPfg20d0j1CgyCmQHaE5YrsZ4QxgdCOxIEdYoVaHaRdWSsK5DRToM2M9rhmIDcJJ2d99AT1g6VPBHi79btk%2Fex5aGJBZ5huHvuppsEmQRErLYGN9clTyuDh2PlLe4d7zSoALlpSWB7uQCMNqum7dzar4Meyn846NFNCskGQbrpEXgqmjS%2Fk5uNLC7xhplkEffrLPJLRNj%2BAx6X4E5ndwfbC85S2TbCQC5mTDPed2xxjOZSze51t%2FMNDCK%2BsgwYRK2Hpdxj4KjJ6lm72Y4tlz9FejnsVEajtiHc50q9WdGcvxGiNa3%2BmExY6ZvRJw7M%2B%2F%2BN1iRaDZYo2lf1TGbvtclF6rnYbCC90Opdms6GMsfsDDMzoE1ClPlURaXqUm1iJKg1aKKTxvcOIiSV2INAvxLk70Y%2BFR8Srs63LXJtAvXjylO5WhnoYAWuTHFlmAFV3%2B2cgaJc%2B%2FGQ7tnSXQmsNaaOB7F7aC4KKH4kKMoI4zpY7fsz2k41SteBYfxtg6TzQdcoE%2F5qQ5gm%2Bw30RSA74wO%2FBdyVLqpMgMPmhqMQGOqUB8uDQADIM6UJciGYrgP2NTYx5Mdon6ZAwk0JQJn206zEfxkecsqXDFbdURzUroCKKRt6pda2rN0MvtdFUJspYH8cu%2FyeovMvhKxODG2h%2FsK1jVjppxcxU%2BZAc18W7%2FpuObruR8zn2iQwBX025d4LUIvaMQcfpR%2F9szq9MI9rPn%2Bw3mO8g8WW2o8UIHUcIPs3Q0FD%2B5FSUF%2Bg2n6nNRXyYxLXSg8%2BP&X-Amz-Signature=968051f0a06ee1719d988546782c63078fa19968f403bd9562a2d1b41ae2bea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=3ec853c2656f2be95835688deeeb5a74e82d3cb0da30f82e4022c6ecd7d4a1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=b72aaf9b731f5459ec70a91ee9c01505c303bca5bfdcadd800629e61ca0fbb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=7b62a8626ed001d62ab0f65e70930c58f8640c2e18b9d024ee585787fa75059e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=fab1608a0da3037da26221b73872e360e1313760174604639bca037f1cbc9c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=d02098663fa65c17154e847b89fa01f6f82b91325a2391ef2da921d3f99c27ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=6a65064ac43eec2d2bd451362cea3ed46fc2fd0534e020dd2b77e1bd97a01bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=42242ba63fef71e2e4e6f328963d27f6f4471fde53c018acf0bbfece95c5d686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMKDUBO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKWOWci1%2BJKkDKUmpCgwdAcJtLK9LVhh6N7cx5yHmLUAiBrKz0nkBZr2Nc0dhPxI4spepXZTiQcBFZRXBbEG44jqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufpr6b25EcG0nThrKtwDA8DZvO4GDV%2FbJuWpYFdcBHhLJxTs7pIMGWntrduO9jL5RhmZpp%2FNnlqKfAwgGor7hCPu0Mu%2FCaZ%2B7bzHIOO4m%2FAIPYRT94xd%2F1PdJ60lS2Fc7T7Hy1pvczlDJXMZnmxjTQIxCzAHShot%2By3dwkr7drlj9GPtR%2BZy%2BpDXfpnZtSS7p0XTLbO3ec9DtDAGPHXLGLPafevtL56FOR%2BGjU6Jk%2FDLI8YGYdiyeVftV3WuiWGIlQBDEiOBECiiHYoo3awjUyqeqWlRaj3xFZBNI9qht979lTHgwH37Px%2FWBYUEXg3kAnzw6ZH1sg2WrKzadpFQOCqGUiO2JU4iJY3S5mYxrGBcjIMDzduohSS%2B0GS81kvRWmvYdh8u%2FmYzaQdxV%2FB5%2B87mL0sySgOZ4xKPuBEk1bfF3s7l44rsM1iO7p7GXLX1HFWu9c6sSE0Bw34L3MW4Z3w3XDEsOU9Qwjri%2F7yz%2BQOKhr3kVrrlnceQCdc8aRz2CCSjZ3P%2B26Oes6gFdHQClDgfRKFEsNwa606p%2F2N1b0XGDSCSQRPcykoSY0%2BLUogSULLNQDWQlm6O0VKuVOf3vicFfo2uR3k%2BQplzhmuezNvI7BSLBqW9YCNokEhNTrZaWC%2Bcgg9mNNc1bL8w7qOoxAY6pgF8Sqpj7eP2xqSgWPfl4G5aWg06Z8DWc9Hz2Kp554iftU1ozN2FKAjGJYUZ8i5Bea5Tj%2F0jk7QS3c%2FR0lAcmbVGdANBYjG%2FXFt0b1TaeWyQ4vFUrmEk2uu3pS7jE9qjQIGEWgWqPLo%2B2EKo9Hw7VJHUavGJMVNq5R1vYIbpBDBjn%2F2634WhgTxHLurgGaxaHoC26kE12cLQf2AgDEPAsjuiJqeZyAHJ&X-Amz-Signature=50e42c3365c140d6c488173e1cd5f1e1434d597fca6b110fe71f8fed875f5c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
