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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=99a04187b5c4f478882432d790f268b1cf69ca9cf1d14aad541f77dba62d0298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=7c0b2d8ddd1e8d2237a67f4065130f24a4f4a7487a1580a08c62ef98b1afa43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=19365c837ee8aea9d43cf8792e582bb59a8632fed1c741d3e5fe9c7c39ef53bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=09b645c310fd212cf62dc16426d7dab92fa89dac31ad67c50b83e3946cad5bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=2ce197061a77588d714a5d2a09fa8a23f7c945b84a229dd0d7eccc230acb2836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=a08920eabf1d8db21d6d7083282e8812e10c833633361e802545326ad7d6a59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=c3b2913d73b71bb863d731eb2fe39f1214de149cf1976ad9dfc52351ab701f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=ea6f6ff0488ec74dc01afece0b913aaa60570ae70275efb610920b6c1b76be3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=e29f1833f33c38a800b5e20c3e5f8f8d3560f13b8b7a709f8a7ce97fc385f3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCZ4D22%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzZ8fuJUzswXKuWndUB6GpJ%2BWj3WecKOoeHtHDo6CJ%2BwIhAKgNwIx9klffhBIO385qIaJ5P9mkjIB%2BjsmBZJ%2BWF4jHKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLYCE%2FZNW1LwDg2DAq3ANdRhT%2B7QAB%2F%2BGJTDEVpHUsTlx5g18BB%2BYDczoqOS9KFVRqV7Wzm596KCBee1vZqaV2%2BoQnqFuEP1UdnsO23EDtKYXEu9RUuIGGSTnA8ZImRjyLCZyFNfWa2kl2kVZWfo%2BYGdWd2KskrfqCmFMR1ybeB6vF01yWBW9nep4QzqfU42KQWhcrYzR8out0hIvf90I8k0Iv%2FjD0yzMTyYmBUnq%2FjYpiQfIxiIzDarBwSt5J5z79k5fnPo9VR3UUhq0eHnFgp%2BPiovI0ysyzT%2FtNRwTY3xFvuOf5ZpcViXedZynPLjUpPHqMM7BlgtrP9fkqAE0%2FhV8AiDMxWlhXmW567wjHDBiyeSzdb5tB1CAhDXX22HIDaRlnvpUaZdfktxbnGof84Fasn15R6XQwhvbBTqjbzVrNMaM%2FFGe7TSaMF44uJgbvw9ABimXoZm1g0MmxwZn7ybfj%2FelyWnaQYt%2F0Sy5fAjiGhvAPoug7%2FNu4WbDfAvV2W79rYsg88%2Bn1KrjIuwcJWeoRld4LpuyYSYGICP6940ZrdZzkWTjFwjF4MvNrp6OTmZDD%2BVbnlPNn%2Bqw%2F4oe3pUEQT2OnTPkZnT9ySqInoPSlnoDCjOrQ3JSQQHV1ivNWq2nxTAi%2BGPajqDCT7rTEBjqkASmnVaytdW9mAHGD%2F4S6QblNdXjAh%2BEkEgFw7Dl0MTKghxnS7THXJ04hcBICVrttBDWXjbHmv0RtxwSntQ5xdT3k3HYKCu12OLOLnTNMYSRNxqkzSreg3SbrOJbzzd8NxubQUd15xWLXB1dFsgA6kLGqTjmJQskRF50LvgzhzGNFon%2FgUpCuAh47UDf5BIrXZmNrRmqpcigUt1IabhMhyuSDItM%2F&X-Amz-Signature=4a36a2c865e4b68edcf415963dce2e71720e644cae317c63eff4c96e38bce7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO2PXJF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTt%2BXMRzzSqOz42gfXLXBEdjD6DvNFfq4Icjd6m0YfUQIhAN5T%2BJFhIiE4Cp%2B7iXENx2F3Xh5Wn8hT%2FfRTb%2FxVeV1LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5MxclRhzdNqVI1KAq3APzLu8SQVZm5VsMOGFcposzvGmAD9bcJ8%2B8qv5RhDMWvZ7Ikqh%2FHtaCZj43Ec%2Bez41umorg7WuAKf4iDMPtbtwmVY07PiHQ36GFvip%2F5xTGprSmho3V58VavqIsGJVZHAbK7xBLAPCWFoHZqWNNA%2Bq5hQ%2FUogY7ZwqKtlOw2mjGXO%2BENSKlOpnSl2W%2BQZOoZKtSmp67anzYqfRTPU2gHK4MPrRXkPjZXdMbBFwiFUMh%2FmvvaRPqX48E%2BGXjywijFUcY2UY4alnxfeMWT3lgxt%2FVgtBPiiX8L5cWwqGB1vKjYLDCz05J91sgKy%2BHV2t%2FOUERx3tRcEUCnGzv9RyDlF4WvCaOm6hXRsvEmY4AhGypMJdrVbaqa3F0iV4zgWh293N3oRI0DI2U5sGQULFJDXMUlGR2ibnxsJw2QQJbGTFgKaME1MpGi5kOZUJdLSmdpjacraXTcNUsf6InHHCLT5YpFOk7fipXNNrbmIv3wdmf%2FfDxFsYgpT4%2Fxqb5HbUTLM%2FPli5CtwmWJWcOUkJEcPHGi6mzzxe00gqySn9P5ZjUu86xiZ3py3LmF76wij6UZl0U5a3Ie20k68iIYLBgSo%2FvtcmIgOTJ8PL3iRSlsqyblnnJXaacLRJHUH09LjDP7bTEBjqkAbF5xOkUQJk6rKKg720CanuOUJN%2Fyb0oNMZ7f2IgTx0ILnxj9Qla3lXmqBt4J1mUe8aHi6P24pmb%2BtZgeTIZKPo8Bj%2BIg4JElJjYR0jl1lYQvlE7fqI9RaXg4n8%2B9O3MVxwD0YmHdUpKlyXR%2B%2FoEE4qfnwcuqDVeSnocUuIOjvdkVXNWQucU6g3mBoTrbk3nQt3Oq38NkONE%2FdUviwrzM%2FrdnzFU&X-Amz-Signature=7b20cf083dd79cd2bf0a44db561861a654a6bac54d85e9bfab5796e264edf076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=3c95cbf38e608e1ca79adbf686b955986bbce30aee39dc9a0d569cedc78dc0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=9956816e7de0ba552d99d20666047c7cd42fe965c08c788e4ab4d53290e1015a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=35af45108813c0b649383fc607d48fab9794b67d9f6d11b97904c20235a1a622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=febaeb25564adbe74279160685c15438f6b51076c890b9ffaf91860f2d9e9bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=bae4f3047a2364847f0556b6f3712cc7c7785721ae56817cf826fe800df10625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=c0a20af5ee26027da6704df1b37084310e27d79c6fdbd75c75d4345c20f5bed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=18c0ba2d7f14d700bb8ce1276b51a16617a65da1d7136c5d9aa701fc71665ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJZTZ7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRqfPH3SEJxtgt9NsDwsd52qdXOdihMo3bg2SqAFPaEAiEAjxkDCrpZqooH7aMCJyLtQbDYEv%2FS96AkVKaFFsBk%2BI8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsQOylpKIX%2BuC9m1SrcAziq7bd8aHqoPmmd23kSQIhBjd3avOf22O2gaX96f3aWTfJ2XaLWtz1oq1VZp1b7dhAD6zjbFJqQTNSAz7MJlZZP0AUPlijvOnX8TtecSyBBYW3ZM9EfT9hXGS1OGniwIpv0ZxhGQXpUNOTufq3bu7wklza7lp8K9xXdIjod0fLlP4JCNW5Z8qVYogWotgVZTrfpOuun%2FJg7nmifBX6eGQj8ptnde2kMqb3qkNEJ%2BGuN3prvYwvRUp20ZAwUEKaJFp5uQn6k9kBd6FOp1j3%2FnG1nEc%2FJibjwOH1U4hQU3ZcyInQKQh0V%2BXAgYFSaWWL1r0t07PB3jppqd687CtJAEqddKdTYcioNHaoaqQB%2FPxZWcyF1ROjYGKsgfUocnIg2RzJc2LrOTgrQMzq1xyJkvDKTuwoeF02kJqhVQL%2BRpDOGz3%2FzrhEn2suSn9mz4txQQW7rNiNGA5Q1IqqpHa4O5NpvmUavV5%2B4R5QGlslMtvHQe%2FE1r2Duco4AezvrcyKjkxtOow%2BjSv6SRH4UbR1RQojZRRf%2B5NtWMSijVnjJ59l%2FPHspD3GL03pfB6%2BDtF7h33Ds8UCaXhNwKecTbXXtooZ5P%2BB%2FO%2BBDrejafTzAzvGpxU2cdYpUftzl5FkDMK3utMQGOqUBgzHv1gbEPJ2OeMPxetv1YXvn%2B7sT5Y5uVGntJUT3awlNnychhc0B8EQXjrqhXFtsrl6f3KftXYwMZCdMaJTkmHxPavLNGWajZ2HXcfTEXLSpjTj8%2FjhxxaHne%2Fs%2B5xk5y58MX2UhlW4prUw48Qu0ooM%2FFnp7%2B4VORm1xffH59WfGpuFRXKP20%2Bv3klNIJ8ERC1tSXfsuHKCRt%2FjMKvVkZaVWekeg&X-Amz-Signature=7c47299173fa2384f8d5a23168008fa8acb8b06a4918ff31c997586b3d78e20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
