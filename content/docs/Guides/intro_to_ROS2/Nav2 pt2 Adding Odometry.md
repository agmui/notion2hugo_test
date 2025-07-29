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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=e3a0b4951cef2090209b6c9f209190aa53cf81275407e42040097343fee96d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=741cbec52be57f5dd85beab26893ce6b1a67d733794fd1a54b755269d7dfa105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=e57adaf8bade27551cc7f3cca48d4aa50dcc8e775f3e566ba3df44ac49c6af31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=539933980349c642acc1d764fbcb0a5954590da9f0b938acb50ed15a0fdee3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=5a7de56b51a6a4cad3145b777a37a57b565a5dd7e28bfc7e5ac6940e177e882a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=180ebcf79bec2075080f01ecee09e31d76137887bb8eceffc8aa101163cf2793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=dbf3b76e4289dc5050e550b0db424e3fdc3e869cf2809ca9bd40769f514d4ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=43611cda29c3067110c8000d8c5d8fa0a622395859e4213a79f28f0ff84e7537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=4176202039b20e5862c033074af5eb6759e2299eb929ac1ad7871f911c99eab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJJKCRU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCA2pWrMXfDm3q5kaLu9wFOjDmB9IMTcTQ2MCyn%2BJM2gQIhALXzkH3elhUIjCYCoOiq5eFRo5v33l6f4Mn%2Fx5Y6IPL%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0xB3BhQUbn%2Fhr5usq3APAbvOU5dw10AvMz29AS1immqOsOBQpC%2Bap8YznMqKRmhiZRioFVdTnW6NYuQJ%2Bmwn4vjqpLBhqIDmyN3phegDvHs9BGvZnlAGxkI80GRuAxkbltUaHHQ81cP5vWGOrnFzQQRtj6irBoskyjLCwpWcctut5wgFWt6eZKswsAa4qFZt9HbU7uuinAWIBrj0EKf1Z%2FwvPAoqWsiW9ZbuNi3bdhLMCpC5HMjJUnOf0Pv41BRm70bM9%2F%2FQzSWj0vVMoE%2BOQZGnOrogCbTZJbVwuXIaFjzjICF9BayxKsSrsRYDHTzj3Rw%2BwRP34PSN2A4pqmADCHxxQGMwIbLaB8aasYiGQJYOaR%2B23BbFQBGaJa6K%2F%2FPR0wIjVUNouOHITQge7LYEYOuij1qVO1lX2PBGPtSad57HfHpC3LiMi94y4owlddWLXlWDz7%2B3sqbAYrJImCnp%2BH11Za%2BFO6ylg8hYfCYO6Mfu4Ib5o%2FNbhTIoWCw74IYVS1Y6bmWtZiCo3Yi60zRgncriKkrzfJxZMl1yfVNa7wMVL55QKwzf%2FQLNvS7ryUNNmPRJXkx2GmQkBbC5FMqpBoWAzPUa1R7VKUj13t%2B0yJdgnqc8AWl1ySvxqexHzhEyR0SgJV8FUbjgiOTDGhKLEBjqkAaiHJqvyHFa1GClhNmOVvF9yzQfnGePcWLtUit%2FldEb%2BUeIzLKBQWcFQYiOYdXSBDsE4vwJWOvOUiDfQ5VhU4QZRfMQj9LnePFb6qcmIPwwQVEKUsk5vq3MBh9VNG4piBqwbwmA83xIaQsXaT3RV43gQV8%2FFw5jSnk6IntXtTK%2BJIXpGWEEngbLeMmQk9EQ8y4j%2FrfdCkqAQEWjLfNIlI9FYpkRO&X-Amz-Signature=edd2694d13143a38e53ee712157de0bac1f1031fa02e82a81575fe5f628c332b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3CCDOT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHNxBDsNXEVwLHwhoFiCQLWPdsQAy6dRCog3aQsXShXlAiEA42AgdKkiFQSMSPNLt%2Brt%2BLrlHi5ETNI5bBAAfx1bECkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvzZsMQFjKjHOd1ySrcA9Z5fqmFOkIzoo6OHS0h9uRfSgDKIqaX40Dvl5xXXng5Vlln5k5hY7AAzhqm%2BScX8cvFHre55waJp8KV7qoZuoEQWyb4m8u22YIUfeTffKppO4kxvGqEd0%2BHeToImFW%2BfKz3h47pEPpj9F40JhhukFXF5O6N2QLkGST1Gc0lzakoAZnmhUAHanKmFygsbdTOzhE48rRCxSkYH8WK3dpfCiQiTsGVrXd7bENpZ67ZJSluzb1OszVoxnN00m6PBvhtPf2%2FJ543TJTXa%2BYuTWpsfn2F8x8OIMDJoygStEJFjhIGBnugGV%2BplcgM0ZCLJdogaZo8CTBnkRgVH2njxN0J%2B58ivd5z3xUkaNsf3UxJnsUy9xLEijMpa%2F3xwDpnSb45zgOS0oR%2B31bJzcDaGqmPO47Gl3Ju2IS9GB8m0N28wOr%2BS5NZa%2BWE%2BHkul41mpWeaNBHK8tIAXRvsE24WllVgqwCHOiYiLIZi2Z1b%2FQniiRMdZbIJsGcTIfSZ0mTcWCgHaFJb6VWr9JjY8tnNOTR5A0nj5thj4ctKgj8X9zLVx0lI8X%2BWq0GrNfSQVNYvq1cDT%2FCQ3fFQ2ZWSSYOdDznbuYmttT1XuemA7%2F%2BqKW265MpshyTjDtZYv4%2By0wNvMJqEosQGOqUB8z3GFYeytAutuWmJiDCKEwNhtUQTqIfC1H5sUjwLdQVfVL8G8lYVRNvFMMVDamtMtlg%2FzdNSjb1rcd8%2FLs8t%2Bc%2FQ5pTOE7uSmp7ewcH%2FoBoVfhlga2%2Bjc3fmVYc%2B7rR6D8WaWX9yTVNMtoBGNhjYEfPIxJGsSHGV2LT3KSKQdklQA0h%2FDC9ok27rfOQwFWtfk%2Fj7qV64Wh7T%2FHeAq7k6hSLKqg8f&X-Amz-Signature=df61b9aa96aa6a6a5cab2f3a72aba5d302400212408f3fe15c472f8c044b2308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=7dfc0f7bb23c09caf0364d802acbab86889c7ee00487ad566af2faab6cd71735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=b96922a82beba9fb3a24302605b0104009484b80f031712fdb6b689bfea4f783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=fe26ca37d7d368a13bafd17fb65f203f4d05852d45bfbf0d5ce09d6636c90eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=a0997a74b412cd15dae21ec04e80302b5ffd6270941f466fb847fc94675eb8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=c9431137d15ad4e54f3b781950133ce2b440a59077ef196f3efc9daf2c64ee89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=40f16a5d3a80d40247aa81e825013283e29c9ebbb9f8f63b297d5b5b6ed59d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=c05b99f646c62be51f639453dda353b0b21cbe572e229ffe93aa16ca011d7f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2C3AW4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEkJ%2FoAnu5loCwrwpmCeSfBZ1mihJ8DFzKIi3GF2pO4zAiEA%2F8iXz9PsLwT6Oh5t40Ph5OlaLyjXqzqB%2FKJfrkVEN3gqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEqHwRAj8Z6fFZ04yrcA3dMUQwqzUiA%2FOmrolEa8KRK%2B4T9wZ1BT2oQHMcE5mvP4ewIUuBFPaNvCrfwSX06lq7WCWgEy2lYpbFNSbPLXuZj0lRfhtQCiSRcj58ZwNMrJ%2FgVIsP8zzJDOCytAF0ObjZ5bqz764MiSh3qs0ZvP5M4wFNi1LAGR2zQNpVZzqIUsq8JpVY8UYC4EN%2BB8j0H3ixIWGSUdO7A9A%2BMJqLzLYW5C5HAOn%2BOZI1HmCB9M9gCLweOqml%2B3HVtUThJuiCTbyXtw6%2BtKZtO6hUPndxJwYrsmFFnnP4Aj2n9%2B0BgLCi5hzdpIDw8mWpVmgFhkhm6sFnJMxY8CJDCnGZCW%2BneTiWanPjHILbdanv2ryo06nLWfsjE5nv4IkS4wpP%2FoazBJOn%2FJeIO5EUWujHY5dc1mza7nzNOwIdaqYGmKW13Uwrxz%2Bs5PY41U6ORiP%2FP0K2RqNFzuyOZpJzXFdH4aInw4RpZ%2BI%2FW5kK%2FOsHUMexLi0acVvjJXnGhbkUQk8P1i5oGktJLma1ciBoGP5z0910B7s0EdwBimTmF3LvE5Eb05D%2FUcGO4Z8Qlh9I9kmSs8zu16rEUUtBKZYBoR59Vs6BTm6xMbDBpJzNErcgUoJqm%2F2S1KTIjGru5ocfa1CTsMKuDosQGOqUBdR39wvCH9o1caK65%2Flxp8erj8O6DHWoXEXSYJvML%2F79HVmtgMOK9FlLAGh6oaJRxrdQJBJMx%2F9DjPnPzfrzutqhWlbI9yqu2SVLbRZHzzow5NQo40F6AcfSJSauIo7SkA2enqTbFLEjuolCLlzJbK094Nafg4N3gI73DTRR1IyT%2BZvszwGHmdU%2FO%2Fw7BDu6otVC35bhFJw37AyC40Tu1j6ft1%2BMs&X-Amz-Signature=2994db42302b19e4810dbd84015dbc7fd742a64e39c9d77b86d7012733eca2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
