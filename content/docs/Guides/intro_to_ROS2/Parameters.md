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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA4RMR3Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQChWVSrpAH%2Bt36nnfzggI3oCfQ%2BBQ3DHLkc8Hol5tEGtQIgAgr7aqbXT1tWeSmSEDizqOCbKtIaZWv0vtdt17GtdFEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt5uS11Ns0YHPlzUSrcAyfPHda48aRk5rQlzFFLLUdxklMS86iHLOzK5M67ipxqithG723FR7Itc%2FoZ7dms1BFOuEwCPusZhwFJhKr0IFFF5b5biaVI3LdX2RtumFoD2YuZocnBna9n%2FDTrIvQrI20L8wq0cq7UE6tpqvNEzddB9Ilyf1wh2RFpFLMKujTkBy6N7fd5pJYoeqKTgzIWoxnrEYkaLwe5ktwvp9cLL43iiZGjEkaBDajrF%2FJVIZZkE6Nbzr9Z%2B3YYXotBj3aboCjXzhmDZeoJzMmXUxjWmmIK0tPLdU2DxRou2AALLCEsniGVPLP5RYjKPkocu5wplsvcRpCvI66KhsgeIz4EWybqcyXDBwcPAXoMfL13dxHjJNK2KsY5ObpX3M8hBufmb66vlI53jiju5AkGd1oUfTf2t4CAnJm7iC%2BFWG%2FGdpoe2VwkXLbdEzJSZIx0UaR0Z%2FMdgEUzZxJgPH3knKbba4g2Ql4JiLcC6dBl3nt2x00Is7I1CU3K32a3K2pB9tDeD3U80lOfjduUrTmqz4Hvzl3JbYWjqrAw04abQyLb87zBGKKc5iqV7FP27fdDABFw4vq4JxnSiT%2BNp8%2BE7m7LDAHc3HroHaaFaBaOLNBwxhNQC9jUxV1ad%2F4aT0XBMP6wosQGOqUBuvcLqJmpYLIH3S%2B5temP9lzwBBoJyttUyqSI1mQO2ftXsKZEM%2F5WfkmnRvSD6bd5kCLOAePP98C424TsZMLjwrpSx4weTMURSFDMeOX%2Bv66kjc1fhLSyHY68gpCArx3mItAYWfsyVOMROOtexq8cpcKRKLWqfv54D%2FCyUelC%2BkOvuwa7LEjRxY1iSh2v5fZAuwxGzgBk%2Bo6adKrNe%2B0aywjlZOfL&X-Amz-Signature=e4ee55af2bac5dc71ab5ff3b8809f62871e450e7d9e2001c340d80d942f3097c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
