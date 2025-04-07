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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E356M62%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbM6lGKXe6YV0CqfG5gRafz5vpg29IoK9plRZibxI8nAIhAKgmcRmmMw4H2GHFaOXWh3euo8fyt4gpvXs849D9OxcpKv8DCFoQABoMNjM3NDIzMTgzODA1IgzCm26%2FYCyR9orbTCYq3AOp5GlbhBRLfD0o2Mpyosan%2FlXx6xbZbo1vLl1EtYgfs4ubN9JT6O14Bq%2FIiO9RFHfCmrQLjn2c7zos2WWu68rfiFh60tvsSlkL5Fx%2B%2FixVjrx8VCTuWbbgJuXiBJ%2BavoTopWYMoJJ7wuqjt5gEIuKMOMWE%2F%2BxXyHzNkA0hLjX%2FqNh4u7Zcb%2FVfpmalS3yIYQuOkJ82pe%2F4Rj2G5LZ32Ui9CCL6jjBpOITkPUllf3EjK04DSEfkjM6wrl2nliKZ%2FYE%2BbDBl9DxH281A0NXrXsqgjPooACAdRw%2BLLQQx%2BwaaFeccSyqDKxag11EPAfypYoAsZFOCIpnb2hl22lczDruQ1AViH6qgAmcqyzOcIpTBqg8LXQTO%2Blex%2B629l2uprStYe7WPMZ1rDxI31BAS%2F0zSAFVgKbieRULE3%2BDE9PSxK7d%2BG6EIICXvLWOKyoayw9EK1H3ibgOim35U3VpYWJNBNdFfoN5ndn1cJG%2BlrTjytKfMDlWueZ7SO19vJOkpAcPDiY1WjD1qqMU2hpvaZTOEwR4K%2BCOR7HHnu5XB7LAk%2F7WrmwQBlmNZA%2BbG1qqRmDc63xjq361kw4RlCU%2FIX38H7c91A9nXSKwNZ1qgZx3Cw5L2vmsgVy74cGojsDCIoc6%2FBjqkAW%2Bhri05xVUc8Wif2SV3X1bC5qJJEHGqzTwLNa9YipQIMX7mPsJ0O1xFr%2FgYo%2F5QbHH%2FCkuVkcTVDEr3kHJzPqchL5UeREkukhuhe9qXiid150biqrFv37JBiB3Cy6NUcssiwZTTkmPwz0iemplVWLMVaeNtA%2FaVrwau00kZdoFt%2Bdj6gh2dJPLhHij32yStM30Hbs71lB8GTOkMdT6%2FvKdDQeFc&X-Amz-Signature=9b3bb99ba76e2482143a52872c72cfaba8d667f369cf6ff2b065f6fdb48eb12e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
