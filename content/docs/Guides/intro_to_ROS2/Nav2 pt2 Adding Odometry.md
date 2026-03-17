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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=5ac5b55aab5aeda421e3f2e83aa9f70bf46526d4b2129dedb23d892f679fc920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=a4bd1739292ceaecaede5d3697e28f1c5ea0977b6339995c51fc09ddf508037e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=c5c58b6cfda849253b8ea34c4dd8dd40fcf140695c5640e57b5c596c3409f689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=d233c0e3dcfec09fb27e7147d5a7e20e498085c7c0c693fbdf721762d2a6c07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=f6ee85f8c0edc7b56631d8a0f9096b34f1df647d5c8b6f63f50bfffaa47f6411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=6bf27b0155cfaccf343558d2f1527408896d8c119730a7f43a9635663d29b925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=0bf1386d7e27b02e39f6b8d74482f41f639c32a32b13ff85eb7bdf62d2c2cf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=20451075f097f2017036498782b1550cac6099a8e882c011fee2511d55570a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=ef9b6861f556835d2afd30bf83033ca999eb9d64330524e7999a8eabe43fda74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4Y2XZB%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFcpeL1euskZDvedJcDO3U0E8b8RQ2LYyxjOheEULkf6AiEAyl0dxwU7ZZ9naw4a9IP1SJZzGzY%2BHMZqgNSWr45AI00qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJMSnpSdCt29qhARircA%2FQtiwqPlzmweY4%2Bm7qdH2p1zotdzManqwc9LkV3U9mgKuD9O%2B8kDtda3XfcE34wnWRylT9dTGex5qXjMg2KTu3v3SGV30yAlBWZDkMpHy2cKmFQsrCKA5mUgd7wDpLEysMr8M0pBLELn1AwsXePl6W1%2FUHcS%2BDkhy5vsLGv5vR%2Bf5g%2FvxNy0pMF8bAchNvYw1pHEvPgVh9nYjenJ%2FsYIZukRzojo%2B74p6ov2ZCgfgzqdLtbkZC%2BJa%2B9yxX5nMydJoQDoQ5phsHNc4aoJBdoBOpvukHJperbCEuljmTt97b57yX6Mgn6%2FkqfE8LXF1tmXzf8MnNRg%2Fs5cnf1U9pzxbVzalMjkF4muy8fXd7nD3Brq7SOQlEdLX55NSJH%2FwrYL3XHCGFZ6PqI5ArklpGCyS4jzoLOTT5RnXxtHYmp3Zm9k6u6JCo5J%2Fp4p4TTzAhk3AEOVmqp8CzGbcjQFR%2Bos8MJtfSQIGQRdZcaHYMeQCv6vj2Ea70JLR9LffrN7i3qsSObuEtzA0QvJiiWxTkFqw4eT4WAx6%2FVeM0tdczmK0ycaD8d83anKBeIjX3bTOGtS6rtdxkmGY%2BWhD%2BjMe0BRuTcRYz%2BJERADIEJ%2FxMs93Vi0ORRQLd5gOtGjYHhMJ%2Fn4s0GOqUBbxLvBzK5fI5d4JX%2BUETsorToZc67xjbdW4OfQ2O6IInYYB5JvYsRbCRtWME1JsvolGIUiPU7ln%2B%2Fhpqf2uFgHztu%2BWxT6JmAtL7aXLhw%2BB2MD0Jd15d%2BpADBCfN%2FWxwhwgE3v7d5OuA%2BVn%2BJSNSRTpCD3CE%2BFoiZq5O59LvrOH0Zbf6CO6iw0LYFYfTMCQkUYEHGvRVRaCRVGUhDffwU2A3LEDoC&X-Amz-Signature=2ba24e43a202418e2a52198633ce8f29546d4733ead58e6e4574485c12ead25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5ODPHJ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDRgUFl%2FKU%2FCwPrjLP1VXX7HMpPLDThLHaSpy1LV6MZWwIhALie%2F%2BqilN7aZwYJsXsqmXkyOaaddkcC96wO8G8gc4IoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzAAN0FhRUgaXzgm4q3APaq%2Ft3tk7kDPZIc3ssLv%2F2NCep5PoyITLbk7npb4J70PHrztz2hsJxG0oYSthIkiVPGFD3a6dE0V9pkDnG7epnOWvVNv3odeti2V9ecA4JtNrRAOsB7a55T31OW540%2BlzHPFlHYekSZekfu%2BBUJcn5y7zaVSZayf9gP8aSMx9dj3zy8t6%2FLgVr1pLv%2BxyFQNrEJqDmchtLSS0dda3u9Yz215yzT4BMMK95nXvQgBweJURefa5gdzcnmOBE7%2FmsBQ1Th3JsAt9CVHzIiBCjp%2Bw3pyriARNRBRiyHNcwbyBktxgZwSbI1WZndSt06pxUFB%2BDunt6k%2FTxk8yrhDYR6SJ2xXGSv3Aesbp4wA3WJ1RRSECwKvMCDWnnbDg1dUFM8bX5A5sxTqSl8JeKe4sTSDF11I%2BzDpJ0%2B2MV7Bq3UTkXPuuI0GlQ8GBvnng5l0Um8gfU5he%2BBN7vm8ml93OfaZuaLn4KrGYZwPmUc5l3Jng%2BxK3vn540r9P3qNL1cIHVyJL9JtI6Tnr%2BJTfDBfmEPHgUt9PLpBil3gWhNo0G0BepzydKNBoBU1qWkxttfKxGUcdeXvG64glkc9JlxW9o8L58FetB5P7ciAqi%2FNgci%2BuokTq5zvIoHtuqsnQ6AzDQ5%2BLNBjqkAe39sM3bLuYkbJru5oXzEGC31uaCPK75OB4cfFC2HEUPce9y4Ie1vg0LOZr5dbnPxT5ESt7NUjestX89aG3vrVjTJnZ%2FvFOuwWNsIgfeM%2FtNiQ5cYPJFuaH1arSUQTJDDoUyayw13tFz9F6QLcyrVv%2B5pnn2claHio7ZkvlZf9ulBQ96golVUd96SO4tZUTU1jddPTYJmHTMAI%2BeKVA6vh2r1kIx&X-Amz-Signature=cdb5d0d689ca2e94e332fbd4475a50f4aff1567db1fd4b56db280db80f6f8bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=e1d6a6bc1dbf6234325e4e8040451fe25786c733aee7eeb1020e9eaebff6de27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=6e679e45d9b19763e0b2313ef48474ce9d456b5c2883b33e49ffc4d7d48495a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=ca6b3dfb5e8c92baabb8e4afbb2c56d2dbf8eeddb507a460e5262bde1d5c2202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=c2efccd1304dba8cb0aa45153748e2a2e4d12057717a0a8a054118809e7b9af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=1ff9257239226ca4a79ba6d103cd66db2a1ab5912544354942a9ccaa65f6f389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=0e5e470b37fe4b6f3aacf542ab92d91da0f0575f129904e1fe768e50d7404bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=bfc32d1f46b072a531c552aad54c7f2de902b3626d7bc2600f17d1d2427bb4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=e4a03c8d0f53f054611c2b61993c713dee5d1741104e328323249d8c2ec11f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPZHD3Z%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICGVWXo%2FN33sRHPYRJ7wUWbTJUQlEQmyMRqNp1vYG4FVAiEA4uupnrURqo9V%2BqV1rsCTyXONr5FdUXMNQWZJQsGBAtMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCceYSFssw3KNNKqBCrcA2F0gs3WLFSO4oWWLCxTwGL8yrxE2eAJwAWMIC1O9x4UVvF8ow7GIjRZjvcmbgkbrPnl7AoHRvGnmBGVfW9hYIXBzuKCaQVCH4Qb3dRi5wWWR00tlIFbtBpaTPdsmsTjsi7GFeqRKQXn3tljxzSANRf0oV23zQZvb0NzZMOsx9CEo9AID4SMYeiSEKkxSujvB%2FidnSg5EyqSBfuVul49fW2n8ObbDft6mWgpShsb70sQn3PFbstAid0qgU%2Fg8PUh7jt%2Bq0IubTwEparZNDRuEz1FZPFnvVadMn6BQdtAM2CqmJRjvtUZvxfZotqSOMdtnvGD9NShufkW4qwA%2FrQ%2BAcMv%2FzrdvzLIxzSWO0RolEotBWapIISRxFjYp%2FSLTHobBFQcuV5tU%2BTzm2Ym%2BcCeX%2FX6TKF8Y33GVTcaONqeR7QMD2obH1jHSx5UeUT4r00OyTgAqduTW1Yc%2F%2BuqQoOhKQdCXl6c1%2F6wIdOEZ%2BfUNbfJtGh7N3zsuGkta3Z4ZdXG18vTNY8xakZCVY6ckspadSzCyxa1%2FloAOTBI0qHs6m0mxEX3a%2FWQXVOZlYNMUpWELtfDS2nVILWwuWmzt0m464z3Ly34SR7pWYAfgyBJkkf31y0x%2BKpBCct8oP6xMJjo4s0GOqUB1ifGIfdq2eRLJl2OP1NP%2B93Y8vdvwXq5UaS3zBBMPKxxlwTMGquNVSd611Qc0hmKaY3%2Fo8dMOliVS3t9gmsEjI47VfNuoZz4BQh9GOf4Vrep1E8BuZYkshBURAlWQZ3vfXSMsk%2BYJ2MvDEYKdsaixDPXQnNrDVN9QdbjkPMP1rk2uslzu1v0zuTvmE7vK8IZ60FibJVllkTyNQFk62Mq1TQ0mTrf&X-Amz-Signature=12e66d7937d40ade45346511bf8ba74c06d7759d1946c4b5bf43781257caf140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
