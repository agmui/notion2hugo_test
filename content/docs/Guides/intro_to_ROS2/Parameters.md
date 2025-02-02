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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRKBCA5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd35r1vHQ0QG2mLkiswg0F9yKog%2FUqcIaw40aIl9Y25AiEAvLuVZbBwhYDdhfFWY8gUcnY10UFUSwTV1slm7PLpNcUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BVrzQX4KanjG5p0CrcAyEv8AivNaCe8xEsb%2Fu%2BL1LFwVSe1G9qFp%2F6Y%2F9IW8pWzQA5ZG%2F3WW0Ez%2FWXHshIi6jrrARldWixqW7M1Mvz7LDP4rpc%2FsGf%2Bi7fG9VO1cIHK2mdKNe%2FJt3RJ6Af6spnjbRNcwqgYM0DY0%2BJJxtHXivsfCtHw9EiFJt9jC8b3ljHg4tV6WQrOPjgomb6BuXt2aFnT5GrhtgoHudIVhOaD3gEZ6dLu3L0PT4FwtlLi2gekR73xJhec0PDRbuLsteucM8xRmE%2B8I1teE%2FFzB25ceqIpRqwJDBKMlNphJBB2pDt8okbtyKJc9wqE3PBy3Ce0rTJHoP%2FjyXhWrFEjK0VfOtmlsA4rcxjMyEU0sbEk%2FiW2yQYOgzp15xNI3A1n3Jcnllyt49QCU8prdYDiBLLKmcdvxgMzc9ujSMnrZw53ae0g8Ove4BrUCxJw0d8DQ25wZZpgGfQg6G8GSeKu7XkcBv7HG2IYMqYQScFJvaLg3YnX4BsHzHaQVuv%2Ffq7JZQHkwJQr%2FgUryNvuE9YKLVUZDx4pxj7oAtwK1NxoxaOJulSr0N5A5JfzTPXoYIODrfbfctAP5TWfCxifrGbV15WSwH5ZyqXNTrTRyFKHo%2BAe4kGd7r6j68%2BOJT1aggkMJnn%2F7wGOqUBgxhFcvi5IitCZk91vrX6FaaNScRlkwqH6rgibxcfEeUfS%2F7gn62zX0ImTzyGn1KwXu2TVuT9T%2BWscDXMSG%2BppfOSxOhdujo25I1BuYvDBCdGNPH0bFUDfDNs2vZDTVZtFRqy4gex%2Bt3lRXqBL7upDd4xSs6XncxYX4dMWLz%2FH0bziPSFq713YmXq2MKh82Ohth3HGLuIcalJqyEYHA50xegkSKG1&X-Amz-Signature=e9baeb95785a37308e837bf5dde56a8f3fdfc7a9a4e4bae4b260c96130086cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
