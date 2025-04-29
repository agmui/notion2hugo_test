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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3LDUWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT9bXEA%2BJzoCb3KQmjgNLpyQlT4R6aoZ%2FALiDG%2FiJlBQIhALoW5J%2FM1uoS1BFXDSgsECjIPfaLVSU6LimAtjfcJV8sKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2sKmTAyrTsGWrDjQq3ANqXUMy1uePhTJXrw4VSHvVcdj6EIlWpQjEdUyH8beS9%2FFO016knOEY34DKGOUgne0DnXJfKKkBI4SUJEJLp9S4TOZNoiG3%2B%2Fiop6RFf4X3%2Fl5QQ6J2j5R%2FHyDNbEgLQruM1d3%2BV8EM2b8n3FIUE7owO%2BEJVIhPB30DcFf9M3ix5DCGp06vkYfjEiSlsZoU%2FPQD9DvhLWeF8e9mXXCaxPFfSTRT1QCexabNGmEsvAScl9uDzovgPbqW7mv4HjIMxj%2FNfsBw04JkIHjF3COokJpr1Z5gjwpYx2JTxgsgVwWD8dN7KQ25jY0dwjhTOhzPKKr%2FvoE6TWx3uTjTpTmwv87XDow4D4K8FIlY3nKdb9CSSxf6zdESL71Jwr5uuK2JpXGUgrozcz5xTd8HAcU14DuhqpkeLS0cqDSkLxozmAWfTavPSa0U%2Fa%2FVdzEF8bpHXp6zX8lSdIdB8oapSSRT80hgvT5tq4vIM4OVgVnPUfES%2BYUas%2F7cUPUWFK%2F5CLzedCTcgl5LbtRnqU7JqUEVwDosyk7tkweeWT0AWHjgLGFjVHYtrcQJ9QU9XERmdyRN2hBmIbQbCdQqBb8QKzn4hHIjdbZtB30iT1nVtoIKMQ1ou2%2FXWWTSQc3vODunYzDmzsTABjqkAXUfcYCVogi06KUle%2FeAvzSs2RoXreW77LnbPHDPbfLtJJw%2FMxO2VQv01A77R4vYI%2Fh7O40cs%2FNtuJa5qV71Ye54vritoFx23Lsvw1w%2BEViMlOzZvm7kNCsxDQsyuV1dLg%2Bv4%2FhvapbXRcEJf8NT1Gz%2B7zLrI3IBYM6ka05w0o0jFqFTwG1KNiMeerTgR4FolAq5jQDexWqb%2FjNHv0RrF2456XjQ&X-Amz-Signature=e3226aaafa3966f2f680b15c6c931f955b0bceb272688bbb29cce3a9f8519219&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
