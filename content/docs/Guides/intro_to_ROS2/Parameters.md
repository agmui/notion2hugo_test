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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMAWJRVX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz19VuOB77kQ4h7FNCc3hn9Ztg5R%2F2u7FYaUJYTaDOQAiBXVRl8kKKLGWO%2BtAdTIbF9LEfr2r5%2B%2BF2JKH4yIKBsLyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMLHKBFuCfHBL8h2dKKtwDIRH%2FGfKtBx433FYieSBjSeQDB7kVdhQmN3j4541F4L7HTB7Ive0Oq3S8jfxXYXXBKw9qqNYfDBlzZ7ydzTya6cBHo3CWhaSCW1eznd8pPrQKJeQmpnKb2UL9kQ%2BZkx%2BeXaGrEpT0Lw6hxAp%2FE6GUSn52cpmdjyyWZw5STXWKA7Yhrz6BTQLJgbg2D%2B47exIf9weoBHCtXP5HaQ%2Bmsx7dB3BfBt2bgMZApDRWmObsDMOIuUEAUJZ8txU86Zxhv1V31EWALFNThEyYyQu6IVLPyvlO3Wrt07134g0JuU0Fdd19dhHyOCVhv%2FEWnga4WIsoa7FW3zx7jXW3NHsuaePOAzeFjvrYHqrWuz5N2MDnR0T039m2XsF%2BK6BBNKseu%2FvBc6rrsc8y1LZJzjRwnOofl06sxr7CBrztgLATEUmH899CzPWPC8cGYNoqcginhZ4vb92kX%2Bi85A1NjgqPwqpypkUIyvYTKjzpIwnTCTvpG%2FsIRhBjMQA1lw8w2%2Bg5mTBxzNud3A63B6VxUYAiumWuz0DibdzrCHjRJ8sD%2FCt098hfz%2Btn97ZMsIiyE%2BRHHoLNWWlAmIg14VA%2BsOH0mnZTruQcAJqCJ7ieiK9m%2Ft2YV6Nl3I8dyfdLPIcw74sw8Pb6wgY6pgFtZHQBGRzWZI%2BcS5ERhc8APN%2FFUYkDNc1TDXfMqy87WzwJmlNwoV560H6mqEeyy5HHvA1ULdtOj7YKCKFRBuBcpComY2Io2ZFmT79Tna9%2BuP%2BCdBHvxEx4x26fuQIVlBCkGuwrEmXx8PCzTAgvHIUg3x1PpgHGMhzX8kyHzPWh4NL%2BQZMm6hI5uoK1YsiJkkf6nU25%2FtFqcEtBVww%2FOLqBeXATByHO&X-Amz-Signature=141623296ed639539362ccd1e799f0a9621eca0ec0c794ef6d4b683759ad1b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
