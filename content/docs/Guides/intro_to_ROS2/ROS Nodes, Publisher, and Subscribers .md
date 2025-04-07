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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=3f363f2fe3ec7900cbd7cab4fc2536a905458cf5678137898944c6bcc4f5c9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=6ef493ff40a91ff816ff9edbd7f1df04ec65e8c9a01e2c5946402a1ec7e3a79b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=a6d5f0bafdf05091997b1e4481c31be72c3bfdae82e85fcb6b133f882426ee4a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=46901db1339dfa3607a5f164c7b7751576fa55061c8283066e5aa9a140a60709&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=dfd4974b2a8a4ddd72de3dbba767b1fb48eb8f85bcac822268f312c855279be9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=a44693a66bc9d80c9292d4afb97af6142adc876b79bcc38b1e519127db3f3176&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=b3ee7d89403a78d961451e4f9458a7a14cd45493a52286453a816af95373b711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PKF4Q4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMzNM1FyUBf9O464agobPpmPH9Jo0IVJaKciFvKZJzXgIgByLYSDiOKlAzKCrSSeuHAqIDk9JrncPE8zSksFfy0sMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJA0X%2Bb4nMzcDUavlSrcA%2FkEZulqPsm%2FO8%2BS5%2BRVy5MpBK7bID9FQOS6vjDWFzzh5AHaVxWkZb59qO1n3XNbYArG0v4tHphC23ng%2B%2BEULMC6x46F9Fq5vtIMXdjjR440O8CuDDTfsI7dsB8TQzwH4aKb0Ew2L49hZRGtslX2ZxuNR6yLp%2BW%2Fq%2FjzlmO4wmVGxE2Xh1s5dcLLEcfjOSTfNQEs2kltCM62j9gWu6E1JzSFNp8D6T8jLvJLyPYg2sWgheWpgDkW93aMGhpYJ9nG6QdHWGXEW0Fp9PLdVWQ2SMDJ1WTjAVCQr158AEoh0vKGD1Qqx0HJkgUVdRDvRaqncKnALpEKxMnb%2F3q3p4p4G1eAE9fMmdw4ksnRFSK%2F49RLR0mdRHwoE8KXNQuyKguE8AwvSmYH4KO4MUwdCzisnZQP59llCWt9S3uNioHVUZajK3qxnUiUAsu17nmUzorW%2FAIDDfbzcWvVo0Ub672Z9bURP9VvDXRn%2B6R9SnHy84hnOTfH5Y8JwsbmHQiT562TH5CsWZwtnkhNmTaXvDUckWjXFgW8s751YV6ecfwlEakavv7vb0rihkHK1XwVhrez0Wm%2BgAaONdWBaPjf2Hca4mgsgAOi9L4N7PvtJbONKX3TyolH66psrUq%2BggVQMMyj0L8GOqUBIHYh1AkYngL%2BvB7j0IQDtzCFaDyeM5x5VRp4fpLQz7TgIk%2F38gceovo7%2F3KDTHUylgTpvSmSOlR59pZlbadqnqnoU90aDdKGt0MOSsc3aKuMfyrVnqdqdvGv6xDtzUahRTlWS4HAHHn%2BISp%2F7zC2IVcKUfSr7%2BybS33NLRkdsDBqsxPmD4pl%2FNb9dGG8YUhFykpOkaJSYdwy8%2BwJ6WgLVHs5Zw4d&X-Amz-Signature=4d6a321c65e67e5eb8980711c9990396b6df8f84db91c0e416e3830cebbe66c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
