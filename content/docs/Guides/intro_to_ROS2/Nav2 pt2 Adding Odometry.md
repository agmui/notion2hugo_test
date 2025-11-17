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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=3edfa057d9db5f1d032b52b0adaddfa955e12d1626008cb4cedcbe204c82ffa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=6c285a7945d907cbe2c922cb3809ea8956268a723bffb21fb3887ec43b117356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=8826db18d053703dab315ee378aac94cb22acbd2dbc6270c37e7cfd3c910bd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=558c38ac7cd65aa79bf1b4473498afc37c113a0c9685e1b9bee18a6a7286daee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=b04ec8e06d8ba3fabe6766ec5d02fd665fbd3fbce617982b66d9708a718232fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=e22610870b64727994eb249db5f1d8416a726f48bf6298a5dbd58415a8698fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=20ce04e666ececf0fae1c7cca021958aee7c3f5dc121d7bfc8bd534d34c792e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=107024bcbe82a7cfc8af389c970abe74e68f22c0e20090554731711bcac8f0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=9a8214b3948d232bf17f5259c08b557e9d95347172991f168e65b86b18416de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWKHYS6%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm4XNIlzS9EMpdr2ZPHSv2inV26tj8sIgXWABC7CkFgIhAPwr08Do7lzrv3S9DqEH8toGenn30nlf1jDtzjejeHoqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTNFDcfboNYO0h3eAq3APYn3uYvuZrk4Ox%2BAI51nAzNc9g%2Bm49TxopS6KQAHHXCkgYhMjad0Dt3ZK%2FPDQj6lKMMJostB9%2FXuvGX3U5W0EEN79mLEZtqOBR0tJjtORf2BYXC9XLhDIrR3Hf38cVYTLt%2BI9B0pORGpW0VfsrG67j7vavfJCwLohEAEeff76OCEAwDCHopaTV%2Fyob8LcsgHUSwDYO%2Bs8x97DNl%2FMK4Wd7bjKJKwvAfi6VXSXAV03KgCHIBcusSMLknO64uaw7q%2FQMQ2utiv%2B3yK9xFxKqUCDbnlAjMzK7xWu6u6T%2Bv%2FS0STAG3DBsIdBqybjPOvyW9%2B9OiwJ2FuX0iQ%2Fe3ybdvN5NdFDZcZcaku5%2FWQa2iO861Mja1nmsy8irnTVfUhvY4ESS6zKJYSxO82uCS4NT%2Fw46fT3PfmOx8VWqaMtKgVxAOkIarve%2BdRdD%2BYGAWaCMTvxcLO4ZEdjr90wZ6bh4X7eYy8EeeRvkT6K1pSmfO7EyWRjR9r%2BBME2oLfy3TguZmrnngPn5la6IFipqZPv8brIxgwHd%2FTNULCCfZ1NNtphaVIBfPsmJrwQyeWnLWkoAV9E7PKc%2BeL7EPtTYgGCaW0bOZB3Sodxurkw%2F%2BO%2F0FV5bVIjXqEIEbfz%2FxRbiuTCW4OnIBjqkARZg3T%2FMgt3qbRHOGnqzkEiyYflr6X8XFxXFg57vCSElwsf5%2BlBP9yoB%2FC52XbAcUk43J7%2B6iKirvM36G%2FuOmelhB7fmW6A9YYGMj5thOd1yX9Hhlet2jYXpXLeGb%2FStEH6kaz%2FrZg3%2BilUNlv32tHk7QA6qV8Z7qFS%2FPCv4dX9utcET1tglUuLZejlFGszV5bz5ovPdmDwWT04Ot7eUD%2BeV1UjU&X-Amz-Signature=a9aae99f2ea8db449ea32f9375ae27542c0273fe1db1105f161efa3d85efd2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466777MD7HK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpdQQ3gI7nPZruJjGILAbm3a2rClCSYnpteMoC7hyO0gIhAN6mY02sOKL%2BHfS7cmynYiCMdirakYFkANnTFUbvYbFWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJKYpClEVZ1ddV0Mq3APonP0%2BYtIKWzX199cGjGE443ULPDi8FHpNWCAi42HlFhkTavxMTO3qpKaI01v0DNGXdy2LFJjwUS%2FXkT9kzRcd5nmqm0VlMV57i1qt%2FtgSAE2sdZC8SIxwAmodk0yfCbNuD0zHg2bDEag5LipvpyhRgDZL7GF9GRMVvXDqE5uB8itFLM6igT6Ef0kl0pW9LM72f1xBm%2Be%2FYuQbCt4%2Bqw2kNDABeMXPFUN6Kk8BwD0jL8gBSd4M50ImQEnrrkuvtBRsP3XrpFBaj%2FYKTR3XRZgXOqJUwoc6lT5KOK6dSPIGqGhbXYnnIkTqtQjyAvTga3cGRejJXkCbtxrmiyaOD3ABgMIXHsybpBKi7yQIa%2Bt5aYbV8qj1c37eGHiAcnzbkW10M21vms62%2B4HmvAAjHedaL37qrlqIkDMPP44%2FdtKw7OU2U06jVIttMQJu8hO%2FAm6e66k585IL3%2BoO12%2BBhH0Je9XrH9uUzllKX8o33w6IkPoa7qC%2BYmzTURtdIUOF7vGE3%2FOqpiH7YJo3qtAke6s2RiyD%2FXOVTwX3EYSgqaJA5emCwgTls8ev2rR7ybkJitNySTRYcp9QPRqTYxi0H2j%2BFLvXIt5KKAUdX5hBSVTJLSevgaNsJMd4%2BnTONjCH4enIBjqkAc6LzI3woQyZEdzHOe9LdJFH%2FOE6nKsEMJqkIiCDeHBwN%2FpPZxknHvXDhSqpOAgS1%2FP0lYEAEo2oywSuTUcTNYeZKtvPiSBVxLGGe1Az2Z5OXPh3PA3o8p2k8gJ2zOBeMTWE0QVWit1XffIulwro5q9XkXex1XCBFLDOIOpkImCjDUeDBZ7w5DPEq5Zvywug5XicIGjwN%2BvoDabT65Gcvzj7Sj1w&X-Amz-Signature=4c66f1e0e56127d992a2e1282f7bf0868c109194407370146778ab9c46c718b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=9af9547e26cd9b3d66fefd306d32a78688671b7215fb16cb34b967fae3837d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=b773ac49bc3de6cf3b23adde9572fdc2c52e6c44f2797b6e2827f5067a185ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=cdcf327dd6a05321f33ffce35e5eda38c03e158d911f73cf8eabb0889806c584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=6807f65c8f5e4b0ee61e288ce14b0f168822aac4d55c3637adf234201ef955ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=1bb0db0d6a86f19e0f7167f1bfdb00ddecb088025633791f2e69501d709efc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=6fb2c9fac60c4c0b132bb61875591c8df9aceaabf11e7922dbcac1226d794b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=204a8eb63bd95bb277853f8f1dde6751b1400b127e5fdfd31bf716186d56f6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=099dd28204cdd8074be29464ea2c21e4c40d63f56169f0b2b46cf399c1c46ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5LRDXF%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4Y2lukIfKZRYSSlBwvnUUqQ5IaZSlp7wCgjTOyQDhgIgN2jqRy%2BCMdJlRvIiO1EfojKumMSH7zmC4muN75UuB8oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm36eRgRbJ3BNgrhyrcAzbmkqxNG7xVIRWIlBhw5Dy49i%2BYs3LWPuc%2BbOUsEaBDzPNNmNMHFiYNnrN42rp7S39O71RfGhIcqmkXlR8IPupIYSj40hWyZ4inV0p%2FUmspGV2KnXraROn5G5D6E38OjtqL0PbtZaNHDLQqms1%2FNxgesfEEXtSkED51icwtRnIk%2BQ1WY9g0mF2I5eaFeCawFitKyGq9xYXNaDwlSL9y4G0cJg2dVTOYOiAwXD6hzHfwYyQ5uPpFJ7auA90CVuAvOTJbYfG5dvckikIoa4bRdpmAfd79XS9lNlmZKgB3wx50dswEueqqPJtdlFm7eCzkgvmx9NZlEA538w5O15iRWB1UTFbRuJg6rR23jyZpehnBsO85kcWD2fG%2Fy7H7AHs1f0UwaYyQkW57H6qE1IopzsljWu%2BCOcickw7kAIjIjRalv1rJRl%2B8TyL63iYQvxWjNafEPjWbu4yEUzpQ1zP9GUi%2FH5MBwAf%2BwTFmj8Lvt95y9ViX2vgAp%2Bmi3J%2Fr6oAO8ndZnQtU9lbnlxNFXzz5NuH0oYWNLubxcFdnFGSkncYT6%2F3qogixoJGA7%2B8ket11EQs2sORyAnwFRcXLBUISaQwrnTQtYzRPqIbj56PjxfKnSrZmOTV8rKezmnl5MP7f6cgGOqUBzy8lq4dWjOlr24MClsQffHhgeIxxQpennS7iHZMI4z2srJV%2Fm%2FcEi2vU3rTy7dohZ6iKVyS8gTcvuZHvTXI2imSkcRO5BkI%2F0RKCnynnKbNUc7clb9hSEDGbDKCVO0mDwEAB%2B4le9UHlMDA6yMFXRQj%2BAwkTrnTLz3h9vx4r1hbRzUXqe7o0kEFzh25wfSvIMj8uV5LeqA70UvbIk21Kwhv3%2BGAf&X-Amz-Signature=c744877556a4c3171b2b4fafac361d409833991d6badd4a1760238daa683dbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
