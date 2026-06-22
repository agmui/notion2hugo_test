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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=d0f9c424a26411f33d60e3fc6b2c966e401ef714ce3017ce44a602dadbbc8acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=d456e3d31ec035241edc222c34362cb87c9c42869776344014bb64df957b5c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=bf6829cc81101fdca0d643f72499eab69b8288bb50c66e4cea591b5ff20c6e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=680a99bd45f83e52ec61d1e351029800131d41eae667e0d6d1cc105d0d3bc71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=2186e28abb063b7e2e13168331c7bb25a0a5385a2e4eb655a58bab91061bc33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=0627bfe7bc4042b8ade5a6c820eb51cdae5f19134e771ca4e6f0e1b9e76722b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=19e0d6143b4c55d8e680e7605eeff55d54ec7dbec5aef09fbe4132bfca2c9532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=01dfd28f9f94bd983de70abca52e0d7c2c0ed4660416a7be519bd0ef5ff1ab44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=d7c94b9f3a4c8a0caf2a9a3ce77b7f3235040d6dcc1afe52094b4859f631ac7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NKARBG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHp2EDQRJKpBnUXZikTXnvEkZG8CTBRfqMdR4Ap377I2AiEAsIqwCEkF0SRj%2FTF0OhMJgvUHMI4NDWzF%2BP7lb%2FFYDvMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyUBDe0ZwEBKx2BPSrcA77Vo8SGIDGR%2Fdmr2bq2MH8uEEs1e4DhlC0xacHQ0xdheePNr1HEX%2FpnagOKGc3KbsxLjI3WIFVPrVW9YBkT%2FGGOzt6NjecIZFik8WlQ92M9kaFE%2F%2FFkls3A8BY8u3WI9RV8ziDafzKT5Dz2EzSdvs4yK5%2Buu97vyU5C5%2FVReNTEm5Ae2W5BTN6qunU%2FKNqXU5y58Sfqb2QVmeJF3oR0uFJ0bZU1ypbhU54d7F2CNjaaeknh0cYy%2Fd8nFiBHAO9Yb3bMsezS9JRLu0xyo4SUYtnyXtGujhMNZgiTXyeiJBoKKG8lh53ZgeDb0kyrajSfFctMKzLAfcv%2BsqWgvsgEoQML8sMCKetVtj8IoFcKhqYosiyVW2xU0dfaMm8U%2Bu0i55dlvVIltf2vx9uPS4W9lfVz5y81wqUGEoih9B4wEGAO3ttlPX0bTPNzs1uwhUnwpcyypfH1ywu37pjj1bjPBiqWO5jGfkKqyJCi%2F6jH86dwz9Qn%2FIAGugEGeSD1P06LsI0NyMLpPWnAv5fDTxlKzbxZ8GCrQV4BDAPyi2kEI4Ko7Kk%2Bb8g2k0fjM2ZzqqXUp%2Bi32bywoZsal3kzmqmDhZo7OHEeQnTnPQDtbycSmFHIuqXJCcdTy%2BesS5r2MNDW4tEGOqUBsMhYXKh6YyPDH2e%2BYqBs18yAR61nv2gmk6OJ%2B37WNHBQkAppCgvCpf13vgdD8DeEfLl%2BEwfHm1og9MNLQZQ50ZIKYXMSuIrkDLiswHOJw6i6KZ7xH1VZnfnzqBrOQX%2Bo%2BSWWj%2B628oNMq0Gp%2B55Fj4Cy30hUWfS2UIocXz9wRtJOPc%2FHFr9O3ZpvhQB92V5N0hPAgxdUO9%2B9D8IHHZTU6fzaGv4W&X-Amz-Signature=0186e233d952ad2d06779b16aab5022d4871b31906f19c5dc5a54193854bb0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPMEEY5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDTxYib%2BF2HBlMu3azvGdRvGcMuLYuIjkalnU9L9FfDaQIgSblktgtuRyWPkDr4aZYv3RCdVOhFw5fjBfXFcyP%2Bb3AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6Y9l7EOmfyrdSdrircA9sajH11oHKKDuRFaZcQSsoOVh%2FSnFUMS4%2BX65tVeWenVSfRRcVBz7XubHf%2FCGAthgOwjY2sHdVS%2FWt5I17cHGMjGBYBDolVRgBet8o%2F5jlwT6sOWl2Ju8gQxz96trFDuKVs6Pqb%2BJGl4Y6in7AtJRGMvQebUiw26Yy4SjAUVW63%2FFuCYnCK4pSzzhELrC3nBzgSF3dOW%2FNwweQMVAETTl5sslQSu4%2Bn6NopWKAA3Eyj90x%2FUNA8fPm0zZ2gOfAPP7xcFCr2Djsl3KD7dY1%2FfBnCBRDrm8KRaZAp2gDRZEFDFHgQUOt%2FUc5k3FDf1ucsthK00IVFe3e%2BVxoXR%2F90Y8xLB4CFpfxy%2FTjYzOWdqGDZEQpO4pk9gTQAMcakRHXOrLR4HNJ4HParkMGklOiJf5%2BHd5tWVDRO4lSkDttNHGoAJ3Y2HHswHNoWXO108CshXNx3zCUeJ3%2BUY5VF01vTscdhvmCRM0K5dZURZqKoDZaM6Y%2FsjDIju%2BMYL6lJfJJOovR4kncAhEH4GckczPRtTlu%2FdT1uefo19gBHTo9m2bFqia3jqlZnDAbloYWkAbVFXv6IViBnwCe7XGv9%2FiMP7tNVPJ257z1KVUOxy%2Fhe3lXy33egAb%2FGeSZ5Ky7%2FMNXX4tEGOqUB1lrjog8Z%2FttqVCd4Asm%2BHFbjogVdrkbZ%2FW5jlRsetj3mFLjXpmL%2BlmymGHhQKf3Dsez%2BUa9f4vgeJkmEdgiwwf0XSJXWrWg%2BvIdKUfqekJRyVCP7jDMKGkmLVOOyWXL6aNJT4Mg7cClcStZ5anBNGNOePwTkW8AWVwqampP52hCA9rOBYBWll4huPnCulvWwBC4iMoUqMy%2BB83eqfq0UHLG8gfJw&X-Amz-Signature=058fd0f1fd3724434933cdbcd108eeaa462f6b153ce40aaaa30f5d0ff3432812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=6cd49f0753fb01867ab339ca22a9d7844c009c26985401af92c2c6977b87d8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=b812dfbb5407fb5618e018dc026103c046aec2800ed009dd499a62264b13b476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=cea36ca6fb8faefd742042223d1cc92b9d6d2db5ac2f7f8a18ef421ddbaa375e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=8c0c8106e83f4387cf0ce92f685e54eb97c866a24a1d1a7a4c0fcf2001836451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=9959aeb84aef0f28061f6d1e1123d34eef8a50690b69e5e6b48ddd674364606b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=558427b87ba3850d02d13fa836ae8fe321342cc5841d5275a0120d553114f746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=de760aa39d10fd9260c1dfed5c05efca47422309df4060c3c610b26379f7fdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=6eb92250bae9b86ca563792c53d129b7f6b4e43a30c3e93f882d3140feb5045c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOWHM33%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHfIESCWh%2BtkBDlWGgXX4W%2FOUlHPB51lqkFer2Jp8ZqBAiEAhYZKjdhs8nntqg2nZ81FrLf4EB1tKCSipLUDq4X9hwIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQlHymsTwAjNfbTSyrcA2NNDQURYZDw6dcAXphCGRYpOws8qt3WCWkNTQn3qOU1ckWP3vzhF3zq66kX45U%2BbZqrv4p5bY1kYfijMIDzGlUJKVHfE0z4VW9pKd0gRV%2F3xxgQKbd9TkRyzVaZVsm2C%2BZ0ca9HlTraAnbdF7s9ku78XI6JkpALVIZwAbAu%2Barhhvw5R6DSiNg1VUIMeudz9bBQQkkMP%2FOl3po0FXChbxv7tw6avAs4YXxOUmfNlzdLRJ%2BJJ0%2B2sNNm%2F7DhiF10debeSt0YguJDMyEjT%2F%2FDglEGSsIivG48OkfjDTYHnIqzfh8mK%2FKvkCS35%2BdZZX99Uj1HX%2Bz0F7H9tH87bjSlgzINlvzm1gdMIp%2BeTxD0Wcd4ZyDBsFbAJj1jL2GCOGkSsITzFjr07ogN1eP86mPrAS69Jd%2FC0Ffj2SfxBItaEoPlu1MIcqS74isovGa6Sqohc4aDew7wCx6PbLLmuCu5obNJq%2B2vMcxQ9pjquFwseWVlE4aXRO4aN32eEnfLNP%2BrIqXdEBez35EUc3nKEEUlArDfHEAb38j5%2BgTs99Zf7cJr9pxJUVIQbnLB53kKckQfWz%2F95cFrsVhNXLPDtlOAeaTE1%2FvdTyaDrCg%2FTmXLo%2BouOZusSuDbAGJ5wOC4MKjX4tEGOqUBe6t%2F7mn4Cklo1h1O2SgJDgzgwDqB1bv2p9avbPVJntDok9AodYljzmGP2MfTPODMSoaW2wDkKhuzEKpVqFBGb5HLsv6eaQRgOj%2FQr7zeOwh7fS8v5epMor%2Fe%2F9qA590tAoiP5mPVDvn9RSaXsu%2FoAbq%2BFQ1bZINAzgx1IkrkxCAPFZSZ4WXti%2BMP6EXR48sUbIoYAkCPuda2pQI47ly6XsBFoM0T&X-Amz-Signature=cf62eb92aa359996e0a2921bf5e67f2f4e1c030e90b1e8963d1a82f850b50611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
