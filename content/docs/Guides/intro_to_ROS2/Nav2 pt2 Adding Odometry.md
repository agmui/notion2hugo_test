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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=85b63a17d31dd723ca8f82f8a682f6f09bc13b3dd31fea16e2e1a823cb9b1652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=faad4993cfa55ef1c14f3169a565a4920effa81284f57d6645648bc725783598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=99b69c5c77d73db5a7c3deaed7ec4f190af778bc3956e06ed5d1666e140fb57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=c04149624d7059138ca24cdce571219e090f0ea1d02676f1ccfadf9ed1244240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=296b3160bad5d20ae40fad32ee0e12459daea04661fb611aa5b1e6ca3594f057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=378e8beac0ed44f16d95a9bb907fc327ff729cb7bb42b88f7e4224611f36b323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=9350f3497a28bca0793003152c8c461324d40b48f97081f7f439d9cac4514e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=fe01d7a326a45d2a9d82686e5d64585bb22efcdf35cafde1cd3d93fb2f175825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=d65cbdf75d43113e7c83fcc0c2c47722d38f42e06767200426672051680eb369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMODCFJJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOCmrXomk7FJydjc3WEFQKtHwj16k1atOWLdnLl4qTCAiEA2BwbOyC%2F%2FZu4jdqj5nM4dwNRugXHptGhketAA8kqO7QqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD15lpTVGRHOYHu1bSrcAwRVJQVJ%2B9bLWMnli2GapXjWbs%2FmR92e7rpdW%2BF5IP%2BKvdZ0KPOJaWB7%2B8%2BH2dvU9vYvY%2FsU17LTVfRw2TJBkqSkq6f7kx0iHLi42e1YyCxkJnUVaUgxdSogt9kKcwZavt4rvZQ9jbU%2Bpc9ZkDrXePo4ifcydKo8VWlVKN8V6dmWfhp7DgHZl7uteDFZ3RkvLh9EzfYFGTRpufPnDpuo7RPRFLwVibIT%2BJ4jH9ABGvVYTYB%2FSipeUcefyYdo1CB9lewGB3FAJlk5rfFTMuUE1Tqvc7mTta959UIXYlnwLNy22DmL0ufy6XjtTQXeeutTxZmeJQhbDJeKW7RQnIbiwwUTo15hqpwN5DdFzhJmwPZmHL0EfIJiNs6E5ivAW5B1GHWpp3qFI9aCuIZQoaE%2Fjrzpxrok5%2BcV6x%2FCXIX%2FBrdbkNoLbViE605RajIRAizmQTxMZE6SuGQkKcRy3c8Mdl7OV%2BAC3aCqq86Smw7VslznykplWJNhIijmlf85nKhhuQl%2F6gep45EYLnyUSLHiJzKWfZBjNyQ3fJScbWo0sHopL7C5Uc7vqinSGPbhEhr388rlUujEZYj1NOHU394LosyEPz8l8EI4us%2FbuDt44H2kDjk0Fswl4WaMFne%2FMIydrcQGOqUBXTh1MnXT5af%2FwekLI4FZZON4r75p2iz7%2BFC5psojCDGUZ9LdCE%2FBnSIykSRjgM17pSPmDvS7FvlpMqE%2FIyDf1a55Qif3MHylfnr7zcPexKK%2BdCjuWQH5UIc8az2HhJeG6DlsaTnLIDUtr%2FCoiviv9BGeuEim%2BvnK5vU9KSIdqUPjiDamgvxzSF8Fp4zHp6FaUpMfkPY%2B2zQBI0jgfY6CAyGjdlw7&X-Amz-Signature=fd6779eb57119ce7566707d4a98ea5339b369b775b214e035957de63f6e9ca8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZXR3AG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZR%2F5dvlsm2LEmAQ0X8UokPxbWGfEESrdcYU4vm%2Fp7YQIhANVVxxprqTYcaWrWbwVPh3Nl%2B0Z5Z9rzpRVLsbEDi6%2B1KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypa1D5Lrzl48Wool8q3AMdiEksr2i9L814DYtGiRyHuh4c9NVbJ74fSFSULRktH66ZSbwPA3swS%2Foitm00iuUcg%2BRX3q8Bo15q%2FfytEqrFdVU6FpAOESmSUj5ErrY4fHuSIYkm1zUsAAOaw43D3t5fWYQxlBZmEOP2OQTCDb6ScFubIEPgY3lnpqaXOIN3Rh2a72Kxp3AQrKn%2FhDl7qO20aXJh9hFB0qWFPZ1027AHUIsHR9sh7WP8iHgWDOs%2BnkbJ0O%2F714aizoytZtva7%2FRdUCNXH87vfSK5Pjpr5tEXm%2F8vCcUldvylBJQ3sodMWpYp145Ur3JFTjdWP4ZKMtMGhRSTHJM78Z9HEDBLW1dOAVI%2BpAesSTodaRKEdzJZb%2B4WQ1xV%2Bcu7LpFvsTy6Bbg4MVWyZARld5Q69fqeA5Fj2b72aqSoI1TQwCYTs1TMpOKAuMSTxG%2Bdsoj9Z67r%2FyyyFoq100N%2ByA6ZhfNhqf%2B5c2dr7T4LPFlapHNjBshU8%2FSV%2FGaKQ2c31OjkN1DfEFikbjpJH3qNhEm4xL9RB6GEJmXP%2BIPd1X41Le%2F8lOLTnxy%2BbkyxCCXgKnZJq8TvHqptUv%2FhLTrO0HCyuNk%2Fz14RTwHFlz6szxZEX7f%2B9Lntl2iOee8n03jEpiGopjCmnq3EBjqkAcbjtB3kXvkISNot6lTMtlRM8C8FJ8RNIwEfGjGeblsRSMCuqSubdvAFCt7EN%2FGReCXRNXMhl6fj5Ykn7KrriayhuId1Z%2Fc6dM%2BzMU9kwo1eB1%2BOdqm3XlQBG9l1vLyXmBv4diqTvlBxgzXEVpjQQc5pnrMMmiUVFm3DI77OLL3uYVoDFNjpGsHYjrBFOTw%2Ft3Ymj6GH3Dx8sPobYwoxn291sSOG&X-Amz-Signature=89935624f7f086d69e3cd096094625da5b91b3128784f0d3bfef09757ef9e3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=de253c455c320f78eafd2f9f76abdf0500c519bd3c9715d2b6b6c8a5793ecbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=3c4d0e81a5efaf67ec3d4062e45b89d62efc2cc1f8f0878468432cd70626b7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=709e968893503ffae839a582454bef8c9fb33cc6d9bb329637ffd13da86c9dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=6b5f4c51dcffc04c2c9e3cc9e313e249acadb6b942edbe17e81f53c79fe52775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=14f295b59157b9ccc39e1a1ec8468e0fa314338360f7aa332f337a9fdd433567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=4f5dff9a275013e2ade72d140c370d0f5165b28509a658002720b587b2635d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=1417d04e304e7e9153ee5411199aef7f4ed8fe8c203b3340607e4c5850a8fd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRKAWE6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjiL%2BP%2BUeiOmSq5oXf%2F%2Bi3bwp96eBtQscL9kbLtqSaeAiEAyAkrb52qlp4HKHO69De%2B5hpe4kbBidVlxGRzgMFhv8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH95vISQ0tQbpZ1LlSrcAxdr%2BsUfdLJD3I3MaI9uoLC2qYX4fsyvm%2F7phWWaJj67LXQxjnHuThJ7n3v05TkPmtoaHkV%2FeuIJiUHppawd9Mbl8ZIzvmHNaK5ddDENHfshbRcd9grRQE2vGcYj1V8LFvNSz25AAzh9Q%2FZyV5CIUP%2BRawTyO8YRdxPiOqOROyXWRNm9Y8CcSBPGEjYABGJ4e1An1doNa6gshy5f%2BLJHvZn2sl8nK0pSwXJmBqTLW3Iv7C8NGS5wDdyAZfWDT%2Ff9IWejUoFEbv4KFHZ3q%2FA%2Fk9%2BHZHZ9ePmdDhPsuCigJYNEmegiaZvXlk42K8D6JXO%2F0QxyTCAG%2FOOPoegZCc8ch3uEbqWqGgOt4EUboY97fxUAJ2jqxAEe9ME29799cib7CXjOB164tZG39UDKMwkLWGGR4bcUeGiMCPxptD%2FMU7UV5aDdcUEVz6nEfRKZzatmneWdspO091MidqoAq3V6KWwl24z9QxXnAYKf1dJszZzi2svfOiNfBpdXS6TkEQCH5uun4PpbuZcQ4C5Q31QxPsvR01toNLPwVvZjm7DpTIVITwFtdCjz6eRLnunOzqxOw9%2F00ibR5dUjhtB6A%2FTeZ1lQYyaKuXFAtsLOcrpbGxJeKWwcZxyJSsdUpZbwMO2crcQGOqUBpqUbJVRzEvzoo2UDpPaN6KNnfnjc5HO3iVZkGHl6po02rgRSKOfERc9EXzhgH4Oy%2FlM5CxhhXECdE5v35WV7PwPiS%2BfwHDTCzxwOSs0TuaBxzV4akso%2Be0t1rqN%2F3s6qc1Kmeua%2BxF%2F3k%2Fe7sDVHT09xxij5LOQGTbSbUG5EJfob3Mm6puYsSBneuELblicmYcanEKCW3anzi7rHN2j0QjAzdTri&X-Amz-Signature=48db0ead03be01ee34ab5e8b0d415ea698dd63feb28b845815526274c5a052a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
