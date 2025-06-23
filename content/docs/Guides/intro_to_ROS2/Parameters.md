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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLKSPYCG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBNMXK49JMtbPCckNCQOK96MHmU6WxwdeE1ezzZcLLGUAiEA2%2BWfpCQIYVw6VQk6iomcm%2BtUsJU6ZztRyEz2NqH1T54q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKyuCK%2BiPKbovFdXGSrcAzoEKdaduTpBNRCnCSleM%2BIPZmhmrQL0LghU9uBnqgu%2FoSGxJFppkQ72wH5nkvUXEh8%2FbOpsvUczupe1B7ISuHMyMR11ABvdNuIaNs0wfv%2B1muMIWsKPkJu9IkVf3WJe%2BCZScnRRLuMQBYC3AZS0JVXGKPKEUJxrgRH5Md3IAxdDoZjjNx6mXzjymYe4KKfmGSFnOiWTzx7hOcNfnvmZcl2x8gEQvO2SBCNx3ZGaaheIk6u8l5gCAgwLJ8v7maeFw6Xhr7z5VzrUPPVBd1N7QSEm3scBZVtzOXgj3qbEiWOwBWLBc3D7cKIBYzQeoyhgRmTxEy5%2Fh%2BybxRVHIkSpTVkfKUr%2Fo8nw7Xuso92CkK3pZh%2BhgaCWnh03Mq5QRzD6wRXZy%2BIUmYgMyX9uryDK2ioK315H7UxKyugOZMLjlhEj8oR%2FeiQ3YtM1wUTx3e37%2BlS5VOwZNkKFayQvESGuDEybT%2FroV1o%2BBFPUGLSGU0juzEATD%2BBfkPIrI22mEd1%2FvTVdwnJS2iy0A0YcCRp6IuOpSuH1XO5cqFJrLXS9%2BPrtDXLZsGsuES6AhrLqRi0rFNPaXicp%2B33THY2q8JbK%2ByXM18gv23h0s6BlKeilNxXtIyr2I0jPIM7mifpIMKXz5MIGOqUBkrErbCNooVrGWlNBBagMn6LsIU%2BCmqn2q%2FC7iZoi1ygNhS%2B1xG0a9ggiIp1OaqEe0HENLBHogjBp2wWjdar2IdM2ipMk1WgRz%2BHXSo7XbJvI%2BTqN6QMTLqwVm5toStgs45TrbaMZ%2BYAezk7CqsEn0VboKY9xe2DEysAf%2Fv9%2F8aqF5z8uMC6Ik6Ul6Gd1XLjrZRlZMlLoDEyE%2FNVoCP5ReHVQgtU0&X-Amz-Signature=4ba625fd95f30cd676e1f8315e2d2d45b2eb80155a66289c5a64dff642859d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
