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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=1e1b86d89eff6378304111bf10fcc0155ff16805cca0e96e08f82e3d2ae4b754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=17c13c2dd27acc3ead7ac9629807c009c92c9e19b026f6efb8831d911faff321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=ce55e1b4c013532bcc46f2dda6954b9d492a46bf8e060d257f3ce849a5a175f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=0cafe1a7026a94d87dda0ea18239a6933f2652df2a94293ca93e56a98ff4f506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=a75014682439f042f96cffeba839ff65fcac0c5af52ebdfc51546cc1104ee244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=d5a6fb814aa53b310b8df4a816a0a6e2aa368cfe6716a89d91552e3c5d3d80a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=76e329c6189fe87c7c3d291c7f9fd83d891551a307afccdb1b05f74435b15c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=b9e17753e961d7e0e51928aeb31653b33327a82a5979c8a213b9add3628b5eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=cfe932d04e324c5e105382fc381631544e3ea6b4ac435a40d587b4bf700cfb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHEI7IS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEofqU05oBfGeIMyReUQxgq70QiCl1u8vnd%2Fk5gIFrAAIhAON8236n6c9oYFObxUKCBLEbZuVAUzDRgVWu1N4F39iTKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJNnghw6X0rQ0yWkcq3AOQVHnsBxE1Q6oL6X0W5WQos1AwVw8x9E2u%2Bnv8UL%2BvWka%2BdPOtzSC%2BCHIefP1%2BEn%2BwqbihUDzx4FOzyJB9EPpTVpodLQjPnRlmW9dIl9mwhiA2LXyNJ5LmSdHg9t1RHnemOoZU%2BQR5kh9etZV4IeJ7GyOkSs6wPERRHdYUNwPt61YL5Op3bDugcS%2BdpZFHSo%2FKjRCdIKc4f7A1llKsMEuiw2Ejx47ulcGwilvC5R1QGRJjoRKX8dM78DO9kaidC%2FrQ6pPkQxaKPACDj0OKrncPBSueVfmWkK7P6qYW8OQenoU85o3SYJMW4II1omMAHiPRt9xAooD%2Fw9bL2AFJ%2FULFeLnIhVVOkvswRb2LVUbhe1K8spL0MqajS6BESbpKeEi0BrVdxeqpkuSqLxd34zrOYaNFRrKXvZZ3PwWdrWj1%2Bz8jfpbVdf9gM6iMo7aMNKJ0SjdUN1t8rXaIvixDaSL4iEIw6K1Fo8qr%2BaeqfrOvwi%2B2hohU0%2B6Lzc5zx6NNGxkPITrAiMEEePI8itvY7bOGa0SmlUOFfRKHhNGm%2Fyahe1FMsbR%2BHAZEbysJU41D7%2FIRe5rrWTBx9FCnwIRO63qXWE6A2%2BBMHOrAB8apYE5EOTtGOClRFZQaMAwQ9TDV0JPRBjqkAaghorHkj919VO4WvyhbgcyPkHgSOLxMe7g6cMUbgUWx87qmdk6ni%2BFbxzBxdwnn3qLnPKQYUXwmKIAKrsqFbk0hG1nCVw326bwZIQsrxA86zpomjGU5eQMoyrCIGWiyaQ9um3OL7ejTD5c%2B3U6oR97HVkkNJkEh8nGxYtDurNg1CMTNoGotBdT1th3Ue8Y42y%2FvRed6W2bWH3OeERuVsboXRGqa&X-Amz-Signature=bbdd61d6d3aa3644d43a723450774b9961adf9e6ae9eabfd77b57bd4d1ec0841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RDIZPHQ%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx7JV9K0i7BaD9zcmEynYjvYEDqqhPHhQ3UChKdP1DRgIgEjzLos581klMYSGqmLnDdhGSsgwD8JNNr8xHMQcXsiIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7%2BkILlzk%2B0U42NeyrcA4op%2BspAoaU4ZW33jMHx61b9sL5Lk4Bwd65VVH2Pc4d%2F8ufwwLAVjsBI3gauqbCz0wau12ue7LIQ48CXWFRG2V%2FLjI0P56GU%2FXvrJyiEd4G%2FPWRC3IYs1qiBxOmTYj3ljsM3vYW2293gXSSRKC3I25aGJsCwydYRdcZxzY6Xe4CCQlXT%2FRPUBf59JOrJ00SATiaFK5NlahlMRrj21SWYC8gJo3pRLDEJbcn1l%2F5LVmTj5LkfYRKr7dnszNuMWGmvRv1JnBTKsdZ%2FH%2BZrk%2FFCguRND6u07eKmiLKCV0D%2Bo9LEgHWrXMCFRFvyqywjzTSQp9HkA0xjbVH64CZ8WPx8rsidXkXb4D8wZfrdqsbbFZOj0b8ZIE3buybB8%2FEUX10ke6JZ02yCTQrjkL%2FSR6Bv1%2FAitN0eoAlZ%2BDMGwf6c%2F6OZuj2wUPt2DVR376ZpsprQ0eWMVlPPOfOn6VttJJDNWVKQioWzC%2B%2B8g96M2iqVrfA%2BIqQ6YsvZZ1bRNW08I6affUapr4ekmyUaEc2zTrxYzVl7w5l%2FyxEupsINCcmocCOMLBsSVMt010qEdukX95Lr7wATytS8qqiQX%2BY45k0P%2Fnh%2FGmw5Bnh5R5n4cAsqufkwkmFo9kDPOahf%2BRczMM%2FSk9EGOqUBznJkWRP%2FHxSEoc%2BWINM9wcsOHy%2B3hn1TMYLn7YiLDYyIg8JGnnbwX6l%2Ba82beG3TyEwFQW9wQ6jHOVQ23kjkc%2F65C1UvoHPlUjIe81VXo%2FZExRYNQOxhcmBAm1VHqgpZ8Q3zoz%2Bdua4n0au096%2FDdBlyvRO2rFQPcj6SX7eNzGAeLqsg9iza4mAfSDTMw8aSNi6Oj3dh10QaMvWexp6B8GKICA2M&X-Amz-Signature=2a8661ff10d13409da15a0b33750ed7394e73b20a9af2e5a0b5d4729d9e3874f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=a2abbea98adb638693bcdaf40033d577d08b6d56cc7588be5f4550b1f84564b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=3cec90e124ff9fd978c42b982cfdc413ead52cfeecc2ef0963bc930874bb8a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=1c900a2f2fb6dfc9872ac15d802307c8d5c5070dd205a84b579f72f2b3499e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=254a1dc7b9149975375312feb78a49fa11d18d0ee0fd9ef94d463f6ec9ca0f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=140b119bebc3fb070ea9bc68fde99e117cf47abf24d704255a4c61041db6e09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=d7c86b31d1ad65f38e729bcbfa32f7b7bad47d1fd0679aae1fd381a82e244ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=99a42d2f92d5236c2effcce187858cc8ccd9193f48f9d891f22cd0d2c601177d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=5c516ba24e200566733144800d2287bfa22d4fac4c70d19d9610e2da06f8cb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP3WCIV6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyPJ0Wx0Ss5pVhF9O5iwJ4Ph0JHtbhSEyDlzPJyrDiwIgdHWwV46B99%2Bcbj13QBWIB7Qd5rjmxeoM%2B0Adak6hftUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDkqPFddgD96VsEKircA3UQM4RLpwVzR5wuzURAANr%2FzbmlRn6RM9%2F92uYsvI%2Bb7EEhVJpvK%2BfeRA6uUlGASe0EevsgscEDm7MfFWEwJgyk76%2BdhE1RVt19FaT4Wjr%2F4AqRq0IFj2rmx60AkPQmt9Qehk4kuTvb6ETpdVzOTiLafWWnH2FbYA0oeQwDzPT1eu6tDfng%2FkSeqdttu1GKYQZ9KIN4GL%2FXoSYeyuHLfWsIJkbyUTznAemxm3CqU4GuII72ojM%2FjJ63Ia2bLkUjFeoiWzL%2F%2BJoW7wVrMrRmO9YX%2FyoIOzDzgvJnK2OAiBMD50QPBqJTP9ag4mW8%2BjpMIWJgURd9QkJeNFsr5DHjLmEzA9%2FaCFwYV8RzPUh6GJSGh6nlzCvbhTs5jh1lTCvmb5jwpuvFgo32TKZHxRP7quJg%2BBQOJ2Efhwhikv81had0XOCAyuj4k9ititguwYUmY3fgroLblA1D%2BcLcIU5l3cPvfLuiGhSCuDdeU3Gwc2BR1nM9FiMVWMdpCdvWWfZJzVkfhuNN7OIemE2k8F2SieOmIwh9y9bDnW65I6SwkxgWpIaxers8dRG8YOlbqlMs9oPSopoUKHP4YeINZ%2Fl73SHDYgmqv4z%2FtipsS5lLtd1jJWcK8uMjRzaVOJJ6MOzQk9EGOqUBvunA7POjp%2B1kwxsfaNDjURcIibkuTbAcDWVRIkrUj%2Fy2y1wZ0WNkSR0JcfS8sI0UBM0Qg2nHL0%2Ba7cinIdU9w7bQ69TTn2iZ%2F%2BJOIaR%2BRuFNO4rmwq%2Bj4oO7UMU3Q%2FwowMNwqR0tlIy4vT8e%2BoP3u5OSKpPrLQBHzC%2FuXNgVmaVPn5utOD5147z1X9nZ9F%2FW6QmwI1uqn1Qz7LyGolM67rIEZTw6&X-Amz-Signature=f2a2588bcb09b9351e368d1c4c8f55553d0f14063b845c18fffd944d434fbed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
