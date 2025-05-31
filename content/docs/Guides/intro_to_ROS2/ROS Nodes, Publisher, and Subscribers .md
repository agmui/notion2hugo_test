---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=9c48947c734b3fbac4f4d455349dcd5ccb6609fb5f6bcb466ac5fa286a0f4837&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=e55c46feb70aae0a8495ef1a642ac73f611123d0ec9d24d6421752d31d8ac657&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=8a6d6a75c30a8ba1a045586ab0b51a23b00896550146aacd8387f21d64f60849&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=6bbd741782f5f25f85e3e3313ca5fc39e41b768f956229cdd5b7009854c4b3da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=a27e98190ab9a46daacd5345414f54ff403470ee8e6cf509e4602c97441312b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=acb8843adb2c1de196e3ecf25d2ada553139161c7d56aa483dbfed5b5540c526&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=30793273d36bb06e5b8ee05b26647aaf19a6fd1273ac0d73f89d78afb48dfa07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQLV7EI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSD%2BSqkzfmcgV%2BVmcNaJANuzRrVOj3a6PcLOtAJ3yz9AiBcmGjGQJkx5ySIgbPdeYPKJiRsUT1KLPylEwLGIKEH1iqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi7Erx6xncoMsv%2F3KtwDIABnQrQUpu9DA3Vfr5SO8whenSzeYeCb12%2FaXp8YinEDa7m%2FyVM4irXWdHU7FnPLL9vpEMwO2Rot%2BqK%2FKMH%2FFW%2BtASEMB3CSrJ5oW%2ByBHUsQS5u8FM9pd6R4V03bIxEpypW40I33eHeQ2bjJxu6l1S1VvFTJa2lpBP60hoASKIlom%2FhWFxjWSHuseY1av%2BF5kfn649f9o%2Bp%2BleEDhy%2B0PVsH4PUZzDd9od52pdkSZtO1ndV%2BuZb1mDHcdhWrR8uHfh7lrbg50J7NTi8GQ9kyEK8hvU720Rk2X8LUhYEdZLEiPKML%2Bt%2F7dx6TYoWkEUnrMIiDm0Lj%2FNi%2FshuE%2BPuLvNtx4kEvfS9z0KZNPFFuasM551XRB0Y5zaa0dmB2icIOpYhNwwVpNsMsezfi66r0hY06ketK8Tq8tldRM69w7Dg7S2DHq5OiL9E0BJ57YLoHITjr%2Bup56wDTQKuUxp9rMeWTX01ccEk8O3rmDeipSQosooi0moUXOPpO5A9SEGg0zfP0NY8S4sz%2B%2FYcffWCAgXwFhvrJTL4aLvHQc2za%2BEmleECLE0k%2FlLWeoRO9qnSbeAGJujjbn3xC5r7wtlCh9VEe%2B7dgKaKvzi0TJXR3PJ3EhanSSE5RWQTep4AwrqLswQY6pgFjIZqKtUZyxGGpT4Poo2Jc4EDBIxqUX%2BBIHszee10AWaLdHrdyfo53QHlSynLc5I0HERNP1mzfj%2FTzfrAP9S5RORUfVTwRxoeOHCz5qNIYinZ1W0jtL3ZK8jrbwjQZjOS%2Fd7k3CR0orgwUUwxM9ORdoCVRK55ZBMlnM8krXYmzxIuOp9RclF4INYOZafr2rb2kWcv3dLtghf4pY4NfmZElYvTmvNhp&X-Amz-Signature=673e0bc83bfb431738b1db7b18b30774f119385f69d3832f3c2c8ea6ecb37ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
