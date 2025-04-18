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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=f8becdee008f259b2b728ff7cdbfcc16916eddf5444579a2967a067efcd3cf48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=c1c1932aaef5ef25d1951241bdb2f9247012eee377fa5cb498d070886b9fa407&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=4c2112277e8c0c62609a177fe883281674bdaba0e862eee5c6a3a8cabfbc120c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=fdde042ee7b59792482e42f6bf6b92e2a8f706f2506f6724ab21546588db5f43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=8e168c87b951c7512b3572f931d585877608d2152948dc8f3e6ca8ee521621fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=78e1968f4eca6b3cf82a9237ffa148e2ddc08df3bd5264f5a95e701f75f35185&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=f514ee85e4299bcb4cebe726e6983002f95ab010bc1962b594f652ab8af1b514&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUXONEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP80c8NJdtCtH%2BSeh0%2B4w4is%2BGzcKKsV4Qp9ma3syXhAiAzS8L5mCmB1aN33hFFpz%2BkEuGpDEWkkMoxPPMtZcpyPyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMMY%2FJORAthXJKk6uMKtwDsXG18BdDfxxf%2BtVezhxqpnfHTjhG83%2B8J%2BxwaLH%2BCk1ahU6uxgiwiaxVX058dVe0RKzuuMnt7rTBLeWKosrnmE3ifHD6SmR%2BYGi32MJ%2F1HrEOmS985ntpRu5TWGVNrd%2F7%2BJ5Fw2ShIaU7J0ng1fnqWr2lQlmasTN34wcI5ghasUEz2zTV88%2FKst9uwQPgTNVpbgIkLGN7dcPcOvM%2F33tBROQ2vywrkmVpuMvM1tciqF%2B7g%2BoaLyCq3sIKtxUPF%2FGkl5DyNTbJeiz9LXEq0UdkgUSiGCKvEpWt7FgOeNOjf0k3fj6dAodUtaiJtbPiv6XDcxqimeZt0J%2BJaeBvJreVKAZWn%2B3lyyNwx3f1cVWC3oTWT1IzzsaJhup%2FpwjStF0r4P6x7kM%2FlWlu64QCNhoAbUjamm2%2FMrVnjFgmY9wnr7%2F3ouaQA53MH5X6k3vIDv0I5THYehtfZOkDvjoeQtwD6cAl8CSJYM%2F3hZNJFSVf9B7MCaX%2FGvYdIhGJNJAo844FRpIT1zxLqoyQNETUFdsQseuMQqgH9CPcQlzz09s6B4Tkt3AczOVk8v6t4I4sAaiLKy5tdiOcfVWpr40SJ%2BGizVEUTHrWxUDrp34bADJBGr2AtEW2r5rWYu44Eowj46JwAY6pgHgLWFGDceL5S2rZbAPenN4DViSiP082RLqrD14RABgjzdzimxrLnz5Dpz3Ski9zYc2wFmnuO1q5UYMYCC4Hg3bcWTiVa0z%2FHjau8tYj6%2FItNHWC%2BeDNZlaCft%2BL9plne2eGQMoM2Dnfc4Oh%2FBDJz30%2BkeR9sfUDOUf2tb%2FAzRqR44ulnU253%2FXUrtoQpk4Bqrb5bhuaemtzAo4DI6YldKFY3Ahlmii&X-Amz-Signature=71785b56951f06c1a5e9d8bb946b6be5b8ce8b549c8838a8f2e221b76b774ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
