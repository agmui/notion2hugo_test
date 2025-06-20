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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRNHN6Q%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd8UieuAx6RmVoYH0HwIvktBOCKfKnMFRKa80h9XvRqQIhANB9agVKusnMmDqmiTX4swe%2BgQzBseDxVp9IY2DlejWvKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhwwIPrseSgujZ4KEq3AP5ot5hWH%2FtR69KA1FlOggFNxd7mP8yCfOHrpfRU4DZJEWV063zvoICPRViBpfwxi441yZCeZuD8%2B2kOKd67yQvZXsM84MjeQqx4MX0lF%2Fl9xL5fhfy6yGDGej4yHLMfHzWX5W7CM66StPsee3PlGmje818ICvHFPeIPvt7JaZqf0plRyplj8e8B0SV37MuJsnzb1dj6pBs9v4XKcnLOFTrMUDSYH63k02VrNX0Q8MWGJ7LxuXqRD4vJSmxvSExLrsqhAhJHsZsIZotHkRCn4CeBsiO24YF%2FPTBYkl4VCFOlfplKATHBbX0c%2Bk4xtKlKUFSWEvHBmv2iY65FyOPVoX9KTdWUKl1IVFACAosUsWavweL9H8t33nDxYsuxFcbYTgX4tWXtSBQDl0%2FaafLdxNYQURjO0%2B52DB%2FNw0BlQHb3FI9Jkfqm%2BtVOgY4C7TK5Osl1Zyg2t%2BIhzYe3L8ezyEd52mHmieCzX6CdX6txxUBIxLpMfn1DvVX9VDpGNWcggV6C8uf5m4p3Ni%2B7wg8PszB7QwcVuiPjfgsuRL84x8sNvUzAZTOO%2FYpjrEsahEDeYgpKCRBhHunL26pAt8mQlsRSVJvICBzhodl7tbFP%2B%2FeyPa%2FRSWj7VcD%2Fb3LpDDU1dLCBjqkAWQoOVI9ANMwfHK5mPT%2F%2B2WqvTZo6kjycabqZlePgE8QN4FYYc8D%2FR%2FqdZ9MpWohpcw02IMUUlltjP5Bf5xutQ2dJUerWAUOiPt8NO7E6CshaAdyH%2BzmK%2Fhk05XPQytIJw9NRzIJ4XNGX7NkrjKYFUSD%2FKm2AcZf38eXBbcd8fUS9WwX6V8zdQlGHFq095SS%2BI1rH%2FhyVE4T6Ev3h7gzIRltVyTp&X-Amz-Signature=445f52752013d921d5df6eefd1b8061de2ce499f9130e32629ac5b301316214e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
