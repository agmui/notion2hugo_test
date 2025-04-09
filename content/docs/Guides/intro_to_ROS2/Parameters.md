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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJIHHMJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDTHXWsiDy792Azcdxwj0XLHfthbEtV3Zf0yjJ1LGBIQgIgbrFIhC%2BVjO9eCSIwX%2F7bzeZWyx89acV9tx%2FlVk3liLsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlHylV99e37oV1MDSrcAyklwT0t41Sbp6xWf9yjd%2FqEYtyJA%2FP%2FrJwb6pJIb9F8gmRkrng2478xZsaCpzdXUyDCOBEHkpOr6wNEPKX4SUytNfdpG6VOzqv4NZnwO5%2FzM0XwilblLbO4dno7i3mZXkcTC4Ego%2BQ0YHcwbwoJAiXBfjMgjSUIYQbIjN9ENVOeCcKnTsR96uwP64ODbVM8gRPFsaY%2Bg1rwUrEyLArhjQJGipb%2FhNsfBjtWxrwzqBwVmNkT6Y%2BFNx521svMtZ7XIU%2B%2FfspZeRRWCY%2F6onC13QMwWLQ7KnN%2Bx5L9ObvFs8PQyMJO3bC2cfhE3jBVVyDvvhcos5o6dRUWU%2BbJSU4A%2Fu%2FXmjrt4txTpt4p5lW5uiMDes%2FtCzqs3b%2FS7YoBGid5Dv5if7SnyYqAN1j%2FqZv%2Ba%2B7V8vrzQ9EyiZTTAFCRSOCogq91qXsbtywVxjyRfGs9OoCsNncZLLVW%2FC8FU6ccIYO3CywjikctkGZWK8pEz9HdoBrmUBwi%2BgUaExSGYrmKCPw09eRNp5%2F8NzXVD1xhY0fxJf%2B9fg40q3kS24nanosy%2FskFkEsol7F%2FXEgLRefnn4jpkv0VAHgSm9JZag2f0TCf5nvPwsB%2F0G7bIS4oCOeKTti2hdjynqefsV%2FlMLjh1r8GOqUBYXa6A3z%2BEILmexivBuQxDbqIcfDZG%2BFFT2YX7V8UxT2agVq68A9yU%2BYOal1bYxmmjuc0N7dLybv1Px1Q6MPshxFTXapjIRY7sjJW5rvaLnGODCFufRL2AlSfyIXfFA5WR8TY942kKEcwVl%2BZCcCn5eH4l8%2Bu91irWSXFZfoyiwp%2B6eb5NB4C7VoieFZdfXymv880CfwomwOiDz4tlQ6H8MlP6btm&X-Amz-Signature=3a44dd28640c2b2bca1491bfe5cfa1decb907134a59236d537d298531005fbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
