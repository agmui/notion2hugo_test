---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=eb4faccca6ec9d683eff7f4f59750c2f5bdc49c14978c024eb2b30bb7e3c1b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=93dc4e142e701a87166f7e320e1b503942e54dcbc499919e30b90ba7325e552e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=628055e5cb102cfc00f8f69e9d5e0c045c858aa1ab2ebd63d212ea67bced6ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=1b77946d9ac123a428593b585844c4ef7e17074c164a704224a05af7095a04c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=bf391f90e72d5a27066257439e34f265c04f59844bdd5fedccf030e6dc9d2988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=70453fb12b007733dbf53511357c0c497ac901e1712243dddd6d3b72c19457ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=3f2d79f9d3407ef5824e7bba03b523d8456f1aedca616cac90623d2e7d694b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=d477983482c82758a6dfdeef13d29a57c86d6b68dc0b453131f16c07cb28c5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=709b03444a6bdef72f7918aa85bdf83b2c23f352f83421986e2eb40999632357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPL4J4L%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDS03W%2BGVTq7MEf6HSa0QU0pmT%2FhRuofzAy7aqi%2B1eKogIhANqp60fUzKazNX2KMKS11kJtqpkamT6iHPdpmAq29OAGKv8DCHIQABoMNjM3NDIzMTgzODA1Igzlt5b5cYi7tzvRCaUq3ANV86RzgjQk5zg5K5Q%2B9FBpn0sx7lVE516qB9dbxFlM9KnRPzU1ZsGBuKF%2BdBwmxlDLw7VpacLm0pu%2BQtgg83DxPc6psWiXhvQdeUdJncenhoyrrok9zQSt89CYZxMFrgEl48DUeJcRZPV2ArlxtEcAXNxxvCdpY8qWTPWgxWJZeA41riHIsyFhhDZxE6WvM68A90UYtgfivevH%2FFUjxuQNmZ1MZ%2BECH4554IwLBSMyy6LZYmf%2FG3U0eCU6zFXmqw7o2Fu%2B9a2kCvrQgqAObIdE01mjT12jo589mzHIyjQyEsERePJ5gn4DdasBmeMyNyQdX84wxV3jprFA9xmMOsfUkwF79TmHGKJPHSldPaAkwf8rkXYHGBjDxC1gz2YAFKyAo%2FiOzrerH3oMS7bi2q0YlmyVB3kfZEdFepCdgWRA6MZ1JvX4G5Yrktdm6A9UciAcNvEVIohJoTqBzkMBi3%2Fcq2PbDpiL2PtyjCZWbRDdpysgEof%2FrlCHTN84fb1FP0zJsrBRor496tnOjQLqIZdDDEsgNAVwVvckzZUgpdssgWtyjwLGQDCU2XWQr4KkOLl%2F5ghleYUyYs21iEjtxBbJ6yvT6sIn5x5q6fekziLMBwmJswrLoINtJb9G5DCL3pfEBjqkAWlffYTHeJ6UG%2BNX0KNKbKcfbst1EBmGqi%2FXgVnWnFCanpX2USiLR4qwBq3NiiKwQkHELUx3fsOjct3xdCFS8XVWgWK37VK3tfT%2BgAnb0Lc3UjyyaRVEWmG3V8w57d4wvfrc2eiFACQ56hMs7f8NLYk1vM4a%2F%2FPZBgBeKKxuaxROvpca4wYWguntjcGsd5bgAg0hIsi8DewsHqfjA%2FUG2C0QRqWT&X-Amz-Signature=b4b38828ad6030eafd0ab19dcb42843775d7ca164978edefcbf513fcc6007ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y55RVXDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC5sLZXhKkFk87vFqAcEjrhIwvIl3xYOHUrB7Zg1gADAQIhALd0MR%2F%2Bni1xrMiLR3zPtHyQYr0zuna1Qhd2bwk2Dfe%2BKv8DCHMQABoMNjM3NDIzMTgzODA1IgxTOA%2BDv295I4fQ75cq3APRiMFN2mlt%2FiQdlyOU4BDfjISd5nDzP7Y7OK1eY7oCjUdpVHBbUhRBYEJjdxB%2BFtuU5IxXiah5O24IAsZXvSxmKsl%2BCCmVUW8Zoa5JkzEtY%2Br0%2BJ4zH5cwxCknydtdUh4qtO2qQXuf7v3m028bidcxIyc6hzBQq8lweONW2v8LAH4g0pmj8hK9KqGjYjVgDYqeB4uxCInAwMz3313Rj1JKg0nc83LXsk1qrUcALMllIetsJS84HofdDOY4ScN%2BpJTEyLpZ8JIxdmltTFpcAXGV%2BB8Oy%2ByQ8pQ0bRdif%2BVqC%2Fl3MhxBXwOFmuSnvLeAPbuVRyukM4Z4bmnUV%2B%2FkrkEmzR8RHngbgOw3WHwWnkp4Mxl137SHd%2BfPpartqAN8yJuShg1k61CgLO3PafxUGjLHTKHci5Rt7kg%2BmXIdxYTuK3GF3olTk8ucR2hKPPkLUMqB8uNaZaMJn8chopkU8Tkgzd6Alm5aQ8AlwggshfaQfaYB8JgnCq%2BnFxUg%2BpLP3SrpbxJFcM1UH%2FkpWMjD64uOWqn4bonP%2B%2BEXQGvOVOy8%2FRJokvI39Efld0xRRDaNws8udr9lmEcX%2F1BIWwM06uwxlSzZtGT02lM5aRuGkIXmenUm7Ab7QiaQVDc3uDCa4JfEBjqkAdFIHIm7EB2dwK4WZ3dWwHWXc9RXFnzmo4PsTn5uRBuF4EjyJNqh2P8G1W8meoHJB6I5lBvmKOhMIAJROC6YECE1cSRSw0vvEYXJCgQuR5mDg8l4433BE7xPNggKewD73K771D6zwRbAupDZgOW3OLvPujCu%2Bikv8mCLgAYo9bEBnaoRnly3YzpfrILew5bdLKapWg18tIKNa%2F13pUoqudB2urnE&X-Amz-Signature=c3c027e73f33ee493734760c7ce14eedfa52d8d61ad2f29c1e57538d392844c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=bd797546c1009ddf8f2309a4d1945c0004bd753649511372aceb41e4fcb5dac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=aabe56a3f246638bc5088f40f65eefa960a24d814bf51f9c17c8032decaa2d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=e5d6fae683806fe3d998251cff1e7d6c53f17b19c36c007b137f9028dc7dc3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=cd25495a8019d1897d62c612fc4501dc1345c9353b90dfb385c992766d5ef915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=50633e83afda33eb47ddcd9a2236dfd5d5697fc6e191077ddef3d4b861b9c745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=ca5ddf8f5f0e6ae0567eaeba8fc181fdfaf70e01e6078b238bdce168b1442607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGORAD3Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCEZ3OrB965Vck%2B6KaNlXfzp6qwemhWN8sxrNAD6VMwbwIhAPGeSQ4VbJZzmXtJqE4zRKIJHcjItiLW3sbboz3YDX3qKv8DCHIQABoMNjM3NDIzMTgzODA1IgyjVSu6oed88Z%2FikEEq3APd6t0lf2YIcEWJZeYLpgBLlf3T457n%2Bov5%2FkERrszP6ZusllNpWn8dEIlHQ6F286X9FqZ5SOsOP814WWeEHfbP40nsuFCHgMd%2Blc5%2BiyfVuqgF9EdSRAE3PQ1PfFMSORDtTz%2BU0uHg3uildHHRvsDFvL%2BHfctZZaLMRfnwRNGoXmx3sOwlkKBiJTL5Qk11UIdng2oidhNR9cVE928ciu8txhpyUMooe21WDGHK%2BKSbeBjd3y1JmDFGkdJtk3xkow4vYMWe5d%2B119VQIk%2FeB954Ya4NPHehF%2FmdaPBquZQcbHqKoJlQ1MnwP43So6R%2FM%2F6odNRuIqkjaYVZfRnsKh01EYLNAS7c1IpV7DqHULfa2FqBIPsRIaVbHNTxcVY9etYWotaxOpcHrSKN%2FbYrACYGcjSCTNmas1oNzxi05KfjecPeRto2HwUmlw0sOJeUhX12mR3skWZIW0OijX5EWZqJJOLlE3nxTQ1xKVYq4pg7OeUxYUuh9jfBHAricw1qRmArcnt7Kb840GHrw1KCKclj8K6YMiVStFQdl9Au4xqsbSefaHnMoschj4yGd5zB%2BnlOWW1743yszaZITrBgHYjKiOolrli3%2BRNFUhvzIUCkmlO9cF0s9ZMWP8133zD53ZfEBjqkATfGtwxFg%2FogPMDEiB6Y%2FLt4MCzKrZNYkmpsPcndC05cTT2jvtCOc0kLstBko1AK3Tbz%2BTIF4O2gLgRff0ft4T8WDAfN2QYN0r9cQk1Ya5F26R2CZ%2FGDKzmMJ9iVSWaJF5frYwvS7bA%2FQ97MARGVZAoCoReTXc3rAowKxi037dIqmIny5MrJttQNBPq7nMxAiC9VzW8TIGfGMXc63fStGcRnJUaz&X-Amz-Signature=8e474b6a00bd90bbb346ad4ce39d83ecbdde3dc5dbbe4ee67f57db5ecc7ded77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
