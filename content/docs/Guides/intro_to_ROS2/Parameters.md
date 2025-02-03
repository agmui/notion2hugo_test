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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJC6B5J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FzvnCl4pZKorwCW5bdy5KZG4WLc9yHW48W2Gm465EtQIhAJb2vUDNZu0TaRRlLLA%2BclLiBWiiqT%2B%2FL3vzaLVK9JenKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7cwOVZHlV0cSnP6gq3APlCHFwqBsf6bcZmrj5ahcRuJVicWnWj3SUrFhBMptju8avDQnWsiySZwrMLa0MTxThjbc4zmppGjFevQZ%2F2Y8qrCWWGQhcoHPT2wa7XOyoCeubRj6nmDoaIPKjdeZcsb2VS%2FYT5BnXsOuKVuJzSYPzGG2%2FRMlT7Uf%2BTJzbPcrA65YV%2FaahH9xapmjOWDrjd0GXDcj9EB8m%2B2kwo9TeE5XgLKyOXQr1AbYyRc%2FV4tpaL9CPB3qI%2FkiVsueVNXqTtJX%2Fy6QLKuKRWV1Ro4Ge4ZYkzQnrIcxF7qoZgdAU%2Bqjw2yXRaRBUisvr2n%2BktUYmvi6Ad3Di3iZFplCCaxHzf6YNPOxmUz9lHv47dUB0Jq%2B0T7vIcA2D70TXrYOqZl1HKA6pu%2Fn283sBu9UGYiFNTeRHf8SIoc0Ri%2FQ57D4Wou34Oifpv3oDfJc1%2Bds%2B3UHHBgi%2BE71sr9w4XivcufzPgizRhpDkGwp5CoVSfdwJZrvmQmLDQZ5Zndttfu5kv%2FIf8aZQzh%2F%2FVNFgzSB1Wk7zJeeTcqWmqYeo4%2F7UL0H8ccBv9DmMjBqeNN%2B%2BfCSscU9BhGEsfWmmxAsm%2BGb6wWDYZL5QyR0daZKDA7ejOUSNo2PpdvsNc1HDE2zY31ouBDDLwYC9BjqkAe%2FI%2Fm9wydzGw07xVmfJ3aN87LivjPqc5lAzXyRfQMeMvlvBKDbJNqnC%2FZZS8TM0Njazbmv%2F1OAGVQvhbH08buIamIW8eEaq7LtTrHebPFH2CtkxxRoddoFhu9ehBf87BVUgU2ktSNyCcDqZGQhUaKr%2FBhFc3EGor7yh4eX1tki7UXYqfDyhN02Ao2kx4HFFN%2F7lrGcfUoyh51OqhFjqKDnHsxEr&X-Amz-Signature=4da09bb7eb1883789f14dd4b0472eec30c12c4b3e1512ecf7dd03be5ec24c605&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
