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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYIOQLN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFfZsA%2BHYaAFdzmVG%2F3ZwurNZvIDLaojpOlVroJoMyqmAiBktG%2F2sqi6puj5ws1sucgtXWsMO5MCufua3eKzMq%2FIMiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvMFElSHw9GUgSP%2BuKtwDri6M45eC4eYQXjWiJMHJRL%2BpGUkp4B2bVp1b9IZI6%2F%2BV%2Fn6Ezhxxva0xGy9xN8eQyP1WU3mD5G2%2FQmx1l8tc9vKSXXEEE3DwpmgvVCU0I7CUc0CB2c0Byt017kXbPcZ9dXi%2BzRLxTi7dN5z5oi1cY7bhOMNZjR4viU5uPVU%2BbDZHqfdXlvGLCZpvyAwy%2FABwhOcV9coeLEtwaaxXL4GUUrpVx28qQx8F%2FH5MrGY6IjBQBwwKIAGbzAiUniCHs26oIeu09lxnzFxqQOnXiQYns0s1Tyq%2Bpt%2B0NCeYYA2dVE%2BfhzScrVkA%2BCu9Au7aUCtDOfGeX4xPP9vkaWgyJf1w4l7Bo%2BkrqvgOvi87rF5AXG1XmsD%2FmHRIxmEUyVusDLjkt56TtQCmFeBvwe2RoIJ9ATa2FB1WUC0nWapRZxOe7rLT%2B3cF1rW3ClV0MlsiR9reBNkl74bEn0jMTM%2FzM9TavXg0l2G0GrN6odBqhdYpDv3ZgLGMyYds29XifBM4fkpGE2EmR5HhlAwM%2Fzez3969eNOCFyFqgtiv6dD%2FC1rmy4cuJGlfSDlkT1JSGym98xTb%2BU7atlO4gR6sQkrN9n1NM0R%2F5leg6fMgSLb9ZtQ9WaLUHAiuf3KWwDniTWYwv73lvwY6pgHbvUnJZu%2BJ3qTaxbyNnUgbr%2Fa6dnQuXbR47BNGXS57g%2FVo98hS8m%2BzvouGqPHe4%2B45fEbexWR8FUfC091OHBiO0sTvrMEQtKcNFiXTrhQNwDEkDWSdS8Z3mRMAsBduMChfbaxqUZLPbHud6pyZunqCRdM0nu02BJauCQgon9q3mSEPAxWxRUu6O%2BJTXip7fJyoMtflvmP15cQA6T4Zm6Jtc4cBv2%2F7&X-Amz-Signature=303015dae874d0dc9758926b8b2df8842a5c7c89fe6f29c2c312c81efa69ba45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
