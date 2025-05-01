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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4G5AQH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGExgL9%2B%2FhKk9FaWOe2S6PQLy1PM7MHhIDKiiHZLmEQ5AiEA%2BRsNehm0eRGe4hScntf70PFgH3MnTci0LdaPHmV7s%2B4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkGbelDATminDFqbSrcA39n%2Fczaye9QPxgFEVqXo5LgOiliei4lrlmS3bQCDQfogpUGjhDmIZlqiavgx%2B2%2BlWPVgsLKNFUOFJezy6o58Eu%2Bgo%2FBL8D2mReXguzGAn5Ykv5hvSMcFAG%2Fp8b5L%2BgLO5VjPjreOb1GOWJJIm3pO2cCiIZfhLMkjdNNgEPVO2ksvFhvoBWaJ90a1jryPfdCw060TWq6r9LXSqf%2F63GJGJYFOMw%2BFko71QlEhZGE9ebFQar5LVNxxiDQSVfPwj6O3eyNKXTg37ZSrI4R1r1tO7CtugvZasjD%2FiKCyf%2Brhye8TUa6e5x5jxxkE11zmhHQtTpaWD0F0k1CgUo0HRc%2BNTCP6Z5RvK4UEaD0FKbpYFfXUQK505I4%2BPWGL5aRsVXQXekmH5HntYvNvH8hVkvuik3PXRRrX%2FMIX5imibYQqAiVtc2ZSpVR4MMjfkTFttOFv5j3RC7dr1S6bRSncT3G9ppModyKEZD56xBhN0eQ1WCpBnZOr%2BTM3JQ6gfxfOQcBhMewozNwEuWrFPgYrQ7N8F9YVTanExAafjnkB3yC6OagZ2PUQsvqN82y33KMGRKsgAbuzvCme6ZPabXuFqsLGTpZvF8Jq8r4md9W0TCnLrnT6Izq9P85QmnsGffEMJCxzMAGOqUBPw5vdrdebW3mx7gc55d%2FjqBxbAnGYUH8%2BoMlZIwlCuOv4ukBjl5Mkue%2FbestkszltymldOEnFiivMxyOlHIFNTsCRLvCcLyuIEFEdQB6uGXLq6l8sAnCKExA%2BF8ozhyZeTAwY8HANus5iTGVJD%2BRIHmQNKz3qOagjlxaca2%2BIDDYpGX6MnxozxypAxUThYwbC9WE20nEbmeTP%2Fb1wIfjzQI4%2B%2FLd&X-Amz-Signature=804c07fd547adf7ec9d2405749964fd601c9824ef2f1f48179fd4798046b3dad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
