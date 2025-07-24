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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCCKSVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIG%2FUnhXUD69mlOmk3bi7u7I6uncjpXCkso%2BgcIoHCtVTAiAO4A2DFe37%2B3aqSSXSD4VlwVwUOMqAbvLVL6oHCJhzMCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMtpIf%2FUFLESty9LzSKtwDYKuoZeArnTHakXOxvLcB%2BlJH%2Ft%2Bj39QdETNWyJBBevlXygdxijOn0%2F1hG7pgRKbzS60dqukb4YHJTUZIqLoSD8BT%2FoITybVdZUtTqqmCh6ME5LDlk6ydyTN7tpcKeRC18JiUzI6I5K3BN49DTTMWnj4vMy%2FF3NnRHvrihs7CMWmZ5%2FfG3uymIYhZNnI3n5ISed1qkvtdsFgQXvWDbPd32CQqHYo0jdEQXRz4d6sS7r22HgeydsStUnSYf6f%2Bzw0zaN50iCuqFb7tnhAXXxvpY92cETA9u5micjX68d4xCChtP%2BRpvVeZruUvkhGaR%2Bs70brapTQJh2NdP4%2Bad2PCO4%2BctVzaWTIk3E3ac0Df9GwnDyfya%2FirCzOm%2FjI09ZSze%2FCg3gU72bH5dBpTU8wUIXr8ReWjhardjNt8uhwPiyWZx3a0YFJ%2FdwYlHnI3ciFg%2FsUAXY3tOLVtHj6tfd5OxNDlEqegKpB3mcOMY56aV7rcW01g4UcYq%2FM%2BZl5OjAjVTqCMB8UXxuqszjPMxjwAhfjJ86PVYwAhA23X9thRN%2BdkUWyj1gcQRdi%2FHw9iPKE58oAW07xhkvmqTxHuGZi%2BEUV8meu9Cucz57yO4aqwocvi1VElxJONOgkM45gw29iKxAY6pgFmjEl%2FPt1YPlwKicacVPLi36f%2Bcibl1yJkPNIVn8p0kTAenC%2BDcUZSnYrTJZKT9KNjJIxDXLVwrnA2N55x%2FlP7l6CzB9G34%2FlOhtZQtB%2FCgthNWKJ6vsxFcFZOHbI8SUoegiz8%2Fn%2F4%2FVqvc2aiEWObz4yDfuOd%2FtXNnqER0BMd3MGl%2FX4S9%2BlA83dtLCTJB55KNU4jeI3jUZjhkOa5AHFl1zjaHyNd&X-Amz-Signature=fd08cb16b1f8c3a3c28f8b5a08f8075c728ac9c5017938c61248ca8344f1d309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
