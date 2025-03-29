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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSRPDF7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEuJF01YFCOPq1QRIam4tE%2FUrPmCpxLqWjf262xreVncAiEApu2i8GtKHnUZg6b9YxA%2B0DkkuSUt18tDPb4W%2Bt%2B6Qt8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDES2AzmGVdyXHcHz%2ByrcA4IrdU4Rdie2RPPukT8xxwnv7kLuPJVamRxWQWjZii1VTd4mNorqFWN4ZBewvqqm%2FgJkH5Q33l55i%2Bb4s5JAV87sTbolAGsIwIipP5RbCJ3W3jt6oimDtfRvn4vt70Sh8H7%2Fs8nJo2OA3vOCAwhpror43z2X9Z6r7AqF9w3TivqDY5Vy9Km%2FcyY4PD5TvhoQCmxbaRNMQwrEUOPky%2BGHPhbGIVB4QqclaLIwkvc8pDf8ru6loidUOgiXkqbSTz22DG3ZeKRqreEtWux8NeW7L4K%2B1AVwrGYoTCSHfP0PraSNG1c6uN8%2FQ8IoT5rtfODRay35HUS5eQ2kSqZX78RclSQU2lO6hB1Yt%2F%2FaMKHvzcF%2BICATBdASy0XJ7fbUajL4QuBvTRntGlfDQL9yhe5FUb6NCp05V88ZIC75fW1cxboROHxgRUK2P5N4A4zABgi01Ej2h6qViHo2fVebgva8lqXvTrTfbD4tT6KsUpnhbX%2FqJOqIR0Kt96AVdAbJ5Douy4%2BmTX7e9oCaR6fmXF0qfpp55tXoGEFjZdnXQM0Oao7JDlUpiQyjiIkzJBgHVNY6n%2FFbpBBvHgq6n5vziQI76A1wmY9z8dP4YKlY4H%2B%2F4ArvTLYXqTV0vcDKD2o8MP7bob8GOqUBUgDMevamxIlkH24rxoy5pzsnnmYhB2GOG0%2FFIn7jvu2T%2FZzBqmqRbELNmw3nrdGMHWym38bvMC0TaseBqCdGcMczZ%2BJTPhGeFZ%2F7Cyk0XLQhp77lDdOWkMgADDmDgt5Wpu3%2FagGdp%2FbUiQl80MtbA4jBZiEVMyDfYKvQqXZw7ALJMT0w%2BBLZEFokQOg4Bgu%2FETMGdOq2Dk7gWsuPzIVF8zjCFxpq&X-Amz-Signature=7df19cc614c1699663b3ed393044e56cdc5054aefd9cd0919114c951de93566c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
