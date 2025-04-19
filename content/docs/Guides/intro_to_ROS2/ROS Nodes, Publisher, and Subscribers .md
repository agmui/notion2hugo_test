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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=7504f8ccc3be3ce8c3eb803da1afd01fd15f0db4511ac5ed85717dd2dbd08204&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=2a676ce38bc2b3c7ef3b5a69642c5a7aee41a60966b7de6260bb79b7c6bb29d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=b4a3af557e812ffb65ee0de9567d28a65996bd2cc6fe34bc30d8a64b02553d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=5a5fb267439177c8f237ada9047479ed6619440ff8b2c948f096a8b779a6d25b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=3db22f4f52bff28798ec561ada28f8e76c9e4b10147e3ba1fbac62da123197e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=1e5621f33903a64d2dd82fd3dc95856dd4134bae509a082fff8a9ea950ee8db2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=fa605bcd953f74ce257453ee16d3d9e2e64e16da142bc224abed9890e387a69a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2OTHMSQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgmlhXlZUPymjFI51XkJnUJLJ8DFxT2mQHhRuJ18hOAiEAvK8asGd25OoH%2BnRvbwUcN6MT3O75b%2F5sAENWs8LT6g8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnJvip3OmRG1ffNWCrcA%2Bu3vaMy8J2VRycyq93FP92ox7GmaRoOaDH2Be5GTFm7Fvt4RTKs1S%2BS8BburMtRLz0%2B5TPwpMVp%2BUFBZuEr5VyTBLjd%2Fc3xzbeEiEahs87%2B%2FcUUGLnGvVqOpgLNApKcKvpYYhSc8mHeDZoeR0Wh5BsISN2nh0ClHSP6fAARWLLAzef%2FpsYZUVllahQAs4PvUrWWkOmP3iGN7aJrVOzHXYddVoMKAzV9edVknro8otudnUd%2FdGv9auh%2Ff1KLEKkYn4bvS0bKvofTh9yFis1Rp24UAMrQ3jqzo0%2FJXCzwd0eWTtwG8W65dObE6y3DR2jfaMB9Xzfl%2B555DMtj%2BISQr17aRX8cvdP9FLq6vknE8bxD53r8Eq2P2qSN9HDUMHhLxrBWYI3dlwIAY0%2FQB9BLY3C0QDPWAtEGm2BzWmb4j3CNStAwg7mYPmiNmsZr7kcNX2199%2BfKdrBBnPnKsi7qM%2FmMcKh7RphAtsvc2Nln%2F0qdfQfHUO8CMfE4BA9UD4cyPhqB7XNVRZ3cebURRTtaVsrr%2FL%2Fsc2mQi5BVWJrzo4hgSrlRucp8Hf6T11bTOOUgle7tTNi%2F2L0g9nhGD819FuNK198wearYvWOyQNgaRjZapEPXxp%2FKLkW1FnVUMJW8jMAGOqUBVmDOaqfrOyxaqDwEaJhXXW6uKXUO6gdaH9XKKPZwD2Zg6MX7tSgwRtpe1tWbe2CT4CFfP4KsrYBrZNWQ7iUYtOkz9CotYAQ0bTlYMY4HCgJm8ozzMiQ3%2BozE7tGaB86AQWhH%2FVCOQd4fBvy53eSz8iYhbzY4ncuaO4niJY5dskD2LDFBWlXxVURhzWd3OCWlE%2Fz9%2BfXd%2FtPtSE3vCKK%2BEH9kuING&X-Amz-Signature=3c98ad2961ea8c6e2f35be64d1c2aac746620451672545527ae16d190e40a028&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
