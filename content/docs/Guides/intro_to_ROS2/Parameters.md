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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFKN5HY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNhpY0JotUm8JRtIlK0JrgylXZirwR3o%2BNzd%2FXELsAtAIgOE7WtLRL2x8JrVy22aph1wz41vUZhgg4HLFNEwSSiz8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFy36Oot5BgL7wI0dSrcA6kh2k9cy21FoAavHsiOLQc9TaTsquSnNftLzsb1F4%2BPxlRADR4AgPPEIatfmAFgpzldXK3fRd4nctfk9fPNwZN%2FeRBtbhUMqA5lWFYimRK7N1yzExGhtFw7VNMTXqOEsve9xRwoCqp9%2BU53%2FooaZ%2Bkm%2BNhAletzac1vq0dvZ8LVS%2F4H92a37uyKhqHxFISUmV9pcaSySvVnKp6p99rov%2B0WJbiY77UQfbIIpXh8Y%2FtJHkxT2xwIW3FfNLEviGUqNRiaMQRxiPkNYHFqWlkLIwqpzkqATDqodCYrzXyG3R8QRbdkDiWarpE7kE6elUWbv5mUxFxDEbQ6Gel9ICS%2BFJibRuKbX64FLfApebIuN9Dh95N8zuw5W3Q4XQFJWV9kyBFcdE4AT8aSmaHeUu8XHuQDrR7HdQCjfFMKAmvGDBv1W%2F0ATWwG%2FnReoJC%2F6nUIEW5wk1vdhEpX2E8z%2FGACVQ2NoEr2%2BuS41gHOTadwvuks4OKxe0%2FZ9xpvP3h37CuAi3mb4VeqZLawk0xdQyjWQDycUYSsuTvoJFvZdDNX5THEETed7bCT7S1zsDii%2BzLH2%2Fa%2FXALLG7%2Bgd0SDLUYkoATe1Eg065OBYV4SRWrrKccxO5yVNrFV5Fqg65mCMLXeh8AGOqUBihph%2BfYem16g3yu61Uibr4WZFuZV5kukHviqTPAkOvKi6DpJt3jF2wkKCTSlw2zaHdU5ZT5jWyRr7XiiALx7AUmB1gAHIJVUtUL6Nh2RgaKH4XW5TCJhn5jnBgTAn1aw2AMUy49fT3cZcJORjXoAvS7Hr%2BlVdWFuo0umF3RAG%2BaAWzI%2B2T7RRT6pR2nkstZLaVJmiIB6sZwbLS1hbSDj9UwqV31p&X-Amz-Signature=295f9dbf822a510b8fb1f619859ddb5e0d3eeb65b4809f043dec23699d48f244&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
