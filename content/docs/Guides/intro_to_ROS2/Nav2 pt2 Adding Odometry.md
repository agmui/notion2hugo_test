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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=1854a6b64e91d466fd46ed14f869dcb0bd8d2543411959e70ba3c68554564be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=0d06c3918d9b76d2d532ec9374c7f955a24c28ab803a33a119e1fbc5bed919af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=c17dcb3445676c4bbd71a79ecff3dc983d910e78dafa537443e0a16b9625d112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=aca5b052c850a5abfe05087f24b0a03b57d6af7c5e5847f7d9aa1c5efc42f9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=3d540b2133b4e87827bb77161d8f7419008611359bcd62d957d1eae42186b9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=9d8ccd8774847e7d1ed44072fd22d866c4d7e0a596cf07670a80a7ff284d7180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=c8a68641e223a2263e9eb67a1300aefb0cac01d55e13421bb333ce80a9c91625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=378a06ecbd6e57adae50792b0135179b96384b6320715b1a1a84ba46feb0873f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=21647f48b20fb54687656ea474ce91494a30e619cb2484a3b7a7d0308b016248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGB5KPES%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFXaWa9sDmpHFn%2BWFVe50tHZzxWhPGc93XZ9ulLoPwhiAiEAv3c0xB%2FI6TgGG5OnVc8Vpt2Z1Eas3gkTHjff4Wnx3nsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3Pw7wLx01eZLkJ7CrcAwMv5DSug%2Bqg248gJl7cVgdxDubKDbdg4azLlJeUPjglhTLw3HtnsYYFZzTZD9TTcf7VVf1MEsAhARaWyVMjviWqGwoeuUp99urPbw8xnD3PI%2BXEbXBJBoQ1gWesMc0uosuxO5WrKL3XO0j1j59%2FUFbQEq5GkcHlUkXHjxu%2BRI2Vm4l4vVmcmXU9LnwF%2Fk9tSD5XPBmL8EFOOe1K9RXqt2hfYNANCc8tvt%2BkXsUah11yEZYB7r7mQBnIGGGXxagNBozTq2HwGj9p6kgN2etw5bdp4u%2F1Q0QxRQwSZnVJJelbUTTbRFYsC8a8dpKH8NbxAuQrqcEkFoQqh3ju%2FKgTPREuRx0NLf0xIlCaZw%2FBd02IFnLiGikijCtXMfe2yUcKGPNJrYMEkkOaTc8%2F2L9DFpj9nXGRSVC4pw5n2sENMyR%2FltBuetOzDwDlz9JpHMXqKiP0ES5pfDtNFFOOombQ7SQk34MNy9mykR%2FWs4Po56aAdB1LQVUSm%2FpD66WVRozhe6oOikXwqslNyDejXijyJ3j345ooA0MvJfS2kk2mkjpZsHhVbTc71eor4rZu7fUziSWIYA%2BI94kAlGzpRDPzR2ou2VbYH8W4VXJINRbBJI8bkfVVdN7FglscK8NtMPvAk8QGOqUBGuobp9vsIPdGiTfnqiQG3UraAIxKrtPR9jmb9ngcVy1qTT0xpVZ%2FzWd%2BZ8nlv%2FmvOdiiykj6UhVutHNJxS6UHTAIplFxmVI1T0IgpPJlnl3wSLJxEYP6Q%2BSn79861lcsEbZfOWvoPeKRx%2BMnhdQbLq9etJLvylNqW3tBmhIliblBsl%2FkojHEqu81jwXETqRAiKWdgJtz005yJAr3bBtYCb%2F5PJ0q&X-Amz-Signature=ce7dd67826d51a886641f9298205079f867fe17fd7b43fc4275f64bee56a7f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLNG435%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAxVRQVqRL0q9QvRbFjUQ59ocK5DRLVqqilrKh%2FboNh4AiEA4MibiUiehyqFDXI5gLDTdqcUatDozZOLtoZi44QQXuAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO3oB40YIWSd3rbcuCrcAz1yZRYyBoj2CO1IXOmRCV5RknG0iaTO7Fc0PUH6dWIal%2FkSl72%2BVkqNnn42F6WlzJxZXGkY988Jbm2So0LIYpRptOrFxVjYbqaeLQoKvzJMa5%2Bnza8j53NmAbRtn8jIXp2tXL7lkRuEoqHcKGjzDTZpdQ8JZyq9w9I73YHJku7O%2FKNeYS1rqdlP5iErZ7wy0z79KIxKOh8SZazS0F2e7%2BEjKOx5ujrywYYbO6tIkuQif4rbfE29pwWydcA1VfXfev5udIZqVLMXdQXc9Plz7RqYoARC4qTtRUiJ%2BlE3SWgFEVonisvdGEufJtp3BkHkzo5SiluabElRvTzQxpTzg5OZjVAP7irdp%2FoN3ii%2BDrO3VqOwVpdMClYFnGdGdLGELlg4mPUU4yoRM3e17swhKeN%2BprFu8T2PmD4JErsVn8NOhifF%2BD0aZaiKTKTkm%2B0BTFp05wJHp8gVDSuOjsHHLSCsjQQqml3PqXOJpiBHzHbrg8dX1kL4%2FY36DhiyAEXQqgkpUY8568QW%2BOP186SkIljvKoeQ1cvqswebusmNXDHkxDClpG0dpGf0VpJyoe%2BWD9f9EDOdLeaGHv6%2B8Mi8fPjVSOawv%2Bwxl9NzEWYnCY3N1y0OlGqFuqvUPTKWMM%2FBk8QGOqUBAtDkuG2hJOvihfj5rGzVuacUkdoJDFdI7VSBoRgXwwVMk43swek%2B%2BXWF3JpYPrNM9OXoDmmQG1CKVIqrHmIZzhaigF43dmfh%2BBa4AxKxR1hAGv9cMrAL3U85zxkKX1RYYo3%2Bk1sA47OodIIyE6XHa%2B7GigggK4zSw8Vgveiu9WBHR1BK0T9QLB5yDJnsYghdXtI2RjixbZ5Zi4fbVP1%2FbQMQno6w&X-Amz-Signature=3d4d75fa1e4258724e622a70f7d67034d69fbb0c5ee93b67dc9b6c29d9b79dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=6a02350d6141ae8f8c84a8a0349dfeab1f1fadca38dbfafae2ff4b56f7e890b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=e0d9c66cc4723fc10b881bcd8afe270aba59821f92384b1885b1ef8149a322b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=913c56655c820661b73239e384a405b6b088f1961d22640302ca2b916c7c736d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=53c8b9407dc7bdae5e99a5e9642f22d10406aaed061d997cddaff8a88c9c050b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=98e7c6b1e979dd88ff08dad8566f6c85b4331b5d47cb77675241a0696a602639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=7ab62b486b2525f19ff9b875504191ee2391ef500bd4f608223b5f0248ebb829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257XAOKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAvIQSsjPxLDTRiZAE3KXT02O0hNwluWmnEdixw5oyJqAiAgiLtwXFaxOYV8E2i0pdkl7%2FUS6jEuSII3WCgWmtNd6Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFqDCAPm8oj62ayUQKtwDBguFhq%2BSFDXB8iFKopzDZqnsg%2FyPrTP2foMA31yB2yffVOJZNftkhTvz9fVLxJcMnhQvSKTB1UiswAxX6r6j0EZ1olaY4PaHlbKDJmj16%2FOW4wb1XxXnuXx86U0P08gD45Z%2BpSGaYpplZe19q%2BbPGFIz1zoRZtBn5Csm7udAWrRNan9EIW4QxxMk4COjyn1L%2Bi4C1%2Fx%2FcTYDrwz61ssDOyKCAnUxZVUMkNhV7nYeTndC5gWsgu1bt2ZToope6aKlULYM1D96JwnEyZ6mSohiiGfo9MALHK2Mm9yMm0Cxm4rCLXe0d1oREGiYVQpG0Zq%2BPKhQSVlcidij0zmNBoemEuk4lzEvPYGSy%2BAKAdXnaEUdeDZMAiAolssV%2BP3%2BzYIL53RgubYBTm51qI0XKRAOfij0bOHZ8%2Bl6Toiu3ppJKhxuJOJkikS3Ls%2FiTu7U%2F5naFWEitBeDpvVz1xNC4AAqgvaIOqaq8RQfv9oVQI0LvwKtoWucoUvTD%2BzSazAACQFuhsKI5xEmwSTaOYcpbeV4fuZxK803DHu2hVJQU37pS07T0iwmfOQwfYUtQnVeAXT8SrAPrOC8pB8qBpWsIqa0jDZSHwZ7dQzl9W3db4uOi6cNOjMUvALmgIC%2FbxQw9sGTxAY6pgGY0aIMdpPwvlRorgRPlb5RNuPXr0incMd3j%2BVdV835Qt8IvP%2FwvxMTO9XUhOfnwBXtrOJb1Gb7H0oZ2XZc9xO6eJHAxIKoEdsDZZ%2BtjMs1nFxPWOxSuUjtcL8Si%2F9%2FXHc1OPG%2BZK4y6Dt%2Fc1f6RAHT14L%2BUVJRErp24pr3g7LuX%2Bb9quj3Hfp8pkhOi0%2Fu9OqfXbJ6hR4cBtHJs%2F8f6DHKZDR8rVN5&X-Amz-Signature=918b6e9f022895771453841aceb3308ab1f5e6a8d45a72b910f421dd77a91b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
