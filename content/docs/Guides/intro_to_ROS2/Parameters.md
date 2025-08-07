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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB53NDDL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIDuGBdZnBXytPcCBCXVa8DnIOmFyD2BJo6sS7r0O204VAiAQ55190S82EOl8K0%2FbIB6CHMA05iw9YIApyD%2BPidN2XyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6nMIF57%2B6ACF5R3%2FKtwD%2BmmThKF3mdkYRNkfxUWP4pa25zfKBK7mDCWuXzNCe2anoGx972ZKCNqXEQNHnjlT1QqhYo2q9LFfuUrejQM0QOcmnrb32nNgZWjdcVV1Z9AF3DG5ng6tALtKKAuMMSmm98XGY3LLgmOhh%2FICyw7PFQZ4p830l%2Frr7V%2B6894du3EAgPHqrPfUqduMEF1kT1VbI%2BE5%2FwXUwtysM48YjElRCNOwKdLOZBkxcUyh8dNY2G6j7lKA70lgzGJAvioijIzM1qKE3YfGbglCmzErN7S%2F4dPhaKwhHg3Cp1aaFOnMkEa5yBuB5D7VKl5qtsyxBbJ64nTVt6APnVi0i8kbzouQgiggky6n45dBb5XEX3789hWykXGgNoUhgYNkzM8r0kZ2voVIQE98Ns9q84nyD%2BAAP2PJM6dwEIL3jitLneIZ%2BIwo%2Bm4JszQ9HCNuxZWLA0AmqX02GgIglyfXcw%2BuCnqj0i%2FJZZ2VissSWrUow9DlGroUTCi%2Bmw00uAQks6GF6%2F4VvnLXLkk5b%2FHEBGCbd94QHa%2BOFo%2Fus%2BB04PmLsUyae2XqS7AFg3UZkMjIFI6AjSuWP%2FryosS3pwGYjgV%2BWsl4zuhBJPG5yW9N%2F1FZotwxtKMTJhgsRCIP7fawqPcwivrSxAY6pgH%2BFue9d%2FnFsYwpozTygMvzcrHE%2BqsBgnnDlnHIRHaKw6BzAuoG1Qz3f%2FZyS%2F5eBScrqYO3A%2Bs%2BwstIMcVPwwyctCc7sUkK%2BJ5GePr0d4aSQj78uOAwxgf1yjeFIm8R%2Ft%2BH0YE2oWxZv8t2b7I2rn9O1646188eBLe5HPmNHs1WlxEZIV5i4il8uzxL8AvBYZiVgzyxGrJGyAzhdzbvnz6sBd3wBmJD&X-Amz-Signature=02bb919f17a52b4628b154ac4523c66379ba7135c92d9cde2524ae39b3b9ead0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
