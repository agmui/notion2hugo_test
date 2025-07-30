---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=db1389b9d0a658f5aac979c4aaeaed47c2958fa1e222d9c41c20ab2ad12297ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=2f38d345ba36dff0782dba70f97b925f0ed9f09d4e066d2730b45c62a3fcf75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=843889a497f53aada05982552ef19245a8a55f71f010525f778360adc2f85ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=09c893bdc7cc04057ea5ca1711c6bdc7f5c0e0105b9b188e67792e048c245004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=24607f8beb3c18e0befadf3f37bc6aa503bc4578a7dc6223383cc7dea272029f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=422cd6f85c6c6d3a4dce3b7392e6a1e2217dfd93f2cca23ef784cae8f9662591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=795dfcd8dc40ea68f8206af5acf5fc0545d0587e935cd1ea82b305d785531d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=f65361e938c315968b0901fe7afebc5de07ae4e100f1918baca3263b8d9d0cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=28abb57b64f12c358e961d3c7721c0af63f97dcfd5803efaf4989437a7daddc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZYSE7E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAKAsZGgpRpeeYkX2T51frp1HZ2Jg%2BKHNnMem4l4ghDAiBco9Nq4j9PTkMZlfhNgWoiSkEkhSF0hyJOpKFuDxxlciqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo03Z4z56l4yd3SAwKtwD9JigVS%2Bq0mgVthOxEyD8pkBsyz38G3pDAKOg722tSrYZCQzOUsPrT%2F7u%2Fvyq%2FG9j8edgt0LlxGvtz8AYGgmDwfEeeWeWJCmPbG%2BsWA1Hx1A3miGNaAQ7vI%2FUBRkEiwu1sZbK5gAKVmj48oBTkZWhYhXVemCovHb%2B78yk3TQBRUpmnX7NTYcvk98LNx4iqVA40uoYR60jDxMivQgkRh5PaDuW5Dax3QJOaFVlnk2fR5Pl5fcDO7LhN3F%2BDB%2FcODDmaoJQ%2BpQJjM5lAAt1TURbuXU7JEo8jQiok3uSAKKiqvsARsY0zczSBhH5dZiRqQgAgk4%2BwLM7jLbf4wZWcupjGeGtDe7Y9qK%2BndiTcHUJ4Jo%2FwbOi7Y%2Ffj8LlS%2BcQv2a%2BCwBPLq33iAALfSSIEuPHRmMBMLLyoiIlGFJYl250LjBrx6jIi54bZ8NFHCzoFXuaqODIJUgdFJJTfYmGaB5wRLfvJSSuKogs7l7fznf9%2B9ExP%2BY1yzbP6umcZ9AT63MxBci73jHeD9Wqq%2FCxkgYbmUA%2FZQxr7fHIRpiq3q%2FXrWXdx7g2R%2BwiUg5Rgdg9DuiJsppHXiUBxrJvBDUN%2FBEWciFehQcwrWsohWaHdddlovJhUa57AGfEEU%2B1%2Ft0w%2F%2FGlxAY6pgHiTuRxwOERsWOPxavVZhRpA0gd36cqGNAcww9yfCQYTIENBg5dqn2YpqV8S6QpLEeX%2BbUqnYF1gluz%2BOn2Yx5mlxDlT9EzEVOgAN739ywEUE56W1JtzPNbp25G38Pb6dTcDoqH5CNr13lsgmneRUNHY6EFSVHVTDKgbecXMc6C6%2BL%2FWYkmqnisPcndJKmqii%2F%2BFLAt9ijDrVC%2FKxMciDEsvu0%2BaoQT&X-Amz-Signature=7df2c8051b49ab2c180129f7e4ad8212cc9442cf5bc02af9d90707032866ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VFVMUG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLg43xyBNlQUXEZ1GCPdYi%2BMK570oXdFvquDgDhuaBqgIgYyc9lsCXdMtaW459qYMEv6Jf1xQy9v%2FnppOel%2Fk9jUcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjry56ZEl8gxg9OPircA%2FJtl%2FmpXWob7gM7mkGd2v1yppS5TL7pwMMpEw5iIKYJxgPWbCrr1E4grDtC%2Bum2F9Ih4%2BrqkscNp0SZaSkJwQE9vKBF1GCMVrGGlM4klPPmL7TW2HKdUSZ781ZacR2PMLrC8vK2kC%2FrlvF4T628upbEtUZQzXZ3xVX00cXKM7Iq8WqtrZ921bP%2FulFNd%2F0hylGAtOKyEkIM%2BeWNDF1i%2BJHGj%2BCWnoTbHIeRVioR0IX5OkD00%2BHWLfSHsDRWKTC2sljA6c045Xs%2Bi5E1GG2Gq5fZtrXKIY%2B%2B9Cl8ZUWJGyZk3enEwsHNGgK6PRZnd2SrLLLWRXeXMhoHWCHuF4GuTPIMa3fC1hVTVhgF%2BVXtw67s6J%2FR9meVuvOIr3maMMC9Lra2npsYtT0tN8c5D63j%2B0ol9KtVleBhfNgRvJGFbWtR%2FOd7DSFk4RNznd9jTI6etbYgIMLfTftE0xKyTEj9ASy8z4EyYrXYOnzMrGvtYkLY7x59BnPXW19Xf8w0DM8ejf6hB7JY1jOyaH4qrt8PfBP721lggyREwf4QUvV%2Facv4QaDLAxQAX8JQbnccD%2BTMjEXjWYhH7hzhq1Y%2FVnGFiVzyTJVZPDF8rj3hHunBx80uLM9IUO0c2QS7nER0MO%2FypcQGOqUBa7upEhlsMZdJxI%2Bm7WzXsISAtKqzvWV80oyrRyOSqcINoydrtNsvF9Q5sG4RSza9JCDBpzMz6Vre4mUrg52nXpRuFsD8WOz4m62t2kNH%2FrDLUjzid9LJXHNGFRmrUR3qcVGXgdxzvmU6dEF7CabOTGNE%2BjsdxpFQtnw0WdCjNX6mtJfjMEG%2FTKw7ZSur2l5fXFGz40x46giVNnoRzUdBx9Ym0W0I&X-Amz-Signature=709d573c8d183a65c6fcc359ef6e7d80a29b41fd082fa4a3c201fc70859662a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=8c78769fd74b9d6dac7c83c94098c1c8d4d559d3228526516a35727f334055b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=4da52d3b56c462f99c39ac054ac5f87a8cc1c86760d70eaa9f029c72a724ff6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=dba7d8916aa4c992c95783105998f5b5ae4f9b43f1a15b4f25a62970fb413356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=14ae816ebb361e29305ae7808f25f7b4de4fc3b8b58cad031b6bcf451698bf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=8d6a25e5e4318492fd98a409f1e59bfe4ccc532dcdd488cf6a3ad202b8ab5e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=a7a020112c6f86ebb5ddda41cbb2a317dc1a03f4bb2524d240546ee74d13e577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=7e4353cacb980a76b316dbabdae1ec211e1cb71ba786bed2ffa6ddf8bba674b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGG2PKU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3z3rjiVoySD%2FkI%2BmAUPxhHU3XLIc6rsIRlaDL8%2BmbQIgZ0jJuE0spzpHe%2Byh3wtN3xY2eeGOvFp4JXJMER6LLRQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZULcASq%2FETcHgyuircAyb69MBf9Q1WOQxvPxewNIasugjXtuxd18CTNdAQG9E7HhWdsttzPtU8N3z4htC6OO7JbK2ZvInwIDeN%2FFQmYfUce738yO6fEVVs4PaCyhJMPEcPufOVvzNqeWwSsXMd3jD14%2FBFjQwH3YAvGX1JKH7wButYVB6tIxm7JAqqIDzDDGcsm9yLdfMWRGJIpOeMBiT%2FVeTWF%2FFIBGzy1t7QSF6wzcn3jN10VYajNjKAYBYLhtCLtaAy0atT%2FRpvFZNhxG0Wmp%2BNATiu%2BekfPEP%2Fgo6n1JPNC8d36vOCU27cZars6Gy0HYmF%2F1m%2FkBBglj03IiyVW1CbE%2F48alFpsdYN9IajwH77L7ZTeTjUu5VaLUFx6VxciPLUIWb3L%2BDl8awxVjrEGPMeWe2TUaf1QOjW%2BIC%2BUMBwYuZYSUAKOyzh6m9W5R%2Fb%2BYC5bPcspg%2FrfnujpZswc4LhBTKLxTxDd21D48ZXp4eUUtFpUfZStgsUbwf8EcPQXkxHl7%2Bt868QZjmGd0GeYQcsIw9B%2FWtfrqmViZ%2BJqVTEgZ6Df1gCodHDWnlTg%2F4gtk2SXfC%2B4Y31jbTL0YnQLqeS%2FLVx0%2B4VUWfkWqMI4YcAvRI%2FjhUucFmXJRRyFrfuxU1GyagimcsFMICbpsQGOqUBehh0UA3TKLPo6YKO8Ptcgy9s515RQCgQUSjS061SXrWKpLc1%2F8O2c7bQpZupycBMmFBpMr%2Fo342dfmZ3YSPiuGrgYroY0ABxYCaJYx72RtsoW5GbBdKmKNQ83GEi6L509jap3um9kIfqupxoDEiiSFFy4LBW280JKxFfHDL4MJqzyuFfQlQNMU02XdXssAIH94CEl9XjMHLLHQD5RhmPWaoJmg%2FQ&X-Amz-Signature=663b01e07e985c80569f56563af96133630605d65b3112b4542796758371e4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
