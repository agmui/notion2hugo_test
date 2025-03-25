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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=d03cbef228946c496b577bf3aa656a80ec9b6799f54f9bd8aa9dc1588c2b8fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=820c294bbb1abfedb3942e4a42375ff85181ff83119ec521ccfae04111191336&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=90f83391cdeaf96a92c22788f842f737d3a1e13017e9bcd2c441f2f2be51790d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=6c58a71d8c79a802490fca4d7faa89d9278613e229e2f67b502ac71770e4ae56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=09c43f68f0658c843b6ca208770412efa7fc7b52998f4e76d73099a58c113006&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=bfbf3729daa508ff98b72896ddbae9b9dc7c3d345602b6ec170660ec77cce148&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=af2c8e594a7c6897888511ade6bd1830abd829de71a0ed8aed25622107c4ff89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JV6KBV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMnq%2FKMiaq%2FB6T5YXZMnkNYYuIWrm7aAYjtcnpB8bGIAiB44x%2FPVUgUw%2FMNASwklwrGUPXl6VJ87iCQN8uxoaGgDSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0piZW5M%2FubzgMW5WKtwDxLZPAuuyfi%2Fd1Sbp3w8AIR3M6xpjXSzlo%2FWcEbqSDTSq1AQUCk3ihorSVNLai84J0xsg%2F2VtR3LZ4D2SsasF0i90J2UVRY2kwk1ICR1vhvUSWAeNz0KaUeNzOSnhunio5x6kYT5%2B%2FK9OpTvDhUD9V3396Bb%2B93EFp4OYHRVW%2FOu%2Bv6qO2b7owV3bi93p4hSlLeFLjQXsD810Tj0YkAz3Fgq0wgk2kAZwQNpow65fej0945tOAuoGKzPMLVDgj3D8K5klpphe4spqjARrwaGRS6YxarvLDLMScFlqHXtUBeqzVcbwUhHR%2FAnaBxO8Di%2BKZTjWumMzxVM37hoKDhvP7pEzLSfO7e74R5A485cQpJGv3vljUHnOi6HEO6ZgVugX7zNyG9XLGtpGnYAEZ9MCTeoBXsOYqG0DIWOpnNVgeaoBGuVODkAj%2Fgkzyj5sEQqzso1Cg5xEJ5qYKz1fIHC1%2BQ8dSQkBp4QC0tPdr9JnZg6bKiuUG1QV8tXmk9o8361LPZKaDDv4e1hG9qZY11ud5AOlePrpOQKUWYdFKaNgW8xanc%2FLWLLbDRlypMcuIlkwwPM1GlMBG6aUaxe%2BeOfgi7syQ495iUNda101AwGpBPHgdrzvn1qHTCTi3sEwjo6JvwY6pgFqR0XTSO%2F%2BflcJ0R68it33H%2B6J%2FYMvfeN3etQ0ZEe9ODJOjigOiAjIyaARfb3wL6Rlh1%2FYQA4TQZeW2JkE2NTQtUrCYceBrzMeEuinfzWu%2Ftq74dH6VIzGGPZheq%2FmVYUMdUDOHMMlREZsvARTrrlciWUIF4cR3d%2BNz3Df7dmWZCAgZUGCUyjHJ2am%2FPSAA5xR%2F9eYH9jsYKkZq8SH2mgK6Zp8pTlx&X-Amz-Signature=b1351bf78902ff4b2d73d0d9d3958cb4335af35bed7687ab6be7579769a841ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
