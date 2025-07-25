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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJDEKAX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDmFpQdyl%2FkWcbQ1gbxZnSlFUF%2FStIrOmQ92GTq7Pk4NAIhAI7hmxCKbl3z3SB%2FJKa0rj01%2ByJw%2BeACo4V6shTKtamsKv8DCD8QABoMNjM3NDIzMTgzODA1IgzLYm3O6qnipnCHSN0q3AO76ePC15fQCC68rBkkO0ki8zW%2BMgSIQmohYfAx7qnrNx292L%2FQq8Hzwo2xBVukekRMoIuCsC4qC6dm%2FFvO7noe0yYrp4eGKgtWAGv91nhIhXNyTp237OFKRwwlxRe4%2BcUUsYMNeuhpy5tyYUmDzhStgNMOEVsyxJ8Cu1tPd3V1sY5XsFECUhlgigM3rtQc62Vr%2Fu%2FZTJFkGsRIwII9MUiX5fQnFJXjhksk%2FW1dE0Zwqb%2BdxgJyagV0EAprExztUmjjLR018XIpG3s3i0T9aMRdlbyGLG4oeDFa8iZZR1HxBKrjivEWEBvNl902B4FlENsS9fgXVLJ%2FPWNaGlfslb2moaB6ah8%2F6bIR0R3FK3aQT%2FjhZ3T587pQn4RZX0LEF2kLU6%2FNfqbA9xgh8znWbDm4y9T3HxD%2F2bgXW4NuxzZDffvDFMAN%2BaJnwQkfDDxfhjTaDUNr1f3xYh1ojzdEuMXnBwLy0CFcFBSEui8gxt1Gv%2BaLE5KUOU0zhRokbR23%2BMheuRsIbPordQ%2FYysACmvLO6qAUDmdLUUosVdO7UT2xYwIao3jKVvJfPP4wpRticxlU5vFrHWO8fRCtb9bGDflZ13IS4t3AGkdL4%2Fg%2B3Y8S5ph3FCP2b0vD7Kdu%2BzDBwYzEBjqkATBULfvnYl3TluPogLeM1tGraDP%2BqksvJBCMD0AtRn5j0fsgwckLYywcB0IWvM9njaRuZjODnge5iWPUGOTYA%2Ff6p90bEqRb5ctSAiC37vhF7Y6KeUXON6qeBEPvaKGDcvHnnJhVfgpI1f7tJSvZ2c77BoyhhnbFp71rOEO3iuAXKfD6c4zYkM5WPP7H0Qq6%2FgRuP3ARxwZxpQAObj7LJkEvNHWe&X-Amz-Signature=df7adfab48531686970652fb742efc4b72cf70f2038eeab82220de1b275167a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
