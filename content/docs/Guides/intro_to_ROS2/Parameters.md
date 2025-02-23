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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUQPBX6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXOrIEF8KVJfegcxJ%2FDkymfQfGw8aqtlmvE7%2FTDRYa0wIhAIYxVcNOi5uOjTtSoaNIcdPwLd88AQBvIoGIjrHiaFoEKv8DCBsQABoMNjM3NDIzMTgzODA1IgzfsPCeNTf3GKbLUtIq3APmyEHCm2vG7rg0I1%2FlTuCW%2BfiybB80UCtuHxSmmxD9EZ1omCOGwiwpbcLVc%2B9iKCVZF%2BvoksRpURB0vto0yrEUVYwzRJUEiX0cfc6XKcqdiz3ccAyCzJe%2FTZKEMZ%2F6WZuSV%2BEprAyJodpFETymRntwI5p2uGZkKZymE3iokOGchOkseuY2SW2MZVqU1n%2BNHiBF1rC%2FYYo4kz%2FMqDz6q14CnwW61CCVEu4n2lJDa47zx7d6r%2BvQiIQrroMecG7dFRy68bHSLeIxHrR1%2FGj0bD1bTEIHbWr76tSKRsOYfpPXQEuWglniGgSvBxegqmrrbadC6Pg67EV36z6yf%2FexBldzTbfQnWta8ibOtyy63MyoeAf3VGdRAb%2FeY3yGQYIHEMZBJEGBpviGHwhi7Yh9evWtPrLL3nTBVTnbSvUmPpArvXN39zMTl8jdCct8xg0YUPGl%2F2iDQKtrxE9kdm9COfSX5a7K4epXH4c3JA3QbSauTgY%2F0bNwkRXiZe%2BDLlDnuspNkOfC0LFOgKU0p37UEcUGxZS%2BoJnb895VlUjY6AzPwSGR91iGGQO7iHAky69EHDi6pkKKsdsqr%2FWh%2F6IOCrWlIEQgU6qEEo%2Fb6Ab1imYfWmBBUeBQh4x9osoWMDCMy%2B29BjqkAd8YZizANgqj8GbH98s%2FRZCW5JXWuvskFXjZHSGu5R0Zh0vKezYtm%2BhdYHFWQhBgPsHyIl5Hm8LyLwhjtcVTMyjnC%2BhU1KLPpLESGgAK4sZBY2qT8NPcBvCBDtj%2B9SS5w7fUAxkXulKmAi6d4Hkd4K00T9t1JJ861aTgdbNybaSDzifR%2F4vYVGmi3Ww%2Fc%2BBWmHPStDl7NayMlXbtrKKmh1LXA2OQ&X-Amz-Signature=468a9f955f8b3f9dcde1996b11fe3639c96e39880e5e2b502e497c3cf75da549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
