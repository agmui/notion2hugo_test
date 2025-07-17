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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPPH22M6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDvcLrqz%2BlqPk%2Bdz6Idhk%2FBCf2EhcpBfefi3UYASAzKHQIgdSwoc2Bh4D1BBC%2FgqkHulydAhjLg7KIpn9TjoRE2a0wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGGa5poZczNRvkJ6%2BSrcA28QYFpgNGXOE5ibr5UTqHXkrkZjf8hZWg21mFmMuVHbRzosfXOqfrr4qHXC2Rg3i3UTf0wRkIqasEiyBNHE8S6qZDV8ao%2FD2mPAPrZu9BsxEyGNfUKTlQk6qlWd3vR8zixGM%2FRaU32IackMAu9nyykBSnxl%2BkyNIM%2Fx%2FxORlZAlesYy4llMSl0M2VjeNiXBbFG8e4b9mq1kYa0oZ9az72x0V1dXK71eFT242yVcphX0e2a6vuMwFUoBKBPS3PskIPrkSii8fTIS4ZZBLjo9Ju20%2ByInoi7kxXGGo%2FUQHNBOi0%2FE9oQiKrMLYleP34baihbiEwJwDzQDjeoPwl0rWkiconAfr8qUnxVq4Pa5Tg0fqqKXPBKB5E5gVSLJBDHU8dXzcaE0kw5Ve6Kynd%2BDYqTck%2FSkVj0kmIdny0kXtDqk1Qy2gveP8zwQJ8HXccDPKik0AEDWnubkzbJ%2BSRMXIda9HIMppeSQGTErTYCwQaJyZtLyDm9vQkMMzqxlu5LSiqcwBOQhyyR7zVx91AGDoqiI1bHDg0yjQbNlvjGWqrJqG2rh4Fb16yKMYdyySGc8%2F5%2BkA4Li6VaT%2BnJZuMvSPXnSzMGMrUBHud7E%2BV2b8%2BKMWh01q2ROUl6BiqBaMNft4cMGOqUBBJUrDKLrtRB%2FX%2Bvhi2m6xgSXwUgzBOyU3Ie2NXUNH6xb3q5TMmiiBuaFkNP53Jh5eLmLoSjgKSAT2znLuagVjHWoMisDJ5feAQ6SNAsMZEdBMotTUrWnBu9UdbgLe1Yj536Qv9H7qlXxg%2BRtXsIwS10bDmiFbMngh9bQkfJWq9mcFZ1PnOCA7AGsrmvH0krulckC4PylAPIPk%2Bm2fp4Kj%2BsHqEmu&X-Amz-Signature=5753ddf96fccff7feed16e8d77a07493ec95020eac3f4b4e8cd9081b8a2f3866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
