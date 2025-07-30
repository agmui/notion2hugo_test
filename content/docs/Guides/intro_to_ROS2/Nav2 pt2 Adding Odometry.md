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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=62e823fe682d3fa898e67548f1a912350db15ac4395808f78def32a576540e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=25127388b8d28d9caffcfdd4cf554a9c934a596a329a0b23aa80361a89820d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=076592f0f1c725e11dde5a3c4a06efd2e00642734068899ba1162aa84bda5e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=6660d77d6098814a7c16c135ac2522f2fc2758d52c0eb03be828a8347f88104b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=921bb7cfe31582116f1c3dea52cb9f8fb20197206f9123f15dfee06c46cd91f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=0ad7d948a4ec09ce2674a993f70285bce3cc6518566dd98918763c2789d7d8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=9068f2825853807a4dfa0ddc2795ffaf80487a47c4b32b93c282749b3aec2ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=9570650cd60b52f6d3a8cae4f1de8d5e91fa640345399076dbb59ab091402450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=1658be1aba49e6060029602a4bfa3f110f3873f8b04601d24d7b7f8454d79953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM3OS6W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlFek7F7QokQ%2FGj0ln2qsu5sfyQCtrDJpcF8OONteEVAiArbX0T1gB4%2BumgcoWj63de00929Hpi0LIoduABJFbK1SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FkdQwrq79VoUvmH3KtwDLshdwJwT9kp5HPKgaVpmZC7ukeNdab1Jlk7IGVSEAb0FdU26ve5ndwYzhTBsjeK%2Bi7eJapD6R%2F8aHMkZhvWnb259RbdxWO%2BpTgaIdBn5ZLveZ9KfJfRy%2BCJ78PQ5X7XNvkwhzZBTITzStgR%2FOEUSqhB%2BZQDJ%2FpsZResADOqg1hbufzTFvAENowXyDYVNvf6xpmjgatdsPrThrD1R17hl9yQ8mhH2vHDPWyAAhBtpznA87Uu6bxaUwAliuU5L4kZVvhU3tHDzkaioVNV4D0HvR%2FCyS5Q7nDrRr1Usmb7Xetd1o%2BuWviaoTwRSYC1cdCgUkiyq%2FzhwBQUMUgt7kgD4210bfouz4H18rQV%2BerY%2FCravxRBegL1WUG97cVGS0A6qn9y9xbakJ2%2BB8ehtjTInfRmcQs9MTQVT2bGk%2Br78hQ11Pdspy%2B9vK81UaT4d0GldkNl94IaCITd6H%2F%2Fho3%2B%2Fv3VrChSXjLDVjxppNLKBH7Ayr2F69PSxUX6LaNBY4wDaakhFwoONe0WSBI%2BJ6ZiKICOQkcOYqbycinVz%2FZ9gNNQX1FkEdS3D543t%2Bv78KIedCy5w3Sc%2B6WTtdO0mYqBDE6HTo4Do93sfDXQ0BLq3NSgOQ1TiAV6O3wWLrtowgPKlxAY6pgGqEtsysyDR6t%2ByPUwm0tkfA%2BspAonO40QWag3g5uNiOXoe5vpjWwq8w6Ic3QtbOJMdgQbAwOKYFaQFs04S8O32bFORgx2T8vXpJMhXBPjT6RvgU9HiD62C5aK5hRqMt6yd0b1dcl6S%2BpBxPdwf3VVn17Mg%2FHGx%2BYD0AXbTacoTN0zuFNJGTo0Oio%2FqkYPAbtdfP3OhDE%2FTffktt4xdBA%2BQn4sYIrCW&X-Amz-Signature=0783a146145bc19626274de50b8addffda3a38711acec90c68cffe5093853b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTANEYLA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYjZUCn3hWk7ByvwL9Lr2QsR%2B%2BwcResn%2F%2FMrlvk5VQpAiAh%2FXohTt9pzAJ6nmHegb0mP8QWmEgp%2ByyO30sbcyKA3iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl6sSU1iduZHUXoqKtwDw2ehglNhsnYtqDxRXOPbU%2FL3QNZwS6Vr6OZMB%2FhRfYcNJubaOBMIsn3Ze%2F8dUxsIDvjoR1j6ra9YxJgjKn6Ww8eNdbijC2n5DMxgVCrIWjjBnT2SnDl%2FDtqmYndtm%2FD90KmLC%2B1k%2B9UV2a7gVtUeBO%2BbHtJVVirgmIJOgO2bhkJlQfMLX1%2FjxNjPEYBtOrNq9rOIRMtqU1fS4JtJrymBb3HIWchmIXfn3HCe%2FL9aVGvgPiOv3WHlt3g4jeyJWe2ijT2ODDXu5y9EgaRCSRy%2B12jIq8qS2RGfH0pE4z3CRIX%2BnUCM4owY37ICZ2MELjVj7HfDRtwUyG7kE4i4ed2Mm16aVMTlnXPoecZirYv5AOulAZLbcKcYYXZpTN3QzXNuxpJuX4NaCa19ECEg3fpKJhyNHHSn3oCfxbVPyFYCRIHqi6dieG7r7QhOCxT2h2uGYn7toCbnITPdtSafYAFfRbKPQDR3D%2BFsVa2XIin2lGtzhArvYprrNCPAqhi17wzGlBrdY4A7CYe7aGpTwko8RSV0FPeOaup40jR5w8TBWN10p7KU7d53Yosa%2FnfoFopf86mgYpDIKIZpsYo2JGr64hSOwIqhOCuPlEM2UUBfwFb9SngFod%2BxwVD2eEAw4vKlxAY6pgEuOqxUuqi1KypFsBLHmcdVHibBgamXEKrK6Q1s0yyFpjV8%2B4w3I%2BOBx9Tyz0OcYvXFGF7nqpDYEC0kHAxQ4YvTc9HGsxvQ9P%2FOmri4sxcTSU3GRw0JQVMwfapyzAwXt2oz%2Bf9gnMz5lhzLVKTsJvAZ8%2Ft%2Bz4kp3GZIvvbJ1zbguM%2FGbCiWDlg9bSDO%2Fo6s1fKX4wGhsmAJr7IZS3GRkvFaB21JqfOy&X-Amz-Signature=4fd614d87e83bb442d48bc6ffe332c1614b6dc93d877a1d20533aa2629c548d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=d5dee135ccd1ca180279d3eee9ce9e5b4f8c14a98c6c16c993981da31c3c3b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=b93ccfb9db4c8cc7d2ceb3468fe2c67e6f0f6982877790d97e35792c0b08dfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=8e31ff461d33a1984bfc49d4973a413629aef36fd603d2926b1e78298409abc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=6614287e2f8056c78eb6a839ec56b0b4d085a2ebe01e035dfda5ce25c8a404b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=89deb9bb7fa671f9304add40be7b640fe8c8e78ca66c8fd5f2ddccb80ce77b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=f4abd3499072b52cc9a4dc1b9443b6a4ec1c19630bbb1d9d8bb9ee4eb262badf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=f3eeee52a574a3ed78599917e78f7467634e8eb6f68f870f5aca66b2d708575a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCQNPUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSTWdE5wvD%2BcjRzwCRM2QOyFZBzc85XqRAQu9XXyptQwIgDyiaYYoSOzWk6G%2BSU3LDJjVSFYVGrpg7P%2BW8X2V277oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOJx2OK2GdBp6F6FircA1CxcF%2F89DuD4ybgxOXQsZO05F2S%2FPSebGnKeMxSdu6IpqucuNMmIBmcprAfdItwnTNBFMEDBF8Lkp6XaAKHcKhSptFj0bnv21scqBdPxyahLnAQNZizbHhbDyc0hMfmO6N3zZBeEszYp1Ku4P6JXDj%2BpzM3Z1ubgbe0pTUkVBSgUIAdEelIOgBnw2Z5WjCsPsEIajFgWmGWj7MrpYUaabyHHWL5cgF5d7VmZl9MJ7n63T4VqbLmk3%2BQ%2BQ9hojiQZxN3%2BE88WBJrHwQVC8wikeGCMDOTfVIIodxFDGnG2vMCoMfrKTPpqMJgEUBD9NasaAHF1Y1MkXdQtvFT%2FDvhTwgfzHaupWePiJw2KdXnyp97dnV0jrd5ECYud7w2LvAXaIcLliRDugaaTQ8IB7FJFIYiZ3GIHcyb11OpnnYnPTkMYd9jEh0yhVmIN2A7n6j3ReDYhpRa3S0WjRLSyGRmH9oVm8fV3wBhAYkz%2BqIp%2F30OqvTiTbhZ6SIHW5sDJfm7w%2FNvVw1yPjjj7ks4ZPAJkG7zXCRfgFbdvXORfbP%2F%2FrKBBqgC4GgGF%2FmHUiLcVCmda%2F1VbCSFdLYYNk%2BN9H9bTDkk%2FoTU8%2BQTRO7LYEAKPr%2Bmn%2BEAuQZy90vIidi1MM%2FxpcQGOqUBJrWUEMzlUVLzpJ24auPIe6kt6000Zjdf2eNxqV27xk%2FGMpCOxDZoMnyJ4PuFik%2FguE%2FH8f2QFiKzW4rV3hYncvb07GJlGrKmROTFZGwvcJ0Gc7wWBJoEhTs0etO5QKR8ChcuYPODY0Q4rgMxmich9QHBiuL%2BRx3kXQRWui3mI%2BL3Jdy242D%2BHu2B%2FqmvKtnV6ODZQnH2HwCqdFCOvVs5zDhEw9wk&X-Amz-Signature=b4f33c30a12978971167207498db25b37025431fea67dbf5798c2bface51f378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
