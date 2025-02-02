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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ZOHGTZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCptK6xLfsTKmQm5XXT11UeOSmFNTNJBm29Hd8EIQV3HwIgTSriJVcYv20uu9WC2FUGApjJj60reKYEbSvXXJBbRKwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHw1iuMM9koetpP9CrcA%2FEJIdsERfj11nH5k%2BcywQaE1GX0qSSVeON3q2VQijaijMNPgk9EVAtB8gjMqbmzgw26Dr96cBLLDkmiCUMlb%2FcuV7GqFKUJ%2FivNmwA58pDDApoKbltHkroHObFDmCxytZlGnA5Ag%2BV9afFE4RkZmus5qkXpdtPzXKvYFBdpUrHOG45lwhO4EuTmVrN4mZmGGN5JqaqhOzZPMFDNjft3flCfcpCTvV%2FX%2BZj6QaZeYcZa2DWL25P%2BWiowUIxL439jpT%2FOIuDg86QyUSdBZ3%2FPGwLsC%2B0inBC3YW%2Fw5qEWx3R6%2BL3BzaPhCO05PlhWBLygyvBa%2FitDWHFW0fNMKqY3qSRBCG9FBhGTQ7yrwVZcdkZ2dlRFOvMcWnMsmYuZW7iZmshpCx%2Fs%2F3oD8KtV5X1SLSoDYosdvpub8hPcCLQX0VPo8JYkrBHablwsYtXpB5wkZVcauRVslhP3BU7A3quwtg26a4Bz6BJB9N5j7O2QBa%2BoVv6JV%2FKng%2BtJhE90ez%2BJtD5waI%2FG%2F0tyZLwZUGnGK%2FV9tcgs47AwbSOIc1aHTpBHztC1BncDUIY0MclBRnaZam4f5Scbs0GbZwcW%2FCHFh%2BnXJ7%2BDvjfCbfiEp%2BYtaBLCqfuQ6Lh2%2BcBF8JYKMNue%2FLwGOqUB655H8ARbvpknOUqvILmt1segKGxhlodhXpsJyu%2Fu%2FZOK9L%2FetZjtzpgus8ZvqFRL9ZromXkiYgdWUnuKaHpFu2spq5NaHi31QvtwrCElzeLT7JnKnTNksWxJUSHCl6EBScaQsAM5%2FKoZVCcsPKq%2FUnz7pug4ElzB8RZd00%2BXbOnoD1bECbNKySa8NlJ%2Frb9%2FQ0i4L72zU9EWSAknbHRmimJ%2Fh6d%2B&X-Amz-Signature=9d1e1c305074d352d8371fdb4a2cadef28e835530b59b5914f2a082a29383cce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
