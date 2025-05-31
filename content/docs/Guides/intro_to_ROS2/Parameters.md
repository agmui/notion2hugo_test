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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVULQ22M%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDummTcKmtddO28vNH%2Bl8qSRguX0Z28CYldxxihilI7ugIhALqrkbQGiUm3jbjVmqu2DhrWB%2Bjeil0SdIIWyK2XWxyzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqZ1GvKVuku9dI49gq3AOA3Kx27bMm%2Ff81zYACAjwbTL2wnGW3gABT%2BewLPQDfi8cmSz1h5Y9yvwzpM7M8b14%2BbfhXYTMzHqXHqvlJ92ZfuAMNsi6dHVtp5BYxEQuZmUaeCJHFQBtkQYcBY%2BQDF1fW0BGvVbRhkQGrAOwkCTkNB0kBskduCBiH2hgHi7eLsMwotoH60QHYj0HOgTLnd4X8pAC6O%2BbKc%2Bc45E%2Bqb0tNfffc1ID6v2Tu%2BMhe9KInHgqD0bCOtOHY5XB8r3r%2FBE14MCmtD1i%2FI7QWFP5wKP%2Fnq3ipfWv5FMvQr%2FVTNalEQi44llc3byKqTSzHtWHcEEZmh%2Bmsvu13LlEL5WARQl24hQiCNhCW3V7oO9tTimo1V%2BGDye1TtcyWSXCZgxed1RfR0eigFxOws%2BLNMpguX5%2F1Pxgo2CHT6xiGyCbxTW0Q0DZg4mUp5hI3N9gn1PNZtkmGyQSpX1bMLTdDkFsb8aVfkeOfhdExt8fv450FkdK4hqxR2Dj9%2B88h7rCOuAE%2B5aU%2FNJ97jtG5pBnc6o7uEL5TNVFBct94JdJMoK8dzeF4o1p7aySwVUvulWy1aWfsVPwupJJ7E7V1D%2BB7djQKXljxXEYRXi6Nkodi1Q8K3lWrHBcjc4qEg8%2BDF%2F2uJzC%2Fye3BBjqkAUlKp4Qbjw5eWtnc3VY7aArRIe4BAmtAxYDRJ2RtGg%2BIlFXIzuKyPrTh3KXjD4iXdWjiqGwT8PHdBZ7SggSviBO8iKmI%2Bpv9QA%2Fm2EilPVB234B2IJuw1FnzN%2ByvFYkymF7l7v2ExCdrotwSibeFuzRleZdxbqQ3Hdi1xyyRN0PPzdp58SzFgAOyf05WMSGb1DG%2FEd42YPJzh%2FpeNMODViqoJtxg&X-Amz-Signature=1553cddf79a37c454aba7fefae28e26d9f8c77cd7251abdcb9d2f5a01317af6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
