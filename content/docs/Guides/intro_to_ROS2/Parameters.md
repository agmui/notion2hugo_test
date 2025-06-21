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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQN763Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ0huJf5iCRITlVMZm27kr53CtHqfI5GynfaPRepzzkAiEA1iieKu%2FgcO4Yi4%2FQx%2BICZNrHRnjZRx0Z%2BZZ%2BeJaQbSMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw8V%2BxmLwvoVsbkPSrcA6N%2BX4Fiofy0Eor0IiB5qAYo02972N4aYH8L%2B52aWlJ12RNVHBaNRdfRH7BrgbPCq4q6lSiXnVCozfMmM974ij2BULnooCbADewshUGTSALMdLPLurL7Wyks9P6yZM3ns8ucE5jbxkNYZ0cdVZ0AbKL9LOxwCXaQ2A8hdgoGCNrnCpEvgTa9kQ2dNZNQFS9Yf1Kz8eNaVZExl96v4VWd%2B1AhRgjt0q3NZdB6zoH94%2Btww%2Bku6brRbI%2Bo86RYIAxAUd7%2B8xL7HwhB%2F0%2BdI4OFHLYp6nyQQ241RMCpVAe06r88n8HihLMpJk6lqTwQIfLTeOA3Rv2KCv3KZkodTA8jexElI35zNUSeR6WX6aMKmAb5wXzUBcAPnTlZ1doBQ2e14%2BYq05lau92lCi0UIC1EZ6GUFuch6AR7rXSLguojW0I69kLry%2BqtRssASZNqnbBxx6kg%2BXEdkUmyEFKWAlPEfrFfXqvixbJrS1tCJZJR7hGjVyI2ZYm1isOVOtRfS7VKHxeXAVPDh%2BNW4nMOYlzctm07Vaw9xni3K9mcDqfUDWUt6io9%2FxNsgfMqzx8m%2B1tYU9IgF3U4p7pgkFX9CLvpil0hU5l%2B8j48P75SHmCmRazx8OgBdwXPnJge0zCAMO%2FS2cIGOqUBMaaLzqhB5j0KtqnE4NuAKFInNUlUq9pU9zbYGi83B85HT7zGGVkYCX8j1WaZk8BTOq3kzha2nO4NvO3pDws0%2BS3R2VOPitJESH9EPui7g%2FAjYzFLvJJs82TsP8yDQPLjH0pESh5USzTjFKwR9MAvPtSenLUqE228lEQCObVBh6c3M6twHw7N6sKlBxnlSJhVJhEQkfoxR60xfKC55YhMMIbF4EfY&X-Amz-Signature=cfd9b59ada45f8fd9d120d512ebf75039d33205120cae665d2bd39dd5c0599b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
