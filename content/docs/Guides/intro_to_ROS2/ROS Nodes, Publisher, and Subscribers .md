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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=5e5114b155955e68ab76a82b05f80c9d40327042801c23078c258b4789b00a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=a2f60758585ac8d5addb0e030897627b26d2852217f002913111c7055048ecfa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=3a1c628c9a292c71e652f6b536108592646059e410ebe671ca16faefd1810d98&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=5b6910840cc1ee538f8f3ea9f09bba4842b79dfb4d7a32a140198f93667fa6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=e36d5f3ee6cd484d95e84037806d8fe74d94d9ee04edeb916559c2f658584c52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=2832f1ee2c1c17f677ed512cfd543e038ada6af024e97d03b3824c32eb46399d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=08ec0645521509c33e09c5827d7561fe4712dc1088280864f487c8518464bb74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQHCSJG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDOp5VeGXXum%2Fs1zgju9re3ZyooFbAkio4HHjeaajxmMAIhAOdrr%2BtKhewcdsG3gZTgEUu19dffw2e%2BRWTCfy4mAPGWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyikIbkS3RYPZayhXIq3APe8nj%2BnRbsCPWhL6BUlk1W0kjXRJsHIVQbxzkrRUs8rKoWYzQtAAJA5tTCMw1SwMypsBAke9p61MnOIskgRyOiNZoQiOmHGIslsnxZwNavmpEq64BPGCDiTlylB%2F3C%2BoabYvL5YTK3b8ti53HhlG6oLnL5bKseCIjXy6BHAMe4o7jrktX7m2mNfrxUV4uFdjNHzqaXj0I0xRNrC17f8nYaVXnvm%2FEmcvNFiPBUpK3XcLzAbn2b6JOPIK%2FFJXE47UONmX1FOF3c2bb7bsMCpgkD1NjS%2BO2q2L5HzignhqROrzm%2BUluyNbk8zvnX7fEGX84gYYLGntmN1J9xyqxafa7o57SvMgp%2F6hBS5dlaUyHJui3bQ1MxmMjLKnOfxw3FFBig5d%2F%2FT7DtQLDzMYfh6Z5cY9pRl5o43rhiwkvMqBFP2yc1SeRwAvjTRuGJ6J1LXQq5BngT2fSdk9Msw6do1%2B8tpBiqR8QhGgYwf4nQsym88fW9gA%2FkBarBlNLYZuKkuEYhI22%2BGfbOgdcHeqhMWtXCWi739T6EubVpPjihDB9nSx7oS43Gd68%2F1wEcNhOXQErKUMixEXNZxjmhh%2BC8uYFThPlGaZJX51HjRWPnu0UHlz%2BlgZRL%2FBziNNms3TDX1%2FO%2BBjqkATSBuY5z6hVq%2BIZ08fOqkbtYkK%2BjJV5sONDcP25P%2FQ7F1DmO4aT7gPTxbufdKfUY1SGY9Xbclnj6QIoyVeSrItJCm4byYeLWR5IZigddOcMJKfRBYH8QwKwmXlvMj%2Faf6ePBB2Np6a9YdGCyx6Tz8S0cUGNQJF0eLIfh4w%2BvqXPu%2BmWFciDFeOtqFfbp8lOIQt6zexCgl%2FQLMTEsAlRIi%2BuR6XD4&X-Amz-Signature=eff9dcbb430d0f2e529ac90fb2babfb88c63db37ed89917c584cd24924738482&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
