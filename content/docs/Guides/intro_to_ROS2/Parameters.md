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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VN56Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDZi%2FehDr5qz%2BxPhaLAAvIbI7cTB3RTkXF0xb7AFDjJPQIhAJu502qKA2H6yQpbiw%2FqVOBPf%2Fvyqqlt%2F2Hc8mCI2I%2BNKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQ4vFk6oqlfQu1fVwq3AN%2Fc3iFU8FZ5CZQ1vR%2BcYFRkRW7ecpfjB%2BZhOrwc1z6xDPPjXdaa8Yw1rBYV8N4jYR8X3W6%2FxWtLumJvRLN3CzWGOZDxQq7LxdESWDRDIuvHyUB6%2FgpDjlSSos0cDY8L6PEPuLd%2B%2FL8vvljJQSwaZ%2BxR%2BvJzc0i%2Bs%2FU4cIivTPNBOwuCRJmxv%2BDVk5%2Fczg1pCEc%2BwYnhAPX7qg%2BWAdg22kuOR8%2Bb%2ByPedLLytU2mIRIKXlDPFXdNuhgEEBKZhsB%2F%2Bpc4FWdYLse0rM4i0N53D%2Br5psnMxLAOrMmsjLmQPYwyfQB4rhP%2FF%2FKQXiGdBBwnm2fuNo%2F3jS0%2BBo8%2FrMeZPpGIhBzZJQDNyW8Sw%2FcbCCAua8ACJzMsFt3BSoP78cMjIMNJJv%2BNd3a0K3JDxyFX8amDlBGzR0uwY54yA0IMic0ufNuLRQFE0%2BkcKNyiApZ36CebN1AVdeCF4tJBzQweAk6x6ZuB%2FPdtH%2Bt4bvWA%2BgCPhY6o8AwO4Vc22x6%2BNKRoA0fYpS0tXXlytrAqZqNZ7sPjtH6saX8VOMpbGDzA%2B07UTaEGJhhvuhwBZDaFXPiYqqp3bjEAq4GXFmZDzlEHVnHrcRf3o04%2Fl3IlopHcilFd9Sw8L3jUvrJ4MuHRDCS0Y%2FEBjqkATzYc%2B%2FPBYvkx1YULDW6SOn2%2Be5acPi%2F%2F%2FPhZA4OFKOSUJu3NSf7DxM3f%2BWSlVv80kM%2FBkXmugTn7E%2Bf0zMOIJgidUzMHNbYjkdzJUBL%2FKUdY1KaDJi9jFrHnUW0X62NDZU574QXE4lh9BPDFaV%2B2P459CUtCpqgNGigHmOhaErnx3j70K50fb71jI4NqsDtBGtBixmg7OCH51xcnPkbvB7jqoJG&X-Amz-Signature=2e04d87d61e19a24a9ebe9e2fd49661ebcd9d1fa15940d4d476c848c94aa62b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
