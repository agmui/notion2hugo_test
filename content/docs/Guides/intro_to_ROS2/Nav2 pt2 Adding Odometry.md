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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=65e22cf43e08b2061ced1130658e3543ff1661ca71ef5e9de29cbf08e692fa6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=124ba9cf1ed88858fe50f20bd62ea5e5d695b1a2fd6ed4196914e56fce030425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=96f1b3f2392038ecd21d6db36300a61e27db8a2688d68e384b203c5dc5057860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=1edb0deb40ebf6187f77306768ceb6ea30dbbd6aa6b550312dfc1a51789b4e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=3e1fc62c2dd713dfa94c72bd4f47925dda2b914a2add7d542e94318f5dcdf75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=4c05cef4ab12d939f43abd49897f14befe8617a7bd56cddb656be0659dce49e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=a72ccf814a9b62c7ed6806aadf4d156da172370627a8b132bfd0b5a6a22883d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=620a51841754a84012e5c87cf1f06b3f2cb6e75984bb5ca2c19654ae054efb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=1026f4145561bcec01ef29daff63a2b234014b9ef11b4808dfd179d80c821a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D2ZZ7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOUN72iYXwyPNGavkEyavBAfFVbMB4WsmEgY4jBHL3wIgMsuys7Pv2OKiIfse1MWKFYZjKRbCjXLCqeLdO7XHY1kqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4GwNq1Yyun1B6kIircA0hZxr3rC0F8iXoWw0fS9qvwTI98QCZb5ZSiEWMPcliO4izIdto90wlmrN7ng8SbtkDXqMhNEzMVLoGeYMA2k1C4Bf6PCfHH2dz0u9X1zOjtlAcE9HbsgrARAQvqaXZP1%2BlJjWmWKp%2FW767S7qrnAptggP88ahc8qdEfgjY0Cx6tuPkO2yrlH2KACQFJEQlXjAMkBWjpmRvyFeMSCpDDGVQ0jljKtcZw1DeIaeRysRYVYaHwZY%2FQEIYRXo%2BkZxe2lAsEWzCvgR3ZFsdpUPw5YTM5YeXLBJzbtMgMdQlBuywTw6V68As%2BEyVbgyMBLvoQ73xAdSFhKpkPwBaOkArf1V29bC8ucsw6o0n97nVMJKOKhcArv2SGpGXCz4ai1Y6Q1htLkpEZw6ff5EYOBeiZBMkPGyfP1zUWaSKtaKy4MIa8tjKEDy%2FuU5qerslgKW3%2Bd3aAYyl3bDKinX7YlYovAsaqhnCv4uMfil82tKKm2OMLrmXtM2BWk8BtdSqaEPAYElligMcaAx5QtgC8mVdUaJeCyfQ1YvYIajjL11NDc%2BwTOgrybYnaNtlhWTY69W2SqTBDLR2RBhMIEf7oaIJWdkDLDDs0NSyFaEpTI%2BDloxoxEBocuEDKa1rDdE7qMMDStcQGOqUB8v92PLPxzaWqVMfv8Zka%2FkypYEsR8nPXNkus%2FcJ%2BpxIdftwH1H7U67D7YDR0YD6JIPUGFiY%2FOe6GMlCXIdVr2hq%2Bxdcqu6HNB7DzG7oL5RE8QnRuOvLo7XwDQH2%2BCtlAVHMPmLWL0ePzcwLDuGXTthXlC4W2qx3uaGXbZrIO4PYKuUID1Beg6ZmNis%2FarH7oQIHsXzzZxncVPtNUqzZgtwJ6nyXs&X-Amz-Signature=a0a0447fb03ce3de2b3ee0243394bbeef3ebdb3ad8cf289e177975c60a56e56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTX5QY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCJmFKZ8HBqgAQ%2FXY7q1peBpQeiVMXMKBSHwBBZ09S6wIhAJuKbXpszMltQofW9ScCinRGeo7K1tsvEf0Rkh2%2Fgk72KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplYzCCAYaWvEmz1Eq3ANJNLf2TWeFZUlHF5YrmvlaahDkC07hGb3a9AdbrzIRihGzNKx11ENVujJvFiVzTE%2B8SNpuSEvDvgOqET9hCMqtB4xMebYXrt0NIGj50qlOUb4wYlweSOzC6YwPGhk1pyW%2FZIjW00vtMtGrlWgehAd9RsKrA%2BwvcwZQSt0GK2KS%2Fj%2B9rPUwgmC6%2FL8InOtLCrxu%2BzINocAR8mY9s0JSZaJnoiRkP7YRcgtOTqDQSp9AYEoJ6dF%2FOmy350%2F0PY%2BNuYrVaSUJk84s61nGdsEXoBNR25004FfEN86Ad54kST%2F42lixE3RiuBLBVSOxDIJozXwgloNAio0SoIMF9vuymJeJkYKaYwTKTAAaet%2BlxzBF9WFay88yeG4amhkMOuyi4brOBZ11rufcvydHcOeMEaVT5p7GmzdfHWopbaaCiSxWK4iBY7j2ckJQRImQVhN1KjWnlHuReef0YmrprKkXcXdlfWgt0pAa8sEj087xbi6vDrrlxgnqV1%2F%2BmnvGZHm0WV4rdsjJzrzZmlfyj94SRXuNv28sRS9Sf73EHJwS%2BHXybdeLJqshoiVRzUW980prdpkmQ3mPc7P05Rd7SgEB1u2wHu5RGhsmLFQx88htLs%2Fb0GqM%2BrvOOBjxsraHpzCi97XEBjqkAXY9bDdepvDRmHCFTAfSTe38ICEgXKY4kIY8JY6z%2FFWoUBEVyootCj1DNm7VJtvuOX2e9diCqnhSZCuHfA%2F63suNokaF%2FI2NhWyfcFCHMHVlcsYKQge2obsa84lPy%2BXvcDxoiKr8FeGnS4KSVVtFTGAf%2Bx1xCgFOdCPHMMRx5vpZ76MWNyg5Pp4piwdTfjTMCdtXPF8Bq5Mq5Amivs7rJxmdcBol&X-Amz-Signature=b7c6be47136cc96429887b1f7dc5d53e83618c5df11209c663fc36ddaf18da70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=a578efbf668e8393ac3771ab6f59d6849fe68c22ace5810f53b066695cd1b8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=700acb387f8738cc212c82454fa908c39ab6c5e9907fbf8b05b14600f689fe0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=77a6708a9f2700622efc4fee3e0d15c35338450c2802a5db09073ed1ad4b3816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=ed5a502b872eba3fca5718fb6640e0cf11f1cadd6e47c034b2c3fc1c37999b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=d8f2be203397d27328fc7f31618c3d7b585541363e67aa2cd14d7cde8426f621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=4ad3496b03e2ec22dbcc39b0c23962759f0e5dfeccd931b0bebdf48f62dfe1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=9112a09c0b7d3021a25c11f982d6463b5ee8dc717f2832f87b713ac5fb1f797c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJWFX4L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyium5rkm3D6Ep3psl%2BbazGfCTX1g0pNFxxeB89PgGVAiEA0WwwHesZno34HM%2F4ZfiiZsqEFLlIxLc3QcvqtAW9vaAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B5BqlLLFDA1IQCDSrcAypqFulOIrfDOAzi9bfWVboAVb2F%2Frs7Au85wTcT%2BvlXhASZ1fLo%2F4nHzL5hZs7JFsgXl9DDlaPAZ8MaJUXcjm3VXOtjd0%2BGWzhzE5LKlCjjlC087sAT5%2BCUofCsRvAKgfCBdikmQRpe7COYytqN1vDNCPSTrRW0RAWTMK%2BjElF7sX%2B8bETHBW%2FEYozl%2FBIMbgzX43P69EP%2B4jEsC%2FZPYn5Ux1xWJQ9CxCi6bnysVrTfojXfg0gfEhYPTWU%2BAysiEIWhuONd%2BidH6EbflNK59j8yKIIFMnGRYakABDvUzL5SOCW1VecqpFT20Q8Que2aALVbT%2FmqqIu4B7B3P8qlH1iyXL7FgKKAQ2J6cuEKIkcy%2Fs%2BOl1lMDOX4gpLaaGHvq3ry7%2BONMH0R9pFueiaa8yHGF3JEz8aOUXkqDho7nXlEBBPipfmvGWc8xFEQ4DUhG3jMyEp7qA%2FyGIYg%2FBVakGWaF0RSl8DgVnw6GfnPGpZCenLAy91%2B%2BKX8AJsOume1hgbO7OVjFKNPxD5g%2Bk8f29S73pLbsObhhge5vYuQ5LD40Q0sMKBaybokvssDPo%2BZJ4X4JeTnsU4aPuuzYFGKtPqFYVHzW0OMPN8LdbTQK3k66JLwYdS4vAIiJrM6MNnStcQGOqUBwUMPdFpdatrDPy19d0zcuF7iMdcb0%2FJ%2FPEVWYWA3nEhzxE9VVBKEGfOpk8jJUl8Y3ssS8WXruVxBrP0tCP07fQJGsRgDv2rjBSZUEcGdZ0H8tQcH%2Bcqy2obJCZjl%2BDVIgBb%2BZ%2BQD9EObPMIl7AxdWMtA3q2NzwTwP5QykbPjUlPYNCWVJOpq9YvpbTAvUrDbHPHjwilx6kV%2Fl%2FJcpxAnYb7%2FdawR&X-Amz-Signature=5a2f596a513908b4f48f0bdd9297bacd70ac2bc5efc7c18d5a25514456aceba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
