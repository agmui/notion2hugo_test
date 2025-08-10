---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=6da8c0f5969561fb7ac7896debbfb45ad580ce04ded5896bbc0a688598c92f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=001205744661597b00ca883cd9f71a874a1ca9a9f7b63c36221d992e9e989b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=a8fa04267aefefe7e2ce2861aa930ffb221928c647da20000a2b59906db802fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=c9bd3bf501fe9790c717d372585fce790cd945e5b84f5d440527786f7e1a6a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=b2ae1afa1d13f29944f23bad24213d1374fcc813942492b8ec30c004dd6b2468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=3311a1d9e0221b86a0ab94c0825ce8a76d0f13249ddf52ec90647b1e6fd250b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=5c79c1b3c3426adc519f11f4e4cb3049aa1f9cd5dcfeff868768a17bdf7a23b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=94703692213103ce2123586e1664fb0a4efd69f55f38405a91078259741d3146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=d66e9e95577b291f203e020dacd5735aee814d4970ac55089b94ab2ede262288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5QKEV4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1YvDkzLAeuZ9lBFP%2FwpZ46vsMB3OsRBKs7MQltbLrYAiEAy8P361PI36P%2B%2BhlB9HgPjQh90ilPZ8HSBrH5ZV4GZBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2pH8tIkV6P8xGuiSrcA84B232A6UIWlmXgvPZIZJsWooYLsVQRRwTUgMF%2FE28OdNhhRKA0N5rtm22TJ23RzBvGg7YeMnyrmSLcaVqxv2OnoT%2BtyxyGPm3MkRWZfqx4%2BTegwYm8KSblMYCmXMDgDSnVr23DGEZVRxaC6hfr%2FRYSKq3hywGiJsD2rZoU6JjaeC8WMB9L00IvpCwM2PPAnzQjJe3RAy6QBI6vdd6f%2FCo9JC%2BYKkgqH%2BGDd4q3S34NtsL3kV38bj3ui2%2FcCZqHrJvcvrqpcRAu%2BgeCOQuQcwx2zlsxmqs8%2FMVYJaKFnHdJa77vJu6EItJwzKYlitd8sf9O7OCCjPls%2FUCj5v06NQKTXTzI5fCO2CD%2B%2BMQp6djcMDBDqo%2FIYp7l7Mlo%2BMkaWuoh2ZeWNYJDfhGjsZW86mbzqt3wLC2kpTyh%2FUPVC86Umfs0N3oquQcOvA4YVRpiBJbBo3SNU2aDIUQBRuWFuZr85j62qbEcr4Cs9Xg0CHJGqZVbf5dobN%2FvnCOihxFbIiB41T%2Bmx%2F76WAyCcTxIq7TfbIZ1smTEXcr31EstzK%2B6pjA65cE8TgxZv17u2yc331%2BMD3qsa7MpIsv8GCeWdBaYQo8TSo3ukS9Ray6JeUP%2B7l4M3G%2BH3Gp1Whz6MP2648QGOqUBrY%2FAVnYddNfisGMgWV0ffiqG6IqgJ%2FMLxu8UAIwRTlE5dVXtJjFMGry%2BDnWfrAtCJWgBXQq0d39DB6wKCe9yXevtGiCHSij1FvS09OTb0uRv%2FGDpnocmz4Y7tA3og2e7PPZpUnGLnXemTR%2BrgtSOQxWmPzw7HO0nuX%2FHfS7X2w9eUBInHq6x36t1inbK6ysvOTxeVa4jayzq5JbFtFkPex8f9vfR&X-Amz-Signature=d3890a88078f3d8248c211f3aa1c1997398decfd91d95fb1148d3c2ba2ee4e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAM2RAJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA817WGTPr%2BpKG%2BJUmBsbxPVePvhhaB%2FpLv3Hcrs3vEyAiEAkaRanuamBYv07rZb4ZwupT30onaUQw1a4G7%2B4BNeDOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHivFaloOpx9MUbeircA5Fw4WFIsHLT%2BZoheFGI3G3u1aeEkxapfFTwh4V1jOLWBcxX8o6%2F5A9AMbxqDUGTcweHsVccFuw5EwpU9opKzLnP%2FVSIsTrXNNnWsr8c7CTqVYYeTPWpboZLMN4NKZS9cfSS4cxfTw984vjx%2FDh4MnMObwha7sI7TyiIQRUZpFAc1sqCo516gMEGc51%2BaIaTp2yuLteExTwMm9%2FQz3Mn6X1P1Ylo6F1VYEm7IVzj2eUC2z5ySWluAuLzZeZkq0faDTEVY%2BXW80FjP9B3cUcsWrJaBHKVpOGAPJsa2dR2EH6STl83x391p5g3BYZdej7gTCtOluwlRpg5u5M1A6I0cCEsy%2FlYWRNJCQ1r0gy9pJNUCjlLbqtB9yZpi3M1Lia6NLOZkBdX%2BwMpXqqKff%2FcOpDowMkwPdt6OJC5Qd9hUboAK3tuRaQItgvcGn6LXtQMTNB0UGddEDklZceVePjEF40pltgxSr3Gl%2BSCzPwQGvhHGy7vw8Qw0oi0PNr1lOuSybVJ9TN%2FitGMH2vuuPKoRQBU4Sv21bJpRgOWIJDOrAUAWJzO0X4brJwczhjke94UXmRXqg7R3dLYayBsq7j%2BmK6PxKLQfbvw0VMV0EBKldVoQqbNg4qA0aBQeDl3MP2648QGOqUBHhY7WB9J5fWROeVxY8Xi58wD5V2esWBNXvgm2zjtr7UbFehO7hmJhSW06jkF8iKOXJkzJK3XxsgmQnViaVVTKsl7MUcTDaVm%2FNBlmBj%2BqZs%2FlMqIpmMaKEPcpxP9g2HG7FpPhbz2UtmXIU%2BwIA55kbgbkcWlg29WLE8U9PXFqaZK523R29fIrsWtmSSewYqda8aJz1F6g38K7hdfCblPWCxqph8g&X-Amz-Signature=9bbd7f2833cde2fd8bf6af9da2c4d86d9940f549e2d036379cf8da9d81e5ae7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=b8c9187cdcc5d875fd88fe881131f3fed964c23c5ef5319d9720cbbc2532185d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=8dc91d147c9b7ee9164ceb8a35a852551acc8cfe5fb6e9598dd99f8682d53061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=d6f3cf9c9057fe23957774c0d259a7ccb6c0a450df885de56c42f197d2b94721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=6d199080ba9b7825d799e4903db4d4d27f293781fb517a4d42674853bb7f277c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=57e26a7c3634ea1fbbda5c29143ca91ca2294d1e0190dbbbd58b4405b93e32e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=6326958fa5167e1c2c839d0ea7085418d8705ca6f1a0579c6ae7ac3c629aeb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=29766264746ffcf45d252c0713bc4fb16a6d04a35608f4db9f29a43a3cd8b941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=baf5abb46200dd2f0509b108da5ccf348bfe794f2214312ec6e007d5aa6aac85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5MLAY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUGdoNK%2FPsA%2FdL7yRJIK9mgSfDtFOl8OF8L9rYlfDgwIgYsdU5ikt8AjzvNmQaHnyPpr8YpMxd7v5mMda6JOHI3wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPVxDXqtxE54kZxqCrcA9cpXtJEMeRwhNP%2ByFXNNRvL4RZPqiKWW9RUwidDQIBY5uk%2FdL8%2BOQ72chGqtf9LyChpZNnKQr61F2IqGa%2FfRtYBUhNeOy5HGjzTWcCcHo2twr8i%2F7KklXnNngCImrMrHQpPMBHd%2BNkGgQ7aVu3KWCcjwYNXbcKFfo0EOwsfyc3UoLAH%2FIRsrHucV2soK16tw3PjFi%2BwaPp6nhYV8tyK2xwipVTnU%2Ba9sXXIlKHrfCfBKMnZXSVGkcNEbVAVNvbQ0FCYX4WjRU71Bmjp18Cd9ZmL4Z18znMoBrlc50fXeUc7KJXsmnvfWTGn8dJDqKk7IxOyMrnwHazHc6wxp0lJXJ7wsSMIoOClGuoVWSnHwAIBKUt6OVdy4MfPB28if7JMRWr22ppoPQms9DvTXk4C1HVUx4CwSwHx%2FMTVtB32Tk1aEzqonPXDsvtbAEKfwvpe0ROjuTYErbMVPw4jVul802uaRVJyXPQnf05bMSwJUZ8JFaMokGvmAIczkPTSL9y9Wv2gFgP3r8a0G5ILXcGPmhT6zZFHWWvMt9qhUxMNDILJDqp0vGV6aYMysKJNSLhjSgPbUUdSO6P9HCcRlvYlL82uuUv6aIXHK9AeDlNjfXTny7%2BNALXQVyJavJROMJi648QGOqUBEWbNj9l%2BJ93HdoQHr%2FJu8Q4cpbnyt1esAWqrov6HhjaQW4oYJYjAvn92IbnDqcpuXI%2FIXuKFyvUbd1o6sELeTNAOCVicesOgiAm%2F%2BaYYlkWao3DtrbJ6KMM4KKxDqJP9fmx6n1YXIYbiyKXqhztwIjUgVMEn88Mm1HJKcUmxG758h%2Bd%2FUN8u9q7n69jK58vbWYQXys7O9OMstRyA7RtzvMw8eJyl&X-Amz-Signature=ac0e9600f27921bbd59638477271e06380afaa2fdfca73165fbaa7d85ec38946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
