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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=177e132c94240b895afd00868d3e80ec5f81aa6bfcb7c6db6adec6066e90400c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=d11ede65683c3a3f590799c8c89528f79ecd12bcd3b93dbe6b256b4b631d7fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=7f1b10f08d10fe1310a94de84a3f4917af8df93d1907b5aebed18f34f4959764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=2355b0f3ee1bd377e358c6405de9dd91bef4492790abc2f6f12116f465156432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=259316ce9f78aa304c02d41342d2acbb857dc22beea1cc955447c540104da41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=07bb3ac322fc6dc530cc31da7c454222c9a25dc499000a66a00cb032a156c1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=24cb79438cf78abc7ddb09ceff062ff6b8dab2882c8bc307b5aa059c8d93530b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=28915c9bbb25480d6221446907a6c195efedfa878567ed1af37464bc88d071ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=74b7554a1395669a34174dc530fa659f45f34b797c75b2c4479f6cdbf63cee46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMP2I2PQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXqY2Wme9ysRqHalWDke6bzfrs2mORwo32HCaSl7rKaAiAKcrIxweIIBD6dt5gYlO2%2B5ByzvNkww8UcWedP%2FhykNyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMulSG2c2FrbN8D4IJKtwDNHQ2gsJpr66TuREbTZiK%2BKLqDNSbXDpP5DMPIRKjk%2B4eOK4A2BYdqN3DTjy18M7j%2FAqitRNUBCmbojRvezO4EdSY1aRm41SW3AdB0VBXrCmK9ZVd0IPgHajfXUlpcKbhjMVcEKOFa5qD8DAMWxIsGTrIHrcVnVXA51Y3wwTtxwR9zCW5DQ8m639CB8jAo0qke0x45oQFBzRw%2FRvGSLwfhSeAdkT4pjTDUTeEBTJUAUXlLqPFTIFkveECthmwMLlT2Lif4%2FfE4hLBn3jT7%2Fhahj92kniskE6TfB9t6TygAb3J%2B1014nhc7cj0qSrg8EwLuyGzp%2Brp5af4%2BuxxOt5BTMvx5c%2BzfcI4ZQ1YnHrwlW3SXcuXQ%2FNPSjJtvaw7D2P9zmXIIPAsCWZC7Gd1P5sqrx9le%2FJ%2FEaXG76GbDP0V2QrKLC3ml0XBIZKNnFmn53d2tPQbTgEKuPP3VSb92IZGcl5aT8%2BP2l%2FsJqu%2FMFb4j3tr592%2FJ2zlpho%2FgrpI1O%2Be%2FxJJf9lXkLvOQMN8%2FZYewU7umipb6fQ3F7o8947Jy3ZZZf8NfCkvLe1vPHD2Bb3pYS0VphOit6pjp18LyyzNT%2F7Y%2FnNQ3%2B9oW55nYKL6zRoGWRdtdjsvlle%2BmqEwpMyvxAY6pgE4CTEzlmATiDv9R40pNclOSa6Pmqb20uQWs4K1J8nEsBSfeXhniJT8vgDXJtMbSfN%2FUmlwFft%2BvTj43Z1FA%2FVj%2F9FtgUWIEJ7tTHiu%2BWiMGselqtY13a4LdepIGBaNUkNRPdLoN5bhMmCatHw%2BWlOGBNhhIHarL%2BCf57Q3eOcqExBcLTNGVMiXKqv9TwLbaN%2F7kvF6cny1t9wCQP1fERUtfmLvgqEX&X-Amz-Signature=2f34ab80cb991179c5beb3d0ff12537f6eb0abe3cda8ce3eed2563b880e62615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACOLJFA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2h1zaaqnLByMXcRcDvOwR7lYpbASRoG3srP4zvmqtPAiBBs7nYi9L2VY4xlTtK4iBmh69ogxL3I%2FyryzCVyR9GtCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrH2%2FVeLSzOcnvcUoKtwD9nJqMaKhpvWpOvpg7BqfDURsmpJ2J5xSWKPvrttnBU5HD1kAfYwuKCPvYtGfmaXprWamiMthH82EBUsJeDzHmA0atSS%2BXm5s2%2Bwjt89MFqVGKVx3UZuwqtWlllyr9QO4hGUf%2B09DiaGvwNTsDck7HyQ0RBzw4znIEKIsiu%2BZs3zvKB1eG4WCgHdOpkL46%2FHqa59fjKvP5114gAUUNfUqhvEnJ8QPMzGoIpiFdqthDOB7lvwVqO2kJrPbYr9uL3fhyYp%2BzasMhaTZTvVyxZQ917UMCgPsRMGOGePXMHXP7LwjMEFV9kBlMSpotFv5adKGT8bKpva1p681%2FlOb3HPEXjURb5mvWiT3U%2FLaB4F1pqJELRzlJ5JFYbKdX%2BwhICbYqF%2F5OqATVj7TMkxQA%2B5xLbtHVptneBiz%2F%2Bo73NzPuwB557ITQwvgsFACM7pz5SIiNJtED1m0zkMHvKN6iwF5zO6%2BgofUFQPp4FYHcW5tkRBSFas44U9U3wxnzM9Ko%2Fr5utWYus99goS82G85hVxsCj7%2BEFxXsgF%2FYNam6ZdqGQzcdRlAxQdMXCijhJrO5hTowUASslDhgoYNgiTMRM%2BAhXIctYrycz1beA8z5F8sDsR4XLo3l9hTWERx9r0w1MyvxAY6pgEQxIaGw129uppaqhsQtx8iBa%2F%2BJ1pupF0Mo%2FXl7rAI3Ay3gCkRMR1IUkRTbBzdXdcGkLwDlpzb9qFf%2FxMtu9gXpJfYy%2Foqd0B%2F8uqoIC47GOt0JiJvYd1xNnEo1R3bzSdwz0ZM%2Bfha7eduy0srkUHc6YoYqjnVkF2rxT%2FbK6Qk246vIonN1gagYCajoG26Reqf%2BVXZdI9E6Jxnu2WrMfhF9wTgvaD3&X-Amz-Signature=82717abe11a4d58f2248831151934d8dcf6b7360c80fc4b350fb32db5d7d3aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=a0c51b78d510b880aba99c45aabca980aef23ea025b1afb29b42ed2b22a688ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=8b06f56b78bf9aaeaf87422f8d8612b20c169977307124d0a5813b6af9738f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=3b08b50f07fc0fc4992b8406aa45ab97fb93774082e8a9d0354f5288128ee05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=193018dc06aacd95fb00dd6632a3963ace2d119404fb626a7944ba656a334d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=d217bc8c6b8c49ebdca3090f155aae434f68db8aa9961e07b1e7455d886d3c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=26538b244d2ffb2582556f246b9259c00201e2ac90748eec960d356b87b5b8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=a5589076d7b13f002542dd189aebf020b3b52a0de902b334b51d539fffddd18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBQ6NGY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHD18vCcD3ELxZcYpAYYrtOHREhv9y7quXfW1kR3hgDAIgDWwYzVL5EWfHE8ov8ffkk2W677azyPFVVeiCiQ1Tr7YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKp67fZ93d43zki1ZCrcA56F0f01mF7FPrQ%2BIfODkSNmuMkN6R%2F5qTr0zs5kC0d59xafLwAbK8Y7btlYWLPWD3nbZrGHgvXWzWYF2hhW2N60PPw53CjgKc4Y7F%2B21Rc0W0K4h5EwvtjNqHDGS2CPxzDq8dCpo6Yz9nTGG8L5A2IwK%2Bs0nZUkFHevL9QQhxFes4lyiqZup4Os41FticYP2omiBlMnKon3iJj6N%2BlfSfG50aUzlscNLVwAnSby1co3TwUl9y0x25O2rIdfIHnY2a2j7h9WBxFu26YfNe5odbztidO4OSQHbkQLpUFZgOEXo7aGWXW%2BVpSpzDzHx%2B%2BFxodg%2FV%2B4kWiuzoJ87a6smaJF%2BqB2nM%2BlR57Qf1EeGJBMSMgot2CSzE07447MJg1CJr3RpvzxU1BBo11kreODOHhjeUUAkw1LZEhY4AAO6davpIGvyhPbKFgPBq9%2BnV74O6QqLdSZX2Zagfq9XIWxm9Cjk88j79mTYnpXhw3Db1TcwG1FT9DYv5GAVkgDdDFS3tE9poVEbLHkBafZibzqQ6ymmhKZBo8%2FVUeU5AmG7aWsqsIn5CUk0KAvqeappoczZRoDy6Dr0M2uKEVehv3xIN%2F1FskdQ%2BpNkt6fMCzWMpYOH8%2BzAvt9jwibm48eMNXMr8QGOqUB0mI6uuH0KJEthPQVt%2F6NQrFAyPVZse36bjYVQ4zG2ob%2FUdd7mJX%2BYYGESzCI5eVtJyk3UtoBzV1WPMOwd3oflxFO9WxXmbWvPoKiwpEqchh3VLVqJf7WVQ%2Fn1q9D04hmWPaHj0GHORI3wfkA%2FfRxi%2F0gYSuAKsrP3P2p1U5PiULoZl1neb0ciiWA8otdpzKrfD5IePnYzyvdjU6Q4H5wI6ANuzqX&X-Amz-Signature=0a0d309aeb6ab31483ac27cc6516dfba1f1dd2e5620ef9b5449045f2890e6adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
