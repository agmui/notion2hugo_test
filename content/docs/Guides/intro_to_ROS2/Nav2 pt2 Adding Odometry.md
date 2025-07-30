---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=babb501d6411aa55e511ad7071e792c2dcf7d006bd6c94537ef509ae4c0e260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=a742561291ea897bc8e3badfba8896545d0d2f75e54393bc3f6d561c3a3f18ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=f74ad24ba9023827dacf5148e99c21c1a5a2491e9fa296342423453836bcfd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=6f8281caea81682717b0126012e5466e22b7e821725d6f55ce892f68fe12edbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=fbbb594fdf14a892c0362a80fcaa71e902d95aa5892693a39d29d3954b19bf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=a51724eb192ddd34f1dabd9e6f51096c9908941d85020c8b7bb97885acdfd568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=d305f914cc4873306dd4d68ce9b8759069a77454f6acb0850b163722762635bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=fd1b2ffb3c3ab63cfedaaaddffb7c7e45677af2676cb98accbb22b78e9192316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=cd93816051e126b0044ff857d6f9120660c660d9b8aaf3c6d82e61b720c33044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMMCMI6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCzcIGedjxhDNa9aqzzgW%2Fi8GvcSWJ6rGqExCNYyZ4MAiEAjeu4PKNk9WyEH%2Bh5t3JxnjRtONwgXl9xnWC7DRh0dzMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq2lo1Y4BoywzLQjircA8ENLPa2vkTFLv5Rqa10ARxE679%2B2714CupE1ydtB3sQb%2B5rZCPH0WDOERPUtVyRiaKPnutJCCUlrWqif154RX1a6ttohff0OQYQXdbvn7r%2BdP5CJqt1bY%2FwWt%2FhZq5y6VGpMoCiMO7V3%2Fj%2FCZ4gVk7zOT95UQQYBATz0YzIQoZekGdZxHH931pzPzwvGLTQ9tAkE7YxRuE4dH37WU9bZRilLfqtekNQh%2BNoLeFVXHP%2FhQmzum10Nr6mmdVS%2F1Sx4OpahshnSMSdKMmXRNLCOcuqOmhhLf7he6VrWjJN0LMTe22%2FYcHEROIa%2BgfA1%2B69XvZnYCI%2BYAaTa03K7GZq3UE%2BR7WSzUO0Juyhhw8TvBaSLhg92gYq%2BLbLwRY7dfmEPqEyO3Phi5rB%2BWjhO1QHqpf9tz3VqAMugWGWT1xaWpKwbaRYZ5e8%2BJadTWl%2Bq4dt9%2Fp4DogoUgoGIhuC7k4sIYUgxexWESXQNhJ%2BLKIxiT%2FfN0Q7nqbpxyVcsl7QtG0%2FhwaOuJqtxPNWgOxTmAGhIh3YL2Ln3YyIGjy8OmMZ0EUNn0jUAMOEJ6zraAewx8%2FIq9j79hFBMbrdl8fBCLKWTUXODzrXd15HyVizE%2BLnMyaBYc8vsKXgDiBSUlKcMJOgqsQGOqUB%2B8S3F5PK3HP0JmnF2AC3BRWb2cw1ysqEOTc4xnMwcZyt06NXNTagn%2FWwcXDb1u9L1d7s8TKILZdu3hcybx7RbQik99UZE2gAmEnxhCGg3ePvZ7iA%2FZcvJZgszyVm2BS6vMTjFc3wWSa7lD5gUBS1nkFjcSK0HP1a7rSpV0aGvNAgzCPuJc%2Fjcro9yJQb%2FCOCM4DUJ7e0RZHr9FBaZNV5XVD55e%2BI&X-Amz-Signature=4a739a17fdec898c58a4247a4d9130c8769399225d44b76d566ec25f2ba79c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTQQMM3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDikA2ZqlT5Bj8gUqhM9a1OcsBjWGEyknvXzBwwf5IAIgGOUgkoNiWzJ1nlGqNbov58hB1QRrr6WoUjAxr%2FxlCQoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYDYREvMchjiSuiSCrcA%2BMvC7jwQq0PDIBYGvNUA0sCva8zVjDRhFrZcUkGSqJClCEHa87yp65yct%2FQMpeQ7o6rsYv%2BAEEFWnB7Ki%2BA1tcZilfUWpZbmFDQUgWn7LECOCW5Ty%2Fv4t4xjdJh03CRh5SXZlgRxGdRTpiLnOeFptJhciIP6Ce1qnj0%2B3XQUS7WsKXWfHYZ17OmbV9cA%2FfAinLq9vkW8F8b5a%2BAcrfC4%2BFXipfQ2x9YYM5bzTcwKzUjp7FQQP%2Fc%2BMwupRAGxWN4Vv%2Bob41weR%2F4C%2Fd55NtE5A5xtIc9xXZlPK7BWzjsk%2BWFDK4GLNjTeHOrDpr9lGCxVzwT2C6kA72EDr7CO9GQ86ftmiPXdQ3ijzE5%2BmjnYKlCmQKL3KHlCvgoIMvaH4DlxZgIS4X6UwykoKkwMVAqOyxnjDvz%2FUVOjAiZSk1a7K7g44oRrL2gSbFAX1tY9Mgxc%2B%2FYNUZ5x%2F92SNClmaYNM1dqhDqyAtme8kXGWV92xh6Ul3UgMBRyI6VhwrGxgbFGh4cF7%2F985kAhaeVN4XoavBcAKSFxE5QsPNyFAf8MZanO2H6R0enW3KHkbwdsPTiln4G17z0n%2FtdQou5jM6HQAsSLjL23xxcb6Who8UOVbonrJwJ9lYB8buENstaCMJ%2BlqsQGOqUB3uvsiAftkRwIydnXVUn%2BeQtCSUdeHT6Gy4k1yXi3QiSgApscYccVB2ulHaM7qvu20ekD9ZMqdMWNVR97nKwJVadiz6WzGEzgmaQ%2Fr0su1Y5oCm2JTUY%2FdMdL0wsueYtHCQ6debpj0uLBHsLT3XHAHMdUOzZ0eBZiUe%2Bkp9cEgjREFS9UIu6reeBt7zgK%2B8iQnMvV79F8Ya2YhVnK0BrAiWFOkovC&X-Amz-Signature=a7572b5036b670aee68bab32bd8ad236a0f813773dfbd1553fb68c86531e5f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=aabe9f4ec127c64168f676029737788076b99c2dfecea23706994d538ebf4690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=1348240d6ca5c2fcc627ec6a336f51fbb03835b7e9eb243507cca49fca105203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=c2aad4c0a3af444107338732995d358b5621fe9786cf3742ff81c95b685419ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=97a93d7cb5b797829fac1b0d2ac748eb1abc4260f27d1a4cc8795034b78d996b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=98d10b4652b712da05015b6514311234a46816653767032d6d5ae0eb56bf1acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=3594a18bd817a88043a1016b9579eaab99d9d96af66e4e7008c1b19353bb6e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=d360b6e04354ac250c8eade1637f5fdcca6c2ec20e75fefd9edfdcf3441320b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFUV6EGQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOa3UkEma2F%2By6exXac9Ir5IfKi4un6ux19d8sraA12AiB%2FoGt5Bl3xr9tczahG0brAh4aOGXKFovqgBSELMaLXfyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoGSgvYB8g1imkdYKtwDn%2FIYSuA6%2BqOOE7qUCqNDMwEDerrY4ZeHj43k1f4%2FKtp62uTt8Tigxerf3K7u4kL%2FJnTTslIMPjDAWM8%2Fo9XGTfzm1mcbGX%2BeuR3B0iLNATVlBntA4p2fa3RB656SARJ9JHeGhejqpXhYeQvl%2Falgn9pydLqKezB3RNGNFaWyoecrl5KPJRVcLF8A%2FBQy8pecUSVmnYzhvgpy80kMJCtx3InwExmmIK1r9tp4N0ufcg59VfrFF9uPveRuFft3r4yGld2VWf94AbKHZDn%2FGJrBcagC4EH3YLpgCzvgfwUPWgjyo1qKEW44bnfTiAb4A7xHnLgx9%2Ft%2BHJ0rR2TKU8zKnmA6qlY0PMwxdbJkZzRgBaqIU%2FzsQmTE2nroti4HjIb0073JGsZjiKqtyzEeAUyX1jdeyqpHem%2Fm%2FExq0CSKxu4319NqGD8sc%2BfkoOsnsQ17pAw4uYBA%2BXM5FVNA4T4SSzZHyrlJAY30hz74wC%2FrTUzzA0%2FDY2sn0mo%2FSV1QvwmGUrRH%2BHnGF%2B6eXHcWojG9SUIuo%2FHKgaMmzL1M2Mq16XTrSPFL%2FlatsD49CchMbpKB0o91GYtTolVZKrKf2mg%2BHF7wYGRpK8C6sm9W3Nz3KLCkYkKJtZJW6%2BLdSlswqaCqxAY6pgE7pMaHQmqTu%2Bwa7qH9EOoKerXDAN%2B9MKN5JkP4PO0Lah83TqFuD0qCW2c6aSHWICrZ8rLB2KXAxhwi9cy4Z%2F9jVZg1oqqAX9%2BzqdZc%2FOpF1TE%2FW%2FvCI0hkTcEuk%2FmXHKWNhKEOVK%2FrtFFoNdyZmfQjfryjEPtMDb94t4RvoSJ0yomkr2Brqh%2BWaMvdVpKushlUfrJ02OCUc3RLyXKQptrwFLv2ROHn&X-Amz-Signature=a12b26c5ba291f09919b8e4b6447763f64d7e2ad3baaf95def1762a37aeda385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
