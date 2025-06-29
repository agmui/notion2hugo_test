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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=e0b05849a2c70c2fe6331f02b57d0be9e1c7d93ab4aaae0c38826a446268f8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=3f723a39b97258bc46b653972ca460e497ff0e809e57a20721a3ecf1ce18c717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=e32707aa2935308e15de52c0b91c0bdb77b26f0bc6c1940e1a1ef7d08fcab8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=379a95d0281e6f84760c537b1d994730aed5f5775512c4e3f5763372128d3c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=5e4672b37bb97d46b1befd2ecc659e91079750f810ba2c666ebc101a98935c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=12621f96f5ba03d2c6f1ce309bbdcafa3c6a8b2353050976797ac317cf695f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=44f67a78ad3092dc75af02b2788bc3d06adb0394b72b4992a1fb685ecf8bb8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y27JOR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIR0EJ%2B9VIKiBv0LFfg%2BgjKxVb8%2FjdKfRt%2FP5c36hV%2FAiBqfstG%2FzkLmjUtTNnjpba6lBtSk4SPk%2BaWFyQSl%2ByNIiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4rT%2BbGka2g1BHpqzKtwD3LKzgMx3PD0CEFOgHm%2Flj0jqx9adAm5vZCP1H0MKxAQhVpyoE3AqxPWN68SDGtPGdQZAxHIvsg5bQQDlxP5Mwzrd7UnzII3RNCC6B94snBZnHe8SkEpm5RqQzoAceG3CAv3NfJYHtgKI5wZ1KmW%2BPC31tfuTIB8Rt%2BioJSUk90GncnskeeFB2PupUNT0ebgHiu2EHR2m%2FnCQ6%2FPSGvdw3Q4nWVnpmzvnEcClH9Z6hilzo5imusokNOMQu76WLlX3Q%2FxDKRQ2ZmRQbbLqpgzRV1WDsStyTV7ZYHNGfbCnn1ah3sdBYt653xos8v5Hu9UZLwlxd1IDUpR9b5pMJPnAz9gQlED2RatU3fLPcGDfYNON%2BUoP2M1qMZAu%2FIhxnUWzr6ylfx5p14jZt6f9P9%2Bcb8n6LPSytpdef3BtLgy5auaj089vRN8GyU3FJABIC0WCBDU8DCkpNo63nDpN5Tz9O1jcU6t361v31t5NljsJKRLhR4xcew7zvlg058inZIOhWCT2lGjsfCf5TxLBOR00b99hD8cBs2SRTfQ6lzBUgbAPDklFMU9OgqKA3jhoc56IQwzLmY6G87dsWwydw8qvRWTnbvdvkq1NAKzAMDmZUkc1oMaCUAw%2B9Z7f0S4wt%2FiEwwY6pgFuNT4eQDZDUPMUzLHHyI60lezX6hO3pvwWA0uHFTp6mWwkMW8WTFqLJywJJsX44BSHckGYxmgwVJGXBkXWSw0zrZFxrm0H2YirDPZ%2B%2Bo8aMKAmW%2BgS2e4jKnlOBNlrf%2BU5TIYarBCua277sYs4EBaJnmdNeeHakEf6CBxor734eWlgMnBDBzoO3q8ylBCOaOd2LXn230fNJLnk8C0k7kzltQXqhFlz&X-Amz-Signature=16179aa3670f1531a413ce0e59c44dfa97ce22eb04deaa72b2ee6c9e71aac762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
