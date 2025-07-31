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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYEARIT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE5t6g7n9FUjAw5wjB6nVugx7EMyFvXGVjLeo8tejZfgIhANXVENMOrsjG8qLu%2BiATa8ECEDEE9Cx42PSMLW32YiRKKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ80Hp1ov%2B3qdKKPMq3AOKlfoILwLfqCWb358eLMPX58PP0CUzXvAn7vzeRXbiBGUYvizuAuYP5gWMdxUa1PPxwYE5pBpjFiY%2BHcEzQAT4jd9EhzaSSR4RLgzz%2FuiDhRtrxZd1EEHdYtmAhkxAvARTu4tfnVZ4C1BOgJLooGZsfU38NV0J5S8Cwn8C6xoBJz%2F30NSS9fXL0uxg3D4sE1WI6ypSHsXtj0pFUUbvYsmPUtw%2BniwpQ0uANA2FTSC8USiLsEeaCjVN8c1JszRi4PPt35t%2BsUOGeelwEG8QMh1TnkeVCOg0%2BmnzxjWbOe%2FvWRDGgDQn8qeuf7lXxFtx1xDbmDh3UnhEkUXER2jsnYtnvhGmpBzGwKbQPKB3ZU0D8BF1jBjlpcAHsa%2F4mTW9YrwojgH2OpsOAEqCxxybvCr38BcMZVtvZWwGqzJo6fnfHT%2BkmZwAnro0MUv1t4KMaobtUC7gLEUP3r%2FD1nUeVot1k8DdKeE2lSnlujEk35J7IzIYtU8pDABq4wF1U99PBjYbtKChGRdigkz4udPRSMdvm%2BUv70Fv6p4edOzLw%2FF%2FeKYI9YwxzEZVj5exDpxeCHUDE2QVpuzQ%2Bg6HKnlUgb8TJoGn6tiELDtIwqwJW8ZdWAFSeOBDUkPkk9vVmDCmxa3EBjqkAW6M%2FWP0bykYAI4teAfiiLocKZInhVB3S5a25NN73E5bFyE28Tt6NCAEhMIDRle7%2FKTSpuKLYX5j72ro8WadpUmu5cmpIETC40eSKzMCmKWfp7EzvGdYjP%2BY6tnjFlhUT1Yj7WzjMDYpO%2BEQPq4VFBf%2BaEvfHjRQZ5q7TVfKvrW7rhEOlevSefaXCVJSv92q6ejKW1cWdBQPXFXpqD%2FK8oeJ3SuK&X-Amz-Signature=a5b39e28b7500b2719db39b55576304a3fd6b1d56864eb05c05c052edf86befe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
