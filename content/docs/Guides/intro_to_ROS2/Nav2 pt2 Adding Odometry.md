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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=6233086e0e7eaddc19a6baaa39fd666281831e1cf8de49dbf546e8138095d1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=5dedf5de7a1781c5d9625bff84c5b8062cd79940c69e13db619a8754ed2bff6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=2f30eb72e9b3899a65e364d9151d602533385da6f95ed5ef57116de6dd8435a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=34de82b0c382476da05e37408ce09cf7a1f33d466ad840962752fbe22b6683c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=20e4b21b0c2a8eb2d75afbdc28a6313952066ba9fb27c0ce8771dc2f823e7be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=2637ea3c94e0646a1c21ac587514d448bc562d4b03bdd9c7a7bba0e223b42492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=c99f2008896e426f38c0664d7e281770fd6684673c7a7193404d29b276ee3b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=68d393e300edebc7b57365f050b49352fae840b920efeaffa9e558a09ece089b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=d0bb0d4ae112da67e79ab138390481bfa0ba2a13b632b68d3f339e72b73a3dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6VGZJJ6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGIzd9BkOUBhcMBfOOy5tEcsAuiwQzlTN%2FEdvr2HEjJeAiEA5RNPeNecaRwYJlFYl2fiy4zcYeB8CWe2Qjkn%2BTwFa%2FIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDZOJRe3N%2FqsKjQ7DCrcA2of8MuIz7aDt1JWTZBJa3AE%2Bstw6T9WZGNWcnPSyks4L4CVQL2rofwArpE83eSNH9we9WOHb3yYc9qGqM0VigIQs4U1QLiBGI3eBKVLa1W%2BZkJgjGvnsCFl5jssxIwx2dqruBSARMDdh8uNa9BDkLlxZGlTA5JHaSPhyE%2B%2F6SKPDvhWuDflbHDUOSK%2FwfrFYLnU6l76zwMJO%2BLz8kjCKHj%2BA1fbJ0Xq6aMlPAilNlC7IlatvY9g5sENhHroL187Vvs0xU1%2BOwKeFwbltzm1XDF%2B81mk%2BtFUeD3c7MrqV3X4WKJFYTI8IvXYNdHJVYZGmuFA2tVUMocHyl%2FQxnrsxPui0Y%2BYPEfOYsXpvvSj6qwIxUIJl6vioApqdBfFcmiYL2R%2BerL13O3eDpoLblpydPxzT9E9S6PFEIbZpbkKrfMCBrNBYenILYfuxO5E9XEF1hKoIL5%2B95jC1nF6F9qEA91XNAoAcTfbAWCNk6lRTcxO3P5bXBq%2BmrZDHg2xbcazRWFAR73aztkVqSQXBQTUXdFI3eZ%2B%2FdE%2BxX9QVa0jpw4jw3n2WnX4%2FxYG711HPI%2BTQqB7%2FqJ1nJ6Kul4%2BjgfkZy6BQClmScSpbh3QUpcYFuKGZRl5Fc3SU1P7Wb%2BmMNrQj8QGOqUBOiXLbXoBAdcq6VRcoOdZObSziJ%2FqdNWdiAOrCDeSAaM6CCJhszqHgoTJJPuslLvuVkNmKj%2FdcTOMN%2FkHCr%2BF7COlp6Opy%2Fqu1K5RbFjOcdxxWb41UhTrdyfMWEfFpXk%2BISF3UkhoCs7dxKGFEry6UVIMJZPbNHE1DsP5kwzYJVZwb9nep8a424DUeDKewfhJthJ7RAjlTiR1CDuAv5RZfjuShxj5&X-Amz-Signature=f690b1e2a211558837c356a06c7a10d8b003b9442467eba2167e8d4242221559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKNGKC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEOnWFRKqb16YaU7qfmSsO5hmx3slLx3%2BHhhZPHhbhZbAiEA7WER9Cc1loTctqo%2BzETf%2Fado23yeMl5xhm9AvpvI1osq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAJ7CsgyR1o9ZmWb0ircAwvbCTgC%2F%2BvbhdiWBL7gm0us0AiUO%2B2z5PnDqAI9TWyHdfUgxwcIrfKnMGQXAeyRwEHYzKPrTEMbdl4b79jeDPfAPYhw3%2FwpYpsY5bdcg6Eky4P9NXXRcGrVkBl3QlugdEsu2rRW4awKT1%2FW4uaRGIN%2BSkdRxeaqRpjgDDVNQm%2FFNl1wb%2FjWXzyFlPeuWr09hI638cG8wxbX4jSXRwqVk4PQHPZKtAJW40YBA1OIYOVcQtQ1bIQq9NkBi4L2PbRmRABeO3fsoyZ%2FgrSTxjf8J%2FwGmk9WkUwJGSToDJ0dnNitxjssMRMzmzboQ6d1YzFhq3f5vFzP%2BGrOjAQBUtBWImkSyN0hg0n3mOtghUROOly9aW1SUZcDrxFxUZMCRqllzkToVXpzZgBTL87nXNAEALghordDVv%2FXbmaQhbomCaxpcRFLj0NTvtPIoGbxc1L6VhnYnG27hWWb6hW3Wdv2sfHYHFgCFTlT4Rr5bFkkTsd4WFqw%2BXRW6Oi1my2Lz54TV%2BEiEkdJym%2Bqfl%2BZN0pk2opR%2FwTaKk2ZJnu6fwRUb4Q4nlnEHqPmRc%2ByAY4sfU4oD1BuZbmvPr7JYO7vZtUENrld5x2UpBH%2BWQCduFsF92tUC5QFf2NQta1H9GVPMKjRj8QGOqUBPTiNNHiVle93gFGZ67z4Wh82KSDSdWOHo0Bfwrhv9pPAR6Vziqe3Otw2PGUmAQE9%2BzdTs8PJedBuAN9dLh0VaMwTbGDOpp%2Fn97KdEX6lvf3Z8lFqCfLE4%2FfNQHBD%2FQJZotbquPgeBem6%2BG%2Bcbpk4v3MIbauJNF%2BxMifnuUlwq8sDcdhY%2BIMMQViastRIgE49QnHhGygpVFU%2BIQK21C0q2j7PSYCx&X-Amz-Signature=3f1d8cfcf402079fdd03ca535b7c5a9aaf08260d1f7f8f94af26f698c6c826c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=932719aefc3ad86a5d3c921bdd09905631416f804f9cd18587352be69676809c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=2ffe26584f2dd61bb5d0947af5e87bccd8c332dc9906ab026f1dc5aa2ddff62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=9140b2f90fdbe6c9db4328e7f082dd58d89fdbf509bb4910d6a586893f74a309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=d8f676f7ddf44b24f140ce15edd7c9c3530796924a60eb82e0db4ea63613f73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=33a64438e4c681f08f4d0ebd696bfbc782af6931982e528c257f8e30c9379e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=fb5566d9d0286243f1eb07683a91a9b6e8fc1317914f5d4eedc1c2935f6724aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJZ44O3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCWy4h3aFl%2Fed2%2FdHc%2BD1bzJN0VIx0Q%2BmxKj3JfF%2FoX2AIgZtM%2BipBczjw1dU%2FonkcB3%2FceRlMA8XEoB3LZvUJjgYcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDHgfBRejvyBDNPbeSrcA%2B9uLajoZKrdhco%2FNSFyxKksRH15%2BDXiwb552%2BLc%2BM4hVn7invgZjJSSLM80pTLJ7RVp1DLBanJK7o6Gb%2Fs5yiH28a%2B%2BDAjjXHAY%2FFM96rThbT%2FyC%2B%2BW%2FMd4IgpqFTi9Aw65fUieantmaxn6F3p9ukLv9tI1XQtGBfMl%2FOlrtC%2BRuOxY9peSB2YIQ2facaADg%2FK%2BdiANqR9ZcsaCDQbs3g4Mt4le2ppvsEkWHsTdk4SEIUsqZkACHcLMD2NXmSdLsLc%2B0SQhtkOzWlLW5Wy9sspFWtmpUcZ2xv6T4oG4yyHTeg2%2Fk75LyolY3p3TDcag1OZ9pPbc9JCFQ5uUjXH88UkMQa%2BIDL1w6JdRqk%2BbJaIujdpMIuwQwFgALOH7WSgJbd5jUKNQI%2FyckjOW2LAfKDqGDgO8%2BIAxE8eodCSLcKSJhnzunxGBAmMPA6i%2Boq250sJAMCQ6u8qFS3KNy9cOWrnyiJCIZTd5aoblXYifq3lEcAaiq9zf%2FEy0Dss1TAwaAAsGDoUXFAjhHGgtpLs2ea4B%2BuMOjjlyF5Y1Zjs4frn8pUEcO4GzO6xAeceqFp33muBPLKUmQfuF%2BLfOh%2FSFTsn0u5NsmXQp5%2BaAqgq19Y42q1bgSh3fcLmbzmXZMIjRj8QGOqUB206pGsmnCqMzclBi%2FEtBUjPLaptFjMws26sOfA5cT6ya%2FKPskulKE5qywgBoVbVWSKIzhDg5OgcqkqZGXxqRRycoMPaalYbko5TPehdsSqelov99WDcXg9LkdppRWw3dtSecSTCiV3M5ZZIhSR5G55wK5oBH%2FW2VW1yAosG7kmZgsJhZFOmcCG41rpxZn%2F8IAS5rMl5KfF4dbl3zRLXPWqx0THrC&X-Amz-Signature=e5bc2650fc70e56854ea85955455f55447e7fd537f5495b87109b637c864e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
