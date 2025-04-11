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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=1d10f190aa3822f60c18cd707cb9255790d12b1f27f77d52281569d9945c7dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=dc9b46c9d940ed630ff3d328127af3eb63b2fd56da982f5c2e2300a64e9b2ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=d3f40b5759c3d324f4a1cee767dededfb71b7cb1ddab8155344565e2592952ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=9838985e5deab4e5a15eeaa3ad1df2b521895fc5397fdcb63bd9edc16d20705a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=bfba1708c8b08e81dbfda59e4a6542fce55be266b8d03246a57956c8cc1f0825&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=11d17992e7826e9fe4b4e87b31f8f6400aaa2a989e1dd0c8f81d187fd2f2c393&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=125a9eb5bdc3801c5776d462a9a0cd098583d439cc0b0b9851d25eeb2e290b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAMN2IH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCI1dcGEmtUc484PBjrlBDaXozPhn7FhiyhG7kmqixnGgIhAPGH0X2YOsbEAd0mzo9CDfs0qSxVxl1NyHfKcBgRs8hHKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNXy573F%2Budl5zJcIq3AO8qXqkwog8uyVKYhKsnBExnkWYcg61mpcXTAuP%2BLKWjyQMrvyw%2FYz5rSD9XQBEiMH3YnrI%2F%2FFAEkG3pSMdAZNBi5W9xI89QF3pL76IR6Iw%2B%2Bo3za4CPtIG1fGmqwGw%2Fp7RTTB0n64Sts2dCUt2%2FpCY6gM6oIBtnB4f%2BDAx9tZFlhccfgZbvek4oST5bDZgyvGM%2BCCQ8j3WWmMigcMvjFNvMQK18K7mEE%2FXU2pnK50KfU4v6J8p9O%2FdgmNVlTGVdmNJqq1NQRDJstHnRzcEhXiC5IzaBI9qdwZbsXeIuliwSalKKTJGK%2F9TqJyn1egpoYkivhiPDtylYzgul0jf%2BQGjexbynoT%2BMdXyJdtlmiVphR%2F1ji5Rsmkt527XtUzYtK4TZl9IFOxZ7Wfu6fDMP0%2FjJo6TKCBJTa9hbD6ALgBOvtt8wKQ7KOpUJI0CC1mXNq13%2BrclD12fJIB7Io5YpIA50mHV5%2B%2BYDKtoX%2FqxX1926dNHeCXdrRiwtpsZG81bDQ1uiRWYDj2YwrHSn8ll1FnDFPRLiRYCmHsiZplEZYLynD1A55n%2FXMdjrYQonrab3dtmcOlV1nekyUQI3xKhpDswvgs%2BoxvIZJGIFmimwF96a3kVqY%2FH6IuDzA2BODDS9uK%2FBjqkAd3gwcUiEkGmeh1OcUavTtBc8tjEHtQjXiS9fVNxXYilEgd4x%2FfclX5tWzUR7RYyVEc5AXZSVlIL31INjdDpmdNxEM0vsChoqJbZ363mBwan4b1ue3ptwIZwtGwkjDB28bwIRioEfwm96ox%2BHXeuzHnMBVrGbfDlVFf0DvD3qCFXhC3o21qIYfaBwg3RYZn3khsrFP%2BcPRGaHLNllchSCzHVgOEv&X-Amz-Signature=6d23273e26b914589ead0220e8c872e84f91459206cefd543291559c4e9dba98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
