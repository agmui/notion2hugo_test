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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=dd6dd9f0fcc9048d7cc81ccb279c7af74175d063eae1b90ce3924cf0f0c8ad3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=577410d87c7efb394cc508983c350e45f4eaf9181983d34c157a613372ee5334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=719ec5b35b7182dcf7c7358fbabf08f2397945568c8ab4d33d5d84e653666635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=758892bc2e40f656315987298bc685051cb81084e2c4b32f724edc6b1450d9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=6648118d05df8b206895b4d4017ed8b56ee362606fd7cf4c3b03d49c224cb82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=5006f9592ed978134b2528e30bad3be1bf8419b388aef064f7ec2d1fdd0022e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=1885660eae558e63099cd1d3f50aa9e33a5917f8722528c4b5a7a7a61f4700b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=0d869aba4f56e11d157ab5f3c647fa2faee16a4569912971760dd9ca0f267be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=9bdd2d7bf2cb0c7439225d4e47af186ebb84d89d5e877f6742ef2fb0b6a58efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65P34DJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwAmlYpj550foKH1BtOhhPX2L5w7v8paZzrWECWxaLGAIhALAyhlmheydL1J7VqPwXbQwT51Ji%2F%2BOJ3UCnPDU1p7Y4KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJw7j25v9B%2FK71TqMq3AOZXu7EUwmN6pdC4iPoWoxWyu40pRgisSd26DApR6hwzYWgJAJ0kH2%2BMp1oUyr4qY3oGLDTJzt%2BP0rTdKhIzzYUQJCByxEb5njHlrDu0w9TGCfI4Tmkz%2F%2BfMLIxayo31N7rfOLM%2FIaIKjJZ6TpsXLY6Qv49kJOtQKnNmFwOMXFCkNKKZFnRK6rDvW%2B7A5AJz7vxrmp65VAOM5swNcp6Lk6oLoU82vnXAeykm3jEZ6ACr08Kt8m2Wmmanc3FG2OqTC5cUlBzL5vARSEsi%2F1lQGUUU%2FIBvzmFiiythKzLYn1toixzoDnNOg5q9PbDgK6VsNjsaUT7U5wMi178Y8vyLu21YYL21yc7WSwmz2FqpUiVGI10xeJDQpHby5x1FdUJ6%2BFHLflH84yD3BVLPff4xFJb5gJzsAQX2YEQykxQdOV%2BetPQdXnJi0QMIEw6lyJlhgabzjrpIUlF%2F5w%2FlXMKceryLhYZj3LbKF0eL%2FgZ8cmn02wDJ3B%2FUftIpLDetG%2FTcIY25ZuQRADrsY%2BdggENksEtryA9uTx0PsIx2rV7zeR24meivHWQoB3viF8p8u5pd5tPtibFCSFzJWq7Pn%2BI6I6VdUDp4vgnIVN5nv3NmzaQypHrszuTAo3HpK43SjDU6tjEBjqkAerl9hF2buCg3DsJE%2FUUwPqccN5T7xzeCFmiIVs1Nd5wZLENVkcfSA%2BOajsQrBFa0AYVN7ehK8tTzgCZCkVK2VsyOem%2FrIv8COdYI%2Bah1N9qDZRjDzHPvxYARNf0UfAJbQH33yNQ3lReP%2Btkx%2FqMbVZ7fFOpTLqwn0IvuPUZkzB0MOEzliNs%2BBwbXYz29uhY0uUKlyj1s7aCvzQow4Irh2ct5aTh&X-Amz-Signature=a0a0f09c02b60d72c4a3116ef4ec02ec0dac5d190e1f0496da767f8d147367bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTV4FQB2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCA9oJ73awU1Lw%2BRxF3S8pGO4bGo58LKSgJCLR38vEn9wIhALr8cCFNaYjy3%2BxsROQpGL7EM%2FQGVIfmWS5g3U1HQGO%2FKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymEHsYEYgkaEDPvW0q3AOTxqC1ShNWyJrx%2FZmf4MRFbHu%2BHJk60F790Ah6Lbk%2Fmr0dc3PV2tWCSafMQOA9tnQw9dI9LjzUVYXenyfmqx0oV%2B9L4cTo7yrP%2B2N1AKLlswHuqlw78vtJoasNqtF92R9sPqaezAmEfp94Sq%2FOgib6ierMNBrUAmZSA8pDwwk3Ivkv%2F4cFx6LnIc462QUoo43oEGb5c1OtLzwXQPMH2LSYab8P3K7MvmqMV%2Fhn1or%2BxSmCPC2rs2zUsbqIEu1uz23px6En9MaHIEdRBABkjOUBFocF9KXsbO3gS7%2BSNxA0gDqdclCN3OcPK2NreEJKTRhFzOOr9%2BNORmJOoI7o5GNVEyctuFByMKMu%2F3ISLuvJ%2Fzh4bKDjd%2Fp8ySvk0L%2BYPddjPEfyJYtUv%2FB4y9mm%2FIVyY%2FmhfkPUkdx%2FbAAcBftzDotiBqH8NORIRjqK7B8V%2BNw6DvkzjrPglZGYI1BQ8Oq0T7qAXJVZ8Jw9nKXkMZybOFdMiklwlbcviXK0ZaVw2XzxXRMza5INm072xiITJTVFe2Pq5is1v8vRV8M6iC8EUsnJ2N7g0QivrE3ISPZH8I1sIIZXTikoPMPQvM87FDwyKc35J%2FNPaLSnCsq1XEfjcTPoKrkj9z7shO185zD%2B6tjEBjqkAed70rXpXAGBf%2BgNz7zKRI%2BI4dMHYM3TT3WS1c%2BtTLxkE2EP%2BAWfHeNHvZ%2FxYTu8OGXdDgOmG6dbtx7ryVgcPKdemvRzSUloGgfsqgy07Ok2uh19Lc3FqDt5yeq5kqxOmh0GzifHWIaV1g1XdHcxJNA2S6TA3UPGVqmAfyZanqo9IEfDaZkHEiMtoyeX4jdYCHRrnlQv2USAS7YonPQtT2FiT4RH&X-Amz-Signature=67d3aea11c947471a59f30432e69d83c701054c2879ec518b152cee142c01bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=3c079954e74f94f86036b9dd8ed878d891bc1fc458fb895735621262656330e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=31fdcace2574f27694331889c2c010194a94aa03f8d788535bba1c465d238b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=ce6ffbcdb983197195cc50bdc830bd7a51071b0a0f866ec9e7c2910bbfeaa944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=d1e34df26b829230734852474fd29c62402ba39323e64f7380a04eb64feb30d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=32b3336c44ea87579ec6c4144e408c3a14ab42248cd259737d350e885e4e16eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=1df2740931f2a60cf7ecbb18b96db5eb17c918f693628753683726413ede98ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=ae622396ed20cbac57ed3a7bace3214c29a94db7b2c072d9df3275f54d89dd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=aedb6473d3ecc15cd39f8940aaaef7fa121bac536fd892939008c208087280a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6ZDF3F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHwQDP1TLKzHmwVrm6Xnq8TNJc4nzyqv86btF4z3Jd25AiA2aMxGu9inx0hbsQltNJSZRIX3O1H8uOLep8wt3PkyASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3Ps6H7M4UAnOvM6KtwD9OtKfEBC43YrPpXfo0Uk5AFq2bu13wHFJtbnEyAoF6vKajIPCuE9G8ctC0%2BwSnHgeBMVxV5ZCFzN6uhGz2uUg0Ix1uOLvxB0UoUvn%2FU7DfQoI3KWuQcsE6gAvRFVHq8m1OPgQK%2BERXWhsNX2Bl6m0D0zT9xbJXQxZdB9ZGmRe9LJGSFipRZ6YnlmdNkLZgrG14E6D9RR3FI6C7tSO7suMGWZ%2BlsFov30swI%2FQgQe4sCZ5K9GeiVFeiIGNLqW6VBC6Qn1%2FWabMQbDUVFKIxL0D1vsBuVRGzgc6vafLLexyWNB%2Bl29ewXbjmOrr5jVYOKbzGO9NONPgy82VEi6QM4Ood2TQ5Ki0Rqhgj38qdvXPPJtlpqlOa5qFwgAet04WOtl0kFuKU4Xdm4t%2Bu7lzanyYFgmY8SNkeso2rG%2F6URIVUWju8n9vx6xen53z%2Foc16hq4l80soR9RzjVa01t1LXrmOWfj6MjnB0gexzPxXEfprCUDgYUztG4j1ZyNI7DXexI6xfJ71DuHGBE6MIppneOX%2BrIVvAFSOp3RcHLgwapRlEPvRSHFWbU6x4xD9QsAaoQxH2iHsxYNgSOAsZB364xJOqnjQKUd8PYFw18aZamRgCyi6Zhbp4rWuxnGi4wverYxAY6pgGsr9VbKPRq7Q%2Fx2%2BB%2Bj02svc1XXilDqUbPKImLlwrShXfskgR3kKkGX%2FAvKjVuQvpcPODB3%2FgLZpKWA6qRAyMHduU%2BApMj%2FcP6XEjwGXKt1x8y%2BRjc47QIwq8DO8pVvTlJFyNjXdVmUB6y5jmIbOdz%2Fv5ubqRMZgfU8okkyy8C0OXNHqVmczFWPfM4dGVP%2B6qdeS2D1DNMnHWjDWjGib9Ybt8MFT2f&X-Amz-Signature=be0f7d3653497f0353bdf0dd9763b9451a6317b98985a203289835b29de0596d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
