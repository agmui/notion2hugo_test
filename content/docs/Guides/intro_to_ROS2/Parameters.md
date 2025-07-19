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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHZDGNL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRrV8ydf2DZ2NE%2BhaDRjJIjxbHMFNErz1Bs1dgTjOw6gIhAOJ%2Br4X%2F4EqCt4H%2B50suJvUsmMl2FJAU4dVjVL5FTeuZKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZO1Xi3loICak07Soq3AOWvWdi5Tkll5sXPyKmNxqbtDdLVOhOqmtPqEHzEYYOrJswWxQo8ztBQ6v%2FEzbT%2BHxNlQqBfUhKbW1SEunYsOZMpZM63wneSTOle%2BfZKOHDgGXQEeSWhv1io71vTTmVLPWG7ZZlr2cEDgnBETQv4fPKtICXH7iGipgK9ZJLmNlt%2Fv8y8459dgLWT6wyH%2ByxkGZxvhBh2%2Br8s0Os6BQvQ4HaWG8f8j7J8dVznZj1F%2BFaWh3Vs74BnmQKxfD%2FptUBcwXLz2JttybVsJj93Z2dis%2FHzStSUKKfJfuewkrSaJQDdXu6v8G4fibEJyWFToGLwht1dVP9CINLv7XjyNFMYMQh6k0dmWlitvf72p9ocPg6TUU0Jq6vIcSZkn%2FmxWYzM1Qn5jSiHAJueQq23BAqDYeKXGvFr7b3vMl487j2uH1xYiDEk9HE%2BhxnJU0VzxYeDxOVC6ovqNg3hlVNxcQ2%2BReTus7uwZ4%2F7MSQ9FQVsD%2FuicdfY8TBj8xcgsemoK2orBlq1ACUNmikFzZga36pe2AqniCuZlDIvKMqk5wMY0kOKdUkElhOYtrfxVoKdN8WCekOzyKakN2EU9pNM4RerFImPzjNOWzspCAubUKgyXERbOaMcQiiO0akGiD8LjDTt%2B7DBjqkAUaPN9UNOKZXvZy7GhLyP%2B%2F03bwc1lM3Xis%2FFj5oTBZoSKX7uxYiWRGBDLKV%2FbhO%2BWPGVlRquD14VF1RDxfKzkO5gvVUjzUQecgse2No9d59sDKGLRucnuqHfkwvFlSPPm6VOBjAQdNKAOU%2BR4918Ky57Xry6UFuPNvh6et7RBp6qhOZnzTz7s2BZCvCQxne1cjyg%2BUIbLjkvCK675pQAFzImmtm&X-Amz-Signature=97a7645f22ecc6b5280e12069429d3bbfd67e3c16418c170f7ff15c7044e2209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
