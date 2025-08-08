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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=0254ea444d728eee507454c8ed772a1231f6648ab68fefff48b568883c99eb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=ad8696222bb244c2e797c1b361baaed37587bef582d17791ab93f57d76477eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=b35912e1464d1fdab615e2bcd4a1e124e20e5afe2ee40b2e4e9351833d5da936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=d07319378c21b984c1adfa729392f4a20815818b1290b88bb28fb139e41da939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=3eeb9c8faa1b8707f797f09fded79acc318f5174286e39e76a853dd86760faa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=a8912a6857d70f1cfcd35710d94aee996c03e980899cddf2f5f0defda3b06d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=53848cf6ef31c29266b50fec642efd97c1998cb0b9966bc8c3ad24f59f582acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=09b8c32d537a5535ffffaed6be142edb69231c577683ff2634c9337c4546af73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=04ba47f3bcda49232af3b690ae8b680cf75515dbe1979af54152179f4eefb997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRHE53K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGXIz8H3agNIdXMT2OEknS9cVqGLa5pjYRmy7cFGDb4OAiEA3M4P6avqGjY%2BLFAbrP3cnkPLAulGEhObUm6PXboO9VUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVu3ZZG1HpcWRy3syrcA2kC0vGCxZ0l0voNsdhRR2hxKYJ2QF7qlzgUduwbW%2BVKjJYNsIT8sh37JiMSrYEILtbqcU%2BzIxF9pdcM9AKkrOy7Dz%2BJtsno0uulrxoOvrUB%2F0wzaRFbPmC2sqkaTFDaZbqFlcjl1zC97iCIRhmJ3ArKHLqi%2BV2agU6ZLeL2n5QHiGOOLurif5wtUb%2BhYwEDwudNZzBmRYAPuTkSiWwSV3I5cQ5Pk8cH3RvTfvKyNmNvF2Nge1437I6sXuYeb7UruFnEhdbxELdbRN37pVs5WGDV1lTNZ5I0eMXlhXmOpyOW5iAsnsd7KY%2FMyMVI1WAmpGTDbodEzvCm9Qxz%2FtoBu5OENSoWyY%2FZK%2FoN6%2Ft0tYPoho0f%2FyudkM5JlYONII9m%2FfhOZOpupsIouCSqs%2FRqw%2BC%2FBPOfyXt%2B9Iyepi6PHohXfa0gqaQ%2FqpOdaO1BRadZ7VlE6wIJmnOm8Idt6%2Fy4ijM8Mbexk6GxQPuSADxJY%2B5vdNYx1zVtX7renLo2pJH8hjP4CFX5bDZEOH4Ts8d752FPN7VXxkQyJvfhWa%2FN2iMGku3InXSsGkFsjAh6Kn7CNewYlB1nc0Z4qvDtt%2BfcXgw9x04TeEZuQtmfrIs3cYzPfg9YiJVSnJ81HZ%2F3MIST18QGOqUBmoLVEVPO4U658QOBE%2BeK5cfqnUyUMLjr3Sq7cqn9b6kpAVyxfKuRWnfvN6yzeYxyEe6V%2Bq39RaVO91exrxPvz8yn86HyBCovpLRLZQFxXM9WQY4g6U2zkN2Fn7zFxhMM6Y7e%2FaUyf7OzYNbb355x6B01YmOOxorRifbWm1puhE5OykNk6OKT6f0tNAo%2Brxxzk%2FCQDGha9Hoa9Zwbh6%2FtWdWDmIPv&X-Amz-Signature=0df84a896f8fdcdb7bb1b60b0bbd0ca3529c3a9dffbe2cc412886bffb6f9d284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666II3KDPG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFlr%2BJfWUkxEmK0S8UIAXbhFSO3uXxQNleFcRUERuT4SAiEAosAX4UI05zC8B%2FJw%2BFJ5FS%2FKpP3r5pZEsJr2a80Qn%2FwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAWi0jrACJ3MQ%2FBLCrcA0ctndpwjuGG%2Fna%2FCn64INCwtGc9DsKe1PCZxKsm1BFb%2BDvJQEcAaio5BifMEMl0S35BeE59PjaRNyqKxMwIkPg5iHBgjGJN3X0qLmEXveYa5GFDSip05FkpSuB3mh2KMOqFl3jZS9PMMnHkjhWRy8Hw0v39KdsDPx8YOQKkC4ucpWkbYDLB%2F4R9y8X2hSBmAsVQSjhFdLXvmcwYVVW9mKpnfzxnGxqOvDbUFT6l63Z9ZcaFStrrnh5SDjQDWSn2jlsoMR0G4mx3vlPY%2FMpsVBk7bIEiMHqOqZxKaXmzH5WvqyoU0ohzsyVxT2VPVa8OGnj5wESUpiBtV3HmISXsjxt3j596kpmnG4p%2FxHK1%2Bw0QH1q4m7%2BccwMuTx96o8HygRuyxrADX6lflS4G1tPHlbpeWRoB9dFb3Ov5N0dLBzBEyR8eB2LbST8g47PDlTFkPDc0Eu13ICjkvYyCdYYRqEJmHl%2Bk720mmmsO2oqDuCpekBSNMjNXq073x5k3U59fAIAXN2yzRp%2BiePPsAdKaG%2FHy7igOhvg0vX3%2BjOT2sFq4DWuC7ZlX4ngFZ9Xyyr4pjL%2FaCFSgg3Cihpe8%2BpNH8Zhs7Lna7FRH8sLqGjO86ZcA%2FCs2IE7%2BjtMh4vdeMIuT18QGOqUBFKeken1ySoS4z7xxV%2BMFlLSMYkvdVr0tMkGI55QiBvXjCIgC0OSj9j1qug5zo%2FzCPPrrZzZQRwKI9xsPZ%2BvtzNJ24OJ%2FYqmVqh5DmwMzyjlYrVjfl477XyMGZpDh7%2FJwsvkcBsOLChzV4RUFf62vwgoRRQHMpTZNHP2DOKev4Bg6b1ShKUK8rvqfZdDMnwO%2BWSKu0NwLkit7rgmPz%2BpxtTgr9u8I&X-Amz-Signature=018238ce2c39c2b0a8c95776ce279b0c0aa6d148c8f93a3bb27c1f564c2c38bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=2e4821d7cc2538c8aa42c0572e8f675eebc2d97c789d6a239b3d8457307b2620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=f75191125bbe32079765a23eb038369ae857c507822827ba1886d7d87ce448dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=b843c987fe0d9e952fc0906ff5dcb6ef33b0231647d35a89963549f85a3ec005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=f055007f36210bf77242f6793771ead124c61e806ec672f235c9514eb8552965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=ac63f062b89a5ed68d9ee7059cf6ecb197095817618b7a5d5628345a896e3ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=d12d86d76ddfd4714cf6c6c9e2c6f5ea6e8dcac90c1f3d46106759b21cf9891f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=6a84bb375a979bb0344db7bdc39f8bcb2b02b17fd860b1ea3387f7b1bd1a86f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=26f5aa9cf1dcaa68524fb3e58dab02daad98f80d781ef0b422db7366f70608b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IIPG6W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF5dxnWM7AcuuVNt9ePO8vDhajqwXzaKPyQh8YMcE2b2AiAPbvyMChDR62BanlYOc9pA4cgqViuoyi8GSphywR1W7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyP9pK2I6swA%2BG%2BmUKtwDSBhp%2FpgV%2FAKiQaSWd3ol2wMbz4ONTUVA7HEqFpqp0BZLmuprj1q%2FQRJuAzk6ExXduMyalad1yEAL2SQ8dYXIzpcNa1S6vv4iepBORdIz%2BB5KpT2zxDVZtlNW69SQncadpaf0VXw8OOu4zoX8NpvsTRYdsDb1bCsOyuaITC6AB5Bw3w%2B3JiHyR8NUmcKUCEomBmKXtegLq7hr%2FjJtId7PEX20WajBfRvTkLvIaaqUJ0dYwfQJ0dTg8ApYGLaZ9hXgYnJgHX80ngeyASH1pLpZddSrMYEshkPwu6itOIZ%2F0r%2F5fbGKM6vKyLU1ZasiAOkH8Ttr3smX4TIqp1m8HxlW1hZ8wS5p6upoVDfBm3eVnV7FrmD8rcFMDXlzwlQro3iCvOk6pYaMBNgK2Xxq6IT9SOJaXcS8GR3%2Bz11qAaMKDe05mUjLO2T5TLqUxoW%2BcQBH600ViPeqbUHSvUpW2ywouMxe8Z3THE5rbD4eWKgpf39uH5lbxOMn8dsYpt%2Fo5QjhRon0AHmdyWhFofJKCQ8%2BlQezin0aqwobjUGv%2FwApALfIfATVMNOdlBSfmRDS7ykR4Ya%2FYoVj1WZLt9ZkvMoao7%2BPzXXCSdmO4Vf%2BlYS7v1GY1VTvA8%2BGb1L0kwIwjZPXxAY6pgFklP2Wj0lHSICOcO3XMVxIX5vZFF%2BAWUtiFUEWtctCPojVQ3aRrJrDrKZiJqZrVxbrs4QyAkfyGR%2FD0awDX1uYj0OJGvgLLCnigXWnCRkwniEHD35Az2kuG1LRD4q8t9%2FKktQICpnISCcewigMlRr%2Fk5BdJLzG0yKO8nPuG6lHmWEMnNf3TInHGzCbGepMIwgkHH6OAp5GXtHIG3lSzgaKUj8gy%2FcF&X-Amz-Signature=64f5d51167158eb427121fa5f32536cc0c47a92e68f29649f4205f226e590caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
