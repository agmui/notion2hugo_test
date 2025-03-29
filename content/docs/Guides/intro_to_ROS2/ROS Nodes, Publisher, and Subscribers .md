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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=4f2479b0dfba77013ad4e2f49235af8a904b7578d32f271ba2f3c613d9587aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=42b3dd221546f95c2788d04822d37d0179553ba51c0a754f9a04af52d3310ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=d2686518760373811938df5328d2798af3801ba19b79fdbf05739de4f3d17538&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=77115ac941cfb8a363097a92dc5124c7de648c244225c321eac6aabac9eee321&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=0129c0cc303a996e9402762c8ad59ba51e6571cb284ae80b7f23b952328edcd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=46ab3a3683fd1cdc7a006c5af7979c1981e3e18de664b9065f153d3c59038cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=a506fdaf904a88832f56b4d550145dafe63a07b22c63fd90caa8d29dff07775f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3ME77%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC54IicMYZXkJ0WvXz8Rb%2FVG2Q4H8xQmmsj6ckNRwtJGAIhAKe0SUY11dHd3WEPk7vm0rVmz50jtMrG8ASNyvr27ZJeKv8DCHUQABoMNjM3NDIzMTgzODA1Igxe1MXwMrXh9I8aADAq3AMY1FM%2F5ii1sOYrMF2gLm0xKZo84VSM9E1vIlJ26otpNchsaHGFfBntB5rCx9StM%2FFdzxtMg1bciAOSKT9WZ%2BEPPvRbJ9NAcbXFOWmN2kRpuRG2YpDmPFg9%2Fs0cKPxGt5LRlf8lRx5YSPTJMuV7hk0dEZ0%2BLUyH%2BwqJmqnp%2BDESxpnFaur3bvC7aOz4sIM34QT8Ezn7rEZrM4xtcQlZPd7y7r9Gj3ZyKriJaZshwHvAZ3SMOzH%2BUj4wxLZjMKowufF3WL5owcl2HDXqa1hpKLOXXKlMrEq6k6tnq2yzSEQswJvSXllCt0KkT8u308jVubpujytaw1DyZI0fU5lFPkteQ%2FJf6mjGiuwzSBRJlF0bl0h%2BH8Yek43BOXJcSB4pz%2FQWJd2DQSNp344kTOggvDZRo1SEkUPNhpz2ZzXL0DjwyRpfO47gQUPtUukWoxM5zofmqceOlPICE6yYx1wGupNund7J3G0SwpNa%2BzL0%2FdJux8gCprpmE7bU9tGNtJryp%2FbKm1yxkBg9C949qP2%2BudhqRseOE8nv6DYPzsmjm1Dq%2F2SJ5eGgLb0btOboN3t5POg%2B7kEVz5xYBvyvNFukd%2FFfrP9jGsuIZeZJh8FVT5KJ2tO2HWxi7esIl5qC8jCOtZ%2B%2FBjqkAWYPg2gsZa2IA%2FpNCN1W4gqifPLqYHZ6IgIds%2B%2BIA20aNb7mQrKrlWJ4PtkcF%2Bn%2FOpNz%2BSAxn8dyBYedyz3p1dATImmCrxOW2RTkm0n6qDFAewpWG84NIJwNW9VhsONidjq46tlWCc3L%2FGDKW3CHpRBLkaI9yqEf%2Fi303sFbJdSli%2FKjtbiPa%2Bw5iykNxjC8Q03TGB7wvV6VvHC%2FXZiOMCAPyp4T&X-Amz-Signature=97cfaf41fc87df7a2c0e3825c249906ce39d58ff9afd55d14680d93e25ebc140&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
