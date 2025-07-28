---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=e205a7cc930578406867235a1060ca6a6471b358f7e5d8ac5098d9f84c7c046e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=f1cdce35b5b555e7ad00e500f933a37929be97a7a2064f39813354e211e2d442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=860cd83f3ab43cecf95cd64b1cc3ab65900fc83c3cbeae95f50a8667afd8a72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=9b72f4443dc91f2a053b5174b2a6a2169ca41eec7e5693fa9b7a8d02dc62e28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=c99c0f566903345640a781d08c79a5190c09573ddc058c539bb0e3cff17eff08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=ca6deb30c52f3afb3942bace1494ff105e6396409e922be15a04766cb19ef64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=d940be3cdf480199c0f5035ddc7ead58c4e56fe6071f5874a9c4ddea6a695995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=92ab6b98c71f08951565492359cccba88c3b9ae35ea3e594fb4686ee4ff98cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=0f80cb2a1a77392e78829abbf2522838fbc49ed365b19f5347b6805edbf59f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJETQ4YW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDEFNNOq0DTv%2BXgD2fMM6ONPDlMFsdUqLfFPBBMVH97rwIhAJiDCvFF6EB5NDKH47ZpFbL2ABKf4vZMwzyOnCYjJtTqKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fel08PA4ML5pY7k0q3APnhT8rybuwwBxylC5KItfFMu49g7xcK7pA1nXF8Zdk16fj48Ok5H0wVN4hHGyPadZZ6thgG49XeMOF%2BFu%2FZeT3v97jFHT0rn2ml9Ik64D74AX9dWsrBdAHKNmqrCvJRWVKaYBeY6OxuYeD2mYb8IzYwm5wPcXH2Q5URKL6acuo1CXWgNjKO9cxB%2BQlVxKNXH5ThKiaXtVT0jvcUjYy6J%2BNJ02Z6Xj3Hyt76G7RcG587QWRdTsG66bHw%2Fi1FUAuGH3geVhSR2qYgpH3D9BAPDpydPTV7kunsGUjm6Qix8LyNTRN7Os5E%2BrbPoonoEY6fJVY22biFeM99iasTvVVPegPqIgcEG2yp94cZLEO%2F4lcyO8YkU1eOy6z5a4t4%2Ff66MwdEitPQbKb02p4B5m4H7I5YwQlWOSRUo0VD9p79f%2BUODzjK148d4s82ZdlGrcWhEbdjH4sgIWyeA22I79YDJsIBAOCw1rr61dlqIb7ncv7G4GHPrVWZ0tWda4iU5Jj4E7399kEAxbh7p8d%2F2xRvvi67FCj3vFSvAVc70uBuT9UKf%2FzS%2F3fQo%2BdqDdJ3KMCRFVob%2BHI7JkUcqfS7rUJn38tpIPPmMtFcvqCIrMBgC8UdS419or1N8CikKJjhTDU%2FJ3EBjqkAeadRw1hga3Z3au3sH%2BGSiUhCiqmhbbPY2r0yoNlgrXg0AUsmvnzIyQFDGQvmpS59hWvs0QPnSCRY4fllZUS0tSAGi6tZkfJAwiVk1oqLB5byYRtmT8M15J2CyJb%2BPqzNc7mCf1KbLDUZDsbGcBr%2FwH6yU2SX%2FLugYaet9LyCX0fLShiazxViZaK0cnk1mrsdDCzAdZULb6%2BaSRQPMpCZbAdKB6h&X-Amz-Signature=9ff1a9a1098c660c8914353fb6272e86111bbef5f0b0487452c9c36f2279eb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQRKF42C%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOo6GPyi7PC2YJ%2B1WOcNxHhNfgse1Ob6rEnN%2BBpGu7%2FgIgbm%2FhSyqjIOb6k13008bmE9ApFwshOwZMuMPUfhrLklgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa33eDRRt2RjGvJEyrcA204OTbneqRXhLexvLlcrlVXkB%2FYw5aAgshWGmv7YYuJqyylhYWWui5V9AJEtoLSVI46CHfnk16LbcPTVzMkBeNHjATw1K6lylirAF9KckFhkzBCDnvse4iB6ItvnQNeRe7GK6kp2f%2Bj0rmvQouwon2r2mfYOHwYgJ%2B1SAw5m0VZtZkL8lKyzVx0%2BgqKYG1FAYwn8JI0H%2BO3gVd0QN7Lk119xKcijgW7qJfSkonJtkmb3B2Zu4dyRUS1TBkxh257tY4Yc7alzGKrnFUhQt1uUlyT4PkWxHKH1och3U7EbRK%2FnUw%2FILVAomHpBg3x%2FRl77lqVRdN88K3dxBRtOCGczA71MIcysiTh9%2F8d4ZEfSG1P%2FoKZW7gp6ku2dtfKVjzJrvLboP%2F17UafNkHWvFOtETscsUkENq4swMMFC6CqIvBxZbGCWh3yrRFbYPWlGRPARy94%2F%2FwW9lrsvGlceuvsu3dZ1H3aTggnqMJFe%2Fe5SifLO6MU95MoQ9d475Z2q8Gi%2BUHNtEMoG8vKVveXvUeU%2BsWELbTQ3UqyBI34vRRNnRt4jihS4ZW2UAvoVXIZzUts2wDTZPvNKIHfMqG4AM0LnbsWbE%2F2kJAjfC47mkk%2BjWSnHOJ40sphYAZr7Aj3MNn7ncQGOqUBpzP%2Fd%2FQjvlki2G6ObYrVy3X02h4k%2BSp9ymh07skrow5iqBEEQh2zx%2FS312jeKCuGRLV4v2TMaH56807HmYLTRRnVlSybuzG5un%2BH2pk6Z%2FShOfbrFN9GROZMTFbpDmzuuCXXlShI1wCjz2bgi3ell83scLbE1WwERk4PLjmSpEKWbWDe2ZX9KJjqb58upC4ldZOQ4xki%2FAVDZ3fF5Qct8Fff6xoD&X-Amz-Signature=3620498b35fad8b01dc37af58dcff5954e5430f615ecef53d3df672e729f4b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=b7022d3f8b94bd114fabed4355a6c04134a53d4921c8a02005d8fda05a87e7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=83a2a284d1886366f987e7ace1fdb59a04503b211343b09bedc7acd1ff792d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=955602bca0473530e207447860162f119a29ab4b4c1a40550012a8502eb5b29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=0c70f15a928bcdcad627095a2f8a81ff5f826b48849f6ca68ddc6cc28ace990a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=68b2b99457fd4571c298f0db5954c41e3b25d8e32571e527d509ecb9fff8c8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=567cef9df869b7a7f09aacf9f19733320711ae3e45b74d0d6510939fb3b09c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPZAE34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDAqdAE7OYS8l4EAo266u%2BYtqy2bnaVWLqe0oFDvY5n7gIgc%2BV6%2BfY2bn3i%2BRfjUAIf%2FM8%2BJ9k%2BcqRCVwl1l6MjbAUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMstSV08%2F8AGj95jbSrcA5j3uR1QGa3SniVqzXWo6aGjjyIm4z4y%2F4zQH49Tqs7qFs%2BeiW4sdsbpFDYDwdsA6VB9Te2SaqUsztnFdBUCflZzLWf03qP%2F7Y8b6LjsIYkasKBquQvTV63yF2rIKF0QJkKy%2BUP9iRfqtrpX3gyYqnfy8Gny7gqVEZSI565OCDr4tzjn4kJ%2FdbT91qqhv4POu%2F0HJZ%2FYv057inw3nZI9gnoiee%2BFq7BFgexnNXnYTih4T8UHk8RybRLbwrmvhg7xGmahWLjuIWbLP3KBo4HXGn8HmzM%2F5qg3jOyKtKzkh%2BFc9CSSb5svoMx0C8OokoLUyu%2BSZv0P3%2BlFZCBYYIft%2FTQRAJv6zG4Rc9csWWIHWjWeDBA%2BMOZflJySVdM8ETMlvwSQTj4NVpTg8cvtXj0wR7HY2FUTh7iHCaDK3OtPuQVPrdifl%2BKS7z6emjCfF8tJ4X7RX89V35iheEIIrsi4r933pQShuZT7D6H2CHfpxPcQktMExdy7wFwx0HlDJGXqfmeuC8GAtC1YnoupckRaSaS%2FPYHsj%2BnjiFCZlps3tAkB%2BQvNXY3u0OHCjgTUp1aBuoPY%2B7rjzsK2yNSSYhh%2F5CXAgLuWFkbvglTac4g0xFgAhd8hqnoalnx1IW6BMIT7ncQGOqUBg8Q3KWDBMNzMRLwVsrZZ8vrBmSYH%2BYk7%2BAQCfS%2FEAJ5rVWKeA%2BEvKGM0kf%2FId447FqJY0PAYFoIipTfGdg%2FtvvL8p4O3f%2FYqlbhQ1tvEMO9ttm4rKOLvTPNRyB8Tf1whc7JBH%2BCRuyxYXDb%2Fdb9yaiT1fWdfOBNnaU2wtLwBtocHUA6o%2BgyjAzHemAXV4UFJ0x7AUJmscRZF82IaqTKqUcdMf497&X-Amz-Signature=ad5dd8c54ef66f71d9a41bb48e12947acb57233c48a096a00d7fae84d579aa72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
