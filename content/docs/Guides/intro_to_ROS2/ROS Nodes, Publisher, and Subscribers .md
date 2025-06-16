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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=69e24c25e545002ef3b0b5c337cde190bc4510ea19f95df2b2739639913abb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=72f6085ae5ea13f5ef7183847697e7ab2b371d21b88946500ed5c7e89775be29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=56c8510ffbbeac806ab8dc01e819f47531492932a61af91a1398bc7db49b7ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=5b585d63f78f5ce098f2e8aac37a5423e377345842b9f3ed41ef1c6a8ab7f834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=2e7b3772c36f8715eceda325d84ce90e80d17d89530de680c5f08edcd4798e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=d5f765970b4aabb25d187afe43a6039ea168db9ae69368ff0b85c7ad913b6d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=05ba71355d729f71a9ccd3b19b7a6a088af98acc276a97654678e3b3672507e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T62NLN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEE8PiJwiKxe1trHyon%2BodWtlWPX3UVGPw%2BfiB8NHiTXAiEA5%2FQsxEtw3a3G38bD0EegcyNnSIF0vzR8x7V4kBjB0zcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIZMpdeiWvGfsVEnxCrcA4B58%2FipIFPn1a3tqBDaaKPFmipK6%2ByxYFRy7KNtksBjArLB4ajsnc3Vu48z1gM9gPd6KEVb%2F2TeP5iPHDpwiUwTs5K7Q8cdmzaVa4iIYVX17NfeQQJV4mBztoX826oXba9EdbfJKdWI3%2B5qIGWIOt6TJ0UqaigWZBDU54W6FlB1liVKv66PNkkHozzqYA62Ouprn5Y3nhNb%2FgmGdHLg4bc4zfKE5JxMwaDJ2OvcPs3ZPoVVcg65966oiCp0C6bx0drPcQQboivw3O0aLhoB62%2ByJxGakxyUeiNJVOUxatEN28Djo9aevtNocb32RXHr1gqMjwaXzbjwfKwPHFxA44ptlSeIgwLAKjw0qqJR4K7cXnhVMokk2PNTwT40IDTdknsSxF7lrDH%2FtfRObxzqmIkhCNCDqXexPAhZEiYkzbqtsr5DDGi0J4j%2FKWx53f%2FvDaIrItwW1m9CBQNrgQ4fQQEdwLskDcUxeJuU5akmaP6LFpzFNCv0vWlVzwYdr3x3vBHwGAukNQJ0fCLR2N5lYpVLY9X8BxcbTXos9qx6xd8JUDjqjr5FKh%2BGThpUllsWt%2F1HkbBktqjtJRbFVmYdDtynN6TfJo5irVsVE7oeCABgT4u1b8EzgB%2FkZoN%2FMKL%2BvcIGOqUBpnhyTc%2FQ9AK0%2Feq8U4o2qxmr3E3ot5Lvgr7Cbd%2BI0Pb8vE96Lw%2FslPTJTYjCVOpzCj%2BlZQ0poNQtpUiNMBHml7%2Fo2FHCQGJex%2FbQmVIa0XGrRSFViltLoWwVA2C%2Bbj5ngRXyr6jk9e0iVWDS6CXhkUOk%2BIYN82%2BUQmD3sjsN8MMQ6KxE6YVLR5tNIEWb%2BeYxgnKkdrdXo0zek9IXUpHTv%2B9STDQ5&X-Amz-Signature=867ae40c066261260d3850de0ce8f10d79acfe6c70fe358e04c408c56a638e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
