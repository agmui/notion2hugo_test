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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=c14906cc1939b41fedfa08fe42750df0790173762bb26a0b48e3a3e617836630&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=4e8942554ba239346cf2cde5af18af203a82ff0603d8fedd277def9e1bea37b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=736a71c0959b7c16025b5112c2185e74163d2003b623821cd20ee266cf0706c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=ac3745bf65f5ad3e91820f966d783004c36d4aa3c644ed102f750755e3944932&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=7d9fa38b44b5da7425be668b975b16b6c969cd851c8f61fc7b8f41d07acd4ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=676524e801755c6052a023bc03ce923b6d6cd17cfe2e38cf17d38f94425a16f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=9960940bf1858626712440fbde0a5769622c0db149cba5e314e5ea6c7650ac16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4TZEK33%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCniU%2F1f7gGf47PT%2FnrPbcV%2BbovlYdSMiw%2FIHNGCMRZoAIhAJh%2FZvXI7PDAP4HqZKGzNaeFkeJJkzRZHFH%2FxIKX71lXKv8DCHIQABoMNjM3NDIzMTgzODA1IgxCpEIXuJkv1HRXKJgq3ANTtTgyiNXIEG3qtMwgECpNvAjgHX7m1xdDMfUGlcIXNdnZzW3AptgnwLNrvUyxXmR9JzKrHNZXZIWxOB7HmmiB8awC7WVMMsj4jRdtaF605eVPCLKPnxqg7Km4VHcBeID0arjcE0JNhUtijj%2F6W%2F6%2FAleWd473yKokmBfEh89MJ4g8pdH5RbyPuxwtujMSpzfOshDC3it4g4DgyvdxeQKiC1ND5BKRglzdrdCxj6cMMYFFub0nn7gHpjHQBPVupW1LGqoX95FKwgo2GKG3nWK%2Fa8i848Dt%2FoEyQU9kpRoz%2FLghVx53ARt%2BckBygwVexKLBeHBlxz%2FV7z%2FcJOYs5dxjBaNkg3%2FivePyxpJtBslKzXQN2FURGxN6g5spokbnVf%2Bg0uddKYUZVl9hMGfbHCwqbzbsETSB0tjnaPVie5QlUo4RRr%2BT0UsZmTccc0Uro0zKCvzwCINQuGR%2F1NE4alWcBf5lRpWOKbjBvamrdK9E11K0jmkJyhrK1QfwFK8n27c38IvyBniwgNYTHFGygj%2B9MI9rNPHxlzRLlc%2FPr5Cwpn9iPJwVBI8136qwYpyzsSuqg%2FKservXpJbaBWykF5P59WNcP66nnKUD63Uiukbzs6zxEJe11LDVXUs7QTDp3%2FHABjqkAU4hWiwSSt9mRdr9eRA3bURLjhLJLujXjfA%2Bvgpp8GybU3gtQj1kKHkgz%2FxeolHdA9nfjF4HyWRxludZOJXN5mNXN1PYOfLoNVS3YjzHdzZ%2FOMNR35Xjm%2BVIYK3F8tu1wMU4X%2FVaQT%2FLRxq2Ykzmi%2B%2FW3TZLeCy1sQ%2Bh0l7H%2B9hza%2BUTTKiwFOaCa5UdV27kwWTcWM1cVWA%2BdszF5wlOZ7rxa60U&X-Amz-Signature=c8592942278b0d69c64e8c1030ed06e9099d2f51376dbea0330d32b449e4e2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
