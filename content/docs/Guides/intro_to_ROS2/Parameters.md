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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO62TMS3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZrucOe4kZCLrEIUg%2FE4GwZhlz%2Fc2QTfut49hW051xsAiEAo0%2BTssp14Vn90fJP9o8FWNib%2BEZ1f9qf7mcTS144Bp8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFupyPKt1C%2BY8OGWCrcA%2BFsMciC5jdozRFJ1mmPmXbrCTxVc2vNim7XEOCz%2FqHIIuVu9TyFs1rIWZVjcK%2F7KuDrx5%2B%2BKO85xlwIWh6mOJj1tx7x9UFov79%2FHmwYBvcfXSnhlz9l36H%2FibWBk9l2TSPWXvL8BUycTgtefzQpNfr0ChuqMGtQKU9BaPjTdnr974JQ9fbpe7W0VZ%2F2wuSrYcV8EDoD85%2BaNAu5LJ3ULnfAE%2FjEt5oNU6neZViCkreLk8aQqN%2BkfLfbyTbBQDwfipNkyh5PZZffcwERYCtPzl9ercBCtSn3ZA3oEHLeI6CPgPNHI3xXNJhokhjS8COzihyzMSk2R8YRGpFjjvKHgGmkT1UsHwmVxt8pt4%2Bqti4JGbU5zulNnhTtNJDk5uMlgsSfl9UIZ7n3tndpHAC1MmBgxB5H%2FmN33JnvJoBQDLJE2wtGkknX7dDCQK3kOjbDmPfp4QH3Ppv9cNVaMimrFmWtxrDUhCVYm4he2%2BkBr6Tz2Ogb2PlSNOpu2IAORNIXiizjIeIBFLEt09HzfSBvnZPE4ZC%2BQ%2BXdCAiJwM6kBy0gBg4i7KY7%2FgRysLwAACo1MWGtzizNTjQtPILwM5CUkqjeOb%2BvDT4THx5qfBkkTmyjU7%2FShj2ASXALMVv2MOnypcQGOqUBRIvzlCCodI%2FO19BEvoBMBiKitxb69oVy%2FKKNvUpuNoTdtQmapfvATnkMQcfdCY3eUH%2FGlrfbALTdlqoQg3xtUUjr4GoVTYUFYMhT532LtdgRBwXlNyGA%2FcdhI3QXY34xgtHWo6c4VzBG52VEl5iXqAs1eTu3ryQT4x%2FSNZxmYkpqKbz4qWpcCCup2sFPK%2Beh9dJe3n9rzQmLDINZKukR8Txunu50&X-Amz-Signature=d234fb251422cf02734d07a124f99b233f4d2b14dd3b646b4c722824e79d1656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
