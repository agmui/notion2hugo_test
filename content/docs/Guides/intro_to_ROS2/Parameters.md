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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICBG7UF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAV5sIb7gDW%2FYmQFHaEajrfgbOW677pPM8cQTcDum%2BXHAiEAgVtFxi5pzTr5zt29HBv3ovrUAhhbOZME2%2BbwskmIXSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPERDe6Kmf7CJotN5SrcA%2Fe9I%2BdNq9oe6%2FMpGFprhI%2BOVi%2Fs5SNhNsnRYeF9bPchqz7bvgZUPKI8JYpbLG7V4ds8jcUtv722E4tXQuLQ3Kafgn6Chi9v6XX8Z%2FkoCvG%2Bcny%2BXCfgt8onprfw4yy8qMYWjduJisRS%2FhgQA5a4JNOxV5ozR7%2B9CIRgFX1eshIpGTeqgw6w7QVJ8pM7nbXa4FEamLimppyqHv%2BuXJuo5yofgXOdlLT4FwMIDGr0DoYk0hBUXh7%2BEpbPM%2B0AbpQvh8XgFHZYauV5XkCd8GjISWm7%2FMz8XQpCPWXgbKV5EBSrgJs%2Fa7l31Q6hp5pEt2YhE5hA4glbJ13TY2FYViJsLwGntUZQVQdYoh1OzV9qHIwLjzPNAsUg8p7Z0OK%2BnsUpgdOpKGPW9JNJLk%2BMvCwvjgnEvxK7%2Fnc7xffQ6LVhwUyg0ZwlX6Hd%2BsUz4VWvaMFCzbWAzTKEQuYZKBCt82MYM1GDyMPn%2B4AFDnDYipwJ8%2FjnHJV%2BjsDvxJQGy5mv34PaVhc8m5ElmnG09t9sCqcB74V4vnVBo7LIxNaULrvd%2FtvuSjvXZJ1ANHnO%2FwhZwT16xODx5kMgHv8dSmlP8Ar7%2FwsLhd6JCQ6mjwRsk2Smuvux1UcDoX7RIc2R%2FZZxMMultr8GOqUBKBPfcIVqpVaw0o284lwK4gGd74wAN7JzMUE%2Flb9rU5bRermzcr33akqSUDHk1e4yiByD1F1CGdPwy61MEaFGw3BiV7SgcPl0MCA7yL5V4WrqfsDkOCjE%2Bb3PKHdDRVJ7UUtMxWKy9xVvBCVQJMN7N0BiIUMcuozgad4aNIpJUCppnrpSVSpsCO%2FyINvfelwTUTY5CETGrgpa5fkktNOcYJindEuZ&X-Amz-Signature=6717d2d40ab653dc86d1a5f1a66493bbf460588e2c2662569007a94108343a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
