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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=1cd98baa7a9f0ef36aabdce8ab6677f3b855697398427f66a45f4196a1cd8273&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=b05abde7a4adf0b07019fd42cff81afabbf4ecf35888f8f6e6b27e337712f804&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=27d30c1d5c1b3b4115f3be338ad9afcda16bf5a020004c796b99bd861f6ecb49&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=abee46dd104da58267bde673d1f9772504895e9fbbf22ea935e56a3653bbc838&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=6d049c1f880b193295d64abb943fb9cdd099080f1c12351bef8cf1f9465fbf9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=32973862aa0926bc23bfcca12af722fa16e6e7c38045a8866ff20ce34847c423&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=92abd389a95c1e189ed56df5a9da96072665a1518e776cbcd9c52e57430098aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HJMPAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCjfDw3YvnN6hyaKVoSglehNgq95FxptPpwhWTnpXw5yQIhAIkk8rQzK4dkQtzDw3GrOJwJbtl7YSuPHoevdno8bmNbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNiL2%2B53bfzU0hvwUq3AMyzX6YJnmzRIJfihgEPxpZq73N75JxT4%2FOFddFYku684jgwqESXCnqFzia8qEndnsMkxSsFAh9efDCau8WH0gfpT1rdtkatlbXm6RTfBomClfjR1brapc9UrlcVZ3UzB7omN3MjMd%2FcWYJjMGlnongYJ5or8vNi%2BTe%2BtUXKchX%2FaPR7sovv6qyBIfOdlTeyAOfpk3s1%2FOWjKYaWXHQo0XVcrUL3N18JkIus1nMyy4VhexcmbBYkbZhGlEjWTnV2PLd22SLh0B6NLaIoQ3lqc7bMGs%2FMW4W%2FA8X6ILKtd7rddUjb1kvMsnOCivcZuZe%2Bn9eJF4EFPUpo50l8qoNVQ3zJcMlcDdAVNtInRGPq4MsFKIqTtqFAcZRzwAPWgrT5e2OUvHrNDH8F75fOEAGPBg7t%2FcPUF7qDSZt83jRhewxJpygopLRbJ1%2BGgIm3tsDKRDEjUp4ipKvgCkLm0Xg%2BgbwxqbGjZNGBqcx4WC6cRtR8LGeyJg2a6nxUDLF5Ve5KCQr%2FZGpb8rbHoMffULOjdWRDrAH55%2F32xw%2B8fI55Dj33wC%2BHcQ%2F%2BOT4sSEFPWLrK5Yv0%2B43Bt%2B860FgQFnbq1FvV%2F%2BOfus8XdNaYHGENvoVa%2FDpp8RdjnCdVDQDCzDtibq%2BBjqkAQS4%2BdmQK4YNrDmC8ooO2GTUDil9cgw4TQ6DBLWHfJd9MagmJxgthgo6tcWnmjnxxhpdBsOxXKX50omRf2gxnqLlE%2FkZBXXmCmGam%2BtPUbi%2BZoEJNy0HH9X7aDVB29sfetXcRBXdSipVv0WgNpdCFgcx8K9qjVwdu%2Bz6ef%2BGS68wi%2FrNAtLYNPCfNcu%2F3LCTE8UhSuzAufBhTzOh7ZNAv1hPqSyk&X-Amz-Signature=37a038bafe20ddeb61ce9455d3ab3746e4a32499e61b3165a4b4b4f372702696&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
