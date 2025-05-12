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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVJZZ6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAEL3ZNj5fch2GTfThClGQ8E3UxBBv0UMsSbFy5sokLcAiB9J4gBmssP6nHTGRtr2PjtXg4FZgwlqPYVySP1EzQwfyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIpS6b3IJDPPCG7RIKtwDlALTXItL%2B%2FNsmV%2FUMNtombCIud9p%2BRXKfpKKHRijjOAV16MdgDmaWlkEpM5Nbcy%2BXL%2FykjLKSzkWoqEqlgUuOF4IbUBWnDEJUO84d0vu2NIMmxko2HX3nadcoEXttauxrmIAgFl4Y61iQmvRlMzOS93bd9Yv6qWMmN%2Bbw4Aq1KvdP8%2Bhwbdk53wV70R5d1z7i0VXmJhQRv4N1qhlUqSyEFNmPCdMxTM1C5sYCTdeLZJVynbKbK%2Fxc%2Bb3g2m2Sn9YfztJZkFie1jGBu6f2LJz5Ery%2FnYDA%2BfE1i%2F2zchpm3QQxsZFsbOIbtgEW2CYUAFYhZ9ALRk6TLgAMMSn45BAV5Pgub8lp5KUfB6R2Pu5fwjePQtPrKL9KVqyWOV3rTSKpPHvrC6%2BJSCLX2ye3u%2BiHPEBT1qMfTzdcxAjg%2FEmZ7aG67nj9rxueAZOMyqA5Ig1CCXrZXIH0HNdmV3tin6dvGuicX4gYiUkw2%2BgEA6fPOij378ltQpr1mdL3DFq6evTKcINIJtoJuxstNJXTk9TAmcHeuLer3c21dIcmkUXqpYKDVcnUStBiFwq7scFhEHTCGnTijVktbxXUIU4sHJ5i0kNFe1HElckM%2BsAHUeIrppdGVmC4rx0h7O9cXQw7ISFwQY6pgFOO4UJ6yUpCdVU6yWRboQz9oml6alpr3JNvtgx7pXG%2F303jspY8HcInN5EgR%2FXA8GMjTMHBizkIG9qzMD4ypzxns9QcHPjNI8xSh%2FmscwNmR6bgsIT9B7qZ4EO9N5P2KF1M6CRwXssPjTJLolmR69HPgrcYoFi%2FZfdfDwpNPgcCpQDwT2F%2F5VVf2NhIc3UB8any2nspL3yuT5RgyYrF9K%2FsXq%2BiRun&X-Amz-Signature=76ef300edbd90fbb380467711caaf776e9e2ebde06a2d144b0607d2149074838&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
