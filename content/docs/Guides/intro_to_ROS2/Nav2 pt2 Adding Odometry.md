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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=bdb77254ad803fb429ad9ecd2090ab79f32ab1c1a594a9b1af1358aa54ddd919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=8ff185dc7029eb3e1ae92e98911e4e85f39315382680dee404bf4a8d4d375a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=2c25e518870a2700ba7a75cff3b6a3b2c04b5171d7aeb4be600540dba2bef3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=03fd27381d011c56d445f15e85000e402cd5544dbe315ff0aef6c3d1afc4cff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=73da25956d102594268800aaf54f3c68d023a8bcd15af4b0e9241e010747a9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=73a11092beedbe8fb38b9e51e66b0c15e34a85e02c32654aac2f3656f65d39de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=2568b112609e65784937d8ed748f6dd9c630f9cb7eaad1ebd29b0e36d7cedb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=0c83fa9ebd2de97af375efba65c3ab619fda62349507d0b98b59ded744eef0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=a82829d3853bb550487d4dddd37295dc44a10cdf273213c424aac1b69c6793a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722SDT3W%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt0qyir8EsgD9zHADVaMG0z5FMeriMxwmFn7rUUW3PyAiEAvq23iQ96UiPOfh5hNjHmUzjY7tF8%2FZ%2F4Rm8o%2B3XQLSAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnm85rbrpxolSgMxSrcA7xXenPCgoa3wwYMbRKb0PlIpqvMuGxQAY4dyW4mkii6%2BTUWdHfUivz%2Fa7RVlZZp%2Fk8hj%2Bua%2BqY2jNh8%2Ba8n0RS1NLZi%2FQllhFYRKbqSkXIAIWzoYz%2F9Fe3KeG%2FdoCXC%2BvrzxTD4R12Fh1HGsxd5gkqDDfw%2FJ%2FfVAhag0ulvWZSkGEh3tqdA5BX6nmM0ltGkKTfXnLtrzgSzphRMz0r7M29BvI2A1JtxRScb1kGBZrT84akImOY9nsVn01NN%2B5TnmsTnYadMqyFtq6p6dfNaLkXmrM1SQkXq8x%2BKv7FRsq6SFJl3gUHPbuItFwhiKWbJxH3WmJfbOG0G6ME2RkOSnZB9cSYmVQTMNeYpLEXG%2BEQlnd6AXjtgFO8kY%2FvSqzqggPW4K5%2BhEBNQdA9kfAiiUfPCwFKTfY8bzkiE8HVgvok8fOC7GrIk7473HUP%2FAtyBQht10pgMYjTF%2BDhvrV8JovIjrPfueCQwKyIGq5VRzNnNPhLUdjodFU706Nxd4Vj%2FkGXSckyrWtPczNr%2BagbylGtNROfeQL9stxFr2%2BRd9mWxnm8EPBuWMUmIIrj4kYRFZLXMSzRaxRes5BCF0uq1fatFip3qiMY3UR5FwOH0OyDHIDy%2BS8dSyImNMThIMOOdqsQGOqUBwltmzW%2FVDAqOKi3SYpy%2F7hHDgs4KtLXg2mRbIEwoodwEOmOGK5%2Bpk3Cq7Y%2Bh%2FFKQ1A4sG1udDAf9UBs1FgedzWktMiNWx7J5zeXYENE2vUT%2BGYMuOtk2OEvw5IXZJDq7tav3k0pjgeazHILULuAGP1dOOF96by8jK%2By1LpclFy7yBWsvFEJVCz0Og%2BNCbSnVZNMW84HFrxSRMOZby4MZkHBRfUVs&X-Amz-Signature=1c84e687282ddfda2d9a5818014cb73753616fe24a5cab3506d8a41ff9177b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PECOSSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDungTplXotRQNTrtiO7gdnrczgwaDb%2Fsbg%2BXatddPUCwIgccG7K%2FeIpEUfGpyCqUKtRP2AhFY5DK3io3vesc7cyyAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRCsFs4qVHhjHCxKyrcA3slKdZ0zyksqz4N2AOMLjyzajyTEVVaEVlgSW5tiq%2F7cfh19ArpnSBMRQLhlzMpeJ7x1KenpfHhhPUIWS1zY0VW8OWnC9yOz529U9MjKdClGM4rHZTqfMlucKByK8UiIioziQHfrcH4oP4BNWoaMo2CGqk8o8NavrfsyNZ%2BkafC8eWK5z%2F1Yfu0rUSxQhbFk8Q4khIJWjTwd7vdmAapFOx3RwYIAgiFi9KvfY2guAiXFGzdr3PbHlTxwueYVAJv3TpQ2k0tC5Tp33AzynR7zvMIZKNt5UjoV5kHDpu%2BfWgxf4wBgYkDFh0AzFzkETSmYgSLOD61Pfq9NEkhYDNSEXskRvXejqTy29qKUxA%2Bc5UX9BHmAOavp5gYCXeZMMe0UYS3z2j%2FumfWMH0M7w8h1D8HRw3eK2LMpU5b4gEgScL9D1IV1AeoEFFryOf94aYZhW895UPUao9K6RTV6jtr%2Bsb%2Fv%2B%2B2H4usRfvbb7p4oQ1%2BpemAwajWX%2FE7lo%2FdIpaqrlto%2B5gYOHWAeNiLUs3QjnxLvuAk1S%2B22Yo9amWdjFi%2BY%2Bgmt5RsHtL18INbLCjOPKW%2BrhcxzOlq11czUxT%2FaFP%2Flt1RIREUpzF%2BBKrWQbU44rpctO%2FS3AvPMQ68MMeiqsQGOqUB6lVfV25vC6ofPX8MY56be60rXmHMDf7rmNjlbsLmK317CwV30fNDK8cmQEKZ2izbjhezEO4edpXzUwh%2FYqz1bostO6t%2FxcHymvQcZJLXP0r7srW%2BF%2BGtX4ZeC3N365Unw5UAIGEAQHfWh0XSczx8xx65aCfLA2en20GXw45hX1wuwCuOIaFd8Su%2BLuyRIOaxbVVEtVKMuhXT4xOTDkk0yEDCH6eK&X-Amz-Signature=c15d7af88c5c0169ef110921aa9a2bd1b9e7ff3dca30531c22c4c830e2b52169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=24fcc59ef6706cef8adc53d6dfa6f2f0d1016f7a033d3d61c7f14f6ec0a65ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=dd83d94d582982f91bfd4634d5b912bb056c0bd8a2d85604bee87d7f9bb22d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=dcc57926d6afa22ac55c84f7d165d43455b4743408f8663d5fa6da297df02200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=d98e9abd9b6b7411c21ae00e6754a04d2c43e67e49bcc01e31f44b8f019d39a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=c57821f40267f6216ad9af4ffc024c45884d7a03df81e6b12cef1eb658bb721f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=2da702eb9f8acdb8b8558dbdf4820f0c47451f3c4c22d8d9b194fa3befcb5552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=dfd61697a196944ef8e28c3acb57252e6b942308babea2fd3233700c70fbde01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZOKFYZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixDSp3W0h7YWuLf%2BheVJZkhpMbeYstq6T9YF40e%2F18wIgFi1ICvCu0IyG0RDC0ANADOtKhRIs4oTSTBkb9LSr5R4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX86PD68JfEVu7NxircAwgOji3tnzizNvVFa2XZJLd8Ff6NSxvyc7DkbomJJhqZ1IZJvR%2F6J2b49rggmHvbBuI8JVUEQ992MwxcpTqDKtkUBtwGYQgGoEmT5398dICNkG%2F32657DCUG5BSdRSVv4cinNhDj9ICLhtKpBzHpcWBxRnljHrZf5reU9M862O%2BcaeOj8icMPmvQwYd0YDsjXPSqF1xFA9495nlQaSpAo7i8brQkRjVBHX0KrW8j7zMvxTQUeNf6H5qNtsJGTXxF6aAX7ZsPMiZT6vgnpJctVE1wygan%2F%2BiPppSkT7GvNdKbNV060doFJv7eUx8nTIn6scfVhpf6e2uJa%2Fq9Sx8bEzVmt1ua%2FtCmUwsRjZKt1eVbJexiIU1eSDcyNJxfgANoQYWzwfkzmiZwRlEpt3tNpEJoErCB6uVxiR9Qr6Fv%2FWuj%2BDqJ3Xgs7EEn3pSnq1PkiIi2m7snU9E1cWUV2LxdtgZPo0ci9bGPEF5gZLC2OZ6QZM%2F7CgtJVuk0viFOh%2FlhzEiTWt%2FkqfKYJGlt8jdfOkiA6l%2B8Z%2BO5ixufwk84Jx9z%2FJKlTl9N9a08XB%2BvFFhdU3MHaTv3rRbJuTHW%2FMkcv08SClhoMrswgeat4ZYlwRyIaRZp2eTjnAiORkudMJSgqsQGOqUBk6vL0dMwOULbcbdgEjGqcORspwdtENATTWRcjnS5eRIyLyRW13Leu8VrTBGsqdBHQPBWtPWUzvPPFW6Tybe8F7jMzY32I0ZTCuuXXtpSZJlpuS9iOhJzusLinTO5HwB05ubf2JzjXookB0qv6IX2rf3BaF%2BJQEXdlPERnyv8sfrF8G48x22Lx%2FhsvLqc2xE2t8de%2BIk0fRT9z2cbupio5m2jZWzo&X-Amz-Signature=c089e9e0d110eb861fb767e13c747ad6a98a20c9d07f355c12a49f4696c2f958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
