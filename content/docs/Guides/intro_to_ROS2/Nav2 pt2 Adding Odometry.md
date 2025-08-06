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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=41411fe39e248917a354e225954bf49933e8fe4affa7ec1fadb9ebf6731a553a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=ac7d2d3585accbb335af7da187610aa7d0ff789d5af2d1c1ef2db7f26ad7157d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=993f655773868446d542e813eaaa6fc6c85e9d22b84937188fa0e6e4f4eaf28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=c896953e822bda14ca698ba74e5efcb4ec2bfb7b86ef879d22ff3aeaa77c36bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=c68f2db3e8abea8735452cb17ffd51ea998fda997ab855387180444e669a5665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=49e9398436928bdc3fe8c685b1bbf70c59fc2e723e9da5c61ef73e7ba1c72fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=4afffcba99a6586a5f2471a5cc2e3d4e078cfbfe0733100f881414eba581e6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=213a348439c0f57c5551648b1b56fd7b890b21cb22f963aab9c17e24b4274730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=b16d7b3de334d2f1aecd5c129a94d5c07fe4479e829f88873eb15c2fba56ccc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHLW6GC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIATpvjnIJvRUkIMc3mr2PAXvR%2FE5ga0e8f6quL124YLyAiEAzfkDcD6VxiRMU7CgC1bRZV4DrfV11wXXWq38xJxyYQAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVPj7YVpzmt%2FxM8cCrcA8CpHqzV%2F4pkugVlAETmgWbEVUjaom2UvBbZr%2BfxqL5envEe8zCeYJtGRo7bY9vdUDLW7gdq6PeZswwJYbI1aiCqVsUneplNkUfsL3WzTpH%2B6LCfeOwa8%2FBezhzsFHBjCrLmyt9xhWAAM4MlI4E5R0Frjb7MBMK23TjLHgRWqyys1kiNk5gbEbSGW9ChEiSf8MnjKJ8GGBYBWTZ87MZIZdS%2BK6MLgLov0aPOFo9KUW%2FB%2BBD4x1fOZ6wZAivZJRrh0vZg3XAEcrR5zLrNdXAqw2zYRSY6KHB%2B4vIfHjUw%2FoS016npkoecyzD14hFfbaDzjmeDM%2Fz68nKc2w70t6viANrSlI%2BaQJdEFoVka%2Bc8zmW0OFvTBvg3b9l3dVFpgGC%2FbMBNIOnvv8uWdGPpKMoM4vXjcjeBFUb63SghKBAWw31O03ll%2BRoFeZVoyw8Br17T%2FckS2ePn375ucsU%2FfnaL8vHaMFbpM5EBX6haHonS4Z4c9F8h3RPPBycagZiYfOXLIcADLq%2Ft639tixF93At0T95Y7ZsZxX5YjqvxiVJeYgWNve7tGi9n5%2BXvJKjhJEKNTGpFuEqHM5u3frc0PAB69U%2B4T5lN%2F%2BzbDzizEGHn2YW5KfcKyOXYutJXun5oMNL6zcQGOqUB3KKEUJj318AF3AtExOD8b%2FmxK8ATIs9OjkScvOaZqIth%2B8YkWKu%2BvRDvnZRrnliluWPDIZTAb%2BxepwGW7SVGQ2pw4hoky96D4DB5ppM8iisYlkTxrzYaXV1IExnRozixIf%2BFI1%2BtWl7y2%2BaEx1XCaW45y7h7jBwmD742valH3YXra8%2B9QUFqbzPHbfL2fA35H%2BV0AzUoEdrR6cDgX8X0SNjJkNFj&X-Amz-Signature=28aad2e5dc88ab7131e059f5d509e4dc223c2eda35e693d0c7b9dc6c28b726bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6Z2R35%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEa8qUBgHQC2mi9n13BA6xwNjHpAIhznFBIwrp4y3LzkAiEA0PzK3%2BcacghOvEiPge%2B3W1SkqkC4y4oVni%2F4NYW4Mzsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFT%2F2JrGmZMQOcbgUSrcA8A626hyk7yEEbjMtoM1DFo9mdC1kJX6e74PVY36VsdvNyVL%2BChIA%2BfxJmah1hpG%2F%2Bz0MwBsPO6wd9ZprngDzFjncjcE1zJJ9lu08nH3L3TncXsKnJAvjq9OlXmVDah1AbiTq8bcc7WWsfFTMzS9EqlW0Jxq%2Fp9tqjwUiRjFjTZfOvd8WHze264nLBUviGRfw%2FlWkdrgMO7NEeyciMtd7TtHSU0cZY5mFR7Y%2BY3MTPe12DtQ%2FDd%2Bhp0PCPi%2BOvaKlmE0jz%2BVt%2FSnpRa16vLibSOvhQZvGR%2FY5fyE0KSPtK7Ba499B34gTv409%2BFp2CwErIww%2BBuzmlvxrjTHHO0v1dwKyNqg9jEUKlExN%2B6uDoAQvMgmj69tsTmEgHAJ5lrMpavcIf6vm3dx55quywN2uZmd7rueK81pofpxBzts5dMWnNhlApelNdfOgXKA8ESiH4%2FxwA5JxM6yxQtB9%2BljOyvPv9PiyJojaOto1R3HMm9erV2WzQaaNGyXzcHWjBtTRFd322qsbm%2BrRHeivAhwvdqHODZObKhj1xh3DOsgPIpmN8nBVkWDoqoKLMsvBcwneK%2Bo4miWnGwKYN4siKo2AR7%2FKszaBvEX1MuYS0yVtgJA0%2BlAWQcJc8aswhM%2FMKH7zcQGOqUBPKblLd8Pvv7tToWToHyTMiawjGGXV2rXzN4ahPngS2oXZFVEIJhsv2L2e0e6lpwIpIQ0BcleDL1Xx7haEsfsHYbJCrVc8tHL5EoI4R%2BrU26Y%2BtY0SQ40UkjRFPdM3o2ZzE3gfcCp60fXcnog6tr8DSSb852yRDtdBVEA7ZAinYFBaEC9mrLNCNi%2Fsj0sj0tZo%2Bt05Pj23C3nV0Uhq8sQNO3KaWYW&X-Amz-Signature=36665fd9a7119295a2d10adf269727c13251537ac15dd05b619c6dee9d07ed23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=7304524b1647514d08bc62070ac2b9774e015768d89a0720e3fdbbcd9de961dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=56200444e189d6a7c94f0b0aa3234f04d6fa42303040f687659fc1ed416c476f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=c996a7679ff0d523102eba159df2dfe83aca0f0d360a9bb9e72100e8d41826e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=5aef54dd86bc352531db214fc366925a987faa74282b191192dcf77bccad964e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=8ee26efe0354a05b6ec6ac7c8e457f4daf15ae494db32bfe31e75b503f97f49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=5e7d7c9bfa7d1cf4fc77e6a7a0f8e429c062c416dc77836d3f56454ebc9dbda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=065f7c9709253058c1fefa10ad3135f1c5dad941e27d2ff29097d0e324b00cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=32b6b635f172cc4313adfe94cd25f9e84e1bc5996041b3cf3ff15d710d5fd8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5NT4JC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC%2Ff0Qul4SdKNaPWSlmLVnoLqW1ISGxVxlC5FdUTEp0kQIhALeH8UUcM4E6G4jrZMyWSZsOwNERiUHWnUyOBpqY6pEiKv8DCHkQABoMNjM3NDIzMTgzODA1IgznajraycIVeDewN%2Bkq3AM5ory0X3EPwScoq1uQny6VQpj9PpW6j4%2BJXqiiscdC4mh2Tp76GgsidfbXlJWY9L0v%2BlXrd4ImfNGkaqUdEUeYgE6R6kLF4tXSNGJFiuiFo8N3bdIhxpmDmHRxyISPIiKnMRUwSkme5w1iMWuV%2FbEX9NzmTFgVepetPInmTBWMInwaZL5CY6q%2FNZB30LGLxEhlrEMko6apjGb8cgpbWecgZ3hEYdTKOm3m2DE%2B17WtRUoZRJYkk5d5D0IM4%2BJK6p%2FEPGrgS5gjLQ5T3v0Y3x7add3c3VqnUpWOUAapO8koSPw9e%2B4RwpWS8EqD%2FZGkP1kOgu1pVgBAOM6H4mW19y8iPCTP2llLDXfX0gPzYzAta90IM44wvcfcXp0%2BETDU80Qal%2Fphdm6jZVb4yDifdjga%2Ff1koRTjVcobAU1i%2FwvfDu%2Fif0OtoDGXIZZzyfO1Y%2FrR8XAHra7OLNefAluoCE4gdCIW9yGuUqsz%2BL%2Feuyl9SZrM0Oak2ip5kJVUJ8d14gLpbnkzP4NHgYfrvPTH7W9m%2FYP7N5jQMFafMYFQ3TJnD%2F%2FE0qKRgRC8vndHVBdKdKcSPcwMMfnzdzH1rNeGJ1v8GHcFFbEmoDZWRtRMkio3tIWKWzkitFb8SvrykTCw%2B83EBjqkASGGT0yG4okhKCMfb1uNwjOD%2BnNLty%2BnliIEZJN24pB88wGjWiJtIcIEaZ28tcYrr28OUM4ykXIT1BYS0L%2BBzlmeSUuIoz8pbKlIfjUcmHxmkLi6fBRrf794zzxuhB7Yu9%2FC1%2FutmtYQzz33r5qzL9GReZK6y8I2xfcDYxiddNo8iawpT3neMjmzXX4SFdw%2BJv1j%2B1p5b2cLAlagHHm1Dyhz%2Fv0T&X-Amz-Signature=9dd0acbf10e1d0c9605202f734e58a1a2ce009626fbdad8ef813e4ea22baa8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
