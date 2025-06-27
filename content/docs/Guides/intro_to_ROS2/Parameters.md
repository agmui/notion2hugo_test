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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBTSHMR%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEfDWErcr0MAR5lBSEeANJMYO8q%2FzPkb2OcqVfC33MG8AiEAqxemkSfYJ4IvJcJIi2Cplzq0GZ7hLHHsVkWuVpjvNfYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCLZVyvfgOzCFWWssSrcA%2BLpCdfjq43RdNfE4%2FAoKlitacVr2ALH5rMJ2l7Cpdu8RefNF2C0jpnG12Vd7WqDcfRl8q2hLr7NNeyoTREGavu%2FS9v%2BBX9uEFpodCk%2FeO3unzmJ41BxXDrPPKstPd44wSGVZVgc0L0j7woTliO3bSpINNu8nKbH78y1mN1e9bdVH8LcV%2Bo4rO6Ekb6mboYZiZAfczbtqdBHQ7wszN1dMf7sTAXGXymtdnQjbY1pIQ3ayrWfipz8kl2LRFbkeqZBOxDcDAAM13%2F0mVVeIupGxgl%2FKIpvcy0aTNlSzCpcVBfHevtEv134WHuju%2BVYQ1seZeR3yAgG4bzTV%2BZVWp4Sc2PHYk3nxoyKXOQ5SJy0H8NEnCfUCmoeDd6JipgtNOyZHtLk%2FkJ8W7AlZRMyI1ZTE7M6MXJZJJjYsvT4GJKZeL8ligGI0NaODXEdOnV8zyv0QwgRgvtDKZeCZPQ1wP8xQFMPUT1%2BpCuxJpQGCXCEgbT%2FQUUVDYpY1CsOjGWZ8KYSJ7AHS3Ite5lq8jIBAAKJdNIZA%2FEoMaIBuJar2PwGFIM02k38%2FAobiJDwNajL2lVg3s0tM78wnm8kcobxhDi%2Fa83oV1%2F1Jv8lIiGC7icdANk3y3%2FzWk5Sn1p0Fc8QMOqj%2BcIGOqUBUH72HciL%2FjjFdCgmX310lb%2FJyzPgRKRAKJLTFgNtpxkSF6c190HcTYoUz6YeRoBMOzR1Qyx93GPAV8JBxiC5Khq8%2Fd%2BoaLMR%2BHLvKdNHfxv4lDYlz72mZELQeeXs5uUmJcz5OvUvL3Y2fXsQ%2FeRm1veSU%2F%2F03SwJj3hT6ia7Lz75E8YvabXcH0DTHiLrgZiozUkt8Mjtx9VIW706NEp8YN26ECq7&X-Amz-Signature=61785120d5e94b49ed45385501b401f170944a20ae1c34f2f50b0ba24392c079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
