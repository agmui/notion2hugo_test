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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=a77e58c5c760370484e1050aeae8b278711e75d59da16bfe676b12625d4bf3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=411d2e2b3511156db022580f5706fe2bc29a88aaa80417f8e83f3fb98074ff22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=3c136cd1bb01dbd7b1ab081ccfb00b4a977642408e8f56ca2ff4fe8cdfbaae11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=6df0ea323088acc406605f3188db27f24eb913b89f2d87b14a96614e72da1fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=cde009ca14e18e09b7b1c74f17fafa80727efe13f89e6d40c7659fccf24f6475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=49bd97e5681694f8076d1333adbb4f5ffaf3c80e7bf5f4a1926c0269ee238932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=892085ac837f0f1a8625a0e31d2802e61020b72fb2980eb74db6731d62bd38c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU56DDXK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyTP29p2Tc%2BuoTpDOeyjey781kYogUGsxrDREIKJl%2FeAiA3CrTcq%2BP7jJLTKqUhry8PsbGbdlomHA6x84A0a4o5ByqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAaL%2BgY7NYBnqf4QyKtwDZa4hW%2FPWh%2B8I71hpgJ6ab4eNXtM%2FnpsDt2hZ7eXHyy%2FAEUPUfckXjmPk5ohI3YkDz5cTbFyi9%2FxK1ntG16IG1S4JoRdwNuxrzoGFCoEC5VFaiVWMH7f39oho7QRrW3tZ3702xzlDn9cNyBQv3qJoCmniIvjqhTGOKQG0NOa159ogMJ08ROao3WqOGPtA0jtWqA3xQmwMHlXGvdHv9IP1TEwxV8ly6aXpqvCshslaNzWA0221QR%2BMURX1KsJaEDP9%2BFiK%2FQD8hjNxzK2ucWsmsZl%2Fhqxz%2Fb0U7KAOb%2F23GhTs1zXAv8tjP%2FJs8kQ2gt%2BW7R6%2Bl9karUMNw1L8K66SvjA7%2FOSpkl7%2F81bCZpAgGLXgRmOBleoXyLrxVQMwkeiPVbPEGcJLCaSjInKe7w%2BDxs2XzPKQu%2BdKGRKDkTUhmoGJ9z5fzzU2877%2F4Xdo8IhoMmCQrCy3WW3rOt4G0Kgmk7HWaQFPDoRMy46GCxx8bfIMC%2FBAVhxN4RPIba1LKKf%2FL8Ljf%2F1PBWgk0R%2BaGajpKbHJWngvckAMQ50bpqeRZZRJ4ILhAN66EtmjwLalvSjrXn2N2gj9a%2FgIqrJvOEPmOVOMyw8v0GpTntePr%2Fe3uyy1hcsIWDdHa2LgGTgwmPSRwwY6pgGxFJdaTBqiyGjwv4selDG4CIjomDuy1y97lqqOGTcmqaCZg8yB86SXHkswYdcJa14n0uz8xNct29Dy7%2B8ICqKkRvIvaBFybRCrglptjVQTePI5VZdrjOTtbvJtwJivARjZIkR9WZbjxoePQFjEwYeopkWiECbR1feGsHLkbfQYun1FxqRaeSwIRVlij1MDne%2BX2ZLlHjZAtUwpON67jCDusjM0D2s3&X-Amz-Signature=7e24a117cde8f0dced28b570b7acb59b9ab319aa4aa966f7d491c5f7b9d7ef54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
