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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=cd7999ff7c836fe0b8dd51b2d84b98f6cb529c3b4da87e13c196fbc56d11952c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=cfc533f6e577dde0ec64e2e01aabb9a867636f62c11ee55580c94c616ebc06b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=6bfe069a5e133bf41737fc51c48a08167b30f174c9b50e6a7ca81446e899a05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=bf064fce007deb919bd1278ce43f491d7b46bef90e88882f2b0bc4bd74a57d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=1d7a7e80745ea9e5261dcad5a65a914554ab6abc7d6a1bc667cf8c0415f5abce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=785e11d05ad207d10a4f28c1c919ae421f3466d0bf633a94765261022764ae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=924d35bab59cc6fbefd46aafaccfa03f804a18dd2e20411ab772b2a0f5fd5dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=4ac811fad352414098d160c186f2024431d45d6780e41f155f5e10fb0f29a11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=03c80bdd8db7030b7d008582dfe6d8955620649006c273a64baffea1b606d5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBVQOT4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKTaAc5z4kZb0WyNjP1vaadJS%2Fp4wQS1o3cq2Ysnw0gIgWVYP8OHhKRw%2B7EZKRdoIgjJxU9zrBTzEtW1tY%2F5dXtIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacbGOrnm2wSac%2FuCrcA63%2F4bCZaz8q244P2LwBDCzEhSCnHsMCK1EpDnK%2FQ7GPbNaMnSQnagorZcr%2FDJZWx5lGgwn3zXOTVgs2pUUZ51CmcAAJR7QZXfXhBFgadjlTtnDOUP3D55qb%2F7NRMMqu1uz%2B6ze%2BvrUJo8W2bc%2Ff6BD1JZuq3wXsA0jrQIktdUCldbGPGAsQoMh0kpzCishmBWtVFFNeHcVy913LAK%2B0LL%2FAEUXL67lWXmPZs3BSvO1ptu13wv%2FZp6agxjkeMuGNwwDJ0WC%2BJXIMyTGV7rybxl1HTDFEvyq1Y%2Fy1fKHKYgFNqpoUsy%2BPXWTeKxboz3XXdaqqHFKkIgLGiOluCqd9KaTrgIDc0dgaoCX9YYpG5iDn7gPiUr3YMOV5QgiNPMh3o4QW6k4hnX1DCH%2BQxRxRhOIGru271cPPX9nm2GN8ANJFBPOqaH3d%2Fiu2YFuWqdsXNIRuBqhfhQ1Z%2FmqHHE0k2F1alx2eiQI%2BtVkqa3hP%2FaSt6TNIdTZxy%2BCxcGxsCMr%2BNbW3kPP57ynUu3%2BvENeOjCeeEHveCnfh7mxgJreluhBuBxdTzm2uF%2BHve6VkXGRxRAZJ%2BUfCdGEantE3XdAJ5GV95W34lf3TepMXCru5Q3Hb58V%2BDHsczFMjxTRFMIC%2F4sQGOqUBhdK2J8L8BqtPuvn8Fzmp6bUfwFeQWZ16xOo9EfNd6f8c9goMF2sZawDO8gSekclHOkjMKKzYMFyk775EJWzRprhg27t4y0OHR%2FTUv6S8VscoMAPBJkD3SMsyJ2axuWlhEMHofMn7BExgYuPeJ2zOzTLJsA%2BaSZV1HkA6k%2BCjep36JHEf3DVv%2BPMfQHgZpdIkMHohYKj8RLBStvgkyMJgRhqwSAQG&X-Amz-Signature=952ee830103db8f9504a53dbdb1e6052ad34933c3b0532678d070e7b47dab62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YC7N6Y5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjDNUt1Rx8sFdEDEfU8WbgacURkRlMnE%2Bw7ONc%2BnqppAiEAgbdYwulmoPYaktk8XRUs1%2FeBj7yrv%2BOdeQgQwF48QQsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTuRcVM%2B5aS9z%2ByvyrcAwaemuAUuxJMd5ZV1qWRuoXZuiE%2FLy0b8APJuY0hMnrQxQLc0ME1a1wLenHYLJyT0TKhpmetjcnj1%2BwBylEXqW5xb5BoxWKWy5aohdK294uEdGg4chmUEdeQLOinS6oHn0ny1i%2BcHelIKY0E3MZdpMPJ4zUmH6IdLBTQEk6K%2FavxOHphOd1mTRPIQUeUOMvwV%2B2aOWxFJQqiw2uaPepNN60Z9BSX58zeJd5Qrwtnf72EAsgSIOtpvis9HQfX4LhiwvXR2pO9LLlp1xPkTCUrNDVaYQ2lmSG90uLVNI8%2BB5N7gMB5zgeGVVoOl%2FJrMhuUWaCtwBPs3snGyVGkj4DrcbezSVNlmejmtbqkknB2k9zZuBiXnLVMqK8TJKhmN3Y7%2F97tmlOmUCwKQQMFjaEnRImFt7UTFcpatGCyQZfzjosPLpBW8LzIk0Hxj7cMJjMImK2nglxS6ZBuLAIv%2FZwmeJ85cSQsV1%2Bs8rZn5DIaFufv69Ckoju%2BrvFhsnfkeELiXhqVBOYxQfdR9ohqQW8qsmnOspcrs9%2B6fQraFzK52OAlZN6BJPTkk0%2BatLdkJ8ZpNlfjdW7lFdvHkpIN6%2BtcJflIn9bQbTxbhS4Dc2FrWyFSYc4MwN49Xq56SPlKMNK%2F4sQGOqUBxBSvarbneaH1fT06f56mhHmSpNVW2CBRjprc5qHUYOs2m15mfXRpJ9BoIER4NsDebq%2BWn9mwmdLGTbRNj3GFpIoBnVfI4nMExmcyulcL1ZPJyKb4%2Bzkfo%2FUDZgMrRM%2BtZic2QO8G7WWBwSH2R1nrC%2FTA8v%2BIHlSnduX1dY%2FnZvS23kvIgoA9n3TESuorO6jCSgXLwK5s4x2mCAtrJi9jT848X4Tf&X-Amz-Signature=fcab8e3f31ebcc958df1c6dac83a26661dc49264b9b4369240c8679cbc0b5526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=316bb90acf45b1ececa0847e79223360237e000101424fee3ce56ece89a53679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=a49b2497647c1c754f7fa58f58d717828495208433692706da6ea8f0b0e5fa5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=0e63e27d28ac7e13f8f50c3e63050dc13b38c83630d78097a17c17faa297a6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=2473a8be2f4caa90b58f3c5664d2bd85189c33e8daad68e426c5bb180eff76ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=a73550bf821cc81ea5eee356f0da85fb778426a64f7254ea563f28a8ea531dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=e239fd6fb4d7ad12053714d2e93274db90c07365bde16724a8110fe72bc3abfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=11a97cdbc478c7b912045e5b6323f3e1005b3682e0d20e932cadbd08ecca890f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=c4ad3e930d81121eff199c8f08cb9898f72c50780e9635d0d279b4b0e5532d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVI57QA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BuKtWpvUYL3fBlNxgPAI3xGRJ%2BpWc%2Bz50fIFIeb1xtAiBgch7hXMj8IAIUw7PYkMHiSoLLAPOCYsrfhnBiomzPciqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM93YiTlS9%2Fh%2B6FPLFKtwD5DrF0byogIB6tVBJf0CZ1zkO5g%2BnCCLhhZoPGVmWDjpUIFgeeZyNNVyc01gXUNDSOz0MIGC8P6EkdOk8nPCq8Kcxiime1tfYp38nlrZQcIA5r5%2B8UZ5nJlv6PrFT4cfh%2F2JLvPfZRcP8O%2FyO7GbMhmg01jiQXFICqyRlYU7fSs2PyjDYP8rCtXlYBBvbTfodNXXi8W6GU22FUhdHZ18N6Gua3oDaS55NtFXjH%2Bv5vXh7cfbIB0LWK4Q633BUEjbk9jmFVn%2B96DXqEi1NW16%2FnhqZYglZ3XwJX5gHrBuLpbFOhQTxWxGMxlbDgjC4VCOqE2KJLIFwuA%2F9lseDNzzHPkUeSoDXvo5Ty9CrvA1bO6IoWu8REuTuO67smdnR0nBId%2Fs15VcqfVlqdEv0KZJT19MvnjI6FSd%2BtbhHWTFyppoVv8al7w38eJ8Pz%2B1xVMV8Q%2BgaiwYIlbbUP%2BR019UGocjTy0%2FAHI2IPVSJob9Y9QAgVGrOee%2FyGrdnQjCr0%2FrGpXrLl9FD0CKGJqul%2Fw2NjxbgTreAV1uWu90r7bnfmDXtZDiSostdKzifLAXOZuZVxlrs3VW81EllIR3Q91FNzc1p%2FwsREQ2zZcBGQnnnGOszzQa7pcHHLMNxKDowxr%2FixAY6pgGtYtljWNMOed8poCG7hKlXaCEPHmhkhUQYHjVed1obrg0plttWs9hqLas78u6Cs1m3dKBuRVPNXd3jLhcAjKYo6cfMiMr%2FswkKbBQFhSPa7xZgVpUTEphkUhguZB8dYddoT0ijH%2BIwYyCfa3UXB76dT0rHF0bHHVbcVkl1%2BHbEpqqidaHxtJbSUeExfMXvEj%2F36ifnuLQqqy0dd71NcB%2Fpl4DJ0eTp&X-Amz-Signature=2b444381f9c4a7141a22c1c8ee2555eaebd52fac8f7ff88d0bbaef14cf121e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
