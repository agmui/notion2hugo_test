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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4BUBEL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDxMM%2FwT7VI%2FJe6SU3Dh0oIWufU18mwk46mvpLze7TCCwIgS7B2zI%2FBjgLH%2FTdwpypKx9lRpaje3Dxmy5ZDUypf2AUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYmAgTaoiMQXf%2FDqSrcA8X%2BvT1T7ctBIG%2FwhbEOHyNWkKAWEiRMF3Rs5PQ8b%2BV%2BvB3C3SW73RItHrlNlihv9%2FKIuuAAgTQ5yg6973Q0KFQAtZzpi47jdGr%2FcBYmPt1E7anSDWag3e4NbxN9Q8ij8xqjq45jASzhIna40%2FVFVytjN91UWsJApE2ZlvHWS%2Fq3tqkerf%2BcVupNOZKsof3IMni%2F2jtl1ncKKb%2FDnKRdrYO3Y5SiYeU6HcYPHbR5fLcxiw5Mq4Q0ybitnfnh8r5E9iA%2F8Rp%2BfU63Hukrj%2Bv5VXP1mLBvSqZ%2FMvrOodAKKFL2onDmTfJ8fPcFSAEBNgxUZy9mJMBs6Xplprpm6UdkToIIg3VMeYXAZ%2F7%2F3LfHlo2uRk8AoCEDbQp0mDUJtANkDmPgKWZ%2FnbtHy8COfnex8878WMD9OFF83szPZi1v4OTMkLQ75rwtVVpgdOUDFtzl%2BlZq0xL4PoftRkc%2Bh2YoHbAo2S8UI%2FabNqywNZU02ty0zjlRDwYoNHMOAgoJLNUynKPay01X7sxUCvmzNgA4Xm9mLWvVTjW2NvtySit53zSF2sYFfk2krSOCHKnKtcHDD%2F25YLDcsd%2BGDXyN30T7wxL4G8E7bEW90XKPiKRSvxjuK2O2MXZtca5DO6ZCMOys08AGOqUBnDc1XV3bTLsJV42FRnW4VTXixjiWbXDIUFiaxIorlUoqaxKpUL39Tq9TXqvP3bEpAzUU1R2ZWZWMGDLDbf1jnKjDpQ1yIL2aMQkeRIETfhS3Y%2BzWBJLSFM5DsTqTkH%2F0tNCCqp0baahvbOfye%2F1IIMqdCX1ZydhGWVWwUN5tcxDeQrjIechvEOxC%2BNIyEc0tdW693EJfOImsh4l8D%2B5NUPegxrFF&X-Amz-Signature=faae39961242665af1905cba42b4df745dd837a80082070a5363cd42d3972de7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
