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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=95a8985f372ce7c02f740e332ddae340d111d124428e2f30371479396997813f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=e07907694de65f38de572dc21aa42b3e934c6aad4707eb9c5082efe1d04bcd87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=e407f6739c0a06ba4305240e897003064a937dbcbb942548b5225a6b3f7871a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=a7ba89aa85a6251da22ae4fa209d003076a5285321841d180da0d1cf4642e1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=cfee2067d6b99e0f75ef4985af1aa53286760e0df33063887ae34b67b9f48fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=141508c985b0ffb083e8d9cbd7bcf1ff2e3cebe950664a47184d4888469eac7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=bad63940c0c6dbb765225b053995a71271ec4fd9c0b58724a518012fe52f5d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=aefadaa707ba263f0f4d1798de24b8fe38dcfbb07b271d08fc42909c3e9b4ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=a3440ea1e7916d270e9c39205f006000820dc16e3ac10f9a1688cf04e478fd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPG2XQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcREdoHnXAbeNTbOIGAkyyX8rn%2F4bCAeqsl%2FQLyo%2BXWAiAKrg5hbEgeHvG2ffEw1mDwqwP1DcMkaWu%2FCtkvhMk%2FMyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AUVi%2FXPsatUKyWgKtwD5Si3cRgcjiK21flDm1Xlr%2BRlJhFwCeUU2uetlMNVfROe0f9pIW0HBAHobqrZz4lhmJ63p2YMjFXc7rHNEzbJR2HCVqOfevfPdkg6CoksDqwwknoqUADK4b1zniViC9XOPY3nYfHPymBrjnp%2BDRnrBPvzPs7Qw6j8tDL4xr0jqabMHqi8YvxQvxyouZT5QS3AH2SKUpx1PvAjvp0M2SN4BjG%2B0MLKLHs0Npu6XxtmxcUJZTSNNiq2%2B%2Fsfj7SZ5e%2FyMxV3ESHKkBC6fiI%2F386NPpbSJG1E297CbwVYznIwbAAcpUp%2B1kNzyLgsQY7CuFJK47uaV09bOjhgzEYkPzRrZD5Nex3IS5e8LdbtAL%2BFYIkLUaP3bdWjWMwHl68sIHD4JvpHp4GkX3NgekxZIji1LRWvTHFcz7d7xcxwtf1hrs9jAX0CWEyWZ6rW%2FTyFUrPP3tEsXw58A315Jb5xG9o5Qg58ms4z5llG%2F2pc%2FLsigjPB675d6CwvGdyDIB5BFK22jmm8cYwfY%2BfEr5D0uokmdwpzKSDuRhBH4Zn2lKaNwl3if%2FvSyYZtQVj3FKfjm1VoUr%2BTOli8AmZcRgGIfuSbB%2F0DEjuh%2BLtHFje1y4eNvjZHw8UUX98Hbw5L%2Fh0wnejcxAY6pgHq7TMmgzjqlCyHZNm%2FnhCX2fOZEaH80eISjkKTtWGuziBRwTEpf%2BoqEDTAEs3Tgyh52hAkdjHabPWPlfr9uktLuYzwkikAksVPkfLZ1luh2Uh9y3RzVz69yw3wiBDoy3E5cHFsaTTMxZ4UG7E9FAGQ4Nz3TFVPMcxA9F55GlelhyP4uZRouJ9U4pixGsBZo3NUSf1uo2Fj5fe2AOwVCKDTFopXucZa&X-Amz-Signature=56f83dc93b1575e8335b242a2775e816bc6a36e8540b4cb3431493e504c6c0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3NG7Z7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBx5S32JXNt81tjSlcHgS8LTeUKOJfRtTe14xZTUJgQdAiEAhGH3EkFcA3npbgrMXZPLOJQBlhIGTCWWRnkqtRsQCRAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCFu2cECyW1b%2B9IZyrcA3kchgbagCbxN7xc2I9rFL%2FUcrzZmvIIaHYGh2TZtgij%2BYu3xy5NsJeq5JgcADxY9MuCSvCNCveuKjfM3pt3Quv3XsuyMA7%2B2U5JpD8HvKvV6pGqlgpsVOXZLtcVs9PC%2BSVuyZVJFgjj0euFCvxRWePCg%2F5LqSEN2RcXgIWxXfUDXU0ZjW%2FILAmw3VWGkOLAKE9NesjwnWHeObGszCB4jbW4gqBMY5DoyyWS6i32zGmzr%2FgxxTyP0Q%2FCys9leh5BR7UC9PRE17MBxjUM1HELLl8yny8K853PB1jJfF71RjFN7pTfkO1OtiVq1WKdTcqyyuQ8cVF1RTQmpbA7k7FXoRRUFi9fVPie%2BIo5BpAI3Rt1CRbjX7MTH08zcmLlVhFSaq9rYqOqUwuPfXgpU5K6qBOt5BfZ5nV0%2FCt5lT7iOwVNBqrIrnLBIbVvyMaO5GTSpqzwoe4wofKczfC8My2bhdpoh6%2FTM5bkf5%2B5N6nJ77SYrf%2FUR5CvFVT8id62%2FHnt3VWesLYThjBINPf0xw1nd00kpaCb3reWQqMWinueAytGg7CazyImG1wl5hqLrOgurhL95t5nYhscN6pED47%2FGVLklgp5iHSqr0%2BCXdxsAyT90HaZNSPjdAzArbZpMNLn3MQGOqUBrzclx5hlI1rPqHp6GfDkNuNlb69Vj6vvO7r4dihA2i%2BJeKa5uaGWtz88VyLRtlogMJfV9imAy2AZ4TzLjk3Fx%2FbJhpvC%2FUonXsRG11KRlnDSbw9JwQzfnaziHAaS6EWAfZ2ENE4rbzuawccK6U814YRee8MwNXD0B0ClVKkK%2BVotdAHcMd0fMYSQmqDBR8gNoWnI4ocDdqKKu7j%2Bi9dQI4sHImnz&X-Amz-Signature=47ccef5fd419d6fce32eddc140da176c262f3682095b6eafb86bb171ed6330f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=8cfe20cbbb398c46be7e7fb63cae7565405e06589c8fce2083460028d7694b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=ef9778c274626a95fe40dceef1f6fac0c58f1673452968e590f48f3df6521f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=fd52b3cac11679329c47da98514648333589b691eb70d9607b1ef020ca944b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=778683787a99e61cd853a6417c08059ce58582b4ec4e4fb534b0a12e7d66f1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=ea27e977ebfe01bd8afccc5e947174a9aa9d7d37168146b8631070cf73d78aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=7225352d3ac1b0d206bbc45bf7e401ed2bee363521fc192f5ce1c5785dd3c133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=35c063034979279e6c0d41b12ae90a39629fb18ee3ce7417804860cbb80f44b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=9362f715fad19d895dc893af746be8e94f390c551faa942aae79de8b6ad263fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=642a134bcdca6a1512b91babec585da0e4a31af8ebeeb885d8c5f485452b0ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
