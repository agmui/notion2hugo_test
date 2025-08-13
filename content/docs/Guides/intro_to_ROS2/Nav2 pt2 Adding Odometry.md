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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=47a0ae02fbe9a5ede424ec8a11190c2adba6a42551888d8ef682025226c9ff60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=e6375e33c6e2c619a5820c40b9729e56887c2c04f309b722d0c25dcb56f74be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=2c1955cb8f560fb3e2ebe924b1e8335575e999234c80fac9dbdc5fd0183a4235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=b2d900eec00adce406b8ee69346772f7ef0865be8841925fb67a00c46d55df4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=7e6028026194d1847ffd4f081f63efadb472c7c8ef2b77d52f1f83b3299542ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=b3ca7366a0e408d6f8596d15cd72ef28fd31e9846f5de9d5f9806ab3b5e22e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=0262e0c33f870a981864834c9cb0eff91a624cd657abe62e04f5456a1e971740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=946eeb671d4ec7556796895593e7ffab9b4eb4a03a235a59784e035e587b1bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=cbcf66477b6eef5fa58c7d1edb0f41dcc2a5d26f4bab049325a0b19c02d431a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSA4XXE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNu8Jf0OFIutjxUBxU7dK47%2BOCS%2FBoWlSPa%2F4NU3MhkAiAKdnGXJnISBCtGFRYgtG3Ege5oFgGcJ9M3cYmc4OH3LCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMvedY5iLS4zYeIgT5KtwDrh8RUlpX5Pgg3R41PPTxRcNIAp%2BbCioob208RRy%2FxSsj1GXe5Rd1SKunBHn0%2B5ZWS94cpd06%2Fh9zelPY8rsy8IxxwJKgRf12vgVHKXMWJR%2FOA0u7IHR30jv6iITmLkKURdO7LV0Hm27ZUd2JMz45hKLFP7pTOVqtbvrC58%2BA1fsE4cTIGM%2F460n3rfb7zelyShKVtP5%2FN1Nmoe0J3cAg%2BsEE6gmowxgSkME1NZec8%2BlPQDAl3OIQwO%2FU3BASCK2NC33NptqHLj9BRaxtzNaCSt2QVucvPMWRgllgF06hB6VQf799N8gnpVi9qsicBHX7yHehMVmRtiGGPfq%2BUq9OYEWvaSvI89kUcg2ORgpf%2FdrRIrgiK%2FIazY4%2FB5DJICDXisu9uSwhD4tce9ChG%2FWYlGhvXzo%2BQzy%2FUaQdA4i%2FzXEwNTCseM7jo%2B8uvPB4LPythgCpFsixxf9PqwQBor%2BdBfkgnsO9SKJzsNFy%2FBMZKn4Couxr94I9RR%2BJgEinlamziVWgHmeWEIsSPFGiaI0Id6iFJEUduAqguZ7Pts7IXJrf9Fb%2FcDL4wVMuDB3o5VjTVqTLOlE3%2FcdGWX3RypHLdPY7kDTNW2pMFWrM3YKYopnRHSianHDsq6fRUOkwkdrvxAY6pgH0Yk4aZQEs6EZ91I4R6yKAidjupYaQCtT2ip8z9t9IUTW9ltvXoLnolDSu6UqXVWtN7bj7ciS4gQseBCnqbZdJM8AcNrGVD1CkcGOOHDkyyXUTZdk%2FfYtsSYayKPxZ2vCKFpJg2TcisiXjjATKGJtmP5f1miXfAmTmGf0oe01MzzehvwyW97EV8jknuknGxdkMNnxW3EelqGYCqmWFv98WjNowOMoB&X-Amz-Signature=3dd9ec1215effe212088afc9daced26824d449a5c7668b32cf7168cfb91ec374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3P4KQX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHce90FWH8Z5mRZUfsEU1%2BUcLK%2FMd5Qqfd07GhQO3OzwIgW5Hfd0LXOOGHHp2YVTk6nWdJqlG1e8flo%2F%2FE94q7JQIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOoe%2BYoWMjV7Rd%2BWpyrcA4FeD6abGSXQT5OOO2jVDsCSQtuUdgu0PXAIHm7A36YwFZIVdf3dNqmHId36bJYkF8OqH1xhcAot%2FWQvFZqXuG1m%2FW01StfZ8Yg9YPjZ3epMteOgXYuIL%2BLHnBmFbsILJjPRvcY%2FV4DkY5CnpaEfRwQbSpn8g%2BtL978SwO8nwmCbBrkx5Diznuw3upyapv5TbcqqtPDcSAPC7BgvpeFo%2FjWGNNAvVxuxMi4SgEYTIoZO7j2aoAQAnSCzNpndKwRW7Toj%2F%2B7n2KJgrtDhMC%2FyQjlLZWOvQVjOSfO0bOf0vc9pfhOoLPYbc1PvfqmUcGSOXHzpM9gFnWXjCw1v%2FbaWceygnUsXpHMe7omOEVUPJ9Mz9xC5EOwSnHEWk1FNPYnNFPgmfmr62LVjZ6l2Iyi3bUK48k8lDduh60PrgYUaFln81slAJRiQmQ3%2B1r9hnoSooj1OfPMzZ6XXXDK4DWOltRibvZ82i%2BC%2F3bLH%2B1JsIhcZB7qnosF%2F47gQJ4ssNOkRmcqOokPo5%2BNF%2BCBq1HffIyXbUJp889KoDMStY1oy4lbbmcu%2FYrf6MZgvgPg2j89bb9a035R6Iq65PGKeeD66rZIASExjieFW%2FquK9slua2%2BGNKMrz7u7fZe6lmn%2FMODZ78QGOqUBC9%2FFcb6ibI5spxhCEeRtU6Aup7TV%2F8OWxmAxt0iaAlg1gflV1HxfRN2UakTgycf9NsKylT1Oq29phKrjFygb04OYkvDairW1zxlfbTUMX64aSnkqR%2BqvkxnhB1z1YeXPpqRbLeV5mTCeom%2FHmQ0hnEtJCOGQv0%2F9NIt1y2WQn0AuM8VtTY5zkknn%2BpcpD5YBo8ZyzNzxleJliM2v8rywdnge8tFJ&X-Amz-Signature=64058f1e15f1503af152b0b9161afb3f5d9629eacb473433ac428d8e31ef2a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=72e5af2bf236e17ef79700a69ef8b942da772803013cec3218d85c34ede292f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=6848433a127e8a0cc05467d226eed3ec923721e73b7b86c0b7b83adbf0d3527a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=2feab2dff4bfa5d3393ef1db88b6b57ccfaba3befb1b5c2a8f13842df3ffd882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=23813678533f8df2ac0c58e7b7e4f22fdb7011d82546d61f1d8d892e00cf1f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=9bb5ea0163bd4f702781b22f4035b49ae4feb6567103ff61db9e42ff8253bb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=8a9beb8e04851962d33266a8d0e4c0657b24eb5d769a89746358c4a4764bbed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=8d51cfba88f65006c618e58b0d2295d05f4add647d2164af1f04f64420500ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=6fcb0467a4db8ca22d7044d3f5368db211a93939f25d563244fd59e0326c3b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XABXP7S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1q7ZVot0HWa5trCKrrUNNbkrNqR4ZPh9YU2yqIiTxAIhAP%2BuzScHWbikfYK45u9512av837TAgpWNbe%2BEAHgYPwEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy9BlU9h1GapNxbeIkq3APzCKxukj%2BZPDywh%2Fkorag%2FbQTzOVBB4U%2BcJjbFzAhTsueLNX2dzEgYJHpOzm9uC3cJ3%2BECROysl0qt9N7LYXZNf99pqsFurQScR0mySy2PYJiKfQRjCr%2BtZPg4AnLatRJFvgpRGaDTPN1nACj83b1eg2YBV2WS0gYuX%2FnhMUWmWdNPu01hNZE1luoB2ztpm%2B0oj0oN%2B2FoXKH2idnqGOtySj62w5%2B3yF0qU31rQzGPCBlQ7ohrpccSOaCw%2BgvP9gfMLu249NVCRy%2FyrWnIh3b3evFgjtL%2FW4Xm7zsB59N7VjFrPFw1fT18Vfy6Q00bgAedV4fqA1VxzwHlpyb%2BWAQtSPB6wiI9HHc1oZw9S91oRlx4Ju0sgoHeQlc7Gom6ABz9EN2SB8gNmNMWRzxgmNEe0tU%2FQNnD%2Bj7l5QcFdIdkAgf%2BlwLlqcyuzsk7zhwkVj87XXwWNg2CoBP8%2FKclwlboQOj9i6l537sOWABGNSXNJwREeWn1i71j6cJwuj%2F4N7YnHD03pGC%2FvneAWmObPatAxmXf0esRQUt8rkLhfIKLwTmA1x8k39AwR31%2FFcyiBBPvIE3suDrnuBKVyTohJlJx9Fk%2FUhsITbb985B%2F7gZsEffLJ3fo060xt9vx%2FzCf2u%2FEBjqkATn0tb1G6pmZ5mfr3g4wosAh9BzxrH%2FlKj8sfMLVLqmuMVpG%2FQOC8xOAc9eGJ0G3ZXCowOjoBtsv5HX20lguaLcSBIOFmbLQHbJK5JeOgkhb1hOIORldz5Gw14jfaR3w8cshycJpTiMLvUZcsXat%2Fh5yYtxo%2FI955e5vG3B0Whe2An6vk5alMwwAGsxcuTyox5Xc6DDv38vq%2B5frF9KXQkcQCmHV&X-Amz-Signature=06a6fa1f35c0b31a539340bbfef533ab6a25ea4388988e8b82127e25a0142766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
