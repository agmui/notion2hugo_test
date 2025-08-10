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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=4752df812b60cba121d87301de198578d49d7615f8792799d1ce18c0c1c447ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=7836f6d2b6a802e830fa81cfa004046b28b19f399d3cf8ca0c350ae44a3d7a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=349d6297c86e685a6aa50b7ab961f92bec0def1adf012e7d816b14cfbe1bc2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=4afc0461f67f464b354daf20ae38e4777fbc2802ee3978d178b8d5516235bd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=60b801fe1cb83662538397c6200fe5a76b9ffdf60711c05610523d5decf4c2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=3d59a150707f5cb13184300fd8bbcbbfd49d7beedf5eed575c690e88364333ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=16a39bcd1382b68967b67799b2b624fff7402aede9cdffac49ea4c685333ebb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=5e239bbe2110a419ed46d904d8d2307e4cbccb8a8ab3d2968804d8ca1fda11ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=ec0168a805485350984895ac9a1696338741fe59597eaebc7525e40b4937d959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLT5F33O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2FFmQ9E7ImZbNp%2BPXLpgVf7BiwsBMWpEiqH4zDsc3ywIhALaVHpjYryyOoQzCsB6WO%2FFRdzQdBzXmzunTeNvM58DNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9HthDrXoF96LhaPsq3APmlcBcD9HD8PcJ%2Fp9eVAXhNMzbClbNXHOe5bE%2FkjH8G11XNLOsrFPEtzZUsR57fL1ty2XjUOc1DWbofAmWDlWEI9NKjwDEi87J0NxpF%2FEdhSVWV3zlv5g2XPYq29eGs65Xboefq1qql8DqfGtmb6OJNx8iSx0eEUZnrAzV5AE8w5CK9I7i%2Fm5cy9NojMMK9PavsjHexdy2ZT19lOE6E2XfBNEF5Pvf5Xlp5HDv7%2F1gZz8RBGosKluovnVKWtHlJAU9w7sIQBx%2B%2BgHVh3%2FtPPg%2FvrLxoV9EPXURdzgFDwLEfi2mB2WQZKfTtRRUJ9lPUCWwhH2VrW1zpyj0MnteasAlwpg51cnledTzTbjClj75ZegD9zbvR84%2FEq%2F0rOLLbf%2Fku%2Fkh9Oxw4lOo4Vi%2Fs0K%2FdQoFn5yi3kepA0%2F4sCsgTjp%2FgSdaabz%2BrdwlNP9foopGXRz1ChW64eCgShAtjuoCV2yj05CD0rwF%2BHVHWePnD%2FXSY%2BkeDEy0Woe1KLtuLOZfniPn8HSoyHI2%2B7qpj7JNzaeqqzwg%2Fl4Hs4xTT8LwSVgxldgTBt4OG%2BLAU3rN6L%2F9lGDxLB%2Fv3aWi1Q7MnquSoxirw21PgbOnBYV2sKrTUJzjrGgpahnUANvBATD%2FuuPEBjqkARuGa5b3FwOwFBMEDwCPh15JC3kdZYytH6gBAALgZOJwV9CKDAbthrIL0K94HzeaA%2BTCCLSlWf3tII8fPQP2DXss%2ByC1hlhvEMWEYoYNtnIhASvHJp1SXl1XkQWyiG1yYZsuQ68%2BTial1HJdsWrPThFCBTvEP%2FihwdgmsOZ8VWhM6an9NCcr5wP%2B4FbZHG4CuM%2Fv55mW7fkaqQYarkXpk6KgJFYq&X-Amz-Signature=5dc21ff736ae2d2c33d93275a8cab2ecb49107eec030df6fe32ddc942db142f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XX7WPK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpCbPk6NU0V86svvAGv6t%2FKbcUvnmn4CHKRVsufb5SAiEA3n2mf2B96j4MzzP%2FCjQdXFfZgpjgiD3dxZiUn4PYdi0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FjQ%2Boo1dfWCH9tNSrcA29AgNGoIuahv6L0cN2LM5oLzCY0DSSoBerW2Ipd3px8ymQtLwYxip6rLu%2FEnyQ6YBXW%2F07qZSlK4px8GedGcfvSet7aekFRdxeYwwHDk%2FyO2bGv4c22jd4zgkDTfwFLs3wx8XqTlJnnDqZOB3ed8KYU%2BoIsb%2B3Gh77DTla4nm85i8A0MAzHbtc1JTXT06%2B4VVESSNawWr7Von5bt%2FVUNmXuwHMkd3OIi89uJ3hepq760%2FwpxfUi7LQ7%2BFtcxOoJrPCMOQhzIu0k7xkihte2TQi9M%2F6WnG6VAR%2F%2BZ6hB2uP0cJRoLrzYCPnP2u11o2ARHtWM2UyqmwWmOkmXogypF8c3Flw0MnboeXV0IFo1Y6jqYw7QYCrupQRJLCun7HaQbn1LFeA%2FurjSNvxujM98FxOQRgSyMf86gpJfdhI4CVTaY794DZCF2uiZQ4ndC32WPhpt1go5V86Z4WIxIAzqzK1zTh%2FC2snk9jOU0wq77bjpxmROEAGjKi3%2FO4yLKLU9%2FeRtd0piLYw88%2FDccYZIJiy%2BayA0TYul%2BN2Mr7%2BnapMffu1ZCB9IWG4PKydPpsZZxvq%2FjA3djIo2TOhc9UfRPPgongpNJW5FrRxUaIro0ewBN2nLDoy6inqfX4fwMMa648QGOqUBNQG3tvy7wDel%2FtS%2Fvu0y67hL3WnaFA3DsryBHNNwUQ%2F7Cbl60BY0RX7feQ%2FcxS9KqH5v0HDGMVvBdUy9smZMd%2Fuz3F5X7QDmcXNKd9N%2FGi6Yi5hDn4mW03yT7EqziRuFf4dDe%2F38eQWBNzG5cojrt6bykdQlsKfG79qg8sP0II0FbUMb6f%2FA6XTAAtSNMzxfiRiNfrcW4ObRKwR%2FfLpvaJhdaEzl&X-Amz-Signature=dacadd392f4da318e0900cd2c43e6cd310d8e1d2e7397820c51a29164d2f915e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=9782531a0a286dae16c9ab0802effcf22db1bd7d55013853e97c31afd77a8caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=e066c9b10f389e8173ddcaa50ff26e8e7462bfdf33695f4671471e6ca735689f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=2d86cea9b75e5b1ba714812c52185bf4976d4c2c4b2f06b0bd4fbfc720cdcc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=ae1f91e88a94d0edb7062b0b9e75791dcf8c39a007570bb0a79ee7ad43beb527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=e103b9cc13287ac59bdaea2e1e2faac0332bc180caa290737d7c3a065c6c4c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=7c7d15c4faae5aa985b7131be4d625a6f3bc85b9ba8859c8f00c81a494ec9942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=fcb5cc169afc28d3776f750312786c9dfb188df12ab7fb2470776c50f1f1a606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=21ab9d6da5d62279ab19f25dacad4e1fda6739c81c8cd27db716dea5cf2c5a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DV237X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSVITP021f2e7XhiKf560vL%2BoMB1wuo9KCowobYwZtnAiEA%2Fb%2FhUP4haHda02bTs8WIwlX7Q7B8Pute9Jw8KG4D%2FiMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8S%2FINK1O%2Fk4YC07ircA%2Fui5bimExpBcHLPLtE%2BDnfD1kykpvn7bBuNJBtxNqIQEyHE9wQ9eua3CB4JX75bmlmK7w0BvfhhjR8ddRb5O2c9cnXhuPjnqzmt2CnZnexT3zlXwnXBjVK4EUvMyQbwJiz5GFf4TLm8A6rSuz35LD%2FzfUE1cxJG4KW7u97QFKtQZOXLkQxhgg23LEaf%2F1MI%2BPOms2HKjtiR5BWkbajvOFb5RVSQmKZIdGYvTwbTiQ3JyP6airVMjVeCMV%2F8YBlJhAHojegLEHDsXqHv%2Bg6MCuA07CE4XajgSC3NFj4WALo8Hcwz53v2xITtTWJ4DMMhaBDLG1iX7wuM7k0%2FvuGgpkPII4lo%2FI0WJL2H5t1AUK3KlVx9DmK9MqBgbePQ1B0z1ZmBKiCuwSyQCB%2BpOoJpMlTqeqvewJWpVAYOBTYuA0MCpVuYu6mic5PLIjcUqh2AUZ95uMbQnEoCWSo3sz%2FaTi%2BV7NIo46Qc8ZQE8Ae2ZOdnGzbhIf%2B9lEEZakfL5FgA4xonxhm7MrIP3wRuAoxvr21oK6QG4tFGuJwS1GuAXrCu%2B6XFPEh1w%2FV%2B0rx5Md8cDAR9LN0gjNem%2BHUJzSEFYLRcdpVieSRxJ8nCC4ijdm7xKWPQCHqGx1zDQNqyMLy648QGOqUBfHaIwRiowQAQhwmEfF2DeZzIR5Sn9l%2FhNiE3PmdOaa0nQYC5itjn%2Bn%2B%2FrBvfYBQJDODcHy20AeqdpVOgestiD0twaCuIVIWTGXeSyELoaxC20TT6%2B3A3fHJMU2U4uK%2BBlW6pLur24eOP7YOV9kGDGj6QtEykVFK0SVab0CcqAZOkKCmUvVXcWhlnrDKxxMzeECSTyOfqthhosZN2N70L%2FXK7FEP2&X-Amz-Signature=d4d72014f8857dee8b337536f2ba4408e4e9b50951b578c9c9451cff96b735af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
