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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3VB3AV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLBypu8hhJdly7PBXKMy39kk3y2OYTqRPwoXS4t561AIhAKtYKD0JSi%2Fq1%2B2yaWNBvmu3%2Fhbb0G189iiMcGKr81H7KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqrrA%2Bhzdbn5VwvtIq3AOOdkjy0txTKW3ESaBcvofInL097V9b%2F4aR0JKTO65F4DmYTbDYwK4b3RhnThtBctwRycXSXLYCjEUmvffwhaWnl%2F28VtZIjKIe%2FNegR95mpNPZ88Y4nzvPxaXiAI8aM2vh18aEACO5CAv%2F1JgCREwkDo%2FKyTa6mAwzSqAzg3tcRVX9wi%2BimzNCAhdTUJ8kLw9Nbe9ybo90em1q6%2FoU%2BhKYYoJkcX%2BGgmEJgySUL2OzKkGRw237WF0BWKhEptNE9JL0C6jIjJ4F%2BqQB5Yl7ElzZThEusf3SbNyH1Cz5C31dKK80gFoCJVB3%2BLUmGuh0aJ6SPAUUTfXWHguLDGocr9cFbqSRf7dVExmvIV%2FlhQjBSfwEPrS54nvG026VmcZ%2B6GdbWz%2FOezB4WkPJeUuTJQpHQlM0Z6aNhrhU6kGh3Tye5W0AZ%2B0xhNf4tmXOcxzhqDkblcg%2F5EsZ4UFN74KlUwJmnrdprtohL2JxqAYzhidloBE8%2Foug%2F4vwIdkz14Gd3gLoelxldWXAduKVcjobDlg1FXhx5%2FbF7REHm2peoja7%2Fae3HTTiDSK8LFYegu0zOUPK1zPUR0oKXqtS9%2FOMezetlTjpd3wReLqTLB4iqpmwVtLgcPbZx81h%2F%2BCnvjDU6KnEBjqkAd2RRLOK0uioHyVuWnmpbIdgQJKnx5LYemRjRhEyTtRdhOgsKdoHUo%2FCJGi0Cw0YOkMiunRi49J672yMRCjlc0CoE9feyBXMUnwFxFxK3n6IQ9JAYr8w1xPlvlQefpCtpji7kdlrsT0ZUXkM0%2B86u947RheGTtsaQyL%2FmDqxv8SoLi6yQsUcVhvwO9BSY1HfmKrjTa5dvagbgmS2CcLQKBdbg0bg&X-Amz-Signature=ccefaf36999cd86bf3ef275c5510cd2c98b3f2429551cddb7444b65522e710ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
