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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=80ccf3cd4b2a66f1d1d8bd9c3ce3ad776c35a739f17bb051935041c3f1fea30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=0dd45557dfc42fa78a68dbf57d63fb556a33b7b2d80cb29d86d610a2c107eda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=f40f3009d436bdd04b3e45613ca72e25a301129f2986e7d2746bdb3898d6bf59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=a5e6c8eb148bf46d308af7a79b632d8ded7f459c8866e677491497b7bd868237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=745552b23eec6cbcb0e6e5e9735c8b2e5695977bb8751cb81e251cd041475ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=c83fe42bb52d1e8766ff6e129683fa88ee5656b4761959fb0b36f0a931a378de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=445ecb228cf22d266a284419b037d34f073e4a36daf7f90288a69ac94c2cf5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=00231db78825346e48cf03fec380161fe33d6402eaeb8c59dad33f522ee960bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=bba5101c8c5ccc2496e70cad67ae9ec2edddd763431c5965dc7d1174795ffa97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q333CZAJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB3ZPhqzNbt7fhe3seOnHojXoV9gQz8k2yPfTjh3J%2FTwIhANfJMdGbSqSWbmvuj7Igl1NcH6ydRsXKXMOugYeZOyL%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRmKF3Am%2B87GfYtyYq3AOwDPZPG4liDVb3Q0NcDuEuZeJJiwiUQa8B0CS7QmJw2kbYtAGaa%2FH%2Ftpqwi4xMelW9K9U%2BWXT41FHwoc4c0aHp2luTCi3dxn%2B2qeOsXyr6JMLrkjBEzEuEBsr3hIXWs7x8GuJejJpB8TbeiOPpOJ4edKO6M7Hcn0Vf74Q3Q7MsDXB%2FsfylxiJEQ9zXtwwcsxKa0PHbEoKVeQ0C6BOiYcstWgDhFTNcCV2OKt6L8bI%2BbO%2FTaG8xzGzaK81FYqcJak7hEuwWpq%2Bye5LQZd%2B0%2BIiTmQjPE%2F26DQTBIODKnXqlEU0EXviBH5BWLY8POTxZaXq4JtuSMo1PMnvc4wD01SuUYGlKG0P8yUfRoepbqbE0SjWU1PQ%2Fy5PKGUQg%2B01gy4kfJB9K9x68H3s9EMRmwROORqgQ%2FJ%2BIMgBvbdGjoInePnsinSqZHrUHg3ep0jNVGNeZGdnefPGrp2fuu7nK85okX%2FFVq5umdJINF4uTHjUuJDvnDfFLhzUG7s3LHynWdfhB0MnaLmTtdZ7VDkMjb1E7avfgDwkTv8i4arJgG1o8qFE%2FK936rcXmZnh6lmUt8EXZtO80ZL%2FfykfIH9UKuzDhcDyHG%2Fh8Zik67D4XU6wMhRRqx0LC2hxBuaUwsjCnnLbEBjqkAdkIXMISFFFMpSjSijP1%2F6G12bD5e%2BNy76%2BhJ5JGuzbgRC3zsO3IMBH3TKodoJXI6jGlHxZfPtci7N3bL051BspI6EXcfp8BOqz%2B6VkwvsaBd1uOJc5%2BY6TcqBqC%2FkKkE43tswt%2BEWKK8E5o2XC5ClUM%2FMd0liuoxUxKWBHIohgDLFN9m%2BH3fl%2FNfSETPEtoCGobZpGA2W3CgFdNeVM%2FAzasw91y&X-Amz-Signature=2fd515f2160b43eb5c0c706da2bbd212c7d2fa1e0b9c2941b92336d612559812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=6ae6c830688419b8ca28f928d730ae838577f07e0e1655ecefcba72e2bbae8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=cda5c8570cda3427c9fd9723ca955e7131e895043cefa46b3d2207d770b46844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=fcc84efb91e01c9b1554faaaf6f827f1ace2ff68293fe4427d1d1cd7a22cafcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=c64bb558ecbed2225ebdd7941e35c946858eafce9ee3f8115ee39f3bbd2b6b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=6429aeee6fb53dde6cd1c1c7763a9180323a6a5024ffcc035b6a27311d6be8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=9f91f88c689dccb6881c95afce0405968cf661784739753b681306919c6b4414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=89b3db51a33e438cd693b9406a8ed9717033fce51e53e7bf1f84bfc9a4563fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=979b510ef53a3578fd766c9d832d52f64485881c50a113a967226eeb695cc988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYFMADR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6PZ0S%2FmxZuK%2Fr4FN1e%2BnethXdCtcZEcHShn%2Fkf82PmAiBKcjyNKzLi7xbdaBT2%2FAQqMnC8jLeAphuWTCmuXTC66SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmATRLDGKR49OxZPKtwDdVhzok7n2Meb0mjaGuZ8MO2NRst1e0l9%2BnHd6HOdLycShifTLsRlBN5flrO4ERux%2FwMh6OR5KsFkjqtYA5B8hurWe5f89bu7zE2nvmmLcsa5czMOOBq4U6osyL4aERN7szKuAG%2FVmV%2FFStxywnPvpWR7b4wYZ5E%2BC6SUPe7bu5I9WvVUqNDJyTeOZqWEnxkjEBLiLXBs1azdBWx7zXLugUKLgVvYRk%2FgCz8pHrdQYYPlFxK3wEvb7qTUou%2F0pb3wKkljxqPFWK1Cv8mQ9a0X0N9lji3H8uygWhaasOt6z4MfXe5ssOlHJDQLslbRJ5e4jMIF17dx6SRp6L69%2FGr3OE48TtdpQv4MJBNsUXd3iGYQUrGHFKBr0hIN3FuShHNCqdo57%2FJ3C0VUXxe1jsMesBCuXIeKXEhgd9TH1pZ03XP58uh2ra2XZMecBCTeYe06tvRt85b2bnYXkXdHXhIg9s3UlCMAtYnkEAbfI2fl7b8VXBArxGLnkqrYIp9BzJy1nZhfbyih8vCP1zcV8whVp%2BEzecs9LZAHotZ767X3p9qntqSKn6oN9cLpEQRfBf4dnSgtuCFSAMmFOeBxYvI0ohoT9ec4evSXCS2s6uYBb303hqTQQXosdzYw5XQw75y2xAY6pgFEPmzR%2Bb%2FZDflDgHS70UnhEsA3WFZcJJWyAw%2BBF%2FDmu9UMZ2BhwitjtlztYN8rQlsxH4pRX1ucNFHjIFDATMI2NOh5tTtIG2NEcc7BNTmZ4er84Uo1JEpQXq2AUV%2B1wUGeeXVLdojfN5V%2BUl362mYh%2F%2F0HY%2FwUP32ps9UjJRZf7w%2FQ20K1HQ%2BkS0gx20u9eYNthbLYIE%2Bhj%2B%2FYVcvOHg7xGHGBxtoS&X-Amz-Signature=5bf81ac7ff34684a76187216f98c1a7de48e40c043cc2626218be1dec27a3b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
