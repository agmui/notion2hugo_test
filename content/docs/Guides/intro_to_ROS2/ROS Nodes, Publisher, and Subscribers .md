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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=2f97bfff757b9a8cb76ba376d48e63c0f64bc7ee77b99615ef9702784c67ece9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=ed4514bc01272e6aadd301a2200cc1b2f6b7e338293735de960e509c0c9510ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=a79856aa5f2811b204ad7c2c2b256839544ed79b31b60f0ecea80ebdc56c3e25&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=de2aed65fed7143315e2ef64d152cedd09f4b8ea390c7dfdb033403d099bc632&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=335748f600d57b28becc0db0457a201ccddcf322454f31c1c90abdaf769d8305&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=9bdd94936676bce7bdb9808e894eac20ada7455e0fd1786afa0b9b56f094c5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=e52bfba7f964e7598aa1ad663d80a42c344283db5354b98a7d84e533de5414df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=90d53b6e9a972b0d17efe95a69c9b2752d3b7cf9b4442288cd03d2a0ada8a03c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
