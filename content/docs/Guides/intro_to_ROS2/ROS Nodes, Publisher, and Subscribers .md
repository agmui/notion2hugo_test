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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=39024543c10c3cd695c4b360b63d3042601a5bfac471e4cff8c9fe9234d3708d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=ad97edab0d4b110a97eec1d3f525d4c6567519d811ea1199f765d61abc78181f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=a6ecae92d0a4dd23b3504c9a03dd529d8b11e9a66a04f5ed69ec72b7682a9521&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=2a1bc9295aa14465fd4969bda0bb6b921f97994e747d8e2961cda9877d952648&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=c3515a17e296d123d464814316c647f3c5785e4ab164a9bea578252e692ff749&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=8a9908d5c2743365cea79ce9634ef1fe652254ed22ee28ddeaceda779bfb551e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=4c3647fc1d914cb6469cb430e9006e6960e7b59b46526972961af2b743c4fd85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KYG6CG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHd2HNKisTsXWHoF1PNikqJDoPZVuvRAegqx1FCw1pRtAiEA1zmyjnAm5KYmRNSpKxSzwM7C70Z56%2B2a5K%2BadQg%2FCA0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBY3CNLwMl1sFqPCrcA79FsIVCkZ1tqhlZWImll%2BthLc%2F94m0XzfN2LiVD0HtVDMDdMQTzxohdPX2ieapeujm3G5n19ty4k%2Bd7qXzeKHuAmIHhCvyBkjF5FtNpEcG7UCkQOHA2gvzh0n487PppnYjwwviitPBUC%2BAFIvNPOY2z98kd8dCBxOLXEcAtEEB9AvobTod5xC1NL1eRtvTGxiJk0Gci4z2Q1Tj%2FgRGLcJKfOCyY5tSDhJpvh07X1L03W4gERI%2FG29yjOLMleY5C2g8KFUtZT%2BtQbP%2B98imnBfprZdBCj%2FahDVouxByi%2Fj4lh5PkjpWP%2FipxMvgJ%2BXN8Cj0X4Es5BezBdanG%2FnfvpDh6KNs3amFAmHpAKlEMyhhGNgf5wPDCtGnd5ZBpox%2FngML3UTTGJL9TJk5%2FhMW9%2BupbUMvVr9qPfYeNG1CyYrq8wVLHDPYv0quvcmUps4ldswOl9i1oqvnVM1RnM%2BL9jVolI%2Bjz6HcfM7BVuPw5z9V9erUdiVZFUNreQEP%2BF5buz%2Fj7xJpt3QzUx5fOMjaXL3Urm9vlq%2BUJXbnsKN2PQI%2FRpEB0GsznhbMbqyFYwLZcewJ8dA30ZRFtucFug2AJaMaWgFyuC%2FLzmrAfpL9myLX2LRzF4TOBnsbJ2UKbMNSa2L8GOqUB%2BhRfRf3hWEd%2F%2BegcLXFqRDgujXj0P6n2aw09dH7O79iWi22I6RkL%2Frw7NHnQatjNyjymry9c2ubcBU0VXathswD%2BP9R9XO8RIAytseIe496%2B%2BwwEfhQBhNFdt5hWTMZtUbGr5WFwKB8iYj9J634tAJzQB0e62aCVJ1s9FKIKPOap7n3wjeiICj00989jDO5vQUqJ6WenwCcHIbY7KbwhuUieGC9J&X-Amz-Signature=af89639be133f2c809b2b14f842296661610dddc1015b7626bc29c5202703714&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
