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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=2f8a61e28fab8fa98ecbe3e6c88522b50f41acf300046dcb3f354200bd264e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=e823add818b376b3ac8855ac0400d68605af9ba7b04dd70cc74b0664aa34c850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=ce87a27ebecef347a80bdbd8beba708e24d9ffcb466f95431d40caef7b41437a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=d056e78402089d89dc7265e54e41b3576a73957a736398ee8c3db0c0829a4035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=a8cbb4c682b1d7bf706cc1306fa8bd61ab98100d9402dcfe8ec05baea5745186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=784849d845200797698181799c433fba0db3bec7e2e4cba4d9b20c991694570a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=38b51b44dad3b5868d9fc45ee1ca4c159b1be20f0fb268cb951bb072c5cf9ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=21c6fc1a08452f4a9b56cbdb3fad65cc92a7b7e6dd2cd0ba91bae2409470d71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=a6bf839137e3844a92e0531fb59654c72d69ba702f6f93d9cd41510e3f34a74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5T7EK5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDj8z3qQ5XkzOLJKCqcyqijvP55Zp6jclUjN3sI7%2BCSOgIgbAWXC7BU9hkqwVVXBOHcZ3Ja57wmoJWkFSaQkm1jRXgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLerlQTUPjZti9PtwSrcA0Tt%2FW8Qqo%2BlEKUVyIIn3ANC0oDbkSBRwLeBEnmBZdQPhzeboIEqPuNs8ScNVJM6xXKgI07QUQmFxNK2WvxO4LUdvalJ%2BCBNvzUC0T9CryrLdANXAQOGcApOfXfvllQAwR9KdY1yYBPOUR%2Bguz3LxAJKgQ4VzgANDSfFhqqCKvUH41%2B5JCLGeqiUxyY7U4GtCLOBAY%2FZu%2BHhQ3pz8oD2AXooPHUFK%2BhVktxIyHyLotxTPdPZ4umhERC0gwcqPjlKJB2OQgJVH4QY07Zi4Xkd4Ny23V32U74PAv4jmbXpY2URJlra3xYNHXEqQc6RcfCp9XGN5KGGah3SGVgAupF8rkK9kWH93LlHJFg2C2eVOzk0z4BdA2NqdSHFYYSho8Nwm1Q09r2D6vnbIFYs%2B9FdrnEIF%2F62EtIFde80jx4nDcvjjfyW1%2FM%2FDRiLAsa4D%2Bo5wk7h1xHv5BimVNUpsBwwe3U7482j4d%2BDHeOsL1PGjlxFp9gQuVZiPmL0q%2B4wjjUfxOZ86%2BcXu%2F9odDdGbr5oT%2BjBbyIoj%2BJjD6NlT5XrYCYwFIcgr2o4p%2FpMd%2F8e0aHGqeAU0jsWvVPeuGTxt%2FFCQwUkRu25OEN5DiWE9KLSsNWY7EC%2Bw9rOyjDZ%2Bbo3MIn5ocoGOqUBGrOzoM5R8Ktug1SkTKAwBlXS6%2BiEGtA2CAkTmmAYuPKenPYJ6ROs4n1CWZYgw3io7s4ceepYe0IjLstlxyQbkbfWEcIcRlnwrvFE7dYP7Gp7bR%2FXchkd8yG2nsM%2BnoTPA1T60isLOkHjw%2FWmcGClclqNyUIYmN5I4uJhJuHz1lOQYYXVhq6GPegrpS6Yn8ezLYOS6DOs1Lwtcrens6VOstC1kerl&X-Amz-Signature=3a1941415eee394983cb2189204a6d6fa093def26a41097ba67815f603a06887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PLVXLOK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGO99QVG23Hy0QVW1uakt7n4Dn2YuS1900OIUd4aLY9wAiB9dJoAmzFt7M90O%2B8vob%2B2vHx0XwazKs36Az7%2FRYIjtCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvk%2BGPFcYBJn7ZxLIKtwDVVTWqBPNrm5j0dFUutyGCs0tD8eFgPBITLb5TqgwbdOUVVS%2BjGvgBTRUeqrglXxM4MsyqMox1DKNYZRw%2B6zrTqVBXl%2FILAeXu%2BCGvieGVYcYHh5d9tsmbQ6Eks49mIG5MJ95%2Bk0PeJjQqKTjRzcoYXt%2F1ne4AzvPBKRp09G0JosJAlleoc1dZ09MTWog0przj03WXNROtlAHDXu6BzdfsH8Z3cRfgFxkTlJK5ejy7JUutx4ZiFhoUD4IbRnZmXoMvThsN3j7PDVov2b39VQjpevoX%2Fr8nDJB81dnDQPiYH%2B9G80sC0HWcS0LgO65YW3BUj0jhvxL7MGWfG9fkp8%2F96%2FzdPdGKDdgSfGeC7ZMYsSZGERCH9kAbxVHMmTGa9xeDO7VryxX%2BK9kul9hdFVp6j1jjA1P8QqBsrxZEHSzGa8cWdYKSlD1VGiWSMsSKgL7tngtw5C8DHm4DIyIzINayuTlAq%2ByKrIWuKqcGw6NrvdUSeNdFJQxWGHa6D1Ya79pHLXLFq3bZqzEI2K6Tj3iWSkE8OQ6weopI7AJs%2FWoJ7Z006srKpeUTa6mdCg9rluV3FK9HkzTwtmnGGrIduwSsN9e1Neiee%2F0JzvYAyrA20dJTrNp%2FAc3NL28o5YwjPmhygY6pgFk7sE7Vz4TdJv0fqCAhIG5Py7bj0waWF1q6rznbLQ4GWBcr2sy1svWhF3TkB8prmbHlZrcioMdbvhjjbodcp27I3GbF4HciWrX2Utg%2BP9h0eQd%2B45WSbPY91p1CrlLDx0QXWAKp5sxW6T8RHFNLrfpPPnumzQgY66HlJQMS4IV7L3ITBess%2BuYBlu%2FuFpmZ7A76e4z%2Fl0dR6D7jEy20Ykwo7UMTFt5&X-Amz-Signature=8e060f6b195fc6e20e384c1f45fcad7957371701d56ab1d480a2f87280f3e4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=6ad47e5a45708b86187f6d722aba06e3ce0f31221d3b15bda7f4c153747f2ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=90bbaa47bbd211cf217fbd892c7229f54abc0e2b0340bce3cfeb7c1832e6f29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=336294e62fd9bfa1faa7e738f5cac962006bfac0d77d0a1122a7ef2a54cff382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=5bdde160f87f93f6362e6157d6dc5eed87c19080263c19237e11f9dde7630e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=38ad6c9e6d1a9e06185cedf2b7c68924682ef2f3e28e51432f9f5b5d06232d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=efd04aa8f8e847294f24d2d2cab10263eee3232b6c1b22ebe7a88d725a8d0181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=c4c4acd90e921cc9ded106b3084d22602497e0074328e0743b69a07828f59d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=9cae11af2366e558f1b40cba21ff8e895b3913ad43ed9c4b1c8cbc7871472874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY55IME%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCyEXHqdVHhAl53zPyvuthaFug3k%2BMYYxM38Ztak2NDMgIhAPmUvxlAYsRuXgIF5QgQnfRAiX8wFKHp%2FyTZ2mfuuNCZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdPAWEKz3WYJ86VQq3ANhfWMW4AtQkVsmnG1VfIebuus859fND7kWl41Z6Umylqt6qg%2Bc2qAu8GesLIwRiH7SgVaKZODZH11Ysb%2Fw%2F8%2BHMr0VpxZKuX4no%2BMBFNPmCZwD4CWH2vbI5KO2PTqxEzuMU%2BLjJzV0kqyNHUrP7SHVIrC0dj180%2FCFrQiuyWFscerKnBHfopN7MTvXRe4REu3TiMjEZCh6pKPTm%2FLvGkYBBt%2B%2FzXvz3e%2BZkZoMjSHEbtV0k298KCoWFNkRl%2FGREh8L%2FSDhCynA4MxHj55T6s2u9%2BX0GvXDrGw0vmT76CGEPJlKKlGKEQ7GCu5yNXMHZ0uEd%2BOM8l9%2Bmz7xHasjQHt6ml%2B1Ptba396CQSHobmicSq2b8k4om9O8ymPBqtDTvxfZw0ZtD8Ibb3glM5SdDTHyQI6KyeJNHJJFgHdWBzh%2BwAj3KsecHrJkvIDvY2U4t4tVwHu5fol%2BkWWKFhAili3lvxIH9usar3ulp6mfVYzmdKGKUzK%2Fa%2FyFR0Uq6GbBuH%2FOxO9uHWgXZ%2FUc%2BJuolvY5%2Fck49RhXxO%2FpePcl%2FxH%2FE3thzcneJLpkP9ttLb%2BRrf2TkOJUJalHCBNDg73y2zHafZnzQmM%2FjsAnaKmCJEk5F%2B7nLhSqIUugKICM8zCn%2BaHKBjqkAUbx72n%2FqZdnYZ%2BIUBwFkGtJW2JegWnPRgb2idB13YuvNLueSfwBPzu4kZRglK5Zy8dP5ZkAxvyhq1SHTm4hcse%2FR5liss5EzRnP%2FjhNh1objCkS0R6wfwsYfCEpMSpV4Pyy5VllKnQgq6mMuNdFIiJ8Hv7o%2FPdgp1JsXXaIX7%2B%2FQ%2BNGz1rRS4%2Bkxl7be3CjGSA8aKNPGBtk%2FrONas9ERLd0Co%2Bs&X-Amz-Signature=13cfe12244e1bfd9bfa7987350ac980d516dad85e0d1e3edd396ed587e788ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
