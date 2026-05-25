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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=1f391922756a2f3282137ac06d8e1a6fd7cc07c7ec1b813a658b253d3b1a6c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=3b31c68a55ec2dea3062b3357748fc9d57e433d439ab6b04679d39672b547731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=618cee16533b7d4bc575b976a446669b66490178f3a9717393368b8a9356841c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=c5d44c847753f8dcf88b534b06f66c60d11bb3fcea59a1a79e46da4ed143f5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=bc633ff13606946818c246feb1dd4dedd1df87375c88bf7a0e2a471559f4a35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=10e9728c4b6e8015b27ed40cac5eb5505440fd287c8360a1e21ec442d947fa3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=005b224d8d9b1c5859fa101c736a58f8ddfffde65f4a4b6478740d55c5dfde43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=e97a8f0553c3a230828e4458b4901e9290eab32d8236a3b9258845faf5e057e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=c34fa00413910bc10a81b33b412197ab057f59d051a2c4be551d4e025db4edf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXQ5LGR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1ci0%2Bz%2FBkEPGwSMAZg9sxZSf4r%2FQ5tyBkXKvZnG7KQIgVud7DbVRefmqF%2FejADQ7li70F%2BpVILOr2KPuAnWecesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEqr8pF92XbOIwj7eyrcAyW5cZvCYue2DiJRk%2FywSk8QkV2ng9yGndWokJnBbdQdRXSLbe98sSAwnA20f2ptTKchVmNegF5w5ERSUw3vC5%2FbE4ZPjr71yOsaXIRZXqI6RnMhmiO8K7YY9oKZ1h8H4ElNdwBOphVehxy0OlDkYDUyRKyYcHnXRb0UW2b7j2VAXuVoCEvWxyfxF6nSH4u4Xd%2BYiv1LK3GXRihKaIVU%2FjJwkRbWqZ3YGcNzXLcrPewwV4wqIEl3A7b8CWe7IGdcgTPKlApf5DFJ5M%2FvEPPqMkqo9Et0HZFGAC%2F6yQiO7ChfLvKVZ2%2FeIwW1vvq2L3KxmFfqPrXIRZS1KaGAl%2FPzkBZoY5udDAookBj5GsT35%2BZOa%2BzqQ4auoCO3XYalQQhzsDVRmDpRgDes0lWCIiB7qWmDOkD5diEed7hQyQCaTwO8kMsTwfk9pAHou2Rc78WRUeMnedVb870Qce6sTh0XUrm6qA62PAr7AWGQCsNiidXtHyIOfyz%2BNzX%2FYWbg65PRoXaBym%2F3hib2yPJp8VmAbrQTyX4q%2BJGMxwNXq3JcoN2J7S5QULJ0Fw5%2Fez5FQzY9hRSHNz6G%2Fl9zasdVpvlEfEqwuMfhcZOzxjd5DpHit17sEOVst482a3ft9%2FSxMJ20ztAGOqUBkLUP4%2BaB1zVBMYig%2BpnlRn1dP56VpFMegvXH3B9dTCTJXZWX9gInhh1Ws2xgxBHEINomLSAuQqxrNxH%2BFZRYVzm5TSPaY0w0%2BBXBg6CGVbw%2Bild%2FLrcth7ogSeP8LTUUOYglHSLkMI6ag0BU9V0ThhJ9PWEb3P3ir86WdWB%2BNgzznJjHVWWvB3UXH4bT9GRKh%2F8b4P%2B2A8QsVBCX8%2BHysN%2FRRuT5&X-Amz-Signature=ed6fc04283670d459d2f65d7b7573b69d3c066697450ccf60e481760867c874a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQD4SWN%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIg1TjzmLUmqpAiEIs01sw4VE5l8yeQwNGPKy81KjRsAiEArI45HKpLhIrAuZyFIQVfM2Mc8vnADyffmRDUIVwaJGMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNAvtwrMGlu7RY8M4yrcA2xl569c2xv2XexhqEpYfFotTlT21o5qrWgzZpcHdpykDN1UXzmKZ0eyraRtSVYzJIAyqGe5glFugCGwujK4XOb%2FLfpT%2F7g294FmNjgvtKPBsIy37bzJtabFUnzRMlzogxIHKtNEHXtkuqjaAtmmrTykWCY%2B8EsDDj14USCYA56m%2Bb%2BgNbrB6BYHYMIv2HEAuEM1j1qycl23fVmSIiTKEt%2FKcwYn%2BjkO6sND2q7nriFUplCzQkFjB3AOX6Jwg%2Bzc67YFlzP31RWXzmnLucNME53UsSbwmcj5XXOOV5dR4ZTvqQpEqHKmFfc6yxAT2xU11lIEFGtXgYm25uEA%2BjmzZDfWpDtt6sPE1Qoa1Z6GSQ48MCSQ38vF04hXPxmGMx0bGgK5BAzXvkMgD1ffDSDSUfIbthndxqhno0%2FWMuCOeHz9Vcw6tNBHNrgece%2F8cewpHvy1XSfgPIJb0ECftCpfPqj0eJBzf%2BU4N1GyxEYZaAKcXJUM%2B46kKq1gvP8tnqHUuFqTpu4FsGcWvbIHESOkTP2IeQoaKpXKUrDvMBBX9LyRXegYoiCJZqoigQz74W7dLGJtwr9eVRrfsUkaVfzmmWZManyGbuMu8aKRvAXeBMfbaADWqY7fG%2FmPSMWnMMG0ztAGOqUBQdpYLxQLats0f0PTG5gIakGmHkDlhWyR2hUNtv4o9iDSDvdcr%2FSRkPidhaLEbUs7zFA0DYScXH%2Bfly8d8SuFq7SUJ9v6U3%2Fi2hBO59jHh3JbLkvQRCjww91JhUgnMT2AMhuasKXKCVRs07RfURkmpxKqO253SHp4I1ik5AFJxxAcnKqjd3q1GOKo2vUyMkA0l384Xd0HigL0pVUWP6J0ZT0W4S%2FF&X-Amz-Signature=0f84df8755a5dead1f058da93ef2d0e342c5646c2409f8edd0ad382b04aa0efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=74a70dffc9ce42da59f7cb2a12f64dc7fdbcd1fde62819db059c126798827dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=85dabff9f24c2e52d634530502a06f6f4dc04552a2001f6d9486c97545b3258e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=6d3d00d85c7edad24e413b196a28b1a1eb609851b04631c8ca2a897fbaeb4b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=ceaab4632d2c2af47b4bbed86eaee6dd5a8b9f5b87f8db26aec72c3e7c960c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=12a99fae0c0b84980de6cd7b39a86beb6d47df202286d6e6b4e2c3c5c8249616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=52477722318d103d0e6f2dd84966fbaa25d02d9c0f9c8a315a89967aa20f983f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=3e66462f5250e40f127add764055f2c34533f9cd5053483707b3ca8793302107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=aa236222ec81bcbdcaf6d0a220e137ffe270d51215d1c6a87fed698ef6dbbaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U72VQ7DP%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ8AFwQg5UUrN1TN3aBj51CnD3h3LwwOsg5PM%2BI78YYgIgdKlqMBefQHAl4pj%2B3689EzPTCAUPMkEHNtQOTDjfunAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDVRK%2BE1mFNbW9lXRircA6UTLnSvtYEVVzwMG2x4iwFJU2QC1paLD8qz1ZCjh8WUd%2BoiHZuCcRMt8TP7%2BpcPLppDp8oqCVX7sxfTBpq9Q6ThM%2BU%2BxlkMg%2BtABS2a3WTDQH%2FU%2BBNqC%2Fll83U4nEfEIwi9n1OdZOk9%2BH5JE1e1DlgJC1xQyDEoWcscmLXoMRqjZIP4%2Bb0czmg3TtfvBwAWW5NqjOdwjPHzRbnCVjjHHY%2F61P5aHrN7EEL8QnvLIeZ%2BpszKdTjRBdmm0ozU0FPZVxxOb2pyR5wI9qIT9J7VU7ypqTcIZQq8L%2FWEIFOXG5XQgRgHdYSX1T%2B%2BkKxt6TtM2yDthYZAlmXXmUQhio%2FnokXFsVMBrTAqrt6PNH11wSjXwThfHSlU2xHLvsdqpblsiVbYqW7WG4V50nZutjJKVPKTkGQJPu1a4Gk%2BQ%2BwglCuzXxrSfyvmNUo8TZE%2F4rq3qvjF8SU%2FuhQ9XyaCIXNjsLRO0p4YFy0SwV48fX08Shr7Ka0r8carxJINkR4R5JfJfCzUYBS9bU%2BI10yy4IQ9zS36C3IoG4n9jiFB56VIrL7xcnDkZC%2FQSos614la4CHgHYTAEZfVVayHeqK2x%2Fl5KxCC7ymmmlHfD9a3FAzSTplhujj7T6hUaXfUBOsqMJ20ztAGOqUBS%2Br5dkfHixzBvfl28BarmHON9KZDoXHQA7iA9m6U%2BzAzW8L0kmu9I5Ap9aZNSxVS7HaRxF5LB%2BSLEnbHRdnFZ%2BzqExz2rfiqYT%2FD5j9t5XaoEGj6SXnwvDxkusJzu%2Bmp52nQ7Q2vljIvxj1beNN6H6AnQOvIZvfYItSe1PV6BFLQY0JfdX0dVDd1cMq3gs6yIQwZBKJfV1XKsJ%2FgFGXx6OKOwHon&X-Amz-Signature=a27534575cd1e521e10306095b124e65e00c2105535ca818ffd53938695ee174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
