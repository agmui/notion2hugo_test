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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=b65a869c3b4e50aa7af7275820bc8494001fca446df4dc46ecbc97d43e2aba77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
