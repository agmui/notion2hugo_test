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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2BQ4N5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCzAwv4vIhtAlf%2FQQR84249qpBaVhbG8LUwGJ5BXQ5FUAIgPh%2FuD70Tf1RbhC7vQmPrT1e8UNUqwi2MndehjrOMPp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDAeV25nI2aVRa1circA1xeE5PldE8zqaLDNMslfO2IquCG5zHA5k4cmsAh0BG1UdbFqVE1f6ckmZE%2B0W56i2qkTpvoRKNWaxmYu22dMGqj0noDlAG4YoBNXc3ZqxG5LHFXj03NoOmyQBMFhIdQ%2FZTCi%2B5zFIfI59dUnE8Ssc2Gd4%2BIGgg8ZrvTwA2EOlLW9NRJwhmeYJ2j52zsXFIaCCQvA1fj0tn5H81GdMQkZvdOgBmkTq1MfrNOlCR%2B9bOnFj2XgFI8qPA%2Bw2x4Mec5eke9ZF4AzGxjx6UwtvtSMrxXEATL%2BTpDOcLz9F1E7Ar%2FXaf2bCi%2BsslWsYDNlBU8fihEfaIyTHd%2BT2kRTwYawbTYBPX%2F%2B9zzNPCZBOTNYnug69feTqD6uN3D4IaFvEtNoTTXC%2F%2FIujTVEp7JSZFaVZQMqSF8rnPJ%2Fgp2TJAoA75cU%2BJ972g5tmE4zsHx8EwXjTMe3lkIkdyq7fW9%2BxYYWP9QAVpa3g2UV6t7i82dO3bLj%2FXwcXrd2TG7Zw7ky4VJcZc%2BSqWOhQLIevLFE6G3hOqiONz5kuVpwL6ztvXyGNcVDJ0zVo3iey2gw6Ze%2FlvW7KiQvI9ZoNxaTjLmOlNAz%2FHekEmhKhEb%2FIIn1YpTllPEzsCqCQciJeXMAoFfMK20ncQGOqUBXxTraQP84GZ0tiSY7u2Cz6c1GNRf5H54jy1XUxAkS28o6%2FeMuGEfciL8AYOjx5LlkxxUsYP%2BWBhrg2SzSIMgibvNd%2Bif0P4YcEbP5k6cFJ%2Br%2FoDQKVVtQYfP18wtC5QFjKMYLjKEpLEjpoxT7Rh%2F7vNfI7e1hNpx%2F%2FykRlziMCuYj%2BxSO%2Fwrdga%2BiVCcmSa94p%2B2PPq%2BxhokkzxykNN8ZtLOdjU1&X-Amz-Signature=39237a12094b5093d07f92d3edbdc991b3086d55b32d5b80cf049cd862261031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
