---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=d0afe48320c067fa0ef43c312f4149203c71a611a0abd96fb8ca9ab7ac76213f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=bfd3deffc75cb08aa68c0a07d950f6236088b6d8076138221ba7259d9e97d446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=2051473ff6c7d6818c49b39fffc4e2a94c6844a664d2cc3d0601098d47cbea1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=407f834afb800dbaf69750f3906f8a65a21a96d24ceabd38a163b0b28abffbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=d47fb0b6303a023bdb0d15795c822534b89d4ab9eeeb94626a64caf33d24f24f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=b49dc08cd1c36a49e521ee6b0773a99be10d83f48a5bd74f4140f0bacb103a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=8344d8fbb3bfdc7f180096345bc16bb3957a8715fba99c92c4fcf28eda2198cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFENJKVJ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAGjwxQ6mh3ZmnF6NFbrbMxgjruii%2F2RdodLNIyG5VQ2AiEAtC7vaU0kKQbJhxYJ4PQLAqZ7Ns4GDTQcHcE9u9KlNHUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOo0Wtsm%2BRXsIHeykircA3gf93MXtI1cAYVphGR%2F1NZ%2Fc%2FSdXwqhzv%2FvC3pc8EHxVe6mEptoRMhjQjCRTuqiiBArNSxhK8SIuXL3FiozxL2zjAX9XmFM23yeOIoCv%2FEIZYcNbvhYNGYlODE24VcDQYE2e0976El1wlVuZWo2TCbwk%2Bz3yQQ8WfGHRxgYix12doNJDGm0Zh81%2F%2BQZz3q0uzQWCQDqxhSEMCuAY0DXQXyz9wJgZfFdOZYPmb88A%2FEvupq0f8R%2BTPQDa2rR6x%2F3HF%2BQvfUEcqZ%2Bs%2B10DNYHEiGFVyxLq1rmhvPWbiTnoAKAd%2B6LJ0kpOdBNn0TPfncoSirDkEn0ioJTMb27hna0CYWdwuKAi3eJC8cawgIcB5eFE1IeRkX8lIwfYnqFVlN5nTG1IVrmB5UCzFlj4IMMe8eeudtxWKkHLC4dnbujqsAXoVZ7F7RkV%2FEMhXbC0RwwThE1btXHH2%2FXUUCCdbwGtrK0mTw%2BHlCjbBUiyyybyilSWtc74dFYUzmGYpIuHgKPd1EmPH4U0RpvE%2FeUnE7x0stNq6JDhijMUurnWvlcP1Z48q9q3bce5kNPZOeV%2FRSRZvDI0jQyL2ApqZNm79NjeFrjGyJFQ3nSj%2F6%2FRFnSKnfNJaXVWoqZy4KEBxFjMKbcptIGOqUBQ0hNbyAVrRU1J5VFOOajUGLdhPL4URRPxBC47ylq7aRb1DpOy5le0X01dhQoM40a8iPwjmmQDlOE3qFeR8xAFVAaQNBjZudtuC57zAjy6XBmOhKJDeVxfAiNFhA88UhPLYW%2Bg8RYDgfB3TWB7QvkZ89SpHu9RvMASW8%2BYyrQUVrTuyUCC%2BcWguFwrsQ%2F1tisbXC0uktXpwJDJOLoC2AH7DoCMUhF&X-Amz-Signature=75775c4a3df53e2e144878e042d2a00d4aa693266cb6060089957909063fb9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
