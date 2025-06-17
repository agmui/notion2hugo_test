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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=78c664c18b87e71e78ca705581ea7b9a25904ca9e0bd52b8369cd5f8c6950f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=20e3483763db14ee8b28749ed8b3db2a24e1d3f2145253fb9a6c982447731ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=0a008d5399e8216789474906223f8b884e37df5a4beb026be8f776a18b678751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=ee6bad0d34a550b5ee746528b4831c0baae18f5c3c516aee4cc72136953fcf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=9af0e624229b6bfa9b780264932024b9c82bcd013776a959ac1d4d153e0e0a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=97891e51889ca84de705161f73c370d3c6455e8c44f63d293419e7edb3e5514c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=2c49190d68d25981e72327668681b6961d92d738be8cd9c19f4912baa85f4e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WD3EBRS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtcG1HWRtjbONGbRVtHFN9c1Je9di9VTmGhQBz0rY%2FEAIhAJASA%2FG6JsRQot%2FADb0jUpd%2FDVTrS17JisX2rsb6lEgWKv8DCGwQABoMNjM3NDIzMTgzODA1IgybKcjqk%2FJBMHlFTQUq3ANcmipfR9ROBZ%2BxUXa3Z%2FBcJ%2FVsu0zNW9DsKlLMVyMHGzxeBUp2RmrWrQ3EPklpWs39mFmb8fVokF5F4OpgKylSVb1YplKHfv0ruVItt7IYPdoDIEVoZoUsy7OTwwd8Q1QR2G6zht8UEfJVKc3OrbPVK20g%2BrrkbRrz72fxpspFTPt92rj1rH4IOb3lrLsh5trSWpKJ%2FagVAwmcDzaNdpNmUL3b%2BHSe50GFrb8wdtxtZFTryOb4js4g%2BeE%2F4oM%2Fs5ne9oW%2FQd7aVcTP9kw9Resf3HtNthxsGLvlh03w9CbxFJeqBGwjawBzJ8g2LxW9QflCuzULV2xeC2018iyQgYtlV%2Fi664ysqduczPku8FIi6MN1AkQ%2F4itcUYnc3FD8Mtu14bFKtkl89MTIlPC4NxHYtWksXgLRC8ECIWyQ8JC1f1S7fjDHgWqhMnp3YwOccIRsbDO0w4dT50WP2R252L4A%2FojlJL8nAx7JO7zs35kqdtklg6%2BkAn7d6jUKFyJwIBesKtYj0%2FwlyYqYCo8len09KS%2Bu6Bqn%2FCJ6uPiIz2TL3jTBKCd5UXsFEElq9QNkFN8Yjr9OvU8coduschUX4ynUt8oMfnX8Jc3m4K11eH%2Fn8PXg2BIGegkJj6NjADCuwcPCBjqkAZqsuP%2FGcbaY7nHEoAXg6n1jlftu2U%2B%2BM%2Bxudbdil6TuY7clgau68ToOI6Saqdpm1cLUdFbwDXjg%2Beg%2FYFf7PIImPNqpiD8VwID879TYGXs6XKqkRD5zlotNoxSmQCm0nJ5AlO1n7v9MjCC7qVQshtRzo7Y5TkdUX0yM3pAL9n0VQajuA7Azjnx9b%2F%2Fn%2FoKuqZ7RTTez%2BlFFDhbSwcCrG2OZhC%2Ff&X-Amz-Signature=536dd94dbb4fe9744c2e5944aa27bcd7f4a7ff7b2fe5d9814c4828deea367ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
