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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWULCD6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGY1nQGiWykG2fYk%2FRPDTCKD76Fspy7bzIcPF3zFc6hAiBdWRJCaSVt5y71oIC6Q0diW8PU9TIaP%2BXe7A6xff7Rjyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMBDBetvLFmCWFh9zsKtwDBnOKRGkKzBXVWclBhvIX7F4t5NftYdaJ6m%2Bl7b0f29y463z0SVRGJeq6ArE%2F7%2F4EPiGiDQk8l2%2Bpn55XZdM%2BpSuflvL7BIFFAdiRkzaESBnxJDa8uSgfExMcEdF%2FMBw3KUUU%2Ba%2FMkKzT%2F3jFlpUfWJuWQ%2BJHBIq4rJ%2B8ju%2Bhl4S2Vr6a11MgCLPkC7w6s8ViF0yPibRnkVMxEtAeHeDev1KCwd%2FZX6aTk3xniuHmnlDTlA72EWRVQCGDKYw3JA%2BNza%2BNG1HF2Gky0mu26WaFIbnnei8%2BtDY1RpzBFeezWzvtvQsTpBEJR73Fm3rbLruOUjbx1JTD08GBD8wrCsJqDjLNSE3uOg3hnlUA9uBgrf%2BDPCNYYejwKmF0q4C1U%2BDh6fKhJzIQNzowZ9Uqe9WxJ%2FjT1DBh1lamBP6YtG0UWCW3Brrq81EgzJil6YvN9s3JUb%2FMWSTD0q%2FgZrTpr8F%2FKExsx%2F7SheqRvEfi1jEOvrKbhq4aGcQiaOmXo35hJjIHPe165bFztAR9nicku%2Fuo5Lb4SF9U0Fe9Ykt2qUA3XszOPHGp%2F%2B%2FWlU7CJjScuZSm6KHWbLZYmaj64Ck1YBtMGsb%2FBvHR%2Fcr5B4uPkW2m2k1IbbrCjlU0uDaCD7Qw2Yu4xAY6pgE%2F83okFcdFqiPus2LByF2IEnAreEB7GxxJH2a%2BYELqXVjLOoXaUDz54uL2fj76Sd9QH8iGp94whhkQ9W7QBxpFyBsjsrlI1lieLEETgORYVGxYPn09K8sO6woCUKnumZNC61ASZJyl4XbIXUJ9FBhbU73fOgWETuzfo3Iu8iypNa5kPxsH%2FK1FrWAL4Oe4mCmxQbSEXgUQcwMiKUuAyG4uGic8khRd&X-Amz-Signature=e8f4c31c686ddd7895ef457eaa0a37b0ae86665595845a7e82b346b186a966ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
