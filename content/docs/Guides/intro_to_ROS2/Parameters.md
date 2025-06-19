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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPL2BTG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSWchxyPrBLL2Day1j6wcnGmSci8vMMFPVZBBS6pnUnAiBBjpCrYtijV29wB5fk1mKDy2MmDLn6Mb86jNdv4ehEICqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMUPhb2%2BjzVmOy46iKtwDhItiiYj4WT6jQq52l59Oohp6U905NqVs0se2sHmCH9ZIMqfIATtiMMsuK5dussjkLwBSi3j2471eD%2FhnSBRaWFpxDjOHn5gfEMf0tIjS%2FaiXsqinUYxjytRlu8gDP808DojyQLeVWJfdwWiq9vuh3cohQLKV%2BwAHvW2On32HOBYAHSGrbMqNXK0X4uvcxpIvXy%2BCd3CpHw5AQmhygdgKXVC8uhLlNdtx9US9JoEkTWzKu4DZcV%2BMWdC5hOjSBeSio8YZFqmFUuBnt0pC%2F7wXxkfXW2H3dneCJYazJ8PabnjHrDr7EO9k%2FMtu82Z0Tl35KfkwCfKyX95wRIs2%2BMAk7iiYoufYpYbPVSanynHFKxtXy%2F%2FSCm8RKjtFc6bOfCOi1kFlZ92EBqPj0IUGOjRJwNHx5UwMWadkVaMoZyuiJLqxRrT%2BTBMIqstB4%2FKxU5NSadqXDSp1YFyA5SipRHpPjLEv3gwYTsC5Od8phPzQFAmua0LRMzqA%2Fsr0NMiwNpi8tUpv9QA7E54T87oO%2BggnHk81%2BbgqpYjWdOm18%2Bo4sUQvpykZiYOFo5rQ%2BvUWqclPOo%2Fhbz5m7V2F%2Fw9gNXUIx50YFdwEE9bP60LRkYIYgBKY%2B3HUM6c7E7%2Fm6Q0wgLbRwgY6pgFtN5mvt99YQ3t76Aj5k6IWYKGaPhCUMZRMg2oMWLJcOg7ekMaysyPhPtNwaGE4hAvViVzb08IB2NhbqboV1M38C1aa9SG3mpAGbOt2NYZGUG9nRJFytHRBrSKmhwTPNGuicCDttKEZhCTkDlU2j2zaagfcmmw6nsefRh5o7qHumNfrYKjp4zzvsWWWv1Eb6tVjbWFxk8KojtONLPyBt34TYH4fzVDE&X-Amz-Signature=0b9de0384a8b4f4002e81d3efac61b27d8c34757f82f68d225fdaa5069d7b591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
