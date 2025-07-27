---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=3898ac08e573f1aa5ebb4572e21af1e6558dfa402b352819f1521f42880afb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=ed5c9ab3ef34bc65301d040c8e11bba3bce5f0f4744c2bf5b08f1053c12676bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=addb208a3dc4fbd462857560b7267930d2c05134d40483f69ccb077b93abc371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=089b4e1cae49104d3f889306fc6c2ae7aa65569a45ce86baf0f6501124cbd386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=c3556f58ac3240bf31583dbd613ee30fd56754d5c937414eca80f9bc2be19fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=0b03e59abe9facb30126cd2ed683a5bfaa23988861b95ad2c31fe0f1fbfa0d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=ea6d8f5beb791451a8c57a26e72a24afd09f37804ee19f37c3d13281c2cae1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=c35cde000110327fbc1c61f8185cd8cc4fd073f4e60d49b3ef95c9e29c84647d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=8ec0376d8ad951eab741b9e764bb1229c3bbedfe47af5b57f0e62a65cba3fbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XXF42X%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDQZVzL84PvhpU3pnsWTx18dUN%2FpiGyijnRH6GerzbLyQIhAOxOe0758O1O5KLNPA5WP0TeHCcO75JhmNF6Lg0CV%2F%2BNKv8DCHIQABoMNjM3NDIzMTgzODA1IgxiW78fqK0pt%2FABcJ0q3AOmCtBYeAcdra0MTXkbxp%2BTJIVsxqIbcWLMUhrKX3Pzh9Sr9asNbQ8AX4zwzihRsd%2FzpuZrv%2FkoMCjegbFSwymzg9IxNZPOGiEa29GXqxvrW6TO%2BQWl0eI7NIXfWbJmFQXcMcEVLkKhHkGDk%2BQgeOWHUYwyC58RJmBdV5qmycA6syhM7VrNhRYI2%2Bgh6utklydvIx4DAfdDnPE1gtnxfQ0%2BCNV8vx8lA0DaFrPTLgn%2F0OZix5K%2BN8waYbz2alHZOzbDqD9pMZmg654y72DKvfeiE9FkrZxoaHOC8SY4HPXi8oRWHUqHmVLQfm4Q8M0jc0opxEYm8keCsJKR0%2FFHr1hZaT%2FnubOOVeTyzFr544vx8uISOy8jH61QVXcqcBhFX04KxQra%2BLgQpp92Dmq%2BvTgWi8L0e6JaSAXW3I7F7jJPNJ%2FZ6j%2BvCCcFpjqtWaYP6oXAgn2MSSr8xaXyyHPypnvaJv94L%2BBO48fP%2BTogDzwh4n4P7i%2B6la42dn%2BBMmoP%2BPQbCDGo5RfDKvGg%2BtAWrKze%2Bv5aU%2FXkPABS0%2BkuCXD%2FLpBOl7pyOq8VdhUoNoqTZWm2FbNzYC8qvcL8xxzPkytI2TwxAog%2BWSOTaEOOx4OIgag1s3lrCNaOgkrSljCl4JfEBjqkAdBor6CAy%2Fmvw%2FBqDJCFzd%2FJXUZ8JzeO%2FyxPscu95Yn8XdHinlzeUpFYE9UuzsCcX3fJgyVkLRBC9mW7waJU%2FhtXEG%2BqQwR%2FLRy4GFvWd15mS3J9TJdYckXqmRrEPR3yr2VQ4YLl8elXxRlIHDqJ59pDJHEsZ0UmeRlYGNLeCy0kl%2B%2F27VWAkuGlZCq3grIrvbBzcz9%2BDrHlpjsdgX4%2FA233Pn2l&X-Amz-Signature=067a3717811510dcb15fee1c7318aadc205fabcab210816be7999e8e708f019e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCBEOQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRDwXTHHgeoZ%2B%2Fo4Er6gyKWlUoxlDUCIO%2Fn%2FzG1SSKnQIhAP1UEhKmagwWpWjqgSPkfw6maTCK1pnNpEzPRAiZhFETKv8DCHIQABoMNjM3NDIzMTgzODA1Igxgx9EjKfasnPdbw%2Foq3AMLWeTLlyA9ST18t%2ByOLLcxyZLDXIPIqawEeA9oyRUC%2BIs%2B1sEyqK%2FRgOTZ8VK2Mu5E3CAmTCrh3AJ4qNXMJH%2FP5S5MOaPVyQLk5n%2FtSUDCCF03r0XEOHyFwiI8iCvmemzBvwW7OlC2mVSe%2FcJ%2FTJ9QJwGZGyb9CpqjB9QZSl%2BL3BBVcH3YOor52fGugFKd%2FbKAhqu6UBMTt%2B0IPVY5issYJd156A6AxWW5iRJa0idtMeLV106%2F3%2BgBXeEtZL0ZK0Ku66UQcEI4YMUzJ4CNrmJYHlePtD5TLK4qMjsF3mx%2F4jxxMdwYlPjxz6ESxpLO37YgbHvOqCm4O6Yw78GGrAk8qsF8fMESVw64hWFoxsaxEVScpEcKTF7qCj9T26iLUTTIdx3yiHzm4m7cEumZb2tvGqmMPZ6Cu%2B0arbAOUFqrkpycAS3%2FWBm0%2Fv6LL7GZXxfmf6QwdHbAqNyGONCoCC06sNnDKAxPswrC7uWcJw5UD9KwpMyAlK6z1sthuSjT3RdIXnWiOvPlLs7gvADc3pLvGwYu6TkMmnLcoe0BjZxBgE4ffogAjtkyfwm3v3OvznVF5YgCsTbk%2FiOCFd7D1pC9EnBcvl%2FAqNXo29AIj0DHnTWeSOYIwA7%2FiSXaOTCM3ZfEBjqkAeZsGBgDeRsQ9oSbBC1sv50x0RPnNdAI%2B7ug7u82YZCC62xnpw%2Fc5e7Fuf2S9%2FAuf1Cgj5xFN9RCV6IiCPvSV4b0hD0xQUZAnVCh616gldMyvkAAGdXa%2BbFYJKpZ%2F5ghip1KH%2FPAu1NmjFPdC9U61fuhi3GGRYbrPk5H5J4HvtYetBx%2BCFyH11Jmx4i%2F%2FCm857kvwNodCu3KTw9UdgLyorIE7zb%2B&X-Amz-Signature=643121e561fc6661869b5a233808f193ed089a474d371917f3048dcdb8429641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=7d7e01fc784b5b6a8ecad34630c4c793d9f5834b8ee3fff6c305f60e8b2c4739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=0277fc2ebb12b8b6ffba08e68c2058a772ea8d5e72e433fad566f20c4c0dc36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=77f23574324c3b8ff693134255a5923b170d45cc0bb252d59fff05db7cadf1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=d138c820bd2b78bbeb7993a72b3d43837f218c4c15b30c51143e107ad80edd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=42ddce94ef267a3643cd6ed123a1b22d002de0fd5873ef588cb99c8cd2ae2f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=bfc4467f536a1885299d5a37d6706bb69d58cffa4e66f606d7c013c3b2a7c3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=0afef7dbe2fc87a6a1d66f8090432c2db77f0c417ffba600ce3390ed66f340de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
