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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=9845496b56111d45532f6765d55b3af949563b3ac7065bbf0515a7c57d174083&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=e19cef488a2ce335ec3defe0cecf7452b47648a34d9643dfd904cdd486532325&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=086dc9e11205ead6b8f5535c8de334806ba5201a4110927a6079191522101281&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=792cae9ff7e2950d2621a740a8eb766a8c8cadf1b37799fade716899d6640501&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=afbb2baaa140412f8407311684bc060407405683f06d3c5d9f0f18c6c6ad4857&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=6c8888065bee43e24b0177f1e98a153e6aad8b616e41477c124e7828a69e4988&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=9a7dfe2460d8f05ca07e73aedda4ca907e5f2819e00381fc3364332ddbd0a939&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIB6YI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDNpaD6QMB7l3gsuUDGtHKEkpn%2BSgr9rxBwKPN7SbOaWwIgboYGaQHdQbTTFORanPgAKdsNDBQfCEvP8wTjVrcuybUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFcNE77TDwg%2FPsspQyrcA%2BqRTcmCkK6g5RcXdrg5iPbM0yUzkSasVfPPMzzbS7vAiLkz1EwLMudxhoyfeU3AwwYMt1BySRa%2FsfNb%2FnjC8HQoNNFMyt4OwB8qdbJgc5S32kCgCsiP0CiTo0UdrR4C8DjaZ7C5GxMW8MYMSMIGTDv2pLgOYZ8kXLkx%2FcQDEBTGE8UC0aHO2ELDv779GMOs%2F%2BRw2xpgWOhC8GHZIiFR4sP7cIoFh6sjRxO0jNiqz9xynF%2BmQMoIo12NgPWGniD5xMwzr1xJfy5CNzuElDT0Wvt45iyRAdt%2FuBDwI6uxEs7zk95TOy3NgqHUNODd0o0IvcWLVQGLA7c4eO8yrw3g2eQo%2FUK0FBhvDHAUy3MAu6mxT6W0h3MTxEbMGeRmYelQ%2BMHjhMvHaLA3CxarOk5nwewsg%2F5nAfqNw2Jkw1VX%2Bs3fS%2Bbeo1ejtvsRSJXpabUxCF9BuBm6uyOYp5Tich5frOFuKFb2C2e56tCa7fBa9MYjv7CQmlwPlhuy29a2ireWsbxpD1rH1RvcPBpngkQ1%2BUm1oebBUg%2F%2BsYvpreXLd8G26K0DgpsvYYgOgM6Yj3YgHaTraLLQx1PTJ1LNbiURskhh4RC3UOEtVhjHVLL0wiKbufj1u1mCI2%2FPSaJ8MNvYw70GOqUB8lbb%2FzwFpbzOdDU791Z%2FeLkwykBgAmUvMETo%2B6r%2BWTfNCQRCfFcVKsB6EbnM%2FO5fCTtn3SbxwrHXCX3hJ81XYziyn9pbyrUOuge8A8Ip8mMs9D0Rz0yQzcBUil%2B%2Bp25XNSO2Rcus0Qguqo7UqgiKfYzat4ajHqfBQlDxk7BWjmCByb64BRCNcwYHgxfh3TeEuntpoCGSXKBGPxYf0YyrOki0Ajnn&X-Amz-Signature=7dbc32350ff0de5605ae3d7a10bba81996f4bdcdb8e13360f9e113eb79eca006&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
