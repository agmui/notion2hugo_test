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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=6af8758a576f64f7e31a8a29980780c349ce31947632df2e2e5697e50cd835ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=b231e6171905a2803b707d54141c7b9597b25c00ab163a7e1ed3ad60d4c35021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=ed542a702c2486419d49e326178805ffef4fe513854ba3ef4bbd6d6aa79f8bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=10e423e2f5e742ff224cffcc95cd96a9a807e5ecffb659b85346b3e89b5c620c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=13ad2fd80ac5a6500624bf8e3750f86298717d01fed65fa70b869badc44de7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=2ea0cc6c11c454674af13935bcc3ee2f616aa3390a6ae5574d07bcdae118dd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=0a860adc61fc8c5d3865f5ebbd27e32574121b3900cc930a0e68d753ec3831ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASV7ZHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGJA6Ea3%2FuPHaQMrUTC9crmNNp2dGBzlhaTO71xkgOtNAiAPpjy9C1hQ6DMyAwP2HPy%2BPvHAxfxNDZr6%2FGpv2pE3Wyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMyDCGXwapwHU7SxrvKtwDHeU%2B205pHDalfr9%2BFAr5n2fKd2d5VDZPJpujWnx2vQ2ImJ%2F3%2F%2B3sYlVx8cWaJY5N8KrqEZ1TI1NlTWtScREOpzI537VdCs3WH9BY87ICC9UmnJNe1ua4QSPFG1zHAqSJAxiyIuBtxBFfqoQWdKWwtsJY69rzXSJJ2pwMWd1Wu6ABgTk3YXZuuonaJ2eMTR%2FG%2B76No0ZTeXzOa6QzE33ItwXnQRiv2rmkywLgcT9sO6Rf57UUK9DjPNTp9bWNO%2BKwEp86VxcRVLejg9Ad071rLV3SK6qfrc%2F%2FrHCbkSXNPQ%2F7JxM2%2F6o4wklluoJWRI%2BWEB7xdTmVmhwOASHIn%2FvHxujPs57R9FJc5leLLDQ%2BervEde7ofWHpIWCmPE378MFGtM9JNBhpA7QSZCKZpfLzGnP16Ds4kDoDssfLZm0t6LgoICkfpfqz2uSf4qWF7BYj2KTsHCSQCCVBl713qw3wpfrhWrIviUPKJm2qriZNnNkZtxZKelcrv8lXQMrelF71Ic%2FJu%2Fxp%2BhNPRcKx8%2F72xLO%2F9lyV9KggULxwiizvqUljRPiudlMTDdOoemR67aPSf7RPSIZ%2BClq2r3eTb6eVMuK7%2FjStzYdDzQzZBGkD15Mwg8Ej05HTi2Ani54wt%2F3WwwY6pgFOZHIfJurgp0x9LBXi3B1wE8FaBHMH1UEhUis7iqhzSMSd42I8k0nBws2XgVelHqFhSAIWvNUk7EWMMd2HYFss5S8tGxI0eJrBKmtkq07f0FBt%2FdWwIBx2BPkZSxHo0w4yKuqIh620uYv5YqRMkr1E65fAhrYbLhjBRSieDJ%2BjfXZawgxqFnHPuevbMWOG0qJjJKPwCeztj3Ijnn2FXKhR3v9npsUb&X-Amz-Signature=10bf398555327bbfbf41505022a56711e38d8f704db9630a779547983d738b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
