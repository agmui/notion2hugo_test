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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVGO2AE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJW4W8%2FiA8ygYlsSDwWINQvt9Un2JG2Yb6qutA%2BY8K4gIhAPmXBM8th01bHCm9tmObjC2mvUjf6ddvTBIQz9pNsoiEKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BLB7jVK957k5NzNgq3AP7ekvAzFlGOCkNlDCh5ASwUEmAVNR8GYBfVdJEiP6DvNufOGMcmOBjG%2BZJ4GURDDiKrzj0klcEShzPzrAiKL83Tgy7ompyTbcUlPuMGMAfYjn8Rb8QYR%2BaKys%2FIjQL%2FavPGDAgx%2B94r01fHkvU8KoFKkgTesEjeIHVPPYZeoMw5QIkzc87dTdfTDn6ASeg33kQPg%2B1Qp7YuV%2FAdHPThO%2BY3VQ03eN2XE3ZncBjoLTG46OF3EBZ2M23X81Dq86hVcv82BndL4di936d1YWOYm2BHpUBRQGGI8CBNcoby4HNLMSRrx0ae2Kw%2FuYz8v8GnLtUhm305tZp5WekKEE%2FDgZWrV0wudL52btjxF6H34QGgBGvAiucaijyCcyEhhv5uFW6GpV6yeldvozjskOxR3YCRxLLq4KN7CqzDuf4%2ByYx17sG4njax%2F9dXKuUPpHKG0z%2Fc33sMhfeOo9K4iWVUHqFWhFOLvXq4VuKLEIqg9AOmjawUipbHAtQ8290pQw2uq8szSL1F%2BWDb1Q9bJfRYdGYh%2B522doGJ%2BFbzt%2BK56MdWkq7xb0ZMzgi2R28f7kQxXg2lGvMgEdmxxnrC5yLz4rj5Yi8rG5MBPXNIgEXo0%2B0hN4u6fmWoRPWO4jxzTC%2B7qy9BjqkAYDNRczyjHFd1Hjio7HkBqpTyZ6RkXoRqwXBwsUpr6HGEFS4jQWUT9KA0xMgA98o%2FQv0dBQx%2FgCSmvk%2F2Rh%2FtlDc4U8LNVoLpVmMuNBe6jX8hhXl%2BwQQE0NdUIXSrrX7rSbAFbpUcS6tlSNsTnND8q52N0eEp9v%2FzwTHLPXnjB1Jc1l1jGOCiNFiHGc%2Fv5TOQMVjVefWA6wiRwROdxqVs4nr0zGl&X-Amz-Signature=d8aeab7b413b8335847b95852fc1429a40a34ea9312b8c8f3a8bb7fe4d014440&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
