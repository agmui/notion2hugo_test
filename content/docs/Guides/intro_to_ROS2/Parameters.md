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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EUT333%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKCulMMErlKDnVTvvCmJGEuyYb4fTwqbFewT%2BJqbKjpAiAsfL%2Bs0E8nZCSmm2vBefPNB%2Fg5Gyr5%2BJYkKOzJ8NQGFSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24dDlCCl6dOk6aOSKtwD5FOZviGPcB%2ByI3uocGrg9Tapla%2FyWdpdwf0GIVzkdBPGfdvVtHl5dSOUSdXWVFzv34aaoqgXy9WfnVgk9W%2F6dKGMeT7vI0KrkAkrJT23Nx3qRVDAdbS9K%2B1f5IsSOQwzhTpwFNYv7pH9%2FPvkB%2F0vMvpLNbW1BoHBjv66XLodYN61cDgyWFTDa9e5JfBtEKm6MHBlFn24WiYlS65G7uOoc%2Bq7EoetMpIi4HTr2Yh8pTNTiMkMbG1RvLlK9z3q8pS382RgQSl8tz3UK9K8z2It5Rv25yNf1Z2Iv1G0nLiFVNAfNRNEiPv1JqdidKXgqpP%2Fu%2BgwdWOf6lUWnVOdV5G95qrWh8HFPoTBnjk3SVeke5eav%2BcspwscHyedciBi%2FmU4GMitDpMiWUZhewJqmTNFEDUF7uaj84RACazL4CMkWs%2BqnfbkN9G3yRfk2bsbsMw2RWTKaRCs5nI7gvZMoy7HTraXDHS6AyHfXGz%2Bp%2FSzl5KJ1h9x8CWGkLuwHmzX%2BlcQI%2FDPVSBDd34aGg%2Bwf%2BJ%2Bodo0xpfq8DdEf1D%2Fqp6sOUxIprymKvsRraBPL4M9keQXMDgTvp025nIGcJztSsLoqKvMCs%2FHPncIDGAdvJ%2BtYo86L39qG25z8CRjTGswvePivQY6pgGwIMS6VOTj6Z39jYAdVX%2FBaRMn5bUdM8bWXd1hRNQpDs7nrKeu7ISmFl%2BOoIatLiC1j1IU74hZhPYY%2F3pMByD8vtRDwuUYsixeJYCDq6PtjJQo6OlrOSD5vFsgiJRC5CZb%2B5HDjQFYjcc28Q85P%2BRzO7APKfhOpVCZGZk%2BFBFaVs7gsXTxQYugyIvUMqlUX20Tc2Jbl0h9aazSAkJrbFAsGk3DBliX&X-Amz-Signature=1394a27b22022c5b09b4e1c8b7f7a5b706a1d33021b25937cdccebda81ec3790&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
