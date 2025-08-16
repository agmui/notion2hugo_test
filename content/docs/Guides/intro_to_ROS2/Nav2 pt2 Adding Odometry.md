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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=2c69797a65cf450c9c671153742acaa8914dc86a3dbef4d0ed40a248ff6fd89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=cfa683cd508ec0617e8eb12e838988d90fdae81c85bcaaf4173623be177296be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=dc6af4559a89b0d2da1acf266eb0c4fd71122dbb97c9612da14e6c0ea51afc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=282de9822bc937532621a636ae29a33b3676d0083fa6e2e13ca2009c4d3ade4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=ba75c85ff9237a10caf3ffb916f3e0a288fa1c85659bc82f9c15fb58ea080015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=96eaa1c1d997427538d27e20d84f2af6d992fbbe43f825d49855a95919e4817a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=156d95f4afdbe2d7183bb41f0b9f8a40d95113c2be1f74bd2a8a84e19282542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=13e69dc1e4dcf86e13c136d6c8c535d62daf3105727793f46e33b8af47fe4245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=9b00db615b335234fb0ee3c5b817bfbf5fdbeeab1f06d59c6f4fa2e1c86f64e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMFT7QO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIACIppM0UJpym66IeQOo8mNATK34egu3rvDGMD1P1NV2AiEA26f2uR3SuYLe3pVJ%2B4TL7Z1HMzfdY9d9wGqewEr%2FIhkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIL1mPE5ECDsP2w93ircA7SW9azQZNd95Sx6P71D5A%2Bt7fej2qkcXwvsEMOwFKWtbWA6%2BMSzk%2B57akkJx1I9xhQ%2FDba1Y2TPRVC7iDPIWLISuN%2BW7Vsxip%2Fo5SKj7IiFTTOA0sLES0L%2FW2ifWSh7fbLZx7YuVApGMUMkK67aQboxp%2FkzN2%2FH2UMWGdMSvNaHyDUKUBl78pxNo%2B2eVZa%2Fyv%2BLw8GjpCgxLDz90b4fytpem8FmlEdWeLbjxwulsshlSgdNzbndzuGQhH21z0%2FVf3plG1wJ7ZYKwsPxbgP%2F3OT8FkINdLLixnSyZYV99kZaSPu6VDMWWzd1OZRFOoKY90OSNmwQqN%2BuSHTb4ZzOYZsM%2BGPwrQQ6Aa7wZnzjw50768uWKWsRO9HK5SJBnGE0Al7mwwjpg6rNkyVhOtUiWi0T5PhHljlbNGxB7WqKagUww8zuZbXYBy1DpKFRFNt23dSU3AJOE5Eg6b%2FazGrezr8dRtvoS12vUMCgnMdsBY7etKFXb9LCNujdkubJDLD5f4DXIJaL8U34dsqTWVU3dy%2BpdUu9iEm5ZVUuml5OCQc0Xf%2B%2Bknzi5IjXQx6MMlskaU%2FUMNHQWsThMwuu4uLFPYNpB17xJHS6PuStBMXJZAnXkFJDaMoPItMnZzW6MICZgsUGOqUBH18DqIs4lsSjeVCcAq0mxn4o%2FFNLkDoA1HmfYYXimBlFzsP%2BpAjOmkLRJMPOctwdVjXIB6XfGzuVCWPb7sLfubwlw2nxE4bzQqMpO7HDCu70Tto7xvpn7DXUlnSfAz2r5kJQA67Kmr8Jkngy4ojHWq755h7VkQm5AsdAXzGkrFt87epl90TCELbrgPfmPKnpyLXJvKgHk7XZHQKb7DGzg%2Fj8M%2BhP&X-Amz-Signature=3ecf2cc3001ac501d794507b7e890d6209236852d05955e978b38411d16a2e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ5H6LK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICjXS%2BVflJjvRLSqYsTH8Y%2BMQn4Y8zv4L9jkYrL6qS4VAiBptmtQisW27AKGI%2BFKeZrHIeuJR7k78y5RpBAz%2FyKUcir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpORC4RSynusFso%2FKKtwDX30Q8KtZesyX1N79h2kWOytivdF84rS%2BFBGGQ%2Bv9JsRsA3CElgQ7zve2fT%2BTWLd5cUvBJXQ%2BpiuNrhbWI6I7Hx2fK9Ctv1a0p4PegwezAU9hFeL5TFDelqy0xsAH7e3oaa7hwCpVrxFKeqwiDVFRCulEKdKbi7Z8GeMmUXDcSDmbVjPkYUd1qGL86yXmCZcItrmobOxpnUAOfWna9Z8EoCgclSoP48rwk6wemfD4fz%2Bck1pDoiV%2B%2FOgyaLi0zP%2Ff%2BMjp6Z8Gecl7C4g8LkzcmvhL5gI0O9ksdlGxcB5I2ciiLi71IxJgswm%2FdcFTQf8T1VOp9i2rsD07Kcn%2ByqJpbXtMjYpIr%2BQrxtNV5Q99B%2FfgiCbecrzGyF%2Fx2dykzPH35H9l27zsvsO1JeXzYtQvqdDtaCrP5w3qSvXAOA1STir%2F1x4cV2gbLEfVx%2B9LmbqUiPSB%2Bf0jt0247lm2CQX%2F7i%2B5dasMSEDE9Esi5jSskuvfKwApmIxQYx0qCA8O7BEMnNg5HtbHGvqyWxcmOAyZMshba35kPdVbtP09D072LPCvKTIrz6svrx%2BLRd4W1tBHgaq14juaKRVH8UZuhZdxpKB1CCm6spIj1mQyP1v7ZdHMnoweiRgSeX92Gvwwt5KCxQY6pgGCgw5Gm0FgyJ7JpvTi8S1zLHINKtIkI293hsHdi8pYLJvU58jOGS7Pt5XT92PLMgLxoJuZfrONdHifMo7C2ya88lQ%2FH2Ph5UllFYKn2I%2B1zOUCnciX3wDEMrGuJgqIHOoDPzH9CPcmS9Pv1hjPnXvifu%2Ft9qPvAKwdoxA79OGYlFu0ax3IOCGuWonOqJBUDcJ29b1fAp3zUq%2B%2BgsOIBwDMjnbklOi%2B&X-Amz-Signature=8eb8ab1874a9d394927a0638dfde7212443bdbf05cd2df7c8861ee1d4a240c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=7bc07a4a2aec62af7fe587ed7a8bf7292e6cebb6b56ae8d0974b7184c6c266e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=842363fcca4dc0abfd23163d6d92d0689dbb87a46d4ab50c3a480820060392c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=f2419b31eda29c2e25f8f17396017c773f73c88915b0d7fb93b0ed9dc208ce0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=b0ff7b15371cfe6504c7f15684fd6f0c64661842edbe593c94a151762f67c279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=6a76242dadd39047eaf6270c4ec72146760a561f040ddd08fdee007436812156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=c1484a5850a2df95f0aba7ed2d070067d79fb98cc43466da99765a7dd29e6c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=ecd70f63bb7a17e959dd6f1df06cdaf231576271d3c30b0b4616186004aabc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=791157cda10ad50eb7ffee6a8bc7ac9f264fcf2fde9353a4e437608f0959451a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOH626%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsNobVUsQm5WM1EpVe7HtCbfENIPSi19s7u1wc8C93uwIgUXlJzOzzJy4KIDxp3wa2SBXZ5P%2BPBwsJ5XBpsQiAq0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKe%2B9o8eScvRZkv5fyrcAzFC052M5%2F3lCVQFH1UgvuifqfScB0NTq8DmBCLwWP48CCmcE9NLzYyD2ESVv7sqVFvw2HRvCgnzplyPMd0etSe96tv1PPG%2BM5EKEGMthsiaXCLTnsp2iZl4cF1c9sVkIvspF%2FPHf2Uhq%2Bh5rjEaUM2GVvzETwbSeG5Azm2D89O0vVYS2YOEgxyqUS%2BTKHnxMo1VHRn3TWDXdcASflmb5Rp3y7XKpr%2BGxgIu5Lj2UA7n7HAUnp2l0abGFwIydwUYlaHDt9IuKrL91J8NxElSPDa9o62t8gK7XxWVOF7R2W%2FKucKh7JpdlOPqO2o5Z4Qjw4kOej1pNMAFVBaH%2FJY96WOUR3C6W2QAsh1zuAltV1iIK7zJY0y5isLRxRgUodynTj3FjeRyKhu8srtevbxeQ80sKxN4UkupIZWi8MwTWaZKazO4dHoOnD%2BtEzAJ3Ho0ZClcRp%2FDNtmSeXpXuHAQhAh0S%2BcS7vkq9gyVVZBcYUFIDoGfV4p5cTR88tYvC6Wgi6MJ%2BII1Tcct0XHSwqfmYNsY6gky6E6d70i1bICF%2BP9ARjlNc0l0da7CcxTJi5i6kF8X%2BcAwdGxT0vezNjUZTLOEoHVC3DIIzJuWHyl71UPFV634%2FTd8j4ZNR%2FYgMPaTgsUGOqUBIKskcBqD3Bk78%2FRtzYP%2FLzqT8w4RAaOkT%2BgnkBAJpBcgbkbjY4IQZPcZ%2FBuCIWHo9ERRgCH8gGIbLAWsxOVmsU5zj0UzmwUhTI3I81MuUhl5wRQRPdpTMXRz95hmChYx74sxyo6%2FPSGoUs6IZYsun1IPjeCCRfAVGuwsgvk5RVVjUJIGP8LXfr9fgazxLd%2FEXrIJuyH3Ujv5fiX3hNIFLmz5EA4Q&X-Amz-Signature=fb981d7bc82d36808a7f65f97b91134a7f0e7eab1c63bdf19defddc3907a3f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
