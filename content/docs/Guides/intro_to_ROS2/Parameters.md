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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIVWTNE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICgUgi05%2B4zbTj%2FU5%2B28sH1Ybw0fitPQ0Z8k7TP5yh%2B0AiEAkmkDihCjDaWWHLdwGGl%2Bg41i%2FZBgdghfWgfPWa%2BHYhoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC7UswnEdAoK7SOtEyrcA0xJgdPo67HbnQ12%2Fkr0l639qA%2BKVZwBRk4arGQtqhw0vf41CbM3reM5Vvr7HpB8Wjw1U5RaDVzyibilDRfp2Du56wG1vQAxe%2B2Pvm3kCC1rgn%2BEl9NfKsX7GXzXRag1qV4wzfkFLogNgZR3eJ22c0pQ73LhNU2ZKkPcOhgNZMTAfpDLZROZpQXuMaoCDTVh%2BFhhtKO9Nasx2N7dBVtmoWoxg%2BNikjmZo5iA7dqpv46G47JYuaPgY9Hc0DtrfFsg9eYvkOR6HeWryFrBCCpwdDeOS5jDryLHG3gtF8kIUm92azUi2b2%2FJPbT2fFjVCFKxyYhaD%2ByZJZJ9gckvNLjUjfJ4R2ZjHYDEcMs5rqb%2Bp8%2B38jI24VDe6hD%2BfzsrXHGk7QVv3bzZMYhuM75OFr9Ave3WwRT%2FLygago1R6cduzu3oK0eNTsTOM1aYJh7HjM8a8ZLi7Y%2F5RgN5%2FAx9rlMVXa%2BgGOKfjH6p6%2BQxtMaffeU7eONT%2BirXvZWxigIIDupwpZhNGLTQU82N0CPLIkmDiLA%2FwHb%2BKnfS2kORviUMFLQm50vCxwri%2FvoArzAcwYqGYZC5K5x%2BbQWwTKinSUzJ1bq100zU5sEr6uBJBg0FRUPzY%2B%2F7sl%2BUOAzT62wMIay%2BcQGOqUBq%2B46UcSZojC%2Bf5ONiySR3So%2FjAI8hhe5zO18hHL1wGZwANv8QLlyG6F1ICp7EJImvctVAI1VE7TLhKtqmLsg3Cw4F%2BRopANTySqTX44hTZgDED7i8DJxkZYmvAnFFA65lZNGZFpm4NoJ3Fiael3ZEEdSiWi0NIzSlAHnfw5VFeG38Mab3YzN0n689wIJ33uQ%2BxFSk4PSwqw5FzYqtL6hi1XGI4HL&X-Amz-Signature=6ef696e48f6e07572e7a9160887c958f4a396d96dcf8274e49c999bcd0c7a0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
