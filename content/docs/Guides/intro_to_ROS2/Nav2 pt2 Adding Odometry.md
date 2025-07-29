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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=48d29aaae7847aac3ae6b0133482a8ccce4af51feab07d8255e27914a3934a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=3c9735c392d9ec1523f5db3f367978119d6cbe5494f139f2245a2c7550fda930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=54b4723fec0adf225241fae37567bba6b51c7344d6181e25e9c4f9f50dc80538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=0ba7f3a1c220dcf950e6441b9a7aed9ea5abe03781d25ed4de11079119785b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=da4a121dc4863ba9509e9ee1ae3af4acd772d49a24fbab8927e54365997e0006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=d1cc3070f6d4b82144b33720cc7972398ce9161ad80236ca4e2204e0e9b30368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=b5cb3451e906ab6e5700d8db096e39cd9f63b3a69f4ecb6b9f44d3d09c12e07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=97c9d0949c513e2ae159d06ec8799b90ca8ef196e2e36b51a07543d675dd23cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=d31b6977f8c8bbe5d543fdcf95e4eb0069364f3d69eab73f53b7f3a77d3ac645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKITCSH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDX%2Fgn5QOU2AQNI0L9KhS6isZ02Fpsrt5i5KjF1LFVufAiEApzpZpnhcMPC3M4Ls5smIFXnUo4MYv4K76F2MlS9xft4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt5gN5zSDY1s5BCfircA95CZP%2BMcfxBld%2F43dkuYr%2FYCcZanYXvLO3lZ8A6rOoOAIZHnsnLRtPAozFOvuS8e1H9kJm96vH6zW%2BEeih3aFP2jAwKl49lABK9ozyIqee9vEVyXp7ckbowvEL5HcmNgeNFU4gqN1YwVH%2FWyMWacwVqsmQUSIMpWyX60Qipu%2BFGg5wv2XRrdJ9CLRn3c%2B7ReuHDUeQsA0UY2D%2FT8w5tcyZojlpGnngTbHOG8AOUcsRAFrHl2SNJ%2F1zQ3upL%2FUSljfDj2biQyHSNyhkJhuIEK9b%2Bz0eYW6V0ImWYOvH8LYUrdDy3kMi4ZTB0cvdB0pP5MVj8SBOvdLfng%2BpHkuYXCdCesDfowBQKRwgd3kgBd5YePY5wo%2Bqp8vT6%2BEXpL89uiclr07Pw8BvIatgKFy3qUBEq20JeirALTCcPKTCpmg0UH%2BsGTF2%2BpMlfcFJylUTAhfl2ZGaRr8SOQEezymfBeKbayla8kE%2Bv8AiPRDdhwVfIrEqMVUYOmrRshDr2n6949I3OqQSTeZL695OTJ3wu8giq2lu2wT6NbcHn9GafDzVnYFEaSwsXu9Z0fumyLsJ3bUYObi1rAY7GFWUW83zd4h07hTlo%2BsV4WdrwAeWtxp0AJA5Tv0qQUdUr5xZZMPStpMQGOqUB6ugG1FFA7FNucN9gNxatiTzau80OanUQb5KdxV1%2F9bUnbV8%2FeGs2pL2d2eTbwCpbe4VFrMo24q0l2uPXnnL3NXdRlpXZrO%2BiEQzKJQyRHY9m0jQYcgvwHH85zFBAvApNVkpA7Yau2mzGzuGDnmNhtWIuljtY5keSb%2FuTaV7xacK37xUyBGLnX%2FNWQ47%2Bys%2F8ikaH5wkeibMhpddsqfHtAlJ%2Fc3XZ&X-Amz-Signature=3a18a95a457e3d3782c40f441d664c59f52e65d954864707559f3130bbb99d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKATRBW2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG5U38Y67SjFJ7AQg3Y7cqNgkOpzFBynNNQsrgwHwBFwIhAIwYHjXBw6zmQFQAtW2LCK2i6KA2ZBbgl7iPgu%2BhlUJoKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyIMRIMt3cj9PgzFUq3AP5jbagJLPuIgQAuHHnHGPZs64TgZpby5ml%2Be%2FhLyhQNB0%2FVC7QEXu5rJ4w2D6peJArUyuTUs0TA6ja2jX5jzZ8prUZJ4vPrYQNUGKLOvsA4dVDXeLvjCSBOTMeeD2pe%2B4YJXwgNHYiFiH1LyhveSQmkVVsLWaK9wvNSGNFjszYFeOgALoWfT6TE7ATwZkQ11UyjBoqtSJdxhSwFW4%2BPup2As%2BdsvxRrfftjRyNoJv2YH4ItjwK0uMiXbrJOirGKZQIy74xQzZXvKa9Fuyc1txhiXsDpfyU6Dznvp5dQTs9bew7cXvE6wbj8tvWaptgfvZYql8%2F2ygCbAoaIl65wQw3Eu1YLPwOPooutxtxnImu9hkdLmcZqgfALP7cuRxfZJHsfIIxIm285r3jStKDsSouEBn6GUXF7nHCL4bEwsgRR3Csg%2FRTVYnLbhi9L3hVwRIIGUldnYDmks%2FrxdOh1k4ZvhrdgygImqkcTl2pfrHgc7AOYGaYyVaO%2FZovIOAYspUicFvSfMq387fGBjYfcD%2BCiXz%2Bq2f7IA14foBOR6eSfI%2BL2wNix9TnZAOV0HOQvXnjQODqAFaC%2FVD%2FZJWB9zhL1B3elymig2nmlJefNFvYLhQEH5lPJpUw%2FmMwCTD9raTEBjqkAfpFY2MYfADgs2KrjniGKv%2BlfUj0rJ%2BeExKfrJMQUMo3lO1641gy4w1oUtK6d4XowMDJThj9OBP27XjkbNI93ncFk8euJlwK2w9%2F5bMPjdiB%2BtPtKD4xNJN8I%2B2PSYD2umiJOvexryHJa8uc2ya2ON8Qrn3D3xotcL3AOYFuBW6h1%2Fqc2z6s30FzJc82JY4C3ORynrXncWME3VPymTJ%2FexWVwuQr&X-Amz-Signature=f2b338ddbf398e1a3e9bc8f96bf900e46deff5d4147019e99221e63b6025fefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=e8557d73fe85b68037652f951d9306480b51914cd2bd16dd115e10ebe2bb6cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=e13e45b7926baf903442447e8db1edcc88d4a46588909d83bee703b80020cb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=fd660fe7f91ac8fb07e2a7af4052d2d7a8cf1a0677ede03290b7a2765014c5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=c80821850898e0796b81bb4ebf8cc8929072587a90a4ae6abd7297dd6b5518b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=44fe8dd1b4e11dd398a568257672356842c523cc00543e99cdc85e33060bc940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=069cbd989af0a730327db8b561e14c80572f2e320ecb84ab2bfeb02ebf8e610d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=a71a6e35c13dc14707b10e3639391f335b72bbb3419e17dcafef4b792f65b927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBWIIQK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4smUoyLPvQ0iNj93LiOCPqYUSpNO1%2FpCP%2BFW8bp%2BklgIhAL1kG%2BCOZ11H6esEef%2FDHkS7Ao89kZ4t2DR%2FDcdZdjnDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXTVnT0aHvXPHeYmIq3APPtCGa5G5%2FrIzbakUfQfnjVhcrNKTNUbb4MaGuP7bAUbwWAOPaXMfnIoUnAIqVY4ipfitr6JZ%2BlgwP06ARAathAxcWkmeJO1S%2Fyr6lqB%2BqisRpv0df7SLOusTlLTA%2BKjYpsryNYIHrIsmyfVQHflcAWcU78%2F9LmMlZfYZ5oFvpmPN%2BtEigSLIYKoo0j1fWyYthGjKi88sjhTyx6SxhmTt%2BlZJwa5bABXweSxSFZHFonD%2BEm146Xz45CnVNl3SM2Ip9Kxb%2F%2BdjLKvSFgQ7eV4K23895BsKmraJcCRcjv8RtxiuQFIiCFzf%2FCC1pKMkYabfgFSrxzZqmLi%2FdlZ3UySdNte1E5urmlRxsD2PGtb3FHmpvAeu17eJ6P2A%2FFXAS%2BF6jP8EuwGFDLBi%2B49VPmXfTi7V5sp1OTfexwGV35QuvVXObWQCyfo9gdpyxhLwFLWL2UoZdMnNKJF0nydC%2FAM1gkP5WOoUR0kdeB0pUgZDR7oRlE9oMpS0w3gQ8TwxqdaaL%2FO5swl7OcMVwT3mepM%2BlbIAPE6NEExobsS4QVw2eCM95e%2BWwUkJuSgPYM7wOGf4paX7s%2FM%2FnIRcLdQq05C0wQbdLNckxYWFFZvF4ogL3Y21oCz93Kdi4S1W5pzC6rqTEBjqkAVwNeTUE5MITh%2FbN1fhd4ZfgbR0eWhVEXa5wMtivPkfDwXdmyT%2Bgf%2FXljX11ZIQCCcuu%2FygaK1a5WuHzs0sRv3s6NR9rgxz9nZJerWkjO6oxzl1VhjE8PtTj2nqImbuOqkNXEPTDpOmWsNHoeaCDEIiiZs9MWEtya4opTogvmc28Wa%2BQLBKLmTRu8B4k1JYBK4c4Ch8ODfMZ%2B57sXutQpuzz5gwS&X-Amz-Signature=23b4f1cbcb2c7bb41687e78c0f48f4959306e646350ae29319ff57dd27fee4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
