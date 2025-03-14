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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KRDADFJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTsCq3SF5mKmLewKLrii3acyKKvxSaG1gOcE6hJgAcCwIgPT%2BkE6ac3bFg93KQtJ3lMi0WOpVI3a2aD6BPuqJq0PIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXx8JH0DZlmPlbekCrcA9aoXMUH8EFj03mAGTbsPluSBME4u1oMbcwxu7ySBeIp%2Bd%2BPdlVTUcuzjxNiiZLGtpotKuPhcS6yl4nozUF8huERV6wPeBaZBaQj%2B8SJ1zX46f9JELQkmvHzGz1JySNSgfkm7xLvjZNOWCGCZaYRAXQVBgCioRLGnlJuoGRge4zschvbw9c9Yf%2FPHV1ekfvTP2LL0uqWe7irV7ZBhIFimgkSpHLWG%2Fz%2Frig4lx5hjFACzZPXfOFq7DqA6vgtc%2B3bysuqjhhCJGTZImrmnw3djGnfjF7MaSNKnsDfAz8dMAbpdVQ2frH4KTj4aAgBBHUv%2BMZ63Uthg1j7SJLS%2FcWK5ax%2FBznvJrnv45NO25PzYWPJt45bt7sHh6m9ClG%2Fvqi%2BhTZqz5DqhO3DHZAnP8HUBwTBCxkpb%2BNTG7DictlraSTfXWxj%2FHBcdvi%2Fgfl%2BwTDjUq%2FTiUFolQmKZ84PNrKrNGi0TMiKRCNM4UW7zdbawmNoxDjwWEBG67K0zfgW8acERD7UT6fNQpL0O%2FB%2Fk%2BE8T7Lk7vGD9ZNE9bV5eURlTj7IPjKxvZwW94GzYeoqR4x26kar1iVGi%2F0RuJ8bV3kLcYbGA3On6kvzefMsggWlMbr1GZsiHEU0FJOXba7aMIzuzb4GOqUBwIHp8T1yNvkBEZJRzTOS323oX2ZKU4O7hFH6bgKoFLr5KMQtfBNVDcY6EwcWXdGlaRqmNSZu66KCBvMKSD%2FgnUU17xH4Jyp7ImOxrNiRUqfsCbuMyPy6hj%2FEJoDqrKrhkVrvhFbgiZKF3nPYA290b65DAQ5bmIp4ZnxZgZWvxuM7S2f7TwPFtZglRrqlaK8wN%2Bt8KYxLvXk5FNIZTyNIyOyohd3b&X-Amz-Signature=b2e4c1208d5ed564f828c5f396567bf5c128f69b25c9725d4a5e1c81fd8f8597&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
