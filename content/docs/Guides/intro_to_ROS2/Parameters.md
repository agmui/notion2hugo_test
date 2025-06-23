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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MUBUVDC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDRy2mvEj6cjGhx8T14KDlKVj37oPsoRjwkq2IlGyv5egIgMP6PsfsnaKaVP66fhEgXEm%2BuCQQrwk8xTzIXVxmXK0Uq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDPiIJ5ptrGSL5%2F7H7ircA4D6ZSFBGEyY3ZZzMp%2FdspVMyps8hiYRjriIxRFpr4BKS%2BUL%2FhXgIYPIrjuwqN4KxOVoKR6fhceLbZS9FnNp36JEjMFCxKRltZGatI%2BiNeU37ry9KbVxvCXDnlRJQOvZ5l6C1YkudZfq%2B44LutNgNkkdOMDXNOqVlI5QfOm4P6d21IRZ3JC69o63rdPF5NZKvygK68hA7AQv5Nr%2FnO4yVOR%2BygKz2k5l55vetYQgMHStq3XNYGHx49RKkKE9j5hfnbBAmxwhj9xqEf23lsX0fXp5M%2FCM8waUym2qB6Kl7%2B0bbihTPYbK0BVH3yrss7lboiepRSiWGpuf3Rmw9s78wv97MPxdsD1QxKj3ojcry%2BZjSANChau%2BcaSb2PTADQreU3%2FGtPEq8%2F0kYWTx66mPVB6stbMY5Gvhd8Rno9Y%2FQSoD6qTGrBdTtAnZIyVUWdhLYe2KGDOkGHMYlxYwwwwGOagFXvTrjI9Xp8F385peGoxuB5lVtD0DRwdqPfRwcfgTw9uB1uD5664cyH2sWSrw3FPwCFwF8Ngx7XWyW1CyPu5z7pkUs52tswMgVpWMGjnHUutWsKKFQl6s3y9LLAjQYiB%2FGkkNYGKN4UoQMndobs7e0eaV9bonDgdTeDpaMPrt5sIGOqUB%2B8QqRB5FazkDEg4J5%2FBfm5%2FFkb42Mmjf31qo1SFcGOyYyvsjZ3otxfFSpKEJsa4Gqf1BP95kKycEPS60%2FCyjkF4ivCp0S9774O2N%2BhhCfJX28HJOcaRWJugDEsJSFPNg6o0iN5xtJ5QRhAYE9pVshhgO1ueR9ICJkjDQ%2BLqKdRU2N%2B5wOWMXpXw5%2FLhiP7RRQlpkJudXQ2m%2F%2FyyZTZj7evT%2BD0SY&X-Amz-Signature=5f81dda5b792e850fa6dce2566a56a81319e7bf1c98ec5b45e2f2dd937b6e325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
