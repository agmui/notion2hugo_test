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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=f087bf4db5a86db001647e7cf89605e616d8955465635fd00e188a71eda3e68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=28a2b5ab12fb6a20dcb158713589bc0645227772a992f740b4699275a1ab2cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=af3dc817edfc18363a6b8c54a7a9d07f901df0750d8f25cf7ca145d789ede234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=64c166e9e488e6b5b2a99b8fd649f4b6a52f3b4e57bf83e848df1918afb6ff39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=20b1079247ca7795924365b313e7a65840802f1b40579e162b5d47e0c8c2deac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=3da8727307780e0586fc223b79b4b89dc5aa793fdaa905692108709810fbd213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=7b9f7a0b9fb7dcd1f1d90d13d43486225078f7843c47411214ba6cb6c09e27a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=5760d82b17d9a21e7a24dae84bd94107feac19ef98ded51a2e69e95353c628cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=ce49edf8f071ee8f2a5e9cf13bfa785f137d39233cfba1345ad7f9313a5af969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MLGX3Y%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCQIlNyDaFBveFB0d1%2B9r6H2iufnMnbEfFhZ2m3J0jAYwIhAJGtQ8UUq9K9klYPIC%2BsU22l97xNXYT%2Fdg8EcWnWTbvGKv8DCDkQABoMNjM3NDIzMTgzODA1IgxHo0xvgpN%2F88GLjZsq3ANvjRHGDzbfvEOBzrxYuFQ6P5RzEy1l5OvjPLHNbfJG2UmTOiB34SdyBzsWa7u8msanNxapjOnK9zUW1O%2BOOOB3IdQ3PH90nucrHArNtpP%2BxU7%2BcsUfjz0TMAnsp3LGGOTuNn9JRdXd49Grv41fW5HK4UpLQ%2FWqrtx81OXAbRpnKaqC7muyILlFe1XTZ01eTGO7H%2FPdu%2BiLsDASY524lCiPYvQkiZZtRJxz6SCUxz2G7zsIKBMsA8zVV%2BTgLBl4YqUY0a6FHc18n41ddMQjhtlpTAR67qhsUnKuxa5ZQZbmxgbMfL4uIS2HyWVLIe449t%2BpcF%2Bv0WYAnxgYhwpmbFsh4AjIG1EEho7zHW%2FJ%2B7Rcw3xUxPe10xcqVZiTzUXE8naFqrBvn9RsGp8PNL4YvE6FxKq2%2FftsSsldL%2FImVegJKsz%2BXKZ33tr8GboUEzHRMsGGAkcOOFt6tAGinZ%2Bb6y03YXOJNYwI7N%2BT3FKR2uBOxFLOroGOtXZjSDmoPabAxgHy3YnOwctIW9EojSfG3dmz0i6UQVVuegd1ZSStrlXxnHJbgYuclM9KG0aFuAzPw%2FT1BCxCrN0cKe37OeotBmFmO49bE3pI25Ocpuo5kqdHCVF%2ByaLlUfahSbVlnzDx%2BL%2FEBjqkAddTathX2fYYj8W1Tkc78wQHtU5jfX83Bp96szuPi2OtObWisEzEPSb8Sq07qSgCfHbx4qinElYmys%2Bz%2FFBExyyDtdFY61284jun9usaqySpWNriBOi%2BgbFnQKRiwnLmIf6H5MulCgJ26YRQVajqjg51NCLhxCu9KH9wwCyOAMe4oYT%2FsAFHxafzudJGHPqasxm%2F07LH8E98uvYxhJTd29MQfRgv&X-Amz-Signature=0a1e3dc73b5b9a654b1ca12ec0ce8352a78cac703b68663ae5a80d339eededd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT6RZV3C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCExqFoEvkxvONDGBo14MrKnx%2Fn%2Fq2CFgIPKf3ipduADgIgBeoHE8zVmlBaK4ipI6uaKNhQL0lW2vndAwXzwg2tkqsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHb%2BPomUIiqpZggtxSrcA9TWyeWLYB2oTatcq%2FQ9hseKYlU51Y3WUUViITwD2ph3M0a%2FRX8g9gh9bs5T9iBATtnO1a%2FK7ts0V8%2FP4mlAnUXep5CZJ8Xcdt2vPbnb3EShLVWKsLSeTZgcc9nYO9TkFIQimwio9WI3xL7jsEgkmZQ7%2BJNKFyIQKEQHdKD7aS9wFzBuiC86LNJtPzQG4Ia0IrKfUIJQhpzqDuNSSV%2BlDCIfjIndGcOCpiox6kImM9FR2LCgvjK7WOpTDi0y3yWx01dl3PA1IyfQ6gHpwFsMx3n01V3CXR0GCaQLowOk79NziYKLu3Jo5OYSiUI4XDSdEqAZAo3avQLwBSJPcTahi9WsdFk5tHcWy2qZZ4qvpu7hKV1DrsEYEyg5XOYDf6sfMv5pi0%2FSHQBHc9FTCD%2BhmgzC0%2F2vz0KVa%2BA%2ByifVrtVpCEx7VR2BGLF%2FrGShLzG6qvBcvFBcD0WoGe0l9M9Mjlw7l5QuIep083LI3ZVYrUYj6IEUZ%2BACH0UvbRK1%2BNcarnYaVf7ZfCfPi1x5MFT5%2F%2FoTfRpxnHYZatfFkPs3O5ePMwTsg%2BbLeNz4nIMWJPU%2FM5jETtlRSXWx9juq2wkqvWMqUpqblTWlKighquYa31dwh3SsJPuAgngtB%2FrGMKP1v8QGOqUBL56SfRBpfckSOczEw%2FH7N6efPtbhmKhcwZ%2BMBmddDtGLJtL8NEimCy5XTfgcRhR0Vb71Dee2PbA9pFp3s4J1vA1qHjTaISLCZorYKT7%2FP%2B6H5R0jQD9tEq6tq4GucR9kFg6qwjv%2BC9h9%2FvTfJCDzwqUqLlCbDHlZuKz5jzJcf%2FTICnv%2BMyrgExm%2FpMfn34nWqskbsPL0roe9RFNizGg%2FGOPLW4M6&X-Amz-Signature=6c5c2aa1a3ed9486c50e84207cef9a54e98bedafdbae09d9bc5b00d8cc93ae2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=4f73f9f9aa402a63ecf841a714da555a2656b6dea791eecf1dc0bca9df903622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=59604bfe10c5efc287e0c962b6da1a25277d265f9b6aa5501642f4875e8e4208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=e31f2bfdc0658e31f6ffa444c8fc6f0a97c1db2b301a5feee43194cc543218d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=0ca57a500ab825f6aa9c372d1aaf888eda7149410c01951193f6717f426d8058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=1316b7c2f7238eba150effc05926214f430d828c248e638c8b768b7014b86d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=d6e64e35487ce468b30250e5847fa4f1af4eed9ebeec0238616ef4d867f4abda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=7a580a22824df8edf27b282c04a4744a3f2424123e1709006052ca393f59657f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=6ace630baf2d41d2b3160b2fa23a3dbb5fadade0e1aa367c020561b6e5e2364c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTOVXR5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDFr7iUOns38CmxTMBoVlUB6qVxf6V%2FCJO59l0iyE4X9AiAOqbNtNghxag%2BKFoGdexTefULOL7B3E6FeP6YYXb8enir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEFoBGE0PwHaovo1CKtwDGWI01MrulFvhJ%2Fb%2FmvNcdTjnvmvsE2zZ4VNMFJ7s5fR2uQTo8Uwpcns3CUVblMTp%2BZqiBzcddAFkJxeybXjSDZzrRobi9P9WzoXYHDbyoXbiEmZYj9sasGLf7iAdBXb6pDSxCsD6vItY07FECR3zFFt1DXxtjJmGE%2BWtSM%2B%2BV46tIBHcAeRWci644mJ6DUs01cRkPJ9vppHiE6lbhLj4YB7j2hEOxzRXnHXkyRAZxcN34HrdyqF%2F8I0GRi%2Bri9ZyhcyhSTEEleZZ56%2Fvwv0Plh1cQkD6IiX1YpeZanuDyRg%2FZJGYF0QxUBZTtTMRDR5G0UGQDRx71fHJFakqnWV1D9qWnI2oVff%2BcmcU2vv3iJNqhGJX8FM8wEEkIIVNnosqph9%2B4EIG%2FyUZadO%2F%2Bg%2BOMALZ1Gq84hgjZQfcZLmNt2srV6ppxSATrjlHCk25qwBGtcSd4uhPISMV77CgrUeutmhS0GHiLKcCL19pkuHEbpWprbcKSpup6JTrOajxY%2F0MgFjRZIScxlq8dvcS52KZYkP4AploazQCARwPunW7ammC0Ssx0TIqoITFfZfN%2BVbn3ybLDSZeP2PlXQKymhYpkJ70mB2SvZLaYTiQTgKoWo3P%2FFUbg%2B2DAX4u%2BDwwyvm%2FxAY6pgG%2BYbSkdpToBZqC68TdCooNK4kywq8x%2BpASS25s%2FGkEeB%2FXQPzXxTYU9MfLiChb%2FgAms1npAbJiF18HlxvS5oGNRew2%2BWx9wrhNQfsAOBxadsk6Mam7GwzRlDVcjAyf7%2Br9FqKOki5vf%2Fa1u3eALowbA%2Fm9qKcYlgCfulMfch76lxDuvJG1YvaxfUB0DrW0tYz73EdeB6jdGVi31oxjke%2BLh5qDQLE5&X-Amz-Signature=b23d191d8f1b3668e2f732793308f006fdf4787a389b6c85156afd8359264eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
