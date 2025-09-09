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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=f341225a8c13fe6d3ccd0c8107e8662077acb705b52f2bbfb9070e62c0a04394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=84bf1b0a3a0c62d182c37405ba260c3bb2b23e47de3b0881ff514f56d7241c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=9ea1d97b776a3725ea2b37329a6d76ec6b5ddd6904ec6ca45d852bc6897a30b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=66e2f11368eb2b4bc857ce88cf2b65d4ae666372ba6663cf189d239d8b611568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=204896c6630ee4acbb96f8da5eb03ce5a507cd6eb7d3c89fdf7afec7f3cdf679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=61bb918135e6c123a1e11691ddbbe2520cb0971ea7edfe1ee5e09b290485423d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=57656ab2936d7cd0ecb7952d27560298076c27849e5e1174f0da2c32eb4d893e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=fe12ce0515bde862916086099a1857b89377a4001fdc4453a327ccc653851aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=cdd4797352edc4f5612705ccd4dc951da93bbdef28229515d0a415e228ee3d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2TDD3O%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEFax%2BYYl4hiW4UlzgXhZY1jYK9xPs1%2BJSEjPiHYSl5%2BAiAgIaUh6dTJexvmrLCA70qQkKXVZg97kvakvOlH3velhCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOWJrUZ0c0IvVw3JKtwDz8gXfTZXwNXzrv3pSbcCRQj3Gfjy0Seg%2FMEiX7xncDpQs%2FXHCKc67RF%2B%2FxXoyGy6Sq1kALmbvZx4NTsY2IcXN8oxo%2BrkH%2Fm0kTuS3Z%2BdSonEzRRrN1DbWzh%2FlKW3DLKr%2BD6vbH2kM7BR0pL%2BAk5CtfpQe1N8R5GYXN3PJspTyHSnWQgK8gFGxMm37LyioXQlkRj9DilSjnxZSYNbr2GXAuiJXkiVw%2BVmIExgo0xA3yvMo44en9u%2BzISR2Grcny%2Bd7jmBT%2BD2VXbLwk43ejENJVtVTLdQUuaGGPGCeGMWdAgOwq4VFWOXtlP4evNVErfpWFFRTzzpCvqmIfNchRhN8Iex78q4Y8YshtIka2u2zsMC9miTuaNnQJqV7R%2FzErw23C2iure01E5S3otxfom8urMiQ7s9LUES8xaLFVe6g40yS5NnzMO8cCmHjF9yTr9F75PIsC1KZ98NtqtOWUqgp%2BbKfj9pw84A5%2BFP25qedgQv7Sc5YDUGnkA%2FUck3WJeY9RzczeJf5%2FF4ZYZ82RC8j9pAwqcSteJecyPTSxAwnofrQnXL9yxfLu5o2%2FxRBUkqbpBf6LHSngjzO5zc6HbXJIup%2FKPAAzP7qAMTVxbWS%2FkGWDh%2BVWsFj0aOcfQw%2B%2FL9xQY6pgGQoRF8EiKa7VCT3Y3d03zrt8Ziv8M9QlRrKSe1FYT78km8GZHL7bUjW5QJfzdZ5eDuFBFSoEi316jz0B6sS9JmS%2B3EevILeelBV8KvTkfYwjlg3NSPjxjOKP6pNp4%2BtVqiel2caFAEm%2BqtE%2BnP49GosUVKivDz6zdmbgZu9xdl8yjlxkquZduRG1AmvejtX9h%2FZ7dnP662qTseI7BwdcQVrSmsCSP6&X-Amz-Signature=be563ccbca6efdf8b796ceb4c9f13950514bf8051a84f5ec31e7a1d8aa82fef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZWW57A%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHckfwj9Zc1fVG9Drfu7TVoPGQ632V9CVjeYrG2JnkQQAiEA9elvshDA6lPNJuRRXi5AGA6hyqcDWOIV1vE3r0V60hEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGGL6%2Fgxg0d9JwiDircA5ma228HkuNzBbTWpoNwqCR2FdTAGFYVcP%2FZq4POPFUIUyrxoVTS8wgJ4Bi%2BjT3oJCUAt0cugPEV6gTXixMrigWvd7KY0xGSgL%2BzmzV9UtuxwuixMqXsq6%2Fc83U06t%2B8DoFpiU0LBrTqYBaGyDfAoFr88SDpoEsx1OtUfZ8a%2BMlXGakpv4w0jvTuaWnF81ZIGYghLwrpxP4qDoAlrosIMum6PXl1tli6n8Gn0w3pfYy8nLckvUlbefS7XOaKRpquFPpnkGZ4eC9%2BoU6PYtFTww6218blyzN0EjlE%2BRW2YQtWuA5zd5SZy2dptwPxTVxA5jqAT%2BeWS3BtqSUd7A6wIfu844eklzJVzLlNy2ru8VoWa3VBVzk64O9pzkK2jk%2BGNKdfM7sI%2FDJW4yQh%2F1JmtQ5J%2B9MGtDD7sjqkfoUiqcYh81ZGy8egD2d82eA%2FUzsutw9ot2C9%2F9ADvwawJ6C8FTIKhwJqe9yXldHj%2FQnsS7LjS3g%2BGdT04p6tzQeqINP3BYcwXvCyTHR8xRK0X%2BuDSaHXh1tSKdshoF%2Bk%2FZSRMJMOjN%2FlWfSspU1RiRugIar1HaGWTjOQp7H2KGie8x5f%2F40aEVc9r17p2wSAPQxoHHvZUOTEg2%2BPH%2BXszM%2BXMLny%2FcUGOqUB%2Bm0p4rwBnWtbePIWbo6bYjH8dd6kMs3dn2CnSAQkLi3IoeXCaUEUK871EtQATKMZmze3rGhANbbP4IskvleoqlVS58YL3IT5zNm1oa%2FjKgpq3i46OiWFJYa54NqNHjHpvOP%2FJbvfpUe%2B1EvOSMnoNupdR1zLKpmhC1fuBQB5hIUHIH3LZrrxaYYILE0uJ4XsPbbwaDC%2Bx7KTr19AHN5oS4Zn1x9K&X-Amz-Signature=d8ab075456ff97a89cec8111c953beb72988e7d04e5ce78a7e193f38a776259e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=5e30f351e988e797d9ebcacb4e11a4cdbb7127be217942c600ecd51c6823a2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=314ad52580b7801a2acd2d96fa4af0951fffc61be1f7f749094d011ebfa9b56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=06aa096fd03073e8da554493f6a75966bf47b30da87d4a14a37a79b43f2ad7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=ddebe09c8b3a31b598bc62eca8f46f5846325911684249b2d0fd585ec5060ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=0ffd02213076f2eddfa24810fcb39ea7e87502a85a4916e8b05b7c80b0e3d080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=da68c56ee11c34eb82ebc218015d6db51eb72732edc4d6c518363172c02dad04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=ff19fa02793f593614255dd75d53e05184a64d6161addc92db79f98e850f0e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=9667464a7c500dab40234954848343f3a7ec9efbbaa0e99540185a8ebaf5678c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQVIB5J%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGu%2BIb5GCRcw6%2BVUMgTIxCuEx93woSF4JoccDcADqFQPAiBEd2muZ8YWZeXBtSPbgf9c%2FVGf35wK9Ezu0s%2BqS6%2BqfCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfvnQmhI4up29tOZtKtwDPbMDUY8JRCKnbGGVW7WYDjI%2FNSxb%2Ben6a20JsGis19ncn8X%2FuuVJp%2FMPnYdh7pP%2ByVQBBcYO4vEn1M1tIuThd96%2FNtVyB%2F0HR0nhEGCqLMZojXG5afA4IMK346PKZpH7OrXjVtoGM8S2wiqVtvnttISr5qsMoJcz7mHb0qlXkk%2Bu6rOEimqIJvkH9tx%2BlBE7untmti4jbMcIZjNZCYs3WDVvcpII5yEr88UZVSozdeVgl5vkljQ%2FU13331xU01NJgwmxHuk5TFS1V%2F9CwkeF4LQSw%2BCv9bkzFsq0IqvrMkAPMOzNJ%2BX%2Ba22S0bEmzqmpwXoijZvPmy4XD0Ex1wfOdJ6FLHO4IfgFmhGSq%2BF5vbtUbGW2QFGGL%2Fzivp8P7J9nyuJuLjTYVRjllNn9jciqhYv4EogIPEoChOpRY6SWf5pVenY4kyYMQLRsACiOretjpPpTUth4sIY7os0A9X5KHy9okxUDsdrdormnLnpz9SD5TwjGPobmy%2Bh6AN5SLRphZmNNENKvisMNGspkczELnL846QDeiQ%2Fv4dOf%2FVZt5liJ8zcKH943rFF2U3D8G0Hbr4o83LOtLPvy4FO9f0YvPMUaGnn%2F7igTXnPMRFKvsAqNCsCokBwfVcpu%2BZYwofL9xQY6pgHpQdJ2qTtoDcUBmbfyFz11FRC%2FvlL39kJ201RheZ5Lkhb%2FKFES6mmN4tg36n8DtmclicFvUHCCgDopUN1QtSNYfmeBAsVyq1%2BSGNBudC9d%2Bja%2BgfJg1HUmXV%2Fk%2Bu%2BtLyiQVrVg3WQjPaIMETgm2ytny3Ka8x23HLQ2jso031dlt13nYrf5foH76NDc46fmv8YFOlSHQ%2B15zlgkxFepsnQRE%2FZ%2BOjhI&X-Amz-Signature=2ba6e9c536cca9d3ee2851787e5c34ab23717a1307cdc4eee3529ab67186817e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
