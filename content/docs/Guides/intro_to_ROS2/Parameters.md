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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6XNGH3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbRRVdixClB2eqQRoNYggFD9YmotGOrSQHfMrEBqkcCgIhAMlRqDpGnoaBWo40YubTLRokc18Wilep%2BdYsoiR500bYKv8DCF8QABoMNjM3NDIzMTgzODA1IgwllPCL5mLpLoZf7gIq3AMxWlfCyIRFe5QN0Iv%2FfQ4XyN0nwrzgdzfRey7i8fxE8OsIFH9RdMWLNYPQcPzDFlVSS6vPtwzY7vXR%2B3728dlMxyqLNoTRVUYUeW9XeAC4kmhXPfbHVisaGogNKDdRAlfWAFu05%2BAZQ1gV3jfFGGbPARyejHBqJzsaqcHiMCxaXRI%2FkqsVoLq7%2FASG8vxx0EdMe80b867%2FgLJzEjvBZ%2BL9FwoIq%2Bxjw6X2o45NPBpea%2F%2BsBa85daFGfdS4ReisBXaOmQggmDeq8Iy3CPDwkRIUd76iSJKyhyNgpob9D%2Fd9EjAMjKQL5i8VUGnz31n%2FUkF2wBrPeAsP42ARCjCUshI9AKgdIPc6uhLqlQI2k09fwqwRvb4jHc3N0hrBiVrhFWhzunSXGe%2F3cWFIPu2A%2FtIt9p1QL3ZEqyvltxAD7D7jVuwOyuiXz6P75SQCSAGmu%2FSmhGCtcrBWimBfLD9p1n1lDssf6jclmvqgdgvGKyFxHnNpfvi4WFdiGV2Nar9z%2BUjNZUucHlAinV3qk%2BQQXoWWvHGS4PdBqqQZxz0CcA5BwVhjmLuGEPZ8ryXwHS%2F4wRyAxW6G3azGz7tm0A72AMh7zOWvyHkU%2BPYKHx%2F2X%2BY9FpCC6V6qwKAFWOCQFDDUtqLBBjqkAevbehkCVNVJZrQy6BNyaoBNyQM4CngiBQyAj9QSe2Z3GK8jA%2BCPJ8J7aynyGdiEXJpLzJ8%2FRPDLoyd%2FIGp9H1FbJBJJ6tEVluQw1XSRBwnj76C%2BmJfN9v23vMZIEOjQi%2Fu84XU1SLRIDYZcK9JlXFIJMv8T8rqhXiOJrmrNy8mCdDNh83m7qELrmZj4dlu2mTXpzvVd6qsR3epKA7qC1zNwCdCF&X-Amz-Signature=44071aef0986034f97385dd7ce9bb33c4cd581f56a5ca90819d3efc04135315f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
