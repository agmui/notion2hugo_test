---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=3f861642201006ef833be8f7216f37250995df22f91a39f0ccb42dd4399a4523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=c26b7be789c09f000b14316e49eb5840830df3ba0eedab2eedc8684409115bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=c33f259d8f154bccf8b470bd09d8c87d07cdfce2aff1b95373829dfd834e37c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=8ff016d97ca66876d9369d5e403070af8e007fb3a348b2399bed108995bd01b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=eb1c180cf903176e9a630a1692cb7940478949082848c9bba8fee02fc2fd8a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=34c5b14d1b4ac3d9dc7bec5196f3a6c77f7e0d30e501e8b4a2c1b9db5971726e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=5367342abae7603e3a6acf79ea9663d823da2f02c080f3b6a71fc277c349cc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=0e4755fce2ffbf0462d056770c470c1390fdab710e3f2daa2aa2177d39fc6b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=a83130a0484122c07c197f56098504cbbd1c65c3950eabb59d75d359053d94e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GZLGIQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICifv0nnbeEcH8ksn2yV%2FSH4SargMiHtIvX%2BlrS%2FjHK3AiEA76X4xNRKzGy0REIytzuWTzD5sjKnfo8sotMXK2WJN%2BUqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfmRvvEPb4gYDgORyrcAwXIBYTlw132TuyFVIX9XI7vDmVevPavohSucucflyeQhPW%2FRH1hjIGMwj83%2BAMsA5rwmTEZef%2Fnrp6RIzOa9pRhANyk0FgXUs1Apo6qKPh7DrE%2BxzeXHBPuvKP5c5V%2BMLjlZ%2Bhaywrmx4O7zkTTH%2BybcAXtaQM00HeLRlsYkdheQQigiTqhSV1pEBWscLFI2Z6AV7%2FPx5WAnwus1eNf6rRuDFmemL1Gbi%2FzRjrwQ8U5xs61aZ1C3icDwHFmAv%2BW4BQzyuMyO2nDcjP5fVb1lG0mo9hM4tkpOvHoyIEAnNNcnglMLgOGnIE4oDLJAk4vb5IDV9WsZXhIs%2FqDU6S3twsxhoHCgkLMYsBhEcebnoQ0Sniwi79sTsalWPNANPTr8%2BEBoa8tSoD%2BIY%2FO9T52fA%2BodGUpr%2F6PblRyYZU%2BYOLP0aRRJy%2BYiWYuEnJMWI8nKqI73wmk3Zo8dA2zknJM9lBqAGiirc6oDy%2Bq7mPPe%2B5n9qdepxjX6S8U1Vl6YUDiENV%2BU%2Fac4AmAHYZrTYkMXcGOgZMQev4X6B8VLXLA4kgQSjqAyEoXLtk5QQkaTCG3f2Tm%2FpJTUAysCNqQAUxCrv35LonegifBKoGgHz13XfqnAEhCCqAAkbR8WZ5kMM%2BhtMQGOqUBk%2BEMNUnBypCZS3vDo7sipyaxNV%2BCzdjJnaUBaj70Ta5d2wXwVzFHt%2BiZScLQkHKzPXoe2nIh31S3QnwBTzVQFGMKwc28iFUfjEMyltl1LHVNE26VI4iEuS8vBl%2FqEEFv00CnZxGSraI%2FEoEHiKEfgnuVskLsQ6u3EHLF6SPUO5gnyMaV8rahwTG%2B3MTkAQWZOundEAp%2BmzJiv1oytAqVZBkjRUZs&X-Amz-Signature=0f3ee7174dfe4b96fbe5287455b8d72fcf776127018b55bee308a7ddf9795d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGF6QW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdLjeR1unrUHSqX6Fhi12ZoC6R2ADbkEESbHYVTBrD0AIhAJp3SEwAx%2FQ%2BLHk7CSPKG44bHmNBgaMioqW3IXHmDt7fKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURn0u07TSj%2BBntjoq3ANgGOi5G3HDcRjnvgWV0uYjCntSCEPpUnP1eOyRHBrh778aAtsAsUZmKXystBi5TmOZwYRmDX9VTY5Y%2Ffv5yXvDWICTatUMQIpCO46T6bD8gNpATEHW%2BnS1YNE8vluMwzoAhzMnzigbG2t6%2Fuhjxj1rOn5LKLwDHnmHdyI6zQdg2zHMzXl6Wo6nZvztpMaqzHhteyo790krJeajTZa%2F9CC3KfGT2XD1Te3W3mAtb0uoEc4yq4Eg9%2BtE4r7XfwJKY97ispUcXMYZnGE9PdPCae4t8lkLa3jXZ8rJ7TUw04yz5DkQYVm0EKQ9ORHMmKF7sCNtR08AI9Fq%2FSbxECAnSK%2BqT%2B9BezIf9Xipf5gkup1MHFMoDQm4JZE8XenKos8xnlC%2FCmEczZrNUii7hgbvmuqooGEbRFI9xARtVqox6KV82Olcrsv9D6M0j0o4FOi65F8LkwpcM3kfhQ1yQbcQeujoS%2FLNp%2FWQ3bONoEBaYsPUCVgqg3hkQeGkYzfsV8DjjpuFRjJKWQRDTU%2BNUSdCwgBHjwyflhtMCdvv0D4Zk0GQr2O3ojFXRwXabGvQs3e%2FEjcRT3HNT%2B%2B7hyaQSWOX%2FBbID9XHpqEna4FfYda%2Bmvp15ieUEihI4rr95xCAQTC2obTEBjqkAdYqLH96ysqnfvYvq5pT8FBUpBcE7D3O%2Bn0QMolrOZsI0UDUiRMbpdPbr1lwdlgU%2BWQtsqr5zYemRcsGVlGfr%2BNMMsZTj8oqa1oX%2F%2FJz9y5ziLEqH%2F38hCUy2qG3A7bY7IIXHKJ7LELUlrt1dwYvi8cRPhgJsaONwcrfpaRqTOoGpnW%2BHFMygudU4VJcdOCCxPV8YNF%2BXX5QLk2%2BcQVYK96rvUoP&X-Amz-Signature=c58821488766f3b6f054a1c3e84764f5803536e1f47ac22ca382aad4cd49abc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=9144ffbc7a670b06a09efaf290bcd0e9e25b3956abfca2aed7adce0795c454f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=8b4ac2626c60709e9e5ceb62e6dc79359be38494e099182d29dbe0f146b92974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=bbae0fc1f6c3c591590834e02e7a823c9db7f3484bc7f419907dcb1edf4bca84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=2aef2c5234ba28735d80340118a856678f2a283b4df42301a3fbd29517e012f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=e9098d0cb983d1a4db81b18e940e3aaa9d3ced1a057412ba2da37935e134808f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=9c6b41582d38b9be5d7cc171d72af67588ae03f326b9ac3b10e1f4e70647b920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=e8585b7c0afb1fdcb08069e4aff35457cdc00d84809e5c5c29c458d7ff131554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2XCLI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqA9xKhJ%2F1JLRkhCFik1Mr%2BQq4KaVFMKXE%2B02mPvo%2FbAIgJIUh0wbm9dddygR1yStryBY6L%2BxZ0%2FGnpxGcwMkTXB8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0vlu9PJi6tSqasbCrcA7zbbZYXaJwWh5Dd1FIgNrPS5EZiJN7CwQAJ%2BGKw4ugAIDDhm%2BPvURqSuLIkbJqMqlYJipgbvS24MBRmqybYVKhUNx5EBx5MZeepWiDJuovagyw4QvznJUouJBH4%2B8v%2BjYfBARzyl%2BwcIFDTmBhJ8dxYBCL08oDtzSoRVdk0832Za5vuk78IYFs4fLsUQKji6c9Tkh0%2Bz%2FXke%2BMP9tfSbLQZY31megZ5YjbHuSWgiaVVEibp8IxkoU75GvT%2Bxt516euUeTAH2FCBffZc%2Br34XSr9mo5bUNxgImv7EqcYLit%2BCuYWN1LzLKSn5Rr8C8re92uUGGN6fholxmUogGBhkZBlf39TNLcaisPEItjFL3S4xBeppwpwJ8nsFaSfcFRxz78Y4LGEnO2oaFITHcZrlm%2Btc8a9YrwiZazGNmPXcrtHh0tcwUs0uSMgBmWuiNV%2F04SbrGDM4BIQSDAY8YsTbNpwAlotL8HdYrjHXil4e9cKiXgV0eTgAjm%2FqVQnv8laRMy54ffd%2FUmMPihM2nzjZDcWw42qzw1Z98EEs8JTdVx0rsOYmoZ4NSjcQEEQsabnzR5OfsOgLDDZ2G6ry5%2FnL1iK0cV4RQZCmLgbzYg4gvUUXbMsafApLis3cu0UMMyhtMQGOqUBzog94hhw8nBuSbYiaRib445RpTKrUef3AgYSmps%2FQuPvwhckKxX5LIhLgq37P29LRrQHGJIb5ZBTUSQ%2FplS5ffE2SYBgRdIq%2BFd0i65a%2BExzHVeMr89vzJu6304atfR1%2BNDJKu4HNgf%2BFS%2F7nAufCLzQLR8dqST15xcG1OjoTbxuccovpBVcmQ%2BPKZGzfyULK3LUhVWSV7P2XOrznYwFMnJMrbc9&X-Amz-Signature=2f29d2bbaeafabafa1ce6e3d92d6c6ed1a9fb19d3d69d89dee9a4adac365779c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
