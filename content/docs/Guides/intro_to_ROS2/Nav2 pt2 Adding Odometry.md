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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=359564daab217823351ba7e4fdcb34bf80d77837cc95f364cdc40a33b2d9b9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=e4e7bf42401cb8a1b706047ad73dbe4c15735a3dccc01332b22cbab4250e2afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=ad671dc11d5eff457861ce187ce4f6da240833a6a73f8e9655155c1bd9cb1cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=cc888ea9facfa7d5ae19fc1fc99723e2351f071563d6cc4235176460bb2a8784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=5f1aa73b2367757061f287b88b1ed89f1ab21fa51a36a4532a6fa038dec68d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=58176ad4f1e8acd04280df12e51f3e8842dadde24aae290a1081ac16212c0c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=098485220344aece3accccc9dcfce36748181bf33e860e12ba943fdddb78f316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=f194930e4a52f17ab93e1ac49241a8abe19b8fc4c23b48fd8fcc06ee67af0a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=fb144a4a91efe066351110235287f00ea6046ebd0a9c9c1a1679a563365946a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYL3MPZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIC6vM2douZT2vugZTYTvv5f9%2BIKWLVRSjrdFPCDLilpIAiBctB8ZyNosROzLFjTdI8Mc1uIy3vX7PxbE51ZsynrBDiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5Hyaua4933d77RUKtwDnUXyb2DtYpsNEfquelGe%2F4XjWl%2Ft1zW0IqO3TnujL%2F%2BON1hgDPzxLZMj6gQv3yDpKNn1oSwXu7s5dL%2BgTQ8EP8d3mfrmnLx0442dqBWTRq9c4eQRBUwLOOXjxozDahKFIJGBKrtNjzPPS0qUClO7iF%2B%2F0hAjB6G1lp1noxRClLk8F51mJaRzIS%2FjLocyNz54dSRFUCj6NAECzB4tXqNiqsBq2cClK7NZbw54w6V%2B4zttOjdIUH537%2F6nbvkOf0vtA8w3BbK0gUMfFhempwwKgUeiTTjHQjN6ky9ZurDHUbRlphkr5saj5OKfRzDmA%2BpBxVagfSqwUvZghW3gYR6%2B6KBrL8t0zRMhE775tP0LMyk6vK2cMbIhNX%2BSJDWY3hVJBcry%2BxqoRtX50CQaqr%2BRP3J8Op4fNi0NhJUnGof6Ttl4LverYhf5z%2BQQPVlzV%2Bx54xOzUZMoIh8Ao3%2BzI91yXYoqRElPHQOHBRgTovfrdZpKk8SZr0fTVBzpkLsYOi7Oxxt55VmBTdlOIbA7rgBUsTOnC%2FB10TcO4M5XyFsS7TNL6hn1uenxm7fUHOzdDh16n8TCq5ieOZdiipH3GefKQYEge4GKS2i5xg%2FMzLhqbjAcMEVIVonhCZxjrrkwy%2BuJxQY6pgH9QNIza7ZskMrdRT4dY5CNzoyxwf4n2UTQ2Vg97eRzGgh%2FmMTeEWB3lWGwWWj1RWZEZ89uI%2FKJrcTkodA5eoKtQlJVpbIqZUeyPStMMNviGKmlKT0rE6pJycpiIbZslTj1ABYzjwbs5d%2BahAlQFJ6PaCKmJyoJQeSxDaLVIDVC%2FNV54g5h2KwVhB8W1ASDVf3CWnU0fE5qLaHKVqiq9oHKuTmozz5o&X-Amz-Signature=14b7c2af0ea65b48b5fa79d510935d1f544f81d0d6af50402f24fbed07e01d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BKTY4IM%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDwk4BRfe7rrxPf2UB8Wz%2Bz%2BhrwM6HNl7gQRXbiz5OZBwIgZECloY219NNhPCHIh1mVGRzyLUbNRIiIIzi113ERROkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAmY9quu9Klm6XRcyrcA7OPomiJKMd4C4YNzfX0pCdDtYemaXRReGyupY4vHf1bZlFBtmBq6a0FKrcRgGCUpmLGreldBNlRQqIKPumDYSmm0mG93OlFv064VD%2BEwD0qqwJkKO17nbgWaI%2FfZyahsJih1%2BjJ2CVF9eDcam%2FwR2VJuvPKYqw6bQ%2Bzv%2Fl71gHy%2F%2Fqeap6YItRPuBwbw5gX5K7aiFtejuMJkm2AOrdqHX2mDh6Hm53z78iVwEjLj62qtyv58VEIS3AYkptUvV2%2BEPF0G2Y4DKP%2BpY802kvQp9505yEukJMtWYyEr1O1qpcgAraKcJnOKvTkKM8%2BtSj09Jq6pzPIJap9uzdXK6m8eWki%2FPSrUKxeOFhHdOfLqK8%2F1%2F%2BI9e3b9oPERmmDeESfa%2BQXD%2BUA9OfFjjpMOTbWOvG71Mh%2B%2B7IEiC654fsQTxqHhBVTmsPofgVxFWTg2uS2Ih0%2Fdum0AuBafyO%2BQIEk7STFtZxxg48Cyr6%2B1PCmJA6A1Z4ceCYUOAkaxSBzNvOPkf42zPTvyT7D8tkIJcosP625x%2BDwfER0BCuvQnAtvfhCJFvr9PbKef4cMdUnkwY%2BxVruDvBywrOqdZd097R4e30N0f0zgDr4kxd7b3FNyKIqJrOFzIPwCPkb7aVcMNDricUGOqUBKilW6egianG4pym4lfKbnnnc4BLQ0mCJWOSoMTW8t5vvAfMMAeRqlEZzgckCErHeuSSs6oHrAmVHz4C2xZ%2BnCew47YaKHGsgwff%2F1r4bMu6z5AYmeV6xq27WdHeo02Ts8%2FXuD4%2FT%2F7290G68JZDVoNE%2B1iw7R1DCHB9Z4qZMrucdpVyZphExYT5XZWidtCA1otsUDFPiopVprjZRC775Qmj6eAZy&X-Amz-Signature=903eda47a18d2732a6c58b2fcce0b862eb70ea93018e1fc2f8a50fd6d45b269b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=fc3e6b7a6b3ec9b4e6ac8f59e9ae15c325bfbe752ecccba266944682a96e670d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=5eceb7d6844231a5f235f51c5b2cd145f03dd7f5994e084cd0c7defbea0f0ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=0e82866b4784224bd131938fc0f15b59d3c23f2e5e1a015d46946964511e574f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=f0753277b5fd5c0f3a549a61300af8fbece7f0773e93513ae55666a24398e00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=f62f5233f9ea20b3c35aacf91a875fd63d5e49f554d5af3e2337040fcbbdc49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=423aa93bca906e5721411c8eda1b1de6b868b518c3fa15f6a346baf44588eec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=294015118fbeee4ff74c3e4b3ec75958a46dae67537942a825370f8e0bd3fe74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=ae79828ad0f8b93eaae4f58837f1bdcc56322a72e19353c4f43eeb162a75b297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CGVN4I%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIErhfvds9Cbz8Z8t2Zj7a%2FZYKZS8OKvozoVF10L%2FKyBZAiB0ucenxhODb4nu5HTPfsWWLFVsdt9H1AZZbOdibPETbCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7kXijHVfauc%2FM3PSKtwDFC0vExsX%2Fd3jrrQ%2FG%2B9XX%2BUXQ2AoxmqXphD%2FIUyw6UqPd3iJhOZWikeKRqzB0A3gMSrdf7ab84aesPQWRX5PnU7clg5IGnNJN2drzPhuxWA3c0KPor6g1oM0NvokFZVKFpSD2%2Fz2EkJIfwQ63A81bFUeIZtOB%2BNJaOsNeDMZ2JQWYvfzmTPQRqnxoKEaRU2xbtOaqr%2FSHHTMHLRIourGgMwtzobRwENDpBZ12gZI4z33j%2FsAMcgje5i%2BkV%2FwSEcEWgbzw8J6eIA66R3LN%2B6NrOjNPD0M8H3E1Al5fE2VYuZUZsvv%2B2ks53u%2BJUFj2pPzSHRBHZuocKVIgkxFjZD%2F0K5s9ukg8cDOpE4D%2F%2F0pjviO%2BQPzAvydUsFQ8lTx5h0SCPXyKBcYvlDg5Rbm08hWABJIqgkjMTnFemBmo7pY1EUC6G%2FhisP%2FlZO0Uc2Z6ZVz%2F7gYfcUag7r1ePqClYRLzrQIyPvu4z0MrWiLkvmFZif3adIx1BksoVWROoEteDB6uSlZ2wWOGDGlbvE2L33DZlK3VjuBpTtpLzZauoDbhJWCyfyFh2dTyr7pAgvgTeUqYJCz9sUuhRhQNyKGj%2B1OvqPffG%2BzXb0Lv%2FUF3mVXV%2Fk8682z%2BwSUQld84HkwieyJxQY6pgEsdffWABDE%2Bab7A1bApS%2FnoWQqjtTGUch%2FfEIms5G83SbjpGQliODqme8c6MWReReF384WmVYsZZef7%2FAI6Icr7GMyjKb2z8WbPtTFmKhaDKRPdug4C2FG8OH60XeeOUm7y%2B4jIi71fDreRVYARR%2FT9ifewurbTH3g4tvopZootXxoli63Mlmf9HAdAJSPqFo5nXeRHKU3TxNtGygRuUKh%2FjJvT4RO&X-Amz-Signature=85d60b6f64e7126d27393afce429c3942fb69020be39ba40f48415b774ba14e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
