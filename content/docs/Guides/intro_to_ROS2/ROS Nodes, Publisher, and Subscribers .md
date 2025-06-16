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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=d638f0e03ca42e45ded749e69ae65b1539af200c0ac66eb4cdbb267404c8f6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=3344840c561be4062f06f859cd14c22ff1894ebc6fdd57f8acf220c79606d2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=ea30b25e9091bd33d1a5be15cdc05a092bd87a02ce7b0002a1d156074ef7f9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=9bcbbffa55b09e1803b41e3375f14d9d26322da85b33697430d0a16e23bdeca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=519f8916751ed1fdff415d09097e03462a1c65b33a98a4f773223231f24a12e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=acb27cd167f3598251b16a08b1158186ce503c748d7ad4975addb7a2e5b91347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=34312da175b6105a13a72d4c1835b7162336c906c76b0f828b8200d3c105e1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW64KF7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9FQ8gAB1bxqE22Y3jQ6l7cC%2BRnIk3stmPEjk%2BP6rsvAIhAN4SzeNYEOzYVNZdv4n8vaQHVKcQO5AbPWE77KH2F6sBKv8DCFgQABoMNjM3NDIzMTgzODA1IgzOoRuHFCbmjPEs400q3AMRM76MQQWey2nGbqs6luoB4uC8r1ynNHbBvQU3%2FESk7V%2BSVhD%2BTmBkuzYSnt5Zvam%2Btq0QaAkr6Vth6hYYqvmwCfxqIQOPh%2F3SdpUaqcyKSuWOurx1Wnplr4I%2FIIrt2uwTLSdTpX28TD4Ov2PV6AZtbB%2Fp8jzSSLx0Y2HdPgYPixLhRzfHOULPnOR%2F7nwYl2G4L0eKXS0re637T3mvfLIKBbcUZquMlzJclgXDEfFe5bhStJs84gdbVrNZhXv2uM5kroIbnr6drJJ%2BL92ZLKZmhaOb%2FKgtwftp7vTigr%2BX30HiyUQUKE4rbJ4Mb%2BtH39yA%2B0og97DoZyExbsz95IhTV%2BSFnzcN6UjIpJ0%2BIRYFgQ0ksE3ExjlkP9gPf3%2FRfm%2B3NuYuamfOjViOJm0OGc%2Ba3SDUHsS%2FMsxiv3OTnhEqu%2Bj5sy5tNIUupTGwGaqYn9UU2Pass9D%2BiMDp0o5QNdCG3AZwIbytLRPFHDYD4uvYKShPricFzbL%2FO3yXn9wK46lUy4P6BsqpdJ9v5Ekt9FFE2zjGM9HGvE6%2FTbz43dn%2FJMRV9aR2pGpL7NxoOyjz9i8sc%2BtvvdHPvNoEFrfxsMaIegl5%2BFXk3IhbP4PDVW%2F56ev0SNo8P1UDdL2icTCsiL%2FCBjqkAaWbZREpEcJc%2Bo28AuMAagKft58McqmtKIOusJMw7WwOpeZBUX%2BUBNKJ3M%2FYJvXo3rFvlitZG5J4ZpWh9oXDPiWZ0v7d8LOxHTTUWOKiC9IunjBn%2BiLPrvnDjZQiCawGhBLXxej501h4YQbLqr1%2FpdyfMig3dH9LOtL091gVrJCnWQ0cQqc%2FzdRu2q4EL3NjUJMBRqwvdTO2hNuaKZVb5SQ9Nvtt&X-Amz-Signature=582e8c646311ef28c5a0bdc6218aed835325fb26dc1cb63dadfb158359501a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
