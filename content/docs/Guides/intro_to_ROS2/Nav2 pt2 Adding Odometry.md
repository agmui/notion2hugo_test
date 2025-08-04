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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=a93e24b4a7b04433a948a5480749503d683dd7d0686e76111efeffd3c1c99f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=2901f0e5f96c9ac299786b667c6e451ee0b6e2ac628015085f8ebaee764d3538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=1ad22a835163a379520d6152de400b22cb51bbdd5b90fbbb1de74a6af35feb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=68a389870baf4379ec430641db1ea891405297c61292aed6d5766d051bc9b0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=f662de98a3e9d8adbee8df5d3008005eadfb03fbfb29eea4944f351970359f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=26b4996b6635786170fd10bfade43135850ac50928ddf85de040c19b3f094c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=3ac9feb0a5badfd4d0cda8edbd3e79ff7c0cd2d075900d3b17411a925381a01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=78ad87c89853b2318d0e535b0185c2d4a077f21679c52174095000daa8f795fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=651628d877268bc512334dcee5adbed0b49be711c10c99b97931a3e02f1190ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVD57CU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC0Iu8eQ6cZjeTjTe2pk3bqjpk0SJNfJ8bU0%2B0sIc0srwIhAMRND1TeXFS50KIe4PgvF1fb%2BfC9Ak8kYKiNF4Z4A7nhKv8DCFAQABoMNjM3NDIzMTgzODA1Igz4x1j%2BUOTbB%2FY8QHcq3AOfTcG7u5ktVBY0mzWRlagdwkVFP4lKbIzI3nIUMH5ycELu4n4b1uz%2Fj86inHSQP6TRg%2BGapm%2BDfubczOlfcyvPsFE1YpEmDZmHOtFAYe45fDEUYEioyzX4wHn0oR6oDU%2BEvrA1Y8K8MDi2ZmYSb7%2Fzn3I7I%2FQpjJmXUGr9S7UHeaoZKx%2FoB4x4tz1TVDToXXTZb3uQUxCkArAmrGff7lWsGS0c0YkNEZTviCE2vMSPN33GILZlit0lkT%2B5CXjdfWKzfC%2BjYZ3PsUwHgomhrdeQf34bL4ayixsOjiiI0x%2BwjSCyuWgEM%2BZ90eqFhqlKChGL7plqbwfH80JbVMekPWtFR7smjCDBdg3Ftcg9VUN2avAiFpu0wtu5DICTrXkg5I%2FqlQYxOcr0KZuE9u7rJeZqeB2bpXEfTO7W%2FLyYT%2FKz3QPjqRl8YhjbSkpjL3Onqzp1vgwwNcXGFnXZJ%2Fec5CxNPQpO6H0VfwnL02yx2HUMUYghWVcgf3O2TrGv33%2FpU4C0r6Fz4lak3Ako%2B9VO5K12GmNVHGOO2gD4Kxjnbch4GUb1MUaX8%2Bar0wJSXNiHnvW3ovoQsrShLLfg9j3iYl3VcTUdzwNhKPNGmiVHPlDK1VawpOWtGgIJmzAzJDDl88TEBjqkAdd130UJ1RiNHhiroBz4k9%2B73%2BUn%2B7aSsRPi%2BVVGHVtjVCPl7ruTyOD0VPJFsT7rYMvVEsUDGFY6QQqjIqpt3JNK5MVfk0ldr6wyfvW2MhTVvAj2eomAQn%2Baz39Dn626XSdXIYySWMPCzY7k2hOLJXwV0p9a1DK09TmvLzk%2BjTEHmkUOVmNZ%2Fbjn18v428%2BhKljK9Rm7lmDcwvaPYYM58R8IVNh%2F&X-Amz-Signature=2bc1c8702651f1307c834278ad87b271f4d45d567f2022d61cb88067d6b960e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYLW55T%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDsvOnxo%2BTYXTMOlg2mI2wZVZBFLF6VI8i5ZWMMjNY9rwIhAINboUAfBUOC0vt1YYaHVVVURSDUBW8MSzePAhfLn6p1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgzGIQSp16SJr6GlVYMq3ANEqSkT6lRF35BkcmKQlOKxwUF%2BdyT7GJG8Tryb5cYKifB4jYgFkutTp0nyQAB1Um7m5fha3bXjFO4dRSX1vlrhpQmvlITyNVE64uaF7Zl9SgmptHvsY2cVPvqvEIDHpaiGLu0YGNPupWGUVKFj%2FBZpX0U%2B68drtkUn%2BtTocni%2BbwGnUHz2swMeOGmVMcE2%2BZTH0iE0ovk1vPc0%2BhDtDFih%2FYdj3Bo%2FuBd%2B3XVzkWodfsH0C9dzI%2Fh%2F1A8DPEXSdXgnKXGMd7YBh70KYhVsc2WSfA5jc2MpujhuyQvMdVINurImEbYciAFCRJCwniARusV0vk3zn7D8pttYns22fDOK5V4dzB6ATZ0%2FzqyRhU73l3IdxNoSPniR1GA1K%2BlHCD4gMhI5HWwt9jZuViPf7zAjCs1R4ezPQClwJypYJrY2FG79itXKHh8SiN%2BRgAOFQaRvn821%2FGKrRNfS8dGXgMegQ3z46UkKM6KDrGGfBv8IFuBwQQMct5TREcQUL%2FHkrQYVY3pLVeThspBjXXWnfV%2BIw3ePuuoE%2FpHDaFSgWIOGn6i0TZjUkT8CM3QESIqnzKvn9LcUN82p3Z189xBfTUQOP81V0pU57mDZpuTHwWlILeU9JEzmqayrwJ4jBTCk9cTEBjqkAaN%2Fxvuvy9ihdZeViLgylGzmgFltvbQJOaz%2BcUMrsV%2Fbzq2a4c2mgc3HrEIpofAG3rPrB%2BZr%2BGuBUgl%2Bvzs%2FjBgQPXd%2B%2FP%2BSpgRuu6gvyQFgnV%2FNpGHMNpWFQQfG2Xw0J4bJ9QiqTBq3e73a2EZPLhAeDZavlG7NWBPFtXtfuBHloMQtM0mPLvczaHn9Qd7eY9KwzW758wt%2BvbUYeHM2GtkM6Eln&X-Amz-Signature=7732ea95ad6b95c0dc7c5675a1d836a412125b7e306fcb6bcfae5fa924de18b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=3f839ba4b3a734d6a67237eb2d70c2d48c414dc1c159a7d95814491ac49c2a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=b84ec832e353da1f0ec31591eb05f2a23c9396141df16ee2a7d5b75d96ff0478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=7b66ede055339b06759916645e8fd7fb10f1e43f343b230033d378eae11747fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=15c2a84ac7c86afb7d2936c9c82782ee2ec9d79ff941e2da9c3a30ca2ec119f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=3e959198fa68bc675a0fd81d454c789f3381bfbb450d6525c3a968a422710c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=7ca240b6151deaa7d2214c1a92280db41c792bd810b96d7d943fcee9f4c48abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=5544e8c5a0668017cec07913d869e376f162dc86443a65c505e684176bf4777a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=03b807a3abf695f4ebbeb09346084accde7c3332bbb87476f776fcea0f55d4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XMIGYH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCr51Bpdv9gXAceoAXw21KyjOMWXfqClz1URb2tfqC1%2BwIgUrWYZ5L6SecKhihCer0gJQTy1YJdEIECNvZrl6jdc%2Fgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLhGncm72kx8mG%2BlEyrcA2jr5SMKZxx3%2FJlPW741wr5gD5hQMMoOi7e%2FWjB3jCVZMr%2FSRbwbqEJhpjuSsgfb2M7ESbiomnaroWlWpOc3n%2F4g2kWUaGCR4tOsXGL7E4DU3%2FhXH5kiVp670zmO%2FnuIcx39MicJLkgJE2bvOSB7Z6okErzzpFw%2BC3cb9YdJdPnznLwlB0LuES27%2F4O6ZxmCN96N7%2B%2BPU24SMi%2Fb%2FmMuuDVxnHkMdzrr53Avb2HShLcusxF6mxFc2OBuGJTwqSbWexgFPW3aqlSTDmx5Q1a4bzYXNGCy4fZJ09nvltkWx%2FzG5UqaPFZcRq8Ad3%2FBfApooQpjreMKLHgrcHfW9yZMFy5eeD0c3iTOqwA7JECnqmwj6vyRXqsu1Mgwknw27aNk6TKtAKD9K5efOVJV5Y0C8jHkZY4mip3CE6OdtASerGiqcCsgQZZpgAYBwTuRba%2BTQFFXg9R6AAtTL%2FZU3ZgL4o%2F0DYmS2sKUgSzOXXj14hfxjZdlYAKBnmxbAeRuHRFK2XJkiD4NP4cZE1D8NS7%2BFMmQzXhXO%2Blf7TAgnqevqgsK1oU7d3J3LUOp%2Bz%2Fu5DW6w0yGlkTUVHcCJ1y3j%2FB%2BakcECasAQgKdhBuD8iHKxBQDylNvO%2B3ZkTpCG%2FalMOjzxMQGOqUBdDXPrn%2BX1C0u5Zq2WrQkuZf%2FuGGbHnNguKlF%2BhnLHMTifsdoA2S2XK0IVuIpuUDQ7XX5MUhJj7ltZQpwJYQCzcJhPP8Qu%2Bf2zugVFo3jHVzH02o%2B8WJAX0aG3lMRnWtfIgDPe2Rsks5Ed5ymQhOAYanGtkgQ5xsuKVJblxrbexlBKsetW3Uryqfq0N87W%2FWLzeXGC%2BoAxPtt%2B9WtuPBErgCvfr2P&X-Amz-Signature=5d6c8f8040030ff7eaefbb730dc6e917977d69a9ff22105b4d1578e7ebce3590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
