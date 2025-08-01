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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=bb2a1a088150c77115fe42bd5d6c8553fede49b256d98a9eaefcbefab9e9e10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=a46c27f9d349427109fce4a017b9247be6ce8f90e5cf8fbdf80e122d760a70ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=ef8d66503a9fd13c2da53bc49deffd88823ceee268388770b324e7b5f3366252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=3f552bebd8ced57d3c03325b34d2184d06a1c51440c0250e4ad5b55b98156913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=5bf7b49aa2f739009f0e7128bf6174b1091fb7a832f61d1fe8d01d29b96333ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=12bb36f8b4c0bf6b5e8ef633ea07da53fec83cbd1230fad67acc9478b64835a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=a3142f05299b79b475977a11a8c0cd331abe925ad61490b35d044367cd1f4ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=e225696df5b002315a608345e95a0efa5a98eb7cd0ddba8b0ac5e7c48831fc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=b9da69889144839a458bb1a61c874ea14802311a6ddc920683dc5ae616e44239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BL6WA4N%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE94hNQ%2BJPXTLI3E5SUsliRqijZk37tKmCDQ9DPtmyBeAiEAhNyaxG2Toq84zfEtooYiK0eTBdCozqCmDMyHHc52KH0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClxED5CoYLQ%2BqMG3yrcA%2BydgpUOKPnV9%2BM3KkIb00UHZNAhple1jXEwSndd%2Bk82LjT2DLP0daR%2FBGe7RsIkdy6iPemtUbxhoNGBRrm%2Fl7N6i%2Bo%2FjMDaZryS5smPm4rBOdIhYi7PxgcibDBaOTgsIyvOKXSENg0DhWe34trUZQ9L%2BaJEyWA4mTBwAb8EAaBLmRW%2F7df%2F%2BWrwNEnjviAPhQ%2FaSYV91xrOs49PMyX7ZVkUIajRIWE8ANM0W1IK2QINzLic%2BTMH%2FzlvfBoLG%2BF%2BKzUosrjUWOo5Gh4ThnbE2UiEyaO4zrGQDyKk9ldSRhvAqcCyaYxPr9DQb4RI9zaKjwz1n%2Fr1efgTZq0CJxriCJGD9C3ESbJid5QLjo0QUIEbBE79YoXLejSb0NuyItFXuF7DkFsSkNVSBMNWb%2FTeyIba8cgLFn8c8brHF5H3mlAzNXyS0aG7CCOMc3R2VijP7w7StZzs69FRV470UtmCLVpqZrlmUL4E%2FhddM2gPts%2BqRBzJCqazqAAxNfRi2%2F%2F37KnYvo8Jc5gio10dIETzQt%2FWAlBUSyDxd44WLBVbRS7mk%2FYxqpr%2B%2Bd6HIjK2jEQSHPF1%2BwsPAV0O%2FfCLomeWK5oH5X7OTsHy7xFRKLkKs3UOeOjsJ9nWKfzRcw1WMNi2ssQGOqUBk8ToWA58raJGKuJjgxqo7hW4WshnDVy%2Fym0KKMYdIMUdvuLZ4PaAYJj73f4hFoGklsufR7PmQxznOXxA%2BfPokPG4pa5THvmmlL9wQIGpbYzi7dL0FEp9ExbIshjR7USyzh2I6mqSI4Z7e3lYit%2B2qE18EpZ3WmHXCObUIioCoKhWJoGgA3mdK8JgiJx2Dlste7xU9AXi1AjtIDwQq%2BJcO%2BA6xPAD&X-Amz-Signature=0694457b860d8f2c8975d2ac6f0be9d3d7a310ccfa4d985d0e8dd868d6a7598c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JSI3LW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCal9YCjKB1Wwti1GpQZYc0P8fzMypeuK2v0eXOa87EXgIhAOB3JY1IKPeiIjSb9D%2BQYiOlD78w55JWIHePyelQcac1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOJbz8Go5Mg7mfGcq3AOeRY8w5tz4M7N%2FOvNOUin3H1hPBWmwV7%2FOLmdFRiA8%2Fd93UkUuEtYQ7GkAatKvIbibP7HxjS88fPl4di18eIPed4hrwAHZzXccznIvoioq%2F07i1KQ%2Ffa198XrJI5gUPyiSJ3E9WrTd%2BCLc4AKco54Nt4uZlyKxanp6XhsDalPjARBDyWdhm2uzPEDozW8Gu227TJvpUf34aS6MtipJ4RZww7HuwX8Nz4l9s8yVAOhlBaZyjQiBSHq705ReYnJbfBoJQkKLfi7EM7pGnv6AUjpNLOwpgeDQc%2FmHsf85QYovIgw49F3gGOG1tHcEhDrQJE7lsI4RVwkpgWO7vW%2F2CWr1HiFWwmhmnRaIm5ye0Nt95oJrIYbyfI5%2Bgo%2BXBXoCtvLGPI45HI5j1wb00ZgfHVKqGaHpKgJ84QGnF6VJ%2FV8Ots4uJjwgZJ3dlEjVOWunmWuguiXHmhBH%2BWKC7R2RWekXqbyKwVM%2FcobPGsO8PdxTR%2Fg8%2FMDEHE%2FoTMwS7xP87U72hSJ7%2B%2B98RXIrDG7EQ1qEGgL85n%2BlFJoK2FmaAPDGEsk%2BISr8YiFkHh28Ey0MLnPmds8c61niCTwcYQ56PGD4s9AnhWxHB6fAc4rURg%2BMg0ZF3AZ%2FOB1tpcxhIjDjtbLEBjqkAawf2hP4dYhcLviQbuiUujxoQlto%2BpMXW8e%2BwJI%2FKqK2%2FVAd%2FSqwCfLcyV5jNfvA6zFYda4oc7youvBxj6jC4IVjb63WXWrucF7YzOZEnm3KJ6unuwifFam9GNsTDtd5hbcvGEcOfKcT8mnS%2FvRjblE%2FNRKyzc7a2TTO1nkZz5aLvDM2Bk1smVZNYDZwDTrXO5PaLzOqKe50pWZgEAccWuSfqvdF&X-Amz-Signature=60ad685da80fc6e13764e92d5ff4b85f4ba38f356be25a76123b176cc5d67a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=aa1165af864406d2d011e2c4698fbca87e921ba722ae4a1205dcaf2ecb26289c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=33fca4573ff493cfa363815418752dc47bd04c7e1d56783adffb827c484603cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=4ae0a2a020e835db357b4fcfd56a8586665b1f215bfda1d737b505aafcedf341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=f2235b96d787a2ecd7816762cb7a5d09fc09f44e1e41f5abe048aa2254a9bde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=66fa0f7c8ec759960452c0c0abe74e6aec5652d4a58531b0ce010b758a74a0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=cd3290659838b14df9a210d3be72421998d01c15f97e0aaabd060f7eb47eb517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=cb376b523bafe67f8b0ca1c572f86df6d90dfa1424fd4451b98c26003ff5329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ZENOW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwoKcF3dRsGqDzl4CrJy%2Bufc00RqYUtLqHp28vZrO%2FgIhAOK1k2ORXHPbcpsvs09Ci%2Fm8lnSQNeEhVVtsUiVkLNiTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypQ3y6SAOX6hTUmYYq3ANfmc%2BM%2FF5bsmpEdvFlVDw0zrIO9AgafDLuWW8d6mAEOxrqJqilKUqHAH98MspFyxj5iTUBNqhipnI%2BI1lkzLBIxq%2BE5Td2oTmmVDePJxJnuJpbYRvokn%2FNo4i6q2IgTiI%2BThsz2WcEjx3FhysZ%2BG65GkQaksBJ7UWL0aYmoVCHTJxnJMvDhu%2FjEZL9P0wkeJcm4xDXfQQdm2e2WDtqG7lSp%2FCsLk00lsneL5oxuovP0vKS3hdFd%2Bk1HuM6rMP1cgZ9c9mb8mZ1eCI2h4Ow%2F%2BJVgdTWzaNn%2F3TsZsUPEhCJgboREmpm1rOjQvKsKYLPTXQd4SWnBzaJi1g01uqU37bE84kUwnb5LwIpmM5%2Fv9QytkPAt1TzQ7ua501qF0K358BorQjT7EqkqiD5jyS9fJDqneQZVzed3H4hueq8A6boWvix7x%2FOQeci3j2CNC%2FcvcKPf%2BaJ9VTxI6Y7ox5LarauCaJQUC4PCu5SNoHEB%2Fv9hVlDGbg%2B1q2MHyhmg2WfEOmOCW4HTl6jYPR6C5sVE5OGbSticGMlwZ%2FAvgr5nbwNUGias9%2Fk67bLJokEkTOIcdydmVBJDw01JWIHa2A1JOd6plId3LzGNp20Q5iES6O1R%2BClZcgUe8eNgvBnmTCPtrLEBjqkAfi0DZ%2FPBZUEbIBqZgtbaSKLS4GgnkrE%2BHIo5CCTp0Sa0yrerUGydYq97wnKeiwp3Zmi5kzAnnvvQ%2BgH7Yg9FHdRwwx3W64O6gGxoaYBtt0eXSQ3FEUPQlj%2F8ejK%2BrIRgaK9Sc74AoLD4BTKAf81J%2BKEUZ57PD0ITWsxhMYFEGgtRAuFALjL5tSEpWu4dz5iI%2FgWnj3ko87IaIo%2BRqwRpDsn5wfF&X-Amz-Signature=27d4fec4a59c8c48111ff1b2270d2aa72ad371e412e443f8d24cbeb39c12d944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
