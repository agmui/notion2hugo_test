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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HMZTSJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FwY0T3IIpaMslSoulxd7w1BLfwFAbQ%2B8ZBiw2TfEUDAiEA0Obo9lXIJRQes1JFnKvCv8cr2ZZSkpNq%2B5VscA58wFwqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBuTjq4vrfS%2FSla4yrcAxTVlsq5HE%2Bq7WCb2jyLonS7EC83mqLOKMStyXupJ0bR3FC1rLuHMbdv9mg3mrYuyvhKB%2BoXJQ3pAjH8eux4tt4Eok%2F5sW6%2FIjAbLeM75pKnxv5Mqd9BfSCUdw4C%2BA7rBKbOQy%2FgakuyqBUPNM9LcnnC8ikDiV7b9uMBw6cxm%2F4IdmXoxqXlYpj1MBVPIHXL3YQfRYpop1FyW7whfD1A%2FYdjz%2FU0svEA9Hdc%2B7%2BMQQCkGUsk2r6U6CNBdO7vELNSXzwlpKGsbUqPaetPMUrorQoYpcKVvu4C4tteTRMSydjDZQAZhoBo9QHXdZeYDOa7%2BSA%2BHN0534GuqOJ21kJ7nL5lqbr2UWaFL1%2FYzyyLz7E9LQmNx7ZYNpDZ2UDjdtXA6cmWO549zYZEAyUxBYyiFueUhOSbEC10Ll2u5jWTqJlgBPUIn39mvCbODdCE1nl5dxlS1RkwHAopSlYO5iWpOAXtHhRS8OIvuPfGLZwD%2Bfwxi47yJJyLMXYurUp2O%2BX4fqKYENKuUpu%2FuMsXgDtdwGNnjsnLkDvkq4HjHFrvvlXvGq0nFJWR2wb9UWS71IvtX8AZuPYq8c8h9plvOs%2BtQ5gyiQyF6VTz%2F1zuG%2Bnl7%2B6S%2BTZYR8GSSCCam8eLML7Ru78GOqUBqL91yPfkRYABkTNvdbtwdeg%2FwwIagwiGJHQ8lPyCo2Ts9vUVvQAoDT4zzhSD3doYCs3F%2FMumYX7KN0Fg%2B%2Fv5CRcal7MRrL9HsWmXhtKufXXECgwhwwfP%2BiPuH72DVnjQWe9uY9btZhhAVVPDgFgxN3lkdRzzK73fZJnp4i4yqguCPsxemspmco4yJBPvs6bw0kIg55FJr3nI%2BirDK2x6Ews5BPvr&X-Amz-Signature=d402a011d0fe0739ce3428c9beb32c617755702939574c51aa12eb22b7f953c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
