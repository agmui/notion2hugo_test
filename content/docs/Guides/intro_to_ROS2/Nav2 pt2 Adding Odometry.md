---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=308989c52a3873e2438ff0b50ae6cdadc409f2e3f2c83fa568b548e3d4fc0bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=e19a71490d859b50957dc06119810ff65163e06a065f801813ebaf63f23e8efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=214161ce6a5733cf636803366ed3787a63952b71d7eea888a467de4143e00922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=1b93097f50eda584b0c43533b820b9c5d6f151920bc65d0e7d385bda8da94c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=e97ca76181304b58737c185fcebccaba554322abdce9f50d805f3dd81fc50383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=04b488da40ca0d10eeb57e61b01ffdd1f2d8ef9593b68535dcc59ba6d28f7734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=8b387452c759272189e4560385be11c541d7399f7e64d9688b52c24137d057ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=0674f30ecdb8ed644ff9b907395d74c28224e36706d2d017745e075bea384ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=2f9ad6d8a7c3e5e634390e23001d7aba3e47763c35744fd66f4a0f949c492ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWV2CPY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUduLRuaA7GG9mIFCfkSKoGNqEKDg%2BLLen6Q2MhnxjZAiEAt5hwVHQyB61qQJ2tyG6ELgsJ30dYOIb5M6w9DSyCXiMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIrC7bUKbXaRMv6dSrcAxAwfWlnwXPmkcOSWFcohBTFC91arfLJ%2BrAoHmzRnMBE3ag2Rvvd5pjQWZ7Z0WsxjqPfmfA5ekayoIgC5pUfqxt%2BltyRG9sGa4zb5t3gQYoooXAZSR4V%2BpzKCiwzb%2Bag9DwbZMGMaztW8KQjb6v6RCrSUoM8taqkD%2Fwam3FoK3btBfcypU6V8DBZ7PxKeuex5RNdcbcOnanOCU9NBTOVbYitJoAZKzJ7NSvanQLSi8Vw1QfrdVtmC25ZJ77CYEQd9g8%2FWD6YnFhJffDy6azFxmZWMApjIBTwSTP5cvkW9ppL%2FdQL%2FkBzA3CXyrKtWRVB8Odbtk7Midxq6WsxSyh7iHBiPG95VQqELxFTztkWZ62qe%2BT5jx8KoodXpYPWEt2BdIk7FvJUosTFY28W8GixK%2FGEkZ9DOV%2BSyw1gF3jOIJuHKMrZ2EHY20UUo2dManJfDGjtgfjjGQ2Wt6ADU5bpdhWRDm1dnzZ1oveZlZgw%2FUe7eU%2FhMSVWGXprAkrvgSend7BpClLmknMli0w%2FBypl2k1LD09rZi7d5LiPe2Rhznd1NmfQi9IHIzivJVORmEHErpsqrBlWP4nuQmAxO%2FzzsbRmoAjUbx%2FdTFmdIBhgen0J0KPhxcYa2yTTe8P9MJKKpcQGOqUBQs8kOehUw1c6gwMz4UCiB%2BWDkDt4GweOFMHCehAfL2an7U3nVocEwwPpfZn1e3FS2yttiFT4abGsi%2Bq04jfPLFXXrzz4XtPTy7%2Bx6heNKXTq%2BcsvDSKshLiN4%2BOxsbmZ0e49nSsiGYGCX2YRer4IbuAu0FSLXYxDBXeSx09qw7pKo0PkwrmYpBZWVbEu%2BQRlu8Jz8IsNEt05zokVyrZXD6nDvM3i&X-Amz-Signature=ccdc397f13a2d2c88deeed7a4d28609c3b9f65ff43df6d47cd93eef0686882a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AY7I6W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5GmwoQyZ6EWSy590TQmGAfMWxYAZTGgZqdLcPeRmfAIhAPIC3DdDvVJF2%2B0Rbm4BrVrVTGdtqBHfyJqZuWouTth8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkHbwXrfAVX%2FbbnREq3AMSusX0gtqC8iMCt8GJ6r%2FTOh4PXLePaVGtzaTGj5qkOsW1BQr9dZWbh4uLic4j7%2B6HIaNCpZU%2BlW6yETlix8Sp5GRJSdfvqEyECtdf2rN7Y76zb6I85vlv0sROubTDaoDcpNsms5sWEmRnAaxpZNC7DGDyZPePGkyCJsI%2FnBjF7e07brPQxsKRvbqwVAtyAz6dmEKpZPotiOfwaYZdE5NkRS0Xfaz%2BBJDlxaRDJwCi9Rx9zko6O4bxjdmMmm5XWN0uEwj9mxkswmC6sK20q5m7lv2wP2GmLTTMpvn3dMdncT5ojxPbYrxz8NmObNq6yjKDKjWyIeQLjukNgSmEU6U3RqG21d5mGaRVgd%2BGLM0hQboh74fN4EngMpAiOD3zQ5GzIjJS3FKQdvlL9xBDZ76STDNaEV3zreCAHTilShL8ybc%2BLWjJ2a8NdpxjqmB05TauFa795JdkLvD5aePdyZ6fqiFob2chwGFFXRuiPbSj%2BDUoWpRsf4D8ej3aY4aHvEG%2B9o7buDOaegmcyaJVRcdcsOt3O1%2FT74cNcJvMcWvRrX%2FQ6vGgTIAXvEFduu4IH4sYXaybQSV0mFABYqQz5Ex%2FMz6TcBG36Q%2BExQafISR1zkwGRqdbync91zZdmTDUiqXEBjqkAQnhMZLMMe8DR2PslIkRmMAU0oOIzs8A5NwYvEgEjesp3clDrk%2F4Mm0b8yO8hRe0hU7PBhIOAgoKXzkSvv3rhBeOjc0i9U3ezQFB6ZhTSw9yOUlwHFbD3ZkoGRQuEW2sudscqGnWP2hfvebtgWBWxmALMI2FEitABj62I%2Fdk0tOXQPr6sX221OXK0szXsZ%2BtbNBDKKijHptLZwaqvZepz0OnJYcU&X-Amz-Signature=61fb8d648551bb104f33552170ab50adc17e83704b4bd1cc97994266e7ddf271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=8439ae188ba4d303e505b73c25b3cb01c96339d58b584fdb54182f2987012ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=67a641e08ce34c84ee39c22770238d366388c7d3f83fef365552dc0ed592470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=e2ca332cfa43f68f8935421726567e9d408588af312ea498eefea3644afbaf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=83fcdf2e2fa716cf094958336469faca8cadceb92005012a2e85a0829ba2c5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=fdec725d1a2a8d7f92acd9aec4a13e03fcbf8e07dedbe531ce2be43f8942284d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=af18bdad732e60d325c1cde1f784b497832beb8e1106cc0109c9360f3b624a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=ed67697e05a1d409b54c9eea44e3f50e262fbd8114dc5f21d81d64d041ae0b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5XH4WG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9v7U2Ti2bJj4gVLP7EBsqf7ozkdgIfSaWKdWCNVEFAIgXNrk%2BF28tCQTjtyVCKl1lGVJegVowC5XjhbEHCiCxD0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPxWn1PwSE%2FbporOyrcA4wcWMgA0CA6xFfe4yL3Kwbht3doDUPHXgs6USz4NgNnUQm0t5L%2FeI2WkqURaFYseWjQzR32jQYb9mS92L3BU6Z%2BdW4RgqPhglIOWAqN7kxkQsuHY6T9bZaSGWDx7oK715qK92ssrS6yxGtR%2BsfbGNiMQ8uYGcBaPT7lRmXvPhcBXjMuUSgO6jDGYV1B%2BSwCBF5TWk6%2Bw6tW1VNL1E%2BaKWC%2BS88F8DR6E%2B4I4SmoaL%2BwzGfSRsR4064K91s34qk%2BOURc%2BmU7FXaLWvt27YhOilz9oaoTFLZfC95ezCn%2BFn6xEy06E%2B4Eo7hkNNbhNoy10i4aM71UV1mEVqhLHN3bjkk6YMhhE29Jr5cktvgAA6x8VQxAVRQhLbjTiIG4WA6iXC78vr3enZWdyrOGbP9C5uf4gatreTRVwYXD0u%2F34HZ3an49r1cG3jnVgNKo9LHS%2BpHdRftJGN4vRCUXGPwv4C3DibjyJ%2ByE8D0WG5YiMMgzbVAEUdlIpTOT1L40TSTWhB2FI7LztglUNQbKCtI9nTbJVmemgLXUE6zwj%2FbOROLORM12pZ3%2FKLSmsQnfBs%2Fxa1CVxHVm4T%2BAy7LgQkhFwFIeTltpIs4P8bMQ%2BhtX7CiS%2F9yRqo61OF72KI8LMJiKpcQGOqUBmkpZaM5R8SLxjZwch35y4sSGTP1QkPz4wRXJLXNubyt8jpZeiH11WFs7a1F2CHjF%2BCy6IIpAbGSHP5cZtTxqLb7%2B%2Bei9OI3MO8w0FwpHZ18vstE7I4vmpIMdho5Yy9ZkB8NpYUDIqMD7jK%2BjuboCrlR5DYC7R7Gtj9PP2Yq3xanRER6tLmLM3ucyN44Z9618ZugbbqWq6lVlhP%2BifX%2BiwAirD427&X-Amz-Signature=3fe6a5ab79cfb89751f0717338f2ae52392bd68f3fab4bab2ae8f7778ece7f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
