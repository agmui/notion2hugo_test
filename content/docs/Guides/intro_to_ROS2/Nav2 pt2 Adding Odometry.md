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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=130f5ed93c46808ecc1b8a0848215279721330d328b62d555eaa16793e28bbe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=e3a90e6b6282145273de7a2e66a746ee11f4d560add982855af3d6eb7dcb590f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=2addee88ecafa05a9b76896f17e1514ad675d8fbb2d70796aa665a0cdd2672f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=ad26c0dba43f34122b2d4c63572e2f0b213598466b698c0d78b5f9cbbbf7275a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=7bd66264a9af6dc0432b48bb2f3ed0f7cdd281d64638c9b319ebd4f2dadc16a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=8887f6c1ccd9f3b46a7fb376ead64e43daa8e55f70bb32a480e08790ce2ae9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=5fc5bda864d830d48aa9efc8ad56db35233c4acad448fddd5f37c510d657aee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=a20365a57ae8f727788451aec30eea6012c38a54f2581d96966409553c90b7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=67af84febdc1d17d0951c51003026dd850e092072ee635792cc1bbcb04d9a12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSD6Y5Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCg8kJGP%2BGSykioV0W145HjwjncINLwQnUKdfRbGlcTWgIhAKt4%2FXXiogssS73aK0DP%2FB1DoasqeungtoMYU7DrSwDJKv8DCFMQABoMNjM3NDIzMTgzODA1Igyadvs2ZHRKXQ3xC%2BIq3ANmaycyBpH11w7ilJMOVsMkSJbW5wuHH9nw9fej3fcGMq2heRme4Cm4vDAEiUl6mSi8Drm4lIDwtljqi2yYliBb%2F%2B5AHB4%2FcfQM9wAa3UzVRmw6vj7MhC0ZdqSGf3NO45X1Dx5pZjFOar3wrzRi18DbETNKnyc3NmR9rapplIBHVPfMyZET6oGXEoiC1q0elutElvrJ45BLal%2F8NBppcpfm1UVLDI%2F10pdkjrMx3yj%2BNfkzTWOIZCR4hHTvhy7skMwdwb6qrIH9IqPyL0jSEMsthyrQZs%2FQoOVOtMcJo6LKmUVN8lhwDvsp1ojLNx%2F3C4ilripG8TyI3LU%2FLPAryJXMFsvM970TqoE0DOARHo3L7NIEMWBpPBsF%2F%2BzBaak11CsjZdjHrU4CLDVH8G%2Bi%2FJi2LVQULuktujzaIhVuibs3VD%2FwRzhSJgIwMQoOAAq%2Fjj%2Bvz%2FVokbbWEGz1lUe36pKtiZq6VAceQ086dsPLQxQlIn%2BzRuWNeaVL%2Bdl9SOngU1SCU9pY%2BiZQGLaoAMFPgNlm8bActoXdWxZxONys78kwqDaDZ8WVfbZ2grjPcMoOFbGoNDZoGddCMV65AG4PO8oRg1vYlyIg0%2FfPgn6%2B6r9ZL6mR2aZX6JoJDHpcTDDdo%2FrEBjqkAdHl7rCRAdiIvjkA%2FpFffEB7U7DYLqVqQnEWLlpZoXqwbu2Qjv%2BWXLn0clbbgg381jKmxP%2F1kH8f9SlW%2FjNvMCXRUiwI6cGa50JTtKa1%2Fsq%2FpuRrfLKopmXfyGIrJHvXR5MZXXAi24gJ%2FbKhMBa6B3Iv1bIqjMx8jXqbfmD%2B9I%2FXsQTS4NXHqM0is6JKyhwhJHI%2FQR33XQoGdc9ASO9k8CcXL093&X-Amz-Signature=3e25a0e5802462e6b9071becf279512464e0ccdb9fe18d526d45e022d8a4bb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQGLZC3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFnLBXG3CNlMrUWaaIqiUArjQSdJv5EJB7C1HcH8KTatAiBOuoc1nvhp7dRt2z4zMO5CTw9x8tPQI4Ml7xWOEyhyWyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM48OvhB1wir5K%2BIywKtwD3TCcmefU%2BuX0If1HsVILTft98vayZ5Q9JKMf%2BEEkVeMRo7uBo6dIDpKEwjzkCcRG0vxU1MYnANovdcQ04Zc0RUYoGt2HDcuCy2ciULSFiGsEENcgo3HthCxcBJNZPLHvnBr0KV3CC66LdGXL6lKAsRG%2BEaaoHu0g4kCRT5xLanB7kXCJYz9NZObIGM1xBtRBZypsoRmaF2kWGRbfJK3Fv9nU5oHRlmQmC99JIfxtveHEnv62LknylXjzmR9ifPmf1joAbifbBckIUyrZKB5TnZ3Bh7lmJxzSy0hcPh684H%2Fxu8VL2uCpx%2FFoteD1FAvmGVOfqyR5CUrwiyTLpTRIZHdbCJ4nz%2B5fJ3xOSwHH0PFt3pt8VcJqCkjF9IjbWuw3k4TVPW8HiV7QpcigdAMdxQhjWye1adIz8IJa2us9z0whIx6dBX5We%2FQCgi45MW25AfKf44jsUNqQo3%2B%2Frc28hgov7%2F%2BxBi9jfkCnoxs1kiTZlFpzGVL8JEnj08sC9XzQhyuSSUVxMbSYcSMuy7VEh1Nqvoqk2v1WvjFPoBcKTaWEuNTx7IEGWDaItAZMz90G0nzJJ6TQI6IK9GndwTqC9SOLyECrVRBvBQbZl4Zdsx8H11G49qbz5S%2BEEGQwu6P6xAY6pgEqSc5k7Jl2zY0kjwYfJeklOI7gZlj3r17%2FcqJ7hFA4X0l3SDdBvLPCKhkmTlqV%2FqwkE2gS3GCwlRjvByNBQSWqnIZ7YvSIttlA%2FvGVxRy%2FqXD%2FD%2Bk3qIhdj%2BwDoFkbbPxqHGYkXCvydSKt92FuSgRlh%2BetV3HczA2pU8rhYoCyjM7OV9Ayrk%2B5vUbfSCH5Wbd7B3BwLnRDiZRUQ1B6zQbapavcuuY9&X-Amz-Signature=73dd7512201d86f96d4b21cc31f48dad85d34ced41e8864a1b527f334757c724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=e4c6d51179f0cf8b3ecac138a0858c6759e87a6fa7f636a6124c09b232ed1831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=7aece2938b2b51fde0c922087ea3fded2217d7906fbb4d5bc00f665ab3494533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=36ed1faec7dd0ca1ec0ab82dc4bd775666a10ec474574668cac9687e13fd2000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=3e6c63cfc962611bfad67f8b23f9c748bdeb2da417ece8c1fca7a9e7e563d664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=74ff35ab631f60e76ed7079711b65f577faff042ba110425bbcc987cbc4ae91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=4c82d423d5be6869c8af3c0886d21acc3c54e3b81c7d57a975a3d5dbbcf8f0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=5d8a11370263c3a47ae84d1b81c19b1c56dc9bc93a3da3bc4306f1e1af5cd33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=e95edec36e246b7090eff658342c863cf89391d268fba47abdf07401bccbe5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26GZNFW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGNJDcrWzaZbF8MGc5uXvfU%2FH5%2Fvlqutb1bpKq5HiwgNAiADy2f27Re4VNR3yM9ruCf5xzkKMoAfOVqXYzcV%2BHFiQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMb3pcOtkcDmGU3Jt6KtwDv5og%2FisZ%2BRF7DoT4p1eis0wbTk3odfIhdMsvag2zI7ABFSrUCcNweTbZeutp8DZPtBJyhO0PLIdZPjhZsIvtoCEoRpcByTBFcu7I7kDaoko59SwB7y2fAFgjBx5MBWMxKT%2BK9Ni5AwHC1p8RSQNyMzotsDIZ7CsM6f2e36SBEkvYUsAPyAGIa%2Bxi1HbV7o3CzrG%2FCOSt8VwOujAl7QQMnkafhuk0sZtVH45l%2F76UtgAzQwiWH%2FVhAkWvzsGGh2FCJ2y1DcXDvWCL5HA8YlW%2B2alSFq5cxM93Xb081LlOdmOm6rngyKYHxzAdkCBqeGqm%2FmOuUjhYtL%2BCH4tC4Nx2GDYK%2BiMl3vThNzuYnxHoiH0AbPR6ChlfRJu4lRxRwOLdUSO%2BTBsllQz4JdGLlcXxRVnrVFH3%2F64eUDs1Kjn8cprnmDrfxGyaHe84reDv%2BOI89oq6Gx9xKuXLj%2BKb%2BhyWL1i44WcNGr9ZMDBOoW7Ecm6Q3hkpTQUbyLaJGDt0%2FU7i28BoJ3TXW%2FAhHJ%2F3NGz8hazhTcJTv8emVUG507u9UbpgDFkvyD1vuiaCZ6VCJwfwB34ZC7vUubAQjnpa5mKYwyo%2FYCe85y4uBdyMB2LtwDdVBzzu1bkxW28CUxowlKP6xAY6pgH0Nwmx6uihxio%2BGj9iLAtAFHipEmbtD1iqLIbJmn%2BJ%2FhN5UZDFA%2Fg23zzrHf9XIlY4op5hAoEyL51xUC%2FGzpVz%2B1lGtk5re%2BGlFC7CBlAn67oedrLmPTtpTQAy81Zaso%2F2WuMmt8Bgij5Y9FRy%2BgmF4UdcIcabtmrTJAMJw46vjt%2F%2FUsDTRELUImDOSFp%2Bn7y%2BHF6YmegxCkva9PBHHNd4Ao8MwIrb&X-Amz-Signature=62300c3ae659e9ebc9827b80835f893b53d7b3a9ae9cd07d9f58ebb74d1c979a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
