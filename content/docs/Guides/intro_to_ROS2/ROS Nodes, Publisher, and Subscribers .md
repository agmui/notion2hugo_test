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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=2c1643cf2e5db6d2392c26b9b2f24bcb3ae18d5ddca391e51305553a09d77069&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=b02101874fb525082a4bf8c7c633aee2c485d0adf228af507900ebb1625eaec3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=9530eeaf15c6515943512da569b8f058a7fc1a68f6743be52ddc03bc774cd506&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=895e35adc7c148eb8c30d1ce4ccf6a9af7291e5c860f0ce29241eccb8dbb88f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=aa23809849eb2ae734c44be1dc02fc2e59ddd01a66855bf9a5b964f2fed0f0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=76c730a0cda6d6cf2e0968a5d74f8b535dadc1a487b79fb11f5a2e8f9e21041a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=978e4e2261793211cd7d566ee0819eeda1978918e22774d1515d8606f2dc3874&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCBCZKJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqhxCJsQMa2huOtVFuyVFZUoATTrJVlYw05XHrF2wOwAIgBG0XkcaH5lhjrBr9LXucMohR9FqL1bZpZmJFd71oEVQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIdeUnflCz5IgGwxXSrcAzF10AxzLtnVRmd%2BVnS1yFp00y2KBLwWk9oW0ADQh%2F1eGy%2FK3roEeAvs%2F7ebUXOnTCEoPVlrYUKD7YOCmpzQfuBRsVjhNwDE5jZme0kSRAe9HfKKCz%2FYIe%2F%2BSlPLPuVDv6x9QX8nrRRcLHMCZzAQECY64ERhfzSB67pA5Oe%2F%2BLWrb3yI0CIV5drpJDFR3AyNv3AmBxtX4mXWN%2BUw2li9wpIsTHjjYTVllEvVd%2FxV83Z8SzHZefvwqdJfqy4AMOwiXX42rUZE39UAq3bxxYpPELhlFpD8cMGfp51LxCJ883cAuWYPPDSL2mSFK7lFbw0b2mqIbPzwPorNiYE3%2FmjFMzkwnOaAKIqKYXGjzkZlbJ%2F%2FJ5i%2FhZ%2BvaStyyCHWEjR4NQRn2CL1v%2FMlDxQjdXPlOlfH9myOY%2B%2BpmByOU12EpSYQAyFTCZ5WbMb1E7TE4IjbkS9LN0XlSClE9Xetf6c%2Fm7YdyInAkelSQSzjyj3hf2d%2FQdslVrVP9RVNxAmzhv%2BJVkVUgEVh5cCIOh0KY82wH2PzBq%2BZ2T50VCpKEEHFT7UumuiaZFEMmGHRxmEBncxz7zMEWRowGQdNGDDyNIbfUfbEUBFP9D%2BhnlW50mze6z4RWkQBO94cfWiPw35LMOeUg8AGOqUBnC8FrjAg6SuPSzvLzSepvUOhh1bcZwlud0ApPO6I7u%2FeUHrIp4iRWxoClbSba2g5KQnU%2F1J3S3AFZGEhyLZsoiX8%2FPy5aLYBKzXZuLO0wAN3NwwwaRxvndXdRWRLy%2BojpTZcBSxXQxliJAVBbjUabXXvHsypDm5Xvutxni3gRC81UQA1fHgSE1MImEkMb%2BLjQ2NtJnuWPPy9gM3gM6hPTgoJjfvM&X-Amz-Signature=fe9aa2371a59563aa46507d34c86544878456f1ddcc8c8f26466754d2a05b864&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
