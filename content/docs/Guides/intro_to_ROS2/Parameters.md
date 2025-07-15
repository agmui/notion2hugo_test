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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZP5WCO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICw0CwfpdygjHLDocspY0yrmRfXob9bwmCNtYgi%2F5yCIAiBqCrWQSprCkmBVy9dEFjHgBm5HMcE%2B9pp%2BxjwjqxXCoCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM4QywYuQlZqPeoSFSKtwDX2kumtDwEbAVwd0HriYZB4TJXxNqPFieVP5oFQPzndtyFb2%2B%2BxJ6QOUKznWmVCC4XqOYEb0F7PMxhuhueDe8fJpigZNx7Ebb%2FNpo4nnBkjlVqwkjbxn0lbUbKsvbkjvv2r30OHCqoNhF9sTKTla8i83UQFe53IfCdeYF5guQVUHcc8VfeJU0u1NdxY04iSJAKbbXb9VyY09S%2B4r%2BdC2HlF5CRwwSsOmBOQQYUAzTBJ7LWcmsdCUslJxEvIOgkJN4sFiiqcm5lnZOK4lzd6cnxYIlYrV%2BW6CS0ADq4TQeesoaq5QV%2FBe39JuX0yPz%2F1ailVzWKphGYNl%2BDB9CkvwtL9%2BC08U%2FxwS%2FtKWpeM7ZAEquBhYvL6m%2F2zIGrEw4B93JQMHPrCFDaySdiwmakWFl2UDOCyiVFfc5z6QHnJiD80SYALIXyOaUH8cQoiQBSz4cEtrK75Qaoa8jdTdcKqKxTsGsPe6bu8tHbPXbjqiggnd%2FP6kT616bYI49GRjP52RA970BPEeAGa%2Fqqp26DY3sTmWfUnEPhR%2Fx%2FHi9SoGZ%2F7NV%2BaF%2BH5KJZdsS1W%2Fo6PcH1ehp1zniAwrdkinfweoixolCo%2BW6gaJk4iAKdUFJYeLCJp%2Ffy44ZjsLaKMgwp4LYwwY6pgEdQ1MxZtIVnLJ6IvEdgCtyw2guRaiHkPF%2F%2BOjVo9eKsTXotnr4CmdSFS%2FJW3V%2BFs8BFw6dEU43T6vt%2BXJ%2Bw4bLUi6NB2h2o6VTS986ndA%2FL8WEnmCwMFnZ6zf%2FdDOg%2B7K2GiVGDC5ZscUtNwQNz%2BwZfEy6ZeGA5mCMknvGF0vz0hjN%2FlHGVWWlMPZZaDvZlncF73r9yrE32%2FKCCfHQVLOmIe2NwKju&X-Amz-Signature=ed65ec63c285916996b256d198d021943938038ed9862fca2af20b1bda6ffc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
