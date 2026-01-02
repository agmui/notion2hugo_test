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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=b69de7a5783e5b235ae776a384fa5a89ed4c2222d62d6bb502a43b4e5cbc3550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=52cef2a4fe247a3e0bb7d950198712230eb7d53ab586debabb891a37e6a86bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=38b82246693dfa38c2888d6f976fe3f2a6b19415cbe5caa9a327ec8528248c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=685a2cd03752f9cbfc81f1567736072647149ee09f60c417854928ecb2e21672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=6cd0d96c769fe2e54b06f708f4fa9d1078a115df5c9f38b452bac87a1c97ed7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=3c046f2f4490b2cafce9bbe0e72418e683e7ca0a79767b7986527a9f2647a4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=f863db8c419140af33c1a446cae46350401e479680a32a9823440de731cacd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=ef62013f4a87664da63b9261dbf636384d6a1174a170f354c369393613249f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=fbc2fee8adf5078c2784b5cb751ffcdb8242aed30360b1baadae528cf847be0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BPTF6V%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDKWkiUDbRGLTDaORl%2FHCM8z2B1W67E0mFrWs1sRUtwgIhAM7O%2FGg7x7p%2FVZukAarShRnaYH%2BRtOmly6zQ5z%2FhCgILKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUbUpkvjHI5NqWCfIq3AN4jf%2Fkz1avZ9gdyRAxNutlPFizdXoeVIv5xX2xVd01wVhf%2B3ABsrXhQUcqvWGVdfVegw6JMiEI0G0ZCklAwiLkjyLjTcDzNelciB0TMNTBTO4l35xEO7R8lEVa3%2FYE3yWcm8IdNw5%2FLjiWOjXX45ZMsNXL%2FVlUxzp%2FQCH%2FGfm9nH88zMJj3ZVjrVL15CzPnbwmTls9zCvkxjjsLftnDfgRBM3eJEDqA%2FAU20UrJaKFc5c1sKzxg2zKjirh9lkY5iiVnzhynSGTKz%2B46L144I52hi3AvCUa5mh04dCneRRPNeh9sNJf7DW7yFfsdtOoYfgMPmcSZ4g%2FPUPx%2BjvN0SO6KTZRirecuc4drK25u4g9V1pbZFQmIrT%2FdaykWrIrkoBfEVI7TME5teU9Yp6CLh6kMXT19O%2Fbz6qzoL3FO7t9GKkL1vgRuMtFgf1CsKUHVizbfpk8KZUqNzbTyMeVe41ikefNHaejlAcQHrD8k0mbXUxilxc1IvysbEy447epuaa1NETPzjJLZOeY4PLw6qKeQxKCMwub3gYmiySBRFCHUKFn9gPbbo7V7y7qnw1m0o38jaKoc4Z%2BWd86G3qlHY05RSUE%2BDOqjCnDptlxP6XLTGb5IzFX6y%2FM5643cjC4udzKBjqkAVuK3b6GxlhQFdkXm6%2BziAsMWVCHzJkam207gJMXsSgq1uWz9RsFknXgZsg66XMGkMNMQGDSrUGlWQ3iC%2Fn9ozjfikd4agTou78SC7fa88KOJNGvsDeFYyU79lKa97N%2B6JBp%2BYeyej4nO8iheM%2BU5IuQc%2BpPRHnW8E%2F0sNI0u2dopa8o3eUzratl7xtI6OAJA1FUsW20z%2BEpiCQu93VLfBsWBUVq&X-Amz-Signature=8bdc68a6ecd93cbffbca3435afe4cfe2626f3c28e546958e169142e6322d4385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4AS7E26%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIDv4Ttq3zLHHviflvrBFyC2c6fKS88YGWDLF%2B1UmleIkAiEA9FEpsNuwJeygE8ZZ7KXRab%2BEz587XP6a%2BHv4GoOrilEqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9%2FgfqLmcd%2F2CEB6CrcA%2B%2FoVC%2BwIgDm1qu5LXUa6YKYNwAOz5WmeeUL3ZIDEHfQSllMQ5Gwx04y9A5iVcI7Ul5QEMHrG1JrrtRFYW7BjIRXOyAKPHqhmGzO1TuoJ8hUBVxxCUl2CfsH0T3yMMPBnn8p8duiWfSeCDNY2fGTylB6BK7WN%2FC6JIATVLc5%2F5f0GinyiEjdiFRHNMUKdFZYXyGNPzu3qBUYRRgAM8edEMX8OWRGz2J4ua2BEljfl2WPrvg10hAKuqu1y66wOLfAN6CNmJoLaYyQRnRZGklijXD2kRqddKA6BPeDHnrNWzaYlZ1lcPBjEvDmQpkMSWj%2B%2BbRncQ%2BRNlRdwjySUmFrIsevTGzSCZGJEGxwT9vJxtVbeuugQZFNjJsm%2FoXQZmae%2Bfy5s7uBqQNgID0D4c%2BHKrMptYkp5Z9C8cDuU9h%2BPSCekiC62Zm%2FqGyVZUj%2FWkSiuGVNq5bwef8uBFdChI%2BenH%2FsnTIrDbzTWc%2BkXgiMxK7joTcOTaPkM4Q4Q%2Faw%2BLslORr9pQ11iYkWvLAaniuShd6WR3OAPwIcGEV2fPte6voqsUKOUQ8AKrEA1uD1g7NLZ%2FD241w9q7ILdIT392GhQev7T66qHXrrPelrB5xNduTiDnTMFJM9M77GLehUMNHO28oGOqUBxBedTfKLFKexMWuy3dMKg9cJMPtPQZ47m0QAYt4%2BJJ4Jpsch%2F%2FHQyTtp2mqaYQz0RmsaanzAWbGvHgT0Fggv8cYwUwAc4TEcbxBGoiL6LvmY8Li9c39ZowGcwntVF1GUIpOv8ZJKu572XAJ61vdQtzvy3t%2BLatnzLYpaq%2Fa7X7z5Zz0veeHMEBDpJTM3xdAgvNZOLbFEfayvCeLv%2Bpn8dXdYMvzx&X-Amz-Signature=b55b34c2f0ba3ff4bc67dedd2c4b6c38920209fd1516c2a0aee73416f7d17e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=9033f63b5d234d358fe8dad838d503f6f9f7e37ccba33d65499e9b6a309c5011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=0f2d6fa050193671292e402b4698c33275dbb0e09f0540f435d1dc258f509a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=b425e460a75ca721c31148274273bfd581a3265d16fe033c61c7a72672009ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=47a3664aa4805bd37694f9f69e5ad13810be1f90248cf728e1cfb0bbed726530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=0e9c00b8dfe5fb92daeaf48c3ef1c195702c656e17e9fe9e7aab3a7a7b09848d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=62fc1309b95b08498456bb0c028d5d9b826c8eed960638bcdbe88886e9bbfc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=b8c11cb7393db92b4b637b25b0dd04f9362a414d8f3a7fae44a9f49601b238da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=a11347f11ec086e9665cd4982ac63118124328ba067c4f244bba5a9ccd4f70fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XG5IAS%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZfkfcrVDbXlZDfmUqEzY79RT3kDFfUTq%2Fa0dyjZ4q4AiEAlAERZg7BH6l1wzhkzrK7xhiVESrd%2BReCRoeqsoXY22QqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjqOYC9Xa7dsf9FsircA5fSzVgcH66vCLITbaXnV0N96IuKQBZqv6KapOOCpCVESAGJJ%2FIryTDRtq%2BiAKQFHXjcU4UThYTMBD%2BhfSG9RZP%2F8VTV5AIR9AR9mTgKzWK3g6Ds4KiGn%2BkFNJS8MLnbLS2dCGjfG3%2BqOjz1dZN0cHnVj4mYpTM3FCx3piT9sWqtAk4va14KwUosBQXQcSYYXweaoi3eMiQHFcvgullWHPx1WfqfdOBevY09HXs1ky6g07XFnKRsEB3wurFXyk2lsotlVb7ASjmEHIgKstchgqcHBR1vhhqs3E7BR8DQJs98KPZsxt2NBGmJG5eJcVFkMiHSDTMC0HXtOhR3TDtO3zHFEDK%2Bfy0nyeEhXIIQJJxGacsIw1XP2oqeAiovtL3lfqoXavkde%2BrVG4UEdDLRpRHJdOI6eku0KTXmSsanTFRNBbkHID3h4gojJ7qVOL3qejYO%2B6QJX3r%2B1XUwYnpHhVPOsj6i3gdwbzFkFGMN9GWDWdSdHpWRQscT4kwewzyz%2FpClfvPGSHRp6uRSSHli2EwCHe9YiKnVhpinaCCwbkcN8mY3EgPhCuFkfy%2BNdY4Edg%2FmwE%2Bwccj1DdZuxKDtOsb%2BvhZqv%2FhSVUSNO14EGdvGfXNfMadxjqXXvdt7MLC%2B3MoGOqUBxM%2BEizVprb3GS%2F0JB7RdzL1jXHPZU5Svmj4l6Wsv4foXfc4QdCe%2B%2BWaL8ePxPzyE3vhvba%2FbDUp7JKn%2FTTep7JBxBpq4InAy3nUqwbdfWgTImW%2BZ1w3DyaxRHXJotxCgy%2B6Y%2FXExU33CVwgxniavoIx4wqfqXEdn8UeenutNrbgT76ESvu%2BM9j6wOTZsODVSM0vOlq4p%2Bbt99QhACal4RjxQvW5u&X-Amz-Signature=f2d0a28cd1ea4755a24e6cdf1eca1ab5aa143bc08e0528af98097e6fd0506629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
