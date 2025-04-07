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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUX2X2Z%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCwpkdbVPV4ZutSdTYt94Mg26b2O3k0cxobTz5UuVHSAiEA6zQcAdrgP2x1lxcfOeC4sFCEc%2BGGzV1HpjqcF9Qxdlsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDQQZ93NXkiWGcaSWircA4RLAzAkKjAc56zslZmHmjXBx7d%2FyczB0K7N1WAu%2Ff2DGAogmvP2MKZf14LGyQQELvMkrV6oaaj4XCz2MhSOnVC0it%2BWiZxJFLg13DkmCcNRAVpo1b0nj2zSduW5QlttGSuupxhHRZ1DD5lfpSyrVit3zBQFn7xmzHFNtUuFrHjlsjnmnV%2F8bWM55qGowlUArq%2BBulDBYBFbz4KcLrKOl33kHmY3AxrYoFKcDjvjDhf%2BHiNqIkLCJosV60u5A2hvS8vo3l%2Fc6pp%2BxfC5C4S962HL2eJaaA0vd9E4FmfMAzrY6cmbfMwqJPa9ggwtqRSkpGQW5g%2BrWslgpxTf5yFgulhjjpPuZdlOEfGc1%2BG1pcjCDQ1R8qPEsEMCeh0%2FlQ1OYSJK2x5qL1nOYSiQezo5991ChvSfukL14pLURQ3%2FDpxFmuf%2BYqkPhn%2FWlhK4UF4vHD0SEb3Whb2g3IPFIwBtL3LQ5Ia6GaFylqQ5lmydVIBijAIJjyR08A92e%2B%2FQc8L9tWQXuK7A8Flw36TrWQGEORN5V618ToLR5XttxcJ9tTgP7fBpd4%2FyjklF7ihlxHnB8JW%2BYttW7H9p%2B6eBqPQnxO9YeN5UKWPne0%2Bi4X9QkwySmEJLPz1SUNQcPpr9ML2Dzb8GOqUBCnYSMNOoODVCBYw%2FTQB%2Bkm9kaaMHm%2B%2BsadNSvPciO27P6Ru8RF7LB2oEN8537aDiLV8OIsRscqrjVjjCV9cQeWXQM8PZP6%2FA%2FB%2Buz%2F59x%2BjGIepybD604hmetfZZtMjmI8PLke%2FsdHJsjxfRMzRT3R8mhO7LnjhHQJZ4mrE8SZetcTGKc3HsAWwO1VG5zVANswkwleYq%2B32CRMdFrmoumqo6g%2BcK&X-Amz-Signature=ea22981a26b94e565d816dd062f7ca5f505d48c4ab3119892b16b71d059c722f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
