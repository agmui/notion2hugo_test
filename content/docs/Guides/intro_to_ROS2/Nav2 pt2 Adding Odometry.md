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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=b5a5051933bb26e9ec4f2d0349122ad242267d136b45ede493af23a44105133a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=15f63ac091900f0903d7ac8a938404d0eba46462d100b933b84892d2138e295b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=197c99b764d3e2417967bf2f9a1dea037a4eb580bf549596106dc22ba6c1403a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=d682dcf81f85097a8af8a90cbb05a28c57e1afcd39b255b366d3ec616f345600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=ebb6d600801b25a3579af9d0ce8b576f87939450152dbe68fba40b1cafe4c1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=315515773d83ea4744b4b464d091d31c0910481aa8a8441ff9199454e7b51cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=907ef06a5edf7170e27c6be21ceaf9fedc253cebe248d3bc2cde05762b0a52b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=17fbbee1bf7e08c2fc2ce46bcd7cf8e30937134f50ae29bd6df92823fc37e810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=8f9f0c6fdff3f1f12017ebb39c601c0844a1d73d634d6e2776c1ddb66216ee78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP3IAOU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7uLWCwqnyoqLduk9Hpbq7Fl5JoNinAFNLZdIn%2B0o9wIgWK8DFsmKLV%2F3lqp2JqwTobe3I5dV6Vo2cAL%2BVhXRTYoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAonCpN81s2iRfytNCrcAyz8lpNOVMz7bUFKqxI8sV%2BhVLe%2BUbI31XyZ6vvos80xY9BCkGGWrCAsQSiE70V1w52ft9UjV%2BugPMl%2FQ2BNgADvOB0Tu1BINrfC3JX5E19S1CREzbjPJKw0Azp2OTLhPfD6OmTnI7BjmJndQGbA446SsDMiJoCMNAYNNPI96sWEHP45Qy24xfkz0DOi%2FnhWH7Y5hY4qFg77gMH%2FH2S%2BZzlPjMSSNoK%2BZxieY%2BaFCbauAyC1ToG3wciUA43wsCVfMOmfB8e%2BCuq%2BgZlWqW0XnO6slsbKX4Llucg9Ey9GZiZcxqZqG7HHO%2B3MBjuBlHRGg2bSJhsh8QtKiTbLSCOghU1v%2BzXEzadRddFD6bLTB7gkvT9aotuhHb37gdct5HhgGuv1%2FajhGtOxqFYMvGmKIb%2F%2Bho2xCSgFPCDPQSJ9G%2Bn1HHzqWs4S8rx5EHTKcWjt1RRADbidTbef8wOaAW37aSe0G52LNjfd6%2Fuw%2BKR7GQmh6PtRqFTsqXo8dCpovqA49qJwDAJks%2FZCmoZMzfevEdfgmRPMEeoMyLlR99p%2B1VJAtu%2BnZvo6IuDNh%2B7he3Et%2FvXYmwizETCoD24lvpyowOaBF%2Fjuh3cEpyUWHbaUsM4MmQJkjCYz0YZfjbGuMIao5tIGOqUBMeVN92QyzRDaqwxOzLev0fN6twisPAG3GUjBtt6IV1JenAY7hgRNZlFaRTR0CBGj0YvK%2BE8Wg4M68DWQYliZQa3uj65vHtxnjKlYIIO6CcZokW9iUJtqla%2BYFg25q%2FLdlnmyRedlr0fTQpZikfQZ7ULF9w1TQ6FRC%2ByWbRoXVx1VMqzMRifYeIDIanswOBv4Rwq8SiPcAuqD%2FXB0x0tKjS4YnWo2&X-Amz-Signature=73568cbea75715f70dadae3aaedbc886fcc5030a3cfea326e540bf3d6d3ba896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MUSSYT%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk4SS4uYYr1rO4j1yqoalwXkUGeguaJuSbu0bnE1IEmAIgVd8H753xRY47ewADvaP%2BeIn4I6r2NcPFQNOwBParxs4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFMsvVV%2FynPOpC%2FMRSrcA6T09OlHhMd6n9ID%2B%2F9OBwusRmFKJ6d1H91W1vT2qrMVLObql5DkY8CYUPpM9SSPTjk33v%2Faz8mCGKRtK0pmqcESz1VUxbcl8IzzSboxffrf5m%2FTOX%2BvLJbiEjmGecmHOjwJkn6OcS6ci2Am0bRW7oCK%2B5i2UD6lCWXGXFvNCye3cgjSsvEb5r%2BZh4Rc7CJ8QVzVYIZzA3O0PmDCONvP8%2F4KhrNk83JsxnD5wm6uCzbKqIyInLGZm2EuzrRdUkSYxQGqgi2chkZIX8ajDoXFnWjGdX%2FOvPi24xpSDmkXuvKJtr8LSrsye%2BPal%2BPlbC1uxxGYHIeqfvaetpcE%2B4WcYaJsrhJP%2B4jvGxb5zu81S5iJKTrXqk4AHx734tse8TeXqjWgzJB7TbZbMqIEpadLP8Az71UWZ4ROvoEGEZvcUbFezgbOJkS4xDpDo0bfYkZ2KybrGjIct5iQxw11vVP0%2BaS%2B17b%2F3%2Ftjr2ODGovhLsewG5MXy87hq%2B0Hacsb2xEztYmbGTa41eEs09mMl5iOCAGEPpuy2bz9eB16NCd52z3Ih6MGrRswxpHWBqRUcFhxrbIotSmx1sqcgSJYamNwaM3vDI5g3Mb9j16kDJiA3nGACUgaT3naPKeP0wYiMKXx5dIGOqUBa%2FRQ%2FXAHR6WZWqYzlUkPtlC3C%2FJxolSI1%2FfdCNBZhu5%2BQ9ANcOoGJ5JdsoauX5wP2U4UOZf3LIiWBv%2FigKl26y9IwvECJCb%2BeHdVWgLw4IuOCCgwpdoPqQ2lokDOcF9UL7YRGtQMJfXaBcaN%2FExrxj5DQ3Ur2D4Qj%2B6siunkSdk0K02J9FVsrsv9KaAw%2B4mnvCuNceZvNODR6n2ZVufuhfQ2aKsL&X-Amz-Signature=c633c938ad520881e7dd4212bc6588b0a2c4511c3f6f8c11728edfd55d880a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=8c1fa3ef3a0770df131a064509c9b61b41ff37a1fbc3e09861034b513227ef21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=88f3befb6d83ee02855184fd334fb7d0da2ec029e42b7ca0d4772dae254cc87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=e160a453919aa02e7f131fcd6931ff50d287137d68d8470b6816727df2f8c63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=cbb62b969638fca7e793116480838be596aefbfa5bc6e9059715b515406cb042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=0e29749b402e38a16adee8c0e9b0f012dfa19cf67f465e323a55cbd08776c6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=a26ba1e3d191872033bb43146174e6a9ee97fbe5489d42ce34c86c2599bb1306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=e06cfbc839c040081b1be342467de2b1d2f7945cf97a1927a828850c66d58f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=581c779989bfe8f276591cfa105527223cbc52d81e49061283edb3e6124d255e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CSK5OG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDsoaknCUsJXOtwQr5mSZyudytfYk%2B%2BhHSKTtSw4GEvAiAXcWPkgiQLqN2IpkrrIBngWTv2ng7v4%2BvUcQKx4osxYyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMrBNX6vl9aaXglzD2KtwDG6NvO9KRrFgqDnjM9njsZj2NfZY%2B2jrprJQPg5LuHSXGekaNQIqbS%2FwSbpWdSZEQ5Xq4uyYhJyxQk6zORKXCaGYciU0HphpO6cg0dln%2BkzRLADpiZ5g5rPLsvflMkj%2FRlAsy%2FZR%2Fx7wEVOCNZimKsyrtLqYccym1hUEKCDpq0Ji36%2Foo9EEg1vYzbqChAh0YKAN5UyoOdJURw%2FF0A40EsPhDikMKydPs7%2BiJgdfJRAYNl1BVntxC30EvF%2FGMyt4sq9VGwegigjaWBhCxY6Fe4eSKb7p2oCtXuuTjozJ7s3tkzkX6eNTNhkMZ8UeU8wVi23m7oVkdoZUhwwGOM8nzUmngMMiNq6vwGHkV5nfhPqjEsf1ZPBG8plCl%2Ber3ziJMHfsGV6xb%2Fnxy%2FCr6t2fLnmSAAlQtWd2G1InViOL2iQF%2BQiK29Nbe0HC0Amr%2FUBuB%2FbJt%2FF4l%2BcwW13JAmYswW%2Bd9LK72rA0gDVmV4gH%2FtQa8UiXDt%2F4bQm5YkRim28qF693e6JAvQZ6guL01w%2FrZwjzt%2FVpv1jJUlRTM9mnXdPsclYIuIKwnJOntMXZCwNeNL%2BEESyDpfCmBy8i%2F9R9SFm4N2j1RMVHD227dy%2FvvNLKbn01B%2Bc1so0z%2BrR8w7KXm0gY6pgE6eD28OBW0sURDrKN0WHsHMCHwifHlKJpDluQXc2LVTbkItd%2BrqJRM5XrVMrntuzfQdCijKZV1YLMyxIHxBjd0erUmnDOTVwfRQG%2F1vuZuQplp0M%2FSkqWHJeyLbTcV3e9NSjMt8xMg5i%2F%2FGOw8xfAtdAWj24%2F9IYGnywFXe6yPsmVmAGmYvgE1tn28u2TZQ0AyEpNpshtYX1sovOUgWF0Ord4DrPOx&X-Amz-Signature=ad0d7adc2ab22458a51456e9523fe18e086912debb9c52a0b04948bd2e5aa226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
