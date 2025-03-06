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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VD5LEC5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZeq6bZ0Qb94fyomo5%2BXGEoOcp1wgdO%2FzHsmZh5z4BQAiEAi3cKrYhiOGD%2FLWzks92foYpWUXLpe1ibdCepfaFNGk8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJCoxqRQhyC2CXG39yrcA83P7l4zv9E3yfvcIF3YckvNd%2Fje6BuNDTiSDBI24BDg2r54CEEqZyJs%2FzKkV%2F8K4B0uYeQAsvnCDGpM2yBb%2BIYcj7QG5YRHad6Mv3qlM6pEXOu2ihY94ixv5B2gzsxAs9GhXhnl%2FWLOHRGrNRplLpFzxWlEo1%2FETq6lvl4VwQHpoNmLT5%2Fy5KPlySoCV5djuSodnY4i2Cv2x4BXncepDw6aDR2jk%2Fo45fXg54ceJ%2F9xaqHu%2FmKJ1eBFTguYI5YS6%2BHgi8v5lt%2BHVDs2F9Xczhw3VUzWwkI6wCKSmG9QfdqPl86wPrxKTb3dxxJPOua9pmz%2FV%2BkCTWBZL7K2ldG7109%2FjQD%2F3yWPlgMRzExC3u98BPXLnCBowHFwW6fz5vEDGhuPcC%2B3nBmgOt2CL95CPpV4j7pp9gd9ZgzXREB8GTQQY%2B0SH%2FC1eQQiRlh8%2BtwmK637lsRHc5WwZyokP%2Bds7Qm%2FUXC2vk6svtz4Z3YoV5iSIiBKotUw7%2FG1Lob2XPKuDuepTxiJKFZ0h%2BOJqyF7BtQsAR5s%2F%2BuxlfvnK3RNOys0i%2BSrVXBBp9yr2EV3PKXvq89w8hy1Nsl2iI8iEh%2FiZBcVD4b6XJYbabpWkq7hFFB1fOcFLjoCDUZ6nM7FMPmtp74GOqUBdlheIQ%2FUkJyrJAIsblEuHHCHhlzs6X7VVfUKdHaTduW%2BVETCJVy925GmxrtzcNGMQaPccEeR2UR9FvHbJSuwW95OR3VGBIuE%2F1Zh67834Qvbuo9oV9OWhdj7T18ZYpcl1wAmx2S%2B4PZ3hUtiSGLXUPgxWcYqjdD%2FwK6JqdcKsW7bWeBmTHpVsUNJsmR6rszyWYZEFOEIqRus1hBq3Uf5P6efL1FG&X-Amz-Signature=ba562e304a7580f212ef0e017a87efb698f278604d37b1a3f889ea75ec18011e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
