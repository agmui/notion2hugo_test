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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=eef60ad7594ebe164bdb95c98e61ee989d75b9e4ad86f7ab98c8c53f75c0b1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=c3609ae7e36395393ce1364b1a3ebe3b2f725f95c3be104d080b02fb850765a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=d0a513568f2b56884d1b490718f48f04e2ad4bb3fec8d5841d529d3efff637c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=151c63325d1592678af3d3aa106e7d1de5af5484bc42fd95a6916edd580324ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=a0bbb1f59e29f07cdc1f1440a5c4e19f4af664b8e188db15b853add3970cedd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=47adb62138251b4c3be0d7465e0b2c31a8c9e24dd9ec1749a5f2ebd422242bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=c72a11c3c4e789382f9c0e1fa6ac23c272521651625084d162fac95557b29787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=200d819b97e4f1c7461738f0cba5613c12ef1004671cfb2dd0780b032b80e4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=8568af5c8d629382c2c38865791a0905fc9f85810b514247c882f58d80c94f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIVGPBY%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBxebVEDAG1qX5mfE3yDEIOw5jaJSD8X%2F%2FJpGxyvOidgIgZY%2Br5EzJDjss42H2prOaQmp0xeV%2F1hvXi%2Fb6DsQyv3wqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8Xr1b4%2BVCi3ZvIuCrcAzsOHOaZOBY06x%2BFAs4Me%2Ft9umELBjZZFFwwfXl40aw1qdHXuf35BpKaFbVqxu9h0glgcFN1Aem9vkEBAJlpSmA4PRiZDohNV%2BTioI0A8UjnfiNZUlwFM%2F6G7yeh3E6Q3lKDYsmwdVJqkLzwqQ4%2FF6AGXLKo4yfWyu1s9GE%2F2Bmvl40iJlWB%2FcICwCDwzMNZHRIyp3kVG2WZiQE9VptsqgTnKmGfmzceJrR4fD%2F%2F7IiO%2FesIDDzcz5x5I0YAmvXVb4L6rmSeG4iM6pZ5hiDUlrLvpE8JC4YTRzf8q%2Bh%2BscR28M9QAvSNzOyZd84V4mY045biNvUbh0pB%2FhGCrt0IEleRRcxEErGM4u2LNUNO0LkOvSpuDxbsoSSJpY%2FyuAJIMx35un9RBwrly%2Fu1knlZKpr6ZpIY07K%2FBjCl282Tmh67ymNlSViqdekcjDbpkLeCIDo9AWzFs4dfrRJf3esZtCF%2BZHMb8e6up2TtQqYonW%2BUKWAJ0%2BX38BXAiBLwQqka7128GKL6Hsb9vKU33Ctsp6Vv3lQ2%2FPhDRAVGldV8Akedimj5qcw%2BRcnqB6QK%2BX8VCxRqNgTkQ6Bl8rmNpeVoUxryKPWoZl1wFouom4YpkcG7GVzXnDqG1jPWxoLMMJW5y8oGOqUBfhscsQAYMP5Qg44N3C5aOHq25SCmKo2OSJBcMDbShGhznL8KEAdjoIhywTIjpX9JCURvEbJ4xBCU95mXg%2BsRhMXFsbJF9Ean8Xc6xcu47gw3JZWn3Y3o6%2BckKJeXoxtgwxy43xin5qh9rzom2xNUbMdqxdNmS1EmXY%2FoU0G01yhE6v8aLfRIZm7N53O4We8j8WJVVJbvNrSk7P%2BRjVyiDfKFzbNc&X-Amz-Signature=6ae53564a26c94746d05b2ca83e355e2109c349f47721e3bc0ddc661ac06817f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIVKGRD%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKlWRNPB9TP68eDTKevI1bs%2FW6NV%2FEPicwnu%2B3y1ZD8gIhAMEvPyQJV1lrdMk4tP39AueddWvjat0m1zz7nFp94YaCKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQRi0oyZzjbpZGCnwq3AOFT7EMABdOf7px8L%2FMpD4UIrnoo%2BrZUdbi%2F2aY6ZGtWx34%2FOHfVJp4e%2Fzyhyd6FK7ji4Cj5zFUZ9LYbklEzRMG3ep0XTx91DdUaDfvyoJPcmgdM1PC44kSogxxnJ6ef6naQjTZSskKSJhDrVk85BRGFEi3vIlrFwCdQntEh9%2Fshx06Va1qV0umzUb3mZK0FdSFHLbdnrMSlGy0dPC8xOyhm1i5sMoZAeliocWoIy2lLw45LQxHS9qDQvD%2BQxxRh93DyKiqYuksCANFozIrlSld7v84NJWZWpj333PlpaEvUiX4amEx2ApinZg6SN6t9KoKzhj1qQVNLtwcsPdWw5zuYf43QwEofWXdBnXrYJBMIeEKoqSAH2lcL9MutmttrgApNQYgGoK1cCxZW%2B03MCRHX31CjG75HiXzl5I1O2JVvqQqxqyyuzZKKdy3f4aFwlwVqlabBh4zQo18YQqK84mGoZmRAFu4m%2Bl96%2F5%2F2j6OdGVJzPjp1mGY%2BSrLU0oI3XDOp6WrEF%2Bv%2FHuAk%2BNwdnNmUtekLrvVvqNUy0G8zZDKTc7a%2FQ1GM9x6Qj%2FfK%2FVz5sRU3M3gcvg8%2Ftx76HyDIfbpAoc2ggy6a2rC9O6emM7u83MHLBh1fLRjP7UmUzCI1szKBjqkAbMpGnUXu%2BfrHect%2Fb1zPKcawsOwpFgeMonsX5l8FsgLsdiimqAbK1SGiHKdftwuzls5502Uw0Xg4aktr1LLQR2jm7Vqp0VpiL8YQy1QY7Wvu0DlFBG9oaoDA5sF6z6EACvWfHNwPAOYWaqcjznfm73chA4GyBCQSa0fMStyGte4Tx2iF9RS5K2UGLiRUeUOoGIy45RROjgZ8dzvcOrhpMnhXaIZ&X-Amz-Signature=199c4ee71f7df8a1ddabf99cf9022577605d8c9a0eb84ea2c45b0f81d635a6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=94589a7be410c6fee6dce67e30c9237ab7bb1c300f64882f571de8ab7929b9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=9af894c88e302490841c6a16a041d7e0d06e95ec909435edefd8303d850da467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=1db97db498a3a3a81fec7a6d415da3aac39c59d42efef5340300d081a7e10c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=7c48556382c650a88667b98e1f45e0504eda21b48d018672a1328cafcbda0c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=ca2988942f7b45fae17ada3988f311bdd7fe463de330e34bf0c0cb979b2c0be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=3e23c73eabb0b406d993a46e309fb8d4d9210bd3541293702ffb00f8fd82086d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=c95bab789cdad50b9831ffb19200553ce1a2116091d4aac25f18707a9405ba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=ee14734f1d312a8607f4faff856bedad51ac9dc65698c9b5669a6b36653e574e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=fb12a691c3b4d864d7551fc78157defdcfe06615b20bd42ae0d3df2636c875ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
