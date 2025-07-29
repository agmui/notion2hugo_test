---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=9a9d7bd26d192d2fb3d1853d8763440035361f3a3eeba2e2631a6b84c5d0e293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=0bb623432fab66c013dbf6706d5d89caff836826f7870c230af48def9ce686cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=d7c01444372641d2c1b3ac432d39ccfb823bb6c041ae73139644785bcccf3e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=b33629b4b96afd771120cad8cc856df8c1cbf0ac352a94256ae83602092fe27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=385ab0ad17dc76aebcae6aaf79aaeab96733be984d8711e9a93ac32ea7fb28cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=4deb2f56ef944032fa810840e0aa5208a8f4c7f48498b077d4e36f49a31bd82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=38b7706f8683be87bbc5974b43b924979b303a9416a13f220dd2236f84acc06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=7ac1113e01d9557b0273a2c9ced6356cf333bbcb7ef72cda70557d5d7006d9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=e47de49d492c2f62bd9fe9fcc0007cb3ad86fdfa7b4ca22de1dde038cf243f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYJEJSB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0AG6fmEPOyOtN6weUOHcQKZZx%2F9TlR1C7b254R%2BbfxAiAouPxi7U823xK4JbIGQexlsyBvRLR10fHo9UQMHF7VRiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv57Lsjr05ZJxxxSoKtwDGZ498fW4MmUtZN42Nygac4KKPrZKCujCAywMJEuaeh4zCU%2BnT78iJftvvtTcZkb2%2BogWXgoUKB5tACrveUBpEuB35dxP37quSc0GJcD%2FwUrWo%2FmWW2KsRZWwPS9VChV4LzuPApdVuHQK%2BIBvIQdMf5aCSrabpIBZRwKIenh5CKWnyEUzHmwOI5%2FwNY45GxHQBU41XDa8w%2BQDPtlArrM%2Fb8K%2BKos0OXSNp541qCUA%2FnDolv3AEtn%2BBSUt%2BYS8%2B2R9XYgn6BcWlCbzEqEb7hsW89AEBmcVxgtNKvemK6TPmy0X2nmar6%2Bt%2B1%2BE6Mpk4QRlz0HwFPbBQC4ZeIs%2BQ5GQn64OczIvH3gUHFYGn1%2BIKnJnTxS5GlTc%2FfZY24I20IQrSkwMj23SnmYrcrWRoEViNCBFpCPw8rdKE3GrRVbw9eeakGcbCNAKk9rl0phQyu5dSP%2BX2SVD%2FjOFE3kqPEzTJ57F9U5BjhbriaMxt90Z4cJVvW6lbcnqNOSFf5T%2FKX2uWNejc09uJEdCXMlirpjbjEQmUvoVZWx6jZxJeb%2Bh590E%2B9vO111sziuTMOk01KO2J7ViSOxn2WegSUJYXSk4MQYMwEa0EYWjt49EUbGuaNtEMdeTZQV%2Fwg2dHbYwt4qlxAY6pgFnNEBfOWee37%2B%2BEB0CPamzZkV4lUzNWoW9IvDcf06nC1%2BkJEhNWaiQMGV6yUxXAAtRocCErDx9cHNgxwakDWjRaP2xrYRLg7Kb%2B65e7txSTCKQXxbWJHAbeN29%2BKHiXm9sCJ6noGjQwH5KgRZPxtJmD91L%2Bmsn3W4hpRXmjGUikROp%2FFPfQwp%2FgzcmvSUQiAX6kyvvgROO5ItLPQOVFY8Y41DwgT7l&X-Amz-Signature=ce1791673652ea526d0ca0050d5124aa8a944c9685e187d2274b7223809af649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYHYN4WS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTx51QE9OxbACIPVoPUYgHrBECnaDVJXUREcfXKCriwIgQCHRNC%2BytfT1qBG%2BJapC%2BCYeJF4focWjD3KK5DnIM9wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7LDeHwcdQTbiPvUCrcA5iSTQR5aNhOow7O7ArDedQiN8OxIZNqMAogLMzQnUEqnKgDkX%2FR3fqb3qGk6OYZrkbnbK3EZ%2BUP22CekFb%2BDKttDVECcXzBxfCgRdhTO6y1Bq8DjBWIqmzAGqnil95bC5uqc9Z9gGDvLl7plBhxDyOZ4fF5frNWaDuzrDGgC67zY2b84%2FEWR%2F9gnqG6CBL5zBY6MWGiWVt3wC1YVTnteKZIQlLO40NJBDIvhP%2Fbn%2FAwPld1KNOSDmoh1gvcBAyC2vq6V%2B9zu%2Fik1JVkxqE5p2pdZkP32dQWtLdIekySmrdVSjx6N1pLf0LrSX7%2Bay7hl9B91MOSMTbq3vRpCnIrsjOHDpp6PBqHdZEfGcp5dMeSqcswQ0Vyc4Cnu44eGUF5KnQz41XQR1ZDTnZR3%2ByjIbfSS7Q%2B5ANPzJfdJeoqxT1G9DHxPBCnvYh4xX7fEv0Bx8%2BDwwWD1OjjA%2Bd0GVieYMInzUq%2Bi2rm75nljdRerEvV5nHqcqB0TFjVCVGs73E5Scyz9WlR1%2BEftc0mk6GPuXMdQZNryb64i53Ree8Dzb7oCuQulWeH56zplF9Vci1WjIJImI1DUtuAg5cHpJxacY%2BB9JvggHhRfddGpwLg45L9p4RkfUoCQQCfCcQRMJmKpcQGOqUB0zBELhkFuTZ59hMBJuWh54yO47NbMFGE7nDDtgEyBFRzAM%2BsAa4znyfTixWvcszSc%2Boq1hCJERUuEN0HBbHdDO9pUjCAL1TMmxGcxk7D8Y8AplDct1nY3SJZ3WkPAxSTttn%2Fg9ZtrFoODevWv4L0Ejz5NsU%2FnTYIa%2BoKfwt0ZikYlonpbePIt36njg%2FbQmuC0GI8C0HQQAcGve9E2i0Byg0Z1%2BaI&X-Amz-Signature=0f456908981e84082b206367a4980775ffaad02313de0651771a4efa2a0c1f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=11034a85170df27c2e0e0b71ea8ddbd82d00a29b4680b29ad796d71a3c22512d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=57fc36a9def9f32109ab2e7e64af56b03755f4cda99dc0c981e5954e6702f0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=19bec5e6c4b335c39653e957f84699cf896266b04ed4fbb905e8d1216631d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=9f0349e33a4c0b9f6f2cbff01dd4a1a9e7b5b13c6768143d8f33585d08c9372f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=a1d738a7799633f3e86bc01b27cc00eeac43589d6070bcac80ba1ccedeb479e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=72eb4dcba80ea567a4364024789ed1a708ed6119cc5903985766e920debb6ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=0babac65347abed7a0f2b9c34b9e13bd1ab3d9794cc45140ff33f7f039d88551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSRUMWU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uhkNIcgOditfbctVB9K30QCqpcu7Ebfq9aMr8gqaxgIgTM7ZI3P1%2FdoVBNbVAf0YrBkWXOt0fJN1l89lVBl3ngQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHw3D4zRq1hUbsRoSrcA4NfT7cHR6e1T4v10b0AHYBvUEu8%2F4TJU%2FE6n8zfQ98XUcJXGj%2FoMzQzSIgXARlH6g5eothRaCY4QGyWoAYUODDu965Wk0gNajtC2U6g3e%2BfOgOy3O%2BEFeWJQCeAITz7mKfjgBz5tGFgJH3v%2BmrZTLSDsrAI4ZLjp9oN3GENylqFRedOgDQ0e1pL5EBDsUqgNZQUGnoTobgUsCzF4FGOCZTdRJ1ZhXjXxgjvuRIZZS9W5pdG%2FbDeN1JAgk4mkqpnq01eqGetfjvgNc4xFO47DsRY9JtOHW66ZLHQGKsVFXKo%2BXdOX7c5U2mMxB2XcIayMt6xdNcWzcrSBfO2MfE5hxRVTvkEi%2FjOyUXFg0rRfxxrwn0jdrseWCxaB3GX83oOcoDEuMMU0e1WNtoLmqQMD41JXsWTJIUR4Rb4nAyjTUXC1BYlNHBQe03Ku5DfjebvB4oPkhJIv%2Bw1l0D%2FXDYnTN8GomtsrLUPsAgsDsQFq%2F98er4LfSBhcFiTqkNdVfQXxt%2BPt5WDAjYOYfrIbIYi2WfjGa5Zp2A3TlJia%2Fgmdzj5BF0w3r2dEPvH%2FQajNm6h7TvlGSK2XHHPRfkk9lBWYqMbuQofNe1KUvOKe2qfFphRDtBI3amCDgGqm%2BHLMJiKpcQGOqUBOqjrT2ZVFLET98%2B30BdBW%2BCjiaozp%2BmnE1yyd1OmO%2FDaoo9KpOd4vF%2FnqxMVgZ4DbbBUi3iMdrih%2B%2BXWojNcGl2XXwx2YeWFzW291MpqqYFiPYA7KX0qhTfuFf088PFh%2FNArLYrqYQ%2BewpVlC1bXByRZCTk6nR%2B%2BC%2B0I6GaiVy94vdKx1MX2P3Y6aaoDnWc1Jba9Kbc6WtgMcxCC49dlao6sURxp&X-Amz-Signature=78be0e2fd30742abb8a493ca3c191fc17c7650b80e0d83881d64c8f240044710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
