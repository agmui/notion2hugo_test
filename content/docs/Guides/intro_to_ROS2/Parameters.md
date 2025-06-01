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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVGSYSVL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIElsRSXGs%2BOHQwr05I60%2BKFuL4g67nmTLXPplZ94Fik6AiEA57cdc9c5NxS0dSHpZTNIpZk13aVYkZCMGICg1WZnkiYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW5DuK%2Fw%2FaE5iCh9yrcA92SS6cJ6an9Mtlk3s9BAZKs26jTGF%2BgzYB7luBmAzZLdX6f%2Bb8Qa3ascqrmr64SWChN5ZpKRgKGqS0AuEdTCLlyzG5%2FJQmjarRtJ3GNELIUf6YCHeTNLWc%2FlcQ6TAybjFX7%2BEna88tAmo9h4pvD45UqHv%2BnlABQ0950FW%2BP65MHnsCprCXQXt%2FFQWWHl12GDPyy4FtYx3L8uXw7yqt1jiv1GZA9ZWZssRL6tDUsnpSEPObRoEHXGLJJzh430wXRONvy75OhhFM8SFa7B38IDrwGIkUCJCNcJPTpA9Bi%2BrmUIorX2VXt82tqv2ipQ1PZ%2FofyIgd8iM3L8fhOAAbCDH%2FDMtszupQuDAWxAs4v%2F7CYeY3QzgR4W1HR%2BHartt7cDb22HvwZrjcC9z03GEWs9hJUdsm2v1MGwUjFFSb1w6aL%2F9SqVYNCPQslOgWHRO7gITH4HbSByauxgOH466t6zyb4VluTHMllyG5mqacO7N%2F%2ByFkBadjBj8VyslPbql5eRoDCdRdeB0rPlmfJYBdFr3A%2ByFlqMH50YXw9uP1dXrz%2F93Amggn%2FP9Ozda4FzafY0FnDs%2F%2FFC5X7JV%2FguqPK8o8Nd5JcuGlXlaF1QaQNbDb9iR8TD4NI68q1hZ8sMLqz8cEGOqUBBxAO%2BQ9DU06T0v7Xix7R4e8GSZ2Ax9Ju39Zm0cguQx0RLzuHt%2BCUrnit%2F6iwbrih1d%2FCZOQR9lcAi7wvYH%2BYLAHt6KFqIoiaPbIug5KCETPZsHDShdmYoABeQQ%2Fy%2FW5nr1NSp7m3nSRCjgLfaukn6fSqSPeZnzforrf9LrihWSeGXlcwLzvqEqXwE1RDsnS8V%2B%2FWohUh9UNApbX0oiA2O8nxKsu8&X-Amz-Signature=949394daa7705bdd42b14ce8f0c9c8eed79f9abd156298c4d81c0ec3fb03ef4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
