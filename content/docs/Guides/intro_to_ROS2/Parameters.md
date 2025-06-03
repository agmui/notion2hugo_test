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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZK7AFCF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDlIV%2BujTGgU8MVqrwrgbeNoFohMe4BUouGrhzRpYQdNgIhAMY0KzZgrdYA53GKDmzQ8kwLsoysEruaAUiI%2Foe03kwkKv8DCBIQABoMNjM3NDIzMTgzODA1IgwiMErpZNa2Xtb76NQq3APfx4zU%2BD0NTpm%2FuIj6efbY%2BOuO6055OwLDO%2FV5J%2FJcbCkFkn9p1eK3OZirNgCI1Ef2S%2FXYtK80ryNDMilkYekbNwSF9ZnatBZuMhszHhT9g26sAIkf%2F9tzcpmG1Y84AH4Nqj1Q%2BvAL59k6HgNoXI%2B1Yx%2FzjtMwt3r3cblPkWn9LKtifvtTPu70RF1e7Oho5%2FYdMdp6L4ClWkgwrYHYTDYtFas1ftQt9Oq2aPC36USkSGT40TQHj7RnX1aG1PTSj4NZ7uAtvVd5wU8c5xIxiQezaoZpF%2Bw0cZ%2BkA6S3dN4iTILTapXbLNDyWVtm5U%2FzIThc8hPAmIz0f9K0Lbsq2fCjP6bAgl55Mt%2FiHfMjpEs25gRN86ucLGpNOFsIna21VDQPY%2BCanxoN%2BfXsaeRXp4YaG5hgPT%2BZPFzPAyDHcZa7eYRFxqHyK%2BlrlOfCgrz565yIG341SjpFpgQjeEgl8WWbXTaTt3YMF4%2Fb5Atn8%2BANUT%2FOkkqXcSKv3M53%2B6a5ZS0JdE91EfkCAhvg6FHdgtO%2Bf8tmW902M0u2visI6M1u0Ypr4lP42gb%2FWiQtqG2hjI7ShTCCYfkKcK2woXlMsqjex0NR%2FVivdO%2BVA9qbKd69MMsx%2FFLq6AsJ4qvD8jDB%2B%2FrBBjqkAYQFQ%2FHnfiZBLZbolvOI7eEbMpMO9WzQ7SLhXwsYORHaFUXhr5m3G8DxE4CiRL%2BkUkrYBFTyodNWkIMEXMJKwaQ0524mxhXIyktg8%2BmE2K957GrgP52y20YAWtPC2v9fxBnymTS3oaz%2FMwVkQ%2FDHYeDnGErr0uV7P2eqQ2A8xLkCOfNNg%2FDi95StZe7OXl891skdrA3p%2Fqwh81drC1o5nsW2qLwX&X-Amz-Signature=cd662ede972c1507e92e260c74293165200f181840def66e2b3527e335931db7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
