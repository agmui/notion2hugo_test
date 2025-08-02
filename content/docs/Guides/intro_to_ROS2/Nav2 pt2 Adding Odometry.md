---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=5dcf3f9e177881339eb6fdd46efb92c4bd0bbc1ae8aff25ec6e3bf76e192695e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=bbed9b2be440d3bd2a4ec68a531fc6f30b7e4f8245ca863f5d85991f9883c2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=0b1ded4767f9385131a20f8dce03abffad015583e4a610a35240f8b1821b071a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=ec0872711853cd4de904e32bdb481401170c2ef427404a0af88d15cfb2d440df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=2f67f41b6bf18210d4729fbdda3224194fb4c8484aa57dc45f08030fd1f56b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=9830c5ffbeb44a4136865ad4382c38d50f29bda18db7cff024b55176426dfa2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=ac4c645f34f235a78fb35f7a881ff428a439db08d7beef59e7fa9fa248385034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=5dc01ffabea18bf2a5e64962d14aa515c4d266ab3519bd61a54bb29e2ae125b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=8c6ec4d12bcfb845858a2879254a9553f63c58a4ef023b0e01fea37a82118495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=8d0a84753a4b82365afdcbd31772b022db66f50e0c6d023c4c6b78e5a145c73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOG4C64C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlvflbC%2FlD9QCFwu74os78kjGsGkcfhxZn%2FexWNK31qAiEA4nmiTGh4HGGRycx0tlkHij%2FW%2BszVCASQ%2BfPndb8KVnQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMGluKDdIpDH6wjYFyrcAynNMfNwgIm7UDFd%2FJVBHWhAU%2B8hHE7MUkbAjZWqU%2F7lA1%2FDj%2FLqLm1EbdMrpIC2u5CV5ekNbk%2FC2ITYtaG%2B3%2FU%2F5m%2BFjzwRWmF72BXV22bpcvZ5JXcZaLeu6DRKOiMOk6M0o6BTki2BC2R8ChN%2FAYVVhNtZdg%2FoghlGUo%2FTzeZEGNrN67s0vDawl%2F%2Faegy2bWpZo%2Biu7A4mA0fPERx7kFwTC%2FFDnO08UiZ3h26qojjxEPrGAYMHtuEiA5C3IKOxNlBgQQ6nWwgrsZbNM%2BAW7%2FZFBTE60z%2FmQaJhHXW7LDzmZiakGOiOvQYP5Ta2zvaEv8OnFia4yx5ZoRICYv3t%2FjxA0ZTLWJZSeZtuSXZiOBDjwLfTvgf7x9JnRMJzjRpzQ4KLyL%2FROw%2BsyXXtmr11Ubo79Csz553MkqjeQMirhm7rdIwjskm3RpKbZkz4YKUFx064ssGC4gO1%2BSRUzrYY6vpz%2FWwhYSZ53hr5o3Ye9WdxGhaG8G15iO%2B8qDhSMf1q80k%2B3H4r%2FOghvFEWqL0PxKHAl36HANULmgZ9JhcQMCdqEnEaaOG2%2BqOLsIQ9Z0t1AZmtF%2FD0N%2B07%2B5fmymu32G3Pri%2F%2FHA%2F2RlfU5dPTCCWJp4jUth%2FLRTfMBtDRMNiAusQGOqUBCSMPDYS2Fv4b9PcZM9p3FfHniSrbX8zSB0FTKObFtp4JqQHqpjKUJkkW7BpN3Bu7lNkkAZ7abG%2FYlqBUvV200VEjnUTOX6oj%2BBgkVSDjBaCn%2FykgP1YBdjl89aNYma1ziPWeLJ7pD%2FtVz4eO4mawaoF8rUs9ZBbC%2FIY%2FhK%2FHMs3gOc3JqbF62OYO72fOlHAXhlYO7rL48BzCyzDWw%2Bz6TVQVDkc8&X-Amz-Signature=5c36371620e543b0cb2f40bfbd8a30ca8d95616ada79c3ff2a8caaeae5dd45c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6JPEB4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEkEAW9Ekw38d2%2Fm1hpG3cv3BMl3BF1PABhwIt1mlAiEAw8IXyL43%2FS8T3o1QkK0%2BsLYut%2Fx4eU%2Ba3hDNMGzisD0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbeNhsjxPAfpjyfZCrcAx7dzhXIr2Pg7rRl8aWWXvmxCNaVfn3O3QC%2BJFApqH15MA1FmPoAbWMyrVFr6mUBFfb7FlpFl1L0FJX8ayB0aA%2BpBvYhGJ0Do4iUD4b2nJiDT40ajbKW4BSbgmbdit2lBLiPCnMu6Rc3PY5x%2FfcDoWrYYmKpjylBvJuY8dV8zhOZgmpAFEX%2B78WUW7Mm9ZofgOyIljKM06R3u5n%2FV9StYsF6r4hRzPgp1Yz8Pq%2BDy2485QMZwgXsvqx1hUo8KegU5W%2B6%2BD97mylJp6iWcRygrvpJ2qwtkKkeprBAv5ZyLWt3CiFA6Jc9bqxDUVQwQmlCP4axAQjuSmdRwV4kEzZsGE7NRdqwzMDgKBvNGlu3TTrx2ZSlAOqsVKSyfMv7%2FaCOWHj33W7BQ1FxRF6mrj2jnZ3h2dry5n6FKdoGm5V85Elhg9K4zQHtnxrxL97ckfki27Yyh26MyzznJWbAwnLMCMGWbJzITSwKhhlMGSduT9x5WxRwoP9yemrxoK%2FK9HZBWJUypCaW8zChEtBCHvhfCu93pxEuDDvw8aer4xOACwSTrL0v8Fwluygak7OfYRJ7cng73qqPH%2Br5lNNgLOztiJ3%2BUxL3132zWqmPeRXNFzv2nE9uA7KTD%2FmhkPbCMJyAusQGOqUB4ezPCbIAB6XDCGBlg7n2SyCcWcGigdRC1XuzdP6cZ1931oCxMMmH5Us0okc23dccrGl3NLtbiLRsLpvIab9qx6MbqQiJJljWSrfu%2FUXyPICKMO5e7VckZfhKWnJNqU5VqIjlbDOXiHNi0vzVZpzAh0t3RFZFNiXToyusdGuaB4calbg%2FTdWxsLUU4g5NUlW65zt4%2FmWWpyQrpYiFcVpoFr80f0YF&X-Amz-Signature=6cc51cdf486e49e6c9f594c94a6ff5996745b5b15d9bf9e8a5c38038bafe34c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=3f71f96c2354aa24af00e846405237ff5d4fda95291d527a42b2b470055c8531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=2e186e86b4659541be53b225d7e055eba057510d8ff5443d3430f4745282e1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=465fc69a40c32b152fc909d649a8622edeff6f6f8f32fc6818d17b9f484ca2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=e690f1c84e9315bf408f6ef4596706a005be04bf29b585fe0cc1b3a0bb0047e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=3c39f6db720b02eb3712ca4d6a4820b3ac39c85846e57b48e9db3c4a57b295c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=e1f7246b4691a4a617fe83a4b0caf8ae18be3f61d83e2e3a2ad2ca517eeb0111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=c0711e55a546f13fd3c2f6e2e5496d5477e3c5dffbb57c104ad5ff24e1ee4aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYGRUJZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF8G6zyyT3lEkoZ87s%2F%2FW1PQKZfBHKdbcxMfccPg%2F%2FLAiAii2jxH9TJAcCE7fYk4JlRUYRsgjU6s5gE6PdRuGdLYCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2BK%2BAFKc8gUsJqnAPKtwDpbkZUm%2F66Ly3nXhteFhwNFM6xSuVZItwU1vRfzN%2FNgrb7zfITbN8U0HjeMQzmTGK1v84BT6gu%2FivKeYuUP8xjrjItX7tx%2BsC%2BNuObH2kS8S6NM1j%2BGJguNk74aSW%2FX8mN3SSS3d5KC%2BhxamAbSna68kAlCiXitctH0T5z87cHzsz4NPJOWQmcEtvvILybqbceDdTh9sjYmVxXusonzDAJADQWMAyR70LWkIwv0Wm4%2Brhl%2Fxf5ewtETFvEOCeIloz35SqilWHzgjTEnfke58IZMhq7kTvfn5nxYWbXMUTC9em018KyC655FcQtsnIGv74%2BSQ7DBLy3YtUcVYHD1lc3al2TYdR5b07nMdh1SC5YFdewPpXlJUCifP4ABY0%2FGsNGQQkbe%2BVWWtR1jzqNEoWTseeOqwrmTuyggWwgcg%2FnORe7pfTDps50rTVkuSs%2BON%2BkMrBi4jencLLRgIVAiQwnS7EdMQZxV5ier4iArb5fAaYHAZT3JGKfmV3hdid519kDMmpTSOBlPYTds2zGIkJPyJZwH%2BdYXJWZU5%2F1ux2pwXBDUJ%2Fc%2FGLFwgeG1igNhVdGYbwSz8kbXidSewvaVllXjeCqTvIV7OekPLxTBBstFsDQQ42pO6A%2BX3MVUkw4oC6xAY6pgHvRhLC1HeaxGIhqL44%2FQK%2F1GccHzNwzMauKS295tFUXvgdo5iqu3YRIh1FAMJ0KTR%2BAHqRueXtylhO2DTuf6%2F2lMiVccbDYb5BNBmNRGwBr6nPHEnzOmMSaJRQlO6Pe7Dm0EHFnCC3tvsoYU9g6uVC4PupBDKxDSvrw7TGW2rcy2RE8QG%2FdFGhrVhBgMo9fyknfyUVcYUNUXGUdBRe450AOK9B6a51&X-Amz-Signature=d9a1285a03c05886851057bf9323d294c233743c761ad0cae5de65dc821f25ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
