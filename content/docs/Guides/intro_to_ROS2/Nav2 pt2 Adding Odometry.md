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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=1091a3b3392eca8ddb0979616d81137d351d22e4c1abe581898bedfe3ddc0746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=ad848bd784b5c9e35320778c8daadd5c709675f743b2ead0da89b2bd0d5ac8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=72f9ff0739226165fb8b7289a6f08701cd1cbae6ce890734495e744bfe7b1a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=f463c17fbdbb185d15109d02fc96c0cf7dcf6eddf9f7209ec560ec5b640f0926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=d8bc4cc2ff9823621edd11a0a939b28c2181ea9b442c5b18b79aab77a4c49248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=1b9e687f7a0476f8e25af32d94efe99d65d25492de6dfcfaaa6107e36f460859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=3f2da5595f886ebd61010ad30b87c57e94c4b2da40d5f5ebb9b49ffe09d2267c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=dcf4c20e3285da9dcfef8da975e1d9fce273bccd0d2f52e769bae62634ac0040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=cb59f7d457abcf0b5eafab5de443615847d64afe78884be64686ca81cf2432e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBA23LVQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBjGa4ud7rXk2HXsqof13WNpRSPvpx8DfAH7DLj0L0B8AiEAnDlgqZA%2BTk0gqKzN2J7qMZAPszmPJ50KwgY2fZqR1isq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7h%2BbiX9hmgRBE9BSrcAyCrCxhuvFQDPyX40yPWc5AwTedNv5d7fXdU3jSlK9RADnqhGXku4Jh2JtaREDDgYmLoHTKxEUZ%2Fn5zOOCanL83Uh16hwsiFQW7d5bhqQDgFL77ulkgJ%2B7BO%2Fsa5eFrReCIhDCMfxsqZjZuf8XyCJ7y5wnYOsSH51yBtMoFv3LmBNin0%2FyQ%2B5L06ApifYPWhuq51Ps6oFDycde25Q5pNx2jKY1CsbRQ50u5Y8%2BJTvX5VlHfJBaOF15kiHLqDZwLFnOS5Ov8iq9hiN4th%2BcBc5hNdHk%2F40DJc7peIiay9WAv4UTn63elVRbaq4%2Fu74GiXlwtFI386plI%2FBj%2Fc5sAL2EWcmgzMJ3QgXQnrvMais%2BPUjShYLeMc6kRHCI5RQTOceq%2B4cumBRV8cOqaFCTr2WSSFz8rm%2F%2B6UGxDNmJIO7H5Zb6seS%2FRBDXRrtLe0iaWD%2FtA8L12q1l9FGv8050IettWt7Ore36%2BKkMx3EdfwiDT2erMWJnUsASslCSR2hd31oYwh4r5YLxbShjBiWxSU1f6OuleUlVCFfuzlocxhRqQSMK0Irkm01dn8gE%2BltUPyLwRp41zCZhc3cmV%2B85OjfoNzIAbl%2BX9Xv7492RZfitRY1irKq2iW6QojyLi3MImdxMQGOqUBtyylu7LmHjhJ7cLIwGpO0JwLhhHs9RFbCyKWM%2Fgavf5K66MEjOiwBxK4T%2BUw4BSST%2BYs1P7oPCJAW9JxkXD6KA3ITv9I9ywRbKntOfzMXFEvU93NWLBC5sXkaFKkOHyXEhC2ZAtk5NnJiCroU%2Fzkn9ipK7MbR%2BJtY5PgmB8%2BWNL8qClEHJ9ulygKcdOdognNNtwKCp4ig%2BmACvjwk4V7hbovvOg1&X-Amz-Signature=68fb82e1dc6ec9646ad8f00cdc90a27e2c12e4e214aa535850b34f27c23295d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFVBFLG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDReRq%2B8E2B7IotLXUSjK6XWDKk3tlKCjhqPzB4oUuWGQIhAPBqChUDa4VhyNCsCuLRZZiUfJ38kWl%2BUj%2FJvrWIQVxfKv8DCE0QABoMNjM3NDIzMTgzODA1IgzQgeMOvwXwTlIDI%2Bgq3AOWSgpGpgw5BWP6AIx%2BAgC1LvYcMFHgKxqOr7xv5fgpZhkq7qyKZ6ha9QYU8S4Xz75Jw0gO4aWkXICWx2TVb%2B1ov69y5UWIBTHei7G4UlflneodzCR5ROQnz7cUs0BbagIggwkYmiCb3P0xDUYujVFtBvCleF%2Fc5kPUWGs00t7aAhlwlvjFVru%2Ft%2FspMSWeHs6MQM8tOSir9nYeQBcW06SKapYhPrA626kjOb7CQ%2FyNpqqQb4eYfQNbMAykrP%2FRSUhWcPTViT7LGuDC8LyZASmKi86%2BmY%2BEyAxcvcHifqRX1e0E3emRXzNYgj5Unt2zHvBzw%2BpviiZICpE8R5lDaZYpA7qkwU5NTG7SyEdezZYT4n5mNSon91TiieFay6qw4DFoibPWPVQOQxQ42tFNgyiqsvLH3Q6swb01wNrBCUzvsX8Bo%2BH7Y9DhA8H1ObrbnJkqOFCuwlbjCBfL6HPawdKXx136Ot5RKlsBayy87okyehP%2BpgkRXQTcBHTrMV%2B4XQyODoVpU08Oa07tVu1HsfvTlzWw6JW8IzUApGmbA9g5JfBv4iPJp08aSi9XVwv43BVzoiHVDyEGZqSpkiayVyWVuLqEbIG8%2FKZt5hBslSyQDpjDOJqCEtEWThgWbzC3ncTEBjqkAUkNvU5fVOTjbEvZZr5p%2FqzdWAhvqMBvSXLLkKVKPDFZMEL%2F96UQ%2Bx8gWKOhPYpu2LZz6k66a8u50Zbsler7aFQCcodvA0PWpOj4lqaWn0dmv6UYlSc2FAbULs5WVzxCO0MHwIjVbjEFJR%2B%2B3wScyE5xBcDd8iY0Gh%2Fd7BE1Kv0R4Svw7MQNKmWnCaKJ02nOlGbhR3n%2BGTE6%2FHEHSGDFw9RxvSyE&X-Amz-Signature=0a0fee5430af6667f057603e1d63117b53f67fea44837319a9d14714d5e5ffbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=80d437d59d69a6e8dceee95735cd632727b8b1e342345d5454a9d5f972f8aa1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=887f01113e458bd925d298f3d79ea9842e0280dc5642173f1cf7aab29cb4a0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=d3daf06e7d0f7a127726b32cfbee4ea0eeacf3e6584a19418de79e9b932b13a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=37224f4e145799f622f01d4dda0f1951a7095756830c42fec1e6be984ae167af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=88893b812975fc6c20c90563b70089ea16b85eec781e0888929a1c677ea600df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=d6693d51f1956a1bf484c5cdc5e2cca8c4a048864ec6ac3ba00332622979e649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=f1a578471266748456972722bc9c0e22ee175f8f64857b7c9d0820c287b4243d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=61ef739cc1f2b7a5d8d72c0e3c60b576ac610d0e9f4974734c0347f82bb2a875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64YVWHQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDbZXn%2BoWszaNzMABeG0jKM6ndzoxCrnOGSSpwEZWMDzgIhAO4jCYu8dQIY%2BQfYRa9JazT2bxcL%2FQb1QS41ymKF7I8qKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJsBFHJk851%2BmGVTYq3AN4xKTmlEP9r3DuCsZYgJ%2BI1uLpPiA%2BxYAfEKVXmLF17zkTrVs9jHAbmoYhFt%2FkW%2Fx5BCib8b026z3OKqRymn5t3a%2FTCHKR4lzMQtQM2PU6dwMYYToUgXgH7rPNlku0VHYAceQRLv9ZH%2BMQK6MJ2M2Bk4Xz087sZBa8zvTgOm2LdkGLSN9d0YEkLAYKjUbIfy%2Brapy25S5zFNxlxc7%2Biifo5hK%2FCm90UDyBLJaG83D2MY1NAIJGgENW0L2OiWWC1N5PIdgXkq%2FEb9bNx4xWvc4KAPIr11sEJSTROxUgKC2jFZIn9SfuRl6emHVskppyfye9ibyx6HptpxF4qHjB%2FXTIPX5pHmv9Op7zk6G7EjgEUaLD5x3Xh6bvlrW0d1gUjjyO%2Bf%2BVPS4KOc%2F0fw7Btb3ZKEB7PbLE1qAYCs0%2FNmBzqRqW3qYVepJGTPPqoezBeVrbg0gBkaevlxFU1biQTlUJynqoW4rK3Prw%2BHMxk%2B%2BLTUmKxxFl%2BA9ACWq78uYVZuiAyMZ3LZY%2BEeFh83s1LK9vk9V8WWtppu3m5kvdNnhkGCGn3gm0JtsBdR0EgLyExGR4%2FIcXllPq9wbRVXU2fAn08zQRUoYpyjZlsUanS%2BwA8SMhWtzWWlvM63I00DDqnMTEBjqkAURktqexbZr733DxUiYRCJpgv2%2B2wcQLUnT6rTdSyp8d4rfQDZIS4Fu1DpSS9YGsDR1kwnhtw3NAeWOK%2BpmFyB3%2FA7ApPLS6DsyH%2F4G914FaRtPywZvkuS3pQ89i%2FKklLGNnwCvSwYTXUg4q1tRfKfiFldwMiBZypjcpcZTZmn0klx83T%2BEx8VGMkclIw0grM9uH1F%2Bt7sbrlkzSvwv03fsY6oKr&X-Amz-Signature=c8bb2b8cde84316f6799d75f3fa34ea5c3eab44bd0c844b0c2340221c8be6d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
