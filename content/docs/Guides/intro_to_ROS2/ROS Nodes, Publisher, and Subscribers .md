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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=e7b2f12234aebb4f34537e3d174d5dba302a9ee15edebdc04c73ed15bbb97da5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=5614e44e5e0d5c2a3bc2e111a5f620dc729de2a98ae451e6ce1d3f456faff8da&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=64d1e1c65ba1e9f38a1c32def0e4c90d07c96cb2ea43a6723b83b709d857d25b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=ca2a232bad0df0ec51f0691519a15fc7174d7e2a5026fca180012e7f3907de35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=8062235b210852ae6861e94f1741a99aa9015dc64664bdb6d7d77c825c33c8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=335bdc82124167ccc353286b89a9003327277c9587296cc4fb27edd3e24a51b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=d22efb048705ca6f7e089f0bbc81f1fea001eed841e64bb1c768bdde96db6e57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOAIZOI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8D1rNEnBBDDhC4TaXs6w0kXJQaQP1sADtmR0K%2BrFY%2FAiBXrhfL2miN976fM7VyGnS4OXEGkloTRrL5IwL3MeIW3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRDDxp5NfIY7oWH9mKtwD7tBCUWUvtTBlpTUyGuvmejTMxsk6vU1dZgdVve2fsyFsQMbEFZ6RokcLkpXwuBwhlkKh1B8ocvW2qllY7Ish0DvW0jAihu9l4NB5CsMkUQKRy7qBr019qykEz%2BdWriZdUFk1DoSz6GqJiDOWMvEbE5Xg4YUPVshO4asJVMP8x%2FH8eFOJ8nEpBYj5j0ZMuKWs8L%2BY1TIktbf7n%2FHmneak7b4eU9f2gSeaBppAxuDDEiUl1DJ8x5yBN3aTwMhta0a%2F%2BZPUqwgPp8Sv7bZhKaMSVYCMsJXA83v2Gs%2FGBDMQ0V%2FbyFhq1X%2F%2FRv7%2B7RMv8KvNKd8F6EO63t39AvGeXvXNL%2BGiXSne167X%2BfxV1K0pCQz1PK7UkK0Z0I2lVRhkNl6GmZu%2BXc9HMlKBgiYsIJgxt2W0vjOkVWvHarLbGtjhEvFHBp3b1IAZwhHfr34ajiIkCyGe7yKJ5N9MCxFM95VZ25zQ%2BMfX%2BW2eT6tbDuN0GJYyt2zBZb2ZiimNRl7123ScOxT5luKybN2EFGJEM4CEMEDcHbD%2FiXeW%2Ftarz2fjUlLhrNf9XEwr7UTyl8ajHUqSXTGUDtD56NGIrZHZc0esMcBV47XiLt0Iakh69BS%2FddSvy%2BYlfU7UZ2GN184wk%2BbRwQY6pgFmIBWc6E1EUrF%2B0vopa8Q8VDHX%2BPOHMGlpzjRrARhfV5qqNa4twiJVNlp7EurB691NehFPCPE77EAyoav5XmOQMakbh5dRKGh6HMh1NVhPVSdBJUsQYWt9jdFeHm2fizpAa4aVBMAdhWzOgxD7obsty27kkFZ%2BbHGSSca1k%2BepF1FSGIPXKQjwGx0Jp4kjyFRNOMyeVfCf8vzeY1caxfCV24OM%2FReu&X-Amz-Signature=26f35f7650642597dacaa35aa4924a8db0d9b807ac934380ade36ee9725fbb95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
