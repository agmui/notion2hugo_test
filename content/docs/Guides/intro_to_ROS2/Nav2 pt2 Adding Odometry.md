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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=617c43bd985b1f4fd2082cb3749c8695d7b04f33dae6a180e694acf22d8c38fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=ea7c9d1833f4f0fe0fa2e67374d331a537dcab4b2a489b6a9ffbce95ceae5485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=6ee8a0f8c268a96009bcdd205ea99184f8e512dea0ccaa30053363ddbbbae7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=354bd1101200d513b68e51ec897b0542f790f1d93de0a74043ce1845bc05edc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=93b2de09d0a8807a45c55ee1203045dccc56fcb9c6a490d35f967f4a9aa3ad16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=6a32ea754992de3c0567cebd0c9b28899b09ccb9157a2bc68be2b7a3d73bb487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=b0aafd9f7fa5fcac027a83724865e8b3527e82857a2429a3efc1773062224b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=5794e227e73ad5de52f42ffda161b5ea1ebcae184ac0da247088d9d53d1f9cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=fd7a0e489a1ad57f0c36cb3db1838b31d52e0a01f34d188043dcd0a49e901c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWGAJLK%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEkBDAq4QiGUyGDGIYRv7tjGiU9YMWodX84HnVSFMWXKAiEAhpeaTkczFhtrMfUmT8%2Frpsbwj%2BcFTZ44qOQHuJd0KL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIsJjcPxl9Djo09tHircA4cx2lGOMxrJjW7XNgCLl5Ou5s%2FMb9hRBn6UzwkxUDu8YU%2FID%2Bmpy7ZM5U%2BSTIMp1LeRIpcFyV8%2FxnOBrCFTCTvZpFB5HCycgi6QXidnaXKJALf65JG8IWnhYsluJI2f3m8rVzOUf5MrV%2BuEYYje%2BuKNgGh7IvrVAMKbhyRnMu0rDXXezOpvQ16O4pSqBhA9ZN8b21aOvwrFOXPoDSS78dhmVJlOBBV9CdvnH9BrHmuz6DvPTIX18jGX2iYiMv3rsL%2FhtAsbn%2FkbDg6ZpDLOJGjjLIvnnhHXX2pu7RQI%2BEB6Iq4qCIMT79eiavlW4wWm5YGvyFAzx00r20KkZ5ty8I35iNvtrjb1YdPjnV4B3lBwbIPBpqHUG9BonDOHgagGANoQWWltgVUoEy4MRge6UFE0eyXPxuLVjxojmLnu%2FEI6p1Gmt9exAsDL%2Bs7GbnjwJ9OkeeBlJY67TzylCHyRoZYcVWKSTJsbtM4JADs3xqFAO%2B%2BSRx5viP9Xj%2F3zWhe8onmGuyKriQ56jC8JZVpgI5gLip2FiDptJ5KCw21ZLr3de5C3ZXm5en4dZrAiDCcaWT5NQfhusszAq8RdNW64khI51ZMy44mEQ2JdViQM%2FkHpPsB1g9nShrywS9SbMKbZg80GOqUBoY2PApOqfTUeadbM0Vr2Qh%2FE00F4Md70joJ8%2BLts%2B%2Bi%2BEM7WwhvglZO67Hm12%2FWebewkNnhFWYO%2FS3%2FdOQfuglgoKcObB9PyeHs2ROgpIXtmMYamsbn80Op5NXyDzKbt5lXLcPppQBehDo1CRhofKfcH1dHiWGBi6FB1jNZAjmz5%2F%2BQW3sW%2BE2WkWOBmCZPIAYFduMJqMWMqaXimZod9Pdh8fpkg&X-Amz-Signature=1cef3a0b25d561a5f5476e52c2399cae3674eda210d3323e3e3bc9a372fc7366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WGOWZT%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGh%2BgUab77yoc%2FXLGodR86A58NXDljaQucjMgreaklEfAiA1%2BlX3FUBFrIXjX1qI6aFh93aLRomdv0OBdnTCc%2B5cjSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM39Q8%2Bjrf8F8TfHCcKtwD1gkuh8PHYnEvo3h%2F%2F4iXBz%2FRPCH%2FtrFIE3KA9l9MCT%2FCC93RZzYsAQGTAtDQr0PbNchwforihAS42Asa7SH2ZUyvazpr2gJGlfFo3h%2B5qFNffbW%2BD8uqXJGtqGpr39gY7zDocLHZh%2BUumveTm2fgndwkZ3Epu6bGCkEmOZ7Eg5Zm3ER2AQHp9Fyxznoj39OWkdNfdO3molgTeDreZ9tIsuxmzFsoLIUEZUJtcIM%2Fesi0XmuNLAPKRYOyjwjyFP9y%2Fw%2Bd2bdTdW9LlNOwwUiGtKuyp%2FzQftoVLyZUvlhkB6s%2FinwR1OcntMkNFJT6evr69PI%2BPG96c0OLfp72hxX68y7WZ5g5%2FUb2exDtHkrbXXEgOMiAaszo0OEz%2FYCgnpKUZzNy2Yi1o2p3I1jYc8GpAnX6q9IiHs%2BGK5hMigippJuqPZkFMmzN4NxK0PANQbFNtUhaPNjYP3kteqbUZLNVEAyePbdKqoy4Dhz7ZaPAtNJFzB6SFqFAO9NIskspD9nL%2BMnwuAEIQnofGLCJEidUbWGeqtmpO2dnrX1%2BlXceR5ga8PXmP4loNBsBnlsnQ%2BVHGSP0OfbD9vfK7A8wWvZS8b7b%2BaePm7UTvMFSxdhsH8pt1IoKSOtzYiDIYWUwqNmDzQY6pgGxu41f8eNlehvKMxYHsdmKqXwx4xIANVY6SIpS9hLFRUJQTjG8lmdzIgc2kC%2BYQZhfrY7q0T4YK9LFh58JGwNj1d1JkjZkjZM30b61vjlfXw8pfLLfbJgvrFI1tOfwZoiSWvf88a%2BnVExf87OOKS4gmgEOsZ0AcXMiPinOmo6%2FnHqmG%2BQNBzFDWpfAZP3gi7FDnM3vPKSAeuUfvLYvWqOjZEjPJN6S&X-Amz-Signature=ef2d64ac8adf815a5ec8f2b12167122d0cc0e0f7acbfa5377a570c142c9dfd55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=a8982beadf3449a04414b45e34371ebffe1f530a26f03f7f767f977fa5c5d92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=49e9042a0a9464b3797ce525a1180f5e676e16da1df9d8029e3f16013a1dff50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=52ea9e3baba0c43d3f4c9810ff01bf9f2c8b0f0ac3a910261364542b6b044837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=4c71cbd867a27c003fb5d48987e1e878c47460b3fcede7e7a90e820185dcb6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=b7a3583115dac372033ddffec221ebd050f680e1a883385364ce63b670725ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=682337362b86c557524343fd4f064d4a847cbe658f95f2a970ab279a0cd0fc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=b363afeb11342deae976f6afd3c668e6c2a1f869b2df6278c806d205b2ad21d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=832f889787a22c3f78c2b518534fbd8d865d36c65f072a234d40e27d3221a133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROYQUSR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF4g1osymKeXaGvybMqOGl%2BBhyw%2F9ufV%2BUNh7Bd1%2F7QaAiEAlkp3%2BITkkRCz9k6dTzqMV39YIDstHoGTSsG%2FyiWmAlsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCOtgDyVI3yUruB88ircA1cywFe5uE1zgq0fFBinZIwmcXuZR4tD9%2FQOmj1R5wq3x2XHR4YnLWVnlVgi1ZxrDL3TUb%2FUrobaZCvt4qwZUrPTpvoJ9bZWzqjZ3IR3U3BboTGmqD3AQrPIR8%2BSyVzPvdHAsVy3osG%2Bz8wz6Zv3Ta5CCeEwBujrfqqcjNcJ4e4rU7OfH%2BnkLEoPzteDjB2Y5fxb62KGTKvLTcLYbZf0XpNEy0KN8qK5CiAVi7rlnmdfVkLD1X14mSjdqKuRhx%2B7%2BTu7A0PUE2QslUDN2R5BBr%2B0WTrAb0r%2FGdTBo%2FERbuauVm2rkgivEeyX5yT7V9atTj2JKdOqrigqCuL63BrKclpXDM6ScWspx07xRRuIlRm%2FDBmkuqeo3Uej8ie52Om8I5ySJr16%2BRn3%2BL%2Bedac5NkTlSunDSRwB0K4Xom73Nbj5ZiDeaTRCVU56Xc8VXDqTjvXuzc7t7Hiz0EycY44ioXjjhJSczOhlh3TGd4ZuMy031zekqYIPs2s9vTdGfRYlBbne5aVMEjsd9Qj48o4m1UCPuFYirZm1%2FIklE5OZ5zeFg8dR5ZurdcuikgMwwiEqjB1lmIPzGO%2FtzwQvUD%2FxEEzVtg2sRIfJWupQ%2Foith4MRKdhxv3dkE2GKtfiBMPfZg80GOqUBKcLLlIsRtyPh12StOa0k2tJ9yaJ%2BN0rtvLho4yB6iYpSaJkSTbrRqvXjPhVaGMemSkwZDUy%2FdsAn7reILmsSQvQ3qSZEpm1w4qNMGt3Chtyz935Iz%2B3iRUa%2BFHBL9%2BRevf4aYU7Bb9ijpyHE25mN9F%2FPw5sg8Yk0yM0IJH1OcYsdJDQxjBEfZRYK1M8fiNV7doUWYGSol%2BP60EP%2FISYv5qFw3EZ5&X-Amz-Signature=875dc841b80bc379b420353dca5f6d6324acad875c1f76e5238e2a64b70678a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
