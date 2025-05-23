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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MRPV3P%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFqo7YjRsJVncBqb1caqr8auc%2FKI%2FSKd6CRmJ35UVBFqAiEAmhXmLye9x6k3%2BCW2gFUAt02HVW4PjChdoQa%2FE8glLboqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXc7RYylIDKPFl%2BYyrcAymhaR6%2FHeE%2FKOEZ9xa9cUTSBJIypjJtxrhJ0%2Biz4IEuB4qjHzSJmDF%2FFFi7MOCyQkQsTJ6nCAfxEMFq35Cr9YmWNk7I4iNUWQlwil343zGUeEjJXLrJ3CUjt7%2Bt6Q1U4Onk6jFFoG4GlpIt1m1hehpZ2KczCzUMkwi%2BrOb4nKPDCTGCQQHZ6C1amiK5N0c5K7VBSws8wSSAy87cmnb2uGWYksAder3P%2FDPeGo63uZ3EfqkiMuXuvCXrQLo5N2GU9ALhbHzPD0WhDT2C1LCZGtyoQTp1KAFEz6LTgZBN1xBEj8X8fTz9Qohfo8LgQj8G7W0v5HHBfp5a6NK4zrlST%2FNcXhT9znvK3WHXC%2BxKVUAFLUY%2FOJYd1QelsfQNG3yRn5ZSzgTdiSqHBM2Y4ob3JhZd%2FSuY%2BFTiPFIkARp1Fl2oQeq%2Fi7IhSlHmqf0kSaOa5HGw6KzT39Xn48GWLSNOgPZ9lPjcaK0jT5XV%2F%2BYGgj6O8wYZc%2B%2B%2FQmZzvIkR2G%2BxWFfiRh7SSujKI5HSNgPVgDfPURRzshg7F1Is6ZX5WfFQ60G2j63nLlZwBAEW%2FQsKUdIjeKTaQ33rcqhhGlCpf5YxET%2FMCSvxTFvozV2xzW6jhJ3TFSjVY6j%2FNxhqMLTtw8EGOqUBb9LpcRL8%2FlA5ZndjCAAaWuQpe%2FvM2uV%2F8UYdTQieMbAZCDKz5Zc99QpoQE1mOAzgS%2F%2B9DUu3ilORVUmGJb3AXRmYNSPT%2BrdqIrXZ5fNEqkmul5FddsCAyMuoH2yqBVe7kvp6IRieu6fufPfJsZ7PG9YaFYiROy15cG7rFAjOfLBorbvEnf8goQYj9h9071PlPLpK8aAAO5hweWuV0WeEPYkzco5e&X-Amz-Signature=57e08a399672ee79486b30d8d494849e29d9409bd47b47cb252c92303791afac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
