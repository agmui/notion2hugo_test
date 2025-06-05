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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWPOQ2HW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDtrqE12XCJHcwTQk%2FUamFm%2BjYyWT%2F3%2BAiPk0kiAKLhegIhAJ4K%2BdSFEdKRsTWptBHeE0WCxS99WJCs87OSx0SeJsmeKv8DCD4QABoMNjM3NDIzMTgzODA1IgzPNPcIqv8Z8hnKn3Yq3ANaYjSbI%2FYCK6oG59BPbC%2F1igFuuBDjzlsvuTsmA1woFlZrKxXaW2sIJPNj1goEIJSM2NGPhs86ubfpD8Brgs0NFNxheo327Dlk%2B8jbHCD1xxNqQVV1kYBlavpBYpMe%2FBzG%2BZ6HLkYVNLTg9bxkQnUoUTNKsFCoPsJHsaP%2F0JDJ5tRlaid9wJfsZKzlugi63Ywe6YwB4EDHy80XrIi4HVl3u83qnbQRZgZpzsyirr%2FQfEWX155vLx6%2FKp2kcydSsQSp7eJ6Q0AjK8NmONI%2FAMyhqdLZxB4LM1nUIJQNgkKghQiLCJRwEqfAUJO0npPSEegZ4ibyhGitX6%2F7VZYgD0kJ3Fh%2BlbZEoQ4G22vGBjRRHsgB1oImHycwslCUuK8sobpjlAVGBb9PAHXNmgg9p1BiqdvM3NRrPCsMbWDT423Yry5SMx7%2F2ZkW0%2FO9%2BLaBXVyetuXThpZr%2BPZUvgkBDHuiJkyJuP%2FKyFdr%2F36lu6dyYDdg1Euyrjct%2BVeDcRVLhx2hyPpFVMKYjqbgxKmJr4IjXLbPKqFPVmlgftjzQrAOPZvhg8oxExjBvU95ZcCYWT9sMXsbJNAGBgAAAA37uid%2BTZO4IL6o4MsytyU1vi89QslyuyAZGurkxwUxkjCFw4TCBjqkAfk31rIQG%2BlD%2FehVH3bPqzZEjsA9cAclneIv%2Bq38vSSSeHO76kkIrecZJDcsgNXiLMehj%2FewsUxKAFN6Ra5y6kFTnJyr0rDWOBsVqpHd0ra0vK093ZiRhp%2BqPpvxBvXztH%2B78lr019NZpWFLIoSUMCLxrTrVJ6VbsxtX%2F77R8vBLm3DPGQVR5TaJPcqgKRVgev9qEYCRwV7Xma4ZC0nAFm9XNjKd&X-Amz-Signature=837dc905084376a801e0a062259a5e3da2084fae29b66cc7430f36132032c2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
