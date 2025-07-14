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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQ6JXIC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICUgsml%2Fay8VTXGAKSAqCnsAQQQ7rZSZ8MaPOUcUAntqAiEA04eaPn5O%2ByawypD12qvPAvHTFr%2BZ7ZYOYJ3Dfa6dVB0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHYHxXfnzWVpf5UeZircA8aH98PbYgb5FzfHivgzDvvWFDM6wOnfgdDuElv9V8tRv866R7ZrNF0Vvu4diz6O%2FiaSryIWiOtGNF7sDx7nbQehqlY1TXkR53TINLRITLKhT7s%2BNaIONof54gu%2BsMeeZmiRaVCpNNkgtgNAnZJWahzqLi24r9kNPb7APy3MrUaE5BKvBPrcPzdavmrlb5gYKg0ZzbsRE9%2BOi665Bs1SXwVwTjFRe8aVILMn9ROeXn1Vvz8b2ccgeq52djKaO8F7qKZk3iCVu55AGjFQFFUt79XWq1oVNfKh2YUb5wt3myjUfl4uIMtVvN2yv71tlaaKeP5l%2F7Z2fq5dHwO%2FE1gvNPe%2B0cYr1r3bXB9c91WRJao%2BJHAS8sHbWYqCQRu1wxZhvNd4bkQX13l3u2xfHGEslhEy7ldEDr2EvNjC%2BptpYZmw8Tkzo%2F0YQ7B1o9pXjZ7xKp4GQPApB3K%2B5qzF%2FTZWRNBImNM%2FJQ2QgHci8GeMVBSvcTUd79xN0E%2FDutgsO%2FPuTKKGZD5yh5TNN2%2Blpeu2uEnLcqwIV8F0%2Ft7TGdLIBiQQ%2BujwKTqr08E4uJKhKuJWC%2BfsVt0hLUlhnKzD%2Bk%2F3B%2BzAexKZjAqVtURfh9cKAk2H%2BVHMwINvdacmbvPbMMHb0sMGOqUB84vXvNbBlNutatDbcSlyDTuHn%2BmsaAvPD9mTCJiXif25bH4hr7TB%2FJ8kTxvsQHFrB%2FgCBh4B4fpbeBz5ZVmROhQnAVMCmqo%2BQFPjAkYJ71GVSFK8QwzEeQE6%2FS10hej98NLilMWwwu1OVOMydFq8k3w4iEl0WnuDZBkapm4%2F02e3DE29907eC7C9Hb7yU7FhSgzyYTP1LTzROIWsJrPbIl%2F%2BRW06&X-Amz-Signature=58d0d16dd37aebb9436b364ec5790b22a19a83c3ebfbe0763a261057a1e9bc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
