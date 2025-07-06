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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODWSO2E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCBpkVjrBD1qSwFSBKQaw%2BRTdJ6RKTl1XiCkucS44DsKwIgZ8rl9ajDPQzDEXANlXW56ehel4BqHKixSw%2BnR3Gayuoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLgbrzJTea9eBy7k0CrcA7GigoS6zhIqJNr5GicXtcX2cfirmeoKrJzPEykk7xUSy1TAkG8TMYsQWlgoIszoyejTRE95Kslzco%2FDuu5I%2FJNDvZMffv5hU40OZ1TiC%2Fh8t91YC1DAFBMVReOO%2F8qPFPsnKsGPAML80rAWOh5Skkrb7Zk7wKcgNfax5SJmCU%2BdDkVEG57u8ew12A2EoaFDpF2RYZIdZM47ugQCYZ7nyc%2FpYaZA7sEdGt%2BPemoLc4aZHMrtE0wNjel7JabAuu0mjE6tj3LK7cyAv%2Bs0i75U%2FpyG5zot56z%2BQXuPVGXtLxA9K9gCJp%2BOBC4EbI5imx17pSOWPCMmijW30R8pOMXeBWWynyUmxtrzHAR5bLVnL910q4VEdYvTOpLoCO4%2BIRdmusfdzsxO0XUD%2BSjaUdwmsQToChxIxYHg%2FePogetQ5YTOlJVLHAed8CoVumq%2F7cxCEvio3dV1jGavACfFAthhceWjNpd22v%2BJdEDKmHMEzhVfZgNKXgTe6TZN%2F7kJrFz72K%2BHqLRVp%2BUb3BsdKzGJA56QHhXfyL%2FCGt6cFnAWt5mqm2ljtxpA%2Fpt723agkxiiHCCJSSp1lX8nbKQt1hgqTRHJdAfAYP90stpA%2BFuWl4EV%2BJFScDWyVsHTBrR0MIHLqcMGOqUBROs28xgASu%2FYS2hCYmhoPHUBa%2FZ39qD%2FLA8JOkSEiUNup%2BkZsPmI1eKcKXylfYHcfUwr3N4eqriuAhgkH%2BFT%2FIc8LRcx7Y4jdjyPTUu7NROnjAFZruJwoIPc14tHLuH8MT1dCrW9pFUlOtztTRY9VehBzKNKo%2BnPtj9QlhwPSTRznutWlFCpN5TPybWCeagmYLGB73tvxFuVlmlmFcHKqbAdPVZV&X-Amz-Signature=34f907223a03addb94226429d0f8dee410b0a68be598b65464f5a8eb2117c2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
