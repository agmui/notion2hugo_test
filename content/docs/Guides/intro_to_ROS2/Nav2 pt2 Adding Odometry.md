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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=a5dd6a29db5e078b0c950bff901f62d4b46a61ae4ac8f39ea2486e56cef63cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=4dafaf1589553ef3ac5d2e641e7b0c9ab83bdff6817d7c5effc6b30a23b97aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=634c37863b6ab4b401c30f96d137856624cd0b86b324245fe51c53ccb15f03ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=7496742314d788e75484cf8e14b353c47b4733561d03b855fe47dfc2054d294a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=9ef672a23cd3629e92782e5b61183b5be18871b705aad30b2558f29703f384b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=139f0ae59fcef9663c15de6f4f32cb649fe8cd1cc82173addc2e7eb39a05f2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=5eca4810c99b6e55bb212ec150ba24fa6173bd35fbbee900712b850ecfdc29b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=1efa668d28f9cbe9d22f5edc8cd414f9087a3150098aa4195f1b8a690456fe1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=541269d13623a136998fa833aca8c1a492d741c015e405a0675de0c8050f9e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEU2BGL%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFYt3%2FtTKXXaMKKO36zH7pVGuXj9Rv8DntFi0fm%2FYKaTAiEAuveOfK90BTa%2FiOj6QGvcfa4GE703Wq9cJd1E6PY%2Fm7YqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcl96wwTRFo945wpyrcA%2B69ZHwgmcohx6rF3KYVOwHF0Fnr83ynJsfNJdc5gHmpC83oPJg7fv5ziFZhc6rkmaTsSI7UU5nW41bkVi1r8TyE5AEKuRDaNqn7o8jrFWx4mne8cbZBLHROdQz1%2B6sZ%2FpttEyHU7hIVmHupnYmiVqOYPsATCqm4x0T6X6UGl47LWorraV7vOkUsyTuqEDe7Be%2BQk2c6vKaVspx%2FnhaIctjDANMUCrW0IWP2U%2FH%2FdajoEQoUOIVJyKkWqTaDx91a1Cpza%2B83l2HVWEGwtwIQ0WJ5kd%2BvTteXC7bMQa8su4qb4p9M1fvPkLejX2Fu3DBLXIxGqBQ6Kz45IEcoIp1EVAvpUVUgLS%2FRezoo7ZPxUDEtdeaPwtuejI0vtUxvtWigBGt6uVxtQLrkcUgfvYEh8mC0N6gbvtseLFPO0DpvYO1zcyHyE3FHewtOu1x9H39ISfw7Zfgu3iIkH5FhraUeXgRD5LlJlXkDaOL2UTL2qbaS%2BIFKo20u%2Fn418PaeUPMMid3Ch6obeXaq9v%2B9FKq69aNLVukZmukkcrjpFZUDXuBNuh5mHyhcyeNL6%2FDH%2FNNnH60KBPx1wLYgjKinQrLpdyiG%2Bi3kulNh42zsH9OhfzPDF2LzAZB1d4Kc%2FkWpMJfunM4GOqUBHzUFBU4PzLIhhCx9qBIl%2Ba6W6BB80OJrome8kcqT5%2Fpz013iCXuvSrkshVxjD49P71LJxcoV0fOn7%2FVUlUynuWVvdZap%2FnBJGEVo%2Brg1rIJvu9q4FbPFveV7vKZkvnBt7Dj0QJS%2FG2A8TmbIydS3mkp0TXXFbMCXwMwhXRTlMVWIPMyr4%2B4EHtrWTVut8vZz3J3cHyiTvHULlLW7DJGjiGXZwApM&X-Amz-Signature=3eba58035b8248ac1e898cb2fd5b4e774fae9b646a74940a67abd9f6ec57a987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS4US74T%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyj%2FBYgtyeVnRFQ6HNPBO7rsIDkR92TOhWlEmrJU%2BscgIgcDhdgDrGTReDm0WyJ8Oqdp2yebtncCtRm%2BY6VE61B6cqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa1Poe%2BN3kcb07flCrcA4939NtQIqOvOgXT7aEGdEvqlVmdwkH6LVAHRBvMgCk%2BFK7eo%2Fxtj5XVRfO%2BvoIuEhRf1Kink0XOqFCL3Oh%2BdruZwhu5LzxRLgqy1gDM3pBqhoa7a70CqHlPnqMO1FqS9teRojJK6guR6rYj1NvCsAJDVGTbpmcBgQ282oVonSoQvX8swJPFLdYijC6ShHALsHfLrCLOZrNWWUWGj7ecyG%2FkntqBLU66FqYwT%2B7DvzKyUf19jnQF%2BxKOUDGGUsS6w3a%2B4h%2FX%2FalzrZdig4VSzwIk26e2lYFQiIO5HWg8QqH4HdHI%2BaJVp64Gwp%2BICqKQqtQ1RjQRW1k2xVELrrYkhhM%2F92vLG6f9hFah4Ch08t0guNkQrhhXkZYEnF84PS3Zf1EsADriWuQHQvcaFkrFKg%2FAjEs8Hm623dB3MmO0ZWz7go%2FaGEFUUF9Ba0T8%2Fn%2BA%2FNKpYDaSdutIscXTGZ%2Fb3jWegaFTgR%2FCiP4bcAsSmB%2BtozCHhARR%2Fr55R67IN%2B1pYr28YwWhQbzrvsFVSso7XZFT7MP5zgcKes8PzoZx4XGcQVHWa7nHCn6oL4OiEAcNPEcUJN3UxnQqae1W1aYAbJpAU9SRk%2BXSD13CcBkg4bdvLgFKR2LrKxQ80urkMLPsnM4GOqUBGR5q8U9BwZLjsi1xQxTW5LYnDfLiln1fn7Ly29WX7a626nUpJncU68cUXzk0myXdH%2B8W9JelJSGBnhExKQYEOm3GSssO8ws3JXAudE4Qh3RIlaqc%2FtKcS2RFAK35MWl6YDwgLKTpJV2mdaL0U%2FNfnLQQpk0epBlcgtCGi850Frpd3c3psgfZX3CcsigJpKMd5PH3NtCScITZ%2B9SY71prP3087%2BI4&X-Amz-Signature=1eba84dfb9057e7a118f72965cee4db311d68a57b1a8b5bee5f5c85e306a7b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=11536a0951acf5561362243d68241211c9d81ae6dd8e904c2f9bb9f3bc4c877e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=b052b28ad33905743dbfc9774cf3ee6c79ca79cd6d04e24dd4329e9d5a82559b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=bf2ab028f50cfdd369659c998523ab4022059405aa84fc677989c1f699c220c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=0387043670159c5ce57607ddfac43426612c59196f7c79c914002c3f6351ab8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=317dcd5659661ac15b91bbfb83205b36aea6d1bee1429a6c4c6af8cc687ce32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=c9f5c4fe24f5ecf92b60b73c00c573643518580c11fb7ab207477bc26c4a4a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=1db823b053c63f643b986cd42e0c7ac067c56d2dabc35a2690cdc4922766811c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=f074fc582cecc86fd257e483baaf7a625f1129e7c3c2fa5351fc1bf0146c2131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3PVTAR%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEWuXd2ExQ20u2s1kvV2c7l8PqtoShcNBEEwvJeXx0IRAiBMqaGKauC7xMdeSmWn%2Bh7E7Dl90MqB7uzapyshplcTJiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eXoR5sW1C6ijK66KtwDKZ9%2BfZtfjMkFgtzDemLtq%2BsNgQdv0sxtId8NX5r9zF97PNzd2BWoZZUbnztVTpmEV7JHt23KF0rSPpdk0o2%2FmEqnnwXn7Oezf1tVnQc5vDfWnUPDpbI4D6CkfPdJ9SMf6fcIHup93lUg7hstcPIw3zwVoBJmf0z61Wa5zkS7vG6OuXGKSTs3IWF%2FZoo5MBZKEjsf3hlxgKLXy3sxkuABw2VqnOciYQpuMuEzV7g07Tk8zSCffwbNCG%2BnW9GMieAA5LDmtJEfC9fVQqFc9oOyTaCO9K5vshjZ8encTm2%2FhTi%2F98M24ZEZL3Ri%2FL5Hf957p1yc4p5SRaCqk1qOT6bznvB1TNn3TxsgDEidEoHebsRaoSdT9XQYiBQ2PB0y9GTtG4eE8ZxnRCWnRrfKUusqMNUTkj2yX2Es%2FDWc%2BFgikKmXEMjE4tAXtOqt2P118J%2FTXJYJv7Gz4oKYDniFIWGSWHICL%2FkOBW%2FK9or5KR5r4mUrPlTDzRFDL0nxc%2FvujrQ3OY09dtgLfz9KOVtZJ%2FdmHJMNL0MLBftY9JKqyoKcwbMMkM8rlnXgfianhsvHL6KE7Ua%2BgggsVTM3FLlQmxGZn7%2FQuv7Ush%2BcZMfowTuWoIIncqvfRFg7IZOBejUw5uuczgY6pgGUteVWe4g86efsCA%2B7Ib1XCq3jAk5cCLnZ2lfJY9WXxQiWnMC877I5UtlizFwsQWeGZugwspWAv8h1QIchQafsGRwqPB8Y4FwR5ythmLnmyJi3hMIcPrxHYbc%2BhYxwjWbD9diEhWSxN7YSXq5VvzbqgC%2BQrnR1Xc3HNe1EJ2m%2BZ5T0FEN0yuqykdUz%2FcvZfo3GOdSQrRtr%2FwmLrHwKs%2BwKL6Gjgqwn&X-Amz-Signature=23ba34b9f18dfae0f53bf8eb266b1576e4f52c1a91c6a83f9dcee33564505a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
