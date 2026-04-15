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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=3b00b61d20e4f157e624093d94395260b5e2c281418e28375de15ccd6d41a707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=8a82669bc50a4a5c7039b2bd27c65052dc782bc0a34003ac6ad6ca947a37c5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=f3118fe5cbe50bf63f7ae9156b5bc1da7035ebfd34faa32ffd2380c78911d191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=bca6c08b05f44e3e5dcd9a792112c910f2715c7229e49e4a954556a632a422c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=f64897d50d3d29b8f6fdabbebb0527eff8389567144105266632bac5a0428612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=b0db44fd854a85e52face4bc53a274f10a69dc32cabd540a862a75d4311bfd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=55e87834f3d95493c5145daa2a4055dab992d0a677aadcc9be5584ca57e89f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=87cdf726fbd9e71b1f114e9e53e5f686051528cbf74861a86a7713888f444cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=0febd17883c09e585043947b9e2fda8338b761b191d08c2c05222bf86bd7e4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2TVSGM%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZpAi%2FffFp6hBAjKmEmzmg8gpPVuBGwMSDkkp96cBl0AiEA4nnWT3C752I0ZIL0SgiSqCtufe2hZkhDkjCL0hNMZrcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM71sXF2qWIvUyx%2FYSrcAw00aQtYx7rIaZ9Ax2r94rkMSlyDa%2B2dwVcbf%2BHC%2BxfwIdb%2B7FEiVSSJH8tX5kUGWEpLEZ3BsVqDbfNFGVfRW1%2FT5AA3BlEsBVMhzaX%2BD5H4Up3uF1L3N%2F4M9UI01%2FwPHjKgcMlI6TRP2GTokYRDGH8M3R8i8Hnp%2BKb9ijKFZWZEbVaar5hXB9lzIE98RbcEI%2FpLWcOPENEIZd82f41Y69B7GsdsOPVeXx0iQ%2BgRoGjh36iftu3n7fY6Gd7lboWmIbmmTjcL2ozVz1EEHUXYDuRzXc8V%2FxPiAqtwjC1n9ie5%2FD%2FwQL0IA1gvZZ7ZGsRvMgF9ES7g1i1b7yT1ecyOIeDLfKqbVJIvpJQ48rP1Sf7VLBj5%2BL%2B3S5njaaEpw0PACJIVG9khKlpjI4jQ7bVA%2BIGa3s5V8T1NSc5vBBd28mN%2F0fjqfKpFK4pHyat0ynNwKRdlNQKKAW1rWnTSAfWu1%2B9bekE9o6K0fO8BlmNtN6u8n7Zqiq7QIjnXLTUL61lBw1iqWyprmqTB%2BDCzfwQ1kSVDOLmfSkPVlWG2wfUxHyaq%2FJv3j140oD%2F%2BQfwJzPnd3ofnHra8iQO5ZXuzs2qfR96jQ5X%2FHL3QlVJN0xT7BYPIYt5IgLVSFGGjjnqUMMXk%2B84GOqUBbXvnEKb6CWMrOY8EXQess95zU9keNTjuGOqPL4CRc4PBJA3azRFmpr0ST5YJZR5BwgZta7CrHkfuqYSjICrG4izZqJfGE%2BsH0gI49bdy910LeYDVcrWgHRT%2F4hXRgg%2BGVugAJ%2BxdibmhsjOEDUMsQx1xV3gAi61l7Pbo7jKDGxLg4yNQPT0X39VxAb4q%2F5KNmzBmiRb4XTwFWLUjrFMLY1U51tCu&X-Amz-Signature=a0d7c3430c0d5e9c5e9446027aad287d4bb0fcbb18b64fd4de6d67fa3b51e80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFUZZHF%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFN99d0B20O1U6KJf%2Ba5sSEY%2Flx5xuKtEjE1qsdhvL4AiA26ZM9qz4RGOiU80Fl3LD6pDpuPci%2BMOaqMPktbtdw7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtt8%2FCMQPMt2UC2TvKtwDbnhz58JdC7QfbhbMLdjZxGUERFGb3QTy%2FNFWEwCB17vN1R0%2FzBe3kQM%2F6j%2BrZaiR8w7u0mn%2ByjyY%2FhJ0ZzsOVbmo%2BwazJ8XzOMLCbbcqSmAsYBEgUevymE4RLvGRaegjg3DQmcZx70mC%2Fmzf2Lrj0QM%2BJjx3YwS2F2XE3NK8jnRh3Z7Gmjl3gE8DZO%2Fo6UwPSTi5%2FguJi8jIo7MbfPxEpv%2Fdk5iRae5ZAReKoBlreMVI%2Bb49eSmX58%2F4qv0iTpPRcvHm5SPivC8TcB%2BzSWA5E9fVAI4sbHhiou4JrhehWBY%2BcyI7ZT8%2FU23AVCaod5%2FKKxSLHu4a7wt1MFkzJo3T5zLRe3Rf3ywXDqjwhKNIttXhmn09aiU%2FA3UUujk3knlFCbNmAt%2FkuVGc2ooTMplaYb8bXnSUGcXIE2eoYnlcWOjZ5UI5zURJjJpnLGyOHx%2FKPH%2FeWPZL7YPZbIdJYwBmekzG646lwQKVTB5kT2L68N3%2F8WjMLhaRvxb9CZC%2FKYOTC3%2FeS1UegG7Rk4kh57OzJRVLHjIWSjJGGnXBnighg5YwMzqcrZZdiDLK%2BEgh6%2FVOEEjzUd%2FPirgh0hL9ChU6B2QHE4xb3Xbdnl%2Fm1NP2%2BmDkOi%2B8ULh3xJLgYmIw2eT7zgY6pgFM5%2FX2jAf%2B5USK13AyhDcNLora0fnBEJTZHD7emBTUT1T69579KmsG0kHDneotAY5BoT%2ByP9expGDUQlyJN4vtbaKzjp5KRR4UaWt6AfAog%2BR8Ndr9JlgeKqG%2B09xR7rEpJCrTN%2B2LNHzT5x9zJwghovPhe7CQ%2B77Kb0miUu3L5EQsWtWYJ5bccfm%2BC2PZMR%2FJOCnSQFsF9GYuY%2BDIJzktfw%2BqcBQK&X-Amz-Signature=f6664ebacaaecff0eca3dec4480f7aadfa814e14d94337734bca12e86317c12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=548219e254f6175f813e1e06b2b64bccbee06b7295b82285d8b719fc739a1a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=0837924be3bea12191249b39e379f56ebb9898844c58358e29bb2ce6313dd73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=8a455e6914a73e8b97aac8e60dae685fe267681ec9ba85d6c0b2dcc23d7907c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=d037dd32de2a64a5c6cbca726adeef5593112a12567db34ba69abf0f519da545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=92c5bf367238422fe5ce25d1c8060601ea074be350b2bf01debb52835e0bb5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=e57e0e304e3bd5ade655d36e4976f85c107eebcc0841590e432d013190fcfc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=f421c584a6a54ae454fcc3c7faf9ad216ff95772c5e536b12eb979cd89bcf9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=106a930c4cfc9dddef89a1d73ef1ef462cc2ed36a935af6bebe7e47c47bc738b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYDKK2E%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUXBnoPJo%2FO2UYz9aE8Ehu63vshEpDKAYoH77MoUqqiAiAhisagUuITi0idAVMI1JLAsgM8aqM8dZWpDIi0D%2BpV7iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfWG542517EkgKDsMKtwDh7dg%2Bi7RcEOw2RRULSb0XEK9XUXtY5UP92SjscTwt3Mc1CfZVfyVDFcULAYWX8LdMpBMDjRv6YF5tV3taHtIWZAr5kYNM3e5NvTWV61p6cnSIOk0zatPypCg%2B8Te09lR0Ee6EH7wZxb1c6pJr86B94r0kLpvMrbKrVwD65LVoIFD9FgPyKR73xMTWNpa0iiSk8Mw1NR5FABX2cjUO%2BNLL5DO1CxHxVl2e57lOWzshbzAeSff1NgBTHp%2FO0h0ct4Fjirsl0g%2Bkzt6wCUKa07j7kQ0CuBxJ%2FT9%2BlYkFTL5lyavn%2F%2BsBGOqUcIIcvqyzths1tnsXQm9Pn8Oj%2BJJMZdyQ1L2qPapmEMeZIzX%2BXkN8wDArQCfMBA9YOybMJvlNlDxAZpYi5PS7c4ldGNGNhIDuc1Tqr%2FeATR4pHqSjOlJ9K%2FnA4YDa5syx%2BXTlWMTZUu01NcRZcCEyGeprDdjTIprFDrMxmJbLncjelpfMllGg6Rnxx4lxwxE7428YnLAfMAGTgrwMqqU0KHt1m3qEsGD7sdUTJb0%2B6XIhZGhgs2CvXKwLDFwh8MVX%2BCLwY%2F4MVyqHnpgdNbyrB8u%2BysfChfQMf%2FgIPJ0%2BlzZ6SOTaIU%2BDKNrrq7N9JKZ2q102MYwpeP7zgY6pgHAxyzdk%2BFKzfKlN0paUKgurvaWFdEZlSLx9uJE9YZpsCquecdGziM0gADfFNc%2BzkUDav2aew%2B2EBHJGe8f6a3XhnXXCI67YwY2P1bVYYU0X%2BU4Z0NiNBOwSMzbCPv0tFxa5XfjpkEPkAlPKSq%2FCVTnao0mkKIMOt7SHfYfRBbwu5eZoOaMLyBSQs4Yut9aOVLElHYNMuMkG0TX13dZCYktHiF2oD9O&X-Amz-Signature=50bdaf27d8ad27dea2122103546c6eef10d9d751efcde19c9c1977ab466c277a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
