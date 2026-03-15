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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=5a03875f1b22b53ac688e5e5df21272e7bc9af86ce1bb79aec2c38801a4e01ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=2a45f1c695d0fcde3be7b5dbbef189b45b06088a26c352f4a6dc9b068980c320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=45e939f7e9204fbea9f1e3157e697c9258f0ae66f33c7347ec21f37826a7044a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=f7c17e839e9c5fb2b2cc8787c961e50c66788692659ee72c248a60584c7c413d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=f81e7a97219b1679dc06f3c563ff982daba68d041b1a94ba630a7739987656a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=23151c2be61d82904805227303e8a41ee6b568d9655a883f116e2cd13afef61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=a05079755aff4a16ce226d4ad4fa44119737349e33437715fb22b4368f37a40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=7972bd74356ffb037097a392702c5eb37083ca9d8330a3e453a301e9d3acaf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=f2d7ddf3d5f2c95325869f8c3604f56bb28a722f025d1abed5f07e94fe92aadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHRL5A5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFGnryQdOcTIMKNAze1vXIie%2B6PpgAncDvkOj7hl1wlAiAahv25wSP9IRyOLy6PEB0EPrDBIbzviQfnC1GbD6%2B1bCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw1gy8h48I%2BHka2lxKtwDT3aPHtbDwx7aJSpO9ddC0FUay%2FJeCgfBRDZ4jJm%2B0Yr9EgmrmmSETYHCZzM7lmo47Etdwmuk5F2StN5mJUSr1%2FyRaOCkbAKewLSdE4NFwy8pUEwhZpErsawKXy0cvIx1FknoK11bN6hN1EPjjnMfw6ELvyCwKxSRGm3UA5%2FAydWedd6AV%2Fdn2Yrds%2BdQ%2B6Sm4Sj%2Fz7MJXVhBuF4QYGfx2hVS0QCfSCyAsaSImfmqrVS1nRv5tuOttWKl3VgavT5n5p2T0GW7U92xVJ%2FSpF5U5uQhh0bKyxwj3fuOIKAd%2FSKjCpNuVASVLNZJ%2BMc9pwcueLxkjy2O8X2iiRxmdXYkZ%2BePwAT61L%2FBuFN%2B1uJQnZX7JyVEpsN9QxEzp3%2FIg7NShe0UBNBHH9aqyOh7C%2BwuJ7DRmS%2BAFB%2B7vc0m97ZnJ20DogTe1ly2Bp5dtuFEly7f%2BUGb1IH%2BW4j4wybIr1RRd8fB2vzhjB14K2IKkd1CKcdeuOOo%2BlkFoCJKsPFzQXah57L80UdvaMJ8cqMdB4%2FKBPxiZEbzjpqvDVUU37C%2Fpf4lcXo5mZOgY8FFQ%2F6ynHYYncFQBELLSG0cIqaY6wtiDlvhvpb4f6i6l8hFCkPHzO7r5yjIUv5UaHXkHM0wmJDYzQY6pgHtbfsEUgbRpei1CmmZxIuD4c%2Ft%2FeF0ToooDSlAEknix6Mj95y%2F%2Fpf25Y1aZHDYx7OCux7ab1j2Zi69pbReLs3DV8leCNdYkPdx%2BvpjbBQKh3SwTIDPvsZTKOKj4QW38nxosqhcn0Y4bRx%2Bn1kwVz2pz7CCt0mrBDnnNoUiJPBb4SsWVykBPTlEnSEPq4Ui%2Bw3Bip2%2Bx5WzzDbLCumxm%2FVi%2F7N%2B6UQO&X-Amz-Signature=ca55b8134bdb0c3a3b3c85989252ec22f7a37d99f671445427b4cd95c0109a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UUURSO%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC527VavNGJdnaPe8FLyaqmeH0jA8kmPxfjKSdxHK1MzgIhAIp1wMZXgdaCrTniYILd3lvak%2FR1dES3sUu6deknW4f%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQYfIU3Vk0tj9%2B7Usq3APnEeqzN0DtvmvS0mmD07Nbg3YS%2BSIruYtNAcLghuhlpaXzt5WPPURkiXUyOKgWHk4IF9nuUNDwCRVyIno%2FYiprYSBf%2B3DQWJ98lhmiC2WgdNDC6n5b751K6wQgR7bTUAkNukS3IM3JKKykRb8u90Hk%2Fb5c%2B%2BdwCsYhVnIYvzbqUKw8WHZ8Qypm4MMDaRCcCOnWGyMV%2BWXZht56ovxYWVnXxrdZNGGyBPiiJEMcY%2FpT%2F%2BLkJ9DqUAD1khy%2By3LU%2BzwGMM7Y58J5fcSS4lcTSBxYe96OrfojpwwwvXRwmCtfqN3%2FG%2BLIPIhqBngh8czcqTDWrjkWQqT8h8ZAs3jvhpXtiLVuNdrb2gttDUbTwZKW5FTEnqrQ9xiQw1VWIwHWeldr2GNm2FyTUH4SHqn%2BBFrlSAIQ5M3iUjjvOjDNwy6P8sc9X8rOGTZHBiufKiCAtaBHM2TfeZz3VVv5mMd3GeR3sWYgllEZm7TFcLQexUo9o1jNtSodkyp8vTdZTY1KgU72k%2B1qwcEY1p5MNnlNMdUQG9zQU21GSa18SNWNiM8ok%2F6l5e1jYWA5azKLecg7Gc609SA5Ey8DAddablNMympXIr%2FEnWaU%2FNxMZHLgsfhYV55H0lCEd8VOz02WeTD6kNjNBjqkAdLPTYfSamvNds2W%2FueOJfPTEfY7rX1KlYxgBP0KfDW%2Fr%2F25Jn222%2BuKzldWRkfIrM7rlrGH2TDQ7Q4WR80Z9x6Y%2BL6IF%2FEKzZubCmG%2BGv41W9vfWukn%2F2zRJmZ8OWyk%2FVCnLuYOWEk%2Bh4K1oM0OwDluCzvcm69oTn5eikzVGGrCT0nv6FpYhqgL9a4i5BbujW9feSJwBAMcRy83EOzyBmkXG7P%2B&X-Amz-Signature=2a19d9abff7ca8a5d5f6ce9741a70e47c4e907202fc3c915984733c14cba1033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=12f904199118cfb41c82245054b4bf9321d6ee5b00076d2167b61624beeade74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=a4aff7ac70116e3a905afb7d6d06eedd1659bbb9a9fac12d995f43bbd7185751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=2b64e82a299cc4335abd59a2759f28ad91b66263d68c886c533f1c4350809cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=87bf1a6e3c251cdc58b43434c8d50e371c2fbd6a9d2502b36fadf41a495f23ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=f2b4667b5b61b8bcba4b74fcb59231bf5328bfdc8fd31d36b9c71e01ff112ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=d64b11637709eda9fb5bf35f4ea0ca5fa052a4e2c412a5808a6d6bd4fb33db10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=c38d85b67ef102dc9f5c7619e8e2532b8ae184746aa206aac382c6bd00c11ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=0cb31fcc1730aabb0a3986a877de4dd2374270206c5694eca2fe55049f77742b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4T5VLQ%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA15oqpv6BJ9h5%2BIxC9zO8zLQVTT1ffCrSMONA2LAUcAiEA89Lt2GctY65tKdxcJJlf29tV0yU8NbzWl4Sv0ehKhegqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNShYTDZgWbBckfstCrcA3I4OKK0pM1XV8MNehRSCqfJnTlkXhaPtza65tFdNxWoqGfo6b7EnwgkTRI7N%2FeS7TBem%2Bnz8t4Eq9hv0HdueHFJiyAza6mXfqmBqiZx0j9Zj8EQF05BlIrCv9djhQp8rnl087JoVB0pCYx5uI3y1BqscYDBrx%2FaxdHse15unGgLUgp121FoyE4nF7aOhxybVbAH0X19SFq5oaS69XIt00P1U9CZMnkQrn7zYg3ZTHEVi4s9Kdb%2BqwuL509JSViHqkMgABHIe2lPel8ikUyrefQhghXY%2B3nmDlev9%2BYJKkyzN4FvVqCSjJWzcGcQiQ%2BcUtfRoZmnDu8kuL9WUpshg2MlrXhTjiayByRCK6G9uMXQrIsrjK0x9ONhGvVPMmN3%2BW35N4ZRavVYxyJs3OeBrLlySVznwOnBcDw7TmQ6G%2FM3fv8iU3Z92GkzrzsqVt2sMx3MiyNv03y1dIG9FK4T6KhVYUpxkhw7r8FFOLKJfThseQ99LIeVthWvs3rzTp4LhpozgAUvMY0pzG9p26IHcxKbvYLodjWkFqlZgy15GTF8t9WMffS5rxJdyBaEPDINXmcfvcpTT0LPyKCS8lj%2BnbEyqVwopLfa8jZ%2Ftqedg4JYz%2BWdNfglpg5byHQDMKGR2M0GOqUBCEbuEAut126gTE58eYBBsSwC7bTJuJjjHUpq1c3w7%2BqPCjElKDxE9qAidNC5etwUdxCkX5%2BAELc5hxCyJaD%2BceZL9aLsMYto9r%2B%2FsKU1Rt%2B3dBHvYWqKkVN1daDqACma2IWp9bvoUNBi%2FOdxcvRa494NAS1EwGxVfriVCo8BVBxIg%2BkqDEhRGhzg%2BIwR7xn5hlOUdgWYUJub2xnH6XervrQq8kru&X-Amz-Signature=2724bbdca4c2863a60188abe2875e5ef76767c667bfb8c2034ba3215ceffa5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
