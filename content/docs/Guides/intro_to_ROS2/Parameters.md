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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULK2EXOR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMvPjUuSefT%2BTlwsJtBfOV53WPiKCCGYhmDXVzIW7wQIgZiF7E7ayLTz5d8pD9oie0pxk0prYJ5fIr9%2BF14%2F3qZYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKqUAq%2FFBzKZadjkZircA1QZJK4FnXylYCB8qHjn48nVYzZ5iR2EmvELfqs1EaBAv68SBAxh0F3P8VBmzVsSvK1%2FOgfuMj7rHpEYsEUf8ScXKZBNVFAlTNi7GOW8Po%2BQpJ2B8UQdxaW4Fv1Buk2TTVZ0j%2Falm1ffltYgdSFPpfWJWJSeDM2s2sE3EQmHQLRlsIvJlg8Az%2F3L%2FiIbe26QckOVOj9AmnTcvIq%2FzBPjbcEMOSJQW93%2BPFsRCPZA7juUffXmhSYGFmwhHI3tE9JGO9avSDEV321zuIUecj4XwoLrN116qMeAHpOH427SsVSvJbWIHq5ppg4GmXvjxS63tVjJfCIeDyhxwDudqfGQ0u%2BvbrNyOzv2ycFE7JcOSqXTNz7cdphWKVy%2BbSMu%2BzjetZ4WJLGfF00E%2BNtnzCbbaVyq1A0wtF8%2F0H5vc85lE%2FqV5PPc10o0veGQ7lXh7DRAAz4YZqVHERTHQ5o11EJwQyckDOYcynhYcGXNj073eOnC2zpNz66l23UVJfhHyiKuY2PsfyzV8fMV74vD%2BPeKQcsfGfiZwvriewxtch55yl9ZPlIup5zQ57oNIzZ27UBdeZtxTURiENqLW33LiCAmB71jDgqa76hBi9GE3kvwghUyZrPWfdmWcaf6T%2BtJMJenxcIGOqUBIr41CSOuOos69KqpRtbDuZr4IOrOddZoGZpddFoj59Wsmfqea3Udi4T0IhGdbJzQtCx3i9vIBbJe%2BV%2FcOm9NLo%2Fk2ZLCtnfkiQUTGzFjpRPZ4VVJyv2ow0u3jzUEXsE6Fu6%2BRX4nKxK54WDqRA9emOvsyLZXUPQEDi9nyaoDIYtTe18G0u66sQuqocip9ybtx6Ldf7tY9Y%2Bpx0OEcPJ8zFXZPTQp&X-Amz-Signature=f50c4ce98b2b0a2e931156610fdef9767b2c6a1c00845ec490686fa985219d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
