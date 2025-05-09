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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG3GFK3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb1xnpkpMbODQvlvNgerXJHpDbLvMpYFV1On1Fw5sX0AiEAu9Gy2%2FcXDZNYKbWeV%2FZFf1wZ7qmdQJjwdj6q90s6P74qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGonI%2BwtJRCxiAPeLSrcA5Oky4pjtICgO1ib08Opm6K5IPeiNs%2BwxvdpUYuIB%2BPOcROUUinWCMs5qe%2BjT%2F7g6pbdbYxiSM72ka2YnHIyrWruDcEY05WL%2BgfSGrF297HxxBKObIRQKhmPh2aCCRSQZxXFfQQlNdkMn6iJBCI3UyETkktCzhMv51if1VLu00mZJzQ34IAEnGVa6ni3w6ZyyJdP39Gjoo71Lq2owU5dG7HUVR9R9k1Mhup2TPP3IVqmsQrM9MQxufCpj%2FYmkYEon%2FUFjF5kHRhCfeWdzKHguVQfeOpuj1tpBXJlE1QUWa3%2F2GwcnEMcqO51lBg0biH5iV2%2BUag1e9jKhFo4T1IscLtZyHZ5cqJ%2B87m1rY0j9yJD8quOvqZrjPLxWPzKcMQTaD3te5xqh%2FjW4BAuTWOSH63bd0n%2BTeUpbt9RFEQ%2BZSrjM8lGlBdmOEQ9kpWLptPe7tibmZiv7keIpG9uBeAyVh33YPBmsnGfFb5Ve6QaBw5F6AAQ3y4RhzslMdsLTTcgGYPz26wJMCp0wL6phjKFdGA1%2F3ye4SW5U5RhdKp5GKl%2BC4kOP77Uu4%2BV86jRPtu7oNNXynnnAleDptDGNNzaYvCIFOyzzWhAb%2FfjBU6f4qN2FBM81e6c4%2B1p8WuUMMjv98AGOqUB%2Bc6naFIPoh68NxSoY7fzx%2BodzilNSeUwHMzuzDqSRRJ%2F7jhI3SMYCgotF4hpeH1LNaacPOcwjmok84Phg2eNBURZpv5U9i%2BLKzfTfUQUepdQL8K9HjKmn5GnjyIj%2F7jHfNIofG4SRPK6jjWx%2B1UfrAUC9K65MCguYy3XjGYs8gzQJy5CVUQxKJDQZRFTU%2FGrNWl2a28hrPdwW3wRlydzi%2BlnAs9M&X-Amz-Signature=f3c201d13f6ad3a44a712ea3696f5a864337439865cf3c43bff02369793c7233&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
