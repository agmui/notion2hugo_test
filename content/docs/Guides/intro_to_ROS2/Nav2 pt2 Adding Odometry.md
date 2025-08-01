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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=9d83c97a4bc70a2103e68d644fe35939af2ed481d42acef8fa24bd9d6d0f38bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=3b17a124159d520fa957e41a84b5a01f8b4bea19d75f4dbdf8bd99626c29bb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=b316cbe403aa79cac6e9fb6c28784b03c3294f1986836ffe10ee129c153d87d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=d44fa2e05f0a405cdb54da6ea923ccadbebf5bac52f20444e0364db7ed7e4224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=0a086d320085d340a86d87922a5105c91d7e1caba9e0b9bd57b87788632bca25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=634ebda0c03aa45fdfab4e5387f3feb95f0c0309d5e55ae36712403bb625b29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=e4f40fc56bcecb90d4b400b809823e8b4c52124722017281c43a6488572b5e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=e69a3e4b4ce2be241f11d808aefcbd45b4b9dcd307400a1863069e9013501849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=b91f852ed0f64513ca335ee729b3f4c1e763a792dd9631a84801fd3c1090b8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCK2SKJG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM4jTOz1MWWvTWnfn8MSPqIQOsa2AdIvoAJrtUlhCEeAiB%2BzwlADhdN24062070c7FCkes6BtRSDSqoxLk617RSGSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU5JaLju6lwMSUL%2FvKtwDFr4tvTDhsJO5%2BYtI4%2Fe2MvPs%2BEZcL1cX5%2BjXnnYO%2BSRXItMWZVqa%2BTfGcvjw44bVBdcFIIk8v0bzqK%2ByfzS227QidFq%2Bf23eZ4y%2Bu1FMy%2FoSqTOm%2B3qM6zwwneqwqkQ1k5w7%2B5Yu6cbN2tVDxUzcPhFW7aFFMGFRn1mA9nFWnmLCBqFhuFBVN0x3SoKAyQBjDKfTlkw32LJaSJt%2BgZ5kpPvdOFmqS4CXauVcMG%2Bz6tqr86vX4vsqEc2Qwwkc7Sq5vyBOOXMHmuiiHnwRmU7yzEO952nOpKclXVxE4sniDm%2Fy72JAjOQygNrp3BXdymJ61%2FAa27tRenJ2gubrs%2FBsfwm0M%2FJJJVBDoC6MZ3JWXIy72v%2BArp55AWihTsOA%2BMM2owy3QoILuEVqVI8%2B7fMkJP%2BasQMa8bAMMkuonQJgSSV84AL7gmJ7Vagn%2BX3UqFOdM4N5qwM8WCEhLMvvXr7c9yd9w%2FN%2FOD%2FRAlVdu5pajQKBJ9c%2BcifhdOGPTEFjgNIAa8NHtSziPFGBtlg6r%2B4YPi9Io1PrS5UZo%2Bm5%2BUdehMm9nSMHJlFwCBJo%2F2GGtG%2BN0UT5UftzSl5KfDspXmm1pnVfQSsK4IvKKhkgxOOVwWXHyNrLUVa6X1XVEtwwoPqzxAY6pgFvMH2fRFVh33JkNewdycCngbEx0HUU7ukMXk%2BQNeKEUB32pQRtLMBxUmC62iV%2FcaV8iZMApY6KXFQl40fM0ypn2QOVrEWrkqoTa8y1wi3lU175A33FEzspeGZB38LRk0wBDmJezrB7Mcu3ZJcpESnqPoGBLvMdXFrQ5gHAvHy5qpM5wEbODtIjZD3R2HrbQkLo4mAXywPkCajggalaYa1dCCX8aQSP&X-Amz-Signature=001e351df90df706692b2cf5b37bfe97e479c753c3d254d7bbae6e9600491798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H4ODYJ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1rmEVgtDz54jdE0pBpVNlDYdPtdTrGEZ1qttnf4EOQIhAIVNP77J88RZevMVgHAVzi7xLnlI0v31f9xWnLLRT37JKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTgtNk%2BAff%2FOcgkYq3AMbRC9N7bUwewhyQuoZNUJSwy9moLEfreqmvLF2TXV%2FF790BkZdCpowzfK2S2GwOCI0SfoxUWbmUlX2oy7o7cr8LDnueSN1Sg2pPH4WRRUaxI9wm4KaxtNU8utg45GH%2BkSMHml15eiRATGriaEsPV36BpH4mXMZWSRCRYFpEtMXM2aWo8PrE2UVjmsAnOMfg8r1iaMyIqXscRUJvCN0G6cVOO%2BWlhzCnZN9PNa%2Fo3Uiek9Qb%2BmWUmNnNaAaBmLJ4F0PSqgsFWq%2BOeqPNTf0B%2F7iO7GEYd8jk7bDYbuNLzgAGRFfUSWWaTb%2FGQbU%2B4AygNsxddmE4pCSuN344rggWnanPTsnTu%2F5jolFQsEdoLIHOmbsVmOBE%2FQW0EkxHy7QwB696R1OfDDd7KWjDRxFciplYsJKuNJpe%2FD0JrDNIsoYSEPwADIZ2FXq8WtNyecb9zJIQbVREGZbOIOFGRw5T0ZxRPNCl0O2k1xWgHj%2Bz9UogVp%2B6CVJiM4cPYC01MRD8FP3wy6%2BZq2dmtuWT913GjtgPLexf2XpPQoYT3KM1k0ZbmhXvuBUUq5HBQLwhrD8FckJxw%2F%2F4kr7NKMjUwqtbw38so8RnKbqFQOFy%2BRa0ni7ryLsFH%2FcP5eJ4qfw%2BDDW%2BrPEBjqkAcIqLGpTpeNtucl5CJ3mem4wiCKFq5GdYSlaqtJyEEI%2BUvuWDeRyDoABmFjgV5Zz4oyC4IB7KkD5DIJaDG7a6LEpC8IQ80mvg6ep1UGqbwOiHRtvH%2B%2BKa9oRd67Zt71pI942ZS8sbbJEq1pfloX4xP5TRdmofzkXbohq9EQb%2BHbt8dWHpvpAqqfLw10A0r%2B4SR7UEwxm%2Bg8aitSCC9CwaYCu3xvl&X-Amz-Signature=3f6318a5f6e5fbe78845e1fd6466661a605a5ec9dbe759c2640cb2ee3e1b5bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=7e2c3c37a8427179c97b4d410ad73baeb05a4798cb7133ee015a349f3a069a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=425691abfac1298e0138369d3baa491eff6328eeb154f4cdbf231da2d6b65839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=fab764636517d9b5b3def43ed8f9a0dd7480f2d6a0998f5285cbe26492093b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=9a3d3ccc9f2dae1d0f06f0fa4a0921c5c5464273c8ac604a7256c979f9a32136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=6a10328f069ea2f844c1e1071a87c1e94eb00fe263248a3d0e9a173f7bedae62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=b86b3f9974c22443bd9026f5ecd5821bd76ce4325e924fd6207b6af09c235e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=ebe3bd61dc798b509ca29ff013a2c4e72cbdedaefc643e2ce6840057b781143b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZADAKQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJQCfmZj8jD9n4Koi9qyZYknl5caBRGwPk2m0fuZpWwIgQD%2FVbWPBtH1ksCqTE7XSysyP4Yi7hCptJcXNp6WP2mcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwLCcl9OOCiXHi5EyrcA9i7JIM%2BcQyp0WbUYsTTrA9ZWEqZ3btYCg%2BL%2F1DDxNqQig74VFjv0PAN%2Bpbq5h3F0BNDKfA7hJ7999ZyUBjk1E1iUMj0YcXcyqVi6u7Ei5YEX%2BIPw6DMozCF5UrzK5xTllPx63%2BCUn97PqJfcJp1k%2BgMaUInKkAjcbO39JeGWC%2FKXoOV9%2BF4Uyy0yFRkFqxYyW%2BIV7jhI76iuR3vgqW%2FBGTH2o9n5IJTiA4RXdNj0NczzJk3t3Iz2IAulsxvUK%2FY0ho77kG4nu5lao7qVSmpHv4%2BUyeN8uTkkxV1TPXYZyc1%2F%2FvdKOtPNQ77zjv0uAxu9nrJ4UuWTmH071yAKvFSZDtqAn5%2FTnC6%2BdjjsMOP31u5%2FKQVTU0aa%2FpHnJ%2F71%2FyO9B0eF8702a8pbTUCf6ZZFRiHC2Gmayg5pmXZEd3lLpG790N3%2FYN0ngZTE%2Beah8BkNvZ9HQrKa%2FGCt317McTaX379bFn57knyfUxygu3NOtr%2FIxIBvwCTNofOskWnE26NaHYAUU%2BKIqq5qb9jgQKbs%2Fnqzj20LpNIrTWZT6NscIa9xIb%2Fu%2F4h50Q7LUfjireGXXEE1GGJunPiY8vpLPQyuqvCd%2BiDu00ul78wY13tEwecM18itV1xUB81%2BBleMKH6s8QGOqUBlKgaAzOD3M2Z7U0amRIy1%2FZbp%2F0aQRGNqYBVmbYZiSww5xxJti0Hm9Mb%2BlHbdYK6yPHmNwW5fs1o3tyaWVNoSpoweaxV1UpuOLSbG5ezvPvAVWN8%2FIXsZt9oaDpsQ3ix0Fe6jTUYMkznyCUspjOs2l5G7S%2Bh0ZdXMRVls10PmAUzOzgwmhHGNGBt2b76PCRquo3pMcZS%2F8bDX7FzxnLfrIChb73f&X-Amz-Signature=da31c37013cd469fa6055c2b86fdb3db9c12894e3284df3e9eb6c083ab9f49de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
