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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=23fa69304b17239595bd832a0ab4c46a8e486ef9504b6f81f66ea2ce48cab5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=c1d37fd6f49d584b1cff65e17161c1a18f11f07058a16aff3117f9fd9b94f8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=aa9f42273c297668690acf23b6e776a3daff2bf80b9e6eab6002ad12172ecb96&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=91e30d1b9e9206d76bdad70b03f4e7a1677eaadf9895601884211e08ffdff55a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=2f89d6f531a914cb643e73a8207b7acaab2a393fea5db0253342ef5920c90412&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=2605c039eb668743cfc6394de8b449c927997bafce3751d5c4677d07b6b575b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=c1ed65f37f47d5238b6f5ead8f3f2e242445ffd34072d96958d67e04e393eddd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAF6JEO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHnhvdEIn%2FrNsRu0RusdYbcqeqjVB67rn8hzGbc%2BV0klAiEA2qTU9RPs6UX01ar8FWztMo1hjbr3VEjggK0537SdOlMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFjG4zn8rr%2FHo2J7CrcA3f%2F%2BLep2N0dHIU3ZqkqWQlndfAAd1ig%2FUIUrUAtfiDD4OqIHHBQd1S7WETwhA9YLF5vdbIPkKnPI4vwf3sDsVUFwsKmzfoDtPfInsphfX6hmM9%2FYYsWE2Qb9EY%2FqRUMxaXU1OcWdKxVaPKb%2BsFtu0c4r4ezexfAJLiRq%2BOCEBtlxRtlQV7bM5aB6vTW5Sz0wKRzgzF6KE32NgG4Mt9%2B%2Fd5XBbDao0M2mDEZT6CcYQ2oUvo%2Bi5sU5XMygeKK2HEHi2d8kKBTDviJbAdJa5mE5neQdSAUS77NswzhPl8C%2FcW%2F47085%2FqHT5ed7BrDK6Ii3EMEQQTiqOl7Ph3ivhM7mc9pOFvVcvuN3cAXYqx9az0gZ1gZo65%2Fo1xaMEy2C7kqECyHOU1Lqln3tiojQCHQAvugeGR4n627wrw3%2BNTEE4%2F0AVpHgkJMTeUpLBKkvkFRfQ9fnhVGpEtLC31%2Fl%2FvjqmIghByUxfoeEqKLaGka8u5R8tbB07QJiZ1J7nc5B9Xej0a8KsIejT5j3BlmaChxVnCYMQpmmJjOeTDnBwRgAknu9EjVLLWq5PGP3BTKN%2F4R3MFOkgOWspAsdn8QaOddKHAsYpfRXRbZCduBOoXHakyqY45VHelDbv%2F2ON8sMIT%2F0L0GOqUBi1tJJo7JrUGcpZALjiWXlwwKeg9RCBjN3tQj9KZpIwgyP3gsjcfgpuuTPxo1IwHhh%2BrJFecamJvsScbN1Mfm%2BT%2FaxWyXUrl8qIT6Jqp7hn8bDBdf%2Bw%2B3klGh6hgB8QWFxuCft66qrL6J3pUdvO6SSE3AORQH4uNyMUJP27hqOG0gzv6RfTWISkwD73YOSayKGecPUohiI%2FdDJrWQCqALy7Af7eJR&X-Amz-Signature=e43b4a813199320db85dd24da4ba0e79ca88251be0cbaa45436a1fe6e92a9e40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
