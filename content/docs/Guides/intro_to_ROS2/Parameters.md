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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWCXKBM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57ykn4p1zTzft836h1tnCYL4Pob0ymAnmnPvWj7dvvAIhAKkLVm0ksIFvzgRDeLjTiZkru8Lz3T07z8K1VUnXoJwOKv8DCEwQABoMNjM3NDIzMTgzODA1IgzpLzzv5wy0XO2ZVj0q3AMhZW0UCjRjSuzgZ%2BZHr5ctbvGo8WYFax%2BXgY29T%2BLlgc08Rg9ZymV%2B4eBPo%2F%2BtDdytQJIW1FmumQyDqdEeT9BAImDk64%2BOEHM8ffeIh2ZapIjPVHXpyBdkTAlEgwKQ6Rj5MWhsefjhpNhZ78JcQsyZdfEVkkcoV7TNiLuIJV97jW8cduNMLSOfWzC7ve3Z0SlLyLAe8h8ljiaW%2Fp6UFc2Lrby%2Ffa6JtcQMlQemwHAOs%2FG4voOpeJEJ93We%2BbaeUpxd1iDBla9AvpEz8S5EBr29JzvSwnQa6eMkHVoFKbqvrM9dx%2Btn15F8h1PnHGfOWypf4sk%2Fq65xD8xmszp%2FYPgN%2B0AgDfr1W7Gt7t6kcFhVtymOn3MUCVHKVj7mlQqQlHArmKm3CBucfqODMew93Hrl9XbTFKLJb7f4DIE%2BF8EHd%2FtPY8E0%2BmtTDp1bkKrqMNroQbVkED8MJBxT5qfEvTyU5793lcaA0OpphnYsRfB1eJcaKv8S16AEX3thOTe360tifpnRT7Khqu0%2BaZaZQ2wGnHuLBmz8H68gzYsxqDVOlB47FFi8gHiHzbPVBexpKPO9QtoslQwY4GuMAKN1kshnFxmH%2BxG3tEAjXQMVo3UqVDJme4qO3gC%2BAzq2JjC8nsu%2FBjqkAVB3ueMYNjZwijmB3Qz7TT4KKU9iSTLczaQwwuGstQgIQVDVHjW82aBcVVVe1HccCy07EA1oqf1C1AkrtqdjF%2Bn0ZIctFLWe%2BBcZ9DEk44KTlkZlV6oFkKtYCrrxnojCVUzOuNr%2Fy6h4R77XQy0WqREYohW6P%2FqFZNrGcgBNRswB9wBU5JIkg15%2BZ%2FWh%2FUJ4ngT3iflCRCJCPKqtIG91lN7HVWhU&X-Amz-Signature=987ede469e28fbe61ce746621960782418379dd8e5dbc4844712832506e6675e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
