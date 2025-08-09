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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMXVAZP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE4k81jeyvH7hJxzHrKeGanONyGWi9JdfLSIXoLROi9qAiEA6npzh7KrdTCX9zDa34B0I6JQdi8IUmpGYZM9%2BvMScyIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGVLue7SCAHs9SN7CrcAxc0C34gUD45t90t5SZLt9O266cFAN5eu9Yd%2BKtLDIlgObK5AoHQl83APMyZRhjFgQ8RlGffHv6YNSNesEIU1t%2FGzrBlhNcvsG0gDlwQduU%2BVruD5Ttny5%2BuWVNgIEPeNOiDrra64PpsTy4z4ijOipjbeOOlY9XxgbV6wTnrYfnNLwVOlMeXMG8UYnrwjEU%2BWJydN%2FQj0VRVMmmvtlSmeNr%2B0o9Jl1INFJJStVeHDFkmNZUdJIGwW3YrYZSEBeGG1oJR%2B026cTfqATibwYOWYoslChZlyAYYy3KQse92Ofq%2BTEe2uJkrPft6YcOHUJM7OLoCQY0PG1HrQjqk%2FbGnSiirxl%2Fho9el0tLbzAsULbOosgZ8mDodRx2yxyoEdVIjLZWN4UTxNKbH5MyxTrAfgWpuCCCACcr884y9yJXXv%2BH4oc69%2FTSqR%2Fas1zs39HRDXt6WWbXLK3w8%2BP3PlpAWXt2elUnryIdKEsjMPbccd0jvrDFS%2FwWmEpvYH6C5p%2FpqzhvKrdjb1K08YnH6itzDmc%2FtlSCwc1wZC5jIYcvy%2ByTv8xGp0VdzNQEFGf%2BmWpHbdFekwEArm80DYYgSWh5doP0YnOIst381%2FTf7xk0yT4rVkpwcHVW%2F3zVBcCELMIz22sQGOqUBNHplTYTdLZhDQpTrK3eaqxjVf6xSl%2FRgataQ9q6wQb4v7OaCtTdXqQiM7bc%2BpakcL4igFnyQuAwDH9KTi4QhmpYEMYxsCouk5PJOI6HqdBNyUSpv2KNT66ooE%2F5Qt6gk1lBflpyeL310Zo15VI8Ab4z0iS%2BacQsS%2BPpoSX2YeJw6fqNxENmtfh85QssAKlj%2Bzj%2Fe27MY3q8XHQvRlF4jeraO32p8&X-Amz-Signature=f9c1e2ff98d749ad8bcf059932efa5b5c81e501bdbad18b4964c3c92e4e9fc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
