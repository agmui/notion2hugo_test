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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMN6MFAQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG3J4AY0lslLcnJJL1KZLWwMeBx6SroabvCw0%2FLu8Jf6AiBzAJPIqwI1xrsn1X5eQkliR8yitFVk5NV386Rj4543gir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZZmFrIxp%2Bybk95fZKtwDy%2BPsXYo9AA%2FwYblIzzUFtMnxbS5gBFYUiY%2B9%2FRp62QntZwv4qOsQUpOvSbwfkRXV2ZYsW4fswt4IhGmqBtLV5WBTsTiUbCxBkCbKBb28NYr2rizpzOuJcPQr8Xhvioo%2FwqqkjUd60zE3qmD5THOjhcrYrpr76jPQgVYh164ik5zGHjQV99h%2FMn2ikteMwORnmPbj4mtxrpd4iUZL2JAKLAa2UidrtBxv15rxtFdG9G%2FvVm1G3NgRsgP%2FhpUX4HAOG2iqmdXTURuqI%2Fi2DbsQFdTCYY4va3tB709fUN9%2BHo7jwrU2x1BdWVjeWn%2FDoYXdy8tEhrPTxJNfwKjn6ayIkBp4sTQOU5MHfVBevo1xjipF22HMI%2BOgEbLHRzqEV4LjxtVcnwEoQIRov8%2BpUiGdyqbMsW3b5FkXFHYvpq%2FlbqkkNxapamfIuLk%2BAOtuhXbaKuDOMgP%2FLQ%2FV7nyNyvTdK3TF9rPN7uLPDC2d9JC1GfcAZVpamd29PA6Y82HwO9yxBR3T9AyLnM4rjdcu%2Fvpc%2B8X5Fudmv6qHaZ1zsg1lGE9lp%2Fi2CUM4cSyirnIfYwxPzYWnBj9oiposBuqkpU3R%2FPFIzfOOr8uKStk81Ci%2FExT7zcDTw8KI9%2FjkXgYwv5ufwwY6pgHxf%2Fwg%2FboxBxPpBnNWBsgt5Unh19i7WOKmL3%2BkXannwVIcSkIWGgv6GPBlFF4tU3NfW0xJqaH6IwkVvsGHVYjaXAlQVgCVRMoaMsCLAoZu8qdt4wc5vWitxQabUR5GFRPn6WsMPza2mCqp0qDlocRpoPMIkgTWR08m5ppL9YmP0z31rq9vvh8b2ssxwmCmEqzn4sQUDb2BwFKsGm9YesZ1my%2BGaKro&X-Amz-Signature=711166a3a6a41c8c5f8e6f1b5fa2934bf8d8b96faddc81873c558a2affe02722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
