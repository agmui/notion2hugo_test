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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVNVD3J%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFYBJ50HSrV7wmXrzmxp3dlg40jO4pxoyrz5CTjQhlrwIgQc34OfNMwykGvlajir15XNoDxFBvU7G7WlJzVduq6s4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUdIKb0%2FaB3fMLfcSrcAxXtJkoMKR1SvZjJG4%2FjAax9Exz8TlEJsQuzD%2FjjYoTfQloW4KiaPJk07ZzHzRP08t8l%2FfLLyXmmuovPITB5HvJB1N2SX6fhzugHpduRUjM%2BDz7tGJhXdrGJ95SFd4QG1xmc9zJXeniE0v9%2Fj9DkOlhR136Leqib4ThPzGs9pGiU1qNDJzTEPUZ9qIeuU7OMwaDbZR6DlK5i7ViqEtWsygG9OQBZg7gmcWxC8J9%2BzJSRSxHOqL5HaDYrBBpU7OdO3O33dj3aW%2BK5hYziTjx%2B%2Bs8uP86WrnwNcAL7HVOa%2FckIVM%2F%2FzJOMcCPq0OdSaYi1Por2oO6AksW7LHb4kw%2BqP3tTPVvjD5daCzHQ6mfZHDuRJX8dTQnabKkzx%2B3DIjrYTSMhty5kfCJkeIidh94wab2ltp1124jph2O7SGyl7KC2fhUDwguwA%2Fhw052wFanjhnyuspQRjmPXea3ZAJELAdOXY82AKT%2F8Fb4O2bbMzVauKI4PqTQnjLe5R15kXKGEtcQz%2FCxCzLCcQhQsCbc%2FgmpxZxh0q9AGDgrCt1WTpEJN0ozA7vl9G0wOzOkyDauc6zYnF1cVzVypsp73Duqvf5qKnUBAxPJ8V4TSQY%2FBeTXT7StDEKKd%2Fy5zSVabMK%2F0kcMGOqUBjOxp46ZHMoc8n0IQzkxu6orNQi%2BfFnhsnyjDQQka6bmVC8V9mXRMnUuzza2S2GoD0xE%2FuT0w%2FQESonhO2c6MREssCYOcCIh625fN7%2B0gTVaG0ROx%2Frh5t5xMOpuFYlR14VRyGupihbX96sdqMydyNF4Uhja3hdbU2mSBW2jeJoK7UBbS1gFnmR8nI%2B6ybHZHNaX486FvlAjN9KxZjkubN1dcu%2Fja&X-Amz-Signature=cb97814aebc4e375c1d390e64016fa241335ed5fc3c220b5175762f704afdc4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
