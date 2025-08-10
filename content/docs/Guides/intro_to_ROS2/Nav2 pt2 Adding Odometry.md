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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=23873be88bd9ece1fb6b5fc45c17f92574d568846db6c276974b3641abd0020c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=5ea160023c32aca717b5910f4cb151b0514aee2effe3f1a01c973a87e8ec99f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=2212a6a752927fb093c4469982f99ea7270c7ec6f600ff9909ad082fa6717e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=87d40e8fb3af6c49142a285c2ce8927404f4316d084e40a49ceff31a99076682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=a0442516d7628aabfdf95bb946cce9e93b0d77b34ec0e823319ae30820facc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=cf5aeb1f064605b64e8c569ad52965de3d6c7035c51761caf0848ff06280439d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=ffa3f71fb824596439303eb50904c997814d724a8e3713018aae1e1173ced78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=caca9de1a3c9c5caadf1aee5f5dc6cd9d2c494479c037433269c6431c5542193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=ff21dab3b94310fdfc0df2ee1478f40510a7055623fa7a7ddef80fe42dd8a44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAY6MDF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4aq%2BzMooblrSt8k8Oxym8w1MMg3QEYMfXr1y1q7WL9QIhALccsHyXjPhV0E2M8zpAH%2BgGZwL3jfzecKPorb85u%2B9KKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykJ4X4YI8tv7HBfsq3ANX5ynCGu6XmXLrkLh%2F3lrAKcq%2Fs8zj7SpGXZ6ehu9cjE64Y5cE9F9KGo%2BYeCkfjB6OIg6JzHr2AukoaDnGmIDZc7R1vS%2F0MoekHklog78%2B3hFQUqCOsYfCP5uctOkBFbClveQygz%2FTqI5iK5emrPkXJ9gGAWP7GUMmXvrwtthdaw7E46r7ttuFsZyaqHuGjy2j42OzjTm8UVD2H%2FXQPEpiR5J4V4RivukdbFF0n4F7Qb8weWchdshiIr9IYFqEOdQdzEfDcxshiK73XbkWUzT5VDl8sbIR%2Bekrro61HHf%2BScWwmze1BARV5eeNeEdmyj2TtSC3XoI39J1QVjCjrnU1DMK%2F4iWYxr6YTz%2F8uSbcsUQqofO1S01HhZCvelIGgAd2VK7oYv%2FGGrXa5hcwmZTJ3Wb23fk0MJEdkcbH1vP%2BXA61yPXr6kfVPuhyg7cp5zN1ijxy88%2F8Mq0AtT9cDcm7LTaIwcPXCtenHI8LinIvql2nn%2Bv9k%2Fp3Dgxmnx%2BoAGoJrK1VOZxisRNnnVRSpO4jW8kjWcLWfGoGB1BahiKXrxndnuq1ra4cwQFrjT7tJa1Wn8o6CtoSrZpqsk7OkNk1FlrktQiozakww6RU4voxRr3jGKjfdE0HTuiaXTCkmOLEBjqkAf6HrXMCCLWfgmiWp0%2FiY%2F%2BtyOCPtIDNXKkt7vWjDyOse9HJFGnzwpvKaoTyh%2BgOyvyHTmRedf0J0r17oQIVeN69AF2socJrTkG0Oe%2F4tk%2B%2Biv47qEPUDCOPu3IfBOZWIERKZlJzayD8nbnTxBBNnkMfL1lUE2fLzqUhmDKOsbU7VwAYnAzdJaiaDEWjzy67NBYe7ou2f7RQihZakuVHy7rfwcw5&X-Amz-Signature=ddbfda7470c597c3ef7fb4d9b462efc7ea405c92fc7b21b756de47a50350f4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXUAVMR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC915eeOyttLenhPjVOuA4%2FEzNzxPwVaPh1qFbdMLXVqwIgIdfO6CO0wjkdm3RuU%2F1UHVLR9%2Boaqogrqtm86%2F6QIg8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAchjif4%2FXb3VJz3pCrcAyTBGrW5MLvDC%2FfucVnnmHOFakInAFE4%2BPXgSNAkm7%2F98OXgEveWEL1K9q6I7xjtcftNdAWRxJOlf32i0nUCi0W2L43sTDMHHdOEpXu7e3x9PmphfTstx7wCVTKL49qYiXzkvdmY7A3gknJ01ndta2JUikUzoA2apKp8%2FwgBAeKHkacvSNlfZQU%2FP%2BfZxiPnr53Yokycx6MXcf6GH9pLUPaD1hNQakpmy%2BeAmkk36K4q51QOvw6dnPNKaF6o%2Fnf9SSQtX7dVjMQr4m3pdHUAW5nnP7ehhn8LYqSyJEvqR%2FfX6vOx3teyI4eXGNqR0HV5s70qMlq7GDePuN8%2B3XZG2%2FIChpMFe9rY%2BSDRMZpkbkTZ3dpYb%2BUYygQAq9a0uoTEvLi08e4Pid3FV1BOAtPY44IchrSVIhClgmGTYrMkDywKybB4cwxNGdb9wXkwEu1vzwXBr7tPgG%2FjrGlnQ9B9RSBPzHwd3kTSz66fltqkIoyHiSIZHKkATt4Qr5fDZx5YVNgOde7iWYNQXF7XgTimz%2F6c5RgNgIubN8KfcxyR%2FNPOi97FndKYgujtrN%2FZAs5biR2AObDgWL%2FIdMt%2FB%2FjkN1o5Tmed%2BuTqeqZUDFm9d4AsM5gq7sSHLTpv0ajuMI6Z4sQGOqUBLfFtlJ3GMdb4RVMDCztm6zDdZJYXyCI8Hlkkkcsc%2BVx0iDU9fMMYgQDFGVRT0wGAWXg3EzCqV%2BwIep%2BiMO9oPcoizVRoL6VyKDxgG6Inq1wAF9OfItopgFplrA%2BVwrGfOPr1KWSgdSrIlBRd0Tv641z8OkW9%2B7d7nWoxyciCRL9pVlJKuN2yIGkX%2BFlmWW1%2BKSFlm6a4iESKLz2ZDMabkGYc7Qur&X-Amz-Signature=a619097aac400d3e7952a7a8ab8d514694403ae9e475ac5517dcf2cb8a9c2f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=03892bec3a65eb837c20cb685e734caa32b8de64311ea3dead4602b4b6b670c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=0b31e16fda5aa67f3c4319fcfb8bd5bdf79ccba1a121cd2997dae4d3b41d6bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=920c47e7fa99efbb8a3a7ef3825d6d3bff4683f98f3e7978028363d21fb12add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=89c29fdd0799f34cf2bcf0f1b88e89ca0e0274d4c9a397da95e3fe51e926e1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=6a093b151e7846a2830b05877fb1f07c461c7c53080f7afa55b4c79fd5548357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=4cb246192eb553cb60f0b334b9bcd4e491e79303994857e759e6567c19782a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=44d62feb80e343faa30830eec480b1c20ebfb044fcab3ad0d1b71c14dda8b419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=b72f081fc67ffe046abeb4afc418eb9f2d679a4912845700b9b3c2ce7b849fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUPWHQE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2A2qFgmwMfVLS8OXvD%2F8yEAs%2F7fUBz1l8Mvb3ZSegQIgZ4i%2BspKK5WSfXEBXxO3%2F40WGt%2Bjg8eaifxo09fj91nAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHL9wIMFMHDBToc1CrcA%2FXNHe%2BOVt5jEXDtko4NB54KI8HOcMFePJf29mu1zO%2F6xTHZIhRGzoP3d81WpGl%2BvHTtKdWbpf0pEdjVOX1hRxtzWfmbldMb1w6OGFGw9o%2BTk%2FlG75%2FIPkHYn4Gs1dcNi6pPUIQv0qM72yusgElZB7%2FNz%2B%2BkorbbPAMxjdenllxQB90V3OvdK01ADxFaXufY8V5WmRJ%2FCtlLaeTk35BW3Hb%2FJAfIdy78qC7HdYQFoLqaisj4H0ZGh8cWhndiOEmR7evJWiOh9LuQ%2F02OSod0keNIrgI3uGbxQYF086tVNPREtKWm0x9XgAn66ijDaEuT%2F7VX0fN7HI%2FexILiKccBiuR8sfjoGfWEC5Jf3dFyS%2BYstqTl54VmEhoJOr2G4zCZ7VdLdeeuQEnYfM9Qlg80xEcFheWnf7%2B9hanhkXMiZJ7oCLrINmqFrIusyGap35u65aOT4LtQrllg%2FUfoVdXrU4guQH9speeZCpOqKBA4o4%2FhZS9ZqIyzdwCPJEtdRCmRjEZulKnl7j7D2Iz5MxMHGMeOK%2BCeAMeJhGuW0uYUUIWIHET5mRj8I2XDB%2FrZ%2FRjN0g7%2Fg%2BawGZdoDOjkLE%2Be9RzmgFG7e1nmJjdkv8LdMKtLW9oF6id9AzsBIYceMLGY4sQGOqUBGpbho8npY2zyPvHRZzvzmCdzvjihEqForYlGRushnMZ9frjxItgqm9e4tVu3s92vZCmsh6jjzOPbsVqp841gfOEspC41sltvsLY3XnW2mQHdig%2FZhYb%2BiWFJXjxIHC4VI%2Fe5jGM0Y8iE7stoavWLLv9N9a7AfUi031JWTmVJ84O7W3iXeLWwIZHQGSiRQA8JtVs6Bl6F4Whhkkp8n5x5aCyo1fn%2F&X-Amz-Signature=97e7e9335747b93799a03029fe29ec1e63ade7a6e4cfa4f0aa7c4e66296ce36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
