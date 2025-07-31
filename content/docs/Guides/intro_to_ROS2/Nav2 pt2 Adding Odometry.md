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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=0cc51776da4ce4dba6038efbb78b45b978dfe8dafa0173b86609686895f9da32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=f9b151966b73be5d8f0fe04afa30acdf58b09f1a7936469b36d12c912ef431aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=2a6b7849d3202e18239950819e1e3b88108b7f628cac46f8e40fb89bb2df5195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=a74a1d5bf59af780ff807ceac0488080be4760a38e235b391b7cab223463ff72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=a75c2b672311d2e0f7f323f43466ae2a33cb1b526f8e8353e0dce99f7b242468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=a4d4b8e73003ce14caac31678b1b9efa59fa82c588eeb9e1b5d55a91f269bdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=92194b08ce61cc66c6b313193244125f4b64caf4e39cdab1fb34ddc264cbfff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=781ebc2288af25528dcc152fa49a17445eb8137a9c32873d35c5d6d703998b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=fb8c8554ff96c21bff1da5c631f6744aa2843cef36984937e1f98287a8842fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYADZJ46%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJBHAQMrRzY0iXIDhP2O3yXA9QsOrTJthCR7%2BWP%2B8Q2AiEA2HyIumqDkyQlGXQj0iBb47YXFwfiUgYqllpvooVlCs4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC%2FOwqNM%2F3B1a0KWircA2nrFQC4X8l2u9%2FViaRTqe3CC3NdbHgxUxHfDCvzFTPBkzJHF79brtN%2B1GHT1T6YRrrJ4koh8ZCrMhj8XC%2BAIDb3uQP5svH3JSBKu6CzDu1j4kJjKTe4MkgtarVR%2BCbkMwQ3b1FN1z6f4QskOdC508dYtnS0OBCc0bKeg3zgobZGygXBVyciffXtT81JJa7QcUfEPyX0achvc2BCtEWfFprkGr9X9lnqmtw6HJ5oW%2FvPVqDt7PYVDqu122zRUQoAx7VCKLVvJo7LPbZteFuGWxgr1Nt4DewHQmb03zziEufv9IDls4ygP7PNYw%2FDaeKYsP4gL3lhR6TwcTRFEbgJea%2FN8e93LlcT62xTN72H2gVjr1m7no012UuwUjRgFfepjBsaSUA37bqZk3m%2FuERvVhoDsmhzXRWrpcvC%2F6LyBvl3U03OmVp7aqDHDPI7K43FjqutD8JoMvMi3v1fntWr5HHJy2GzNSukEnDEiUru6LK%2FfHQ%2FdRtKsbh7Bt6zO6EaSyXSB6N9ZMxPuXdtye2BaS1bSXPYBmlnvflI1A9iRqrucipvtusc1YhrPC1DHcMNJQ4Gm0hsMbpwocKpDuhj9AXeNvzA%2BQutTv7UupsrIkHHUW0cFeORN%2BFoIm5hMP%2Blr8QGOqUB2Df%2Fq8rtAE1jFzDIVaYHD3neCnmNc7S1I254%2BVk7OjfhnCpQEfxHCfFCzYLt7ZsAiZJMgPhPTbJt8z0s2lS%2FoMt0lzxA%2B4no6DJ%2F8mZkdydd0JiNlHf31QTNH17slmwMoM03mh4zhpbOtYpDuN5ayeEZ6bpIPWMimZFFk4eFqFaZt0sOFxJ6pgPJynZQIdDEtb40nmj7ku01ANGYzyHvDiklIUZ%2B&X-Amz-Signature=296078eb0e9bc0671cb47bcb75f6dad1580478e83df3380c87ce760aaff1129c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AETQ74T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaHSBmuDiVKPmhC4GMCYI%2FJLVR%2BjD7PBbCFeFPZqQYmAiEAzq1ztpMSr37lj2eCAHpofz8ejhA7gRUwYKZFK6gO4K4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsvlSwh612BeGMfPSrcAzBI7P%2FKnGqkw1vgrEi67GIOEeHsBk8vU17B1uaze4lmbNPtlB4yTshqYYpoCDAP1eH1OSi72t43LgUq7inFiS5aL%2BEWn%2Fe20a6uJOTi0xmrhBZZ%2BMR1nOypMwSKaEvTqWApuhzVdjOjq1oI1PuBqR7Qw95QUSFBzmzEpvm7h3wbjePzt6SVqHUdEp2lYkBoojBedZTme4g48Vz0b1whJKOFL%2Bk4ZO7MgpM4k0ZqGFNvDPPRDknewdncnJSlTm%2BYFeYivz9xXZk1Nx6E%2B%2F6cIOGLwTqJyLMtjQW0mAeGcrqzbUIBqbjFj1jPby7Ec3VFmmXHiB7wQ%2B90U5oFzNieP4Ul0nEYp1T2%2B%2FgaCThS%2BqBKj96VO3KSgYCS3xZYJIplvF4DtwbRVFxLPYtUSEudIrK0YexHZWi78twtyMptazN%2FWdh98We%2B1MDVOYe6mTFuX9FpSCfmJOBdNQa4TMFqzlb1tRyjAripgnyMpF%2B6iqJ2ZZpcAiY1dQrv2%2FIe6kSPkwnQFKftgwmv4M%2FUn5aBGvuxsvtWJ6eTOlZ0Wu%2FBheT44gLxetIKIPxorw2gaB2ndBhnDh64fF77j0feYQimLxFruXHRTOXp0KmwuXLbBFWwCmisyi6yoP7UTpbsMM%2Bmr8QGOqUBGLVxcANxgvnQ2qSN6VKiyMqMOpO68hjboJl9fpCbMKQS4MyHhj2CwcnuqNpiIYaC4fc9S10AogSATP%2FoX6h4W4kKJGVvkuPGDoq8UhLYmzKDzqVkxrWlUeD2I%2B1EPweO6l%2FQ%2FSpfYGlDMRwb0bxDd92BoUW9tr107sOOY2vDsni9LaR71Zh2Mhxjw2zpkDoXItVXI%2BmXDRg3pNMCbwxT0VCEU3da&X-Amz-Signature=524d04f5dbf38064ae19a1b1112004709ab4dbbddc53bda3bc4b1aba9325d716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=db64b4483350f85e6196e2fb00de4fe2fdd34273d2831603b8822f5544681780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=61011ab357df70902d2e7456ddd7b4eda7a99d4146d2dfb6338c71b8f760f526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=18e07fba6d4a05c5f689114f012965f93efe5842ac88b9ca60ee2a0bd9a653af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=8595b9ae7aecf900a1e296dc9e01b9e7c406a0d0b28b31063889dc370f913fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=d68482e38fa6fe09d30d0032044b0cf97600d003abaf2f7c30867e0c90517cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=26fa982284b7dad91962525aed38e73d0349571ac6349a69624ff169df4fa962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=3fddc17ef0273c34a33bd59003f5a4fff94b8874b403a7a498a846443774fd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJI6L5J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs7w52Id0nePntKKFfXdvPE6ASSHdRbrQuqKY6gZusdAiEA9W2drQtG5D3y3jZfReQEprH5qMYBkJUTBBpebnVW0VkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd19nC0%2FRivbmxqyircA0DiYesO8W%2BuXBk5gObTpCnFPtH8T67t5v3vQnKnvygL6GoGx6l1pe8k2XCpcExwwegqw9Q2QmaEszm9%2FNEBmtLZz4DwuXuAE76fSkxYEYcmAJWqRuzgzmpJM59jVTVpPs1gVzWCGN9bS64%2B0kS3FkNmnSmUq%2F9wh5mh3mzGwKXqnL76pIrc4KL%2FfaIw43nzqv4jf8iwXeyO3C7manHVRmTUSpAmHHbhw69SmjawwOFLtEOhopomEMXaQTTRcvh6JlEWtVPtbQf6L%2Fc6Y%2BmMZ4c3nJ00HYpHdTEcPBsg9HCIUXIrWWddvwKCZ%2BXIDg1ApVTZrh%2FTvJRSdS5fkvCBGiH4dEF5bQZDYF83O%2Fswi%2BJSRx1iluG0ky0z8zNivp9vytVjTMGASpRd1jxCjsVOKuE0mPCf%2BL1uG1JzJGZANUbHM1jjpn5D%2F8i4qim5VyaufEinQFmJfxuo59jVB9Lp4YHmLLJ1Ans5qh3iWL6FGkmJ1YOVvTZ4vmxl%2BZFmZa0DOJ8tKUj9JWTsZJYOpnMZWN6DL058IjVwG%2B6XrP4i12GUPs9F7yaP7m1Gn%2BnasVsrUTN4alTooSnem1%2Fv3Kqlv4oj2tlUbVfdPxMBhsAux2HEGKT9FFPmcnwTIiqCMLKmr8QGOqUBlOirDIbuw0e3fAwGFJWD%2Bvinq9GdxAIAADS%2FpPfrSsmPI%2BxwdeRLVokGgWXdYNliZkwr%2B3rXCYRy%2FbZTIHDSjgBuodHbo4WowrSnEm%2FM3XnJ7LSDA2l5bIguouYPPQAjpkbXnDkUGlrcfmA%2BG8%2FOnCvrNpN0Feam6SItQTqIi%2Fx3y%2F7GkQZ1CSHJFoDxKaPw8Iz73bKtaAEc8hiVAtOcwgbCYAD8&X-Amz-Signature=4c66b75f59ddb9b849fd6a4658014d04da13a6a0600d66d6ca682e4d611f00b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
