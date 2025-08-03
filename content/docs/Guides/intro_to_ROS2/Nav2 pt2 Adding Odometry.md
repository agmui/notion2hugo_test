---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=8982308eda0ce27520e4edb2e49ee0183f0ca7378149003f745786a5f56c5447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=6c926b1583282893a87448676186ef77875db215277c9ea2c8cd60167371cb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=66ad94f10b3eaf7bbf4b16c71df088c4f266e9a65a8b11f9dcd15110325533bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=482f74e2f6eadbd74178401cba3f170bb7f61a583d0eea1c1d7d5a46d5821839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=02ea75fb98077cd7eb08bd53f787c2791e2e80ab24d5251bc43fb694f087b5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=7e8ff17d4b1555989e0c29b8e8941bda8de1d57a3bdba56b9298a886533d3844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=85e08ca41192de030ca9d710b77a4ed9696b7c9abea58008e5d8ec8c27da434a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=a530f17ef2c91bc77d5e29f3601b29da5e7c4e45bd8116f71cf59f98a44a665e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=5cde389e49f3dc9857d01e288a9ac5df11c961bb45119637c29628bc7c54e88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=8176a2323b0bf6a2347f86bd56681eca6493b255db25b4e877ea01334b069f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRL424QC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkBAWD9YnMgQ1eYAn0GxmSQOXhuezsQRJYA4MyhydUkQIhAJCLaxBnefAs3gWZdNzuQF4OtcIYUHrwE%2BaMw8TtGNgTKv8DCCoQABoMNjM3NDIzMTgzODA1Igz%2Bwc5PMxc7Hb4XZLYq3AMDgYf3b4G7eiNDtaxGfd%2FisHF9QIB89odaV20yLOq7IndKPtVU7rGPcNvv0TaHubDQCaSu%2BuqF2J4bm6p8RNBYnPnAfBsLyJzECTc1MJAe0%2BshRDy0As8IOa6B%2F9vuRfXD3XpsfzOXxOHnxauVMecC%2FG99FsrWVga5IsfwgU1Oco2OiPkfscdyrB7NtGY5%2BrVbBiTqtdie3uoZgTAcO0iStCmsIBTC%2B%2FV4oir%2FIxnsh%2BMlbF%2BcvwebmpufexZRqo8mMNrCauwXjmXuggOVbxEs4g%2B%2FoIKGDeTx4FrPb1iKBLyls0yklX%2BzpiG1q2lDHeASsvyVKGsHpev1kUXo8W3PQTiRubd7MW15tM5NiWO45qHW75enH4VPc7NS867gWVhRq%2BVCCC%2BsInlhV3jOkAdgxJmeOQK%2FryZ5isLSa8NBtDyvrSqGb72%2BVkq39O2pcEArz0AguD9LflslLCn1w6t8X33uS0yEBapU6Y1jkCpf6hKEkyWR3YzVKwCxYwom6wecrN1zO5ekz2TTHC%2BUJt1Gf5zK0Bo0bfTvqXSB%2Fnm%2Bq0%2BZHM3Ecl%2FreLYtIHpLe%2FmIoMHK%2FtL7fixyP%2F%2BvyChTieUBQEbJRYJGOCVUBVGEVvERKlgcIY9mAwjJ0DDXvrzEBjqkAbsfcgd3fheCErKM9PFFvee%2FHlaSHzGl7ANUh3P49Dn9GDG8uI1BjdpCFRPJYTyUq1k1nbIsi7pw6ExLV6Z3SLdwDmHrR5tXFUho9rwEVuRn77mKwMBSOoHX%2BmqRJf0weh0rqmbgbKa6FkxtSLyoEAU2cAqa%2BFO56WlYaej8FBF9tRXVhov2tLVXzyppDSc1rRY7vmeNhQzk0ZEuWWAhZDepCP00&X-Amz-Signature=0757296e2ba0fec2fe8ffaec01db15d595def32d8e85c0db181b93c68b9bb0c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4STY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTDVSpU2UbcUGrZSwgosjM5EKCOb9MJJSjiUlQ%2Boq%2F3AIgc7ptzRxbOxfgnNOMw%2FKTVG1EvmTswOZdqgqHFzEiwSsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKzGeHTZb7l8aaLkuircAwLg8cWqQOJQemLMNArxoPmzok%2BEsGo8LZtfgNvoW%2F9bqzzx87SHv3D5FpQvtWxqnK1JYYU2IgB1Wd12ycUzprzwqxYbdrALC5zMRckkFu60VPaGSdABLikNTo4XpGxbXOP2PdxFg6nnorIGfEDCnJP5DuLSJd4bMZKqZ8sINwAeOH%2FLR6koA4MmKu8G9KiCjglBwHx0JPh6E3qKQ8v3rDmn6CMTdbqZFzpHXHWglztWMy7MAsnovezAJyDF9NRMZqycjIpBU4sOCEGH%2Bw7de%2BCSj1iaaWFoUpLs%2B%2F4laJYDwBTzYX3zzQeEgomrrt2ohV3YZ5S7h1joEIeO5QBhRZcJ9wP8VjVbfIkcH9%2B73nB2kstjXqKhpV2iMDcQJMCmO6c%2F4H3xoWy4vCE8LJGyjSHSw0y%2Fy6OFAXj%2F9XwBbm%2Be9bb0X73yxxJ5P1%2B1cMIcdu69S68DsZz2FSnJA%2FVFddKZTS2oJzk5pyyIJM9LJZQ2F95PRFrDOcuYa3H7LL3uk7KlbZfUviBbzxfmUkqBjuB%2F%2B8GszxxqVNcQppswVBBSCnLjQgTEWe91OWMPJIoNH5WBtKKp1h94XbE4WysCkv3n%2F%2FTJUXcX5568FT5UB6ikO7c84wCZCtNaKkA%2FMPjAvMQGOqUBBgA3PJlA9fCJ97xxEf8Hu0OkunNCsGl4F6yNJeCRqOBw7Btl3N6wcNIGszzY5Nylh6N%2FSUlLFuceHLtTcVD2DoMTW0oyQGvgpaHn9nbylb9zBM87HgXh3SquaWvPMt7MEYSCMzqSOkwMgP09Mp3rl69Gw75uym7B1xTDiol99b2nQhy5AsabRvbA6bCIJ91IpQL4qeux9u38MUVQIcaeqkXhkYlf&X-Amz-Signature=9aa7a2ce5a734f9024abddad9c8e26ac8464aea45f1bad077ac82f2208eb45e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=b7622868e727ac6fe8361216df8a8c02a00cf6cba85ef1dcf493bbda3dbb29aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=97db5983b31271dc44c49bf34237968560fd8a018fcbddeb1967449dd0ae49a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=8120021d1bab6999748efa90ac7cd89042a5d6d70444ee21d3f7567e3a36da13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=74449a1b40ca2bb2f0d826a3b28b00600b62378baf5a1596511a78785db19af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=5c1cb039666ccebc01b4b1e42be30e15656a88408581c8bf3c13fb60702f0543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=e9f781dbaa3aaf2c41d2a609b1a24973ff77da6a2a2f93801aba0435892bc4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=8e2ceb827def9759b35ac4a656849a7bdeb64013a5c0b2342f086254953ef290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423T4XDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgB0vlm%2F64UacyMJmQuSgMmR3g4jtVj4BRM%2BPF%2B16A6gIhAM2xHCLuifOFIpdEJURafncobkZ9rmGrz9ICDNKeMA57Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwNak6BzaYgWYI8Pw8q3AMHBPmzXZCQNfv65TKIjBGUG9naOfXHMolDVSm%2Bi15%2B3OSJd%2BTNaWHOo2fppRf91gnTTatRtWM77bVK9nbt7c3vWy%2Bstu8yhXAWTmb7GPgODPurnSC1I5bhSIwnWIS6PJmAgL054StZ1i63M6hDyQYGyQxXmhcgoX5oT0ZpxinqksAb%2FoohK4FKvE1ANUtZZx%2F%2FIQ8feDan7nyBGNIGf3V%2BbGnVLrReJLWz2t6YTDRxwOnGPHohXYsSjbwqac%2FKj5dlZAbFE4dhrszgz3P%2BfC5GzRhU0gw4Po8EXxbDGv95A9g4%2F%2FuD1Nw47X2ffhuhNdSVmxQGiaJm0NVw%2FvaxcecwR9ObsN%2BCGr3SH86aZdRE0nlmjDtzlci4zKGEGhw%2F7i%2FPW9XUJXJmXKacXeUFqV3Mu3yy%2BTjLaHpiEAFXQ38HzIyELuiSq4%2BuFvLq8fG7q1BZC6xgA9PuJrPkcadKzwq9hDvfzZ348voi%2BN55orKK0DLYVro1Sbg0RZN7IkR9IjmmsFD3JTzaPHvkDZGUxtf%2FGeWN1H5lu7EQbHyUx43NzV20O3dHqGYkVveoO2%2BMWO3uuafBm8nHZwX%2Bb8va7tRJCMWV%2B%2BIcNOJBKXmr3BRfZomO8OAYhp9cxoeXwzDvuLzEBjqkAa%2FUN3oKZq5V3dqzZ2mx9fp5j4yXDQzMFJMTfWCKEOx2auVighfE3QnzYMm9D0POaQMGPwZ1S2cbxA57DgqNcNrXu0qd20aSnvKYjjCik21yDm9%2BZu5ENejiLskPy1IvylASayuyRk227fTPF1AhS6N7koPWrifpdu8a5Kx1jf4vmTV%2BuC%2FPWynxNQurn%2FwuCr9ycsGHzQ%2BC6LgtV%2BHF%2F4UlxPVZ&X-Amz-Signature=c5396864cbf46877930c1d5b98a5582ca19d80c4f1e48b9181229f421349cffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
