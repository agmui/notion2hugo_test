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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=fc6da308d344457e3f72c48682e61f0f78b3ef02dc1282ba234b321d5456e19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=3cacaddd77ebe92e15c2d8bab3da851072ffda2bb61099e0206b42e02066f5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=7f5baab2a9b5460401d181795a4a67d92c6dd66a08f3eaec535f7bf72dbffe2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=952c20b561279851041d699385e5062ef44e428908badf6404fe6b5f5dc1e29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=7ee18758dce464e3a3cd6de2a25e95fff321d1d9ce6e03c420e3583b17ee1614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=9f902ce9a64ef5c3c8bb6b10fe7fd9221b051a058198ebf85aedbebe33869057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=4a9cd6b46b9ca5d75e46bb12abd96fe6cc332f6b1ae562cc3d34298698b6eac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=ab2e5e1e943db2e4c04d95d90df75042ab7814339e7d1a084469d81654267d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=832cd9d2a8dd51d2fc4a29d93800f6fc5ff1661d389ef155a8c65b1faa02110a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6J336M3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGOsD37alRNGVV7kIc79qDCOJeiazYIUR6X0GgPVR4e6AiEAztTglq0PjsdM%2BKnKvG99Zd8EbOMGo26TDTxpus8CskwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cMjwKx%2FsoXUFMPSrcA7BggZfoP4Up1CQlEZzpQYIbxOMC5x5v7Ykz2CL3vCZMblxH6hOObFxhdXg9pASdq2jpk2QtNv4iceUlYZj4vDtJkZzLIJa8eITHKjwcEeQ23sS29VogEBmKanDogPj0OvNQkvyCYJ07E1EWOZtNIkO9B3QphI3ETM6CRrYcafHp9HqxR2hES5%2F%2FP7yQqN0%2FjA%2B0zYnX8O%2BAvvZd6jg8i%2FW0JUQwCG%2BqtYDWC86%2BRZRGcGM2jirGqjVbJLlynu%2FbXC2Yu2P2VKOnpFtZkpHt%2BSRw5l9wSi89m%2FKgGndK0oP1TvL7mE7D4LHb2yQmzABxDots0m74Vj6V4WzJXihvWQyxHq5rDeMDeZFGrjU%2FPZZM7l6BFTEbRgUrlouTaeFo7PFsGwE6g9Ft1Rz1SDcWHA7Quh7g4lqkepJPffAJNEP15ePbOGjP9vlu2tSVyjov9p0NbamO8ZgGPWYdnWV9ctI8fe%2BbxDIDoo0%2F%2B3eZuCKo0SIyY71akzC6BEiG9Y%2FJjpF6LIhaWhtxxV%2B6qM%2BG2bIU3XYjzqWiqJrq%2FQ0%2FS2AQkH4senFYgg2SoavxawzaKysHTcn6TOa2eJRzeBLZbGAS3XGxslKelgNuo4ODpq989s8Km%2BEciiizpOapMJ6U18oGOqUBYmB6qvoWcQzJT2%2FK0jLSwG77hn4kKB9m9ltmkkUpc1w%2Fl8BX7sT3lKmWaksSb81qK3EFl2ajp64symCn7UtasoPeNI3DFZadn7VZVbRpuJ2opWZHmb2S4ySvH%2BtE78AJ%2FHwAtrl8Q%2Flz%2BtEHPiAvXicSqEhsTd6zYUHj5uXHkKgiDMjVsev4%2FgPXejxiz9tthNw75bdT1SJJgKDZr1apEI%2BrVDMZ&X-Amz-Signature=91e4eaa4744398c0f9c6a892396c5d611d54bb52cf6124161473b4a3bd34f53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAA2CA6%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCGVx42VwSgaX0Qe%2BkNi50SKimL9Us3AIHondTn7ZWcwwIgZ5K%2FsfwX8k5X117BIgII6CRcQOv1H7Tofg9p4rsMoUsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYMyJVXGWLBQmgEOircA%2F0STa%2FaFXCKsdcM5bfnIVwvrI14Nd2qExW8XeXBAKhghWJ1kl0g2hAd9G6oqcto1qQO%2F0b5DLqbgvYT1Dcbi4%2Bg6hpvpLk8pcqb6t3e6hph5pxSqVdAMwN%2BbLBgldqSAdxiAgXHave%2B391stA6qHYQcTV3bf1x5idLjTk64WClJaztsN3mlmMfQ0gu4Z%2BP0jge7%2B3WsJlsHvT2HL5bLULjtQeRFF28jyD6L9wBYSMuoqMtNudl5%2Bhawin7oXBaOWmmg%2FbTPO1utgX7eM5N9JXFKidoZJL1%2BhMMNJgMKdiwhVMszPFjVBFrWqbW915y%2BYSbStV3YeGTG5ry4uSpu73SINMVHfPbeGQJYlgj33i5Hgh2w6JPBbXOPUg9My2XshsfzL9IFZ2bGZU6SxWjMai1OtHao9JhVhOJ4SNgyg3R6RFRtoSHeVkpdY7wKO%2F6jG0gM8n4P0%2Bck0bUW2mWhsEk7OOnkkPuD2wfHIg%2B9F6e31JeFNNxcK5jgNCYJ2Nm9h6BcVW3QJ9XV089XL06Tb8%2F3Rp%2Bh%2B3UdcBRVynpKoaE28wWX8WCuFFyjPGmyRE2%2BTbHsHAdW3U4iQ%2F3aTjKKyZtAjxSV1Kao523Egctt4HJXUMaVcI1KbX3jGqYjMIec18oGOqUBGaRVGiPBhN%2BWNofTixH1ys%2FGWoqd8q7OWIPwDZ3yO6pwXeR6fTeH8DcgDbKdM%2BK1gz7b0Qv1J2%2BFDWWAlegHTzJNI74e0LG0ZlLTU%2BEY3Zc2uBoVB02P0HfkJvgdsauU6ZARWJMmSyv9guRv40EsH1ZiAJxLXpnzd971J9huoFDYyN6KOVnMmp4WHNWpNopkgwcCooHgmN9ciOGkLXeuMU5LN8uC&X-Amz-Signature=749478ba6e61fadaed801a41cf878b15725f7e3d5319a682cd83c7f8e8fe46ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=911548a88944dd30630a572c4f85ed9dc49f9919b859b460825a33f07a271490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=dc35efc81d03688bd1819767310d6f261be4e8d29d728d3c260bd47210a74201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=ba813e9a459427026f30b88171ef5cf8c543048699cd087417e06506f98aa648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=2a12e2ab86a9fbc5ff7352957f384efab3b05f6c6d89e738f5c8dcaa6c20cb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=c53798911191a0a27366cad45b74d5ee3345a5ebe8940fef3404d9362835cead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=65c3b644d9fdcbd221fcfc46e3703dbc21fe3ee3f4fa2e96792629740d2c577f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=1037bd105966e80169d9c59623416297ff0f2b4b18f65c0e03020d95058cb0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=2386e218e5365de3c6d21255b88faaf8feeebbf27f93391354e619aa0065921c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M6YT6M%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCUeJbDUfQ5xJLSS%2BCMZjAx2tAggRIA08SIu6%2B14Ff7AAIgek1frYUBZaO%2BaPi1rKbHPszVuHym8yK3Xb1r1tbZedsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNX35sJmGez7LCJp2ircA8b2VtxjgyJmKJBv8V9S5HFAbEqWQWs%2FiqTnEnlmi6chS5DkQn8Ibjplxvo3He7O2spNNChbQyui%2F%2FBQvywoS8cquJgF54CZ8GjcWqHeuvPwaV2WpPoFQuRfgeWlp2oMkYWOILu1AgPKACYQNvEmLwZaGqsoMNBareCV06zu4VgabLVmPa7BGXW0bmGZhkb%2BTQJVOjgQMlxzI%2F2RS0z9QMK6NiN%2F8tWI45%2FlqI3ZQvefE%2FCYBkVBUqS%2FRJuxVsFGgiUSqMnYlhLWFQXlpCIbmi7n4AZnTkHeLSJP6EQ2WqoOGGdw2knP0hTsU5PvK2vwy96WE7JUH2UOAP7T5gUQLM5Rayf9MlxjtXnRz6CB24DXFPgt1EttPRsd7xWculiXiH39vWC88BTBHzHjxlPiZfHYY%2Frz0Mx2QYmfvrGEqxveOgm0EIJTVr8CeV76EEZrmAEii5p4p9UWHxgnoKRBtuONQVK6mugusNd28hSzHhAj6g0qWsJCAMCLwSaShVeWJxDEhabviNOfvSm5OnRpx23dP1IH01VFF9RIb6WSxb3wov65k3W27Q54yJebPXkQDmDsa7oNJZKqNDrlLo9uE1uxPaJOJXmnI9n3gOJ%2B5SxqEtey7XSvIFbqAO4mMLWc18oGOqUBZ962%2Baj4lIMYu6RvMO1Du0a8qZND5DVvy1GRFM9nOFJ42FsDpZX%2FY18pmwkVHvGxTOZM06Zr5yf%2B56vr5192uYi6vIv0rGBjo1%2FQ828jt7FrlrOoLJRc6hWwR8UW4euHOAFghlNzZ%2FlkPJ1G%2F4H%2FIBroML74cNCJbZE5WsM1VSSh%2FHHp1tIwCy4fNgszLxT9s3UkMOtLoT3X68LM1YSTWsPSYuV1&X-Amz-Signature=c4e1b20df7019b3d61d58b0097bf75b040783a950b174bf9cf1fe8efe5946481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
