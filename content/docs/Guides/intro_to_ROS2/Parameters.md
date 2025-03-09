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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAMFS5SF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDt8VzDBsVCc7am%2B3t35EEblFs2LYpV6WdLaUC72rDHCQIhAJumFjKtop3tmG3NkyCxKjOxM7TSvxuxdCA%2FCY50xQAWKv8DCHUQABoMNjM3NDIzMTgzODA1Igze1l%2BEXESIKcrsFWMq3ANT2U%2BpuAz0zZsnENEmLS2JkvUNi3axkc%2BpGaLcotgWGQm%2BEdwNu2QTkZ%2FSYFEiA727QcmeIY6SeJ4egnQtV%2Fz3Ce2kh6lykm8l69OsMlFufdw01rHJLODvGUF03Nqgu5BUdKGlIoCRtm4CgKEZ1TZhWq85kktaXuVBTJRHQDHzmlb7Gh5bJW4QgboeTVo6KSGW8qpvABgztu8KXr7SPBNNwv6V7WlP3lO7WHyfXlPorc3EpAwm8BIk0%2BMmui4p%2FCoTAq5FiCJQirFOZtUQryOqZ0KPlIgohi3tocN%2Bqxbn9bnzaqWrxoXBZamCAI43f3UTCm%2Bzqz%2Fy7KtPzC89wzFcAPZbgnbyWVS0T1ZFcs7AhlYZ2dXKigeQNS35FopUinJ4N5QVoK4o6SFu2tTI6mcaF5mXjqAMlda2EgY3D7pishXo%2FdBOgm23gk7aix7%2BdYOuGkYCbAzSwoNTPq%2BCWLunVTWrasp537UG6XuZ5J93VQLLWaRQQ04JnRmYCE1Yiabm2plWWmEXyLCFOh6qALfsYqOwy01%2Ftu4MY9kyUU6yIdNui0dB%2BrxxU%2FnKqg%2BvkuefTHAw136vLnC1EilHYS2WcdrKf5tyCb21bRt4VSInRdZlti5iLezwGRnuwzC1j7a%2BBjqkAZg8Dz2oWT7rl%2BvJ53yyA8uryfmuJF8cNObD5cquPlD7JHEjRVgeQk%2F1bfw9KWNl6AM2XCUuW3%2FK80qXhKVQLfTQPNBjHn7Cyjx8aKsTCay2kZZeH%2BO3WafAzlejtiiUOyfl7SK3bawkb6ilcnrMRGDc4vAM3l%2FZWkOslG1v0HRdRKkPb3f84oEfNxcRi2WW4bjgeHcRh%2FzpaoDoR22bRz6rutcx&X-Amz-Signature=74af92b9b1b45aba728bd88507603259fa8ff94379ccdd4b55af9a8b9f0cef94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
