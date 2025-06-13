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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2NLM63%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDhWK2te0EROM4A8rjeLLlUYNjN1Cwus%2B%2BmJ73U2SMpjAiEApH6u%2BIy78tiJcJfaA4iZ%2BPnocZFts91FvRw7YzEjO4Qq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDN%2BouYOB2G41vSFiNyrcA4PtaicJrw4SNZG5mPVYlbUSv1yBCSgNgwsUsbtYD94f7gCfHMaa7MSwNHu3xnlycTdsYed8Ddml1cL9cL8NIlXFpJacwNtiKbxW5LM68f7z%2B4s6w4b%2B1M0DN%2FUil%2FK3SUz%2FlCGb95IBHblwu6Eqv60It9NEzS7kv0STX8fW3Dxu5oea%2BcX0NcADakwEssxVTDhUax5fFPd4o8gqc%2B7ox75t16rvPgz43bRsyLNb7teLai302oaZlljdYOQ%2B6RQPjlOYRe01E1NbRgFlP13T5WrzBjeIWFLBIjUWsg6HRIb8lzKXStF%2FYodbMPN1OlMvvx5Eiw0vaIrFitdiWW8%2B972XrOoRlH6k2IrwEcp%2B5%2FYEqQSt4FQcd1q6X%2BWSxmXg4hPfNX4lS9pkN4ojVfiAUL6d5CCKUD4YetX%2FRwq2v0sYPVL0goQkrf3KT2n6FV4offj71LOZxgc9jHeMqAJBdob2jIlLPAolQBUFzdU%2B7%2FtNCRFIR8gt6VPXb9otD9uktHfLJz4CApbL0Tb%2FQjgw5cCZvJBLUz11tUKbd%2FLh%2BHdVNMTmVVtEB3eLiA%2FCNyaMZcakLJPCS1FzUkPA86PK8J0iFk58skocsgE1iO5jqjxAkah%2BUXaw1khkh7tlMIOqsMIGOqUBQS1ZJbHOLrjhzJRH2iqwMlBOh2xBjm3%2Bweisgt198ISBQC1XnsTGUs20scfqw19G5Rt72yWOs9U5LkFuaBVdTrNfF0sIFFbpVbaYvMGo9qNOEbkeZCuOhMdQLRmLdECA%2BQjK%2F%2Fmz6Z9oovTjp4850Ouu5Q0yr6ZrTwR8zOICmaILTvOH4mRmhTzT%2Fk9La8vjhE16mbCqiDhClurVu9mxzhNJX77X&X-Amz-Signature=051a31ae48b93aa993327892690cfbb8a7d548bc488d3889814b521da791f7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
