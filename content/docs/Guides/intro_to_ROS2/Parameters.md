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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WZQAVG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FqAcOpcYWDpW%2BAIJ1bV5clXTVZMbwYLEC0Tl1HuX5AAiEAh9%2Bxq1fMrXUWFwO9qXBbSCVJxfpae1R96TKmONAXEEcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1%2FbGlmsw%2FsTIaxVSrcA1oeRgFVQKxgwkKrkFuzT4G5VEIL%2B1Aenq74eWxLPgDDnak%2FMDKlgfVhHTYqkM37vKX%2FbocOgnIUC4%2BTHgBjrxTBxJgjUOKi5y1gitD%2BoYli%2FFQDOZR%2FEtxn5TsRYxxFATbxtTEE4AfqiEn64VRnEWbG%2B1QjZqzwTs89rRNnLSw8rd1pVk%2FfAwGHFC9V2QwKKrP7VGvQmfCEkmR0v5Jzas8twvVjv1KcD9Rlxk58XG7v2YB6NAU2r0L68weqnC5vFnS6k0HnjkTuLbvlodsJiLE2ZFLIO%2Bl%2Bw9GrnO9GAkwYsjGopYGn3U0lh0EAVsrm4FpxsnFZvQH8ZjmTXU342hpnkfTBSa%2FW1QwlbqI1EgyWNZhJKvNVi%2BH7kqwOqCKQ9W5LFl7DMPZZdx%2Fsfe%2BW%2BjcJRUwPxcPVZWjN3FqBLSqeN8bAG7Mz1E0ZPJK5%2FzCOSTjKN3FbIPy0gDBJ4WmzPTPwWzUjkvNQ2tbw7BOwv6Fdr5aT9Xnu0eVkFXyBUpr4R4p0kfpXtxCHiox4n8%2BF91yMLG%2FnfH%2FuG7mfYu5CC3RhhneUzlB1o1SQG3riYMTu7y%2F0XgcoXYgCI5Kt3g7S8RCJG6ykp7RYsQHl90DwEKPOUmgzqVEY4lSwtOowMLDcl74GOqUBITB0lnExETppryJSH3gwbYmGTa505ASysubHY4pSTOEhptq%2B3ayPqNvfqHPKjbNWsVCrVIrX3wQGQg4WkVq50pRrJGpv0Xvk6AiBgIYwPpmMPwKkhfim8M17z0Q7Nskf5Lys6zXj%2BNCY8eNFZLiwugr3KLloqM%2BNk0IgvowKayTtSoUsVGMaMs3GjAuTppsBTm3IhuFn71FenLYs2%2Bkll2aLv6p1&X-Amz-Signature=372ad3db83e6766c4b73ba9b27f57b2285d3ec66602c82db490de4b21e9c4a56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
