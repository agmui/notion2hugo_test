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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HL2TQK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFIWneHgLHaKjDL21TUtViNh%2F5AYfa0ApjjwSKRpOiiNAiEAzgdJVxoM9GnMkW25QBmJlCWlXcx0T%2B6Dg4PkBIz7DcsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLqVWhh1tQa8DnZ6SrcA0fx3qjwTh1LekPUW7c6fHEbtPqcLpJMWJE5l4n4UCn7LyvekHG%2BYZ7j%2B32K7qMYzIL8XNNHoS0aBSJdwoc8d3Ww%2FuF0nfL%2B%2FV4CwMJLmoTyy3Bztlx6ZJQXITFp8hh7DkouoewkyzBVrWklusNuUDQo8e%2F42HDLJAUavWXG%2BvrImAWeK3I1JUxtt56kzfH0zLDDZepRq728hkuy2zpa11pFIfPmq7q2HUpe4ezJfRjy8FumbzwSZw6n690wuZ7D8YvjKsouZCMC7Ze9RbFG2m6wzTc4GifG1DAcQvvow9QPu7ubYh7patH%2BWzECB2KpHesiySp7pG6Tc87Ox%2BZtMOFntjzKMp9bpW8JmPsOEU4JeCAQ6qhF8WmMUoQVTJXbrCzOhUXtt4WJucA2r4C81EAEoLyYn2A4EgHvyXjzlmLV5AKKq3Hrr116VNuEnpljXd66P9f2Flpp5Kuk3PPKmgIGyTVZH%2F%2BM5kNsJDxiy4yYraK9Dq3ypuQfVvLiLp9PR1PTCxJPMVaiU3%2BrnwIopfjgdfFPkddB5t7TZG9eLe6%2FSC7OqP9qRzo3AWl%2FpBGj5gt5UQOozdC4PdbIPEtbc9sQZR%2FsKZeBy1dRajod6djJDiTO8F4Kjewcz7tIMI2x678GOqUBEe%2BD69lWtnx5rXctji2i2qnZXksPkzpVVr1bK82jkOpcQDN7gupQqigjDmao946m%2FNVXoks1BEKuWCyvpPlbj65bDV4VLoLuY5pY4LcQx8D7FpWOlHo371Do6AfWe1ftUQ6txL69uFZKRs8KJi8pDCUaP7NIQdqCBmRGn4G2s9R5cdgFnnNI6l87PlCd%2BOeWDHdjuYEDWKJjcfmS9fNobNs6vaCS&X-Amz-Signature=93dfffa6fc8a78554754c7c334fbad83bc02c9da0516c8a321837a5564cfbd72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
