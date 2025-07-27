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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=54aed82f3302023e39b14cf1601a4c4a8bb258e5793ab6134e433b45428c9c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=e1cd0311554f693cab223ce3ffe34273e1ff9f588979f31cf5af6a32c54317ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=e5d22cd4aa4dd4f313449ec65392c1e7d001477179902b5004b119597b940f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=47f94f49e211f4e2ed83ad0bf66bf0f72e93796d2486741cd926f2d78a84c8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=f58d1ca0fc5ee730b3d1b2b5b7bee13fb311836dde449082bbde8c21946d6233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=50116014fa22b7540b5a7293c48a21c0122faf8f054e97e7c9e915a37bc85dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=98384a18c9893ff1f5d1a7725607f7428087ef93bd6ac1cb105fd37a30ede0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=8450e046cb07299d3216b44dccedf1f4cf55e80b0480d77472262d70ee6eacac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=d1e048c21569e762626f05546234c486ea5fcffde55a44d192fa7486c4d4a227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5TFIYI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb2seMg3r9xS1%2BIuIX%2FoIuoqcPGPOFZNV%2ByUHMQwz5WQIgZBOW%2FoeCKsjOvUsZwt%2FVcQwRgq2%2FOllrvzF24JkVvc8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM%2B9HwUJ%2FkzaCYLw7ircA4XKP1ukcwZd%2BF6CZ%2FNBfvbQiojflSnM0PFlUVR58norOl%2FumS0QzM7k0C9oD%2BabIu%2FIEtHRHYHu0XUhUSse4YeCJ%2FFlmr6T3MXa1boxXZJGekpTtAm232jPEIRHziVRzDHZ1KQWhSpZyuJ59tR5Gi0Z%2BEX5WKEam1%2FEf%2Fs7LpBSqBWo2uJaWM5uCig71K9i6A%2FKFlGMI2OTFpmnexkOHeHbCchvfTc33DvM2kycUK3zsPqfBxMq1iJu0iIHSX3ce4LPDU5kuJgzXIzTdwJBkin4wxY6pGZ7Og%2Bnt7du2i5H00EKT%2BZYXytwlNevW7JSKGxMhqStiFA6kRiezCmayMGlN2rB7xVkBggowk4r%2BWtLnzHFuw%2F7SBf0xTrgggg%2F6Ma9FF5orrhS6EspNKPb0jgs5t8r61zGAhAwaxOTL1U5Ee9hq%2FJBFlf4kivdIWGS2vVruUGWIHhFZCIOmzf3j%2Bhwa2LEzCc6tlWrx4btEuxIbc1JGjjcr7k3ZHfSBVmxPYHgLJ1GJpPTfFyUh9E05kLNNDMiRBeb2mh7FKvsm40AJA22VVuvy0NnIJJi9iGEkWomirI9ExcMwfkwLe0X25UGHwLKTTbGwF4hIg1AxqlEtCQrV9kjkx%2BOPPX%2FMKr7mMQGOqUBPY0PLqz5ybX6lGW4G6WqDleorCXHPH71MAKp5Zro6JfAn13gYRrBiFcPJeRcRLReJ8r%2FKblD9s%2BB6lcNgr0vFAu5d%2FXbqY%2B0E6TDaU1jNCAX%2B%2B%2Fa36oP0ViZKYtHlV4u7M0mYY8gFe%2FePgHJuOG3fKAd42258SnovBtglWeVwnoTD1pNH4msAbESvM0bKiRVHL5WJXH4L3FDO%2BEcJzxCY7kPjSnU&X-Amz-Signature=3e32fc255e62ed524663881ae3fd9fd3a556d32570e3373cbbec2ae7535e9993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775FKDIP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIG0jFXnzL1Tqm9ZlSc1AcjxWcMQ4BMFNFfxjq4YxTs31AiEA57tJG%2FortIWWNEzDSC%2F5zK%2BbSUFCBX55%2FBXR%2BM88hTUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGLNHFObb%2FmcGsvR2yrcA0jT%2FbaY%2B5OxNK1FqPmWahF2aWoLf6eGV%2BRTVxXAneVhxLLQ1tMH1mjKavKZMzsGgh2RfII5aEKv%2BBKQopq8L2fRBJYVlxlL3h3Us%2BKZ4mIJrAW2hd9TERsS6SfsntxZnAx1gc6V8XT7pTJpkrKXupdVtAbibxb9jZRkwNQrJxoWr1MdNxKdf1n8u6fZcgZLdJavLAAKQxzRg7pQg3HuG6GQpOQYuLBXIkWtx9ZYbUgD03uBIvXGRRQyscR35ssfTfMhzmOeDwLvBD8vu7%2FmEnNzfjH0h3YguTsVizGl2q3jl4iWhAsN6eJ4hlJTIcgVAOkm4GKOeSnihCI3jMus9p0z7QyU3tlioW3FHOD8VZXsymJkwxEEKxtUbEe49TwIM7apiyJgesTF5LqiFCOQ14YPBlEqnJgk2awGHgzTeKcLA9lKmQ%2F3DmOmCI6U6nnvwwc4LDNx06%2FYIFlzaffU7fF%2BqHcQBwmBva3eFBGSzML10t%2BexfvKJaw3cnJE08YawdfLH%2BIrYUHTaGqOiKbrjyy7v3ngTsEOxsiZxqBE7bQcXwdGMwopGqv2PNJBpyaG%2FIuKuG7XYXLfBMY3qhHjnx55j1pLf3gvgZ78SjGu8SVrLhpCjagUnlS96xhIMNf8mMQGOqUBiFitFM7g8OLvmh9vv0PzFhFbcry13v2iJ6isFRaYzeKl4Uh%2FAFTjoJw%2B5ae6PIC3vwyNR5syUojlUU2ATfE4uUNutXXBt%2FCSnUJo%2FwPShgc8b9%2Bf6WuN9%2BccGSo8hHCRWCCLijo60Vs6IU1V88lmdv2qgaLKYWrguUEn05XXOyOBlOVByHn5cXa1uZpPeZ4jDTDSteY7SUZ6h6qWY8DfTRiOqzJW&X-Amz-Signature=3269ccf4c85a9406db414201e0b09042761b5226a2f7b110275f869bc5dc6e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=b4d61206729ccdfc88b4d3dc706cc6ce22e95d8fe1207ccc2c4c9573029d1198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=2b37e3af04b776181ca82b8e521733ea0e6fd7d8e56254afa4935bd455c3b424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=3e75a870c2b76473f49565e33c9a3ecbc33d44f439295f8b3851603cd3c1701a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=e870d6d4b89d407654597e0c0c4ebbe0643e366162d42d74da99cc3895e91b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=d06be228b884c65c8f7b738e009e786d126485a9bbfce9738b2f9384739e5a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=5b0ff7dce040ea53a70b14ea887e2455ba3df65a6f64c403959621aeda2ef8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IF2HUW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBtcX6XdOyArW5jKnMaWVU3NurGrc8FfUVepoqiI2C9WAiEA2r5cLB%2FkEOcIsPnJ9nAR3qf3wDh7zlJX07jH4jP38SYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHvkiqWUVrDFRn%2FBvircA5beKziIk0cBqkcw9WFyW2Uq%2F3kPZtDatBxB%2BMn3gcapnsdRhJRc43XFJpnGQ5AYYWQY9XHtFHe%2Fc4Q6BXRBB05%2F%2FYfeDXMA%2BFiptCIdpKZ3xLo8rtXcLm%2BCn%2BxcCPRsJs2zK5KKA9KSKuW%2BXLqYtCaSxfZoibBMtlFxaJwFInqASBOC6vGdCFHrZ8ulFewF3XI3fqw%2BpjWmlMoTcGviJ%2FoFIyh0XSnH%2F5Xy3oxS7r6h1bsj9uVzQtBm7UG2upU9h7X6u1OjXv0zwNKNLc0XYELxb8pbGn5oa3INMOqiFTFkCdQURzKcheALNwcD6a7Yjhsj0pr0WnCeW39ZdFPxs%2FnjzTZSJcJjjpLmbzoUg709jwRtHRhhNaRpo5Onj2A8RbmmwbJxjaEq6cDLkggaE05xMfSOuIPZUr79xITesgC2FOL%2B1kl9Q9rVXcwAEzmV0K7GAm5OM345GJzoUeQcm1scO6EOIVVLSOCU2splQeGSXZm9ily0lPn0kTqb5d05ju%2FuJUUIp0QVcytgXuEcKWg4rlel8cnt0DgpYoxE6Zz5tAg2ITDI3bqw3ijJaS3AhH7w5R66Fl4UAmBNuUD%2BTBTDyxDlOOnxC%2FJbsu8NCAhdkEd5YBmaoHyVr0zXMImImcQGOqUBRBVS1DyeyGCmcM3dwtdwjwF38NFx7tx0T55a4%2BKxNnBqSQ6pFykB%2FwPK6oQlQb6hnN1ci45%2FpXQl5UcEvHZmDQ5HvbBwIuxvbbe8DeQ8VReaasycbB%2FSlCB9uDCX%2Fj3TNXIzW5h8Scb3PKP5bRq%2BAXHyvYkc1a0VDvTqy4Z46rea3aeky3dMNsQXuKT0SavkoJ8n1Y13ru6WNQMIvXQAIstlgCyO&X-Amz-Signature=520a21e8b837d83fb7f900b77114feb5e3e393236e3fb8bd8be8926bf4172742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
