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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHTGH5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDFXIkit4G1iRqZ2lt3JQBc6%2BlLRD6rURs09p5WlLP3AiEAgT5wh48P8ICRH%2BrGjDAXht6I6A0EfOlldtZ6cfH%2BlMcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs3K0bl8NG5urGN3SrcAxOm6pWggG9e0vCr5Zth%2FGs%2FbEoxia5iKLx4x2YYZnIgtTj4yFPYOtyo9W%2BVlhZTDHVaVf3x%2FqXr7GjrBIt%2FT0OQXcbpqc3bd2VFdbMJPjWc1F%2BCwN7xIRHrFsSgWGyvqWJHWuwDNAPA6Ptfn%2BUIXLZoK%2BnDtbrh1lvWxLYVHCiHZh3PEkMEXawU0FNl8d5f5gbW66rcH6rJbVcWrPIlyIhHKODJgJJodj17ai5HxyA4S5gby2sTT9R5bXzHHM2TK3g3EHXUPsC4XfEhY93mCtP92ZtnKbzzfxDLihXRb3sBFa2YTzHVzSA3qrxJ4NOHx29XduE0RuwytqSTIrhz6hnzp%2FrhbK1nlQ%2BBGuLCZxSVn3P4KF5Cl0OOYbTQcqWomx9C9JUR1wtUR2kay4qHkfWQf3c%2FQJ85ViTO%2F5Nt8JQWXpQU4w3GX3ZsGpxgsxu4SSl0MQBIQHWgdcxM38sDcuw6HzOB8Z5mPdEXx%2F%2BgJVHD%2BaoJE%2F%2BlY5fNu%2F%2B51VZh4uEUlu0Av05Pbq2S2N4c%2BXT1PQLqerP13w1OV8wF0Rc3TRF6IV%2BSkmsQct9FrMEBOC3JAW%2BMhK9aHZ8R5%2FG7IpyifjfuvlbdXM6LJWV38LnW7q64bn%2BKcnR4yot8MN2Iq8EGOqUBf6%2B5sAuI2x8uuJLmCiOesQCUQY2MrBe2xB8E1XL3G5%2FzDFjdNS15pQWtI9c3EAC7p7gG1b2F9P4cW9E1INtGaFwBceJGhdu4V8x8hztuSJ74pgETy%2FRI%2F8j7M6yV0qZvttJM48vlwraROJ9hbxcVrZNOyTjPhO9otpT9B1of2VvrEKacOlRt9ef45JNd6VWnCCqchMiZOdvIqAgW5GhTsKa7tCFK&X-Amz-Signature=199e789b7bada4c7378d0ca8968572aad0b58d83fa571d99f25b26344bc82124&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
