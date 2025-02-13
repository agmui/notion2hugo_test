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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVASWDS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH2fyvhf%2BtsQfG%2BMbqmWdnX0qEhqXPM1hWMk2ylmpNdAiAW3mHXmm8q3FeqPFVay8w8SogYjEsFWIBX3rAzrB6Ymir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMDjFyY3warI%2FmpNsrKtwDHcqDywVAcUcxGMbm4TjiOcQNeFBzbR915bcZvoXCjIio45USkGGOQB%2Bw4AKNMXaVDEGQY63bu586V38KffB9q8R96a5Ssjv5fFtEL%2FheBCPBKaJjwOXEbRZEg%2B3uU%2BDnZZ1%2Fhx0LTNVyh9hzeVery7hLEQ4kLfs3xVwUd8F5S17KvEP5Dcnqv1HuGdVSb48m3%2FH6rMKcSVmZ6W8j2GnP15hN6ugaPAFLk6ORsEtivdn9s83uq9jxUvncu%2B%2FgcB86VT4LQyhBn3H9%2BNBSoZ1OpEEqqmjuCCHXSKCpL6XHMbxZ5%2Fdjx2KF9TTGj6%2BkzlYUofMWiP8KJQKrybaNE7e6RlTjF96Y5QksJJTyCfUTjcQWbkoCy%2BbRsffY%2BRiK0oB02tYRCzIyMfBcSBZXalN6ZrkDKkdfvf13b8%2F%2FCTpTT%2BI%2FfdVFdzuXo54X1YiBvRM4p9O09len%2BDu%2BrFag7gzaVkTZTJHz4XtFpkT%2BKVTKhRQfR5In7YryXCmZarb1ijMuD3qInzGRo2l8xqy2KfVxVoGPHBJrbHTmpynnbzBj7qtbmZHcVPOHeBlPLJKvj9LqfOorpSwLQlI6aZOnndlnn1qIEAjF6aF6UvaziAlBLpTJx0Aq7tLaWnWYMfgwpp%2B4vQY6pgExsHMpqBcOpi4uqGeNgaFHnEQlcnFUoLZ5CWD6DbZhjWYmoUtYt9K3U1qzePDtR6iN652TW%2BoEhgSRVAWau7pjAr%2FG3u380ynKYmF0axHFWEhMRjt%2B6Bo3NcX7TpFbeXnHXRJxKi1KUsfFeq3mEm0dzdRWcn1%2FgnOkmguiIsDiqphVq67a4suuVcxVxefN0GRzvlWvVzym4arjql%2B9wRA6IjeqjWmk&X-Amz-Signature=ff22ae5a8b94193035c72dd0023c5d019d042d09b2fcdf4264e2fbefa6140338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
