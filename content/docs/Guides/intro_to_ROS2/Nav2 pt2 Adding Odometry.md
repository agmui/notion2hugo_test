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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=ad71fdb5544c5b73dea8271958b246b407b394936c7347a7f5f538391404491e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=4c4df3e16128a1b8d84363ae3a0a658b5f7688409c32427da663f5a4c61a68cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=3fbd9c69eaceeb80c2699343afd30597974b1fc59fc79fde901d2d6d084a3676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=e4ab117e93dec3502eb88a24dc4a83a433ef571fe5a196d693ebaeb03f234449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=e3f5ff9d2adf9b98d664dc62b2ff636ea09eafb9dba02f897954afa49d9fa9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=b8f4d45190b9ca77b83918735d9527d4235f7a52cad097819ada2f1da075ff12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=68e16be4f8d98a04f84f9613c686cb73e38ed98f52ac8ce889bfadf8ddb58272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=cb261609c9a0ba2830670fb0f36a5e0a80a2066e1b2d202512cd3bb6df9f272d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=df4ed92896544f699fcb02f57b3639372e35e9e0104cb9fd9157ea77e82dbf9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVTH7VL%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeuwB7LOVzYOHMzFY0nASkwJUcKdhBx%2FPMqhw7H3mUzAiBCecblppPxRzS%2F1v%2B69Iv91xQunAOyDXTwdSyWTBSEwyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdy9CJCKWOdv2It22KtwDsVi1XbEOp3qAKPrK%2F70DBWVuaMfuO3Hpmd40NJe5duE9%2F5GO%2FXV%2B4Nnt7w4f%2BBBlAsu%2BtGSNEaKD8p0E0G%2FND4NH6IOUeFxjv5RvqBY5ly2Sh3qtRVTNCyS6CbhjSpPL8M0K0j4aPCSjK%2BIlW6yYMV0ppPkQ7eape%2Fi3UIDPWx1zKIDS5A2kvN1OddOHfMIYe1F%2FdaioJSiG8MzFBzJB7OLXTJV%2F2eYfVk3loV4uOVPKV5XCp4EIdzaMrdi5SYpVYAMIXi%2BdD9ukDNsK8GhDi9KHv5iqxm41thadaOHM3dhBqqCR0Kg%2BT2%2BfI1lJuonUoTReEo%2FDH6K%2FNjjPdeSg7Tztxlqld8rVY%2BvvtjiUvIUvPGZc3Qmd%2Fzo2iFaotGeqZFiS1hCaXlF2WpgsD%2FC%2FQdADDc5PdxDk5BxvbZhna5GWbg2cCtKkGTmfnlKt6SAlXvnwKE75B2kANCP2b3HFl4IrHE%2BKKTGc3sGNH%2BMVbVfh4o%2Bdva6zJFgv3Rl08XP%2FRDFi5p926Od40vfgg71CzV7eaDpn%2FiTI4jsTETpuAGApATjFPBK5iW4ZeycGrlyQ2yqbFMBs43SAMEDFQz%2F53lKfwRYIPlxVslj3uLUNgYkb4SngDP4gUAF5Yn8w9cqCygY6pgGVl%2BT%2BIrsBAI1JtWMHn%2BRO7T7zQdWyriYs7%2B9ELoSgWfuAaOtAIykJRWSItGYavLghMu3CImpWrB39%2BpxndpLTzRHVh%2Bfn9dyhrdwSdhYBHpw39PJ0%2B8cPVfCOKfSwc4hSgeLF%2FDdQEoS7sslKetUTH9cxk%2FSOY6i%2FWZScqSoa27awe6ACLh%2Fl6%2FExVcxD7mGNMt10x0h%2Bg8Yr3AASFkUainfWaFnR&X-Amz-Signature=4f33ebc5d1b4406128bcc09effd9a469ee73ec522e38970871551d6b1268a4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOVPKUN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBS0WqtFe%2B%2Fty0zXpyk5mmGHukv4ob2eHvKwyoQ%2BQ5MwIgFcDnt%2BOc%2Biup%2BrntBHp%2FWomQDWDo4pVeoPboheW0GEMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOZQSjBoYCohq%2B%2BN%2FCrcA%2BEDYLZywo%2BIkHM2DmlZhr0UH63vAM0KvNkt0gIYJGDPNoCmRP3Dyvw1xM469AhkC%2F1vT6ph6a3yptxxJjbL3ah6kdn0ktexWQU98kNZodbPS3x%2FkoDOYm3zNMLmCnqRFFQB%2Bpdf20onouyUZxh6uuSUV9vuAbIfsKoZjo8jv8ETf4oDU2PEt5mbVutSWhdwEiBMI2A9Ezcf%2BRdiqy6RXNncQDHp8q3PLwGIVlhFxdPBAUgUaMe8ui4WHxt%2F9rW4GlfVqpbk5cTiiydCTFIIgcULtv0KBZTuDopfi9TsFGEmCHiaC00hHle31Y2TwPELZJDHRrPG8wdoGPZ2QSNBeZCwwbTQu3If8%2BqdNJXqI0hnz9WPLxJhKju9H1epBYXs%2FDJ8n9r9gWwvHp6tvsL9mEof%2FH7nBnRS8W6CUdJvjCAXZQY8sAOLMriFSq8%2F%2Fck5I24j3lSrCvJaGaFifaneCbmXQFjUiuUfmsu9vt9ICFlQzJ%2BMX7zfX%2ByKpv33Rf3u%2Be1ZYJAc3isq793QwPK8GcqwZJVytFjx2wzJlzM5Ve6zbuc9tHAbi6yY%2Fe3XKfv%2FZVzobmxfyCVvN%2BbfJhQN5Hp7tLlcCu%2Fd%2BGf1NeLgCU7fJHCOUViqUOAcpRuyMJLKgsoGOqUBrM4bsTNGiuB%2BaGpKjeC7rh%2FEdCy7vzc3dio2LRp6YXwc0nPWzG3o89OhwfWG8pb7HA7ptLO8f43NzYGcuXH0RGQPF%2FHV2mpuqO%2FvOCrbsCvD50Enf%2FLOWa06ySxirpUoZa%2BFP6IIlx2%2FLTP1WxPCfm0URo%2FK7kBvR%2BptbIxk5JL3gA%2F%2Fqf8MJIBh%2FzR%2FIgo5onCyMTA1lUHD7LYSAKVLtVchPCD%2F&X-Amz-Signature=847f581bf433c521465864dca1913358ac9e6ac41691aa33bc9be39a1ff921a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=268600f72d7be378841df6c0bd6b5bc9afc911f9e31913f5c836d8af2d0486fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=a1ae0abcee33385bad014f9d30d34ec5ee7eb5629935a4d9a5386083729c36c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=61ba8f5faf44e92a19f1c62963d67ae92a44c53697d5efe262fca640011763e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=2bf342db685c4a675ef65bbc60655d2cee2de72a54308811c11a9e58568e6d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=df7c99c0ad7343d7dcb67837ec3362e442ef19f32f354bd917af9ea69b47b07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=b445420fb93b1359fcc16195279cd647244cd56369aacc25316a3c3b758cb0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=84753a6feab8d655b72b8665a507a8653e81b15dbd892aaaa806664d047dbc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=c2b0fd1137b6ce38290877865570318a1d6a72c7142a39d07317182a883c4375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBM3YGW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8iyk3C%2BYMJ5ENkKoLplP0VwbxdVYOCs3vJKAYZ5Z4EAiEAlD%2Flwhyv9gFsfNtmLIa2xkPrK36LrgXyQa%2FeynJagcAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPYG2bFgcQJr5SOAWSrcA%2BSKdTJtRQS838JZj5jtkahowjtqrnimuL%2FY4fFkAMRQXJO5pwa7wK5A0v5aLvLOzqG63CtINXb%2FjZ6i7SqzZnmxWUDP7W0GWNoKNI7e51BJpr%2FZ4uGYECFtQPVCLxxvvNjPO0lOAJrBNwxjtlWxHf6p9omM4y5tMCN89WEGlWWd%2BmdPR2Hoxkv7UAIcNm2O2vsfvoKlxZKg%2BqklWYbRUf%2Bi5aRp1ey9msTx4%2FdmAcs0CI9QhmeDx5tAl%2FGD%2BlBvAnm6LlIlp%2BprWlRMIJSmdlul49N3vlaYdQKVmDcY7%2FjssnFCPxskc2bvHe9bWqzBKLTGtUedNlw8BgFD8IZhnJ1i15ziKyuMDrzIPAVdDtnKj%2FmB9xJEeYxs%2F7xHOgcXWhM%2Bt5QCCMZiCb0A%2BWZWgzSZgShnm7lZHv9f7hT6lOMcwA1p%2FDDaj2c4tseN900jSiYJSEwbtCXlAHXun9aLXMR0VPvHKMp0n35REqxdrJ7QNhl1ixXqPmqh9pMptwYBH1%2FqZM8txLug0Mf09%2BaZKSdovD8RKbbdBMrTZ3HzxcRHDFyJhNva%2FeJbDwDZ%2B%2FO4SB842eur%2BDWQRJJpqURthenPPymy7C7yyabVyjL%2Fx5jMED63amUeVjTRF6wnMIfKgsoGOqUBjrOm%2B8gRaHuk3yoIed%2B1BFSo4LtrMhhPunaLFYccnzZvNd47sTgy66kP7pGE%2FXp8gH69SrZNyfAXhT9PKQxbpQv2LIRC5KLYJApTOvRCriuiv9B2jY8hJTw%2Boe7HckN76GEhR7qduElYSxyeqtPCqmDlubL6RptT5MqQmQnrZnyt2rf%2FDy0YW6QrfrZk%2FGSabm23R8f5lphl8TcdLeuTUDfWaZln&X-Amz-Signature=3f6ecfd74335e4bf4361cb9c3ea7d4ed25665d0f7f2cb004e0637e1bb0adbff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
