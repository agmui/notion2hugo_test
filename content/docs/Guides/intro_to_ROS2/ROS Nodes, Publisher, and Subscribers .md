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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=d11ae2127abf2eb9a46823544ea2577e0ffebb9c24d43ebdd4fed64e3df44e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=c6f50b23038188c2f6b4391e6c01a1045825a714da941bf52fe7bc07f61a86f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=e78172c28f8f0f0e40ed2d5c2cab9c30bafb12e5fbed7a13e5503626c296577c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=85de00539878544785ad21bd342b10ca6e90a544c5d87223678bc985892b1823&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=e54d7bc0005f5778fd7a4a0c811f4b7c564472d6b2dae35dc2737c58cb7447d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=7d34c4acf4a76a035d5427e6fe87ce26ead0fb59b53ad2ff961e156a38de2c06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=740de340d7a080d320e27de10c99a5bddcd3fe7a3145419288f3c17f5f9db8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6GGNU3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuzXuslmy41ZzfUB5bjkd%2BQQsoDhw5byT%2FWp%2BCvDJJIgIhANGowqsXZLK4aJZ95OQ73y025aA59Z2QZHlaF8gCzs%2F%2FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUh8vViJhQedBnJoq3APKRWcgsa5B9%2BDcyFAhkoPJ9rYahk3j4tUaaAzgm5cRgtrL1ZXPX25ZohELaYh6HKX4%2FT%2BSB0xfsZZ8YDtt5TTnisjZ9I%2F1NLboYECH4rNIVw1iVINHa1I08F0dZubg7PedP%2BQdU0s68zzOld5KpbJdFD7muRm5iW%2F1wpczC25UEHQ5lp6WP59vqMbxor8QlI47ZU6xiBWWH5rneHfn8I%2FeeoDx3BiMkcnOCzZXLlJU6i2hXn4u672kVW4kpXKziRUcMjFCDB0nh2jLOmN2uV9XdmqeZ7sIZAowTextwLR0jKw4CqgbD9yrWrJ0Xv4Cp19mnKq7m2Bgai4ymiP97pyIynAq0gNSyBOrzo8xy9EhXXAHwmSO6q4ohCVBMiga9sf%2FNsun1H%2Fq7p%2FQNIc8O61q%2B6z%2Bz6eKewevIuFTG6qVIaw8DYJ4P3Y892nnviBJwMosFGBuVuF6VDVOx%2FrpCTcVu3usX8mpEUdoH4HQHfZBL6DYwuZnC%2FjVHLW9medKg4raUD5fcMAsmayMpGVlBfQl5UoT1hBZo0I%2B7Ks4l181oDcCn3rufGWm1wxyIu8b2YYE1zfNyQP8Re%2FJ7%2Fp0blaMXI2p5aiF766UWKpFgahHDipAe6TYTqr5WTbPzDDr7bXBBjqkASZCZFF0e09nu4joJ9f2E8eFHCLPNdjVamasMpP6MgqXBj4eOySUesFT1hWdjl%2BcRLWxug%2BmfeV4AmzUD1XjnL84LLpHz7dY9zVT10%2FEAroItcr3KuSBcyZeM00wPj70oaOd1LDiFA7FbEDvKAD%2F6KQAV%2BtfJ5tnLz6LaIKllngvk%2BE8qr39GDG06lr99%2BofeP76XgHxcac8VR3gQVOvPH2AaOJi&X-Amz-Signature=5be0515c4ddcfe4112948beda031f912206ebedf83f027aad4e3587522e7bc80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
