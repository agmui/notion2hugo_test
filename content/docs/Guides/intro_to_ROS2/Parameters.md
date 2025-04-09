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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMAADTKB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCE1EIehvp7Q3K1L9Jh79WdKJCmhSTcqyW7OqSIk8RFVAIgYjVVJBTrfnGSdw5qOBk3DortspDVdKq%2FOhKKP7k5cYEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTwdmtXMd1HBVZkSyrcA4HFjaQL74ack8PMIgd2s5TOKd5tp3%2B39h082K3RGpZe0rRQ36RFn8WMoOARIOwXpq%2FHn3%2FuOwOC9dhrbinY%2BtaWPDL40rnZTYUlYMo2461DVKZ6%2BHd1zpi6WBRTtABDM2jRTJXpHZ1U1xBkjyc7c8yqy8kwQVefLv7%2FKkUPM46gzP0pbTGETJIJp1WxE6IVo%2BqscTdO99wuDvwkSvfh6NO7sqQe5PFdTFdGRThLW76jnSzH4qT1MFaSpKNaPRVcuVdQXOZvyMgdDIPDvyy96gv%2FN2KUQFp2maX8AYD%2FS8wAoNpG6F2%2F0eSyh3n7ciWo%2BxV1UIqqJRbqIBRx%2BIMYg2Fku1Q7ixXTR0fkpF0KSEAZ9LDzV%2Fq3o%2FRqMxrHy72diJ8Pr0xKx0YoemLaCM78MgtDCJlcW3Ke3TYks3w4O8Q8iA4OUXdvn7HQgdVX0KDylfdKACapyR9gAdfpt1uK3gdX%2Ff8RqbWzcg%2Fsi2%2FXl09%2BIrlz9utA%2F5GODIZvk%2FhSng06tDRD1EJSrf9RUnAQHrMAa4Y7LMN72CEuNhC1MlwhgU86KE6uCcd2XBLzLif9AQXv3ZyuelBMeZG%2BJAD2qM9MuZbnNv%2FQgqZDQoBPSlXejmucBKcdMPrg4bQxMMq%2F178GOqUBmh3PG7R%2Bhvsnfl95SabLoRSDb%2FbcXRJAl90Nz1z8KiBPrNqmjTA5Te1LSqsz3540le2Tbm%2FkSGTR1dH%2B%2Bhk234z48fh7MODvmQ%2FojSNzZLCzmx2211xUhtsrQoQdmXPeA7eSpJOSFbPTsedb1UWLzidtbJ%2BDdYj%2B9PbHpQ%2B0CFhZDP2RhQcmNZcz6uB8yqqgNTRQ4R%2FZAmz%2Bgbz7iQxcVFuPj6%2BO&X-Amz-Signature=57201992979a66b9068c1fbef33f108ef237266eb035afe43b20a317dec420dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
