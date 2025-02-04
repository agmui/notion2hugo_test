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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=2c1ed794112db91d6f3899a7443d3028970585eb869d52129a9ee03d0aecaf99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=014ba4762b50e1f487996452e7fbc5068722108f3419cc35da86d58947ad9b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=9f0f619aad87b13ce0faf17ee8f5cc679debe768cdf2f7cea5ab3c6f68a72d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=77f03f2cdc68187df0e2eb329da84ff121debb046a1b6f86773352bb724ad6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=c70e9bcaf83aaabe99070b6becf39bc73b7d2a5c8afebd7a02f21e2e7f8dd670&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=fe985ccae04352ac9b77a5716f4edd5e945cd8415af2c5337f9d9654ade7e0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=6d698ee4a443627c4ef15c55c4cf28a2d656a78e64e72ff3593e752ae9b78f77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAWWCUW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIG2lZTPA7XPHlWjAJ%2B6li6BiQD05sajZSXvAWTAc1jLLAiBAVc3jM%2FMSUTP7Pof64wrKWCjyZu0llLJ%2FoPK%2FJQ%2FLByr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMG0PVdn5XWY1Vuz1BKtwDpGoB0lfcN%2BqCbB2MKsP23uqg61APkKobN%2BSEbP30v8353hZD3%2BpWDjTfE1OYnsg%2FcZCuAluvfsRtNldB5hZgcVUrw95fKnrifsOZk4A4ykDaZdBJ3z8tsrSvsiS6pVm2D32nrF1rzlQQm96cInK0223UQzEbStGCzj2Jj11npYUjP%2BkJy0DaOwHur78bIOoR7H3gvP5eyRGuv%2FEDD5sy2wLY7aSz7knJCm%2BYni7h7Z3A07mq4Fbbnt7HYCqbiRhQEVJQRI4nQY92O7vI9lgV46dbTjHNTu9U9FiFAQPb6RJ1D%2FeKh6JzQvzBrDHFKl4y43U2XvlO%2FgqW6RNbQdesaZqtda%2FfDbtrlu%2BMnXHIZgpuPaETABR8Q3i4cp9uX0UujJ0wnPof%2FX1IDhnCdsWSWRDbYy63xyq0razhkyxO78wUcdpu8wvhJBYbGxPWCgb0hPI5CdWRAxht4EYFvB7pY%2BVZl0ZqLA5ej9jeBWKx4pH9g2gsQohH9fc%2B9jLVT%2F4WjCP9J4r9EkCSq954dEsdcT%2BJesb2AZv0VkSUzm4kfva5htZSWIAewbKj0QNEIY3ZvOKXLlXWp8eqylcBErK9yLcsqrW20i3Dso6E%2FxkVJqvmsZ1EsEFqueCXV50woN6JvQY6pgGRrIPT12rh%2F8Mah77U41iuRlRguhH0ar%2F%2Fah3A4jQphBEP59%2BtqFw1Y%2BevxPbOl2eXDawTXNHS4Jxg79G4NGJo8FdeMAyK36ZT95Fet%2BirGrmSz4gwDjokNJ5vufzvzF3uBidDBA7ZLYSAMSpJylJyUvdnhcsmquzm2OUQn0BAmM3PO1uipaCn%2Bl7i%2FMbgJtaHvplEjmquVN6qtvGgLswozz10qIMM&X-Amz-Signature=e790496b497a409ac3934b6612d6a73126f7fc790ddfe2dc4c92f291bc1d9681&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
