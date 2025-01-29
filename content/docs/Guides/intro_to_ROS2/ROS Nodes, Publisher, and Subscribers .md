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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=786ae82bde3fb270d65ff5039aab46a793bfc820a198fb3986146c2847db1d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=47d85e99ee0daad8f0b2708c6a2d5447b44cf34d2fafe8e89cdab5aba0c78641&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=eaea9c91e2a273e5eb830fc540c43ff74b53cac63bad6716137c506286ba9d48&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=9375d42c82c113650992ff297b0b92a6aa3800a67aee87900203cf2d7b9640e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=229dab962fae8451a499f754883b33d5d8c1a6c2ba344b4ee8ad1ab5a9bf8ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=e5f13ef854d8ff0ac836cd94f74d8d77305fc8c09df8c3b7db0ca7d9476c4ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=9bda404b74f9bf0eea1e80cada891a7cc1f9b3f34f50d69ee19ab24ff289092e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5F2SZY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6aN2XfYEpTXdrR%2BT9Skmpum32TvzyCknuooYOxZtpAiABGz71NRiT9fAjTOBb0Y6GbmM%2BrC9aHtHmKOOzzeC7rSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOK9Oq4Tv7OnJ0OfjKtwDBXJE11C%2FCk7s41fm31jTGHPgbogo8VrKNBivo4VcOBoXjH5kHnPaYx3xNQlZtTvcK1%2FXqrhD4%2BAckB9Oh%2BBdFA4Xf2glSztNEVSObA%2BtWZchqMxI4QDm76JiLZFt9CQL%2FIA2EwzcDr95%2FM%2BTO9Ochp%2BKCpkdCLP4AUsrbgHsKxUowXBRNqlHrhamK8esP032T3JRfR1wagat3c6bHWqCLkmNDoEiY57kQxnG3XPX6JukPcZILCHdFDLyGbL%2FWQOXq8BqDzmUp5ZnvbUTwvtOU4vNVhg6zC0IFHrOPIELa8%2Frhj67kJroyu8LFuuhU3O2fadOMJ3RQ%2BpWTf2W0EF%2Bc7b52SlSHbdZ1I4F1NwePen6ZRJRA%2FR2wES7JaDjB9LCbkGBBJ7J4y2EuCk6iQx%2FtoBrWVuXnyQ4%2FVq4CPYHiZlOYt3v21mRwcxIupwbGZcc%2Bb5Jy5iSGK3x%2BwtaM5scnnsM2gk%2FKoniy%2BFg51xQpvSa%2Bq1kstNLDIcwFgYwxgJfIUHn4C%2B0GkW%2BC859qLJJ9O8yTQ3u1OZ0k%2BLrA3OAGzV0bHfBtf%2FFOKDpCR8upb0NQoBN4BIywKyzkM5CtLyQnv%2Blmp3Jojz50Lvf1gpb8B7CA8z3SgnNLfBPtBowr%2BnovAY6pgGSgLjaVdS6uVrliS4xvx4XkzU%2FEJSXkBR3LaajAdMzsQsIErXbET7WeI%2B7g0eSEvNs%2BSihl4%2FasYR9cqpejlXrQNK0IPeMFcBAlZcNW9m72GzPXjorAiNJEXOKH6SwdmI%2FS61WLwEu3pWk8DoQNUQVq%2B1%2FQbTRHYXAjS0VZI3pkS3FOdQ7S026IEd1b0g8M5xRAIkpR2b6MhoDu3m9xpYWo7Qy8820&X-Amz-Signature=d1750cb0edafae33afe75c8b0f75e6c4cddfbeaa40e19437dbefc1839fcea27d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
