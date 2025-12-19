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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=6d9dafbc2d904eea0d388e07cb1608f7385a788edcb617aa8135aa66d66c7632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=185082095a8618f0fb8fbf3d5669e416df70286830da41f8c32f7c338a9efe5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=192098604d9419f39efd5492c7225b4f7d88d874c96761252c7a9a70752be452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=6a79f826d006c3f65801a4091f28bad98f2f8d40d09dcab1927d2434780d1b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=11f4faa3001448c7713a9b7764444c1f184b85cd70c9b42360df735a2e32cb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=d55e6b06edaeb29129d9155c6ade8f79a4af33fd5f235fa6b21e39400f8da336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=6fd6e8a9925a16b22450869c0133f93730a22c04d6ee97599c386c520ef2f77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=9f3e489cb08689d2559e4dfc179a1778378ee02737b0389404fff7c6d348a3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=3d8332d4fb5cb8fb2766a818875c74508652c676f019bf0b27b49d1b1f90864c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBAWZ66%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOTBVxuB%2Frm7XGsoVlWX9Ij6Ie5MusUBA56CxZmtjV1AiAKUQUY4cja45JhRD5Kz%2ButFe20jc%2BVo%2BlSrkgTuXfXEyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcWjzcZhPdZOMKXsTKtwDyp8GAbe8xpQMA79bxo7WBj%2F0lDmjDRFlH9ef%2Br%2FF98t0rOP4g3zcddj8vqe8toPP3gMAdfe918bHkKvjOazuHjOMNNb4nVM6fFqCgAOJEkZkcVhzDReJPRBrgqD8ikDzFYTdDptTlAZy6F6397mpzrNqpKHAJKQcbOLF2jBrATinrBh5WbmT61ZvJq7X15IiWt68dfP1db7svCjf32DKOqU9sh1jE3mBEc2LBbqSJjiG2u7f%2BbRNffYISg8p%2FVfj7TDjcMDVyEnWPscRk3kzNAM3naiB5pjrep2RLN2QdfFG0BS7fvRnguAhixUEnglKWWmvki%2FDt%2BBFtvgkSqcnVJp5cfkHLnoWSmDvCQqEIXoP5e%2FePIjySjNW8I8RGnPfi%2B34%2FMbWnFTNAaSUBpwzFW6XtgwyphSVTa1SQl5RnMQR0JeUZPwkDJU%2BYV6dtifKTg7eYCE18NDvi9%2FA2GYspHE0tzx%2But6yzfBUfN%2F89xOWsU1jh5%2BBwIY9mCmRSt06SH3nD6M4ubIb0i1k2DsaG43MHEwhHcOK01vhu0ZWXGfMXY4vsg7kj%2FBNy152yeHm3I38%2F7pismsJrXqIolvmgOUyJW9su0tx%2F8p4RxTiQn3c9%2BonSX7Wfw2bTvow0ciSygY6pgFszmIDJdIoK3HVR3cI0WmVejJ%2BG7TBn29rvhGi1RRQt0uzcolSOhNbEELv3wNAyK2A11lERCrYluj6Dr1EE0DlalHRMjQAm56PSzHCc723qEdnnNPy4b6D9ylSHuOSigXYrLQH9RkeHcu3mw8fFQ4oPFThp5CzS1ZKrDtpo1FInu8ibdT43pJ6xjVfk%2Fzc9cbWeVWFPjAgvVafeBLBvq%2BVyknXacsp&X-Amz-Signature=a344f61177fc3c72282582cd87593eebafd49874d737f6d3463f572fa9658f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY4DIJM5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQLzPOs%2FNv0MGu6ah6FSZ8PRJg4Wp1ZH7KUzXf5fia%2BgIgXVABsgNbsI6lEXVQrvqX%2FaNWrsS0N1DodxtIS1hvd68qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYYUSYx9dQh1V94SrcAyMkYgASv1SvhBewcQbr8Tkh2SJQy%2B3l20kXPGP8dI5M5YLCeNJOo%2BEw%2FxvXiQoXtP2vRVhKF%2Bd8zDsxxxZBonznrYGxzUUfNGZl3APB0fu2Kx2rgN6rho59Ld4tKvWghOgGC4uy2ij2fOCM1aNVc12ge7BapHAjct85PtTnBd%2F5KT%2BftfrZUM%2BmLSHmn%2BELs9dSUU8V9fHjzILgCzUOF5hrEk1TieXiuARG6%2Fl%2B22fi%2FaU1wfH%2BTE50Vg1cB%2BAspysES6C%2FF9tMLcJKl8hkBkmQgSoEW87UyxCA6IyNbPvi8SqeuGSYgTul9VdkmHpbzWj%2BDLCE0bLO0erg4jl2JKwumQC7DAqKs4hRT1wovHuivcjqbeveBUFTXCqfK5Lb7xjkr2o9uyQevtkKTsiWXMBJ9sHm70WCTdj7bIKF3t1uQiX7GCySV%2F0ZOZHsNxpXar9d9X19FDgn2moPSb0zUVwd92RT6CCDTNofXzrg8nZIKRZThJ%2F5NM1893ShuFAk%2FnY%2BFD5WySEhKT1KM%2BjiYbfzo4Y%2F4Ok7L1hGi4KH8z5Lkmmdsb289S5gxMIHmXWGV%2B9cd3SxhMd%2FDBbMdxx04y4F2ZXgGFqwkBOLjXNQTe%2FHQIoOyf3p6QZJF5UUMKvIksoGOqUBTyqlVEdab2DPJxiJAsDjTPkw8uHNYt1PmPqxAZvVg%2BB2DGuXUz8Hz820185q6%2FteXS9%2BdLcIV9qquPGFhnBXf97Z8y%2F1hc74rmDGg%2FpTfngM0%2BPP8bPcTT5fHHGAfS%2F88q3s087NDJe3ZVnx1ex8bfzQOaeb9nap2MmaxX%2BZ5%2FFAPJ5OkVZpup4QTrdqPz6IK%2BTFTjYicuvOS4uVCGLm5X4xM71L&X-Amz-Signature=8e618e86c8c19c14d86f3226d8f2b52fefaf312265aa1476c4e0ee5f2175b932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=30acf15f59d5223f0f11e8b705b5a6ba035abb6c99a7948bffac40785e56297f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=7650ed28f4af6d0ba6b41443bf799ace95e960484014caa516c8c0d6c27f28a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=cab317cad73a2fb7d5a4d1039436202ddbecd68e9c474772047fd8472eb42576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=467d676febb531a843118e6bd28f58f30bc175f35d03c532a0895b426d9d8c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=4ed5047b97b91b7c2e24b00ab1e5b8135fd82d38ca34585267623011adfe5e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=a503204a858d7e6498b599314f4769340b1518f06668d28463f78236eb04b34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=714ab37cff34233d53bd7f11dba4fad515d0594ffd0ac157915ce10ee4ff9306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=bfe92b59f84e8b9cb05fab11130b0d82b3c7ab29d41fc6957fe381ec3659ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CVMF5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh3Nsp8DH7lT6Wn8qNQ7bBLH9y5y2ffGwftRnvg4PiwIhANt8L3NHxzkUa%2FfmBF%2FCB3X7QojnZCrMGKEmTgQsVs0MKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCK0qq8Dxbj1GF9dwq3ANhQBnHJzJOO2NZP3he38ENTJikrK7%2FxLY4LX7%2BhJNeVHtY6m5ZCYVlJqALkTpirWfJUPJVa0Z03UCNTYqGvndVlqSwtX6XCCYHxyBS3Mu94N%2F8ClbrEYQC%2BwQbaJUnL1wk00AnJ4o%2BDpmnHSPeecC5cYFki8%2BCv%2FjAS9g7V2KjPwomdxQoxsJV5i8SfLDc5shOxKZ27NqFX3iaeEASaLuVegFYARK70k2u4CeqbyYeNoDvdraGZs15mC7WRnhqlYtSRn%2FUrsGVJcVzwPfCudc5BpYeTfx4aZ1Wdqv7sjLFKY2mpcp2bzD2tZCmHmM4TZUEICIUjPmzIEFNXda7l0EqnwxCOcgJ8v%2FZpMmG9tgsIH%2FY6CCZHPRhCj9Q6M6zsQMTbSr00PZ%2BuEBoqk0zqORibTuMt3LJ2dWZgCpUitqRBtqKPexPqv%2BEd2R3FIO5FLHroiw6QdcU7udL%2BwM4hjzXI7Mud4dSEmdQPyz%2F%2FCFu%2BcdAkH5iottXTQHkY1Bo8s1dUzUjP4WSwy23ZBd7zVpKIpUam0WhnEjLkS%2Fq1XCRINR9QKvzNfMGBzjUEt5FItQT5Fs963GQK8jx2Nq%2FuoUHR36I1r72eyp5s7MQHFKA5t0JDRKapUa5Ww7nBDDbyJLKBjqkAboa2VoZkfoYefMMjPqRb70Vu5SBSGTVDGHTGNMhXQi5o3%2BIaveNl7wU42m8x1a9TSZnA0mknZurvWDxnbUdeYQwHVZ6RPopPiwV6VkfUstgKqMHpvazoOdEjrojh%2B2puBKYzmkWlMCkQVD05wMwWMJ0kvum8KqJUqshziEl6rbrESmRxxQyjK%2B%2FBChlAXMMjXYSXSC0HWM12zlKlwCaDauK%2Fedr&X-Amz-Signature=3eaafb22c5ce9179a9c6cc8dc74ae1f9d23033e8957e17a315ab881a1eb136f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
