---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=6b2d9b47d0d80fe910e42017c59716107ff896875dc4f5f53e44348d694354c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=f9c8cdff245199a1b5872540dd184a5eed969062ad951d44f0a44d961f64d068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=637f003430712e0f3856af73f845dc1b67ee75dbe36b838773759021b8b0db66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=443112c4a96a5ad74bafb2fd758b0215d719e1143a1889090aedbe032baa7bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=2a7837ed9fe6cec4b51787842dbef23f882d658cd804707c601980d77cd2f729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=e3ec329fb2f143a41bdf823aa15892ce9b53e6f679ba5a81cc9f0f43c79b5b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=a59b426cf0fa833f5e606f893c71df688df16f82bbf312e146f062703c14b82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=980649870edc9101396074dac43ccfba53402b3ca6b6e973ec04b71adac707ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=98375df72ada45c4a7d675321518e906879e69f6860c74a9bcbcb5399d7e4f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PJVBIHF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH7XMAiCdfUF%2FP3szfm63Vh6mk%2Bwlw0vbaJ6eGbGSIr5AiAI%2By8oIBBcR9k0I2icDJBcCtDqI8KeOhLx4RZdbui2xir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp0tZlnN%2BLwLuyUi7KtwDtQRKsJrvxfg%2Bt7kyi%2FdoJIFTXU8gT2fAV%2B6xDUonRcRSoDHTRXUgJjJDcGnAxaaPgI6wD1mnFLyrm22Flg53bcYdVB7HTe78OZHGJV5pWDviqhHXKXfJq0F6RMs5SQnI42JG1sG3iwds1h0%2FjKsLim%2FNRPFQhHXick79VYZSncrygw%2F5rBKUdZQ%2F08MsROZ%2FV1mJBuyWUKfckSEymlxH4n7%2F4BaOPXw49%2BOIjH2ER0QBylIC5%2FeFRYqgk7qGTxbJKZIv5aVVZRMhyp%2FSZk2YUZqNf3XvDYLHwGJGeetOXmzE2CVVrgjVepl%2BMxMbVvUqWpNnu5PrIHwuPAAOnpWhMF7T6VcHnsMufvHEvhNFKh4PKUoS0WZa1eclffshCP9dUDDKngZMdU%2Ftwk%2FovJPs2ZqBwp8qaSNGa6F9lYXN7uLGLeTK5uVGAPnQVJziUmnga9s%2B8hvMf1y3CNZAB6sStBK%2BpEmYVggo42yMBg404EfRxVKtVv57tHwywnjNiVHgVMvBeACuEvIxegSiC4LOd%2FbEpCCNYDZKUeb0Sf9OUiPYSCOsoLHw0ml7r4pw6o4z8CTNEGckcZlTIWJTe3dpdlERWBWA06Fzz154dRf2BziyFt7ZOHiZCh1PWDQwuI2NxAY6pgHKfQOqgip7RXqgW9RYwgCzN27Em4wzLpizhVOIj0xPe2YlHSs93pjEuw%2FWFjcaJ65G6G0papyXXvPsherVQfOrfA6DR1yDMYK0mvkBPsYo4MmdC7Uo6d7mSaWeGtJDbwVJAYbSPzOasEL4eO9biPw%2FHKvMheMxqZxaYtShUTWQ8ink1Qo6wVG8Jvl8elIup49lAzHayoh6yQwkpTnAJixVIZh5MVih&X-Amz-Signature=f89dd2c63e6beef13bfb595e63041310ce6f9f95e7f30e716662450b3da43ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6L22BV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH155rmW9b%2BXDR6Txpyk39%2FfEQkoRK1DcfLnOxzaQxiKAiBWZ818vCT4tKVDmPzchQuncZ%2Bh3Op6%2BoGEtUHgG6k1FSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMr1hBhzlOlLGGfEJ8KtwDZsXQNNWdWtjs%2F%2FCHqWGYnP7DkFtSWxv724GLRNMPEHK01ncmrWEBCjiBA%2F%2FfBI8am6pVMRdpLc6QlRbLXXNSv8apVjGcpbgqxtX8WwTnGqLFOv3EOMY%2B3XMt8%2FOYEIsKpexqlZAHlZKjvOwkmyXNmrrA3IQhlrJA3beeBAcKjN0K%2FW%2BrJeF6v%2FwIWEcEOZz7rvgV9BDtKUIQhIE4twBROyFl0PMr70Eiy7FM%2BvQUWNmZ1fOFYZro38lgk39HlsjYeCFQCiM%2BuVXWsZl2MXIUpJ9cEjiqCeKrly48XkQGaeqElBBc2yzGXCfKG%2FJcIjwB1sx09kpx%2BTVF2OgGHIb0AIpesj7LuiHY42d7uRCo9%2BCaQlXBsNgomKcM%2FcwY8uRHLc0A3ATkySzqbaA8EtyieBslXgm2jvCT2BzhSA5A0JWCE6N5Eocyv3dKOo1MtQAQ23BAL4bVPDwJYmwkOjaWf3XodOZ0mo5N27uJ1wBzlre4zK5GKZ9%2F4xEv6cyD7ZzT%2F%2BSX6Xy6dtqI7kEumptFCCE1dhqx3sqpLPkCqeA32sE3qdsFhgrh97jKxOhz3LcpqPZvcq570CDDqiQ8SBPHikj4FHi6XOSxpwabcDT21Kedia7RLiLENEKSllowkI2NxAY6pgE9tB8tg9LpRvPMxBahQW7%2BJzEjFKg%2Fv%2FiKVuEPERZx2lMjY%2BVstSqQKLSmEqfLOlZnFnpnEfLwFdVkY241Rc1p7Nvfa%2FLFiUNW%2B9Z6StefHWFiUWE8efw8SKTfqV0Ti9mgNbtdQ0pMehVsoPsl4a5DPfFoWnO1xKrF2y6%2By%2FWmNAZQCTqcCWlvfPwH0lwmkYrCFF%2BnfI2jys%2Fd5U23JW8LEKmwS37N&X-Amz-Signature=be98ef28842a32aa261687caeb2d8078c973ccacb1e5f0a7603aa45c451f03ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=c06998aab9768b76faae7b50caa9c2e1fec664bc9210c0d19fbdbb07f5c07485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=24423d124527a858294557cfa72351b0d812e8d15064737fbe35eaa8cba3861c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=4b05a79c9655f70adfa0f7f62ab1f9b7272f396b050b07d75441356669b3db16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=dd61c9eb6ec0a7b3a4f420de91d1ba40cc8648b384a9c554acc750841a08d982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=0b9dd805de2a85755e105bec4e3593512f7ea243142429a0d832604db32bc179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=7717caf7043dc6226c0e2e79449af8713d9acff19bcc0a74c11b4cb165d51f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3IPWEC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDZNuNhhJXYWjSS6uipFNKZD%2BjS5pLEd3lyh7NISnBCUAiEA2gTIRtz25OjIuN6kMxqyNms3ovexUD3o6usDfyIbmN4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKpWfMh6KAtMwrMdZSrcA07TFElfk%2FlSpb0%2BDiSvxpFUzGCybRZu1IodqMvryfU2lGCfw7QYRzE8XzUKbPDW6raMnJ29BTF6rVUmReyJYysqH3qbgr2pnogOhhcu2X1A2yb3eRGj2TSx%2BpvWQPJiX0ZUIaaj2HE24i%2FoEMvJKQpc9d9bqkbn1e2BO2WSPPMx%2Fyhz%2FYHWopaIkHMgV2KWyr8uZbsXQd3yrrJuYCG9LoHsjs75KPE56tQpvDm3QwscOdwhRklc8ba3VKthcIK7uL532aazCaXOkEcj8AhizRpc%2FGp7qMOXseSeyFYgZZlkjwf9GpxC4OgKOolr%2FehhY0GezIri7yX%2BNy98HrXlkJbqi7KhwF3qtEcLlIb7ZcMLbVFGCBx9mwXRAC9vOkcsvKvmL8Hp0vGIb1wVY3u%2B%2Fjzr48fI32iQm8ka8lRqmng53RuMYnw4ylBENqsb8ZvPV86jwfJIcLizv8pkQnSK5u1TSEX1ihNW%2BjJOX7horW6Fiq6ip4o6VC0R%2BBun5i5jOqwyrwbaTv83YdSrWB2%2BfsE%2B8S0oXMAMT4zgYCOeGtxEzllcjsTKcMAMEzXcJwcuy0idDAvloOCtEw08Y4CBSyNWOAD9ZxjH7AqttUrMZdX7N2D6%2BeOMfBRETxhPMKCNjcQGOqUB2y%2Bgf0E8yDxSjK9RSD24p2ixN2ilOcTmNJHw2AkXWJ9gazP5dh6MyuDoMV0ReBf6qMkAcDX6sgu4kWxxBRu%2Bw4A0WkRU8D9kbOuW5el%2BtHRoY87pUoosNtUA7CI0WSSgs0BJQPBfqfA09cAElOpjWP9rM45AwkReSoCyTAs6WDyP2kRKhpKAKVyxQiC196Yj26rSINQtWlD6Dg81p77p6UYuj%2Bf7&X-Amz-Signature=d591ce4404c1c947dbffec21386d8b358fc1bdfa6d98cb8ff7ab4861e3f9b037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
