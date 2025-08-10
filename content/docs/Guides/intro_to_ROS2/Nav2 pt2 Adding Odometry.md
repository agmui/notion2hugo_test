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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=7b22f95bd0847eec1e3614133f48fcd3c7e379fd3684c292fb54be0ebdc89f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=4e45dda86113cf8215be59737133de1232e58fd757cf76b5e0f2f75b752d9bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=b9f01d979b8074f9dd2691fc953a5fca3c1e8d513f9241a13624642a9427ed72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=891b934d05dec44a3deb689e6c656cdbb3f1801245f61543143dbb33e86aea7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=4199dbcd9f266710b79da1d955518412ab0fdadcdd3fd78fbb5e8a05752b8ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=ea30ee4a841a95a8b33309ee74ee4b84f83250ab9ea6c2e9a2fd0ab0f1105c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=85351cdec00358b23be1cb7a25b46133b8f06bc242c7334d095d506b4e43912e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=391ca840d5dfb079a67c0f0c1e1f5c630c87846b91e8213e1961a56bbef5d796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=b282c286166b33a4aec58b7eaa843724744d3b87fb1ae557972fb944bcd8424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAF6YF5B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUIRPxcBR0awCXfnHW5OLc3EjivLKgj83LzlSqh3l6gIgJ29qEBbjJ1Qg%2BbNpTBBNTnQ9lzJx05UU6gEvSCgKxBUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoiT6lnDbRD4brdlCrcA4loAoiC69gjKiq6KDmRrKenwgRVyC2tJsecAOyUYMR7wRsaR1XKOeRaE8hgFpClf71%2F91f%2BX74zHF%2BsNJKmpzAruVUrccktrI82Txi1Im4TH9fUVa%2BNRnCI4L4F7FVDSH28NU5qUrm654lyTvpvKhNeL5AIn%2BCKWV7ovy4eTcXNs1Kh8dmZkCkF3IRn9tnCRFsMb21ZWaua8OG0rD0LoZlRpPbmv8LWUByle0mIpFwLGOXSN4nMdtsinIE7pl882tPB7YA1Yku7y0lQ7qNwawCJ2Jkzv%2B0ZTCu4ZV2ByxmbGJGfyBqJZtLRh%2B5NKmjB3rv73zMEXwlfmhYtTjDElZH2EW%2BuHKuiMH8I1swjy8tcbOy7vW1O8GxeRcOG%2Fi84y8Fh8GEPC1J6Ucdtx794oGnh9wS2Z6RzKU9WEmlK3yaTeWcNhtElT1vmxRmdmVCD1Nx4s965M%2FkB%2BkuDiz2dSgADK08vczKwTPCoc6mLI2gayU3kq9wghPFIKwSkVRhMpC3awqtFrQvX2%2BkJAy5sFFUEAH6PVJLSQ4%2FEgrihACwKdkej0SGRxiV6CW45gdj6jMF%2FvA6YLlnsweRWYSju4PKjKtNdRvD1Ri0kZ%2FxXitHT7%2FFkgDcGo7p1hrCWMImz38QGOqUBS7Ga9hh%2FnuMMMh5DUxI0Y8X4y5X7ULSudTJK6t0A9x4puxQp0HiB%2FoduDFXN8VfY3zIrJdzK%2BaCz0xhdeqGhBlXfM7Zit4GuE%2FmcZNyF1UtCxOqh%2FVpz6gr4rWnVqELMDlImqeemm7Dx17wxD19Ty030rMbH8H0rJMeIr4ANk9cPGBVVNuCE6NI71fp2mxsRTPRduDSXSeIS9vkb8lAbLcBcb%2BO4&X-Amz-Signature=3f93970f13bbb315999bd41cad929c1f8db94de3f7753f2422fdc89f6698703d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZBD64B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCp2TrHwmIl4RSbFWSzy%2Bi%2FiZeGAbk%2FuQckk%2FdFPP6AIhAKjn4Op6iC9LA3WRQCxMwGTUGWFK8PPNkI5PvcUE7P5TKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn1%2B1IYcpWR%2F%2BnjbEq3APZQwv1Enhvo98JuWM8x95k%2BtkX3SsxHvqPZg593wHywcbh9Q6wjjc8mW7xTpaZd5TLylKnOBO6SEJxft8Mma%2BVngOVK0v5m2VnCuvEVvSUefSCCYTO8tb%2Bb2oeKK9i5lTM3HBU%2F92k4wWpex1DlU5uWP38eaEoMwmqNODxcTdyfFD4P%2FG7j9k1DwHegqfE3jqQTqzQzGupPmyY6kPtBpgxU0f7ivaLa4sUEp92XKn7kxwHwN1I0PUXLa3SA7joowrOcYl6dDY114zCpA3%2FtQYxgqlSby7MFTAWu8QVyG4ZdeABnUr9cwnk3vM%2BDmH0zFtxm7R%2FAKuPF%2FqbOaefKGrNAxAgxJei7LKln1kc0VMdjOh7sG9tr3UnhwhX9BsAJqC0il8GCqORgU9tYJ3DVsw7%2F0ja3L%2F%2B1xUq1CGr7GROif0O%2B6uyCiPJB4umebWT0lCvwYAFmXnlStNgcJh94LSeI60KCVTzotgifDBze%2FSVlyVAKXkLL1SESvruiomUZCmkIugYn07u0GYxO7HJvtOJKX5nbebLLjvlGDUT8W%2FSjqiqobaiR0uFtUNEgvf7lglQa3EGPsmWdJ7AoKSpRckZlz1IuMe%2FJf%2F7MQzOC8CNY%2BEuDRwO5%2BSgyRECszDhst%2FEBjqkAZbCDWkCeUiO9Etb2C87y1sAXgE3sCPs1V2VWhJeQ83x%2FL3T7h%2F0mLu392FBr7N3oSsE655jG05T%2FVa%2F7lOYbOJd2zCsV0%2BmhbjaRehrf%2BxRjrSLNz6A7KoJ0QnhUqOGv8PZUQr9Xzryqhgh0TPCIkPtuhC2MYR1TPxUIHn5wTbB0hTJJsvgv0ZUbUYfrIl885UkUOtNqmsVDKInwsW%2FiNPZjuhr&X-Amz-Signature=ee7e439b61868df27977d8f07ade0b713c9d269d9162636d03b4a4506ffb2f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=616e7354d23f69ceeb12506f1d9179ece2279e01555dea973fa8ec88f8df26b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=c3f48089b18104dad4d36e897b06f110754d7819b8d0b816d0afc296739ffca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=134f6be9a9afddefcf9793f6b721dae59e86fe7730b59a92cbd305338fb12e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=7f286cefacc077d48fa12e1cb1ad0a9e59ba54d198708c043318a2040bb6baa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=98bf2e60e41b65930f97be2ff03d4e4dbcc8eb8314cce8032df71c7fb3855e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=52f5c773930fadefb73a4badc3a77add22cd5fb3976d93628f553a071d08228e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=a2f66b8dcc649e2f195ba04c00314d5ca8344e34a560d8a81452201fc5a49978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=5f370486ce9b613fb871b3a5fde66c590bd7d780dbd19e01605de6876d282c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEQUQLS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOY%2BDVt63BtZtNMUyER7nUyZRAHzxIG4Uj8E6VuFB9RgIhALSYQp9ahdKF1caJfqtK%2F6ohCj5%2Bzyw%2BWELjt5p3rq7dKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqOOWFT1LC9OcckvAq3AOA3zv4FR3PhgihHfpz4N4ocLXSkC83nLRS7zljayDPwrWAv2axO7hty8dxpRVgH5uacs%2BurLPXXZYuP%2BrnXrl8b2%2FczPwv6Ff2NKIQsyEW6%2BOIYRdb5qoTN5j7N%2BQfHMLKHm0K45xi0SoS5k1mT5O9qLggE9pJPOjZ8mrsH1U757u4CYpuRJHEABRUVwNfRyjqx8hprfvycDhIIiUp%2FksQGkxJBUYrE8dLmWnCKHZgg9W1uOsfcOhYmpjpehNZkHQRoxdkPQgNAgPIzPSPlgFA9%2FXaU0%2FYwzqzJDK%2FsnWJ291dVGuQwbMztaXFTuzbxoWQpJLO4uZO7F5EDIYT%2B20238XDmGhgORDl0qwVSU4CdjPJfwoH92Jj%2F8f8RE5VfaJI5DfrWogIzRYWOzmucgr0A4YLRJgF0ZXZFMDPGPUvuZyAJ2NfL3MZY0MwTR%2BX3Zk7KdEZ2nWaXxokqRhcqPnru6mkTot1cEZI3xJNNcMrYopV%2F0qtY5CnXXNI4BIRWRIIASKWrr%2BA0YnTm9a7QsVakrU45%2BXgxBeT5VVgsB%2FHBxWRNLvG4M387A9D6csvFGt2cX5huB8BaWD7Bo7wF9PaU77kAOb%2FtepGcmcYmIOT5v1mfSR3nBB9nlnw7zDwst%2FEBjqkAQfCp2ouB1wbPYjS5UimZNDI86ks0R1E%2BqroDky1Ji3fakyDF9gaYfVYK2Y0BKAD1jZDMxt9o1Cne2dfLNc00sqq%2F4wQQf9VYufqXvsgVdkXpwxOgXKMr%2B09NjKKTrRXh%2F%2BPaKk2buyLx%2FWZurCc2I9WlIVlidrJEUnpZHIyT9Cxnreq1OorechgGmTksfxmnXkquV8pRs%2FRsXZYfaLeomYTPs5%2F&X-Amz-Signature=570ffe6cb8d66e4f61e1dac513ae02702bccf073f8a10ddaae6b22fb1651a66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
