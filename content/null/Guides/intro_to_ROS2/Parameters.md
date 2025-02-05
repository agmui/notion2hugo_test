---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323VDEPX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCbVb%2BGGJYtuFI1OY%2FGmoD4zPt9Dz%2BvBqtBrFPbBnHXWgIhAOmuOeZs49uOKkvAdRKlhgyBKgKmsiqrGHYN6QZhyFjsKv8DCDkQABoMNjM3NDIzMTgzODA1Igwo9RlLCC0TUw1ziWUq3APMqL7Q7arLc0Z3ftz7uauC0JzkE9SzLD8DrHDsWTye6G09tiyWzThowAiqqLj2k%2FOncKXAe4CBaPN%2FiAK%2BNsfP5a4iQmdm2x8iASnQZZ2UnVJqkIzsaP00jpnFHH48X943wg0vWHp9OCGWO8HgpjyxWT%2Fxuv46D%2Bg%2BxwszQJoaRAQZjE7XjDVwVVC94OdmJl%2BdGnNnAZpqRxJXlUFgN3RUY3BO0e%2F2SK9QRCyMx8Nnkj17HLnESGfUXJPtyAb9dxR7Gm%2BXHofaf6NmNacWyI3odWj4%2BQ8GSBQh5OkunDlf49xwmRfffdqyf2HK%2B7GBs%2FQUTeYx9N5rJzp%2B9xzqQeU%2B33NRVe2YWajQZkt4M1SLVnLturtIJvZ%2FKoY63Q2GZZnnSAW65O06%2FCfYz5t5kv0ZMM%2Brt44%2FJk8fwmfSpjZjWtgPuuo3Cu2LG5PHm1p44gtUnVzSJ0QjGBkiiHkiLwre5H9SkAeoF4YMImKPZuBIh77AOfyObGcpt3S%2BtbqTd%2BZHQWFKP37WHQc037n89%2BIHxXvbm3AzNqa4znUkh32J4%2F86DO3JmpSDWoanJhamp0tbnTx2sk%2Ff%2BH2QqIbahnjXh%2FVX3zjDBPnrpE5H3nBDQa0IMCl2WAho3yplPjC%2Bz4q9BjqkAQoITZuHzfX3bmriQAHRB2%2FvnzVxA8V%2FO%2FloQG7jRiaPyfPdTe91E8TimKPf1rK8SaTlMo19W%2ByAjyzab%2B8rLxbF9PnhfRW5jFuAQq4ucVTNhxd1GxNeV%2FTWuBiAcXaFAFXY24k0kv3cy6aF7RnerFPu0lNtERFnJJEHv3Zhjl7CFHXJUcFJs0QeAzDq04du2nCnxLLHdddYWcgPFCgs0zUXffWK&X-Amz-Signature=076ea4c2d21302bbaa3efa13f8afe049f3090e96be99099bdb98c7e395cab4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
