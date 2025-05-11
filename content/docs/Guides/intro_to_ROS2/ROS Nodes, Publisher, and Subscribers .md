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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=887108b760d12d56e29283283db7d0c9fe7c2ced5027d44e37a3205d6149984d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=4c268c5d8cd8ad807aa9e3df8db161c99f60012726724a1da29b33153baa3a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=b1641c5688f580faa4511032b78fdd7cb8b361557f4441e43b65731b898deb5f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=ccceaa743fd4ff6d703e158526570d782a1d6c8db4be13b94a70e0f2cca83019&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=ae371b2480943e4b0bfb5a183a30747158fea0989dc6e3585cd6089cdb314b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=cfc05dd5992e6b084c3635cccde052233e100c915691930c30c463cd1b6edb49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=9dba26747a66da1d1b1a18cf6b15eba812d40e752d9ef8a4b1c8d65022813831&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NC4FCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHe04YrDxv6Vv23LMleL%2FcOAM0Dj786UmAWeMn1CY5hXAiAdg8%2BB5tthIDSktPEpivLUt2nlTYzaA55OGKlNe%2BZQbSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiEIywstL1v3CIpoKtwDgB4aptZGufa8Ps5zqbrasUpjb8zDWIwrP9p5cukS2R6hzaEA6rE%2FakG09GPbQXiDRiZ0m0TN%2BM1geVj866IVHLniFLypLK2qgxAhyF55T5gbS5dJo8HS82NV9Sec%2B6TyFIz9BftKwi8Ke3Uaw%2B9auEzXUFfHz6p%2BFbElYWwn9FtWPhWpk0AcL3pLmCtA6%2BZhZRIAMT9IYLmRDrcz%2FsmVCEB950Cg9WY4v81SlFgtO6WzWafwvZALSpj3JV9oc1QaIwSpOPROfWAaVy0BK3VcksOIxTZYSA9Ea1YTrFO0HrYw7%2B%2BFLWsHArX3q9H2O53SUKq0fpjcxeCDIoy%2Bn8e6svNp6Jj5PKpveDoLhVwtkSodMDIA1MMvp5y8yPeO3DUSNT%2F4SQEg10kIpJJuQjykRzKSNTQo2ceV7fK1cAAZw84EsNLyTgi7n49u6dZrz9x13Q8iCHyS6NR0lmGpyt3JsmSFAsZZ2oUOPoD5nw%2Fbv00Q7CZEorD5ErdmUuydpEu6PUzXB4wTeAau1ubW%2FioThCxhXBgmiAVNpmwxlQnRs3nNfE3ya0DkChEHlV3W3NL%2Fet4kPT4%2BcvwjX7Vyt3qpfyFXbdZeZIFK1Ijm3MkHrKasOwBUydg17uQfhJYwvfuAwQY6pgGdXFGgNsA5K9rX9f8ei9Ut02wGqlM5jzijLBJjMWQ%2Fe%2FtpjdDjFMgvWOCoy6vAzoDJ6OSDszPJHJj5wQ%2BkVwA0V886mATIltY3gke1X5Hywf2%2FSYb708l0OnwvoMmlb3rJR%2BQgBMsV7fh6o36u0MOlHUsC6F3seJtRgzsmcAGbmAy4EhgCD%2F0kgAbyhBPHemMZi9LA%2B%2Fe0BGhhgMkR9qauUUus%2B6Am&X-Amz-Signature=ffa29026980c150d57b1ce228a4c8f3590c5de48a92cbd0254d18709cfdd7ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
