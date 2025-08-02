---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=9e3da4dd316d113144b620fa8bd2bb05d244cc7e7d4b55a2cbbb354dc174a310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=8e90c630b61fd72a7bbd6b8b6128ae68f3e231b3e50dde3de856d30c6c848c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=f678b422109363b55c3ceb70786b60534c1d7c71be266aa2e1955e43e447554a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=a5a8f45da9cc3d586c6858c25a51d8ef8a1bbdcad48ebc7601f7ecaf01d17906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=47e313d6e17d819296477700fa22aa7839b02e6cfcbc34644dc160a9f0c4119e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=f30a3d8a60cd8cc618b262398eb573bc75291e887159ba8c0a7d0c88aa6636f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=1a131d01e8fa49da7f02678a0734afa12d56bca0c462ed92d4dfdde54b5c9da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=1fbdeea5645f1bc7629fc268022841a9640e2f1a75252e857ea627e97e19a531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=4cc89d4649f8e994ec965d8e3350d65b96c66988b0e683bb71daca0d37d69ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=6c4476f4cd7cfb5dc5c039e240c83ed0051572c2a30282832b73251a7b4cb47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DYOKGX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCTFyUS1hx%2FqR0xUu1YYDNQMDsvOkdS9HFv%2B%2F2PI3sYAiEAwg3RNXfARAMsZFwXLjh9br17S93grPICHY0x8fIVUowq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNBAok8qV7GAYEG7GyrcA%2FuaAStXsBvvpPQdy%2BioB3882D6Y1en3mI%2FV06PN6tmgzkUW2vR9GP1XkKfPWtPoGeJeWVnuqIYIS9kaFlqA%2BYnfOj85TW5B2vYvt0KTAcndMuuJQ5BnekPYP5EUro0tHCOIlHg8dvwdE08MSaQyaRjEP9V3jFXOeULu1g2ziFasA8ZsvW75neQzapGPWczAnIXM4m7lo4CFxHyx7Ej4AdJeNlIhRBK5BSdB9ZLMCr94taatQL1%2FscN9YlUIBAtlEwoaSq0CTj1gC4e1ksEH1Mbf7tvoqtz8%2BGxX6IZ0yrA0BoHPaNfqBri2RM%2BaBIBIjgn5t37C%2FFJyRjJkPTkESIOLrslc%2Br490w36uLMY3t96YzOyeGja7nkSQSRjn76SpYVe4ZDiUCPlk9KVGYwAeDfLvoGbU2YT5IFyn4JlP0sGV28KvePe6WEi79qTtTozhsa9B5I63CC0onOM2DFHET0Lsj2b4pIew08CyC8rkeuNhUNrt%2FozC0leiqm8gjUms6dNeN69xw48BrEOJokt8nJ3WKIPrFzMGp%2FHA0svj4jLQEoQcglIHGh5C08q94rf0IX6wvrcbvcTOHqY6jttonS%2BpzYfMLRgOMUdMVG2ubRbWpLO8vkS%2FeVSuqvvMPeSuMQGOqUBZQCGTRWId3%2B7eP9LvTdBbUFd12AMKQooQZL1mZLyqO3XUMzQgpE3loVXWGYlZA9hxjHWaXgXd7UgSIckgiAoRoaMXSoexhS1PGeHVebGbCZLQl5QtoJVFMfODhE8t%2Bif0PDzGl2ZpX9YNHskjhiJuBJBA4cSKCBx1cjV615PXjDA5ngZOEK7wltBCCKuF8RLDpcdPlGc5CKdWMR6dGHCWSO8zEpc&X-Amz-Signature=c04f429efc91a3803c4f89983de09a223cdc1ecae1008b77d08c65fc3b88b5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWZODMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9VXlxJowaWhCTz%2BGgnHb985Be00my9jMk6T2BI9AzgIgY6eFrW8vYz8vBC1W2qm%2B5oFqUBWq59zSss1Eq%2BMK5Roq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEtF1pE43aA6WZLjyrcAxXRy%2BvXHNVUiS0D7lU%2FtkJasFDopv436i9XG0oeMi0CpiFnPrl3wFX%2BIuFnYil3wsFd7nPPU6q7hs4hOhKvhqASN5USr%2BUQ8Hc4ohaeAXik77AlJrxQsU8gNJIOMljSpjbKWdtGDpKM7cG%2FcH6V91a9pnQvcZsdETzjKrBtx2P4%2Fb3YZTw25WQtohAvZXBANcxErRznmYjiarGXO1tVs27H%2FTcjy5mgvZRi5jpjZxYV5BRlIycN0yxeS5ne36bHjGP7h7vCxNRDl1Vruqx2H5PMEXiQIGSh3J%2FW8jNGDgvr6YQRNV46yGLLW0xkHYXqSvht0sct%2F9V%2Bbt0L0CwW1NoQb0SWh%2FUFn9M8YHJFaoyiyYjUALSlw%2BNBzwJIwhGvbDIcP30J6nLLyss8BuF13ufCWxqD3YkU9UXf0WkpccNvGXr%2FyX39DRTUlKvbL9MaWJw3pcHRi21ELEgsZLjrONA2b1LHHOSC2EfnQJbT%2FqEH6dqIwjm%2FMNOteJISp8abnWetXdUvROVIMvlQCw8hkLN5YFaepaGLPysTwOfdHQkuzq%2FFKza5F0O85Ujp8QOtA%2FRoxFZhi7uBq0doFLIOmYrx%2BTgkLbOXcA%2FXUV8Kc33h8NsyHjN3ZQqJ%2FjJzMLeWuMQGOqUBLwRX%2FlrNbZRNEG0PeT4KGSKFNraMF24v%2Bc3zhOWbSjcbXcOyZOqjvkCXW49WG1NgDZZzROIao4ZAnxvyRMiZzTFVb%2FpKjXoje1sJNcScTX09ArQX8sHXzqyrtEHTgt%2BS4aYSMkcrDW77jEKuF51S1VF6qGKCw5w8jzcni7MxuU21gS5r4mKOPpEbPRWoiDVN8NrRsD8%2BmACv%2BHK0Y%2BOi%2BckG0rNf&X-Amz-Signature=431ede80cbc1750a1815173fb5ed2951c9fcf65ae498c62cda17f4928f8d9a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=e06ad6c2d79cb5165b5c4640f05382cd53e5f0f47d45f8141b892f80d35cc015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=67581081ef9d5387c6a1fc813be0aad77e52dd16b6ed3d24b5784c319f2677e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=afc660ab4ea777a138ec8a006c61548702efdd5ba8fb56067bb2d3d03cfe51ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=3a885560c3a6241f6f377d48a9db77d280aa7ba5e187124b46b4701b2cecfa95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=f40b207d575cbf09597a6b437f2f7d78318c137a8401a3c2179b17671fec61e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=f67331542ed4865a77a221a861eaa3b9676a3245008695a0800cdba7c41c2c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=541d3d2c13cae250e7832e35f7a68cbfa2495b04d62264eb556f23f57e30b736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUTZ3VC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZvHsXHc6taVcRyynWtBb7gpUGgxrSP2PiPS93HpiATAiEAkuidEeBc5Mu%2BOp%2B5ycaXTLYm8%2BDpSfEPRcqdNwXNU%2F8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLxNFNEd9gq0JvuyPircA%2FNVW9%2F3FnhTyaEbrK8QT2Y0vJz8czn9ddFSIe90lzOS7hNnMMLWioi0cfXhyPT%2F9qBFidCC3H0SFk9Jw0MXwqlJ3V2f1i%2FhX7NsaixvlHToCisQckm1xxezB%2FFK%2Fir%2F6VXFhWWYWOmxns3SrdTXIiDQvL3qwYqTahwWraj%2FbBFCPBkBjQdEsm8MV%2FWhQVxb%2FO0FcowBe9%2BA0os8IEh%2B%2FO%2BmOWrAM38j1OXcCDmwKvHOQruN3XfWMrUutivXReLXgEFNMpt0GPmnd49IUGw9IPkO1R8QUJqH4ukSaKnJi5OVxf7AvxI1oNZ3RUbb8IQWoMFoOh6mRBSVfs26SBYAT5ZUGKnJJWJ8x95X88YMRtm1DvkXSoB55PROl5woWkINKCtjDXA72EmC%2FiEf6f4hxY4SJE6l4f7UccU%2Fio%2FTtKuVHfTtF8Cj0%2FuXP65jDUx9g09SAK%2B%2FdN%2FJkHEGeb%2Fgxel2T9SgXnhC3IJJk%2Bh8HzfuXTdvp9%2FNT21uv%2FzHq83xQChyaVj1%2BW3AV2q82BtqDQv%2BPmyzLEjPjsA6B40qOdX8PSm3paXxb%2Fv2npFVusXyUVj3ILHTZhLORQP0VsYJ0vH3SfW60u%2BkYEUsJWVQDq2jnT890pgpC52EeQcBMKqJuMQGOqUBT1P%2F9TEJNvmonEiqqryq5CgTyw%2BnFknJ9U98ATpsIO5cZL%2B7ga11cxHdKGfG%2B%2F1VWUCULHbyCWeKHYHRMD2gBOeq2JzpkS08hfUFICMV1Ddp3lCUX9SAxPEeaRCpO4FYd2AqPMFwlI8h%2Bi8QYFbbCbCtg8ZcfEccXPN1yegMHM9JzHI3%2BEXGKezSD6DHY7FsqEUI2E6stsFkTOV2MMAo9FVRnWzh&X-Amz-Signature=cd39a5a8ba2cb6260fe79f35c4fa8dca9aadd0619fd683886b08e1f512f13f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
