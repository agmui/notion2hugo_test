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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WYMGKZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQClES53PG0FEMLVx%2BYz89bosgoIv8mO5Rx1beXp2LXwyQIgS7du3Sm7o%2FXthuowWfnFQrPIH4l5hNmucaPEYooMpOcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDA750NEJEbunxJNoiCrcA4Z2FzVEjzkRdoPVbJ2duEThc4zWqAuH3eujsInSHkp31LioZXcoofIURW4rRjOUxCVk5C2X1M8aSJwCdq7V%2FCaUu1kiqlQyrWMHTSWFZoKpOusMRBRdXWDcLttx1r9POP9kp5Dt7hov%2FGh7lOdUwVlJAnoK1ruH%2FRRG6iYKv8YaaxzW6GTzYKMuomZFhT0SS08bzQRt3wetr8VTriekV0OdUTRI8r%2FETtRNe9uBYOKCn476%2FsXMZ%2BvTO7kYdn0RcKWdDowc8DfniHjWSTGpB8kil5Dp8ORuVhfzYMina4OLrEfqQeeCbRTbT1GRp6TGetMJl8Op%2BfcqzVoi4VQR6O5jB609JIr90jTlPg46dwcs3xLwbYZ7KG9ye%2FuTqeD%2BJt9BlVof66s3bjiJ7%2F5JXCoI26N7ses2rGBCfVlj0BynWOqF8bEvSFFZZ4a9N53ZwW2ATF3OkJB9PoAPyV%2BoLAaHIkLWiFeKg1eVslNjmwbaszrothKZFkguChKEffmOD5zF4l84hFzX4N%2FOCzihFzhe478qC%2FKzQi7HcceHEH0oZuc5S4zBQWsagiyQk4TSKtUEIXBmd8jX%2FOSlKqfDlvTexQtBalAhhLNcWZAzp2V0c3YB7ZYaKzxkiVXoMIiQisQGOqUBEXbTqRF09f3dM806vX08iLxaK1iHk7vionWhdL2aMRBxwOtFXeuqFjlJujckkSKG9bkEaUI2mRreaLLlB9wQVVtKr4UJXrlCOAOlVhZHqr5JCqJJg7lzHcFTTlUQOCt2Y24cmmLn6LG6Es1ZRSQ71pXFtZDaJmTzJLJxBZYposw%2FstggUaLqUEXCuA82Z%2FqGnZbOqKnG9%2BvUcxfiEziYeanDpBmG&X-Amz-Signature=26925eba93a2621bf830eb42402277218cd3354e76fce9c15385c0fbc06ce948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
