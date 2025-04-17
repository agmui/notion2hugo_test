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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256IQRCR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BdZy17E9HUMVn%2Fnnk84RW5%2FsXgiFSODdnjx6GdcylaAiEAo3Hh19T9uHm95CkN2S2LunNw519clLUkg4KggoOPBLcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPh1iQ6VQ%2FbOpuFWEyrcA7yHZ%2B6iDIL9953DcPbyXz6I%2FMEVobSw2%2F6HMHfz9std3NSHhzX4fNqBCeRbslV%2BTtSzweffbkhGmqTxmfTV87nqbA4myYTO4Zp9KNw7CnYaUqusfMSlJhOm891juamlSV9vRATZKEeYrKclMRAkRpo%2Bn%2FWmj%2Bkw0lDRmt1Ee8NFgj%2BUYH4BHBLwrcwqLF7GDFOXr1ASO7BLCIxV46iS7KzlD7hFmuOfPNuR4TaSMrZIKs3C1x0CxmULy2%2BP9HGhFuRMXnam3GsHN%2FkGMsNPMqiKVXGshHi6989ehXkNO3IpXBs7HnZB32%2BzbHtbebl4kntZgGVZdisSHHD%2FIlJDHgVyYDCOOxSK2CFEEtukU1%2BsdQaeqyW7VIG7hx7UWgjTcqhNoZJvOY4Nbb7O%2FL4epuNfJiSlKJPHRqEYcb15Uhnsji6jpyxHLCaqM%2BuduKcPA%2BT4hmWUPs0uApmCn%2B%2Befr0%2FFZOsSqJza2U0fBwtWRPZBHAK9n3%2BiKI4IoHtaxMkpvZnrVfrHiSaF1pnbcvmR4TwJu9J43CWUA8z2iW1Gc5NDYSQp1wNwgqm0rqFEbKTHjNVu3s0%2ByB1stgbQbx9LNiVoyXfT4vPAh1qOHi%2Bvk1BrBto66Ryru6%2FIPB8MOSug8AGOqUBG0ukCSXo96IUPT2i4XAWHR%2BV3ekMcWvwXADBV%2BjnfYRO7diY0mTNghR53b4Pcg1ebEoNMHSTUtdUHaMdKMxkFo4K65kc03q6lMNdFyV2PiOSx%2FluNNIBcWQahwQZL1VSUz1A11RkR83itNsRq80a%2Fp%2B%2FS%2BbRKw7NpAGTa3JAxbY%2B3hYH3EO2t2xhml5tKD3dmROxX2NpfQ8fiZHmyoKIYBUXijcU&X-Amz-Signature=6457073781febf87405c17d1f1f9c1f5619df546a0ad0e61313dd1bb45f4cd16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
