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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TLUR3D%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICusLuGPWS%2FzlIGzU%2FXJSjZx%2F5YA%2FngTo0KpHbwq%2FJ19AiAWDGNHtDDn7vgLjzctlyCAbQLUgYNqb00t7j1s36tSZyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM%2FIcQsRE%2BYBtrpLZBKtwDQqd0T2b9GWztpa1lLdrNw1LmB%2FjnKiL9%2BlEUAvG1DmdXb0HQ92lvfEXbZ1pnIMF960LX4BUp8YYhXEbpSq2%2BBGUa8RiH%2FIl3LrTJ%2F8W5PM1aiKOI6oiFj%2Bvu5ASUKQqbomyVTxuHqzZrCAa7Mi42ZIZlTLoCQZ%2Fl0kyXu5t6%2BqAogQ6DoOm6PBbMhOu4l9iIdLsNe7Hj7ZM7vU%2Bjcm1HyUetKmnkCowX8FvLzGYNX3kdLTfZdrYVGQVSXiwcxvanePInRtPWWmNrcJxqh5sRE%2F%2BH7U9CM9ThimtBJrO%2FjofMZlrSU3RZEhUlYhDDaE%2BJh7S8Q9ypLNmyWnLUlIBDbE0602S1%2FjEbQ%2B%2BsfpDsK8nLCqmfZol%2Ft5dRngUgYLKFBQY7d2fFVXlkDV%2FLQTjsjV1yGTzeHxV3zJJsmRA8F8NkRrzlzIDz3IlLzKr1NZJ1i2N6TIpU94IYDCVEXWqiR%2BbIjLDFqGJ9bg%2BEVBUDyLOOGasdVa4dJ80S1jqTUzNaakcU4BeTEAbbownh%2B376E0jv9B4ONAYKV4dooaT0MeVtoYPcOZfcjlVbPrJXfDnYUPWESruJFwc%2FkCkfogcpjZnE1NpeYOylTGO4TCj9fr2nUmuMo61i10MN9aww1rDlwAY6pgH57lqwNIBL7c6GGzgLVOB099SPvi9Ucjvf%2Bg9%2FCWqtR2XFXZT6m%2FxXkD00l80OkOPDwIEjByWhtiGEsHl2lLTeZDMsnLNCIPy2zOMnzts49piSaJGtt0fmm0wMEyZVEzrZoE8G0YnwoafxmAlVAgtyd7cirEWjzhCi8Zsst7HAW%2FEm1WlhnEbaZYZ18QsiS0CAelj4v1fMi9O34jBjAKWaE7TfnKMe&X-Amz-Signature=a488a6bc4997ccc466baad4c48609697fc8a6425bbfe9ef1936f2b2c573898ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
