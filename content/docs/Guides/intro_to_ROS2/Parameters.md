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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAXODFV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCV8S1aF6Bw41%2BxUSmLoMg9Z7t%2Fm5Rkgfy201GcNDvUJwIhAKJCkPDGuJxcUgG0HaCOvwJ9DTOW6aC8t7MC%2F3sEL4OfKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF8W%2BOo85TLDm2wHQq3AOofdyXv7RyKYlvSbTxYzdSLYbpAJTMqZVaOiRRtZGzoeKsS0NbdrJi1Y8qyj90qjPCH3VfmFR%2Bamcyt8s7DcwIVpg4p8IFh0t%2FFnCTE8GksU1TmGs7XzNaWSzuqU3X5%2BTijaGVJL0mYXHVKqh9%2BEuyEzBpZX%2B6Uk72T%2BkxLIqWGAxTMMeGsg3HSbk%2FOe%2BWP4SLSxT4ZQtmUWbbtdQxFpdII1RL%2FYSV9Xwbj1f2PcGIlxOGIIPKxkHg0K6S0Gq2qVPb9aFX31ijREv1L%2BehHDmN57O9LahaYaWgqBWH5%2FYNiWfRmXpBnWBVHqE2Wc3y2OEoPyWm9PfqxIBiV9i%2BadoEf0ko3LFLnomEu84%2BAYS6JLNCv1m%2FV8EQAERYXUTVHzgO0v40WmH9BRuF5sKrY6Nn4E8V5l8qaNLaOpf9OEjTjJZRMsJXNT02ixvelIyogmcUlaxv8Z%2BE8HklncaRy43miJn6uvxeq2aohWGnUogMNX3uuaI5vUr2GOELac5efNa0ZMySJhwwijRvsiLkjN4DW49kaQXBXBexJIF4C%2FXQVmx5T2h07tB4AQgDrzYjIjdss%2B52MR7N3L64EgTOXwAFIH04flyq5MyjvM01zPBhj3HEB%2FnlAL1%2F3GiTKjDvzNS9BjqkAb3mSyWs2SkPihF8r7TO7LfsSU%2F%2BEYb0pyPUAfOq3seoW9ziD8e0Jfpxn58FqeGoethSZq3a9KSly0oRpYNV8GgTdueyYhaqmV4%2Fg2PrYgs%2Fje9I4P9dPtAZ%2FeIsdN0%2FyY6Ok59VeMD8E0uUTpG9kPLE6eb%2FMVGohp6k4GJ5Ms1dU964DfkrwSWeHC1llwOaD%2FSwWDwXEQq95DzgjCl2BSB6b1LG&X-Amz-Signature=4733d93bbb77b0ec3ce57818ff5b798407c2d9b42fa2a9cdc3cacd588a0918e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
