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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=61479482d22951f8a62fc6838f5d9343194138acffc2e1dfc73ac406a6006de7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=feb861cd8b7ce29f57e85aacb19fcd10cc463d46e2185fa98dbb8bf892526cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=cf521d1d147a875773f5baea0dff842e31436edec07865ce14ca00f10a32554d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=77353c235806e8cb67465cc5eb4cc9989913109f3732390afb36bdb3a0c52cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=a0fa85c80474ce249eaca51ab4afcd15c9f925a32790df398167633408cb66ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=5b08ac4c0aefa88e2618c0487b2acf3eec89bfedb0ff6bda8b9509ad27d3037c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=4ba178d202d0f1af9051305d89f4f2ba6499628cbc7758d8c95f4ab8ec641042&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUT3MAH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpftrQvD9NipMCvHPica5YP7q3HEGN0VrZBGq%2FfK3G5QIhAOpGeuQFo27h6nLBBl65ZV7zifOGxP7i3ciWwm6zKLpPKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYTFUXNMnDQ6NwmiUq3APBbFg4BLRASj%2FCphANn2K%2F%2FrDeHJ2K%2BEOLlg2RkmaYpt4JQgznMl5pMN1Tmye%2Bt4LQKOfESog5iu%2BJDgZJBi9NXyAnTvMk%2BnDAh%2FjteSR6sGbGIg5ArsNHedTkr40H11Y1YZazaTIVeavjd%2B797CXq4CTZiEIr7uwMQvliIbwwYUq9GiX0mMn6KoHlD44lQISOR2wI311LcfhVB2Hc6HenpyvGljYBRZZjVN6%2Bd8sTMh6nNLqaYysaE4RlnXS%2FOuWNcrtp%2BJm4ttWfdvSm%2Fs86ed11C%2F4lACkotVEmqGqn5NFDd3PXGlQnPRF65YOonLRoqxmWgyB2GJK3g2Yzx8no7bIujniDWjaGeVzWjhbPUBrycEmlGfgjSDVxTzpa8JI30AuFb9TmL8YFMmMMYu2801xShAJmkSz4v1VE%2FGCKx8rDax4nBaJPWouLl7GH6896UsPAVoHvrcLcxtTQge6WRp29P6eIyeZJPDqrMRiGy1t3JRrp3VZgrycouMkbKMWE5PO2yKgngg7fYl%2BXEUOl72cdzyB8lxRmA2Sua%2B4IhSlXibJdnw6iY8J7TfjvaqH6OeOTJ6B8toSgBmUf3RlCMq8eyVSr2KFluH5zfECMNpbY4fabjHUDfs%2F4LTCPv6C9BjqkASieuk%2B1Uo%2FPsr1heQAHD5uoDkhLJ0esuxcp4uq8TyMD6LT4eHidVaLYPV%2Bi2hOuj6Rtuc8m6YmD8ClCpmYCBTDum0dPbZbStjK3XpCWpd1GK6NCCRFIS5Ktb6KC6SKq8ENGKuR8e57UOM%2FFwkyR7xxEp3gG5KL43z5jvSTYydHv88g6tblUppONV5MejHa3v%2BLy9YUeNh8QInoalKgPiBCLYKzv&X-Amz-Signature=1a8fa81297e9486d21aa343e8c2c0b897650ed1f988fd961a5e835448f3fe026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
