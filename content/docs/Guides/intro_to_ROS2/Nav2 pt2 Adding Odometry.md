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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=b37c1bed9eca1957aaaefd2d3548122d03ba98d3ade52ea6664a9ca7464aea6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=a37c671b08c1bb87a47ac5b29309bc96b60b5b5f8427616950938682dad7dcae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=2342a95e4f9cf6fb1e2eff911eb04900828f7b566530b1baa325743139d5f0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=0b425f56e5625d23bbe25f30d7e41086f8c610cb82d61328d9146224910d57bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=08de2f2c88f9c1aad6db38f41708f255d1617c64be7687f4c9256eea4db48d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=e168c1d9b67bf097a212027be7b74aae63f60fb6e83bd182faadebcb810c77bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=315657d0b0aa17002182493972c2a98a797ab6b1b274dcc7995b5c747598883c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=5579c800b96b1546e37bdc776231b4ed22eac2726c8ce74d1e4aeb76fd20c27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=6726032fe0af9e4b3c4a04989e215d9e4c61a5d9a3b173cd1f3208105e0ffd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7YRCK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoHybsa7VX9atMTDY6MJzPJujYrv7vHw4Kx1%2F49P07%2BAiBXpjAz8nQGnw3YzWBNplrVfplq7gpdILsbOpUfHxw82Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaAZZ9lIyrR8OnWP3KtwDzpiK2yD9VsHEknE8y8Ttg6KHt7288efB6wHecFx54qDiuGmXJD4VKYxaX1C%2BTO76e4Ho2KWVBF2hJg9B7Ty8zR8w1Sj2rJtSG1BfVwtvajIdkn3iVl3B9TV1h2LMK28rYGmy%2BfjP8Z5iRYTt4GpgCLbKik%2FlrfAbPex7UpNmYIud%2BtYNPab9irrvu%2Bcbm7fYpVO%2FzckeuvDPSINSSMDBK76miy63D%2FC6bpwC3dggbmkqwbC8J0Qma1s2aPTZ3S3OK8peJBztnWbZ3klVx44f9KkBTWjT2cGuBzjl1V5sNK0GMh3IKwKf3Vz%2F2JouIBkOnwRbNAAMNPuuMV0og2BsU6mrCAjcLo7uMTJHQavjds0luozQHGY2mZ8fYmxS0ut4afP9CHnJDSa35PV2qGYWCfYP0YD%2B2bXQMPO4Y%2F2S%2FXWZKdy%2Bc3GTSm2y89miEUjjKDOOPaDCWvTVmr0zqJER4epy01se5WsZlYS51yjJ%2FHc%2FmtpgpQSSa%2FlNmHrB5gGTZ%2FSFxGA2pGxafSIoMvyGaDl7%2BRpgVUDz%2FzJNnQaVONFNXbQmRCXqjEbyWvJk8icDV%2BHGg%2BHVtYiHO%2BDJy12XgON8D9LNmcxKlcelsodKgem2ccaTNTdthhTAlYYw14v1xAY6pgGaaSC255c%2BGv7LIYkE6N2ezk6oTEJbzqH7%2BjAt%2FOhtHciFvRsGBdA2cL8oBLv14778oPazVGZ%2BoIJt0plujp04fBYHjpw3XWRVq6UTWXUHsQBmjfc72KlKZPXqCihZfZ9bENtFct3qCSsUU5DFAbncORR7iU0k19LawvpqZVvbS7Kz4eOWvImwTNPBthayyDFGTXC2oWI%2BftI1GCSrCtbCOY8hLT4z&X-Amz-Signature=bd12a19888857645a99776ce9609fdb5c8eb1287aa4ce443e4696d78b14c87ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLXDVTFS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCopZwhRTCXYHjZPvN6rOjMs2fXywpWYG0aND1jHAjL%2BAIgUrI%2FN0S8rsofsqY7OWf1lQVvE9GirQmFo0hQJ81ScFwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDJCLsyMII7C3w1SwSrcAxKLo34Xc3gUUpqG1Sue4LPbRQQZ%2BRHZZNfN2J70hc87%2BD2E11aEvnpeMM8ts6JNY8B%2B0UmQ51k9it0PxKGLW65qoLn9whvqfi2HlqpRT7p%2Ft1VIxiDIL5d5m6CFzpdX2I9wm%2BMbUDkEhOy6N8EH6uTTSasmvGdHAi9andT6GCzVUiRCDXHgBllWdFJLiqEpQKY3XVWZ%2BaTXXnAXMIFlHaQe7YEXZIsGSj4gEzzZ%2B6ODZMRg1cTO8VQbjt2oV0V2uXr5IPdOwokaYOoAM8csX2Pym8DCd1jFxUICgIBlDbrGd2hOQARuIUUjNxh7RlAtmbsDuwCt%2Fcm1ppeXxZkUPwN7vjzd0FnedXLUATc7Wu%2BroyG%2FdM2e7sIPQU46S58CjdujvMs87D8vQ9IvdblUj1IKTx5WnwofSIbTBIFlq%2FklzVs13XKAKi8gSLJ1Y8fEj0UIaHk%2BAlgGf%2FpWiKWkpZYJSY4panBoZCYRWGydoOAACgy%2FZ23yjpIEL6sMUIni4RhXMR9%2F2GbbskHwyApBT7YwEOwvwFQLkypVB1kibz7b%2BkxiE8SqEwWMHNOh%2BIx9Wr3FlHwlZ2lt76UIAFPiTN%2FMihxfQcoGrGAqqyxn6LL07AKfAg%2B0QllM3MFeMNCL9cQGOqUBdHz1Zhpw4FXEMtsIRx6zQ%2B26I6k5oz65W2a9YkqlLAYzrN4FgNC7KnRHihgWnLuG3niU91p%2BojPKuP3IuxG0FfWeMofha6YcmZHZyRYwWFItd3SWBdZOsOrduv%2B9QU1%2BgvZPgdIEtoi3tS2Jvur1Puks13eL%2BWfOSnSnUNt4%2FQfLp0cF%2Bfg2T1P7QOZT0LsSvUMD97NVk5sT2WNbbtZPJIELJzRY&X-Amz-Signature=0cbbe1f17e246ebbfeea97ff05c679391710c600bf395e253004544f11093498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=54a7faaeb37cf7815147a005ff8f2d04468c410fa62727f86fdc869c756a863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=7446845569c5eaab3b2f7f515ad3d1d322f7366130b2744a2d06e314ff1d4433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=82a64ef5dfb68fba3ee12657028ee1561380d8dcaa3e664c21bf78ff55eb5e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=0c4fbbaf382a1c864c1a6aebb9c10d04dfbabca8fc36e9facdbb13f8710c29c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=d6db4925891ac03d303183602744f8663d2015f7c569fc4c193e8bb8e413785f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=4e268f4291baced2effa8622fc4ee88f7423f21b4e9ad8ed935686e0554e30bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=8c20ae4a6124fe0c4f1d814f56a8b040d36678303364faea2a5968e14efa51ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=84eb95d0826eace13dcaa5e4355908344af05a17ec9c08778a2bc8f47e40ba92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJJO2SI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F6x%2B0ViGQzjOew36DDSL8AMdM6aqdqMUsYpqH2N54SAiEAuzMuAhv71MZYihuex5%2BQSpLs3FHtfth3srl0E2A3SHYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFnUBEUoIilzqPxBNCrcA%2FDvWrp6lASGxHUJ%2B3NwcdMkQbrI65R%2BwqppFyLwQgCgWEwOElNjGeGTlR%2FG5u8ErHsonFFHE3v8GHn4TxytOQlkRrQi00tisyn8m%2BKO3YI3QyWG9vHgEm%2B2CGZyS2LcGjsXCQgaU2q4tfyt%2FiQCjUQ4CuLPc9ARrHumLDTKH1R2Hbi2VQTY7b8uZ%2BHAjgkMFVufva360J2WHGCmtdy467bo1Sl1pImIf29ixIRB6W2lsOf%2BNw8CdwF0U%2B8ARCZLChvYjVF1fU%2FZMUFx6me%2FUBDajqr1ws3%2F2E9cF47VeURkdaEiiGsVOfJ31N6fLXHMbDGxyTjwlVrsYBomJK%2BfQBgh53WzSH5lu4uZGWyu9CU%2FFtmbw9b%2FJyAQ5Fs6N4Nb%2FuLkMskXnThBQROhrD6GVVItH6n63FkdJaWCnn%2B84pslfmVR89U%2BXBtDbzi627ubETPtmDrc4QE%2FuUxyvRT0ZMAStPki%2F71rsps2bIPVkhVQldcflQRLxY4Gpm13NMFFqkpTMiSt1xOVhJzMCz5ImCMT0RbFr3czdqj1FU%2BcQ6%2FL2Fu64UcpqovowewK63D3MPDNyu6RelrZIe%2BdWjF8a4P8JV0lQEDh%2BJyNnZ%2BDqRrxYLwQAM6nQRwPe%2BysMJaM9cQGOqUBj8%2F5h5H4i%2Fb0NHVe8jNNYPw6a6RT7Bz32yfGhm9gAc9rmwJHhf4oFIVg6JDTSQ5g6wP9Os4GMfCTK8OwgzPzmZqaksURtWSAkrHj89e83GMBsF4g%2Bju7%2FJuLO7QOZfMz2PAeqsQpA%2BH5HPi94pi54qDa9bf%2B1wZFIUnWqHJxztTs18YJJKk0M3%2FyPWKSgquXyifCszAPJLWVKe0h3MtBqNr8TbZV&X-Amz-Signature=d8cd8b3a5284802dc3afd583f04f321bd91fcceb72926ce2236336dc41a729fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
