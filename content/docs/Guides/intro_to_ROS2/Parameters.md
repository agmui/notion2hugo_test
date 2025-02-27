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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627J736GH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICPPN3w%2BriaTUGjJmmQFDcFrQJgXsX772uJ69iDLxhkxAiAinIozYIX6zphW5MIA0Sg3EpeOezyxwpEnHodiGziIWyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMCROPDJkl%2FkcIgSSfKtwDMMUVIYiujI%2BWVdgPqfNcS74s05Lu9RK1K%2BHll7%2B63SDpSMfQ%2BO35sfljDr7jxKbmyBoij%2BFHdOP5CxwgC%2BleZmqn3G02BrksdMWOHZ69m3BPBjvDoA3EsF9qanUJzNaLlyh833sbmbgCBZXVBwTDaU6zaxC%2FKzjCDexBq4H3bgwTqAhbBtxhYbJJiHCq5vZvKMUpEz5xhNSaNDMzeThNjIy8bwpPP%2BXnmyUMZN5ciSjp%2FSr8QVNoIo0l%2FBwnOOz7o6h78YtW7Gpt7OjZnhKkOkIEZ0KWK2xQ4RxblrVmcO1TqL8dVS7NdG9aqRkS8qRqplNgM5t9U3DkQVuf6ZWdRFC8cSKR8Sbqv%2F4D97wJ%2BgR9L5k9GR3Wfn71VFpOSbO49%2FCrovhvTMvzR8UwDHXOovYqG0cv6Ksu7R%2FXiB9z4%2B4VP62vsW28gJ5ZFPm8EV04gkh3EMAMv%2FfGT9yKGCDt%2B0rARzZeKwpRMtadirnz%2BmLFxyLbro2ePtGaTlqFCM3KkPHzt47rFL7MJH3xVL2HxIoXV2INjwhe4QQA0j8XiCOfL5dvyHyBG4M2V1McPBATcFy0w0GPgD36YE9nksPlkxUzI%2B4AMapwHMCneWpi63Ta9YD%2B0ZvpgSA9i4owoZT%2FvQY6pgH5JGNzsLgdThp%2BTWFx1RIfE8rf8inLp5SQEApp7Ct0EzJx8sDQWkZNpHM%2B2aJ6A0ljDGpj4GyzfDxP5ePKOI6q9Zqy3f4JPnYQ9japGPkWb7XFE6kG0aUnK71r7D%2FYsyqFtXIADXJ4zhszozKb%2BeYNEkmVCHXKJkE8VakBUvDYoYEhzms5%2BiNpVASgMecQrsS3ctOq4d27aL2rytl6eJFOE2h6VJ4X&X-Amz-Signature=62bc4100e14591b6679ea1146be9741f43456b0b57da34bf8b06f2a483129ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
