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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3VFWOO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqXR%2F87rv%2BXBv8KQAyjuYhXjbQsBdykBlmM8mRZiosQIgPcMvON6K%2FRIkxFyEejXU7zlbId1z4PUgbGasXdNB3kgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTEXbcPaTISAtg9GSrcA1is3QGPKWjsanWXX%2F5REOBUx4qLapHKllWlK7xt6T%2F52AHBZl9CyVy79XTorEzYYd94DehRZoPuecpOK3OHeBfWuYSFLdQWkXnWaxcHulwDVfbI8sAbBduRq8Ve2yoo6kz8dI0nJnAJBaIvIEMslCugsTfXTVutxB8Bs5dj9Wyp3JW1mMfT8tv2wfj7pYIdfBy9rXQ8pl0L6KPoG0DGTEJQpvWfMYyRYAnTTkUTFPranN5BlkXK3NUESoVxT8d9P77pgE2VxS5Uvt3eTROc6lYLmoX0x%2BO3pCs2WBoLJ5uwbR6UsBeu4yVRBJIJ55hsZtkWQkwYhDOo9JKOC78qhJOUXDP3WTu1N6VBsPVXPCE9%2FG4cnxy7XPEATphtTj0V7rPNrz2jPw%2FuI6PCUxYaq2auf64sbRIG%2Bs897jGqDC%2BeMtFSKdL9gkuxPshy%2FkGm5lDkX2mQlsphH9jKLWZ9bXJoIM59wYSbRDIavuy774capwYfyg%2FtvzmbBLxf9MLyE5EE4Huti8HGV8gHcUdbqc%2BB0c02qMJSYSSRa4P%2BUBLzHPSvBvA1OEuso5ezOwtur1JQK%2Bq%2FRNpODFm%2BLzNNOeqOH7t06qWVIkQ42sC%2BcofeE8JRPhGq9BQtsVWbMPaE68EGOqUBjfxPt8%2FSI3%2F1jxFvPHevXQuFD27%2FNnZNq5plJOqs9aGI0k4PNeS%2BA1lJz4SI232csRLQ192gp366UErx7sL1kiDZsG9H%2FA6RUYZFKCmQFLfU7qus5xo9BcLVq5fhQLfH03aYBRpiHZlXREepJ7vRXJx96h1hlNTiH7yqYbCasjj4Pk33V0l9jTtdx%2B3XzedOrnPvS3S7U0eZKT%2Bc9GMIfgdaUfRx&X-Amz-Signature=2d4934e74f5a9419c2ea67aa244bab5226cba351bdafb65d9bbfc5629a948e25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
