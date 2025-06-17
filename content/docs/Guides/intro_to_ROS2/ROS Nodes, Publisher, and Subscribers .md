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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=a2b8e74cb431764cb6b4c0934d16f543190344a97c6799fec0d008b0bece8d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=a82344d4cf8372c82b15cb3b043eee112ca833d5ce17772ad6492ca036e4f963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=47628fd2966da3ce036bc1045c78dca330122f1f5ef25454e3d8b588923d9246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=30e1b0b1a97bf91559a3335ccf032832893491737aaa3049d84fc9e4de70d21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=2bb6fbe792ec7086cce6aa173e539c8a8f6fc7c24396bba9f4e570f35c77c017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=69d4928223a11c27ed8517e649877cd60e394b4842bb9762f54df169b77776ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=04e3f9d349ace9894f00fa85377588ffbe6e7834901769e73a4d9047f98a9143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEXIWJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMJOKk7lda9e5cV3CwrAXTNDPdcCJsy4rSaQOpgzUyCwIhAKZEnCGBpaHospTkDfwkurIez2YwE41PfzFEss%2B2sYFqKv8DCG0QABoMNjM3NDIzMTgzODA1Igz2GBNbwD7AAzZpKzkq3AO6Fo6QKij0SkGiYKE97rYacedMw%2FZd6T5aos8yzREFnrXNmci6U4KsGtmLfxTazGsmBCWSmZQ10U2WAoFZNY5x%2B4PszyHVIegWb02nspI7oUzTSMSiX8nNw1L1JniHwlEHNwi9CruXYS2pNSYoqR8idJj%2F1XOZzvfa55TwlcWHfU7igtHTHvDqAw7IawDmFNus7Xqb65YDyvP1jYu4U9gKd7rb8g4mBOsiU0KthCGPvbWzBOQm0X%2BElGqGIvKtC7%2BmAeMl2jtZIb6PP2SRVMhQXdVNyfHLW6HJHfFwLroJ41tEQhzkRsYfUeWoV6zrJyRM6tfik6T8TuihDoy%2FpO%2Fo6seoJhwRvAFS1rmNqHLoFUNyBD77MzR7bYGiopLX2sDZTMq%2FXo02jurAbllY5taFhp%2F66IpYy9VfaP%2BGSG8h7CBtovwt8I36M54wjulIQV3zYtLXvxXDMBWKCUVRjEGPmIrY7pEnojXSiyH9k7fFLHxMuNA3qvyUW%2BCEC7NsA1hJBccLjEiMfyQCv7xdyEAger04sxjcV7zX3FiaY1tjmNhDv5LsvTm64oyf3bbj1e5PhhRIG475lQOGiFS9n5IqNQZ4Hk0%2Bjc8ePQWvFqQ0tvTb19DNF8nzst%2BZFzDzxsPCBjqkATv%2Fgu3sHw8hNNHo7AkIy8DS3nsj6HS0lfApa4AL2RM%2Bi0KUWSizpqJAFYhGuAr7W3wvl0Zx7mMR97hSo2nBiZNk7dGqm9V50Bquk7Qtw7rJx7fyQo98Wtn6jBN7g8RkIU0HyJUfZRfyPRD6Ni39eUjisHj37MVbcEO5RGR23ty5BvvMRmQ7sm1nepgIrOOqiP1kdxD1lEcjT40JSluI8A0u8Ocx&X-Amz-Signature=93fb9ae7fdcb9a54364d486e51838b19147a8825ad5f41432d14b9b923791944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
