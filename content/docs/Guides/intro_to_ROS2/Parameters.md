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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VUQZT4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDFhgd5Mo4ChTxq0DHPxQcSpIcyF3BwGwRGaaJ06oDcwAiEA13pqkO17F8UKBAyX4wbjrcw7UQEGZY8e2xkqQziJP0Eq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDcrUDFDcA2W4MU%2BnircA6KisvwHmOwXC6qqqANKZaUWMX9lrPDTK%2B4aB5QT192f0gwtgZZWiaUj7osjEbkGnw%2BJ3OCfMABp7xX1kdkHd5y0HM5MnxLoN5Z54UVJ%2F0JsuaXzZ6yjQ4kwpONEE0XqiOmMUIiEwSfYtsBEyRDv199xwkwawETC70gy%2BfHye6PuJ0cE1EgUhVW77viW5qhQU4maZc1LZ4U7aFXUYKGFkyIRtm%2B%2B7SjYm%2FaD9Uv7so6QUM%2BErAy%2BFDH71PhFpYMY8cHMJ%2FULqf4FdfNesKidJFrQgAdviWQ2YkPB9H%2FoU94HjIOixW53zWklZxa7EA5EFdY6kAi7PaK8j5BpJoUUmv3vCRocZSl68EGB2SYOFN3Re45Bcyu%2FmzA1%2FDg3%2BkYY4B8%2FWgKlEvdIbSqVM4fTiz6igFToNvpIDKQZa852howBvwynJzYRqkjmqLRUAPW2Z4IZsH3QzzPcrPZOErXynu1BvOfM3bYlyo6fltTvx%2BBAXv%2FjyKFQsqHVXyp4ghMVxaj6fFAbTG5nMyfAC%2BcE9rkev09tMaGRmzfqIre7N6%2F1ZMGTqUE5KMHnaMdYIzXApf2ETvGV1TXLQO3b%2B4mGZmmelBVYqBfmp65ikC7wWUujZCNvasD80gjW4p5%2BMPjelr0GOqUBibElbKZDna2V3SXFkf%2F8NXIWGl3LljCSqj0FflXzKzHk6ctxuYRm70CAa5hToDbldKB6nLLa%2BbsTahKjc48j73eGjcFz%2BaxJKMl38%2F%2BUzceokXZN9RFWSfUkxP5v0ytXDW4Y65oc0AJbC9VbiOZUNMrzIYJJFExV%2B7eqFTklU6b9tZROH%2FcnnDJlZjtbhEy%2FnptDXsY2EjgBw%2FySDOXKTreeOrna&X-Amz-Signature=47584d439121fec45a561217f9467a5a3045980b717a42fd528b5353d31ca973&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
