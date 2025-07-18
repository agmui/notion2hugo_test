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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=6de3166f332f8af8f26f63e022a9a26d05d967e220edecd38eba6138f50d6a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=6d08245b558410f1d0b9ba4e4d774495209e885c10c377094fdd66093d2b5734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=45d8508594df7bff35b650ea70f546abd087b502f477431788a9b3c3b2c5786c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=4237c6f89e8c96de37150aa819c61ccb5b09ddeb8baf14b7594fecbc0b22afb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=46ddc1eaab5a8f73930d5fd31b0868cfde5222e6b1b2b856be2443c56f0f83cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=2ef8df117fd4b038c10bb8a3d37d9bc2185bb11880be158ec85f35a9330f7ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=f6affa8858d83253aff418ad049ff49364eaf6e0deff9ac45d49032c43549ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO6YINH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDebYTzZLsxKH7bb%2FsR2APGAt5%2BDfAIXVf2cmqLG7VSXQIhAPrPojNIHGxjERssNnRBWiR9b%2FgtWsXBQr%2BbsviZb7s6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0dlyezgJl6bngk3oq3ANYYuuJ0iMKRXPXTIBUcnOVMha6hlWSBOFKmIhu1a1VnRY2UkBDDokim2m7OqghW7dKgWbu%2B3227VV7XjTW0P8YfbWznDZUBWgjMA99qvw8YaDUMwBBGhfPpKEJLCvMgCYboL2x%2Bfqgm7oPJOJPz284be9t7R1oyqxv48k2jRNupvUrh0prb1GOnPAqLC606rOEJBI5ROW7gYVG2tVqJDg8mYAveeX%2Ft1A0CssoUixKz6%2FnBuLlSrWj1Wo3zaSLJOhU%2FeOEP1gE0wdgBKwNOCL9v02%2Ba%2BxyuU0dEvgGkQ1ezZI0NVmHifqOUlxIQp4Wi03JQZt%2FHb5FV7U6Te%2FsJjeMtlgWO7P6o%2FCpmAkPixpyJQG5nEQ0OHkP82gtP9KvCV3wdKpjESNMjrdbQtkCiFnzJ9JhAeauKnyeMWFye48nWka3qLuwWdS7wsD2lG2goRa%2B9AQlG6hwDJARjJg6Yh35EJ4pEPsHCw%2FuVwgMWFnH0UbLZc0ePyCb%2FeWMVi6K72UjCF9aOzAjIIKa8DbMcQoPUgG9%2FfeGbyWfopRvyBGWFWeEET6cXdEmqZXGEM5O8d66nRd3SobR8Re6BkMqs3HrfZEbCQyxOQy%2FTD5vEx729jjL9esmkBYXCtUYcDDEz%2BjDBjqkAT71jcStaEdS%2BiiD9sqob1InBnwAjCEe4RtdE2WEF8vzXV9MSKNqqWFVdw4%2BqjxcKwkAQsPYO7AFM497qZKH7Uz2WqRmjkc8lmtubtMLlKz65Cgb1OnxJU1Utmzi8npAGUoZHXMzvk8l5B0mxGh1o9GtCKxNMESPPfxewlEDe%2FvMxPliEi0aQGZzm3oW%2FGd%2F4J%2FqqVHXhn8lkvtJ5KpGx4Vy%2BUPB&X-Amz-Signature=d40e1e1ac82f3eb413badc28550984411b18d3cdc04bceba040809bb81d70546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
