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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIS63DI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYOAj5YaVhL9fPohPSqbp1SN%2F65V%2BHxoAGo9fTg1bxQAiEA5OaPa7cKmz3RZ95lBxT0jj%2FnGQl7%2B8HvQXpCVa2M95MqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQSQDxx24KB%2Fo8eDSrcA999kGMuAz2ly3o8dngsl%2B%2BPeC5rJkrxgtD6NpPP0UmfXHCrgD%2Fgu8UbHokU5sAm3flbPslism%2F6wLpcvdXJDz6GOsnl88pptPsDyDUaxuYoz1FYNGwS%2FNBKLnQxoDpuISKDUZa1AOmkp%2B7Xj%2B%2BcAUUVmZdpL4rrZ3MQg%2FRKQDENbAWmtrsN0ErzbsLs6K3yOXVb0TtgxS1P9hBg6wdV4u%2F9JiCPjabXgMUxMyFUnV0P795KdtJK0ychu%2BFtWAHV6bgklJ5WyfQM4sE16eiQFaut5bgFH5W2FkbcHFr3nBTF0%2FAlHe7f79TfmNUfZooZx8IuHHEsn%2BfN9TRaHNl5BwNLAhXWWpxwTYmy%2F%2FjGiJFLz2EHEJSK%2F%2BIE4x38iLJ%2Bxi5zUdv0MCnN7rv6OVwjSbW5fOAS%2FFbtR%2Ba8c5jOaurGFe7%2FAovgigui%2FVdyzcAAOZDXhmAk51waP953PlMHoEZ%2F2L0O1iLwL%2BLxkNbAdQyaW%2FwJIlMZ42fVnJRkJMrLsKewK9XBl5i%2B9r7cgaDpDCkXzGR88FENChLk9mzKhlG5aC%2F8PaYMT8SbIdsch6n%2FFb495bAE7Wz6eZxk1yKCQmhWF0VmOYi9Ypd4AOZjcumfMIibDbbAfJFegFDcMIjIs8MGOqUB3eR7DLIZuTax6ov%2Bj5K0MBZiKzae2DdQUXmLMKj87TXYdtY%2FJLH67PVHDQ%2FaBxBKPX7ZIrSLALLTPf7KdBStBQS3cf%2F%2B%2B42DpYwM%2BxNdd2MJkfBhzbipSUz7QrZGVgiSQBxzd9aeaR0%2BSpmP%2BzFYK1u%2BI1b7JDMA8XcONwH%2Fc7ElWuLXnpvshkJ2mJ6ZERVC8sw8mpSc9RX%2FOyi%2Ft1HUVQHoPXd7&X-Amz-Signature=2c964bd7ac9c1da4e2b8cdd3e1dacb988d5fa591a376c93d695d3bd8ab16e932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
