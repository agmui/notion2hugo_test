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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVBSJMR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCrjRlSV4ltMujZ%2BCaFDmjPdQpsbiMpY3Bn%2Bwnbd2AE6gIgb%2BQxd3wwTUr9tqcpUzNtaMMqBLiU9tdsjNNP%2B8IU2vIqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxFMFGJ0CbubYkzlSrcA%2BADcnnFbi3ExUn4GsnPnp%2FEZ%2BgqDKWPqF7j4CZBo3FEhKjzoO8EwEZ4w3cc8I9UQoCw1mLwVEFOAB%2Bpy6pDUsE6FDdpIYcu1dkbCOtMJFDUjplbbw8dsOjYCcUR%2BHdKiNF10DyEV1DJ46QWmOSJE68vlZBlWUPorLrFigmOybdta8l4d%2BJkJACgGBENrD9c3CrMUWNm2XU365chM52IAR4vy3gZeowjsFUZjMFgi8QU9Lxh9zJ%2F7QhN43%2FdddOG0F5WqAiHU8xDbCfD3tFxYUB1AdexUJRiL9Plzc2Yin657Uw52DIKXhmZPOMGQTXMTijfx%2FMdyz5jgDnUeTCqnvpAo0hb2lHMazhE35ddJ8l04v8s%2FkgQbK0m03hqCkm36JTwgqfc5b8SmQSz0Ez60DEppVlQKszIZJqtodXzalaMQq9ccIX1Ua%2BiNFAM%2FTFAEHdewy8ScTXTEr1a%2FIEzrC0okcn263TBclBu1MNeoeUfp%2BolB17cUgc8nQr%2FahW%2FYss9hgyKfRbCANScNRH1hDVcIP84HV8i1bMMLqme1EM5qGay0gtxXHlhfcw5NSZWn6PqtbHJ0wiIdc2vZxBNxg78U35IC8etwk%2BENLfrp17BEE28L8Idy5R%2BA6ZxML3j4MIGOqUBwyaCYmPrw4sfLpT35GN1IBiYWthrmk7ivOhDdGjsrmiJ8vSpbwpZUauqxWC8iHqYzjCQ4n90MkUBCYxYr1IaPdHtC67xO1u%2F1vK3Dglys0StUBoygXl4kfjbpFlEsn%2Bv9giTeaCFxY44oblDh6f%2FSIGHH%2B1zgvQU68Wg3m65uyZHQdtlpkt5m9WKPLNywEH2533Xwl69KZBSEAba6v%2BPApcSJipJ&X-Amz-Signature=6c283b8bcd8a7fa916b2f5a82e67b1f9504c4c870373443a85aef963a3552e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
