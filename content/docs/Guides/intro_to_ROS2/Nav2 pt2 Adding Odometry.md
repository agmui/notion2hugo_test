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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=a07169033c67aee3301a740aade3a1d88fbe057d1ed87ed9f3fea8f3a479801f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=9422ec72005c47029047b29451c322868d2c91a0160cd5873cb8dca530c65d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=94726344fb84c1ca50be5d04d30bf063681b158e8553f949f501b70204af4b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=db61461de17561c318decdacfed884ca4033e5af880c0aa88244d363695e34bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=c687d441bf462f37c47167bd9392593a0d886fb7c3497c574591dd688c764151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=d7ecec0dfabeb319c4dce0672e294a9eb5dc3c76634329c089791e479186afbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=70eefce66d6494e1ea0599d7195eda1483938f70c511b914cf4a5cd4f0005a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=7abd93d3fd9ce2ee994b4cf2d32e9b51f146f3d05c99eb75edfc0663cc9ce718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=683c4a26c761ff2b2f4d83a6ea360a71c66eb39af308a5d128a1e129be51673d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHFU6XD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH5sYWZL4qGfMT2nxACTxjn5ZDmXjdxWRblL9baY8fhjAiEA3mOO8ELYfQFlIBKV7mcAwcxmGkBqp2aY59I7Nl1X2Zwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA7wFLxAsOwbojAowyrcA5zD6YSlb33QbnYtJNNMaNqJxQDoXMhpLqkVKGeXPbBAFKkZ3W5nMkEtAo6F2FNYawSKeyYczqGacLc42%2BfM7voHw5I5Zog35quN4wogU0XX4z6W4O6B%2FDAI4Mg3PY5z94pDUERI1eufTRhkZD8lG9B1llNZh5%2B0hcLoL98GfqV570wH7vzyoSu%2F2h9r49AVtifdWgMGuTEpPcUrVSWW64KtYo3%2FSeX%2FLc1C7yUuC2D7u%2FAkpa8erPk%2FlKZAYnBGwpVvBp6KgTAx8AuxfR8SyG%2FHIZ7BFsRl%2FIquPgi6XoftaUJdyTHFR8WcM%2B9kfSyQZwaHwvg%2F6HpFt%2Br79dDnD%2BczQ84UP0sVgVC326cQqEfvTDupKWkZa%2Bf7%2BUAWlUR9bP%2BIJb%2F16rU54oOfXkHJdiMqfDThs95VIuqR7iDGbo9MRXPBhj4zg9b5F7SkQ03CAs5NX1eFmqJDOLc4kOt7Rws3N%2BZaz8F9ec7ckC5IjvDVTJYwfOpzJsR7sfeGZ94XCyVxa%2B8XY9n5I24c%2BlWds1VeJYub%2FwLpu4dhSaUu2sumsTFD3muIZkEyZQiYznYxGldqzUNrvW4lUrtE0eeKZWrYbEbS2VHfRei6V%2Fok4VQQN%2BF2eZ59AVBWUJ8EMML0xMQGOqUBTJtiNuYpVnW21T49HfDltl2F3lR5Pky3Ub8dQsLFMHYoiqFK%2FbCUWyCe4%2BwqcK7HjlscRnATVr3z69CaA9vynICkedu9tITjfz9rmcW3F%2FqWD0Zc2KHMMAahMzOli9jcDz43BVup4vVuI7VsajUEz7VH0uz8OqHePUft9AWlSYZN49yHMyeLgFE9GAz1mrO24kXONvYHbQwUjgDXCxQPD135zvMI&X-Amz-Signature=1e714def37703a80939ad202419db4b84034a9e485f66b450d945a36b164fa51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG3YOMBO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBM3D6oFWWfBhu1VnSO9mP6CgwZzjsgFdnivBp7gbAntAiBUNz5f88iLcrxSj7HUodgaGEFlx%2FYG8fWgF%2FZen3UEryr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMLN5jH1Lv%2F4FHJ2D5KtwDkXoilOa7MMfC68GtqYR8yz25TEJ9DP5gKQ%2B%2BETyv6914FugwDe8qGzJLSP%2BJeLGK%2B7fflIOrKwbB09zwPPPFvAIoBDpCdxRhNKG1LP7QiBFr1JxCY4h2qTLmb%2B%2FTsqYbr%2FVqKd4ZkvKhbwFZUyMWt7jfcFVWgUW%2BFN6zdwGbYi69TY1fEQICHnQK481Viz30g8W%2BRn9EglxZVv%2FyHvaZFXOSc2FtNKtpWeB2tTgglgjpGFzWPPiI4W%2FbVZ0P0QUUXDXXJKIZCO%2BBPTYlGx8y5uqiWq02r7N2VWhaK%2Bp9urTIPJKHE8b0m3bDxtehPabBj6fzqFdWr1MFP7Dyau3uS%2BSGP2XqDNa8fvere116SPccIGkJvTUu%2B6oXaIRIE7BAoWG7MWTpwMxFmTYgTNHTUgW5jr9QtWlQpYeljHyUxoKA9puQdBXa5zdqurvjRrX1fKniuC0IWwFbgGielRI6x1fHzjDWdMk7JAEU3wLt2xelwmeDu9LSj7U88PrmuO774OVcSzoyJn9QFZ3SWseeEBiHH36v%2FKegsTA01MCFZBZk3FHRjrffMXOPi2VgtVFpcufAcHiv5cyAq6Bsc9EYKxV5GJ7ZqFZ27sIrqCZcSxRygzXRnPOdDGjUXggw4PTExAY6pgEVbUnMMi%2BMemvpLXQQqudGVlNqrbQRjdFSSoEUKFII8YoE00ZMkWVkT7wiogF2emig%2Fzhd%2FEM5CQCz%2BGKXXmqIhjRUDyVHXIg65IHIig83%2BS09bfRDZCV54GVl4e%2FAN0TERmsAEwCapRGmsr4M6SDjmD%2BKuNmyLa15UfSnvrXSrBJNgFSP0V8CDjXGpgnWXIf36m0pAblDyjPdEH3ZtsMeRetPKHyG&X-Amz-Signature=07501e8c2e0c742f7ab59ea5286cc09f425b370c303a4793f09a84cfb8b66d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=70b88a1eeee72433ac637cce22319c039b8d45fea7b511e2196fad1f9e5913ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=fe25e984c84565e8917a8999346cc704e2889beb26bd9b3ee56e8cb2ee83ea5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=59261899312acfc33c6391689f39136d0733548cdb6a692adfd836cbbafd60ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=a66e32aae2f2b212c5268d7f7fb81ac7cd95e9b23561f42b5f5ac502bd73f78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=233652e8a6748d5efb2097a166e4f53948059c5bab5b5f0f9712c4e4ca916bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=0e54c2411bfb9732333017841cc07d3c2803cb576f81c17a6be3553ba48733c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=99c834a6e588f9d47c8a46efc65e3939befec98066e17e2702048c0e7e95e79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=876eb9a08361fbe8556d8fecd3d705473b328236d1ee20d206bcd12af6711df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRN3S5N5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoDf%2Bc0JkUbgZ2Pcyi%2B0vwrcNHYYPiiS4BHWRuMBaLUAiAaBi2NYyl8WIN8JbEpDHnttTbKyf9W5qRBbFm7ZQW1zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUVV4PKDU1Ye0YisuKtwDxjCme6E%2FZV6lINzfWmOlgQvDgRdxabSvN8SiDs%2B4TyhAjs1Lgr40jDVHfhyo6Y2AXo%2FAPetlhRG4E6xcE4qa9PBZBcT027C0rwW7yciHE8IUOBVv7dObTWTUyy2NdLv0bb7nXBxacjgXDkCFno9xtFdf4wqJ2fotZEMRA5FvuYshAmi%2Fx%2Fcc%2B7PWog4keo6n60Zf2Gs%2FAVH%2BIeImUoWbTwPUEHPYS9fx0fc9YQCJQAGt%2B7XjqUD8hgsxK7ptsMeTPgacGHNjLFt%2B3uaNkwywwQLuUckI1uRXpzViH0L3O%2FC5tHvPd8%2FpuBHhH5OvEppyjJULXQuklv0qx3jS2EclTIIXqOWqbqWWTQdYSfWveN1GaUxmbRo9Vk9%2B48l97EQez2NvEJ4YD0j1zGwOQNYxt%2FqGtsCuQp1%2FnQbi%2F5xyId%2BN8gn1%2FjjzjG4R%2FrdGTobp4faoTIp2ux2UEZKEe9iQjG2zYPdKsU7%2By5OMb6q3KBbtBj2VdpxaBtxgfaGDlwGQoYnwdYbnve6hQP8B1gOutuItrTvODdRBut51BTtAK7QcTm1yhuJq6J%2FAI4R9h4cIVqEhE%2Bz3Nz3%2FI1pFpSuCj2mBWG8vV8X0rWWz7osuzU1%2FR0kqYQ3VpcYW9DEw5PPExAY6pgH%2BcN510S17%2FfFthYLD6%2BrnaGfoxaRZxbFIdzy4%2Fr0bfuFRboDAWer%2BVF5zORdrq%2FldUPiRmTqNdwAUAoQ9oikXHOlJTJEnduhrcQ%2FklfOs249uascabPkp4a9IIqUFK7CB9fMKRXfhV8vo8rlch9PWwMy2sBhy4g8JZGPPxC6%2FmW2NRFPLlhYqVkoTly323YnmI5WJ8ZrIq7T7OUoyIVLbjDg7ejyv&X-Amz-Signature=ce896c293505dc2437b2212c0f0af3efb286756a1c54841fed7a43ef3cdbf362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
