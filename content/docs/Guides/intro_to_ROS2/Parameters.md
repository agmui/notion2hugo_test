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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMF6YXM3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOfkQ%2BVheaNH3Z%2FsP%2BuejcX0%2Fe0PqJkhPVq1pqeqXAmAiEAwyCIar1dgGjePsxegr8qaF3VU7xWlF1idDCp%2FXcqCugqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPNE4WcPuFT%2FGeruCrcA%2BOdMCVGAMQmKEMpEAsqasV5dTDYKVrf4tQdK2ZtowbRsCK2q9eHBxvxYEpCxZ1ocVOPJgCuupPpHjgyYQ3qdk0Vb5hF7nHYZYjGPYaDPZehe45yCefjHKf7krcgIbpQWjR3akuzQNINBCFDT6yovphiugPbjtz8CrSYujUEc04IgI0orGL7MPlz5XfTEIpbqSM9%2Bc7NHbqTBFL4Fr1R%2FVpOvmIeYMD%2BSieYi4CYfjxWV3T6ooa3PbKnWaNWqDAjh%2BfLd9rpzV6Ts8uKssM3gvk01IBaoHgjpOhymiDWnIMrnvf03HbJhaDMehiKXgg3gOfxLuF%2B7QyOIrziOfJZlCFR7Bqjr8iqTSKCX94uptZFRUbzRd%2FyxrE86nb2cqBBJHlLRLrnqmsQNYzHfq7474nbDTn6ioiex2O8sqFpB1JUqgworDXlgeSCuJgIG5D3fS7fKDFovK%2BWnbL5d0zVnuM9pviOu%2BQojR1yCsP3ZMTYRZE7bo1kVoOT3XfeoE1caaBK9QC%2F%2BKAHSRFJ3jhPlinv8L7F2ptO1R2NavG5joGYE0faI5XYcuyMeYbb9c%2BmAcbaC589IGHoDUinEA9LbPX5%2FvOHhODHsmZoRQXh1%2FlkmVVpIvGesgFygnUbMJLWm8IGOqUBMDXCXWbdVnbe%2BrFvpCz%2FdydHTplVQ%2FQRaizLbjMzagspajM%2BMqZ2KVOeU%2BpfLgGFQTHzBPdQ8KovrEZ8KK5Ru25CYm%2BgshSZrmyxKuGciyqsjTDLqF81lcoji6tJ%2BT99EZpe5hIhRYDhsmCttuBApoPnPOxq8HikvhvJU3%2BG%2BoKZ0kGe7vjAFILg7RWVgsAEUzGpYZEyNpSSqK8Bgcc%2BLZBteXkt&X-Amz-Signature=76c1db9891c7cfa95fee85251dead48bc5126a213aeed74a5b4b254d9dda87fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
