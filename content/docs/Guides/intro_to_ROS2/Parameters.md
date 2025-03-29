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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77TJHZP%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDgv08TPJIB%2Fq26H6d9DFRhuT74t1eRIpqGbOmoE6a9CAIhAIH62ziExUVRDrbbWK9pJfeDYLJPOHQsi64C5ogdRfZjKv8DCHsQABoMNjM3NDIzMTgzODA1IgzmsAiq5%2BabtmmuaAgq3AML4Op6nXMUA0ZrbuLxwW81zKPW5JQDLoquL%2BcyMYj6K36PQs0CeExMKcAq7MqXPLSv9dOQIopy8ZDjBDrjNSwUczczbaoZKoxClKWQI%2F63ezuS8PGDVkx87iWoHRX22E%2BR2qeQ05z59nZiIyAPtIWZHn8cC1A%2FlzHRfTeSoNns9Xap%2F25Ol4GCdB3tZ2v24ln7sh2CJY5KE2j1BCxkTdIvZcTup1DK8pK8eL1u3Hdu%2BDVgBDtBEa88RJV7ahV5HS7WyfHTnHwaKtrnpMbKL8OeEgamXN6rYcIg5mDjAMiHAybdJW2dxxIDsARrrwBGUdfiSpHhvFFSrCOZy24wfKJII6wvnpoPz9GNTe9DAgfnH2B7ad0m5x2N8hpQpLoNN2rghNvqSEYYgk8fTV670PvoQAPVg5L65ciB65lIvQE%2Bd4vX%2FsWXi70Rrt4YMCEcDAkvX4o9tpQvVe0i9BMin5%2B6DPSKMshJFvrX%2FQkm%2FHURKy%2BWDm31OJFg3jx1A6Ci1HlUujBdSmJ4m4HJ8UZEDTqMQxWrtTtTiJgFNKwygbwq3wVv3cjElcln1V%2BFkiUOE5tF8DM63y6WAGk0mBAQGhb5fujzuBt%2BiwEBSFFD%2FRMluyx80CuM8H%2BZwusumDDX8KC%2FBjqkAU5u4jESrA0IduPxhg5%2BHDaapqmfuLACgiNIEh%2Fag%2FX7g7j8fcQ3192lHHk5uiW5EwpzPSU3tVRoWUUSTAU%2FI1WsWrtRrSHEQnrAQG6Bwc3w%2BeMExXTQY6xGPxTj63rPm0ms79ZpipPUrc0saL7nMEe1XcKTdCufeka9Iy4BDO1hx3szIX6OJ7pABeO3udz63S%2F9N5M0tpGgR4rQGIVy8Se5nGvV&X-Amz-Signature=4bd38944c648b2f45ce539e2ff82de3420a7e6e749f7e28942a8bca0ec229829&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
