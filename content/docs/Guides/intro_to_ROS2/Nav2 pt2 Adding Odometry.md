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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=561f975ac5bf491762af448278e22e34bc5f7766a648ec71cd8b0deabec32142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=e8fcd2b3bd779b1ab2e8234b4ab27a2209a472273b3aaf74dbe7407c040300a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=689d56d264f33edaa02dc70829817de670667df2ff6ff225898f8451595b18de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=4f24b35712e0e3af29ac631780086d646755e89a83993cdfa57e48ba212368ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=f95e203c036d1365d3c992ebcdb72f027c96ef7b63bce633581c62b93639df34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=8fc7fbfb14cf569b4446586f5db759a59f661a353bf1e1ee1734106fbbc7aa5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=dba29cfbaf282ea15a3cf8a23469d774d780cfc2fae660408fbf24b1c7cf0ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=6a0c9a1f4877a1b0a2cc29b0c7febf86b39482794de1c1449d55d09e59ef6463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=eff2acc00affcce048ce20ebe3982c2568e8b9a2c02f029e4a968a2ea65d98af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RN763A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBgqn5y%2FtjNvA%2F6CED%2FJQaI1T5isqiHYQjOdpw4Gd5ooAiAQSGLQ5AkWGPdlzc3BpCrOHfE%2B7SMBOKH00Wit9czOAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMu3ysmQoMqDRLyl3WKtwD9XoqMVn8GkAlvrS1B%2B7cb9%2Fb26wxOJH7WT8k9SMVXSk3llLUySD2Dl0kRUDhY23wMu%2F0oesT2xFnbOlEzTg9hc2HSUQnUwMSg1vqEgHBpzRA%2Fq5VoMHLYGpVjK%2BMxFes59L2BQEkUv9NmQ45rZHzOIZR1jyszFOEjeJ4%2F5PiQbx8ITtalwnyEFoZKfOeYk8T8efC4SqhsxTxXofmJD%2FlaMOEl48dPH2Q9p%2F4M4c54rrcBDlUWiWNJ926WYf35LUXEb7mHA%2BpxKN9S2pRFR5bfVXwexCDUDAO3MT%2FeML6WvkXc7HyCvNak6MQHUa3vQ4ssx0s%2B5TvHb5FdhjQvqpJAtiJCFUC3xMLFtSpQdVa7Pnz7jW2iBRCNdKypxt%2BRJ5c3VdpMm0NKh1%2B8O3Kjkoq%2BXuRco8%2B8ZLP0wOJHeE07tBW9ASL6xxcxPsdbsmOxYFa9qrNo6SlytjhCZijDrJ%2FRP7%2BUqRumAeYe%2BKtLw44Zvgbag3Aqi%2FSCD8by0DsuiTEzRUb%2FtVU4JkGB1uRAiIvDmAaTxHvG0M%2F6Y%2FUVJ8cRLf5rMWqWUuHJyPmV9eVlZKH%2F5ClVCfh52vMoKh5A6UfkZ43TGtaK25Z%2FU94ahs12Mi%2BfhAB%2B%2BOHC9KQ1mww9dr9xAY6pgE0fXmZUnjyhQtJRul3aHFZqq8ZgX8hEzz9H2AUw%2BmJA%2BZ0AW9piuRGHv9zIV40wzzpE85sSrtaERXJnOBCOMbopksSrr8aEiBkRfQ6YyjuUdNiVWFaXu0rizwHlSUA9ZAsBWmDRuBqjaBZTcnZzX8r%2F754uDngAvXRwS6jqsbD0Hox%2FewJ%2F8fuoALE%2BDFNrwyPpVX6OUV9y4M6GwYFIKiKZNm1RPjq&X-Amz-Signature=4b19999f29ca0d8fe44bbeff90b3c60e20ae1c418c5dd4ae62d9bacd3e799b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCQ3GPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDyVeJGFdSI%2FEeAKcaYDttOkVAVeyDFPUt%2FbQYJSv21%2FAiEA7v6NGmvgX2heghP2Wzm%2FcnWIqgIQ%2BMlNjxIbaXGdVp8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAKMYlkYQ0AT5khf7CrcA2bJ8eSfQ9nrVeGvPzDqaoI%2B1VAoVj4xqzDGxHSvYwbYVMJh73IwnkGhzj%2B9nJq8ExvRd9AeFtnkyE%2BAIPci6625zK8zPkPdKAj3n7l5lv2d2chBNH0dFdDlX0rMKk7v%2Fnp%2F8UYc6yLgDtvlO6VYOtOlLSapkl3zaNrLXxqeSg4l5jISLCqyZLicAVGD9e5j5I1w3y6U30%2B7k7d2Jtc6yOYeqZCy2F0TibCKJXPuUQ6E6c9CnhU%2B8MmAK0Szx6LWmN1nKJElMmkQSAYQDFUhmfMXw9LTy2r2KdNz1Exr%2Feb%2F2UUPEG8iMmzajee5dctl3%2BQ9UvPqwSr%2BQPBaXC6%2BvbKQogwF3ngBCpA0XYq2vjfSWYWewU0GZFOqWEMXqeAQcUIS%2FLVEeQ%2F3SL0LhWNec2oyY2VQ09nPNfqP2XMtIRHOQI13ZmJBOl7ehWKZ1bCfLKJvxAh3TjMzZMLKY7lAmbyDAi7FjKO7iygpr%2BY4JHe8kyd2A6%2BAyF03%2F4ucT0bkUPe0w1SPilMnG3mltESjY4zDSXY9EP7pqkleHIuI15YNVOiVr6rT%2FfaL5llcl23%2FSBhZe01ALNwIX1L%2FKQ2LkC1v433LE8GVrRv3UGRIjcjaSodKyGKTZFgrT9XcMILb%2FcQGOqUBxLpTE3ATfH5w1%2FJX81m4sbkxc1iuVBr96jz20Yibkq97YIEvY4m4wMaO0OqIjqLZHbwWt6iZLOYAR3pFa9pPy0wfwnoG5QiNlr4dkQCiGuWMjJIPzWhP3Pt9CkZ4rBycqID3MO8XnIRAK%2FflP8fNQobYFajhrZfFjuy8e7CSeK2P4VLC2gWMXTlMdxhq1LNdZGipPciXGYU4WkMKoF6xjQHcvHOd&X-Amz-Signature=ce7ce8f626e7f1b31e882cec7220b0a6f0c74ea23ab3edfb6566c4455c688183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=634e5c2807911eb3195ad260ee5a8ffdafb0111ffcbe855b40e379130db407ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=5a9e58d5249308abeb1b3244a77e7c55f67d63172df40673f51d21df449a787e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=9ec52eb7ab658bf50c8d9ae5cf124e2286a9266fc0eb2f3aa38c54d6966deee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=cce07f92a5288245c1501e88fc882313a1866b37b53527d9788ec002f16dc9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=235e890b012b698c4742e03ab2d3ccddec37c3bc3eba2a5831cc2840679cc854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=a0b830635f995d005d94a9cef76b8857c39a965ce1ca969d4cfd026b03df056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=2201490a2a46c96d44b90f15c4a0b75fefbf04561cbc3d365c9fb6ce4c77000a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=47a22f33e178c221faefa69c702568417fce5fe711b199cc684fb67aaa3cc086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUOLK4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHOsYG9DldNYiZp%2Bv8EKPJ5mA5RMt3%2FYQH0AhBpPCHImAiBpRaXhY%2FJ6QeeWjWc0FQ3EYNnwRRU4qLvk8vKIgAsGyCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWzJef%2BU2HdKiPMQ%2FKtwDHqibXH22bb%2BXcevyPEVVSuAHjr8Usvagez%2B2qWq3IjafLw1SNvq0WyB2stCXOQwZVwB0bOJhqKhVG8zHvut2GM6h9vj9nmnSCkPtB43MQqXV8U%2FGWoJ8S7OU81GMMdVeYKVH2jeurh6RcnCU9yVHJV8idUnMwucyihdIRfSOe3t875cedThO8RdxfL6B6nxhkGnulCGsKR32Ifvwn8G0x1D25ExFecESybhso6OcLexCVEE3jHKnkDR6omVWIUIeCnQFE1Z4zqAj9hrotd1QyrFdAQIT5TjPmUw9FPAM5XIEPMVi4uYiji5AyZntJg644SEvAId4lHLfitr9nAx6lYl8hBdaYs5Vj%2FycCJvLxRdFN7UkeiBEmp8Qt5ZkxYZZ%2FXYhxKuWvvR3FGo86Ixpob%2FbAQRJ%2FCJIIrkC45SBC4fOQpJVxAEslp162LYrg32fcPlDDj%2F7puMUjxAtL4MYP7kV6cT8%2Bz1EO5vOR8VSL0tLRM8pPg7bUfXdEmqNtKO8DbAx2NDpxDuyezZgTdtD5tSeZssMuxA85NWrMavDZe7QDVunzh8VzXB%2BUuYkIWcm2lg1tSkBm8JCoVBYITUf0SsxWC981Pt1XsPB93HOXMXfjHB%2BcQgaPXuW0jQwydr9xAY6pgHibjb54Schs4Z7JTjMwwz9VyNhAujaqpvwXCuadHznyvA66sbRy%2FnWEvrsseHDo3OHhBdIQX3EbEjKGzlQCp9tqfYkw9Na2eaeC%2FAEKx1o%2BFJ5OU%2FACCWDQN9U2CMJk6zeqMhaW%2Byd0qPHnCHyvM7kd34qlAnXJRog6%2BsIQeF7gtt9rgQZJ03x1WAHPRepAN0wrRxKwP%2FSG%2BgAdKImy65bQw9xWltf&X-Amz-Signature=6f3969523e3e403ff74edecee32ac3208ccb67bb60eba634280058d0b2785559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
