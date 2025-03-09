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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKBL254%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEyqcS%2B1keadUFkjNDv9bzSMjQRwRUX721MaDtbP%2Bly9AiEAwooew6ptf4ZVK3PfvAmjBwANwZWKpQWYuPJVw%2F2M51Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLDbpwQui8la0xd6CCrcAwWxEZXXp%2BQkcxsm2qr9Ajv%2BWJ8Y3nL8xgG1B%2FHLgdugU3NmSX%2FBuLz2KiLamgJ3VAacbzYjncJkSEXvdaPg3qEBsZrliiedghZGXk9ejb60ute8jD3mJT7pwrwxtftq3fEhUvMvboc9IsqBRLjD57%2FcPTilhMcesonmz7dF6XZeDOe7ATCVABPiIHmfxp%2FNB1kBslkRf27TXJ1t3ZS7D0RNcmUTJfqXJTTyiBvdlXGDCVTjQKC5juDm5aaIFAnt3vmrX9yvhSNNirI3mFSfXh%2FodovoChA9dTnvlclCAdChFtle88ID%2B67WpdwcgQcxPYkiJRTAH8pQeuwiLLxJQEHota8hNbhjZ%2FC3r6BatSqzuxHYiMd0HmiBwORKihR4zHI7NFH%2FazCpxsPvvKWzwhTiXxgIFco4QXy1I3Bj2vBk5DRFLebmuwGPCs2VhVpgXwSJlMf1%2Bc%2BzrVigFA9VzcAqEK9V9nGPpu1PKaAhTmGNacz9hL5yMi0YZZoKVpooIZvfFPG0V6FM5puEex9rIpMWD3MYLvEwGIPBQueMtWv4sN2agK%2Bq9A9O%2BU2IjjjHS6haUI0MWbRX7xDRG619X6dvKCYj3vD2TvlCpKdwHzxaR4qkZ5b2dbBagjL7MPGotL4GOqUBuFlb6TRViHefRDL5iOqHxaSKi8PPRJLOx1CTiicaWBWXuoOjdEwT%2F1YLk42EnRos4VDBjxsNuhqkHm4b5VKtDZShrPh9NBa7kXzPf0bvzlxVvpanr89Ty9iRclek7J9J0g9ULTVbMPjThw6MoMs%2FzYAbJGj9zRuJKAsEtUQKdH%2BrAPrxLQYHA1scxQZnEUoTWrymQ%2BPReLBMcYkbiDPD950Tmatl&X-Amz-Signature=845950042b1a5e07436789f2bd3772d66c657d689fb694a562b191fecef0716e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
