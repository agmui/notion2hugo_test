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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=7e1ba191826e1088db818e339591ea19b9ea93f3850cb1a17b5940ce7fde1a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=a2a77cab535c1627b6e3f93b680fd1f33374a7f3cb5c738685d5e5ccb4167ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=1c41630d0b92690dcbb1a6bd1d39801fe1acf55d3dd110feddc23087b0d6e14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=cdc7af2302f7fd08925d1600b0bc52f9dfd33595532fc074e9a63ba5c07d4cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=bfe1791365bf4d7a56388844fa89fa5d6783eb212e80a23bf5b224cce7f65bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=34ccfb1eb6d85061496c35ad27f63a30d45e40969139796df1b5a4ab3cf895f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=2886c275103136aa14f395b1398b04b74aa274f79578c852bebd52a02af6dcee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=a07e1df1dabb48a85ebfb596b30498f205a3bef990e37dc4492ea774380f20db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=2ceab570d756bffff1ba599d69b25e0aa73b29de5e0b835cf46134b84e0f9f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZBV77L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCnID72GENh0ZNP1fNRKQXTUEg%2FhXKdr7H24JM3w0s%2B6wIgBfhxB7Qre3fYHld24iLRfuFZ3bAXaMnG3taSX%2FKvU%2F8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq8Hto2ZZftAIDawircA%2Bzvf30mkekLkOReHFSWiczjdZEVALepmg9Yv2SuKiifO58y6Mykm%2F%2FWCeOtxBGXHJr0B4Ia573GOfeKx47UQaWY6P24DIyHONX6TfQ4roD8aeRHZ5iPp8Uu7liehAmMZCGaJzIkCaS7EeP%2B3CnW5FyaZ3KSHP07LHD8gx%2F8gev8WLRIDPJXhFPj8UB7tTHE6l8SD6MIhxGccftQAonj%2B6QCcQsbBKcDL7bFEPdxtsqCNU6cUYJtqwYbxpqUpIwzVe7yuZeEBIjYj6reFJ%2BNM%2F6qCQd6uXA%2F9a%2FXkBcr79Ryl%2BHhV%2BVEVx7Y0By3cu%2BbaccqSD8g88vtaj9lde4huMWAa2EUYaCHltSyEtLbL15XMmW%2BJN7%2F8SEpcHOM5vbs%2F93jJysxxScvLXZY4o7UbvTxotBYJ%2BOmRuiuFFwJfnD4sF40wh%2FchldYuw8GDsFe1zVda8gNclEElpivJjp3C57hkGN7otjlckCBR9QYLydmbq0EkJIFSpKfTFBkQcAsJMQSt0PC9DTY%2BKZf6FlZ9Rn6Dg7l80Il9uo9Zwth4AvHtvJ9l0egumPf%2FGoE7atHllrmPKYwAOWwYRST1SIj7jU645lDc2i3yvZlZodWuPB72J%2BT%2FjUMWArB%2BzxTMIXIgNMGOqUB65Cag1cHhrb1Y8CQ22kP%2F77VFhTfPjQU1hvOYDUIIAkGyKzU6zmbFIs4Pvw%2BRaRJsTteRUO51DqFpmbT3b9c%2Fp3OFznftQhnHgo78IzG704TIOa1PbekvSx%2Fv%2BjHinPNpDap2wsL%2B7%2Bc%2Bt4HuOZ%2BSt9jAj9EOgxW6cKZbEYw%2Byf%2BpwdM6X7%2FrrD%2F5goeyU6zrXW%2FBnN9C4J80yY3wBw%2BfObjcmAQ&X-Amz-Signature=c14f3efaabe6d5f96da4819a36e8f06c20d9918ead11d76bda6c191429f0977c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTCI2HV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEiP3MUWKz4%2BKdBZbgo69504PMUG0E8mJ%2F1gnAY7y6RIAiEAplTzAI6tiOrINUHLr2mvnRwdGloin%2FX%2BHaqeTM%2FDl5EqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDSQeJhjVuHV4iBVSrcA36Fl3k25EAeVmp7PEHKSLfnmVgbKc%2BjH6azaK3lmweviH2mjy2mp3Z%2BbNQfGHecMqeha1uPBTK%2F1mAyK5Ngm4q89x7mb00kUVAibnRtmkqw9H0qSRANEW0GiLJ%2Bq%2BbPTQbAMpVDg7WLe2Qzw8FpmBhm%2Fgjp%2F0pxWj6824pifqWmtv6X3sTHyQQFklnhrkt3zdJOUBYkoid5%2BD1NjBjToClh%2B8i0wZmMiiiHu31yzgdeNp8oEKRm4VC%2BkcvRGz4j5f2rLCqpxxrO0V3YeDSCb7PvZgB3J6AKad8ce4YgJ6umIve3f2xn3d6Y690kMPcoA%2B4om44kmN8MaVrFBF2UHr2YPBWFyNJMDgSbBIlDHNx%2F878Mr%2FaoNXidgqpV6UCGr%2FwXjrDLAMKK3ME5SQqWdQaEIbRCZ3Bf4EMu5zrXhxa4CK3IqWYZmjZAHQIKOZY%2BX%2Fpm8Fxk%2FOBwRZp%2BMs%2F5MFGBNeus%2B%2BLwZqXcIUUKItEg98zS7xyfapZbRGwFE%2BISwDRBgE3Cljk7PDudUsGxxFf3UHY14XtwXAzxdCb2ce4fSbE9UXauWLKwMdBz%2FNtuQILrp9Y%2F0AfBFN29BqnpeSl8Rgp%2BRJbqp3TFl7foFCgso61JxZnaT%2B0XeSUNMIzGgNMGOqUBWVRPVL3tIUMMTYPXR6MDo1cOZQPq8FmdD6rk6E7VHsJrRHkhwrdVc30y%2BZSBQprP4t%2FcsqFC0vaqspWkjlUG1Kh93X7w0WqrOzFnMPmf3O0UfQGzAHAZ8M3kkun4DU1O%2Bhtjs%2B8lUPTWXUKH9cPbsBsIIlEssGv0N4%2FlWiRU3zEHiiCC1DfJ1mwF4L0NW8sLua4rSgxrSXev3GBkXiauN9f3QfdN&X-Amz-Signature=490a29a96420787073e539cb76b2079898271e930ab7c5ce9541a978658d3d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=a33ffa98860a2c2bc0aea90e03d0adb840432b9ee87f37e00c44f6618cc8cf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=9726a28039ff6eaeda9aa73c3e87eb357f078a332c6c28c1f985686dc17f610a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=d8cde2dc474b8969c5a781a887c665e21fd7cf4e7bf8beecd0b6c6426b8a7f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=95bfa7f8d9b1c143b8a1d6efe5cf13abc2bfe6d044af7324481478fc842a7907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=7dba5e13dc7cc17616495b65795408156190ff6530c19162a09bb81690d6af29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=08cd46b09713a40ac88eb3d3f6c8398406df0d7315d72ef5ed931182dc6546df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=a39d832639b3a0d3aba3e183c973515154a0201a2caf502c37735f10e995cabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=8188462febe844aed64c60c408da30d29e6890c807b2fd09984603f29e1310e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IC2IXPE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEN2wUhTmi0NSEFcM76%2B8EKmtwgAXqU7opm1SFjwltHtAiB%2BOObmd2LD7bO%2F%2BKcNK6NCRR0av4Xrq1o8GiBEaGbIfiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2F2Jhzb49Iod7jx3KtwDJ3S1AmUnvml9Oz4%2FhHFLNA7yg0hbb%2FoPImmXjOQqtcUQd0rNMl90Jmj6nxCL41teCK7j2Ikr8mBZ%2Br9A8cbBmgz4PFEIkY9jfHrklHTnwJZ46x5EjkJ0iORIUHz36eEbPl3cj%2FlAo1hc9NHBP54PUBQJHte2lJaUYL4C7wABpOBAPIfC7Voy7GS450Rm3ntNkm61qtBBzumAQxLKZvwczsYQt%2Fw1QKQtZMPoUB4Cgf2BuVmshr6famOmd%2BoHszF85yWt19vImKMskwXMYtcx8rwl2hDte8qFeXE18toCSbOHad8zdBphtiTdciNzcAdZ%2BbjgcRH9tvBxLljEdIBPThg%2FwaKW5njaEHWdDCY6KAskowDsH2VUcdVFHAnf619F3dIm4rZZHSm%2B%2FHonloOkjvFNeZYJPTEFz9xtYMxNvCYTLxVRLONbvB58tg4NRYjBdDtqvYQ3%2F1T%2Ba%2Fh%2B3%2FKWEzADRxKgmAQvw10OrKD3uFr9n4FjaYH9dLWq%2BLCuN9gL1z32edniMeTgTAYC7Ehdsvy6aSThZUqnB3J2NdXx0lPJ6uLWTsmwHANEBa8FoLN4eWsHzvq%2FGTs2Wq%2F%2BpIMvxrwJLzhH4qo7nZYCUILMA3XohrN3DtwRA22iyhgwqseA0wY6pgFbIPW6uU%2F3nrf9r6JXeolkN3qefpgSkeXxlLhafOBANpbrUw8F2ihPC10E4QCySGsrqGgtGSxrAbDYD8JvModSg24Hs3sBeIOkMbfnLQKXyybB4lJKZsAC9%2BJMEmQMwubzRYqlI3Ul0%2BF92TgtXeHB86Rd0vvHY4MvtUsvKgYiVa3Gs6%2BZEiKybnUb9pSqEOdXi7JrFjMcB9CQOZ1ostFTesX481H5&X-Amz-Signature=5cf4f60bae6606b0cf4e47dfecb06241008d77b6b9ad5f669e553cfa8df24e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
