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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=fb899074f28b19ec25bb75f0901f5fd15e1e3bb2d52808f2b671d1857168fb3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=ecfa4fa22ff38c075cbbbf2a8c1ff4ea2136abf2447e524165be9776442b5791&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=45e0ee46e9990d43a4f6276cb0de4dabf8305a6a2d24a3330152688441e838e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=b155ec9b1f4f942debd5a64be1c50a0082430679e6a53d4d6bc69e326e9cca70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=4f87b7d9a70905697244c6bf89fe98a53aef6cabd937dfeba648ff96a975a846&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=422f07098547c82264744a4182b3d3e8e8a07800a1211036a8983a555f174795&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=1110cba1305fa6e2c4d8d6cb04b06deaef351ba09e02aff51d4d8b21f179efb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULKF43R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTE%2Fiyh8QUwjDHoMRImZB8Otb33P33eEynYT%2FH7FV%2BIAiBwBEahsuqmUe1bzpLtU0pZ5ejBwSW3f6pW69%2BZj9LsCiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq5JFCbC0hlHHV%2BkpKtwD49AD74v4DJPtbTlwqAWzVSSEGvR6CojbR9u1DdPWU2Q5ulhhgIZ6isiUaNOjYsRSA1N60v0ghdJ733HdhSEaMT7J6uk4rHTmKLVCINN34mPRRQhfaZw5pHQAFi15kLXzsl9IkleqzeWu31zT7UjlXxus7GCo0ZKJPbZTmF1aqxHyfVjrnwxescLAtV4cFyfk6TwopMD8Xy3Kh65TkmAMzQKWYKm2BiNo%2B5bB94351Onk5IUzyHQs2GNHgX%2BtfOWR6zH2KOzxiTVTHPHJG1SLNKrTqJIY2eRP49l49VvAMsgfvjskGFbdFN8PgHhq6hbl2S3KyBRMHAHB9iiADkd12C2uJq5C39euACa9YggGoGrjoEZr%2FilqMXp%2Fbc3CQ5vEHf4yU1pv%2FjEPaXd0bh7B6WeUQcQjTSuc3srNvOHAKfoh5AQayjmvdvU4aT%2BoKdkbW6sS1tiwBR0H20Y7wkB%2B0GTXXifMneEHlOomnLy3XxpHdMxPbAoYa3C7QCfxB8oDfYdZHcaMf0RTIqqQSgY4C7cibLcC4vl1w8lYe57v7xU4%2FuZrscVkzSbAwe%2BOUvGJcaDXrMQrVp%2FozeqjU7f6ozmadhA1CpYQAjWTjlBY%2BcpNbFyFlMMr%2FlIpzSowl8muvQY6pgE42JJjJCFAziJkuslVDEiGvX%2Flr2YPnIRGTTrHrsaw0RkGhG8N%2Br8idaM534Ol7886kuHuAAX44t6V9ZkKD93bFQyKKuMv%2BetDjL3cU7ZdAT7Op1WQGF2QRXEY1lW6R2xxLXByj5Y%2BzxOhxXTjcsuYV9M%2B%2FB9yQB%2FRy2Tl3iSxUXu%2B9jUN1BAm570dGjcUf1K3oMeYP4vaV1SlS%2BRdrAxyD5OiSdwD&X-Amz-Signature=92e016447cd0dd3c1be272825add4ce1764308713895e2910dc7e8ac5cbfc050&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
