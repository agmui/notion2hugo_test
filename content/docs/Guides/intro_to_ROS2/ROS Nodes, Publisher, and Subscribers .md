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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=0bf036e848fd3742208185cc82caed3eb7a92709a7b088e152c5f5c5e72a1a21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=3fc4e76900b890087b2b2720b3981b0ab803612beeda2f74fd59d543f37bb8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=05938281ae179ccc3593e0256c4213fdef0ef5eb0b5d8ee84741750702089e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=76a48e96fd7558b3ce653c3f880ac44a9ca368b0ea921606b46d53efd429fea0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=420e03e390e9caf3aaf41f1f3082e82423cf2e267b4efbbad56b19b4130bcd9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=34285ce008a438247c6641b7f8db72dfb0a22b14f0380f6c8431e9f7b61e116d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=b3c31708538ef0ca9adb4d2116e02e670bc258ea3fa22932d9404a6bf11439f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BX2CHQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD7Qokg4LHmq7wd1UFrRwVZNT5alpQ8y07qG%2Br9KRKXsgIhAIA2FGqOL32JA7MlFykhsNs55hYqnkWyNQ94feQS6m0GKv8DCCwQABoMNjM3NDIzMTgzODA1Igy3vx9%2B6E5%2B4e2J5XYq3APsezCQMAOVTRriZQm4Ekh97E%2BoZvh4mPpOZqhAF21xlim9bhSRGlNE3x95M%2BWZA9yHM7OyxzbYLrz30BrCX%2F%2F53K4tI1GWoTx8Sdn3GhJU6tQ4jao%2B8lWbwweikIZSJhe4TZAK9FH8Seiv%2FCGj6d18WT3%2FjaHnCtuzvMaCUopSRS5la%2BPspvUzSnPgFxWPMyh8TtjIy5iQqqzqqQQf753dBMVxxC8UTZ0Q0b02ymuNgphbC3eFQdKAO8buKyGDDkubRKXWSCzNCJzCxqtYjPGc1g153tyCNHTCwSUrkSuObz3H3g3x%2BcZd3to1hwMx9f53yiQr18H6Dd6OjOX01GGMPXK%2BP8u%2BfqySVC4%2BFed1BwTZOBnLacPtMB3tTxi2WB9puCzHYvj04Xswn4Li8o2FqUlAaj9l2ryr6rQ9NIUHeWMUBAHo4HEjUbaqSfZu6DmOlgTiP%2B%2FJaBu1RhZ0INPjbS%2BOwWmj16Xw%2F%2BStNdHYYwtAAVryl4utFBjsMABFdmnlKfYMJg4228vXIwaemw61fgHraoG9B6cMfcTyMz3LrkKyKgrsY8CVDyve2snh1mHUbOxXCGlJBNZ%2FueHJ6jAsCqxzqfOAswG9j1nYmY11t6Z5tmKmqve2gh5FyDDVz4DCBjqkATKgoknNGbZoGX5wJA3SengHlb2HoHDTIpEocI2%2BSr88DyYOzUR49a8SGEsSy9bhDtkusiolCI11XlBeHU2px7CWms3ZbTX%2Fj1kln1F029tN%2Blif0%2FuKs8mS%2BRm62MKDhbizwcHi2dVy05X9%2BjEyNoIEOZ%2FMChm8IN6KZVtLnDkNzXnxuVjnhLT5TgGI%2FCm%2B4vOLfczsQ8UIcTGMfGOSOOGu3L3N&X-Amz-Signature=8e6b334265184d84c995ad8570dcd943b01942b1d07f7ac4dac9016f99b11a84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
