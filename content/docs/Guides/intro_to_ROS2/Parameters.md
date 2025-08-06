---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4M4HY5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEg0ffGSfX53N60ckczshIUnauxl8b9a9Whs%2BE8HEMD5AiEAm7fEqUPGNCriQLrqqcNoKuxGmGHnon2rAMbNeGsQfEcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHXBgErBH%2FgcIIWqiircA%2Fp82NJGyBfQWw3xSo9919oGqlV9OXc%2Flg%2B6Er6vzAWo5ymI2ctzOMiN3fZFRfYQG7dVrzv25dt56O9cl16zdiLpr%2BnRLf290OHdpfAey6vCM0yzCsGxYrOnLPNru8J9sv9Mx0SixpslN%2BW0VmugNBkfat6uephX23UFcG%2FLIeSJiqZmWPR7E7rHElSYsyN9PhdfuQJ%2B8fum0HZGzxMwAa36qjKyTosLB%2BiiMoJGDJYkF9T779aDZ5KrSxwQNSCMf9hY3SDr0UwbAbR1TNWXT278c3MsMDcvMusmGG9mj%2BrbEUZ1mwAtk26H0xbpdYOVu9COfPQq1YISRO4QTz2Qb7huSVgKvUHXdyTN4y2MDpn8C0n%2B1X7E5NI%2Br55QMhGzvfnvJpjN6hRJiEmxnwpxKEfM8pKjAW6La15wtclfdeV4D2cA7myRyrS25m52fNPiJV2n%2BZYMglzinZCtzbLrqYCoHZwzr2gvsqnprYwAhGvuMc9KDAZ%2F4D0DZsNINY2b052g1tcvopcP1C0cE7DXjgxZrHCOoSKvNRz45QMUnTs0NwxaRBvaTbCOE0aNZz%2FMmBpLbjnf1b9bQBTupr7Fic2Zju2h52p%2BdI3axIVooKFwg%2BNBbnjgCy6XtPTzMLfLy8QGOqUB4Zh6JpaubFcN5BfMZXhEtk6LUsWT8pV5I2yh%2FHPIjIjUZZdpJ5VjbPXkmYiVCDff6XPL8tMiDN2VsQr4mgjGkegZliyt82WAOiL8AGWCgNIf53VuAgnZFOeP8C3hbh8%2BgXtYZdOvPg1gxRBEKEsIi2fNKcWMp9jjVOGtwhDgrAf3io833i7OxtlOlw6E1g9V4bnZcdYaQj%2Fiy1kxP7dKGtKR0RMy&X-Amz-Signature=d77e00d488d57600b6f0aee341998cd265fa772555b6b5e0ef92525c9b8667a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
