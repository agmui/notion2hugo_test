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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=94e4b238ed86641c6fab015b3ee6419035e70025f30f9f97f1aca6538fe9e74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=343f2baa4e7e7635314b601b7bb3a84b1d8972d1582ceafcd5fe01078e6a10a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=2bd4cbd66715a495be8527a57ea60e6bf69dee9f5ce5ab9b6feb51e1ae75c059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=e372e70e82a9f201b70183a586529bb727695ac98a1cdcbddb5059f46af89dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=12e7957250bbab0d3b62300f4ebc1d60f8366866cd000ffc37859b3e959487a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=9d4e2a863c80e10198e6058bebb7bbc926623c5c34011a3edb30bff1626e1980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=9d126f866ca76f998e7d13c791d66ba1699f868e0231b11a3843168d1a947c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=0be9c65a4cc12efe80bff87494b530efcf4c2ebd5c8ce89de6e163e3588d1eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=a55f7fb51151bba6d9fa2b71682258abe8f4e857c2e8c46cb788ce48fb819952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R774NROW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0TARoS40ZjWadUGTGwNLDE%2F6PD%2FmdTI1D7W1CwPz0jAiBegqAgDnJgaVd501qL6GAuiWh%2BlaId5UZaDrz87pSJQiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxqgtBFSLcN6nSJoKtwDNtViqH%2BOTdV79fqSNz5QraEkppmH9LvqTpqRIvpbe1UXXUA6ak3VP84L0MCDWQAB5Alo190t%2FNqwP1Y7bFeFJZ4SS37rxz0GnwUuNKHESvTHVKXXmn46XbuDjRxCygpAJTqV5EsSrnoNh6sCmCS5R%2B1iOfKCKNDKOlF1%2F04hlXQbXjHB3WrpL%2BT8BWyqFkvrYNYBqjziP9JViyyG6O9BL7b5QnTL%2Fy3hyb92fs1FLllDBEOX9pS1hXkeg9O1gn6hvOR3sIV31MVtiaeRizUWqO0Pjwxc7gbh2j4xhMmLBbGro%2Fo3NWghBYY3kiJWXFg%2BgRLU3RDaUN%2FXwRLSBGfVBFUNA3iFY%2FJ8rkCJKb0j2RdBO0CqtKXb20lAZU6qNl6WQqUedN3sW0kgwsoqmNrX5zVbVFXkViTENQUY0mkyLvde16gy8kByA7WkFtD%2BVaB1qPaPbcNW7ga0499WXLyQ4qaICABBZFo%2FDKEStdz1Mvk%2BEg1Ofi4oEyJnpCBI5ReonAY5tyhfXiIzDx8O0Ynlia1wTS%2FaeogDY%2FbDhnVuNmeMwqSvPbMfXNlRLxM1kqUnTAEQRst8AvICL%2FAxbCuIFNWrfWiVvmw99Z3QnVsEimW3yNy6k3ZPnSwhkbcwmLPfxAY6pgFEMCnASNwuF%2BZae68KarCSo0VJgVsZxxS%2FxJQEtL8Fs%2BE2MOPvQftjcjYv%2FzVd%2Bf7F5JeQbuf9xovSu2lzKXvtCZzevhHnDo2R7vPhc%2BGF%2BvfeCbDlBkaDDJyX1eY6N6ehYdz5CQyE3Qh8jeJjP%2BKwGHjv8aAKuzWHcOduVJNVhrK0SdzyTcVL1r26d94BPe0N3xsCJBZVhy8jl2GXD7nFOWxN5b7k&X-Amz-Signature=f18de6426d894cd7e91582c9b08481131aa8354b9a6bc70fcbf5e02fbaef482d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXS6YRBC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOEhAB4qLvcPApLxIPLPIOpStoQClmlFE1SZYSGOU8RQIgCMwLY%2FK8KpPlrS5Tj6JfEpEEnOzuE0Zyf66GyIZ5%2BUMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxYuqK1BmtMldPChircA%2BDvXdnLIXq1GRVsOd3PwrIrLou7I4A6FVjpswodWOV1qEHRKOe9JwdL3oF5%2FcXGxBxfSsHELAaaZcO0V3HvEc04ZfY7cZ8NmE9wfwXoOv8ftmbA8TAzR0cdlksQaTJfR6WpxhjrsESxG7iMtBev76%2FMsOaDKFiP5U%2FaVDOG6JGfzxLHB2AZjHkXHcFcZEKNlU3v7YkgtXJFCOdXGaUCQUS6GVDQ12904jp8FGfmxJcqK0R6v41hrxWGuPANhzYbOq6OisG51ZSLIr28qHU1iiPzs2Of4mHbJkUe%2BKe6EQumlVm5kn3zetV1BHGtdh1YdFuX4C2wUxt5mnb0ehibeq4wH%2BYtwn%2BtbYEurCcjdujTlp6TTd3DDBhS8QS5Xh1Zs3HHVRuEgVn6QI1LDLFJ%2Bs1VQwLRhr5x5jDt13zZlZpzSNFD3zoU4Uxbi4gxNTzDh2pHvu51VuS4L0doFpZnGi2pNng2n5D5MmvrIbWHYSuZF0rcWTpThQBgkn4FhxbyN3SacICWznWWGnykvp6Bgr4CNHKOGlGr3g%2BF73DZINllW03wikcsooNJAZ6sSkOvB7mGR%2FNpk4hoxDBdG%2BxdE0fw8soEUcGCrzTjlIbz8PmVHVoQSmn1QIwJ6fCyMJW638QGOqUBdeFgo0NFE%2FchmbLSX9Qdg76cTwECpQ9qe7X1tv9pBbeExl8y%2FnJhs72%2FUE30EphtOkebZL0pF8ggLdKHErAgbpRZ%2F60C5%2BEY6fxt463FulPQuKpGqbU1FfWWtTyu6%2FWRhasIxqlLWPeYDm4VXJGJAWpsIRDkAz7o%2FthOoUF%2FJMZXIDDADB6E07Z%2FziQrSuCV44yZoAUbUieLW8NYoFPru8oIRh70&X-Amz-Signature=e8e311eb55bada04b1094e02c2c4d0112969023efd884290abb9e6cf2b1179ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=0f034367ec8b29faaaaa46c6c22d9e6a68185c8e13178f651134badd2a86325e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=db44bd182102cf9d5d09534b2807558e09bd3cb5a4c4ded4ed614a5996445d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=4bb8334963936ee3de791b035b078c7c9cfe4cf36a207362ed8af5fcdbe9d530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=447f8df2ac0e6cd8aab2316e31e823ee340a3181ca777fce391291ac6ab6c4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=e5d2b463dc41495729c6701414736f5d89b23dbf08d212b3a7dfa92bf4bcb0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=50f56f5eb3091533609332b5e0c02254313fcf18d3cf5a316d8d767f2c6d0363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=802e87d8354ee0dca40c25e6be8a59a82db1f648eb1eaff79d031865e14a8f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=4483d9627d53c9dad57da99f669e4c0e4c35e463bee94d3349fa48186bd5894c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQBETJC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBS3DS8M52bC5%2BKbp8cvwwGRnfnKc3qCkOphLCm7vWwIgQoEPbGI%2B62gSbkVEipRVyt%2FBooIzYFc6gB0n%2Bap%2FzBoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw4yg9dKV1poRGBUCrcA8kkTDI%2FBAgQQyGG1JmmPMiSGewcR0U1BA4nkUdE0wEoQ%2B%2FXAqw5Ig15j9LcEkA9lkw2Ih%2BlEXRVONTQS6PoBTKwIGRt%2Fg4c0mFGJvGwypEO%2BLeeq%2BKTi4j7qMSXgjgM1pK3mo7cp%2FMwUn6Naa7PVpP2YnLqFpghobdtBcHGY9%2B9zmlpP3uWXU5Cd%2BIPlTnr2F4Er6Ega4o8lqZibSkccBtSn9VQjUX7yVey6BoZiKTiRiLXQdcnJEsYhNb51aQTRQlJIfYHQWee4dYoy%2BXQBSOy9imJQMX3lR94wijOkYPf%2FmBpSS2sfw3IVsPSdo11Cx56fWYMxrzoT%2FcBLH5ADl3pCvDzxVw1xh1C6lNMCgWlpyTKd83JBHKf4I%2BSCKypXL5IioMLbxPGTwce4LOLleqdgHxffiUItpKB6%2B9CsH9GKXh8BfKKyBMcncrmQdFcxUWg8KXutM3ygYBnXDWZrpew%2Bj3aQV9c4gcISR4Ivb6nFsgejdQ7Nb8H%2BmOFR%2FBSPyeLamFg3rLdNSI8onBWiiax46pkNeblZZbNEwNQ8II9lgYn94Uyjj9ljJVAGn6UaYRqc1nWGvtndF%2BvpQdRsXG85BsfGuEkDEb9vzcq1mmJ3bxKzkQ5g2KSGFt%2BMIiz38QGOqUBin9ac%2B7B00llTp9cz2sFiIK6lu1g%2Bcb%2F%2BLtns92%2Bzvqji5Kene0erPFmpCVHKZQFsUetvpKCf1YA5aUJYw5I0KKlWU5LpRXpwYP7%2BPZkfWFgg2oET1txix78sZMEqzhKj9KaaqXLwaGc%2FxuKfQjYdE9wriM7EgKeXToacKLyiCVY%2Flmb0WKUfSLbbn5ydudq39%2FYWhPKK2CfYDY4UgkdoHIPbddq&X-Amz-Signature=5e6a67d2809440eb94d0919debf4801d1c150787a956c7414188f8e195108b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
