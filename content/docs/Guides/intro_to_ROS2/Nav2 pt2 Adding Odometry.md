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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=2e9e6c0a7fb1b8207dbc1910c8d4601fea233ade9164b8394c0880508f9b3e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=f8ed9aca29da82500b6f2f897a6aa8593f17ab7299f8e47e23f9bbcc77b9de06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=2dc7a095c715fbf1c1b33f8dc71b2caeddc13b9065d3fe5236a88d145309d3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=742a26493edadc55bb4fb617815ad191995087623c908cd8471a0aa1be643144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=eedb28047680839604786f8b0384cdc09d0b31a42bf1ac733eb5df627170366d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=6e8eac32a262be45716225aa0bcbfa113fa688c20ac5f2145465eb97634842c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=bb3f3f9944ed2112ea7c738f29505906b0c370e03e2e52c95f80b272eeeef72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=905fee9020a818dba70a37a7e26cf7880786a2893f9cfe3b836933d25d3ab004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=0d0d9173ac8ff772d05896b1dc8b914a1ed37b8e7303397d10075b6138533f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQIUCQ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDViEDUISMHOtijwt0eImlV6kt0MIMzSDQfLLeyLXVq5AiEAl4heH4EDSad%2Fkb1QA5p9yr6l%2FkgSic6A5WG%2ByrdGzQ4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOyHCSW0h5b2ViFByrcA%2BcabXlCTWkymYS3%2BhqlUUszJ0vKFr5ohkS7uqcfsR%2BfvDBxZLUF0rVR74jYIjm4svbJ7L4NiL4CkbmmOYc5i8gxjMBypAtheCw%2F%2F0SrApscREjHcJ5uBVriV162Vdzh5aZOhJg7Ih3BUD8b46VVY7XbYViHgTxUJk%2BQt2sH41i2FokEFdbW%2BB95vEi%2BYIw4W%2Bf%2FD%2F8dxmhGBLOR1pTH5ymWzKuNTKUcBw8D9NqudpmJ3hB0OCYElv3AUZXU6vcf2IQJ9Rk6EBWbmIPmhCRX%2F7MvB0CGRwpgTo4MGTIHgJ3m7FDoH0VK7yRPMzQOHCqyj0Dpy04zCw%2B5JTVX5Sa0%2FtI1zYe4aMONr6%2FpV9nhMbE2aQTrCOmL5YWqYrlgECBxIJJY%2B7RGxs60DZw1qoX65aKDzOKYNVhCUueOK8DhuRUALlMQfdpxM4iEMtkUyWRbvWWXTEmS48RqDMDmtRnl40MEzMtiQFNCC6YndqcSg%2Bcnq2yt55BVKoligxyf4mesGIBlk1EI7wY96Sj76eHcBVma1wfKJy3yQp5SfGW2itZIYVmX%2FhFu7lupaowuusd3EXciZIeVS%2BFMCcLwJ2nnWzWc0f7wDpoOl7XRuzvmQrc2SE5Mg1haqSxIPJbmMIK318QGOqUBIqP6aKxng5NKQsUthtONRJNV2Mz5o9S4aFPplhxOgYEpWCEIK6FyY6yMTUHJvldOiEP7R%2FwYehsbk%2B8ldlCg5%2BVALtAa%2F86ExQNP8%2B6PMt9BLr%2BbGlH6SFaHm1d9NqFIDZoRf7%2Fnd%2B2TTSyS%2B8FDVkAwBtaJIzZQLmnmFjWx6rbFGuVcuDzAMZ0IvT%2BeUCpHWtOpisEiJ2TctwhKTv1gesHelYnl&X-Amz-Signature=ddbf52f8fca6cff9b7536a4b1989d770bd99fe40ebf32d708f41defb44133d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKS2WX5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMoC9MIv33jzJ8jfEtKZr%2FSO40VKSt3DKbfDeNAzqXVAIhAN1mjN0iSJB2FoLFq2gOA0AH4%2Bo3TNVQe9PU4yDPzR7SKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKZ9mCutKOf5CGcRIq3APYydvNeuHXnboFdoTDQ%2B36XRRgKtVqi4CkzVliKV7EsMpkxWH693%2Bebcgtw0O9kHOfMotgUcy%2FzcIQBePUTF8DzrkXvTuJMmX1FteNkAI1013ndNmCulVj46IF30fh7fmKPxyF5AOBPH1EFOCbo1UoxR8eMqnYdGuGvQn%2Bqe%2BDY5%2BniUlcJYA5qR3TBRXWpxLc450lzdEGD3x%2FIALmTT1JrWycNfnE0PJNv687M3Y%2FgqHsj8zbLLmFirjA86WpbMnorSB0cg5nHY6wAyCAOwDkquiWmu6jnNzclp%2Bv5e%2F3tB6YiBwT%2F8fFRBxc37al6ylkOa%2BqOi%2F2EQcVSG7im1xhir1l%2FFSC2MwnPWb%2Bh4Qb2M0wg8gkW%2BMqUSBm7nPqyOkkw%2Bse2NsTLBSXr%2F3a0BV5QfkvgjDe9VfLUbwrgpNm7cPfCskG1UlgeNjIg2FYktR5pBFjP03ubTv22kVmSYJ3q6Q7IkpcLqeA1E14sRZ6R147pVQ6j1PT5txNM25l9Dj1nHMs3PAPX2S9Lrogkmp7TPMUnbJOoeZ2ERbzf7G0t7r8%2F%2BQfTmTQCQ3T8SJMZFmdCJD6Gp1VkqncVoe22HnEJmtOCxQIQ5F1XCYI0NFAzU3cyHw6P6FQCx655DDTt9fEBjqkATWfWNSb6k64IGDwMWUTjB%2F2nUFAbD%2FhkqV%2B9T9knPkLPA%2B%2BM5qJ6k%2F2SXtz%2BvGcY1Zfpt0s9%2FLi8A8J7%2BumxiXUl2yx9CDu9j5UHm%2FYLeMdlks9468oiYvRtp3bAqocjruplaAx4MLK3wa6tYbQSrf%2BxnLrFREKxpWiwnx9hqOS4JmlUykugW5eTu63xZRIJAzTeY76wKmK8X7fwl2eAHVj316A&X-Amz-Signature=41349d238f276bd3532a346c85b8e6d54cb97fbffec7c6ea235ae9cddc207311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=e325b927c6dc57a87d4cb0d4d7b80604820ed898bf61e7c8b9574045c82afebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=66afa4785cc6a774989c48d22c3f8cf99e1c99399d04abefe89df3a8ff3baa43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=06f8dd14680bbc0c620ede46cd56bfa9e79ee83c85095aa60c0b59ea939159b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=2a94cbbb4c5ae337c3ce498388e23218d9481ea90f64cd48cbe0bdcfc2ea706d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=07ac3cb8e40e78b0bedcf19b39ad68f62cd9e555b183d9c9bf7eec47acae77d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=835899b148666a1657993853c3e9a987527af341719ba9428408d4f7ad6bb83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=a53571f215498c23c1f8c19628da19748de4e2093f1cdb9b20d502180d4e6dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=0ec8e7131e407e3ba09ffe556284c0475a99760395937f706b9f1c6145474421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4RDZLF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDoRqf6l4kOD2gSqM5xegO9t8cB8PronU5CFjszCRuEVgIgOJgWtrgZCByZrWG6zaMtLGamG0wojwdUI9dzRGT90rQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKIeKD%2BVwUK0SbhyrcA8kpb2OZGco8moRH6RsQKrvDTG1SSMZOam8oTSk4acHB2C%2F25bYNtInjlpoUV5jSxbOl9PIhjSLYsaHUJ78%2BPxZjZtDV9RYN1M7yGkSZ%2FPqhUVnJppAys2gRS6S2eJw%2Bc994kUEZPA2X7zAO2%2BfezlXSWfzBHyByKHoYhOJ5%2FK%2Bx5v7d637uRE68McRG2f8ACWeMx4Q37lfkLR5TQdVLsGdcvot4F9y8KWKzSu54boC9A5gjfyR2VcKoXdHxUJoSW205ChuoMOjEt5qUrLUgM3KSQO3OblRgCTGPi0Pi6GLSmeG7ToZPVSQGwnAn%2FeeDDmI0f9ZIoCwOa1lVF2uUmKZ224CXd%2BpwUwkXImY2dEXcKZQ%2B7Uf%2F%2F0XU8kjDu9Krv29lkZ7Z7d%2FMQhFMwYnCKLdqa%2FgzuPlTrnr9c3MuSCVXH74qurTIvPPjqWDbqR%2F7twK7QQdqfTd9%2F%2BkmCTk%2Bit%2BI4Xirm52mJDz3fCHmnhObjQvAcC68rIj7g0D5%2FgGABOIwbDY89s58Q%2BEgqYqJyvg%2FpdV9OuUd1f5KJ8uxaSe%2BES5vNFbxsk444kAnUVSDpj9E1z9ByacgbXQNA4aPdwWbdPU0lOvDM5XQnJi5EzWZCMgjAG7dDsIJLM7YMP2218QGOqUBxZqUi27H8gukxQMojXXRR6iWXh2x2zPTh1rJ6gXYQ%2Bq7IF%2BMC9ZAsJclR1Zfr7ry22sJklrwhMbsZhNQmg9DaBJOzN5qwqxUhGRSJdUnX%2BhU8UYbQB%2BXd1hiXNMEpbVpIhNn3PS8WVZ2wwv9m8H3YzQyGPyLJAonktTvccwql7jLBV%2BVhmmc%2BFvxlG%2FiGdyKNfytLPhv4odQIu4MT2I9DlcQO7%2Bw&X-Amz-Signature=08cef76299285049ae62d71fd83320c4773c4f40523a7b9f4f10c44de61ec1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
