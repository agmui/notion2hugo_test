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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=0bcd75c441f5b23fbd72df30f66ad2bc212cb655aa98e8257e78fd4c84ce6d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=64b0cf8e6e76d4c3aaa911581065bdd51010119a313cb7e62cda8dc12420b831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=cb0228a2e829ff431c8f40bfdbe1f14bc0db3d6e61c6ee1990fe0e55ef14470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=2f60567863fef6aa4aedd3f2747edb90a86084a80c98d1b6ff080d9dcdc76121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=dc0112c5174b5f491a5a8677c5a04bfff9daa4625045ea6d9925c4148d1795fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=b30aa693f5c45f05ebd7285a8edfe4770c728b04bea80d0de32d2696d3c2a6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=2bb0da79af65413b12db9f0e82829750976530b36be6a3118e0cbe4abc0b1165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=9e6c90c386473668b0d386ac5141da227258b2b464ed52cee0d47a45fed254be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=881aaf1ceec5609f95be9b57df8a1dd54b3ee80e558ef68e89cc134cdd40ce04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDS24H3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmc6RHnCqtPHbdU%2Ftmzy6q4zyBjMjJn3uSXhij2ZY1agIgSKsVbN69T9HkjPOcas8MXnQ1%2B6tRlczSAkmDia%2FqyOkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE9liZ%2BOKV9h9V%2B9SrcA4Se8Py34tbWaD8tin1IxbwEJj%2F4sw4nIyveY4LqgpSni3MI0h2%2BWqBAeSjsWXSsxy2%2BPNdf%2FpJ042X%2BUZ7zzDc%2BxggR4XCj%2B10qYfgm7zYADOH6MZiUs2rtU0kkpQhKke%2FUdBpYbFsO0bwCJPBcfbmBzrcYA8AghMNj2pxeBJS5YXxpZZQ8TMKzyc2XpSkf3VNOvJwLBIOgiFjT%2F5EjybBYsPG7v5zJToBiebhdT6NJjPDzr3aUyEVMtjgE2J2w4UbnhhyuCkLEakqTjx4gY9HPi%2Bv3kC0mBI4Y%2FUoBu0CrESY%2B3EKxZKERrMOI2jS1HkYi0r04XHV1wO7hEtP8c%2FDnm%2FYBdctf4PhAuNG3p%2FVGFr8cuvbghzJXeaG4nXsj06uPsvYCEVCiVTPHaDDTNyA3HVUZRXC3BABdK1HeelxiKe8c4mgQjk%2FGuoPpa2wzl4wSbZEuC%2FfD4xt9iK3SAK72d8dDFiw1O%2FXskkVBoSaD0YbSTA1K9rti65DuV%2BFQ4ezael5eIcEXB%2FLavaFH3l8DzrukzSGckdn29FvrricW6p2kZFyGi%2BNx6dQ6KFob50kuccHjvgxSY2H82K8qTxQPz5LM8jVJ8v1PoLMX1nIbJZW2lgAiCR134J5rMJ%2BZrMQGOqUBBwx3fREhjJT4mjfLNi5URgYtbwISo2Yn0p1Zt1c6BD5%2B2j0%2FZ4S7AlmSHC91yOADP9nuFeYiQMjDC%2BOXlKPnX%2BdRz7qDS6YyiGqNXbHvRQvZyRsGd6n4fflCpjGdxbf6HysLEFbuFsoq0Q8S6Y43CCYWUc6h9hP1JQP2%2BE2IqbJt147LxvrVsrf62dRVy12XKgtXq7nhY1xE4iZLUwy90cyirbXy&X-Amz-Signature=70e08a51583445048a248cebb4bd675d798aee660764695770bc4cbee65a8fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPN77FZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBiwGaI9S%2BuNlJ%2F2WCR4lAyb9zKQqMY1l4JWDlo%2BP4GAiAj64l5CYpTwsFz678y22sQxjGpSF3CQgtjzPssd7PHCCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2BuIbhip4EN6Q1svKtwDhwe1uqU%2BWSKW6UvGnxE8qV9GFcOTU8DYhDhxhFBaJD7ewshGTLS76RfMLlCtRaM1kgx%2Bb9nK%2BcDOMKZwfRWHCMJC8MxlZiao8wH3DmAN0RVqWN4iPLrzi8GlN5X0%2FntYGWmfcS1Z5nebnrQvyQVxv4Zpexa4etyEP7PYuYNJUL7jstavj9M6pDfM3VGC%2BOXiSXuoSuBgx%2BTrtGHTgSO56PANFztm8zAEh%2FmAAe5%2FlG3VSAMc5oAs2r32Q5a45I%2FcGMpK9CSDSiuph1yyrXP1weV6iR2nTHlYMXpZI3VV2QdMct5OuDfRAEq9fy%2BP2lmgRt88RkPhi%2Be55TMhW3z6ttQKv8gkK4PLq5lqdQ2na04O%2BqiY5%2ByUZQRJLNW5NX1DfSKEh%2BOFVGXN%2BGIry5dkGXGs54M18%2BC0Ms8T63xodPQQliZq48ydFltgnI9AvmlKmOSmGI3VjyE61SH0cztyhdlcZG7rOXAdc4PQpwY%2FOUPAN%2FspErip2H20iQj%2FXiqI7uWfOKU%2BsYYLwMqg2tDF7EqFzXcnJbNDkQqU2Yx6Ynao11NL7HmtZIxl3uUTVCt8ogp31VaulI%2Feb1Jr95v5%2BiD8pch%2FlSV5OPiq0l0z9tOafiwclBMFu3%2BZFpUwlJqsxAY6pgFLkJELL5nrgRBUrVJbKhToJMUDbN%2B%2FcXvwI5t9OZGw6poxHo0WtxOOgBrjl%2FVQIrQNdENlKCzVQQtLoXu34T9YxYKpUUAhTIH32rPLBG7w79K6rePXUWLzOp84EUGaDg%2B71ZhT5dL406u28VBVIVCK5uVck7xgwod24YpDbKXJjide4lVFRh9sMHgeX5xQxd6in5zGYcyW%2FGna8AmVoVCNhncF0BfY&X-Amz-Signature=51133f130f5d0579815787bf706c617cca3889f25b11709c9d97c29a98157130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=11fb66f30b36c01963219cbbd2e0e74c7e81dac1d0118649488fd0009f802531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=992103cb9dd1f16039d87df4d30c5d52b7fa0ad555f3b1ef7552ab8d905ccc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=3d1eb02299ce1d816a5575bee754f4a8b4c0349bf2fc3639e00eecc2146536b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=fb54933666ec035e4bc5d627df9db4ed9c143a96073ab6973864347dedbd6c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=558006e41f0ab034182a3f27bff7c97f834c67f1fa2380787209b759de7c8c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=a1c662a18e2dabc6ae1f92368fe95098ffb9e5c25d4e92e464296fae2ed93626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=22d6345fd2772c82272f7c548c931f13981c2e02d5d287fa8625c7b2643f701d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BEAX7EX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwofbfLgYKZPKG2BafCBWpNQhgmCgP1cXW%2BF2KeJmmVAiAurc0kgE53GN%2B8ibEqqt892QeW%2FLkkAg9K5QQ4m6yz1SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcP6SreUlWhnz2zYKtwD0MNp5OpLE3RZHcnmlaKkoX7xTF%2FHvnGfx2ZqsM16EsldcPcLmznA3mQmSUpArf6WiOI55G%2BfHPuVUbKXuSkytClE8KlTJUPUDdXumwDz12zcAuf9LoSU%2FgzyRdtccNLjlnDQGVRrGHyNtreVQPv6rsZ7XMbJtNch3Q4pM47%2BWvbL3tBw45DH%2B2tScfXZFJBtUWBPUTwJBlI0oa0701bXJ17ACAzdY%2FgsAFq35MAvF2CiY366QfWr9iQDhMnv%2FISchECcSPAmlBEtr9%2F%2BnEMxZblV%2Fa59eKU6gLAnHUZMffVtIH1b9DgB0ByMxxLvBi4iOsS1taveTO%2F1kvZvLHbdN8LSfFDAzLInkYY5bc0FslqmrnKTyka3GtwJKXTdz%2Fi4BvC%2FvJZFoZx%2BDxUuCnONZrxrl1NHUhk8RnR%2BYAHDh4BTnqwvIvC35Kp%2FUqHG9keqXuFqjAOy00UE%2Bh9UCXTIxu9cVhPeTkWCp7F9cfgmy751qUDbblqdiOwRSvZnbQULJRe0rK4rXdKmPz5LqD%2BLrATow16KtNbQ1FyVDJ%2BpeX6tczuqTbzGsWkttF9vqKq9tbdPHR9tJAnfQ%2F8NKO8mxPeJEg8CxyDJ1EmCoEH0ccLolqrobUMRO1wprkgwlJqsxAY6pgFkmhzv4b4aUeTO7LoLg1K36FaWwh%2BIjchN1EAkpDIj0AoTgwbcrZvsVlvrhc%2BPc5I6VTUcnpQhUng%2BS6PeoT5Nv6h%2BF2mpSJJC4XpxDg6eyuMojiVRoWuzib16NKK1b%2BETzjHVSFQuK9mhkIKRJW8CSKmBO3%2BH0ku8yLQypIOl2M7HSIvLOPIzFZj%2FziGpE4u0dyQQHMZVzRfXctX%2FhVFHjKDwBdAB&X-Amz-Signature=6882405239eee4ba7ed14cbc5167c2dd5c61c383fceffaa1618f576747c6f2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
