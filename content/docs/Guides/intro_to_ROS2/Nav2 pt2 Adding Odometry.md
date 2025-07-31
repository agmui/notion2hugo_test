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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=739401b1fd11ed77e998521faf8a1d2719f64a596640445fd6c268846598dfba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=005c08518b8b2df29fa08b3549c19379383ce3fae59c4380120a89ca01c3c90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=ec52f48d0c27f9a5666575da8c34cbc64c081c448ffaebd01e343c9386635dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=34662b1be5220d683698949c5853b86b5b42568170482f50c444d72fb7779810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=633bdde8362f024fa7a4120fd7e150016647e68f4c5cccfcde760edc81f6d454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=91ee806f684e63bdc69c7e6634cc864d98c4e51ec7bb780cf0f1c6dc29edabc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=fff65030a12898c7f052a2215f699f9d5993d38e689891b44759d3905dc5a0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=1e0715f70708f9c3b55032c35a5a08e10828197c16fddec5741d53af93e96c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=8434c0eb665efdf6bd5821e71387561d96c45d169f6332a092fff31d697d0e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PF7JAOS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1LQ3iA7hpqlWwuXRKi3ZzUrkuYSOjQOTDvyD6qPEsgIhAIvuWlP2GANc8lGX5HQ3dnl89OJep%2BNodKUKBt5xqvxVKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQYW8nRudLdPlZCkwq3AMISYjDZJPagFWm%2FCc9TOxppuEjDknFvGd18Mqp5vdLE0uoWTl1dsAJSo0QHr2bhAFjj5PsBo3HL3ff423MyD0BC%2FFia%2FOFHOVazEZZwKwZ7PRIG6HmujitLiFk2Gu7nruVEgxpHOjT6l8N77MyrPDGK3ov3C%2FwHM59b1uIdqqYkHwtuBlvgTtktwh%2B5%2FIaGIeU4DI41ou8ADjMk%2F1sO5C%2Bg9Fxym8T3HtVLQPG%2FgIMFnqPGIzz%2FxS1yciph0dP2FwCpITp9ZlDSv9FGZ3vxVPHldBUKg%2BD3PzvOQzHFrawrBBqdSJqNsaWMNlKFtXD7frTjCUOUDdu2YaxRdHm0%2B0yHn7kso04ifUGcJRANsxj76fPzu%2FFLNOfsA%2BrZmLPh%2Ff%2FKKKoZuIX7zoCnhh0Mnx6SjXWy7MfjmybqrHOt6zzUciL03VmG0T4ELN1hH%2B57G%2BciMDQwYPNATSSp%2FjLuYCf5zfgWVlVPiIVUN%2FPUDvMxE%2FiqPHz36Bxvo5PqAsT3iSE9MbGXOYnKxWz6BEeWzs3gcX%2Bt%2Fjoyw2xDeyyjriL8GWM4WKTMeXFB0tdwtm%2BzuaEki1zMqU%2FhI1SAyA5zqGqPDQ7CNCv%2BdZjZuVkG%2F49LbQOCkLRRu0i8Vv2xzDcoqrEBjqkAfTKKoNJc7EdxF6gGayeiNlADE0IPu%2FuIuICSdbYrnpy%2FmKOFAeYjeRNritMQ3QbkSrp5XWRGzeqGFZwwBLSl0wwO50Z9gCwh6QGjJddqZEDLyodKYIGcA2T9TCkUqvlsAfKa83eoMg7CkmoEQ1cd1jyxdUbjGSYijEhgHd8ktnxCIFDmOe0F%2BYz7KToiDRQu0pGkkachdk4czZKmpag5hyuD6HD&X-Amz-Signature=dedff30f115da6eb801a61c4c2ae95a41efdfe158ba74d7620aa92d89f1c3be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJVH7OOP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGDf407aOatdIV8LzEg1qw%2BVzOj75Iou1SUuFWCAosRAiBV%2B2x1RkPJoqnxwdjNUX%2Bugan9KE0wmmMuxoaANBJN%2FiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8k8LEC2jJQL97AjKtwD3rp2Y8e9q8yFHuM8LGmFsNK7PzRAQL2MdqeIjI%2BSuWE4lk2TKFw%2BpyBe%2FF2io0K5eM%2Fpx6xCVbghaIrMbBZUEk3GvaC0DsvmdpOxR9bs3rfF1EicOxNYiN6UYKkxHYxbT907AAXkJ5DHAV5KT4C1ZosZP3y8BXSzH9R07U5djN%2FJbU0ay%2FLJuI0Ora2ff%2FV9nAOeRjdJqkb3gO1PZ4jaFpGQXlthCXgozDqIsHyAjJJG38wvDlctXBISd1t7RWNCbxpWddbtfKFZkWIDgu737GhCf%2FiHyA0LexKulwpVD771GvzMgr0zVGfu0CFAVCpc0XidG6wpitftF2%2FVbxkxAyTllUzIalzE44SkscOE6yPEjl2AjExrdC6Qa4WcvfHdh%2FM2z8bCFGsNnGFZHCIlP20lMb0AjthzYT0D3q9ounZXpKwj%2BEnJEpxXmT2436wEHJiSXYw0oNTvJse9G5K4tjwjXCets09ezpGftZdy2PdVJl4vwmKDtdzx0mfBxG3quwjtK8MavlSu3CleKMNyQIMQiK5ZVmMdXC0lr3sj%2BAfpEIT2gRgK%2BRlou%2B0bbTeL%2FQBa5kcXfNbAx2%2F2%2Bg%2B6d6nZJKekopABYJo%2BOMjpdUeinHwwtE%2Btt3%2BmdaQwlqWqxAY6pgGdJ0qIdyb7gRzYggHNBjKVD7wV7PnVoFQfzmLXWQRlufyUvu3vNdOgFZ5mrqQLIkNa2lMNOLYbIBKjmk1LHJj23snCPwF6drlLl4McpHVdhQUjt4frtzNPzgizZwvmCzPzgRu5QbzWz%2FIMzEWyDm%2FhCw5Xo%2FR86vC053%2BwtrodzVIWMDLRtFdeDps8nxEqZqXpDBVZuL%2Fjjk0udNRUaZDVlMgb2oE8&X-Amz-Signature=9a85adaa1e3fa23fc23f60bb4b40de9d2cea5ed9704ae82cb19bfc9535210538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=53ab2e51aa04ddf12c9d03c53744e1e5d30904ef34086d2a50dd1e7286d02178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=3b94fdeabfea866b7f4610a1621f0837cad2512e2e507b89386525d872c0bbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=f1c49b2e8c386086ecd454d32c7fe52324e31d7ef02d7180c768d06c44b90651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=72d2d61959e23cbc98db88119fd9c2eaded785b4980b4464effa1f36ea0a8335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=0673346ba26de5de32687ded946215ecbeb1c04a046e08ba17a99ab9eedf7232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=bd0ab03d1c7999f9ac5d61172a9940b38c559f7f1d4614b5403e6e1da20df021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=9e7083637f6b8f5ef0a2c5a7b8e52d0f986e84249560c257ed0cd1940b9f3abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBBPY45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BBVlag67dmij5MbDljkOu0wJEsnTQmESW4PoP4pcyQIhAPHMKQ7kRc4a0h4A9oSk5mLBhRdhPYD7N56RDfrvxk9SKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtyTHmwmgk%2FVsUVEgq3ANz2rBwN%2FYW6lFKCI8aoFYeby2tt4LYrqJXuvJc2OgyGn%2BbGEfHZ96EbmViJ7S778fbFcn46bgDHlDirF6ZbdgiioCHhOXtIhIzpRrzWjLzfjhMK%2BWiHEsAzJcmcHgrYcNn19AiY66aNXzAeyWiilzpMdRQabDLBTa87%2F8B624pyG6W3EcqBkeg3Yr%2BSfMxKCa7KjwYrkEqzRX9YCpbAabgLgzc1xl%2BtNUQwd8WoxS0nWdozisBAtfAp9oh6JIkEhjlRsugh%2F7ZPYCfKeWEKIPewKei41sbH1ScXyKhkn47K9%2FrEqYIGtCmca2kNIgDEhhSXPq%2FSGhElTfKUAkALHKDwblPuv63G55%2BWyIJyiHZkZMYq8vGNMuiLwOJfguekD0FvBi9p1Psvdh4NBMyg1QUummg3r2jK0zfOqz4a7ibLMW8jQgKxwnb%2Fo2nfE7cwOjgR454u8eCh6x97PRKyyQighWPqe5GbcduMK2meHGiRQylusL9lUeUZXSA01DrDReQOSEQSalkVqa%2FaluOspzZsOrvwjuyddCgFP00hhBHxR%2BqQhzo8xozLxbOKZ7UTnVozsPr7S0Eo6MoL20dRp321wpDcEbA0rQ3wBBTsVfE8%2Bv5bKdudLmxCx6zNjDjnarEBjqkAZ%2B%2ByYKVnuCciI0bzDD72BcgawxbR52%2F98Xv5KoIFwU%2BPjlOqeFdCqWoxo2s0ZuXxnbiHmthdRKgY3EoOcTCk%2BJtmIBSpc%2Fy8MiHSMSU4D9o9fMfCwXDXeis9wPzb%2FajluorA2Hi39ok%2F7a7uO%2B%2BWKDHz7VqojufPnB%2FO9MmsHC6ye8dzW3hmtU6sqn2kbdf1kehGZOj%2FR%2FeIhQm3OjveAg333m8&X-Amz-Signature=ddab7887b60df9f1904ebc9095374537b9f92576bbb27cbf59aedf9d3c0534cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
