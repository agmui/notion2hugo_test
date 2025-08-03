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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG25HD5E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZEUM8nzyiygcVarIpF09wHX1sCfNDtqFPT5b67gHZgIhAOPjBS5dLaI6E2SJ3thIT%2FR1U6mUSCCBimU96tcq3ucpKv8DCCoQABoMNjM3NDIzMTgzODA1Igz6%2FF4jo5WIQ1JdOXIq3APfR7%2BDMmCQow8VstoCzFjW1wRXuYF6mqdE8c5Clo%2FDvv3gRqrfnnDtmN2iy78aecHOPECqCqXKfMyikRGUfdpQTO9OA0Wz82lh55iCJT%2BtbNXuzTmfIbUvQoPt%2FgM3kzY3ftZqb8SUXjelzdcggPds3jUhUWsMQXRfjoObUj7wvxZk5Bt9Zqx%2Bm%2B4%2FxoiEoOm9yp0xhhjgT9qQiEVlEF5TAZweXoBpZQZ2cMMYml57mVuDlUQ6ZW3tMB6ZmGoPYNCsc7ypNx0FmmOUEkYt6rfOlQw%2F0NNe6CkuWRnK7Nsc1pex8oE%2FhvT2KLfrFfQ3FBAOgRbgnMo9WS8ehEoBictOVRmcYd7u0hSFpo51lg35gwXnukEBhILM62apndJbXj61MVan5eaNjdZrOJHA4jN%2FR6g%2Fm1UJ2tP0BDsh1hNmxEFoU8TzNbtFJtKYCxxTwdntEWhnRMP3oYTlVp3cShNBUdP8seukj98GECHpw5GepsJtfZBTFbXTw9FclRWn5YkXxsFFpmQF%2FiEfradkaG%2FLJIjevzRrBlLHSOSJAtwgoUx9ZcyoNGBOhPOWsuhIebfUZD3Zgp8%2BP3cTG18%2FVXsLFj%2B2AzMdkyOM%2BQIJEI6FsydTreitsElQ07i8OzD7vbzEBjqkAWBJWLEZNySofKlO%2Bw%2BOP2t4u6AiGOFgWiuM1f2aihohi%2BMFlnS9eTiAn7Nx9Nv1zttYG1IiylB5lrXG0t3U8ybLZnxTxHeOBBo%2F%2BvZVxZRWrzdpvVNkakn8s5JPO2AH5G5Gvd%2FnYf4yD%2BNMKjPlptFWzpbFu1VrjM1CxVmEw4zfQPjplxET9yAGeFH%2FWGz1qFrdr8C52%2BPunVBgrtLA4YcgrD%2FU&X-Amz-Signature=949a16c72922d1be84292cb91422ec02500cb21f5e10a9fdbc824976b396a27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
