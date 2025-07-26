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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=4a314825b3741a3438e4e9ad26f153abe8e4ffb3113bf59f23dea52982b9b981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=8c4ce4d08dbac4b738f7aaf200402605ac2fa43e16db217e24f4cbeefac02022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=723d43dcf2adc74345894a47eaf8a179069ab105dad9807c4659a519564aa055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=9294a3d7b5cfa1494edf939ddc26923ceeb7abbebc6b5903278f5f1071d5d8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=7a7702b0607bc3d52f08a0f996bbef7092ba540f54db330e45f87c09fc1cc563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=6b2a1fdc256bedb0f759d44922c7ef5e432c43334a5011935c24fd1ffedfc47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=f5aa716dc003dcb87bd87a9dd4187ceff2454cf01b75f7f86d5b152d5058f64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=d255100ee8e2c8222ba6f85f3f4f266586dd93edb025e8e41eb53eade4f8e4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=37d0f6ed8dc81a8bb328b46bbff30e68126d2a1fa21135b663c5ce0325b2f01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBG7364F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHRR4cJ%2FG%2BGJRaaJvpETvjHIr1QXjny9xfI0lXvCiuJfAiEA1yzwV0WM5mlU9mld5Io2u8Bhp8AdrYx3zVxGzTi2TzQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI5921eGbZ%2BlTNfdLircA2tDBSbc9lNWKIKAG0snGnWnjlNLnrfdHT2KTDvGOrwUBSC8xPABPP2i8oyUHjo42C7VFFiNVKWarV9a2IyPVrrtyLfabxfl62YXKCYnkXntUu0Mj8P8ZnusB08thfee1Xw3cWq8HOQ3hxhRaxbxRgqkbS%2Fy2bR3nX%2BwfMvrTW4YszmwrUt8EQWs2DmPEJnwi1JZmhjAZq5iG6TGmOU0XxpYlHcQDjq1Wt1MapVcwOJJosHL9aH6THuhQdSUU%2Fe9XyYPtp25CbLNRsUg4nj%2FYNl%2BmCEPUGPTKtEpf5B5o6giKzujpmsQ1Osw8Lssx8AY6O514TtiM%2F2Auy70MEmTGjcHzYplcYcsqZ0jT2tl0CZMayRAavt4Un%2FCtHAhkE1kKOqWUgq187hDPPc0vkHCM75cPe0TwK%2BX2QBwdD21UBJhw%2BECxG9mGrwjETeV46pJetb7FKd8Vedk70pe7j082yAs0hNhwpg0yCxli7eb0EUWTM1NT%2F9jLYPh6OcMPkvtyB9i8no2Tp6H0KrT98EGc%2FVpXAnlrr3CZszNsllTZmMUIYPY1%2BhrPauwMeDkpIsUKJeBXfC61k5UxDQ%2BTRq7YhY68Qz6%2FMDPtcFhFmK7%2FIVJUAqLHsBPI%2BO8xqk4MJfBk8QGOqUBGNYw4za2FYKlzUWD4hmN8X9djiidpS2W%2FCvR0mvFvbnIpS2NPvEUFMuNspooM%2FW19ITyEw48XCN5Ir0E592bDz6ttMHow44vQT5AIsIB2PFiNZsLsFq60A7XnSXo%2BOnRUdksAlIu%2FS5SplJE0yoec5axP7AYtPqWTOtlEa9gQOGoKnn7FBKndzf%2BjrAgkrjsdr3tkOhypB4VG08zDajRBa3VspEg&X-Amz-Signature=7dffc34ce3a45858ec22057e8dec9f098c039f0c8487755a202e68174efa0d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJ5KSMA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIB7vTf5lRg5eqy0D87ChpkK8xwkIS%2BaksfcQlsP99MsWAiEAp7r8vpmSxPrmdwAFU2Zmi8cpFw9kjhDKnWMvYyYk5woq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBLhcA6phLMU9bQroSrcAwTTyGtcjZXn%2B5loHibGfnal6xgP0YEMlKFzn7u%2FHctSwVqcQwkqGaLkQ9ILmKoyz5v6JySZC3j%2FzM%2FXa3XDy6FjT%2F1EzofpwHv2p0Yzpm0j%2FhH82HE7S%2Fo52z3Msdukp6wfY%2FbA2hx8nPkfO%2BleMaJzbVFclTykZ%2Fg%2Bvy28WsCgGdVe9py4UzxebOAm%2Bq9bIjrLbSAOvXIQBmmIFhEp3mK5%2FHSR2X67HfyhYR73U8OaX47wncUInV661WVYONW4NbwnspLA%2Bs%2F6RSqJHUlyInrN%2BBGSDsI%2FmJF88Cx1LEjmed%2B%2BtBlZesLyV9GH9bl8b4SfRSGGxvUSNANG9g7tN3iz8rWQgGSxrHVEbCSsIdBeu5n2%2BF9GD6j8A0EaUAXcJ5KCIY1F4ryQpTtNWUpW0fsAlM%2BZiSa%2BjlfPk8kDMZm6Q%2By1uogiPOnFwY9tkbZ727so5yP9bhLlQwVVFx3beg7cgb1b%2BIpuX2NV%2BFQq1s5vKJCAyb2yTP4BPfTsFj6VOsZxTrbJ36L6UEGcL3RNKsyNzMNZ9sSqJ1ItXbEC176TFe7c6ECpDzlD7YWet8bHPI9UdprOfXFicNGeN0CJQ%2Fw1UZzhS8jOrvnsU%2B1hWrr7u7DqHxr57x2mCQd4MM3Ak8QGOqUBAX1kyTMlPak9bctZBAvkZInW9a1Qg4rLb7DFC3RqCJMExt9UJOdQDO93eLbBbuTP4LOkQU7wuikN%2F9xmC00JNk%2FMVuQ%2Fb9LzMXPJGyfkNrzYNCTva3BSqln9GQwOEJWgyOX5DH%2FuurDeAzyhmVNicbKfw22GDwZVbV7I7sNB6ZKcZH7EWJyg3Fpf4FILbFjZ68HnXoEbX8jy%2FMkhKWI%2FW134ki%2Bt&X-Amz-Signature=f44c3c34a1867860e8c065183012ceec7a9283d71c722243c83d6f6feb2b2eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=931936c5cfa032d6fd171d2f47fddaa0e1fdd611ec8ebbfc2469db555d948b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=54ec3e0be2d58ea68be68d11bb8d0841e9b72c7302168d9967ad5541ad53ab3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=f5292c947a3a0a616be975f32214c4190a64514a30f47aa9d68ad99c85ba62a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=082fdb086440a1bd038fe269337aca89634d866fc06781eb27b88cf0ddb6a28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=7ec254d8f59f24c6d9c3eaaab8c1e14b97b205fd6f81a4acda8b0820de92fb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=3d68b48c697e6bbf9e8c6e4fd1ee01f4a139d8ad1e10cdaca5498cb5f969baa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ35HZY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwLvpdRY%2BsbscDQjtVV9owwXGBDDijosWnPlUY729jvAIhAMwD22%2BOknczpKg4G9N%2Biw6kC7Dm%2F188CoJ4OO1mk5SfKv8DCF8QABoMNjM3NDIzMTgzODA1IgwSBELPlzIp%2BhcHwxEq3AP9fPpS3luZ2Oxvz7K0ql6uNA2k0%2FGcn0h134r8loSMWEMC16seO0oEtnxo%2BZHnuWGoqpBoD3UGKyaeN%2F%2Fe6UGRijd6OuGave118cisQuA8CVy4VS44C9cUB4NM%2BX7bmWCO%2B2w9NH1ICsnfQL7Ih7Smv7TSKIISOFzbBMiHM2gD303xZsI4srfkXM2OpcVdKzbv%2FdjF0WMvKT5p19zAJp5O62xr5IpGWRCK69E5GOO%2Bvl%2FgloMR0Vyeoi7E2A7Pz4ZIC8Q0hNR99jB9Bjt13FXJA6Gx5npFUB%2FJgl70EwrpxBMrIB2fHfnG%2FJRbE1f%2FgSIULiZtho1U3otECBjXB%2B3WQjZ1Z5NGsEP3z0%2FWzc2GwXdJV%2FqLXqi5un%2FMxURGr%2BsOMwqSjxIipG8I0Yb8IdmT5AqfnN2CI2eXGRfnotXywelECDOTuKmmJUDm39vB0J%2B8ZV%2BKk34IQ85262YKKMtQhcKUL%2FJmEFnFFO2oBbUlgZTo1iAV%2BBm9vErj6xswlGaxdbzycwepVZjJHIniZRKLY4HaNaBrNaliF3Z%2FYC%2BYlMZt1zZRMwTYpxtv9%2FKuYTSmv0Tr5%2FrsLtOsZf6zLM9JcIgnKTsW3%2F4h8Ag%2F1b4337ThvwLwJkTSADV7hjCwwZPEBjqkAaM8wTJwobiIek7QODqIxkqbYOPrETxaJ371ewsALQpHpAaQue0t4yZGgrx%2FGnw6mjwM1lnKcTI9zwzCVMNnAdCHEhq9pEJKC%2FqNARWtmanRjvg18Lc8TCLMB1RsFiuqxPW%2FEQ09zuY1b3%2BqSpKG9dFM0exgmxb9D5Kp%2FFQPGL7IvbW1RslYs7iqHFTTi38sdhMUG7Cz0jerlE%2B890fsc%2FMWXyJo&X-Amz-Signature=1cc184447ba061f3b1337221509aa83631cd77a2a0aa12b07ba53f51b7a8efd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
