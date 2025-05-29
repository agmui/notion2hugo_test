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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X67QTTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVKgNXkPd%2BH9v87Yrc4%2FvNAfvV9ikQ%2BaQFm%2FahH66iUQIhAND0dSbf2NAWz76uAzqlultqcXKqYG0mhVaw%2BG%2FX46eYKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXf%2FdGJs07PVxkzO4q3APP36%2BdEQPR%2B7W17cPYlb4ulcmeIFQRCu5MVpxu58zqaiXOr5puvnSp%2B9i3ThK3H97UcxHxsuWLiaOe8hkYTe0U9QatOTQRv8b0pSVtDgi1VyCxEEPOb3hDoHQUpNgoPmY3NryULufkyKAsN1e34Rlo9SJnobKLjuEtmjfCt9GZtBCVxVc0EIqs50buUsjyfEHrFjIsXkoI2PxlZPPPB1QNgWhdES%2BqYM4XZFN0dkAsXB6CQudDbNgUKxWjMxmGaPkmiyMRMhPG%2BN5daxtngYn7qL%2FcBPJn6jxrw4xMDLFEqnn4I5OTv7x47%2FCTneRnyKnMI4mQvcXbrrOF0cwVWLRRArQ2JvlJuw3oH0BM5fpteOXez9Ly2x1w2d2kqVUIZ8VAAbYalNptPrFRNlcvtHik6y1hOCEPjAs6TWOBtqJ5En5p04%2BLmLqEtPmaR6uHfHuEQVmZ7mNK6jUEKE3l4Z%2BVyyF6sF7HpXc3Y2GocDDAdHXLkWsX2KmcKdvIWj4%2FlGs9mzVbcBj0q3xObuZ4OfwMwPRuNdLIQ9G%2BL%2BIWuZDLYZhqdFlgpfWyqjTVdYJR2VLfA62Fr2HP89OYkDEU61LT8NEIkOoqZQhQk%2FxTrEWvI2KNmR4TyFp7viVp9jDwsuPBBjqkAe5OaF%2FlD7VpyuCf3t9recsn8mFnHacAXovfS3QXT2cA1LqlxvEd%2BUVp9uZpc4hog9%2FuJVGiLpIK4Rnjw4TJowH6IBmfd2nzaCWrKGNjJ%2FnUl0sN1DJzW8ZvG1FOPOgf99ueXhNikW6GSQYTXVLsGO1WrXhRevhihtUcsK0FXYIGPMSu%2FRyuZHSD4cBfVohSo6gXr74%2BZF%2BtcO%2Bn%2Be2XtyPaMwEP&X-Amz-Signature=7930fd79a5d65adc08f46ec19717eacafae85d0cdc1d4509dfc310bf9d0ecb45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
