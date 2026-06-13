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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBXOGELX%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHHFqZM7ySLgHrmBtguyZLFWujUofbLpUwNmR3yJX6z6AiBklAlpqQdUJRmKnuBy4RMJOZ%2BLuINfuHvSF4zscWc6Yyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJ%2BNwo2u03Bfs%2F8xBKtwDhb7G5W4K55e3U9cnBPza2QucHiRNGwrTM6N7SA%2B5y3qvLkcjfEq1XTS8yGip5pYqcGm5gjEkRjjd%2FCi5E2jybEHJmFpvrvu%2FfKwX21bMOdzk21TsGxEo7kis9%2FhSaP7gUbMbgUXFYoKZvMzcjva%2BWNH59wg9KLpxnDXe78QrOMBBAkOi4z6JZkGVFQ2m1tzO4zyB7AD8Yw6m4trCWPUjLahk%2BcT0aDeKzk9UU3Eg8%2BjIk7%2BY%2BU2q%2B%2FqMQvZHwSsUdYXtDHvF7DZ4aaj8dpogEaD3Q0nb1dXMFj1VaVzVqgCtUyQqPmU4rRTrrdobtsZXYkdthivAXIss6rts4AyKoS3cw1aKHsOUSoM820Tv3TwzeXBnYMKVFel2OwlCHQABBdlupicFvV3Dvu0NiWS4qYuvL1KjHAvh4RpLC5%2BhMohb%2BrbBKbmi%2FSR3l%2BUjbEIcPpW0agKWS4pqkbMoaIIVpceeotIMd7VMesr4tgxB1D767AacCp4pbQ9YzBkHGUjRBkLFxDiYtIE5uOuXD2%2FbVi59RimJcIlBM2jDNf1DmYRXBGLNTcxF7xJ09X5hIWSUMhaQRPZJ5Vug%2Fv%2BXWb148U7h2B5MYdNHytyFT%2FzRBmZ1IS%2BCg2XRA2fMpQEwq%2Fqy0QY6pgH%2BEx7ZF9ZK5OGQu1x90TA9EB3SXCY7rqHCky58oIsGm%2Bhg2mW5YVB5k2c9TLZB%2FAkOBzR%2FkqlCpU8ibaCT5AwRjk4uQDZZIXkWX5w%2B33PKiRrAgV0l49vXguEk%2FhA5E9wrsJt4LRXYSE85qfwqkQ9rhHQ8v3fEjvxGl5PLDbHQgxGzvbhaWBUzBqU1JAVezAJW%2BYbs9uUPyfmVZY77%2F73fQMGtLVoi&X-Amz-Signature=7cfd3fe0e28b6f000f23a73bb5c78076a9cf69f3e561b7a1a0ecd931db43e369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
