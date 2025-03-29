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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34HPXJ3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIG4SzFgvYveVgPTfBChzcncoSbkc42Wyoi4A3ZTlmKUSAiBKNbILKNuixmESxsvMOzNPoXIO1NyhB6thF8oaLdfu1ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM184xopB7bv3g2ly8KtwDTfQEs7cQUcJhA%2BeBUTQCGIlakNqntc%2FOoup6O%2BV5fKR5gav47Lf%2FmPRMKO9Fc5Xsv2wyn5KkysiN7szO1yZYmBwLH2A3LtVIUxMYIwO8hSO8aQhd3tWskhGb1g96sMDO9Ihu0IahlCwHakrPNS5qXDfTi%2Fobd3ZZJ69S%2FAecr9diXNTChAUWVlV5qhSkYVnnB95C7FK6cKe1rrFSFbSCG16i%2BlKgFqzhl3%2B0H2ppQ%2BKdPmRD6i7v%2BHhFzuBNOiBTxv6LGHnrKXLrsHOTxvKlqcJChj1mPP6nl3tI9nwLZf7nF6xZ3CyFxMRRbSdjIc7oj2Cw0VyeBKLo12jWsZW%2FivM2CxUiEqjL9z6Kmy5UyQekXvgwu5zCap73qAoiwtkVciTOXrBKxmiAyCjcrDzjU4NWiELdlXQltlNp9PYJWAXqx8ghDBgr4wfMsWIWyWMEthDeKO7pRoU1M%2F09hB420yvSz6INR8kykFJLcqD%2B7ruBoqU3zlwYIaFwJEda%2FeRyfVO0iPKbVxrap1QHgefvfcF4kwLC2cKv%2BQvmWbIco0SCVmADbhVxoIROSoOFP4SmtAURow57PWIzHrw92PAfK0KtnNzFoo%2BTR%2FGy3OSsZWAZ5q400m4rUqwNXjUw0oqhvwY6pgEK9NpOoj96AKTQn%2FHaGlm%2FmeGc%2BohGcXyDJkx85d6cC7Y9hD6EOaXtTzxTWWGTdw9i5ON9wvlmaFOZeQVxQRSAgn5JetR99jVgzCRbP5rjHnO6UfmyDfABwLiKRnYu3dE8bgbfljcmiYS1vJ5yNtafRWMUJ05AE77EMpIo1489XKCyZ2ly%2BQON5T5unwZ64qfc%2B%2Bdi5kFosSieoA6S9gO0numUnki0&X-Amz-Signature=a22b302608042724f71f42712bf2a82d9e705781ea5524ccd798dffe3531617d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
