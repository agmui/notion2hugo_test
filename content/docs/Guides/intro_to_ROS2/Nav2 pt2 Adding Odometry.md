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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=393a74734e829a241ede6fcd49cd0b477145c7bce4839289984c88655eaa8fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=e30513dd414fce079a93394436f0bfd7df192863804896b1a6a711d1ecd6b2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=45d47e35731be3825f9664cf59bb982c1f497b80608fa1b59a50eeac5585cdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=51e2dced88118f9fd36c26d5014f9e070b7e68d6a73d6f5cd0dfe9aeda15a945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=0b3fadc31a3b94618b37c4c9b6ce652c4e5c11dc34b297b4150bbb2288d2c939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=cbb71df512906fc1f4adc7aae95356aa8052be989d71e4740f49bb08919a9b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=758c6f301e28864f54568c9f8130082988d4ff89c53f2f43442c273027420a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=2864220b9f35e2e1ec325ed8728bbdce6b05d1b4fe4a1b93a8d7ec4e69d290cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=d9cce05f8ef52768127285b38c1828af08b79d39cf8efca9aecbd59592c81d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJIETNP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSkGbfBok9WJwiPg0FK4M49HIHJWKVN2yCFRGnXKSHgIhAIq2iEHZU5uQhT0dyMi9AC6zZ6u4ka3p7revbzsFfjkaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrAoN1ZOkYitKosdsq3APeX7x5jC40bMQQGFTXTaqNFzVEIxPiTfvOEoDmUlwBdf3CX6CJR5uITtWMlzUS5zXKzobRW7%2FW9hhSH8NXdMo4Pl51%2F%2FN7B1c2UwJwZ9AM4YKxLcktLmhdcYeDgcSOOD6TDkubSaaiTLgz0EaXSxURpD604zMg0OhV7PX92JlFLa2rgk6wMh2%2FDvirCVXP9edIiO1Ju64%2BaYlFLCRaV4F3MRWX4TxHzu46JJd5tdx9XeldlRxZ%2Bxa%2F65EfwUs%2FCdYGNxkGW1HcNewWgiF0eonUCDniBZr5t5BsfwjZzfJLJtriOc4b4CudZJ5nujX4hOzkf5sSokyJ7NHwm1oi9t1vRs3K%2BnR%2BJXQKXtUfjhPXXWAtTJz%2Bxs7FndLPCJwvnEqh7amgwNosM1Oi0yvpZu0enFX%2FVUUPIxatMO5pWD1onGuZkIadxqnMuDR7CvRUs9bP1CoqdICAy%2FIiV1tBBe8WSKeszothxXCjfpEc0Xh1AY200%2Fl2b5V7%2FB1mgTrRHBp%2BovyKipa03wj0usqsEXphdrNqXxN6yg1SuGOfnoEDEcwar1aDz7ZLCXkkmn8wAaA5GDfjwvx2gRC0amaFe5ldgEbUlDsEfsNG7E06IUE4uCz5Z0JjuHKWHZYJMTCV%2BObEBjqkAZaZINHd75JTKb2Wgbx3WkOTv8vh22%2FdLEwHnIFArLO0ociDYZc9nBfyUrPYmc7Fqxd5YPMNbF4HvK87StsHG%2BTg2jtHpZr4uLfC5kEjh%2B3S7fGRhCpEaJnNkfFrqzYuGRtCUa5kfliZ%2BOyDI7%2FA0rcTdUlwVBdUH3Ou2crf45Mh5iQmL44GGdDY90gcwoXHO%2FBX6mSDnwnGKhA4YmhxfG6jPt2c&X-Amz-Signature=807b02db480f934d79a97f1aa5d9dd168be09a8c72659639ea719cc86ecdaf33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LYJEUO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnMpxoRw7foBCPSudSWifVkD79ti2YWfArtmopORPJkAiEAsEPLmaQl6ABWEoOe5PcLMXaOyAigmpYGgnYHLz0%2BhS0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt9kbeGMzbBC1qBrCrcA6HuaPSB5VOuBHRGIo1JQXVy1oqb6egkoHKfcB4kdoTOrNMkZm25tfVD%2Bx9KNJRqx%2B6TReKc7BeSQAGTx5CPqhOdeImNRhRIMqodrZTZ39sHlHTAG%2BZBeg0WdvwWq7dIGhpuMw%2BO9Gl0%2BmWgaok0THk4CXVrCHJiP%2FCCmxdR4z%2FHBokWpyRfcG04Fzrw4XOFffL1xrqUZA5qpNoVkfVfgZaum4otusm90LVQfUPxdDc0g7%2BFnwcxaqIIa3or%2BzHcYQbWJHFxB6eqyvGgEYY0Eks7yx%2Bk%2FUv1DVPVIAvZ47kdD5yut2U0srSef4ENyDZMBAVRHBGpZjoHTxKe8L%2BOElqxFhSGs9Q%2FtaxS%2FRZPZspIZwDPaZHnH7sUR0tsN2NdfMFER9EzmoHjUw6WLWAW9GxwQCuDwNfx%2Bo07FgZmPrq%2BNhHn%2FuviY6oa%2FOoOX0KP7xXNfrFLIcJLyfXNe%2Fh7URmDh4wUrbLrRsCzNh7UgP5Jf4sfu61QWufYJyMasaKgbAPus4H2YwQf%2BJDQtakRUjmq8Rpwf2agWS7i4kbnEU5r98PGEq94TEYu9vhe9WGiIWlKglr3U8uaPOyVpXhsGS6V1JaHuRbFjWtfiPp4Ls772ak0b42XGHxCmDdJMM345sQGOqUBAepARkVu1gZWY1U3o9xuec8R5LGK1OyqVqbbALifyp5ZZFjBldXQdlTNPjjqXK3gpxqiQ9FVK4VTQT4RT0KLn74yruF%2Fe2J7E3fQgyEek5XHDXNPe7IhXDQkjyv2lERsoWmX8i%2F2pA%2FZ66sePAiMYKdQPc4zx5q8QBzNoVYsLEaSEb4y8zFoaQ7jE1%2FlvN7fGH9wql1l6sKF6v%2FzXv1Ml8vVFiyc&X-Amz-Signature=3cc01efe83383d2f67ad49956ce92eb41d5bedf27765f86f61140c70299686c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=4ddfb1810256f3690117418925107beec061a4da8133b07b85d2b151b4d70fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=0266ce1d5ed26067dc4534285af6ba9f1be2b03334bf50d6afe42973b0dc57a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=1c954ceba0a198a5f02f861bea85754c0c2dcc7d02e7fb4356322b51d04b1c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=60159e1c509d16db889163588136d806a1ab3d522ea52602e0f0b9cd73b7b0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=86af19bf89995630defd5901560feb12448f3cb631bf1ce3f3378c19a1193a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=26f8ae95d876deaa918edd983957668b413a3ea6d1da1dd16ef433dd60554c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=fc3ebd9a335ed9d2752cf603027bd3d6dd956def049840b240786334c5a44cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=3e3ff4333bf893e041d97b9fbef2ad3940f1113a8f0f283cd2e8770a9fc2ea03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS7ITPK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL1KBEQOEvn3CR5p7bp6S7NEUDdOlSwYAsK%2BM6TKQUpAiBYbE4CAgl461mODFZqLCU8D9NShOvvmqzwI0PRbpaXziqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXo9qGiObkUIrlPFZKtwDV0PLHxsUoO3TutJ25RoRo0pVa7j0YFZBAFHmkBiX%2FpIHCEwp%2FKFSVKTTz5uxFX3%2FhspKxpDE3ye4a6Eju2zVIIL2B7VcG8OIhw6G%2BL4p3HVZLDuVSh8s5R8Emiu7uqi%2Bkp8YbP8zMlXPeBWRjk16i91%2FvY3d7%2FAT%2BHgkLsn8xp7KNTkZ3o%2Brim5l3uftuE%2FHIh8X%2Br%2BAZ6i4dlA2debaMRE%2BZO93kylp2y8Lw732Nrb%2FIeSb5ja%2BWZq%2F%2BKv8M2fK7BwpptejivhJbYeEtrcozpKRGuWP5pYOTnTFlQALu2ynw3p574VqV7LlOIHo%2FQsDM3o8C5K3oRZM2%2FJGXgwODAKWa5zkICkCznPXOMl52PVZ%2FQKoc9JV2hIo%2Fza43cpdTIWhFlT44BOUI5MVqt3MlVmTXs8DXD%2BUVMUuzC2gcogocUvTnl8qPDTGBloylEtXt0Pxt6BBCs0VAlTp3SQCAGJdOjMaj%2BZfzLFB03HJeAGDBvcjv3F8W6DVZ66FUkgp1QpdBd3bnfnZ3o0%2FZdFsYb6IZHQ6hJ%2FJnbQXKSynRejso54fx0K0HhpITWafvsTMGWQm20DfbRNjgXoqUOsGcNhaKyXN3huODG33Oce7VZG4eYAw7YWJq509x6gwy%2FjmxAY6pgFsZxRWH5KOHqhbtXva74iFcTdYCX6AaV6xMRUrYfdgz631Or9LkFFRnlQdoPUVUdVIL8AVbPppAbPdgFjV6a16lif1kmLHvYo0FvTZP%2FlYKMymy9TGdguEFsZ1gylkAd6TtBLl%2FNofFS3CLiJznjM7H8cF5ocfifrlbqm6rmBjT0e3q9XygtoPHg7MNYusg35e2t%2B7KFEwhWt7sNqmsLHO%2F6Rb2QDj&X-Amz-Signature=124846dc51ffda81d528bd21e2c7d1e25a5972fa63c928d3996c338845f111b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
