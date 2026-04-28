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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=ee0fe2de2db409b7ae0446524c97fce8ff6d1ca02afa44e570e7917dd30c2b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=005acc1e9851119a9c476e21d45f70af7b7647d9643fe60a28feae20fdc09faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=e8e2e4b16119234bc0fccee85531a03c8a1da240b7bbc1df8e9c9db5aa8fcbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=a8c5dde2ef210add189309b814499c90ae7d911edd90eaf55d0e68f6f0b8cd1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=f3ace6d7b160f68b15663a925572dcee34551b6e6256d8359fc0b9d79b7d11b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=f7767bf0b14af47b091db897233b1364e3902feb3bf997218fce893c8b9ab5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=8e6a1c700eacdb61c277305d0f708cfbb0b7d6cc8a73741e468a1ee0f8f60d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=29630d9607c0e89d9e9b785bc168f03945338dac549dfc6784c749124a71dfc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=9263212c4387dbfcec8693c318e8f6ac5b920e3bc5e59602ae07f8cff961b54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YSO6MS%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCk%2FTtG9%2B3c%2FjuiklJ0c16qXiGkJ1C7WqryENKlk2wQEgIhAO8ho4iLULmkrVyXnxE9WOXYCURestExTpBUi%2BfthebbKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8TlmZkbeh0PPHJbEq3AON8jBd7QemTywir7StE85pxU0a67F14jIzJXDW%2FU8f78mYZhv4HmEzV04xPmSR3lnctBGNvwJgzt80QWv37o1EPBSiO4ETykQpPYVSR0V7uLTnr1WLXiNcJB4omqCJPuEJgt1M%2FCYbN%2BhG98nsqJItYZ7HNNZa8iKh2ynEnwF2Hkd1yKdYgpxK9nZr7X7C7VZpp%2BQCelXAhAx18Y37E%2BY0E%2BFPufLda7ZmqeUPLDW1ivs5nIZH6nKqCJnS%2FyKweX1Fe3%2FnPbJsbTB5kGAS9GgH7cWRfHSuG5DoKWbaWNJYStfuLAY35MVD6jNWR2DAiY489PT5%2BMmxDXn7beV4j%2B323p6dNAxJphCjPye6gLaKYX2jyEiqEmtHM0BiZPtQeWleVM1ADcY8FQtxQaLR%2B%2Fsjy%2Bt6syQkn57YqBeg0YZ6uX7jkbb9f4tgrpPWzdid1ObSX82%2F3LakCluqKlqnX8GKNtXvlN6DvYejK8iaiDn36Vmd6kBh%2FVCj4whfDO6LX0RhwazCKK72knzD5wLQjbGFcC46bM%2B55GuL2PoioDe0CVeMBZPenqpLIzCYpl6XHHAaE83Wf%2F9GJ%2B3vk88URUvUEv0sl1%2FLdPPIUdLkR2%2B41rihKP4JyK5c8DfsKzDzpMDPBjqkAdr4BSQ5yawTySTKlrnNYV1Fvyi5Avuf7O1PHz4G70T2OlDQ2ceVYhZCY8UZ7zWwhvT8MssJSOihGK049FkU%2B6Li4IGAG4Fr6VNR88ZxafYAiKN%2B0T7TQtPca3peCwryMREWkn9Q4iYwzjsNw0meKqI4NAuw%2Bb5TDJZdP8IYtTR%2FYDwslOgqgh2Ko0D6ab%2BIgZnfXNdF0o5nw7DVS2oG9QghQgdl&X-Amz-Signature=cbbd104c6e4d23d8270df5f3fb1f699aebc8704b72b74cc703aeba0274519215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMTW7BA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH3VKbR%2Fq1YFHhDONI%2BpCIBlvutA0O1ynhRQ%2FwGeNqFqAiEAzjqHi49X5qgWL0eA0z%2FtTneMr2V6UAxG7W5kg1u%2B64QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANXpkYgc7QPPg%2BApyrcA5KFr9x9drYzyUTCUhQCnmJxix5wHT%2BizI4viOIq6PPqispK2I%2BzRxXB%2BGqDX9nQjBByxb4FSM0KWBCSQV4B0LugrN1l7Mqq0%2B6LU0%2FBirtsOpNpDluWebjlxXpHXHUcCC1xYPSw75C%2B2ZE0jrFyXPa47ovMA2HoEIIQ8QDadfoLlKV8HR5dLNq4OSERlDUmp2qg2539ZWRLNMtzCTRFxHb81cn5wHv%2BVel6FGX4z9EgjVVaynJ1heHzhYW1Czo7MGKEi3eHyd1AMqz75YOBTxRfCtlHJOczL05WeFn714KqMTxMwbA9E%2BTCHp1Q8QY4r78HZ%2FjX24A82PQosH4FcDF93PmET%2Bfowk%2BmIIlhj1myrzeWlqd17uXtuIaVNNjN3KFA9PzvbS%2BfKQ%2B2qh0%2BB7A6zv4VwzaDZ5MGOjCBYRTh9x9GYGi%2BFdqW5u182MaM7sj0kp%2F67ryH6ecVJY0fjRTw%2B39hhnST%2FosGFzap8vth0mM3hIwLFQsHljuNywqNMnebhg9evzagGLp5FsS%2Bs%2F2rZw%2FCg2X565PjDGYzHHtm3ALXd8hIYxSB16y2YzzKdSRgc%2F0IolCg7DycoD%2BDWctzkZKrRO4l9f55E4ituFt71U9UXDnZNTGYadvnMJWjwM8GOqUBnl7AeN7jKSEYoi6jazkxb%2FsUfYlhBdNTgsZ%2Fc8LJ0z1tWG8yr7S5nLBJe5TBNm7nGwqYfqHFZMlzW6fkdYO1cfP4MJsAc5Vxq4ZynmhGqhG8u5%2B6c6vc0je4i4NiJ%2BUbtGKAWTFtdxuZ%2BkR0fxfoSAIOb%2FQWlwcVytN8pAyXwSjIf1RaakdAzeDsy%2FUX2%2FwCHZF5CGEkdAMjrar3meaP2TcaNTOj&X-Amz-Signature=c6c4792a942b3836fbd795826823c0e893060e3e7237bd61c7542f347a6cd90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=13e9b72697370829f365817b529f747f98b1e389fc39b31498f6153eed990c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=ad0d2138c2e709072a4170aaa1678e47bb43aa8ec865aa756312096832abe585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=4ada9636cc70bc1e46acc9ac321185e0f5be362e276a9c972322128d8431eb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=15b0b9da40519fecb764dc36aac5811ca5267e0aefcaba6ac65409eaf31139c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=db8417dabc38998176ce82545b60c769c992507d0dded335aadb08c6e05f2125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=5554c5165a0486606b1a84520fb6d9425fb43e4a52333e319c0fea993703b7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=9c3605f52db842be6d94447358ad9a54e14ec3949059ff5f077603900e43e70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=d8b8f4e38b9b31936f8663924fff262ec53a23198de4b22b98dc7f8d653c4b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBC7HAA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDa%2B%2FjYbd9ZkXb%2BHQZWslPi9s2solmdVkJb91vsBw69GAiAD3b7CALk5LmvH82sQmfsF%2BscLJtEfjOwq%2FK8WO66fzSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxr8TJYFuUXWljd9KtwDXV1aUCV0rdAQ%2FnoKGAnm81SPzXVdz7Q84rveSQWlIp0isYtI11soNmFTFtXuHbSEvVYsOVFpDjAKt1kZnEJ0RWhyAOBCD8WgydHLftv%2F6emfC7mOI3%2FbEzZDmui4jhsBpFnr2cojmCABQAlJK3JdfeTbRMyVlVm8CCLzGnkhXw3BGJ11vabX40qe9Y15TnDJN3Y9cfP%2FYQJg8mAGf5rpC18DPhkv3A0QIAWX3vERyFRQsaXQ2OpiCUdSJJoTyJGBWUcNz7m7xv3c4%2BrlPGi%2FiTYz2oiSLluSa9UQz2Myr%2F4mZWSG8HNki1BbQCFJ2eimeHZ7wy9Y%2FIvadr31dhSdnfbx%2B9VS4RctVgPii7PutGliONey1h%2Bn5ou1wIoaGA9wXJIiXcrGYY92vVJglCxLzlV4i6SemKDdorsiAOulwdvEKwsGdf%2BjQEf8mkbyvC%2BVQUNUS4f7GhefPkQ5Q0PS2DQBMQbMDbj1S5qXNGUjTlb3%2FnxtWfqscwuaJp7LHM4DRUJ8Ug2VFxo5dVCAE3aB7yP2Dx47YvuwcXjnCiW4wKxoVdoP6zDRIAygwb9YX2r61X2BRsKZ5UNer4hSmkdx6MBzbFK1C9qtGUUjhBIc0ZJ%2FGUV4XYeozkqKhD4w16TAzwY6pgEivR0xaLId%2BQ20Ft1npL1yMfs2IdYV8FD2nhljY7ciIXP8qJAgFKqFzTFFju9QkH3fJopEB9c7h8qZ4V%2BJZ3mS64eB94GSKK22ldxW3vTOyRRwySRk5JbMJ8QzA7h2VjUfHAEC0ibEcKfDg6LkD32l7gLw0FmtRe2DLl1KxYmaN3eLNjSwMcrS1z9%2BeKRYOkUlbOZU53czEL%2Bsv10yDoZd2lzh6oCZ&X-Amz-Signature=3fd7ca36ce9dfdb3203132118090fe0ed4fc01dbb6d6e18f7fba58b73597bdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
