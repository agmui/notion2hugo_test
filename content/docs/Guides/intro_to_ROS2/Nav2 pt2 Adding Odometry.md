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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=280560ae9e56dbfcf9a337c917637fd0efa3b30c516654abdee0ca33061b83e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=d7b9cd9d9253223670305c51b9cf55af4ea59928ad27c552dba07e4a5a45f2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=7edd071cbd0b881505f7797c698e8634263fba4f74e667eb06d2f0223a58917d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=5b00c1ff972122558eeea4a33d4e33872f739a91467750f4245157e496bccea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=fb1fdb226cd8ce7df754f64e8254c726313e472c1589aefe42af52e5a311b0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=a70b3db8ef34ff4e1cfb2c5f9967df29c7ddee21f4c2c70db5b1d788ae541e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=76ab1797a92b1e476dfdd49494a65ff5d38c0dfb50fd5c56b8541c10c3e7f215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=de600e3b92556eacc92b54e4db1532b48e6f2c6cea967686068fe3b12d4f1298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=c581456f7e4adde9ac7ee7e24a6fe0f72bcd8ce54b7e85ea048c43ce5e4ed920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3QVUVOI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDSahVxQ0i0z7JKu7nOp8S7EjRRS%2BsySDmA5CEc70Y6NgIgUMe%2B57joiQBrZWEiFKLFqq1SyR%2Ftr1Z5PsXHqHDVtHkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJ95%2BqbjPr08GF1jyrcAzF%2FcEVPIq67AgCWlD9ESmJqRv5tX2Qzy8MzmWnzOP%2BuC2dPs%2Biz63N4AKTL7VV4wnymeN0umVtjg%2FzLvkdqUQ6IfB%2Fn8m1qEzW%2BP3vV2OLlM0kbWiN5TdHDPE0ehdtfQwzQvcRxKoGsJ4dZ8OtfLk3YzYoZvL1XS6xl7KMHfCcjSkYFY0cpZb9d32SVu8VspHuO1Y1WJt5Y9jhiDvbZwZOR9jcm7mz87xUCByNU9b5jLEp3iIbwDsSaTfcf52aFbFZYxEIPqI4SUPzQ5ET%2FBajXmguQipXdVQ6MNKwl9dvFZLfZ%2FGaLd%2FdTH7CV0KZeptXpcC6EZCIYKZdZ2bEzlXtvQo%2Fjt3JPzC5Iz8zO1LqRwYXsiQ%2FRWzGYRvq6nlOti4mZzOrDy3kWv4JOOzf7Rg%2Bn4i7cQX%2Fj38z9bYfJzG6pet6TSRM7GqYhkY%2FHrZZ0DqIDUoCYCcCGel4dLZxjl68HBNhWBr4aEWe1ituWauKkkzRujdenHoMQH3P%2FLUZbl4TUnD%2B14fP%2Bg2BrvkzgdgekAmX67zeoYI%2FKfJgAZaXc4GTK4B2k6RHzaoAR9nKhWqPp0UtC93rO78YrtfC7Fd4fzguXgi0XYrnek00uHkRH7edNMPIsIVNTaRPfMLb8ncQGOqUBEjsu0msnkIYU%2Fw%2B7krFW7n09%2FzTBNihas2l3npWT5rPoNP4fvUfUM93306dZGk3LR8QGbEAc2zU38EWiFXv5omaN06siTNfHl1y2SaIaiN2HgQV06e%2Bk4%2BMMGV0ooWyt40bL%2FLRNQsWBgcuNH0ToO7JqDIjs0u0Qy90VpJyNWv1VJ%2FtxcI5UFrcTC0uRhbatPQ9b%2BjEF2T%2By5r3rdCKlvD5917nS&X-Amz-Signature=68a4a0f2bcf2b64facb3cb589879174145c91d0b95ea223be39afa7bd8e7bdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42UBZWE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCS%2FmEhv78rdeQBfi8B9aAjvzWwaFvoAVQSgfJLTPIuTgIgdfD6EAbS3OShmmfycU9hRdemneiOkTsnpU%2BDXbVGDgUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMHA7H0PNPH5VV%2FQyrcA0sUfNNvFwxshQkj7vT8dyqKCiA9riTEaa1X3Dz5C9aurU3nX0BjRhp%2BlBH1X4L4grtwf9FVtv%2FgghXofkhN4YgPMCp13jbMAZ643N8XNXKntUCEFUbsGzHHcFUKxURESGwtPXLCnGpkDAjM%2FocXSIh0a%2BGaJzHBCBJ8VmIYop73ECFkgdrBgn7j6lVut8zNCLH%2Bf%2FNyVW1utkd1K4mKLigwg%2FvVTQFijBoZnoOhAarYQqg4Mu9eXDilEf%2Bj72DfwLlxbP413F8lm4ZaFs4W4qTSAEPKJhToZBa7v3SiYzrXk0LfjLmSb7fVIQTS4qavwn3%2F9W%2BclnjI%2BLYcXBPHHjfXAhdphKa1b4i9DVkhIG10Wpy4M%2FwVQXWV%2F6DunetoBQ5zJkQAJE5uNEhJfQeV96Ye3gRkOfatxItU80%2BwgcBuHs12Hc2rjHwzmwNsGk6sdftw34Ci0sLChiJrbJXDYJhLW7qbh7UaKtmRsX%2F52J9Ab1o%2BnfWbTWyFExeXTFek%2FB8jUb34aALMqWq3X0PU8UTuYxr5LOPOt6px%2FdfVf6nNO9zDiN3OfkdSQ6DqxA3IleErER%2BJd7K68edRnL7zJudY87LFzMF2QyzpIQWBdFWnzl70f7SHnMy9b%2F3KMIX7ncQGOqUBgWSwYDdMF2Mef7wSH%2BqumdK1JdTkMjsOgjGos1hv7j7fHyXTRcsSNXvlJPk2HHUx2u2JEKpBV1yyjJVSilM1UQIeVdhtNPMv2Rojj7P9GxfeJEL9ZdBzwsFordL%2FQPhBsaYcRdzK2AXJrXp94APKCkSJX7Y6xI83z6iFg69r4y5kMP8Ug0BjaG%2F%2FZeNlLwYsYbm4Hc5sDQkgbFs9zXi3TNvA7Pxd&X-Amz-Signature=a1048f05ae5930036ed99248e7af2bb3d575b4392f5d00955471dc7fac0259ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=c53207cf9a24d890572dede26f0b29de66d064a5611c70cbe25be7fc2bde640d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=c32318bbdcd74f166fc406f80401960c6f59ccddb898eec22b3a69eab00df3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=62b7bd14d79d8c9e4c49c7f22f7ef2abd1ddfd1e85626021cb67691d5e2dd426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=db863f2ebf39dae7e82760997153229e4a8ff2682851d6b6da8a4b0f7b887ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=5aa1a162ede5b82caf23dae8495b4a4f709e967220bbd0000c912eb1d7e9a10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=effbb14fd6c336cf4e84480375305461ae4f4a51bb194d6a1c78080b9697b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAN6RYUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICSb3S13iJ9kTsD%2Fnd2pZKCIr2PKmU%2BI9JEBR9%2FIuzl4AiEAwN3oHd3qAUwe%2FAdXcEAuX5Uzou4ut8WxoRs1kyCVLMgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPahyj3q0xcdtG7EPyrcA%2Btffu9u1E5gRK%2FnxlbUaOXuW5WDUWogTLQbbQdFOaWQ%2B5%2BaYbINhm2YfwmR3lSfZqlZTwXiN5V4X6tKit9iEYe0nuZWPbGk8QF1pgucXzoXwIG3OjptSA69%2FpuzczJT95ba5M%2BZepgcx9CImaaMhIXOMoHtJCWfNOruHptoNFLZHA3bPwBwsXbJCS4Cgh6uy5igTlVRFG2C4Lrs2RWNxQwxxyTEBnbILeWNt9asnx1ddeAmo3I%2F7ExKdGWY%2F6qoxOFcm41A650SXTMwoAH%2FzNxQntEbhafaQnN0ZJBYijDI7aSlNZEF3dXhJn1nBFkdz7aMLvT4wgPO9KZzqk0BWkzrTORTdEJNcnyCIiJCOdqeiyAHnuj%2F2zwMNWM6atT%2BzgvKqUVEcBbJhs3E1fjIgIX7VvsmhToMCOAAsBaZwLP7G7YZVYVHlc55yuxzRT4uHBDhQq9cqRb3BfTIx%2F3rUEX9C6AycjSJl935141Szjh7QLuH4GW42Xc%2FXtDVOqvwuRbH9cdMSz57XOS3FGIj11V8b7hawgKt4NPTuT3iBDjx3xQe8HZsn4C8umbG%2BLL8XQxKr6UsjI7G%2BoHLrS67KraGBRM08Ql0PRjssHqhMAjL5WHuIeagiiKkknn6MKminsQGOqUB0lQqk5hl%2FuxmDX7YKqxrGtpAPu%2FDkliITt%2Bc0yExJXGimEdnv6TKJke5Z0H2DFwN1NQlWNSt7aY5Z8xA3LuwKJmg1g1goioLoWH938tKS0A5kuXOBQ0di4sufkTIzDDzyvh%2FAgVK09%2B%2FeCTLsU7ATYb0nNcbfDSI4rUWesySBKBqz7Rku8t3cet2GiYAEezEN7TGh4HWIEGT47VVXKTmeYe7zG0U&X-Amz-Signature=47a9a4162c927037b532ea729590393fb886ff3c3f229be885be03aca65bec53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
