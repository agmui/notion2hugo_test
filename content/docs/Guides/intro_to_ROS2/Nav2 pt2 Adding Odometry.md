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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=ef05c7d80918453bcee7b1c19668427da9b75227c0187984eca1fa84e19ba92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=e8515f2ca97ef22d58eb6be5bb09c023e93f9128f2c4a9b9bed53ac7e21514d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=2ecb188ae961eefceb2f99e7476f9aa65251f6ae44f0153916d6ebff7a8feab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=74daea1890541817a34ea92723a8ad89ecf74945c42b2116720c59d6154ea0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=c2e46eae33bbf219118e0cb713da6fe4cf0acfa437701a0fc295a7c951bb4784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=d01db0e61ad8de68f50e82a617889f5ae8f025c8e70044231b9837ce775cf21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=2acd6f690d2ef0bbb1cc4372038ed9358dfa4193d5d27bab6ce9e9e60ba2aed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=076a82a3a20ad8ab9bacfceaf5a0b170834291ee6168ecdb038b80b38ef7ca5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=969eeb1e0bbce7f5b02c9b6ca68c5e0985415597a05625286bf5a6faa7851cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZE5MO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5U9TPn%2B6SPu4fpzdBnV2O5rBPCCIwlqEazMagvyadPQIgK0%2BhkS1Y7ASm%2F35WO7jHY0avPH8nIy2BdHubfdznCXgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOZZvHViwnejqC75GSrcA6raW%2B8K9XPHG9VWRHv%2FRD5zthOzOVMWvqPFrFEAGj2zQPvIoJIP9uG%2Fcj9MG%2BzG%2F41uWe%2FE4FmGWC7rfxUtjkdgenrS6DpnkCY542Xm9LvJ1wXFGfeefaSPd1d9sRJ5HMPoKBz%2BgL3VGFJAeBiQPLbnmsB%2BfbF01qBZPTrvHmSC15NEmdxjmNuVjqXSqC4KlHs3y8K14VJln7P2oZzH0s1pkWOYPmbN7egwI6PUaoqM4RmUGz8ZvEqhdDMkqHzHV8%2F9V4ikuSY6Jw7zrqmrBZ1BsCUTLEjQ%2F2kmmtvjVHh1PCxLAxQQI41JpD1TXy3qyaXQVM5zdceHYBjyE%2F4ZJ%2BYG8D4pNaUqnhiD0C0cVZ0rEp1CCyax727GByLOtg7Z%2B0t2AtIH%2Fu7s67278p9h0rf7NjQbanbX1D6IcGSJPa%2BFrZntMrFVhsmHc0RqYeX1HBekQkLhqER5pRESyQ037q1f2wwvkwY1Vrz%2BIudaKKgzcuEenvW2v9uQEi94rnSWz2QAYqq%2BaqCXy5x80%2FS4IsbdIRfSLhjpp%2FILhf2prfhdA%2FN7ku3Ds7S36u1Gul%2FLwNA26fzvqxkhasXh7nZPWRnUpzKwnd1EeoWYpPccSHeT1HKbdEO1yQQysxARMKr58MQGOqUBTdCPszFo4iSuxILHr1e7OwFIqW9FKC0sTnTfYuXtznj4kvznQBkmxxH6xgXW9UEjg2PNVfn4z6x4pskLSdkUKiUT0gUtwEDjRDkFjkuwDrGxB6Unr%2FA368yoVVk7F94MBqLnrH7HrwcYaf6DUc%2BG8xFkWUQAwz1z4h5yyqOgBhKpCh7dXqQasmowD1OKY52LuAr575%2FMTfT4aY2DCYQfP1KWUr3o&X-Amz-Signature=3186eb529eb32c65f86cb6937841fb09b9c7834270ae0e7aaeb14b4ef66547f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4GOF5U%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy7R%2FgsgyPmhWj%2F%2FfMNAQNCC6hbFA7oB49VuuMbPUwKAIhAKqeEXes81gieYEPzIdiDIgbDPWYRphql9L3Eo%2FYNxfWKv8DCCgQABoMNjM3NDIzMTgzODA1Igwywymlww7s871vN1Qq3AMpF21qUl82VzmL6bcTZvm7gjRzKqcWJRFD7Vk9FwtzMKdERnJW58ATXlmQsucZakiluJYtXGjys2DNjvp7LkB1kC%2BILVVrtjsOVbS2dHsSTZn9u1gd5h8mMV4CQ%2BsnFMfrJSisH9pktLIWSOBgJJGOG%2BIhLvjWvnh%2Bl4jvuFKpybRzlf8gUoUwIW4WXGUMPWOK0d10QET22fOHsuJQzcuuKamOt6BIG96vpWPGgDAZUOXEUvtd8FQPfsGOk1Km3N%2Bd8a%2B%2FPHXSq9lH3OhmtHr6JulpPR%2FFAiG%2BzdT68HkP9roZxc1Dv6Oos8gAxR9G1xJ%2BmeHNzCPhqMYyoIW%2FjH7BntaAXCDMv857mz%2F7mwaQaQNEuMEcO9N8PhjoFhmtYKTPZR12THiI7WaQpbTxzas0QfNi4AmllniaGCJeuvOZmB%2BzcwFLDNgqVqr%2B3KboduT%2FWdwgHLgtjg5PAA2%2B3e25q%2FaIa2vKq4sBOPi7VdNA628UG5LD1UQw8CztzTKOV7rOp44WK%2BW1IpSWUFwHT91Nlr2efmxARQ0ZoDf1o73z%2FCwhEPkcOBglZFrMP%2FY%2BbHBbyHYEGwPYUM8qblMHv9u3RK0GIQMWxYvJV5XPRJ2IiVrWM5Y9vSYbpirN%2FjCt%2BPDEBjqkAejKdT0TGR01FPVquc8szKfrt07NJyz2W%2FlRuPPaslN0VPHhT0oKyOXfCWbdSGFIc4U6QFNF2iOi9vokmhNMsIJimwZLQ6sl50nE6mrVIfxD%2B%2BE0uUCxBe3M%2FtWyEYEDjbvWVYrpfDs%2FY299KrBt6lWv4Wvgqljk%2Fz1uM1Z1z3gVmWspw9n2SYJYUXDonYtkY96YPsC43cbYLtSZRLLj6Xwl59oo&X-Amz-Signature=9ed5fd5b94319e7838e15398e23f1cb0744b94401aa9eaf2beaff205f057c3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=8a3541377c34c53e9d45ad98a05629515b73d0dcbb439fcad04d1fea5965f984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=b589aaf3844267ea3bb55dbb1a63e01a03a7841279d7b4dbc8a980f99f9227e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=ba125cdd25f6d8daa69b498a759b236ed2ccd138c46e8e7b7c09b7597c5bd86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=aa8e93f53010b4719350412fde606404df6cacc3d1732ffe60cbbc0968a4c8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=729928788144c62c80e88972f0bd151b626d37bf2178086cd61e5c32690d7aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=a0cb0ce2dc221f9a3a7c40ee6388bde29855b883f10a69d32058ee0f7eeb1089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=3d6a206301a9785c2affe1ab844b197bf621136e6494bce807328a12d587f701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=d713f9efa05fd0d0945183b0d4fca4298175952309794a1f5329dd861f0a87b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSY74L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoaqRNZ7UiuW%2BdkcqP5LHuwTvw25fY%2BxjeKug51Zu9UAiEAo5z1nF4ZAsjYFsDVnb1xcy4ir6%2FJsj3r2n6vpQaTrpQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGz7XCXYEJfVa%2F%2FUyircA6Yw6lXuw%2FL%2Fr89hZU6NaC4LN9LvruxFJsMUm8GBgwsgZBUyLp4mR9Q5GfhYrc8aeJhAlhn5BQMX%2BEfrXupxzB0Qv2JGfj2ae6s%2B3cmVk7DI6bOYa8N51G0AZpTOnHrBmrYoUYnS49ViVIlQCSwdxp4MD%2BI6N3z5l2NkKx3zsBC6qDHTviFuWwisY04dVcG%2BWmKxuWS%2BNGth3vdJ5kGgdXCcMf5kqIL61i1sUA%2FpHFhjmMpxWbpz0oExOf0UqjAj9rv6Yy0B9RwiIuQxZVVR%2B99A6bSpAIKqvhlONF3I92BTgB8qhvc%2B8y77ihBVztZ%2FmEqDv93igLqiEtpOIp36Sy9c3encMiudIQaVOv6hrLN4WF%2F4aN67wXkwCc28A%2FuqHFvU3sa%2F6OzlCH70lyw91QwNPJBDQxzGtxWe6nI35OiSe4L2SOu9lrFlLBDKI5lqAKTxuoFhPDDTOsaYzuIDhtRIO7XQUc3Ys9d7cXaaO2BQhZmOk1ErO6ggcCYFDKosWKUlxhkakEdqPw4sGm%2B17OwIkWO5CB2v0YTTR9G%2Fz03y16E6cic8MIwx5byh%2Bvoz7dXHWv9%2Bg9KygSOIZJnLk5gnXOgRmdtmtkePPMhHcLD0QcWDLUrlm18NM4cAMMb48MQGOqUBVaYvpGc%2FE4sPm9Su2CgL%2B0%2BR5b6tMqH8Yh97raEtNV9zBLs3g2gJZV%2Bvuus639iNEyjs8pDINp%2Fvq8aXtkpZnzMah0k1wPLVrPr3hW8QAwp2oy2fPJF9X5W6dNQQuUZaZLWMW00cg%2BNyRnK6eWlFzPi%2F4Ev%2F%2FMxO1W2cAFKAw0QNXHnaBsAqdQ%2FSTA0ZxbTPYx%2Fe9%2Bh2yUQXR4szjXqd5srPdLY3&X-Amz-Signature=45ace9d2d62d6de0ea111f1da9fe009f39647199c7f38c05ee77102ef02bcc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
