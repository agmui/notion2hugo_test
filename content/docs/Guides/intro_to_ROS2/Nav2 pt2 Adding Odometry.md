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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=80d1b027f46230e95eb332af924d04d46fb0d496f566f2ebce00a5b6a525ec83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=42581bc912d08b39df73d32ee372ae0e3845d5b321de7ca02abf64bb73427312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=b4f309fbef977f83f1a072798aa0f6924029f20cb033d98a5c1c1c606a402f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=ff2d48b432588f7438592626478eb8939bcc112ee8859af84b9636d1961ffe3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=73e12e1ba9dc410fc630084c7d41b996d5b6d5dab694690d69a18e89b92d92c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=570f18ec4d80e810a79934ef3f0970bde11fd2266cef7eb14639e3fe2843b289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=b64505142877854eec2e6d2f783548171dc55466785ee889f16178881f0f211d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=48a9341d0af3a1bfc28b947f243a008d37bc40278ef4b30f0abae6610e839352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=532058295f02332051a27831f23bce2a23f6e05c9e49656767e8d0a9c94dd8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5K7BN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHRxEeNC06LfnB9qfcKfi%2Fvx8JppfSnDM583woth0n1AiEAxjJU9MAvfQq0TdqP%2FGd%2F50TTMkXZYKdY8G0hvv%2BPsWIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP%2FWfzX9w9pn8YxwCrcA6Uf%2BwoPP%2BX50hka0mdPSs%2F2XSYAxCYTFkCVUX657fB%2B%2FvA5CCBvtrlVVEU6VenYF6%2Bh4HDwtnAnmO7OujraxHDRmUHAVHRvB6olPrPNpTLLpWzHvhxzAzoNsjHn0OcVJ%2BAFHyPgmAaq4l3LWXUShO%2F11BoHR7aFwLNeWwMPR%2FuXBjJjBtC3ZQlS3ulaebyMpAFJsSq3CLTY%2FO7XA%2FZqkU%2Bby9frEn5K3bRpB5FRF7MCLWnTdC6QhxSHPwFGE1loXGMTMPkQSLe48QPKrcwrwchDAHDv4y0UmrZpG4CQ7k1loRlBksG5hnAo4cEH2oPcYG%2F53%2BIEZmkXZJYdBK9ceOtYmyF2HRNfxJl4tR9mI8H%2FOZQVaC7HCmGqJc7Ui3GxkJU5QdAh4w6J3%2BgynjawkQrvK7A9Iv%2FWP6r6gQDJGtorQzu2vtPk8LThiBNvqFJM2hp71%2BMsU9UKLfhfK3oU1YCrpHasFeHkLIFHHf%2BzGsV4pAMuIl72iZu7gCHbdHQ%2B%2BhIMePZzfBRgGqzunRX8pEKQiXlfWopIKxb2%2FIJv1Yj2btBYzb1ItF5H%2FgOuMYiXvRK9SJDhWrq78v63vGN88j8Ay49jVYEi%2FqhkWaB%2BrSKtkCDX6vBA%2BT%2Bl%2B0pvMP62tdMGOqUBUrrpGZbQVB2zlHH%2FSK6CZm8RHLGMJbMmWG9gRzG8OA0ZgZog17FJJXOcyxUBkHga6FfyPaHx5IWbDSP3jVa0KnBJzQ525F%2BG9Hf%2BNfEeuhYocKshEjoT5HEVj5aACGuThkilUXDZabD0Mv9Rg9Uxmpf%2BCadMZ%2BKujifUFwAVUyXRuXO2ppX%2BbPnanQ2havv%2BwjkAIsey4hbX%2F99LWGUjLndaVSfa&X-Amz-Signature=0e3389a3745aa6996c51bb024ea3395365f3750bac071352a0b59bffe8b83851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7KTVRN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYrE%2BsO9LPVwDy1wFK87maVyXSGp7NxS4%2FaLExQH3HLAiEA5Av%2FTs3XnjI9qWJe7osRJqYkl9N3LpC7wH4TSKNfTJoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXp9vhYe9Jtqf2QwyrcA2%2BgBXtYUgbmmtaLUJrG0BMNLHEuWKIp7hD8Kb91g2289oxCJcMUXxuTYNBF9uYP%2FVmpYAZYMgLQYa4D94X8e75rgYLIfOMOt16p21m18NE%2BG82hO22SuD3LAnVfSZdROjr3UGyyJ37UCS8CQfD%2BVJb4xEkwI%2FobrWb6PI7NNP%2BRzOSak4SxGR0XGsMvkzBgPw23nzFVMiZx42LT%2F41Vf1UsirG%2BPuImT3dV%2FxBWnECMHKNeSLJ%2FqEXELQMjmdPVIwwlnIHDarPg2zPUKyRFEqDrUnSolNc2g204yEJMpO2v8Tof%2BJU%2FCXybsZXlkuUAamZZ%2Faf5htzLwqVM3ndAIhS9ld6eHCtZyvKCHQiC3zU0szbLW%2BAO39r7HvB9Cz5PU13Weoeoo5T%2FDZ8lPdPLB8nYCfRyjD44%2B3KofmDpAkLNwW29Bj7i9fU7J2Nnk0ExMQCo2LZh4O3alDY05XlQbSXVPM5wlocjd7Pji3fqOriAPqd0gKDZ%2FtxGCO2TTjVbYlzQsX7rRy4LJxVlpR6NJBSvH6sY0Cv34J%2FzFKSuHUQccU42EghtuTDnij4Io2cCXnBQYgCi1hJLo4bx7LUmJgXzkWOhvGnglY0FR3NWozJJDomAErNfAACknS1FMPC4tdMGOqUBVrCKYv4n6q82MwDv7izJwQo3XTtDeMcD455ZpexiHPzGDfgwk8PIe6Dke0vB6g10%2BW91fC805JAUjvpfkGMlqt9coG783sHRGi3dZMGMBAlMyOf8uRzWu%2Bf64fvmMZZy9oL7zJ935QeXb4yLRGfb3Z0hLMBH8998yWASVGFaTUjdZDbAxEJwAyjrzuldiIO909WWs2hAxyXt5v%2BEa8zRDk0uH2fo&X-Amz-Signature=65e843db754f47a31b9c02f9ae20142d5027bd078d0b7d4cc96793b5428800ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=bf1248c4db696188e194b3b852e30dff036e9e861e9af3e334e3fbb551f64a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=7923c1141359fa4d8003b9513560e01eb09cafa40ec030c1bc3d4ce4f3fe06b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=508cf73d9f81b79793207950668039b81eb984fefbc763c93c4c12ccf3846e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=2dc6e123b0fb0bb41ba098d04a7ba814fc8be91e41c70ca22a9d03a29201703f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=0816e5efef24d6e9e63efc02bf263bf4e162d213176c0713ca8acf5e19ec55a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=c9e07053f94d4938b1ac2eb94c4e45b8f5bc25e11f3263b53750651b3d251839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=29cb0d295435906ff6a814ea97cfa07d28dfd4c2557cb4fca5239dde484793c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=3f8c1fd4bcd546668276d98dbc45ed3daa44fc10f52e4f2143ae8d19c2f073a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AIN4HH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo6sFXYmdLTg8DcSxaVg%2FRpVhukgZWBgJS5jsOW4l93AIhAPj0ed3DfcJIYeOrcyxvD0nLr2MM8D6YKgimFuHqTkI5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAAeFyTpZDag8bEn4q3AN%2Bp2ZO4hEGQT1Hc58koNKrO6qMbwm7vs6Nea5W6bceNdMITpsbop%2BwkKWiPFkv5jzLzthu3o3UrxfxvWesedK9WKLuLwi%2BhkYamdYpIThqWZMOjT1FF2mSLhYAJK1agh8lWishFyKU4XO0uOTWfjYHKDP2jEtNVkoNzKRpilTu1Txx3hswX8pIFCO3sXenE9rAXNf%2FEmzPc88BsYW0Pd7RbBYBqZrA0WuONx2MYOtWiNjDjDn3A65xbPfJYWnKQoV9v80GrQmFycpcWdNekwftIwh6z7IQXctDF8CueAsWwact0N9mshXRwRpaKvkKLFhcaAYSFcda3j%2FFb0Bpd5k1KAqnacXyPMsjpLaD7Vss5vERdzqgY%2Fs%2F1mGQt%2Brefsvn0vhyP0My%2BiDuZM1i%2FXF%2BUjnQS8a7dekHGsRFJScFHWrKEg2vpBekAFT4IiV%2BwSioaAG6Eh4u7EZWgU3QwHJ31%2Bj6kvI7dWhs2cVbCquxnE7BGK3m374pJ%2Biwpeo7VIBDffuH9MIYjw390%2BpRPKdvhVsQyy2PnBbqAV7pU%2FXwxbysz6JexmhfN%2BYeQaJ1Ay5lm68ebe6HPE7RZcNkDWDFlVPtS9sJZvHbIFQiH7U5L6Lmzg6mWz8szDWkVzCetrXTBjqkAaMX%2Fdsz9e90kHN%2BYTBhE%2FWnQmBbeAinPsf9kcGpW53jvXT9RGpwnhxc8J9riPyHlQIVl1%2F3a3vEwfKdOPXIQsXHwe5nht8jqR9b0U67pfYjghQvB5qOiMFgKGn4J0ysM8amB4Jxtek5Epga86f7v3q23f9GiajMTVhUIKKtahEKeFRGsOl7ui1S%2F0Mt8%2FtvQ3aSPbNk8JiCsgqN52NVU5ZYQEuK&X-Amz-Signature=54b254c1483d3f5897ff95281639543f69831aafffc9e30eeb846171ebc20234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
