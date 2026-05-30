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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=690435fe4e5d86802fadc106e9c4f38692fe615239db93957a622d600c03ebc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=2df3a00b4cf99bc57fdf8f3e38fc89599641c9a29c014ad8a668c7525eb3bdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=41910ee5e397244dba4173351b6025a132f6b07671341358b194808739d8931e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=42bf1170a04c91b04308913eaeb3b49c54091e89bc677786e04e83d248ce0b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=e8efa9927ecf85f6bee476c79b893afe20425299118c3997db58d46fab9a217a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=e510936a7fecad7c5587e5194ffc5084997da45c09b63ef852a6f4213d091a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=a5e390188a6b77d2417efd831222f614c737eb029a7d3b2c0f04ea512f2c20e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=4d816648b9e6bd222cd6ff7cb282ae8f467f19283ad8d1a51c79f6bd3cdc06ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=df0c2f4e5cfc740f54c13b843a224ab28c5a65de56bd109a09fba2cc568a9c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YVP2G3%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDSF8XoOZ%2BMABabT8XFczJt5zuTtWFGDXyiRrW2HN6rWAIgVlmODKMdfXP93ideZcOKT2p0unfilc8BitOtZATerX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6o5LRg5lJ288b%2BhSrcA1NV8dBGl8BC6yJiOLw8nCf5%2B8yn0S1Gg%2F%2B0%2BHZWvlQS9U1UPVq2lu0fNw9%2FRITfIOvJumdentxXmplCO3JP33MuKNHWmPlRanzOIovhlGf%2FZF7zLhoNPbvCKrbxFFA4GyoREVTZv0XnJN5bzzCcODIQsbcKPP1HsApW68M6NcKunRUoFyFsBFXXFz4K4tcOvllUOnjJJkRDYusBR35hXxjSyfDTnSNUfKNt%2FhN%2BM9AVC%2F6OAcS3xbwxCWYmmgXAwGGyvZV4g1VUPTgqwoCJ7En%2FlZ0tHYxk42M3WRJspJNRVFLUwtM9abAUeIhVB%2F%2BqDe8RN3AmEhS72WSH3IqJVd6HUDMFlukWIDh%2FKg8Pk5%2BXSGamy6OM4bKQ1cnEVukTtuFpAi20Sz0JpnqDP6M9DmWn7%2FbeftKodMpTUe1pZZ9z97By1wumL3uHR0oNoQwJ%2Buhm5LNj9Yz9bIvroX8j1Z7AoLlMCNlE3hmY3LFQMUH0Bp4KLyfnjKhHrmdwCGVxzjhhl%2FFuXBWANmBaRM5TD6wRchokSSsdXWmyCa5F%2BkO91cqQp85QADbKTecEhN1la770E6ojWtYR3nxjbpU5HjN4AYe2v%2FagP1yHTUc9aOoMV5G0%2Ft0bCbnwwEZpMPym6dAGOqUBpfoRfxz91ocDnpydPAz8j8u7vzfa6TCgJl%2Bxf5pYInlACzI5TmQ53fOSUV8ogMYkBwJ6g6GLnfQfA%2B8vbZvcgBdOHfY4fQSu4OrH97psjK7qFK3GcPdB3Gqb707bq%2Bl9%2FYibh8Le6RugOspYRv9dQC7QOSRFqOlQbYp6azaj4RnVzqG3zR3X%2FKva65bb545YegM2CmPYRzeKV%2Fe8A49EkQ98UE%2BY&X-Amz-Signature=8df141d5b1d53ea4cedf129e13011901475b0a29ef9b4ee1b13bbc3dc2aae6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDCXFR5%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGKk6h6223%2F8NKJeb2DrSxCIcABCRSzknS8JQQtf2%2Bw5AiEAl6Q1QB00vmd32BR5y27PhnWgdF2MbfnvKQXrPTThaPsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPA%2FGpsOWSZlM4aeircA2NkVonx10e1JrDOAgbS%2FmFIMn5Lutq2wUbH3kkBLkQHoACXS%2FEdmEQ6GsDQHyzsKNp%2Fk4SxJW3KEjx41JP2qx7SrOGpInWxTDLbllKMOt5UhkH6dd3jecP%2BGPkd59PH0wMwpw7hjoJIuGFXTVl1QlBg5hz5U%2BjvM66yoa142zzgH1TaY3BvrMvq%2FgG5WW731gtY8WNHE6bKVJY1%2F9U4WyJQwXrCVrAO%2F8EW7Thr982ZRZsiaooFyXYMRizqWCBJvMREqn9IYlBIQ3QHKqTEcrteoyx6XZfWjSZpO74Qn1uCQnqNXr4WAUyWT%2BOJIhWcbL9YwH4axeMn%2F9R2RJY39PWFMi%2BpHagW5jF8laNN9wbcM3KpL9IwFDAn72APRi1JrQjjpVIG%2B2zvZ%2FCo17hoqvJ9vDquzfQulc9WQvNIi8y%2FRSWFonnqlalZK8yaLLHWkDLErmjROa%2F1h884YEYAMRIVUpB8oh%2Fzn2UuDzdwca7VUyUazE5zQaLMcSDw31BAkFdTZPBm3pykHHORsA3w1Xz9Mc8i2d2URR5X4kWLth8r%2BAJskwSi%2FU1O7Eag2rpDRPcPrh3%2FHfAZaeMuYKsobIhHNcmeoTZtYXgyeYAr6m%2BsAtoMSZCInXlW7CvMMPun6dAGOqUB1Tjb37n2So6D8k7LjEczYkEgx5lHPEQiFYJ%2FWmQuRpXn61phEIIp%2BLfI9Mrn3PkEmRpSKgjf6pjYXm0d6sEJI42w7shoAhnD%2F4mvKXs4uJIhQ2kzh8S47IPHcC1JmtSlciQzEhXAFphuNu77Ojqw1xyfkzKJcYjT0u3%2FX0syfd9ksQwUEcUoGU4%2BpzPEGKE457BfOrKTG56C%2Bo0RZOBIyL%2BWiapR&X-Amz-Signature=f25dc3144fb305a528947cdf60023d2ec3d3a4ea9ba95574b9880d559b85bfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=6a8bf800b980c86c511bef639d9676230fc0f6340dfb01d63569d139397a71c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=d2511a89f63089ba2a0231a48744edd5e2b38fe866a3a1212017cf49defb15d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=0a75c2d6614ce7987c559e2515d889ea116c7881de7df08d85c270ff3570d1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=5550c6e6b9909850e9714dde9a0cde9a82e3bfa6eecc21639108f75d1961779b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=2afff80ecee8c1581dffa022d9a8de1ec899baed18c18d551cb6e991a0ecb5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=b6147780b7d9b5d1e0f2cb957a862c14701c2db50b5e0279c40ab571385bd2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=e7eca3fda15af76e6de2f4d57763b63cb32de71605c62a50c3fbd9ff4479d7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=7952981bff91a4979b82ced844208c45dd8fde002afe7d1602a3a34ea1f0b8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKZ243F%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDrnVTvvx0vKElegNTXGjzsuS3BrIDsh%2FF%2BqfedAX6Y7AiAjx9hMj7YHp6%2Beh3OWDkMQZ8ZSGBRVD6m3ewlYoJAtAiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DhXpXJMHnzfIzIMKtwDm1%2F5myQuKFC1W97BJ3T7HvoB%2FM7fg9nvPtUjDtEUGn3THLt1Rr83ve%2F4VBivzs%2BxhRC8Opl4mBFr8HkOw7wgEgP9geUnDjDVwKfcwehpqUXYejhH1oymyiTiJCwzkqwOBUTFn9jLIk5l%2Bt2MeXv1%2BDWHbUwRQPSYwtylAYaUMbbBkTm4nGzWbeGpzmfzKX9CONHT9VUgQYhKdMle6WpDyJrN48Njzm7MUN5xWeHxrTxVWsHB3J7pmPvDvrrnFXFzpBiFgQ%2B%2BzW4oNK0ORQsQt16ccMjiFrrR9nGz%2FpOsgFJa5VSapoMQpOA%2BUQPv9SBEztaz0m0l2z3s01Sc5c5FxLOZf4lCLiESEVDFfWnp6Uu9VhB7lW%2FtDe4YCJ9ere4EfCpapPq43tAMn%2B8O8Tu1irV37Uq47oU7O5uqk4D3VIu0rwILu%2FrboJBvUwklpU%2Bju3B8RJcWb%2FywLYloiOy7HNOZIZGfh7JJduZ%2BGR9ysfi0kiS%2F4cSDsMFWI5B7A%2FZ8gFj0GhOnIHn4yTgCsyzQuFjxOX89D4z%2F6V4kjiU0cgtlZn4wXOTzyv4h8of9BZOaSuxPeA96ra5AZqQ14SOdbEC4VHBOrYmoFKYigMg2lbV2Fp1%2B%2B3f4jbCpkw4w66bp0AY6pgEh2RSvHhbhLZa5e0t98vng9DmU%2BmtAydauClN6%2FPd1AZ%2F7vTSKBXkzofg3SKN0KVx4gXaEoqRl1xuLTUAs3QPU5Jfg1jkHLCEaIN7ldaQgdFbZr5naXVPfWGxm5RXxZ%2F670lC3HLv2KR1QfqknFxaWaHPxTykmNdWfNPe4tfLiSOL3Lgub6DPdEn%2BFeOXWBSMDliFro%2BrqecWww7At4%2FdWK3hpBKI4&X-Amz-Signature=ceb11ec4b3c6c46c7097d103561bfb4333b25eabd328dcf5251f5a25d6b21c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
