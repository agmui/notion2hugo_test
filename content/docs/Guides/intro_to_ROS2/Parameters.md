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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTUH6KB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRvoCQhhMJe%2FX6b7cmYKRCYce9EBgPjgLcysY1Yzv0ggIgDegf6DM9T2mzsqRSnxzrib8kEzFMnh0hVokKXU20ltEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACTs%2BQ1kocc%2FCC0wircA5HtO3E%2BejgATIVvsDQHM2MIEX7StKtiSyfMe10Ge1U9c4Shm9COGnYhNlZ3pGOof%2B3JhNME0ku%2FfOwR6xX36sM9EsyXUAh2pxHN2%2FwZJAY5NjlrkBBrnTE9TqiSSkYdFut0hucVzPYaIMhnBvtgb4Phlj%2FYdKzGJPoj%2FZiANoD5mQkdfKW0eBYFv04pci4ekJLHL7f5zKIl6c8iXxT3OGydfNkhmtxFK4PGhxZI09txXWKh9qqJAspGhopScvgW8DgNTSkSKAQ4My%2BIaX3zXfp3Ht5%2FQTOhG%2BupWbEFtMSrhYi2d7ZHEqUzv3nhyXh0Q2LYTn8esioYVMhHn4kl0XIRn%2FzM8m1THkROtxrk1500AAIxDCEbKwDvTN%2ByfDNdPSPOYeecWuyCUAE5wTc9rB6n6IzUPXsdNzz89vieccvJ2CCqLTtwJ5IePVW9SOWcC5556jrjeBqrylWZx%2B77HaA7VVYCj5wk6KvUaFYcaP6uZmhte0a08zIxvBTTaCB2vGxaLXqzoyFZLiPZm3v6mDDdt7Junk6y7bsC%2BAYKIg%2FGFxTDOEtZ%2Fe2EUTJrne514HvGWncaoN7ByFiiU2D5NYB7wzwZvXRSaHc72w1tEvfj6RFQB88a5TCTVytyMLGBhsMGOqUB4oMGeagghMJit1APwxVyjGuyTAr90DJNGf9t83T8zqD%2FpUAJyymkp66hh4UbGCfH1vFOK48wtE8DeLgHP2OfW9CkA42E%2BQb43UfyjlYqBuTzBm3I6RiufjZWM9fZDf4J3Ugl6ddjSipvnIf%2BEK9VVZAWAStr5zrlzYLg%2BTOMpZ6toCsF5T3NRI5qTGEjA%2BdkcHtBafj46NgGNFgRlHJsaEDlqLsg&X-Amz-Signature=55442c86e49c41a4ef3253d43c39edac6db1f74454a10db33c5be283d3b7e715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
