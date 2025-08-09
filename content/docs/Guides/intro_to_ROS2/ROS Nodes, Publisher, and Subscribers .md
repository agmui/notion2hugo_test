---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=220a3f03b238764d884ae6347e48407676102a2fd3d8354643c0a4d2ed8cb556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=001033b9abcb80028fb237aa7045baf9bf143b8c112ad54f013db18723f37d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=20af90ae94843965c58319a45b759ef5149b1ac89f6953c9b8382f5a000b72ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=f215522ddf0f310c0988a613971db44e40adf5cff853411aef96f24bf6af5a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=220dba9ef784dfa0e62556be492eabec8b11d7389caf95fd3c854ffe25496fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=6311538c8b57ca856384258192654419d08f76c3c6a5aab7a5f201f90352b9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=c71bfa6d8a3ddce13fb9be8a4f5de17e2cea3c238b5c6f2551194aa8803c345b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YW345CI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDukRk%2B4V1yCPvNj2B19ovbJY2JdQfIu3LOboSAeX%2F4igIgWiDrFz9HQa9X3PeRfDlsK3r%2BhLIaLlRjc2RYAmUF0t0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGINI9uuGopnlh2eQircA0ALbPWmU%2F3iNlj8wOUCDzqxjIk8zBIL0IkH814Y6O8UO69e3%2Bk63PDADLm1nq1WpQCnhOSHQbQ2nf48dustP1FlcE6bXmAK3wXe%2FydSmzNPhLXjUrYOJ2R8OtQY42xmYCpSYKezraFhXKnMz7nyzDRK2wU%2B5Nl6rTQXI%2B%2FOvBeEMGtXBeTu74SlUVYsHNBELvxs12FOTaUNX%2Fz6kIUYfgYZhf5KTwRHO0KQbFeGActgLv2kYJBF1GEFLb2q4%2F8oE1j1WOUnFBcyR4JAQjghiQwnkKC4jtMYwrvrkKLgr8GnBbpOnWpqRLqen97pp%2B0Xhg1ENDZuD%2FLm%2FOMGE5LXpleapyGo0dsXCbKQ%2Fc6JmFoci3ggCGgk8p9k5%2BTTnhmg8spAcj3gLli%2BWo%2BEjbGYBE%2F7SOGOIKDNzADn%2FvhB2%2BcbPuGVRUofBlf3D961Dv3uPChjv9ZmR2RxIfHVVEfSZhlFbCtBEjOKZC5lk5%2BnmNVum0cZO6EX3Pb9xRJ18y1G3XGh7AONtayJVaZ2hP3jvVZYTR59ybNBV3tOKvttDUbkJq4xsWZ%2FanG4s1dTJ%2F4ZQ4B1EBMJBMEjbpiBbTRl3y208l%2FVRF%2Fk7MRxDSjbCZbkwEAdf0zgvV6kv94xMKbK28QGOqUBzYp5%2BPx3IlHuhaDI0AWgIrLCRHZiUU4puk2850DB3hSaMYHgcgKYQ%2FDqzH1wXM7ptOZ%2FVpulDeHvFwXWVgK1jO5Yv7K%2FoaBEStYMOxuGYCNmaboTUvqjmBnsgVh%2BU%2BYFLC6m8F9ttQmcmUlsqUfQBejTRFReXZ9V59b0SQq9ebXdv2NKoRqpopIWexltK9OHNDSFAOEhhS%2FeN5hGYlhNjanAZPvE&X-Amz-Signature=677906dbb477c44b6312993ce45e7b6aeb7536d83d8edd6760ffb637629d38a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
