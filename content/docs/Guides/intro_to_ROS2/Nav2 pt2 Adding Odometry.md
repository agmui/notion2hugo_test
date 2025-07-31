---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=339ccf8fb133e718acbe7698adf1a4d068c1f15c00587b57f5ab34e2583cc1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=c3e196a474e12d2186cfd2ccfbacdbb8cf53dc4c261a7b28b9fa5aabdceb372d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=74a524b2d5b756b57b074ae4ade174ab1f8b2a2d88fe91da50c10b716193d193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=b6fd38a0eed3ec1558e563c1df3256938912b2a4cb97d77d0db719661e62cdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=023088095c2d11253ab298bd97605b76d018cbb5a37a1f53528738d2beb75ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=1966c9e828468c966299d61242527105fc8e2057a52fa92dcc1e748438530bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=7c4b50e64b37ab4c4ba6e578696ea0262d91d4bc9d291aafd60402a2c0ffe1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=6f5ab4112d1884a567cf014db3de1f52d358b3dd0715c3ecd79ad9481bbaa854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=b08bbaf4f8a5a261107047c49ac9bca05f153972151e8546b2e892b08230b41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UI2EZ7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYN1wwF%2BzCBjmzp7kJ%2FFQ6xBrDEddWQQZsnOKoa1JOZAiASZiD4fAb3VTtNu0LDUthLdC7H%2BOc8GXiuFahev9SstCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqbzrUNSx21uH%2BUBKtwDPpYxzJa8bSBURBDyUbF%2BxEXimjUXOzTjg2ZwOoWL%2BvwXJIT9s9uWrxV9VxXgQ3MgbdPsGjSV32eyejxuPjgUy2L18%2Br9cVcrv8GQeeYvhF1jj6ryNlI2YZgH8FZSZ0RP%2FePeFVgLdp3jAUGX439FOOxUYzdSZE3xmF4vgnUQN8AVi6z444oiMsCrNBpOY5lvqcd2jY6WE1BZA9JyQWzg2mQV9%2BKM3TDl1ORgOq6zGQvbpk7yUN5tYhK%2FfhWduboiAUSu8k9xqxRChGDqYc26NQ0Wkt9g3T7oiwNgFSAylf4fVQ50yljqzc1puLXJelRqHt%2FC7cpBLdUSxOuKZ2TwWzKB3JRb%2FGRyslUY83SzFlswWLDR4Zvs0eXmTVLzrd2tvLgQvKJfqAxUqVGniGPM0dTeLW6NSKkNge87%2BPk5Ljx%2Fg8UV9LDUa3klt4mdHoswR7owNk6%2BvcOldHlP8voy%2BEO%2FdZLA%2B4TSML0Ucyi9cHVR%2FFQWO1x4HrucPNGDVeG25H0FygR1VVrjcXynBE%2B06XfZDHzOSk4tMO%2BRClOr6i5H8vT8quuIUUUBEYiK097HALY7FpLr59bHS%2BMNQekvgTBBoLPOf09RJREXX9md4bYvQnnRmxZUPPXN2NYw8YCvxAY6pgFYVI6MhVOYIS%2B8KfBL3JK31HIlSXzJRs8nCZZYt2eNqoHDuZl5uf%2FuoR%2B8tnBvQAfssAicFM1so5SzLWXPQgAl%2FVyQreGT644TAyYM281SuB2Sg%2BAZa2sN8cF0SbHuk63zeAXfy6N0Eau47ploowwHFFS%2Fla5XU9niFZfVGREz2QzciU07WpSVYh01HrMb5LhwJlG%2BV%2BMoXFN6vSmGWEF6aQwCFoCm&X-Amz-Signature=531c06eecf559d724c14eb13dbb6f1f8b09c9814bc1cbe832378a4852c45cf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LE6KXMI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5xQhFgiF0IzB1eh%2F4uhLFIOOuKcEf9qjMMQEhiukHQIhAIMY2eFGGO35r6ejSRHCMw0hW3Zb8dmf5GTrS59yXj9yKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxYC15YIBPUq8X8oq3AMgb6zVp4COYyUD5TNeSRhxYpLCVLEbfe4wr4oiKaK0hQ2ktyygoeeD14wgLQz5oh6%2Bldp2SHWaGor8crithxAFlMBooSPT5Yqzr%2BIAN71AWBPenMkKk9TVUY1uhI4Ywuu8CPgkUtbiBF5JHhVZ27%2BLUSz1t4TPZvi6b1zJoFZS%2FjhCOz%2FiWCAnxx9uyz%2BXpwAbTgNkNnEEvURekUEGbdao2TDD5dlfJ3kNx9cUcZxP5KiPElgd58aYNVb8%2FqRXn1EJ0pJxoa%2FbP7YtA4bghnehbgYtZz4uShtLySYD1%2FMI8KL0fZd8rgIaZHCs85IXyL5VIOEt6RYWVwbXtzZ7jMajKGYmBc9nSRkOEgQxcFfpvXik3EHAwiPURm9qIaMmCzMy9xOgaSWGtP91Mdh28Zpx1ClvVD8TqD7oRZg9cJ1wsU0nIjTFeyqtYBYga%2FKhs9ZAZAHBRDUbC5isYfZJFNq3pjKWI%2FcTLtaBkR9j2V3EGVjQdstvYy6wsWInhQnCAmZNj3Dk%2FdH9wKHx5kfpXQBooWrAAQ6sCG3E1MZeHfDQHzMfqxhpIcnpD%2B%2BJa4lbzxIYs3rG5LiFn%2FwR0Xan6Hx9EToBa4Rk1daju1sYYC1EKSHEaV1pMj0t14haWzDIga%2FEBjqkAdjxgEawXZL2Dh6UWAkFOoDbgBew7r3%2BHQdz2XFYmwXZYEDYMijOdl7RuVJm9Lh6eRN3Y44N66wGbnneyFTxgCYBz0Ng9bb5cKQWhFYIbmS0g%2BeXBpVmsHaK%2BTI%2BrRC%2BY5JJcGckWYsQHnlOzFPQnI%2B4sFS08aFjyJdI5wyNZ7HpmfiA0xsSPYnO5Nw3YyX7dcgE2M5bb15O%2BM2vAeglWvp6TL2i&X-Amz-Signature=76ecd76961ff45fb13ad571e133a044fb7a380a03008ae14634022c6e32498c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=388ad9f4e48dc9212b761b2cbbd0e6d703907aafe6812d507f5814507eea5c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=dc5c0649f01439ea8f7c435c1cebe34e0b75f8a33d5de16b1bf2140926c44703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=b50d1ba5534556573346e21c40aa8b9d95c23158aecd82fa6239ffae9a43f1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=a4451df9be7f3c4687e00558d5fa7d96d975d67ada29df2d1f4901766eef38a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=da9ecc0e3a03591c1ee2a77494bc3c4d8a4204f5ba1a5985290fbcf927fa7a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=1d6e937fc4ee8e12e9dbb85909c6660757a6e836e37028947537f7ae4b92a137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=47ea0355baad06c0fa0b6c45bbb0a8c0e8e1e8a78d86e8296a21e710ffb5ee79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOOTWIB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMVZ9sX17xfaL3DbtLPotTO5oZqdvfKy2oz7%2BoQeKKQIgUQ0poT3sUNOypjjWRoBbxwjaaVuRDAJUpsjiy%2BoIZ84qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq1UlYN8NmqCi%2BoAircA1sCndRsTVXOhYK%2F92MQPiYkqn6ush0FJRiaBkCVIQfezmRkqTvL2fkcgDOIOTCq2fSpCf9c9A1zIXf7VDsP1ugZDFvJlhUlDgrO0BIUjvMrQjvOxnJZiS3zeCgWhN4iwxtkEnw%2BioYd6sBC9f9XFf51vhyc0lX2pBvxY6kQPKLnwaHAFEgSgtzx%2B6Gp%2BiwKA4QBctGNwbkdNty0iYMuDt1FggvYj84mu2BRVvDS09wOel%2B9mqQuYhMX1PQhsVsmajogulr80M%2F8bHoe6yENzLv1lORpwR9w69IxTi6NtnlkrVTEVhEVlg8eG4IFJ7yVXlR7RnMgbq70Y6FX7Iydg6cYYMbT4J9Fpm6dYqAUAslA5rrCwWcyInow6DjRIZd%2BcZpO%2F2x%2Fe5wRBrjDcSTgZ3aD5SaB8dl%2F3KybW73TsFmRc2qGtJ%2Fe0TMqM9kDDNWST1Oq16qyyLqg%2FDn3tFqFWmziNHmTR%2BuFJk09lgffP%2FqGI0GYZuOQWrN3moChDh8nJdnFiemxEW4zYuG%2Bcy3ofw6Cz3S60gwFyHH4b1hAWIRKHbozoN%2FTW%2BA81kEsCnbWIeu9GhMDp%2FSlBI0Fs5qHbosYrqaILPiZZatWBZ1YKhW9BUhijTkS5S50RsXjMNiBr8QGOqUBKNh8uSvRU8C2k%2BgEdMKMxmExMEX8tFRh3yQ3g3CzX9Ju5m23Qf4r3dEfhQooF%2FrOcmexQjDsB4IjI96zGf1ysj5Z8Ny1vHuvq4rhydp%2FhuwUFb4mF9TlPj2OXJWP58yC2rwD25ORVnXWow9qaPVRDewnLExmhBXkwBeGibDU3tDkw2v30Y2huNsP%2FPzSXK5RCv4V6hUuzBWrDTIwwLnQNJhMg9oH&X-Amz-Signature=7a035252e26bed558cbb05b1dbe4c29978fb7bf311eac806f1c8bc3904d99465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
