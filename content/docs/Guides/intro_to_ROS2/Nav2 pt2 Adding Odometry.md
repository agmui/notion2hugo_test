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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=43b565bc70b840dc7138ae7b3be49c09fa8d9f3c85fbaabdf3552716b0acbdf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=4c15953dc5afbce277db29713bac82f86428322685bbad40212488d8d4fab044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=901fa382dc3b426b8e5893796f7194d03042d40347c0eec1158548131a57196f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=262548e702a2a9b6e6302c0210b07e8438851c14a3afd0f8c59db4c1d4dcedaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=5936f3c75f5ba76bb3b8a14b84ea63cd45a5c167678ef81eef22976cd9196e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=6456d8f617c535c9829d243083cd0b7f636dee0fea88342dfa7ef6d4515cac14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=f960be0250d5f34d0a726a04a9be88ee46e5360b731ac968ef3e2699d049711c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=f92c795b81a5e2245de959db0742df132924b8f1dc8153a9f00f5d1da82cc104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=fa8cb42d9d0f8946516cd793ee69f50ca0d806cc0949124d4408fcda24e07158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQJ4I5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SthpkjqBf%2FY%2FJ2M4iPsd%2BYkJU1NT3%2BQtuTFPPpNrXQIgWOgcXy14KgV5It3pzTs3Rj%2F20WaCgnFIsZGvYenEV2cqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FVrV0zXq%2FlkKSxircA1fwzgsA3P%2F1rE9jcLCnSwCotzQ7Hb8DouBkyOvV40ym4ZNI6GHlWTqTwfPQeggGxgXIw%2B%2B5nwO3R5huIGB9fz49zbytv9sfwyaVR%2BuXw2Z0WxsI5L22RmK3SSMO0KY1WU0wfslqQGXEYlPvGSlaYZSWfSk%2FjriSh1C58aoflY6LZuel0c61N6LItuP3vSb5lh3iXbBj3Yg07EIUgqRH1SY9DXfI%2FEElBw%2BinhsBTxXB7yIn76AbOa%2FX1T0N8Ye8LmXIBxyOao9TsUxxbY8YdI2Eo%2BSp%2FJgIEtZXwBSgqSlwsTfw7VXE9ayEz6ZSXR7a7nnr%2FG3MAlmlAkyuRMggFMIB1FNUaWBMRT%2BTGU%2F2k18Vrm4NTp%2F1OSy%2BtKozluKMRo%2FrPGjot47Pp33X3%2F1zi38%2Bg2uWkowD0s1drdviCG8%2FW1Kn8LdBdh%2BLWk7HwYFCUq0WlpIsw0leMfrVbEU4CLh0TBKQdNd57u%2BilbzdmxuY7Ph0ZDZgtyhYYFU8ExqONBjC8D%2FswXSnbyZRah39lTNaCyoI8G3QlOTZUc7KMGTHeFDInffoX2PaJmRXm%2FYC%2FB%2BzLyYbx9Gyq3OMtvucRjPexhxtnpYKD%2BYBYIxwXWjds1zu5lHOnBOf487LMPyd5cQGOqUB8a2EAtDY9SmfCUVuIFh7fneAlDpYa5ZyE%2B0BaEQK27AjwSCdkdWW8LdRX2ERqipAWDGF8MWV2w8HxrJYhEfzPvHfpg%2BAtpY6zexYzzNC%2BKAi3flZ7%2BDdGJiS3DwmYD8adlThDx9cCUYk2kywr2PX6Jqb3lU1IP3lo1hTlHubrsf%2BR986tc%2FkpKAjNdjEeCOaya%2F%2BvU3RB9TxWlTPJUkXkGItv%2BIg&X-Amz-Signature=dc6551fb7e58ce62ab9a84169dab30d606a3ea21b20e5b371a5063637f0a7737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WWCTDM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSP9Rxo2FGmx2G8hlgJU7z4%2FIAvb8tXkIdaG2vtmIWtAiBeUzUL4qGOPF8SjQG9XaoSPudje4LcUQ6nl%2BuvDcGlpiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVVrdBa%2B3Szn2LWIEKtwDDBYW%2FW2%2BGa0dcLA2MARpcErKecYbAuo2G8Osdf%2FYINc1YWEqwR%2BpTUQEUAKW7HrXhsXd2hEXBC8%2F4CdGNZuSdlrcqMFoqfa0aWE4DG%2FPJJR2jddYlF3Fhef1JeDH0lv4Z1GaE%2FBajSRfntjDfNjdU9WDcveBOzykW14i0rNHqQ%2F4oKcp4SNUokPWW7%2B%2BxONOchNI65hl8fH0dkz4T0Af6FBhN6Lup7RgCU8DBHzZy7vvbaVAknP45GFAhiF3Z1HZWUexleqzP1u7mK%2FuBuRLroquk9qcOEUd50b4Knm4QIAsSV2SBfnUheCz2pWr6BOaQB7zivzbrpAlsXomNMUlHi8md5QVS0PyuUtixyRCTYHnf4kweMLXOAjc6YWjKpnOdIVNkEqiMaPo8oT5NQgeD6ATNZ%2B34YXeTXeefF3EgKNjbTxue%2FFyLxRrE9VzoAaBvEjh49jWpcYdkgWn%2B21W4VBgssozLofnHL0U%2FEV4fV4y541I8L0Yk8eB5FT3OBMUDGGYeWcTOggwUns7lOnBWfKnZGUDajdOVszROjpgw5md7SZs2dGTtNqLQbvcHh%2BtVXm0v0cF8rqHYBok3FLW5KcU%2FQPO%2BVhS%2FWKbeWqg3oNXVxe72KeLIK3PD9swiJ3lxAY6pgF%2BddCCFDNDIRvO5f375V9yzYIOV4F9uO33LKHCJzLpxltb8Nwj%2FrOrcIO9Q9vMiSiXhVY3kxEUWIJWEMaVBBjQPzvtxVjqG1TEywFBW2h08m6%2F99aP%2FI51zk36U3ooBRbKQrFmSDMNV6T38IIOKgTbLThy0ijgDJdOxKqbqvcbZpg4Mf%2FiNgdHY73C7dfDIRRl%2BeVLCp7DuryhfwgoQtjETaGcki%2Bx&X-Amz-Signature=445685067fa3e00ad7bac6b5d30e46bad84554826b470660f1beadb8de38c595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=2b17beff70f9a46c9c2e13f8a936e0561c8d32e7deb8e920b4a69a446ead8efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=a68440bccfcd7a3239924620438790052acca6f78f0f4779e96068b7d34959a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=81fc797dee4b9f2346f098afebb3a95f5358ade53241c290b62ad2d4835a110f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=080d31599783fb1635dab489314413430887d966bda06ce39a403e17f89bbe39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=71634b82a7087d0d66a653307b65afe4a31e79b5b52362b8426661acaf236329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=ec1a16fc311a5bede8d1c18f3b57263cba39f9aa6a2f43c4ce06380d138a25eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=13707851c5b31cd06c2ce6f7d11e3027ca30963e5a3b5e1ea4ead4a6fc5362bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=7757faea0fffe3be92365e3a6e99245bc7588c735e2aad0ddc44a63481d18fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3EG3QY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwvcFUfamV1L5ZcL7TaCz6z6mMI6r9VYBsi9VpnrBHMAiEA00IxGVOnjjALYoDPxE6dvfOSAhGldQWcLWUBH3cyjlcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkSkJgXSimbIOHJ0yrcA3twBzuuUTDJlDCuzlj9iKQgw2Gtnlce3H1YD%2Br0OonChggMOdX1YGI8pnguA%2F%2BJiuoXYGGoBfbKvgIwEVcYV2XsZuzagwBxyeDskV%2F%2Bd0GTOTBje20%2B%2FnBlrpOuZMukA263%2B0TDTjVgPD98Iam3EKYyr%2BrGskMRfu2kMOwIOeUtzWhPWy%2Fn4jF0GjwgYsEwh%2FjT8sgDgf1VpTZ9rLV%2BbtIKyYvNC7jSIQrLlWgU16ohV%2Bu%2Brhw7nlgOguBNleCWC5bAdf6Lv5MU5oIuldVW4kwzpjOxrPJAErkl6leeMXMyZwraP0A6m6kj%2FeQfZB6zE7jT0OBmX1%2FoUWwxoYk5lNAW7UY1gcMRaJJtgOzIZ4B8dggGi1V3VQWUuJwxSAu4frNAfR1O2WqzQSe2cttUBj8HFabomCTJhfnCqnM%2BhKRUvxvGFDagi8%2BT6gIcse1aKLyXoo3dXk8p6dwD4F5m49Xr5wOY6RYYdbxT387B%2FiKmLn6CRQaDdFxVMqRyjg0L6vitEEqM%2Fmrk57bMjhnYb2tVGJYmfGb%2BYjoYOqd7MEgtxbevBeVIUmKUFHSrG3zpHh5oQOaoZwyB8apGU%2FqqUurgVbZFxgn3TGNJVNxOpImcVbt5zh8OOHWF%2BuaoMLKe5cQGOqUBSIUzdyey52E14MNb1Z1P7RJbuSyfy1AHG9FDG8TMoek5HfDiQHl2o0nd8SIgP0eSrjlcBrymlyOHTuGRYG07HaIC5s8M%2Fr%2FzT3iQirePyBNvt5xpua0ofQq4FFbb1M6L51ByN5ENmMxntIZLFIscrRcMXmgfiwVtK1gjCs8iWi9drfsODXhbq890LYmWZCpL7SDKT4XdOnsP%2FXNdkuwQFTTKWddn&X-Amz-Signature=44598191671407059f7c4e98bb40f107468fb4e160de57c80539223855ac8d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
