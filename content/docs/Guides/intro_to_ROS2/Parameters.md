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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IFB4SLF%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFt9plFMOcnJ9jOEfjR%2Blz6kh%2BUrk0N4Z5qh9IScTWpGAiEAvJGxyEhu3Fpd3K83GpoW3At4sSeSXTB3NWhWyfRzU7AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B1caTJ3MAq6%2BjrbSrcA9CIoQKdrXUBhLdf1V1KRwQB5%2FWOZSvw11Bpas50dDKBcjbNnyKvwrDpAzS3N8hEiP3B2eq3%2F1R8s12KvzEvetZ2OhoOAs8Q3CcDDWAIw%2FXyzxpr3TqD24NmRg2bmR%2BaGLe281pt%2FsWll%2FbUqcfwGcshtOPWXNZV8NJu4iAhUsnmsE%2F%2FkZuuwnbQZ0xjPtVmcrlfRWNLw6eZO%2Fk1aHOyICVpp8EwcCfHRMWeiQtiazHROSuN8AxzHYTfhcysxKq82qjsmXyrR0PdeZ%2FlNoaQALWHBzU%2FnYSLqZkYA3MfWp3Sdt5fVwZOR%2FHQifafEkAtHwO7%2BguE3xPogGWWjQup1pgHmkwOa9FhoIYL3xzyLBYvDGWdwVsQurhmoCcKVAW3OCH04zJ9oYC7TbQB%2BJUMPN3o%2BpfYJHM0%2FxHmoTlKxqwItY8dFQzIrABGlH80E%2Fz9hjGtHLep3IP3Fn8PMLNAS98Wn1z638rQbjigIU6fXpaQ8xvPR9QMEMxuHUbHmEVS5c2i1DSPsjsuCVkcmLVj8C3D3cm5LT9QDCa3smflPjCDXAJDkn3M8BBQPVrmUPzd8RYWe9EFOnM5BNRtaYAhDa0QP3gYl%2FwYBe5HYwMiaHls2U0ZqK%2B0lfV8323IMICAm8IGOqUBlM9OK4J9McFg3GzlbCR%2BVV2bE%2FLRpvKivUmLoc8zGWBTARYKhFmTlc3EXIfnetWyutksYPo5bHXh%2F2IJ9CsmSAgt6G1jy2vV%2FGgrX7kugbQ6ncHDp53Nv8zkMgAZ6kYIU0eKXr1bLFQ4LGvGcJo0fgFDOOxzAeEzu%2FcL7Os2PqpkkdQJtjuo6UG4xkojjLNlftZVbB2oUlX79tT38WAI9AWTIslK&X-Amz-Signature=671fb4833f6b6e08b3264d9a247780f89c1f19b9fabde6e63eb56ead8598a2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
