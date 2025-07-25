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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=f2dabfc4298cc68c8fd834005842360f874370edd30719030027c1ac6a7e317e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=4a7e85bea5145bb7ad8b4fd91f95c3b1dad846bbeec671c8c144078293dfccd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=fed9edffecaf9d581cdb95f6d2e2d567f69db96e31dd76e5b9b8aba4b3d92ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=3573047688860d38fb0285ce69804e09273adbf28f92a4cff26ae4244d8961ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=a2e94a8fcc0a3e5201387fe68a348f517966395458faaf2469f12a4cc1778b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=b1c47451ecdc4d4d9eba41707d67cb2a8de9547f7eab8ce2cc0fe5d7bd4505fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=f2a93e9ba3dd5a44c1ae86e1af8eb04c92efa0a3c11136bce3e57b26400113fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=a4d15d422bacfc47fc3cfaa346e0b67e3af1aab8cb7688949bb649472246c61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=408459fddff0c09ed99a5fa9a1002c11461b10cb6ccf98ad4769eb0275e7ef96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WYUMQQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCSDkeqf45MHvWYCN3Kilj5ON74iUtt6JbWIXdlDA3OJQIhALkt0PD85di6t5tBnK8lAzRjxj%2BzOhmJcn%2F7MA3U5s%2FnKv8DCEUQABoMNjM3NDIzMTgzODA1IgzVOeCBYqGeKi8TFDgq3AOVZ2BXH7YFAsWH1FU7lPJwSz5%2BLvJL1e3tu8MvSWTuv5VGMOzROvEgohVIn0Jt5RT4siK0h8znAGvIYqCu1bOBqKY0SIRPNM7My8FF3LCnXEtnh0Aw58pVkmqQRwo4kh8rb6bIzO1rBLnuTQGQ%2BDzl67e23Z4RU7jjrXos%2F5W51mxId6%2B1MfQRkLf2MdPAXfAm8IyudiHgQYjRr7i0xY7tlBcH5wlBOmRFWV19oyPW7Yog%2FEx4EEnyVp3Oovs1gTNPJOOYGfIUgWLh58gYKI2%2BYFfp5VzUhMLqfLwZNVdpCcV5MmLBEr1Vr1vHFpbcLlLEIqLZGHlal8Tsm68IBoY6wfrR7Mwvz1nSz0ZXtzDLpjqBfVhfyc%2B1W%2B3PXF36Am1hVmyosdKDEt7w1m52k7z81h3hgGKR46KnBd4S%2Fua2trywwhhtS2LNuk%2Bf4CXZZQh2uDxxnlRraqw7JV3BkEMGrTG6OgJpDA2g67ZEmxamAaZw9VgURJahjUkQBP9JGARgr01lo%2FT3QPQaE3085K6SqodP6kTEsWMt6myf339ld6V603aUugH6CgC1YnYEhZLoGnOPbUmpYI%2FjiA9zATw9qio5cEu5pqoeOdyB%2FbQHJt9gtPFDvyC2%2BLtBzzD74Y3EBjqkAV5QhYVhhMEPBr4F%2FmCON8g7Rk4xgMSsn%2FZs80Ukvn1tNvPO4Rlv61Gbrkpw8vfTvODLLxebGlpIW3Oxs36Bp19nPXLZ80N3iapUofchuN9nFqPtDTfOuNkC2wPky1BLzhlXYpJO38%2FhesGrXlUCetBhsTAdr2GKOr1V1rmeiKQs9LEevyvYKwWRLwPbFsAmgVTrgSUpWnar58o11FyyjEggovql&X-Amz-Signature=adc65be1cc396e5a0cc1efb7cad0142bf0e01fad1af07dfccb8b6d433f405d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3ENIY5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCw%2FpqFqF7HAc34ffFWWzfqB96Q%2BOL6vlBDTo%2FxR7K2ggIhAPRXdA1xjVbr8PGqqnG9rABZZWUGNTLhIR7UJX%2BMD6qlKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOCCl6WR%2BHtjuPioQq3APXtCY%2B9bCaidDSMflL3xtBlV2AwS4woazlwvLOZU4RKL%2FJea9Rq4ThG4FQXf03cMALdDWy1Gojj8a9Mppm6Ro7QTjRYGwYqBJcW7tbkc%2BUhr5NfJuRFqgYw2%2F0jh7MrWkqvnnu7DIF5abgZE%2BzbREp3pqYmMXcVZXYvUf5j%2FHU6OyCq1rwsEaygBztuw44iGTqoQaOJ6NKszNiFLKsfvT32fC%2BuJVJJAsgKihNY7L7gOTFb4PpHv%2FurqGHuPGYTyFcY8ntPIcMXsknOaFFWBX9nl16%2BPg%2FVD5Ua0ouTOTZ%2B1QN2yC3v3%2FhnoCDkQBUCkzWo3Oo0BqM7E31ztd7AibZv4ekCqUj7UenH1O4nkCq6BtgCaw1NqC%2FcAE8uqUENBgVlxhlmlbLKfIQ71RsS8SLmbhKkqtjh6qR%2BddX3xWybmmgDtp0EiKXeYWvZiqoq%2F9T%2BNKFDFlhSE88wgEORXWlgFIKEw2V1fkTiFKkczQGCbpsR7yogQC0vXL6veuwsqmagZT2FS%2FzUAymZv8begWlxXoEbwIPO9RSzIcqZaAT5XwT7irzmdtT0SeOWQH2uBSxqn4ViaHlboYizHw%2BEtl8ROmKc1rZxvvfEoBAYTKKGMAuHh1N%2ByCxz4%2FfWDDJ4Y3EBjqkAeZVykus4Z6JE4Z48f4HT2APNnte66w5JKCLNeDxISLW0Tus7mCuz2eIslT00zveo%2Fvp5MjtLMu5vIfOKwCcpCxNgiohaG%2FDQABjAWbEWklflOG%2FKTiQCb%2FPiSXauU64raeU0mxix%2Fg4iUhXHBYOn0h6p7skhdC9N8flWV4G%2Fz16W6K5bWG0m6V4gl64irNbRsBsn4N2WqPclUD7oC%2Fvb1UVWx67&X-Amz-Signature=74e47cdbc2940102632ce3720b35afaa0625ac6dd93847f88339750d58b39f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=433842315390a00a008660d078a74159aca159699375cb1a6c027d21df00a281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=795a9afc0034fcba3d735181b196a767979a99825d58d57d2883553e614f11f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=ce728e7a826962c16f5a4c4d06af960d35fa45cc38519404741948502e3f1e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=480a5f2cca0c4d0bb70d23f432c333b7dafdce037c4b7763260f14b09cfce71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=7d62b61d1fabc85ca5ebb052584a6fb4687884b93385e94cd86ade4668e44d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=0b806cbab5dd3f84f397268a592c6bd28ee922d7751d3f8181dfa1745d0bfec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ4U3XK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCqLDPJBGb%2FJJxCSm%2FJg822lHuQfW5v53bLH%2Fc8f%2FNcbAIhAI0EG7VPgFLE8yNXJOIK1HZUZU5pZu25SHhFzqpnJq1kKv8DCEUQABoMNjM3NDIzMTgzODA1IgxblpcJKY%2Bv9OE8LU8q3APw2mZ43FGnhKM12uq0Y0Q7%2B8DlX72GHoOjDWpFou9YUFL26%2BCD2r4%2Bj5EJv8tjLXbiS4YEV9Fc013hY39BTDz4tHoAwoD10A5mcp3b2SzWaWmg9YkAr4LfrY3MhMzxwk%2B2FmqOfBsKd9rZjIQqdw7D7l67V0fIZdqh4THhN%2FJnu7hUd8fwOzPLMf9ymunx2A6g0qHoI%2Fxvqywq08fX99ZHgYRvlS7JiRSfiseBEv4YUb%2FqZ%2FOYuBRd90QgBkugtNSjuH6lj01IgGPTCuU%2BM1Tk3LsOzsQXRKhx%2BnQhdI%2FdAUkjs0ApA%2BpLGFzjjV6JwiecJAznGXjkzZObWwPqz4qihjhp4tJNrSHfVCrIcu%2FkrdPbjkBh3Mub3yzcTv1WGfuEK7vzWdQQAsLdNUkHEbId%2FFZ%2BbLMdEL6Ux9%2FHQiyhev9vrygtxuzvbN1uikXC9aiM%2BIG1yl5bbtzc%2FZ0%2Fn2TmgGfBbPvnXdvQ32s9qrC75Njc6M1039Zr12yONZFl8DkSJN8t963ehbZohxhqAc%2FwgPSXQ7TW6nGAt%2FMhPOP07ITQyOg9Vr9FPEBpTzRK%2BuPRArp%2FDmW5cOzQ%2FcA5jZ%2FXQLaUJivLtpFyIYK66mqQujh2SgamzQyjxpvizTC%2B4Y3EBjqkAQR%2BVdAAzPAv%2Fg%2BSfBE4JBQ6%2FEtcSx5L3oMTeoR%2F8Em%2BeJKSb8Pl0hPxfhbRAma8Has7rvvGFA%2BqkHnU%2F5h1nf61r4a%2BlPL3oKwq0gBTdUS%2BSHneL2%2B88Sjxj6dd3FW0Y5OyZjOpRPoKlT62QKCsbVaLVZ8gkGahe2wZsjyyfw8PPGN6f%2FviLCSMPkb9oyHIsOJdQyPzXFLwhMgcOZCk8a8Tt39a&X-Amz-Signature=9e981e57e531a0a7cec0a38a67aea3d7df5fd7e1a2e1ad6d6894b5421f680cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
