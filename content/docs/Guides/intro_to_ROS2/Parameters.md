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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGJLKA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe3FmcRyYbUs10uEYn6zh%2BQfGYXZU2wI%2FuSyaFiLJgdgIgVKd5zUSgxwE684FnXKHUmv7piXFkNofU%2FS3euchtzqMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDANioHbfM7DOaBDScircAxPDZnfH4ktZ9ZRbg%2Bn6vN0jpecuhJCtXlo9UGehLYatQRfQZ%2Bpy4xA1CleHjbJ90srhdbR%2BLM8rQMHTm7dOpKuicwEkYuFG%2F9qsiCL8pt3Cmu56LrjRosOeIR6Vtbg50C%2FF%2BNkTyjfyQsiheSh7opBFIffqRFmvSSKYR%2BwVgrt9EFJDBip5isFYBEI%2B2EUII4zwmUVc7VV%2F5bPoQ99gXwoUII6U3Jb56NXaOuVbeK7yAUFXWX6DmMBNN%2BbcdvfB5uw0YEUqg2zUHSDUqm2XR0b0oXGw7%2BpZnKiTP4hxyI456cQ3FmEhExawdhvcOLo%2BF2BQJdMcEUa%2BiwiwiV02xdp1c1pfoVM7EYieGCOrntCMEEkCUE6xk4bFuB3jC6bPuZOmtUyfPIMP2TzrQAiWFcpA5YlknFZPQMcKjlE26H6itsNtuQSm3z0J86lRXINKK79Nm5f2UHlFSrHLZQnoqqkCdZGTtn0M4sjb8RNN7DJatT3ipOWcVkEj4mEzYzHzp7wIjwexaKdoUc8xY%2F2afz7wIqBgQ%2FbVAaDzNOKUTC2esj4dNPiRcf8ba4daJeZUAuL%2FbM2VZ9LgzdcCu9oCjnxkjinc30LhhvozE2I3YTsQaeTSVTPunLrdvAYcMK6j4r4GOqUBTnBEExsn5hEclkb1yimzFYI6%2Fc01bT0BWlnxnhxdgP2GCYiHXz4l17fOItrcyksbkuQREmAPXSXt7G5fiQJzQ3Ub5bwxVmb0ZQf4s8JZ8CNX%2FZfgRKA9h4u6gTCACbeVS2uyAMsyDH7dIU5mPFXn4%2B%2F3sqUSZ0kSzTVbr8tIGP5xaclHFTO8wSKgSFN3IrBXpOJvWLhq3q3yq6ic%2BPtIXFbeaCU4&X-Amz-Signature=2a4d8c60389c074edf2ea68e88fedad2b65b2ffdc2ade2d0e8ab408e75ad5f96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
