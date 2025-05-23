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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZI6Y6X%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHuNJEBbHUGP4LiU4XRWW1ZihDJEl3Tbd3Eb1EXu20SxAiEAmkoWioTQsV59qVjJk4106UKAjF8ztzdPy9dUfPlA%2BcUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAg5bUf1wSiDg6x%2BCrcA7PbIXzk2a%2FYarcTkmCW8wvASMEvA4Cdhno1DfNHyugy1YiBTk79J1hNim%2BQI9R3C8sIEtHg0eVl0TosnxlYGxNzLxixzCsEtZxmubEKBQ29pSHn6IeehVUQw3XgpOy%2BjJGuX%2BYb4V%2B2wWYDd4xJBUpJcxs88D4N13frNPZP8jHLCyNd5mlm5Ks6MSHvwTM62NqIcLYt2TSeDh%2FNDKRH6E3rGU9j9RE6ClR6KLrscA%2FuhnH1PYuSDqQGz6sFGM%2FnDgD6A%2FCQcKVYZNEp0RZXRdD%2FOh1E90RMzBt8kNZOta%2FszdvoXGoRteAvD93rumscGm2kjGhfTTNXA2w%2FpnGlEowOaHeyWuYwfoiHWUKQtHG2iC2mEfv2IpRM9Hx2EsN%2FkY0NvQg4bhpxiT2Sufd40gOyPR854KixA5B7uAownldCecB618uQ%2FIs03WYJqt61NFPiznkm025hE5o8zDC4qX1ugy2til6w2kjjptlu2odLQu5E9g4Qen%2BdMrz5PwIVaUH596vXcWVvrPBbQj7%2F5uN7fHbJNneS5tQI8dtJMnw3tOrjm7OTKEBnyw2s1%2FlOio3rcSi%2FVKojKj6DDIX3%2FWUYBzGX97TLMG7t9ntX9PP0IFG10XHvSrJmmZpTMNnXw8EGOqUB64IH2W610iekr8Ogpw8D5amOSjcXOpghcgCP215kxl%2FPXWyikcoNWENsE56JSvj8i%2BySy2ZnW4271%2FSATB8G2LZPN%2BY%2BzVHH%2BTRZmYHdWEonqTgW5Ibm8lAPKJ0QFtY5m0PSFVvYHg1ru4UyV7XvQPLBJBIe0Nr91URx%2F1stU06vnphsY4c4wEZKcTxqCaOd5XSrnHIVDq%2BXcumHdedRyT85u4uf&X-Amz-Signature=27f66a76a34865557c169da72f5aea11af26a45e246874858f231b163870981d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
