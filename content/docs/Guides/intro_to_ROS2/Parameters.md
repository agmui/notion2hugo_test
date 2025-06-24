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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFZYIGK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGWxBGyFW6%2FRePo2hyXRU2AkNVnuMTs4zfe8h%2Bq7Zv2mAiEAmaGD49Bh9j%2BOhfDU6aPkzd14w%2F9KhT3VC%2FoiHBcjIUEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBr5etYnkIz2Yqu0pyrcAy7gH9fdqi8hc%2B%2FrdjOPsVvVgjvCc5hKAgWarRKlX7cUZkEpsAHi89haySJQ4Oeo1bJ0GC%2BTo49M0lsFkwXy5tkMf5yQB9zXNF1DkCRlBL6X5ynhqmc6Dkd8DeDwb8P0qtQjziTD5Iw3oeZ0pi7DU2ZZCpL3MrdpJO9u0bGP42M9qA0CNGOFOMXqCn%2FGL0G0X2TzL7nb7l6aueSdM0YvMcIr%2F0iokxJJ2Phcpbb5KTj%2F852BPmC5hErV%2FJlt5kHPyMXLgyFL3UHzWAJSGjrMFuUWj8Gex117MQ3e72kdNtc5mFsJnZs4UtmQu4Md7NFTI8bRG1OIaQe0E8S253dl1F5NGC91q5OCRir9b08xsQtMtaRPD08zlKZdZilZmz%2BpAuLwwYZXlzJHejlGKJGb%2ByjTLOvtkPsgUIOGSCQESRgtrtAGRo28RaKpuF3kGhrLL8OMLdlT3lsQzEd9Vei6eDV%2Fogz5swGUiBD9zaHGF80RxDj7XKKhJyOoZqUIS5XxrirWXOgNlb%2BKHdn9I5gcfNzWF2MChLmWnAzYUkvLUHyIkRj85HjTmALNwBMtev%2F0ybId9j%2BCoEOquvDiFTP7pNcepaTWyqmZ8fVZR72%2FeEHdOJiQDXnrvNnXg%2FPMMP2Q68IGOqUBQwpfh7btqRMwVQo0D2xQPmqJUXINr%2BYYgUUStTgO5fDBMWcupQE%2FQSDSgEMqnMjxZ0EOObejzWFKtKR%2BLzc4nN%2Bnizp9EQm8qGYHi7gZV9JfQS3afWWP5P857DYB8KuOVQFF93hgOCklcA7%2F%2Fqdt%2B5LTIOjjOHY5wgUqGHfQX1GCnroo8YSsmexKbzRPc2isFFU8x2Ma4x0C0WwxHpTqvtiiifOq&X-Amz-Signature=e339c3690ca0b2993ff434a5b8db03b74c500f9a292b9224abf37e27d3b48c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
