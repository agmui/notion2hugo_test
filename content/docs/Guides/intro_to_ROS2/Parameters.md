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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEBAMFG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1UhXQQS35yaYowxpB2%2FzENIRq8DtkHvPriwN37I%2FbBAiBfqLNpHq0Odi27rzysU%2BHqB7OpJD61sem3mQ%2FgIX07mCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvudI0lharKvLUSnkKtwDncfN3p6DI1yj6bJSIUuaOb7%2FCjtNFXpSrYp%2FSCb3W32rF7QhODeuFi%2BHX9nrETnauXrTf4wSXqv3nxfbsGPJq9aCkX6yiq4L%2BLXPthXO2724YdHZGf6wT8f1ESpQdA8dCfqZ3y9KSgZaZHTeNJrOhdpbdbwp0zpnieqUaAU4xgiRQXXEUwKhLDXE6zVA3%2FW%2FzK9RxzCIgMq3I500Ol1VzU4z7h8vJZHz2XNJ3Nwp9YqRCeE9cCivDcW2RYJKSkyp8y3GI%2FyEUzDyLl4RbHZIsow9fyMCXPuo0LROYle9pZcQn%2F3OVhNJUebC8JFMYg6fP6KQTsbZD0RtS19m521dsmIz5%2FmyQ%2F%2BGeBSRZNTq9TTRPBQKZcOuNJNiBgnqi4ce%2FmYPlsMv5Jr3dqMRtWFc0wmqc8%2Bt1woSSxgPAoqls8V68d%2F3RO74eWYoAdqlTVAKVItD%2BW7VnuLQcb2FmOvFCW%2BUGJi2ouDswpN%2F1z6JsFqp45toBTFt9CS0V0IQjOIuJYTB6vbBWBjq4wDoEaisT%2BJoemnxhxl9mtA3JQ7aAp5rlBl5tmfDWYQZdctWAHYToBhc0VGPeOwACkIl0LaBJ%2B1eZtuKwGQ9zQby0UJ%2FIqkPQtbO5YfEkHVPglgwmvzCwAY6pgFEwh0Lta87FS%2FYEx0E95MUaszxjf2UDkzeW%2FZMPtheQQ7K08XBtV0V25Rs9mit%2BmY%2BgACytFnjTUtdHOkpwsQwM5azkku3%2ByyomI1RD7Uucr2UujTJxysa9yE2xFW293SEVv4z2IHLxzxlFqH8D91pGJYvYxXwgt2OtGyUFOwxYswJC0AzjWB8Oo2aa7cs53DdOBQoe5PdMa9vugJx0ZpxrO%2FrAsyN&X-Amz-Signature=de8d3740c9692da4c6b9657d79c6ce3a9b6701da8a33a501ae2604e925b16c67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
