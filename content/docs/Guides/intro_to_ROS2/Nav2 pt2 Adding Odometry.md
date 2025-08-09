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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=72eaa6e9f9fe4989cb59af28992fce470f0d0d5715fa324d44b3e30770fb8361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=065187b732b0c075e2539d3cb048ec69d51aebaf0ad539eaead2d426190a6719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=997c91f885890cdd7ebee31fbd5a9dababf2498c5fbc5262957b9f7b9ab746ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=42a1800184451020058c866cdb26d60f04d2a93d2b819f07ca1470ef20da08a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=ff480ead3785c7ed5047b9af16e891b27f3521e1bf10a41348e5dd34c8bfacdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=ca84aba5b82c0e79de38892ef613b83d0f3058c83285ac4a83f8c867acea1463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=5c1acd32cdbe958c79d8b9bb9511d35a8b99d8aad74279dcdfab6d794d13296d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=68e244d3cb8459597389f311d4d50744c4ab043cfcb0c433ef8ce15cfcc01644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=ce1ac5ec37cc51d54527aac2a3544cae6af1453caca9009f6aa449e87d4b1148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCTLKHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW8iwoB1YrxPkmz2wCX1wVtZkt1GGSIG4prCvWGlXaxAiEA%2BBpcmxxzf78U9RPsQaT9PYOxAh4cYz0T54H5XoqWK9AqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BYJH92rLF27%2F5zircAz4xSsfYwTtUMLQT950VGEw0WbU9Z%2Be0tV0A%2BCsXqcxAjkXfB%2FDMhcxc%2BvWNKd4so7Rcjz0XHLDgKxuAst9xm%2Bcnn5Gm4UM%2Fh2RtDuNuQLX4159wHMWJhV%2Brt1%2BhCqpFr46LT2sGCKe3Ekhhd%2FyZpQP8mzBbjg6t9q4pPpiO6j7izD16yWtC5IhZO9avoTLdosAvenBF7holyTVNBRz2pUYYKpoDAq6UhXv7wRJkVoWKWjVKJ9nJGOrW8VEgE%2BwPA1DM4mPPUK27uOXbBmhuHJTKg7ukPjJGpFLHxWEoA6TlMU1vrOW74OGeq%2FBnjrqVcH%2Fuv6Po2qHA5vIPidS0L3g2RuPNcn8tnQpN5L9RfJMz8m2O4Ipx6xNIbPUi5gCsU4z4et2sQl78OvNN9aJukSKGxAAqVcj8TnZ2vXzNGklslynBp2eZ6Br1z2ch4KefTCUyvBDt87qf4hQNeUZynv4JPqD0QWVXfWh0qo4VWdCA9%2F9cmmMR%2F1DqoiOxgmHh6bvCtDnnmsK7DyMP6tZacGuLT%2FH6d9Vs1X5%2BuepUklQB762G0jFO1YdXBUNychKVeqxsdjSDNxBnqrnCcZ%2BNO2MN8NZ9JCs%2FWH8cqUk0xIzNbbPaix%2B5FzlUN5IXMPiD3sQGOqUBdGs%2F%2BblmGUK8diMGU9gbLrxn%2BA6TltJC6%2FbDWK9fLrD2gIyyzNGCTBEv%2BRA2dxXmLXSG%2FC9amYQxOhtWI%2BHkg3yBh5u%2Fe7NT6%2BNCVZGs%2F1P3Yh9PUlgXZlB%2FMmX42J6yn%2FzikHPsSA3KPo0f1Gsf1DLHwyDN88uXiPj9onW69VA809uoLN%2BXOUp4OktKMqGfRD9DP8AsxepBMOLRRH5fvuO1iAcU&X-Amz-Signature=370637b4515117765544c8ce0ccd70ca1235203f959a1705a140183e305fc15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAN4EOM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3UiXt%2BN2i%2FssL7RZ%2BQWDvwb9jvHmfEdnGNqNNVVBIIQIhAK1ssT0WBSAa8YW5mzWlMW0WoWYTM676Ks5qz9Uwu9v1KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNOAWs2RQ6lJ0T88gq3APDZaCzioJeNBXT21IV7YxwSXJ7869t9SgEMUTzDYE3KSVT35gFOL9zmdUtN%2F0D2%2BiyM9MltlxQ18Z2s%2B2uPycO2tQWhTTNdQu38caIRiK92N8dJ0BWgDU4L%2B72dBJOidRNBUR86685iZztehB5waKvkmjSwSSKh4Tg4xTr5wsCfDKZHBp0hB5pVkf0uvpdjlANU6suigjetB4jRdfVf8QHk5JDxZClyu9xWmBJt5%2BLKWtpMfkqQU%2Bex2jcYWbBAM%2BHFMqbvlsPql4XZGOH07hWVyuTsXHsqFYHhD0BAzuhYYtXhhmCoDtxjcHJQUAIr1mRbUkfZRulIkd%2BUFT6%2FKPqtppwSP456f%2BSRzNHLRKHDl2NaupllkVVqa9SNuxuR5pOz0XKev%2Fev95VxxtVBBFIELQt2inySOubEg2AC%2BZ32nveBjt26oeZAvG5LQXEx09OyL65smSQXF8seqxvQUWdp2Z0uR%2BuD6pprQUMYApaJg%2FhSUuFgAi3UoRhfw2QW%2BivPS6EoGwiTQNuqyIYDLf1Xkrb2679%2FsyMwmyfSden3a2Gntx4AIUkJiESb1GOe41Z0UHKNr%2FydcA9xMSEpVJKn8wNryivulq%2B41Vzn0v6DmYHohSSlssFZkSCYTCUhd7EBjqkATsvEmJ48nZnq0f4PwdAdW0ZhvA0iGvqjlzAjvBvhsIIDvE7NlLVaeHFwllJIEXHMz%2FjQGZzeg852Wsi%2B8n7f%2FlBZTOwKz%2FoKF%2F%2FPK3Cf2RLyd2iwNkfW%2B80QMX%2Bxue5eTDdCSdbipnX7wbLU2CG4tPbw9sH9ZwTdv0%2B%2BfLQgKNPjSX4giLjdfeIAylWkN7Q7PHqtqiz4SFRK3dQJD9N9y9pg9Ts&X-Amz-Signature=4c22c5c1fa29cfa470e1a55487dca1100c42a0d52ff0aa4b1dfd7b3be311ebb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=3bdacf611e67af1a18078075729fc5c77f3850e9590e4d024ad0618d3328d0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=f141b0fd2a8783ad3a046b65f3c57af9e8d6972dddccaa32165012150a339533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=396fa8b7bde114b7a3bbbee71cc791104d70ed2657989b319d5dfd28b550a9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=3550cf45686a43b441a97791001acb82673ec1c2e3375a6e1f3e5793da45db97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=f694e520bdb371680a214b4bee27acf71be6d4850b3dd9cbf0fc708a1ee038a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=8fd94cf53f7dc7c65f1c8b1611cdc8db63994382bdfa62123939bc3060a4eb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=c0328d94444a17c599ac9b8a40a96ec7633756b710893ac95baaf6145ba9c851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=b2da0cc3c258517b406454c07c641e8c4cd438de3b2e7f2c4a8e9f8a2aa0a43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5BRMR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YUax1LotNrR7lYDaWmQ%2BRPZ5SRvNsJjanTp1Dr7PKwIhAM99XjC86G8wd3DtFGMlhdJkkS76y8199uY%2FtmZcVbuFKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6ZDb2QT%2F792FwDsq3AMyNDTJdGOQUY%2B6yQXKx6X8C4zYxOU7g0i0hBBy6efPxQeLx%2Bserm3MkTIzAabEOKcdhigMtDWkQZyivVYif9U1SAzQuZXstIfqZFRw9ZFV0CkNUvAt73FZsrPdWcrI2hh6LtFKMus2vSNXM8b7lhZXfKCIdviFAC%2B8LNc07arkyC9PYFzx0xASTHfg5ZYzQ%2FD%2BoeasajmT2bYCOPakl4IPG5rUTFwAK7tENyR0BCHc1bhv8nbWcgWBCZrEsnOfCs8bxMRJ8VwwQnUxIZP2mmE9%2BxdBeHzH5zAAsg9O6we4bBZSdsiWuVN%2F9NikGH5KnKaup4u3Jjx7JBbnmXSt0pKwvxmWuASA0fC9k8QG6gHu2S6MxJ796EoVMNvfBTf2AeAWsRLb6F4Mb7AuUv2lFXdN4CkKT3jkOobbTPD1EwoAV%2F%2BJY%2BhUlyit83hF%2FjD%2FCQ65WhrhT%2FqzgNZwX1S8Vl5pB1ecGYFRjtW5qt4VUWJTwsF%2FEaGUSog%2FB2wgnfpBQ6hEzSlgeTdsh6VXB6sgiU%2FC2woXSVGgRsmSk2GFIBEvTEiTGxG8zXqFdgqtyTyR%2FexQvbqCpjz4oDjmGWwoviu0cUYzZAdG9T%2FgSZTmDFkKqx13QCiJJS4swPam4zDNjt7EBjqkAT0dfN9GAqxgCZlGfyQtB1M509SeCq4d%2Bg%2BeJS%2BHEZVSouP1MK0hr1QjQ%2Bc0f2Vq25JjaIgY2EbeL%2BeOrjPnqdfxfdTEJJQ2X7cYCCVZQUsnQm9emzPcD0%2B%2FmcKyqZ7RjIE10LPe9816OGtX3XqmlM5ohtMM1ebY%2Fy1yNAae%2BRsQedFlW%2BM11JnnxqaUZWTwNxtG0%2FrTY%2FGDiSng5lKPVfpAdpW5&X-Amz-Signature=516ca77ff1b658d6ae9d1283e10ff31ab55cde9efe63e16c4c640f4934f023c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
