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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=1f279a4395dd4532cc5b890da452e14522cc92c1e83ca9bc3540e058cb636a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=6cb25adeaea83bee0c7573d2a5c133a2a04605908ad439f32508edd78b06ca7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=abe4894e3d90f125f4197654f5fe38a965cecc2d74465cb13a83b29d2357e723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=8a6e178e9ba94b528dea1b44293b82e885d18f972ee5de3998debdf68e908b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=588e18580f96a38975dffbc599e4092728b97a1d0ab05fce9895ec215be55aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=69d55838239714b4521353cb95810d47e388113b1fa61537e01b242a8efba3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=9c89fb48ba7fb3ecf3fa69f441926c2c15ad883acc7aa96908618f8455241cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=14479f3382d49785c766cff11f4f5ee1756d1b868df463679f029a382fdcb041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=d343b715747fe97525f0bfd25b591b8eeb2004b439e6906c34813a8756810c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPJD3AW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDOLO111abC%2F8OdbdBlpWXXuJZ%2BtynmurjoFJ%2BmePrHMQIgIauJ7QXYbvJ%2Fn6FxBLtdfztIr42ySkSXSYESPrTNvCUq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKZ0NhUP%2BE0udCByFCrcA02uf%2Bl2Q578XXr1ejpbHMP0Fvu8iGNB36SWISXQ0n8apjWdQt6%2FhdpSj4N7XLnT6K1KC2hajJKIOlaAJzFzwHHV%2FbOq8JhvtWbld%2FgxVg0IB%2B6FBd2VvsbFH%2BiPlqYKCFhsmmS4kfCyR2yO%2BZohfr2c%2BvmsGI7y6AdyxMa9aSEQ%2BKcQjVcKbo0sLsDyFnm3D2Xr6aU6AWoWdZmPU8oGSKfsWXMSlqdrBmCWqEYb2gWoLxJvFXj3PCPL74Sdia3%2FMGrKBqn13rFcRJvXMF4VmmRWk8KQKokD600RtwnwrstV%2BnRbj5FMdiCBeiAAdGQ72AdgcixcLDNKbOdham29oQbpag6pa5PJ6j%2Fi1VqF0h8oBLUMeo4BcSroX9MiJH4UT627y53aBYnyHBwxkSlur7BXH3fEoMXKyP0WiwltcaK1XP%2B9%2B6UihtT7IJTB%2FU%2FBZip5XmfmPxYBnnBGuS4Nd8xq4iK4CqNDfulXIrmxUc4zyV7Brw%2BhKjYrHFUpDxDLBZSivaX3Q%2FOBHqD40Wv8bXDuoxujVeQvbIAuiD%2FKz70N7qoiLo%2FCyPQ%2FfJbjJ60dfvr%2BYW8AjJKVPIqpRZELpXWsqCH7KJ6SlckCDs7rLxljF0K1xsqriTeFc0R5MNSr0MsGOqUBdx5AE5u%2FqV6Mm%2BDk8E%2FSi6VDv%2BfDwwx6DnmmKJlN1iMDbDHJ0J9ZJ47XKUKVL4iA1L2gr2OTUBDDpxBvOnM0Am9f%2Bs6jJgKqhxbkUP3iEZveDZzPHuhLcAHIjzvtklvxCI5e8k93T%2BmkXWckWY0s5YNa%2FklpT%2BNL5VkEMeX2rKJ7B%2BXluD4atO1bhCvBANPXHdQlVjpPNxAdSygYV8Y1My4urxcA&X-Amz-Signature=b4bf0abfd33feb6042bc2333ca359e76bd0be5bd419f7a4e48dd53903a58cb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJP2XQN%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAsVZjagtCYSuu7Zs2P%2FtXC8LEy0SlpzlUGukLuqLmHTAiAEBETfdKnrYkZMC%2BzIyP8eJkl3%2FxUdUnct%2FJSCfNDU%2Bir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMObd92xRm6su8uzJbKtwDj5qqsukr4SoTcUAMFo7PlbtXywClkP4SsMKawCj3uSEX%2FCh3m2hKJ%2BT9ppmOrRpYl2FmnCAKbmaeIBglyFL7IXCyHFdBGjqjbboANEaJ1zAaYumC931rj406%2Bz5B1lG2XIYHSjIhvM2OSr9tsXFA2pbChBV8K3fI%2BGekAA2ylGJNgOKF0PQYWNBju1zubPphIKlhgVWmsBSsUsvvgfdki%2BcBBp76eyc32kgSzdE3XdiNSxgazKKSQB32zJfk9H3I6EqY%2FICC2xtYlAmOuFcrnbIuCmJp0YHDH2xjPQ6whImoeG2hv4KEC7tEFySo8QblTVMtEEA7TtpljjtVWXPbbLCowbHXf7g4fnVfHrfrmIMnwZ1PV4lfRi6FxhKCPxQmgZ7r5WgOSZYGNJS6FKiwVZsAjc1oE1MbMydZThKaVvgQPFLQ4dFiDtBb5YyUs4J%2BFk9fsdKopGDM2M3o0isvhBn5h896sVrEkO0SmP4LC%2BRTh9JOnzUJ%2FoEb9YPFT7CRKO57MaSJmYrJVmH2mPwU7dMS2J%2F%2BDLPUV%2B8cthsEGGQkTn7fZRNokN5FnVSVizv%2BepgfOphe8%2F%2BW1s7U4M%2FM46Hqz1%2BO9Gr%2BxphyAM1IVnZTub4gx%2FGfL7hD8a8wz6zQywY6pgGebBoyGWwPM7Pdpvj31CJ0lHNW9awAxyorNHTAwE9OK%2Fj0sjHxVesR4%2BVUzom5XDVjU%2Bf5dx9Z78SfCz%2FfxVnP4FrnqfF1zlbR6UAMCccpA4RICpTkB62h%2F7PdekkHqGqHfxmCqY3G2cr0xADm1gPdCi1VUFxFM9iSnuL%2FHqLTqpX8A7%2Bb9gbDNZtio5dWredKWmbrETAWjx2vSwCexnFivRP0UfYP&X-Amz-Signature=96c1438ce023d57ffc426cb7e04624fecbaacd74b18f2ab8bf71a0bf75c33b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=fd09c292bb4c3a27f0197fae23f41b4082476f64017ff987d9cd948ed8d1b8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=38fbcdf4e0e971ffde0c143effdaeaba8870bea316b58457249917acb8d10450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=2fbfb0f637ed3e16d7c79f4ed33dedcedc5e0b9f0105fbc8198f17f8d83bce3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=cdb295255101185ee25ad25e92a5c89c69819eddfabd71f00c53e34b5b01a6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=65efa925cbda28de75e91f13d7eb191b384d660e63d2df21d14271ae63ff3a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=f5ab307888c80649cfce9d9da2a690235e58634016089d2b323e755ff84213fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=c2ae4cfa4226610b938c3e96bab332ae6064c344c74a1def77749a9c92ee257a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=7a520fc279e54fcfb393326d392d25b7521056471c9225eb0efa7d3f5c5a17f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXP5IGW%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICC%2FSvXQIKSgpy7%2FyBxA9CJEqxQhAsklfjVIgYRsmDlMAiEAyoqrjMvSVLepA6dp7TXkVRGjwLi57SMmyQcpvoHXb38q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKB668yde%2BfL%2F2dqgSrcAx10H8cTVgnUhzZ9hA4kBZym5%2FD%2Frn134ERrDxXi1FfE0rl3kwX%2FFjgFKfF1cs14mDKYByTeOc%2FQql6bcpPE8ydeOXYs53ZTPNL8%2F7ooOwNUXg8Eb9r6Rrl%2FmV9teSoAKoSE0XKKLo6OEIVwd2YRGf5ES8u9hi6XKSw6k9gnZ9hkif4cwjWIRRGapvUmlBOl%2Fctab6nfIUz0niTjjEWWy9JyMSeCu3nHOTws62W3NNcAoRbeRrtH39biMW9Rz1cNqB%2FLc03%2BGS5OhvDxYSmjP5agfscyDHm%2Fl9cj2jEYeLCtUVwGglAut%2FqCF%2Bnlp89AQevv2cbDGpv7b10ts4Y0ET05VGWPHTADOcqkIEWYAALD4mxzsS2rcxp7CcXYkIwjDCY56zgUanIW554C9t235F9bi%2B9iSkA%2F3lofa%2BvkQwp0JFfNg0PVjnDdpqwhFnzbMYxMgTeQyphCiSNQ%2FJqZO7fOwmSb%2FJrwZyImet91JarD9Jj6bxM80ITZu6%2FMDhQbpYBQN20SuPW6auFDKoRtLTZG%2FZf5ir48g1kNtkCIQG0G1E9GFczuDKRNik1J1nnZ7moiH7LdpuTkctcKXPjxnlmWpYI%2FulwwXoV6NlUszF60SneXcU1%2B6A01ZPH6MOWs0MsGOqUBU2pcpO%2Bw9jvxuq9csNQeq1KrKl%2BO0bNqmj5Yvhxqnu7fqqA5OhQvnDFzZM0K3UPZ25RjpRl2RpX33rx9rpxFsfnjfqUdfFkmSuI%2BQVl%2BnekeLrRSVLoqDRx9NlYJXmR7FxuCEmVDTO4XPMiw2bJxeJVD%2FI6F4kQjWZjokHc8sodJD%2B0Ohn1uruXWHcY3Wizcoi7XMWKyN8y8qOw35zSHorOPoku5&X-Amz-Signature=f7b777b02d53cd6c480ab89e6f5b11628c98413cf76faeeb6059477529612ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
