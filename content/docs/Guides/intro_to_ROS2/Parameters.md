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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCZNQYQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDX7aQvndFcgZdb%2FSvJ79rPwXRcPgk0gbtjg0qf7dCzoQIgTifi2zYK0Pm%2FGf6DR%2Fl%2FPEm1x4O8dOe%2BvVbJ83FnjaUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFTLwudgAx0zCTa1vyrcA9WIH4oO7TVnma%2BldRf6srjywwEp8lsxvISag%2Bu0fUjMFfi7yk6aH0f0sANyAGsIWwz3gjLReErLRlopmcb84PpS1%2B%2BqVjtQJD%2BxdhBeGHIa49CRsS71SDXApaWCibzsloQ5qkceNkQSKAgpqYEd8bQ1PbcBHdc%2FdgPVybgus%2FN2vD3zNJv2nfFn1BQS%2BAdVM2Wu%2BZsJCK%2Fy%2B3q8njbDI30IK5luSI6mOio06FWTGFBaco1g9C41EG7XELyJ3cEMQhDcjeJqf7XFAmz6wBE6FmaPe8djNYqatYj8N3mYxvUgHCnoCN%2BrxvswIU3ZPIgl40iPk7OCKAjX%2FSFlXT7XNELzHE032yKPJjgS2%2FujEhate3DgMvhra2tH6qlqUtuFRLdL0AsmlotLABGA7p7NzMTehc7E6u%2BCI8YNo762%2Fm8KhP58aU8cC5Wm0U1lsDhJfA3Rb4TroZzdBHbJp%2FNVgkkRb9WrNScAp%2FKUYvSSK%2F%2B8gjyXAxvqqSY%2BBALhLxU5Me1P4NTKO6%2FkMyRJEeTuWg3bxxjZ2PQl2Sgdb6ufWxGl1IJJRLVrYJINPaPhqQXgPh6YkZW8AJVaa6iRz6tto1jiWK9vcjEBc8J0Tf6q8Iek0%2FG6P9HgUY2vnNppMLuMjcQGOqUBK9kMx5Em3KwAOlA1C7p6TFi3bT3l3wKBZLMh64jpJTEWqqvI1%2Bfpf9BK6tKsr%2BzSL%2FmJEppNF5QnbSwO1kqMGqqJ6MwReCkiJoezDDE7wc%2BjCCz4uucn2HGiYMs1v9Hhb3Q9a9KxEPGCXRKg%2F6GXc2I0yDXUAce6GT7pbvJJ%2Fk96GtTyC%2Fwo%2FiJ%2BLoU2QYQkdm64uuVHiu2jlFXk9pLXwi%2Bek3AA&X-Amz-Signature=4856f61f217435dd86eebb862f396df228f6ae321fc6988c546f070b675d1c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
