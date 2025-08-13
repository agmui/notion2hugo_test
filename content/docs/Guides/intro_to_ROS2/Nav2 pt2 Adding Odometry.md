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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=de2d4caae63f8e93d497a1058c6a25f5f7cf9e09211d3673ea41c35e863ff671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=51c41bb3ac818d8993bb3e93e8430f1637ed7ea36e253edc01c8e9dfaac6db95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=d556224e287440d0874211cf6aa98b19c67c621486b7b367c3c456021cd46779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=4107737ec43d6bcad7f9455f7fd6baaf355f4f1af1029aa4e486e1c028a5af33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=afb8ae656f2f2100117c2c46f9155a0f99938d99276f9df86bb6a86f1430a113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=fded987ccde64b1938e9ba41a4a752891bff30d23a09bbdb2d7ac3b24da47026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=a6d7519dd24aa0516e62d95f8753b89c544487adb6103c546cd9a41ba2dc743d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=3694a3803be80636ab694c8ce762f149465cb24d332b3dfa2331ee5ac1076383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=5d735ec797fdbdc90fc182d0b425cc207cb337ec2ac93bcccf5c312423c16c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MT27N2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxQUHF3E7itTauKBexklocjCZBm4%2B5DjwCkGPn%2BJ5OPAIgXxPmz8CFNLUWvNAvUtkY3fhVSr5Tp2p0EmoBNBAD%2BJkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDMCH4SM4EKPsZQlDCrcA5HHYwIAbT9RdQ5LjTcdf2g%2FomrtMVtAEjQzeSh0r%2B%2B1LYvjcQ%2FQJGipi3jtlNFH7RCkdeOh1zz2p8IuNIUvxjB2fP6x%2FxoCQayYKZ6AKIqR3ioVvESWPp9n8%2FWggJlQ3UuY%2Fx6cmQDjEpdDWZsflWQ%2FVbLi%2BM3gjQ5P2Oz%2B%2BKvL4SA93dVIxBk9SEM5LzRHvrNyuYvZoZ49dm7NCSU6SCU8zBLRgMO54yf9%2BtAQx%2BFKaORU9yswxP4k9ebVw2W83fSllQaX10ygnTBOqNhS4esa02f0lgYC5InFDyhJOqcF%2F3LMC%2Fz4NxlVH4s3chtu2kOu0UfB3Gj%2Bxupl%2FsRN%2BmHWhjY5LeUhHIxbb6RHgg%2FDMX4BQlRmqdfICdwmtwcXSglj%2B1BSBMCQrrS5IXP%2F6XL7TUmXb7pRENrf9CULIw5RHnrWa8pTYhJK8SdKI6e4njD7FSBzQx0OzOXllMJ%2BjzIvc7Tf2u2wg6JIjFTncocHAEHj9ogpKiQ7krZ70Vk1Tg1XE3Wl9EJ51IN8rBAxPQ2W0SuIPZFjIj3%2B7ahglG6fH06SFP8ez9VJp8FbKIg5vEcz4ML%2B9dQS1NHbNxroXfFj52Up4ysuRsFjzev69XSiEIiPY8AjDc%2FyBRi0MN%2Be8cQGOqUB0z72nQ6lzHgdhR2UN8j7Ps%2FnscW%2BNmaNsPOl0jVoaOXsSypGwJX5tNJkaR9vRKZXS2NoZfFhbL23c8%2BBOOZ85MXDVHGv8CHFuQBMgB4d2GrHYCCA2iyN%2FF%2FFO2Cp1Jan3Bl1ZeJTMezzEIJoYKYlAalWEwzvU6br2LkCIw9Dv0qn0llzqQefDPhEcjtyy0hs%2FRW0gsK42jbEmS%2B%2FyZAgIO2z3euX&X-Amz-Signature=cb577a532ea4ac6cfbefb95b31726d58cbb012c2c3e01e8238ee16fea69e6c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5PE2FV3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrGkkjeRufwy25JKPpUAVNoBfSuhUrDMxSUrdROGoLSAiEA5vZMnu979KckRSRViMvwn3Qe%2BXdIyr41pJOXcw2h4YUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF%2F6wR2F2nKX4X0aYyrcA%2BevIOuyfozELUn6lNL06ubOCpCvbZfMidyRgumYj5P6Dm7NNMz7ihEz1fN3e3O9v754dhWy0GJucAdACQEuvIklDjRfrk3%2FETRBA8o5KtBOi3NhxPjfcg%2FccvSq1jaDKWRnfiwBWu%2FlYsSpJyTfJ4peVkAxOoPRvnGBaLAVM7kt0YvzaDs%2BTCorV%2FjxvaGp%2Fe4HNpeiy5nX5UENVVMtKyJUCiZjV4j05pnt0aGq%2BtclRcWbAivWdDPoauHLUf0kqp7uAJak8knxJtjDMWo11sinhaM%2Fx7KzEaO2aM%2BlRpZ0LhElgfjDLH1Xlvves2vYDm46He%2BqzbtAJkZf9ZThAqoIVuG%2FO3dmjTgAf0wbaHclGgTPXWH5u72YsWsvT5Gomba1fRQIP%2FOSPhZnfMn%2Fb0E2K0RTnfl%2BDAzniZifqA668p1n4GTr0AHDqplin3tx%2Ff%2FDMfPkVqz8vt67fnk7msApcDhvmKvT%2B5GK%2FBbQFKsd2IxZI%2BUE%2FrEuT1gTao6EecOxStWBcRUa8T724JMXf6E5z%2BuIiEZV1ynUdqbwcNrB2OFJiYnCjn8HX%2BPzRPIPCSGT4pF2JKgOgoQdRp9QxyCZbhkVlpDvD4Flq3uhX5qs38N7ipiHAuiJX7ODML2e8cQGOqUBtkxlcWZ0ygIBBh85IDfwvvfjintZn9XoZE8QY8uAzFHu24t5o4fqSkpbEJMdEKqai10VNPfaBww22pjKcjZ2QHTiOL1hkgNe3FKN5W56wQA6NbntWEny8yLFKbPm8KqC57HiERJv2PbQp6ToYOJHcpLE1wv%2Bc8%2BytQbbLnN0a2hejuWEgtU5tNpiD00PtplpfqbhILXdVIn191kPC%2BbhhdzOXqIq&X-Amz-Signature=a68c7c3466b0f75b9ff14b7ff66b89cda35707f82c92d6a3da7f8b77c901e9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=9f092a9c730a15273f7ead11cfd51d3467893a694ae33b7c3c40ccc1e3c2cac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=c4ba656c981c7eb31990ea6f88511633438ade77865219a7ef803caaeb6b109b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=1fbdf71d35ad6746d68992945167029ebb60f4fb8a97e310fb13af8a25cfe227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=fe8b616a4bae037aac6ef9e1de63aced5c408f16858960d6795cf30dd7b43cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=7a6098cb8e29560cfb1a34aae7082bbc3c84ac4bb178cea28fdc08e9615e1e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=037cb94be3a5fb96f11807b6f57ed00bc573c10da40afff8172214359c5054c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=1e5292c493ac8b6d765b533c28246c2d90c352084792b1e40db82ff466e3cbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=607be13a3ff7b52e4221e24e5423cf4928d4a0f7ee7b3de0886be5daf33dfd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWUT5RL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ2Y2PPAg%2BUP9qqqmtjcL%2BmNvsVCTjRwq%2BIv5n4LaI0AiEAsCAtJzwU6FW%2BXx0SzSnZ1Er67f8iN4j66%2FEl55fwTfQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAAYTQt3OLgtKqphESrcA3A65S64IC6jrAUm6QiqpjbmNjZvRIXrTAJ39FJstCersHZFbmRs70OYKnNkZfNM3lCY2BMamNBN33fbZuvmsJ%2FGdw8sTPxOCDZmltbPZEbnM5i5OO%2BxsqIQihFjd90y1ChYR%2BvnIxSRFU4iz%2B5hWwW6cRTAHuPNrlfRdo0Ies3mppQeDqx055p5lgrDM3qmyKCYY%2FbotLDp7zdVj5sFDt8%2F7VPyA1HsBNLBTTBUlGC0%2FP19t0FLoxW4ZnO7tsHUo0xRKNotRR1DcR2wUZmh9AVBl%2FxB6%2FQSEZwiF52ZAxdoXN5ahTwOE9aYFeeyhPHba17%2FnG0INH4S2TWn9ksCS5rza41f%2Fw2UTmxSyr2SZwVXb6%2FwGhBW6ceacTJgnkEPEanR1yq8bF9TWOFotPPG6TNxZspeI1YO7b5k93LNP7YiahklejHWnk4gw6c8nQ%2F9sCw%2BHB1cjptbv1hVLOsf88jYIaWamHMOE6rw1oz31KlfOc0hl9FFJp9SVFRmz9F6uzqCZ8Sq8E1uQOqshTHEHPYf2EhRq%2BlDNFIu1q7cHKfiakoYjWRjuSkIJa%2F7r%2BBxKKjqCrSnHNMxU%2BgK04tmgrey1mUW62Pwsa%2FU%2FPR3RRDTPsZE3GEVkRPJDls3MNue8cQGOqUBoPSkk9D3qWKd6%2BHY7zLASSdTj8pF%2F6xWXTEYZQEp98vD5bN5oieIAJsLc3H4z9g0Cvwq%2FOGQbgj%2FI84CgGcTzsbo6ivhDEaepfid4TJ3i0GX0eEjrVjufVItust5RKQYrmOPHXKfIwIm5tWrqZAGNC5cdQXF5Z4JoaOWXdqTAXt1clmrg2LyK5d9MLoqEDWzomqXFaRxT9ZMfHoKwptPj7GNdFLn&X-Amz-Signature=95641a53598b11e2f45f6591833f274263ee9b18faa20bbbf3c4bf03353a51b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
