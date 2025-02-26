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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=6ce44a0b9aeaf63d8f89908bf482801d8692d6aa136c66577ec1c0a95e0f799f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=4b046efb5304cd4dc261c39bd9d9523fb2607fdc47030dba06e8482f9fb2046e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=fd85c47cedfbe61958a4121c58c5cf2195b2259ce5e7c85926f1ecc8bca6b96c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=bd3e564f3829b53e9b77203434cdf79335b0f24586754642679269985bc2e976&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=78caad01b0c62edb29dd97c54e5f0e2bf34de14e6313384b0c39c0c2fbfc144f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=ec948b440777c7adcf7f762f5ad58b06d539e3e8fb7fa434e6fe21d64d383fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=b61b579c42b17e569184639d4426437dd1d90d64a91076713a493695702e325f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VEMOUT%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMReY8BazSwMYcRsJ9isqObl%2Bpm5wlRizBj6oql2%2BBEwIhAJ77KS57AqBWB1JAHXeROWpN0fLU6HvM4lHamjF00d13Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyItby%2BC38LNjJ08YYq3AO8ZbwSKMKNllW75aKMM7TcxU4%2F9MJ1wOTRyvUWV79wO%2B0IQf%2BXz5MkKLRLwMQvGWatMQ%2BoY62cgpwI4UMJG4zYmVWjDMg6jz4p5ftebsryHxjx3sNJVoHWevBWBb23TL4oP6%2FOEXIN1lnjiMhJwN6BJ6y9AA2zEnk5Q4ZcCU%2Bu3PoBVxlOCDKJfQJzljUghHjRbxZCD4NqpdTev3dvay1aPy0dJ4Ou8%2F3DrsvPjDCRVMERKygGmTk3V5rCbn0FtucaeJVJ70XmCLlcpaXBWdoAFWOxD%2F4LE11SAatiBo%2BSF5qpa40IiwE0Az7d%2BCnO3ppdg%2FEptYP3Fg1TZeXFV9Ww%2BXOUSEKUIdCo0mouXjQQegQEKaWQw3iuI%2Fw%2Bgw5Hp6Emp%2F5alJZnFyrcpGvzd9oF9%2FFaBTR64T6zK%2F7hzC37G%2FPT%2FOvwkYZFYNihlFkiVo0HZwL8BQmwIGAx3ohwHYLfcuADSafln%2FOy5FjRpVVBq4yyHiyUhSws1DystIs9s%2FXntDUQYb%2BsHQW7cpotnxNMPfnWy2JY473i4qZ%2Fbe1b4DWUaivTOHtS2L2EY1prdMq%2FxePeDnP21GnVmCa6sO7iJ%2BIQiejjETaf9ZQdqx16MyLdzoc4BBvR0okjwDCs5P29BjqkAc2pmBxSiSLGg7KCI%2BBiycaPSZnR%2BEadAATnb3wNMXZ0xiUvo%2BS2ZntFm3gzoFeoE8O4UTT0wrmhVXbllUX2vV5qXNsBt9HSPLWlN0BPKp9OSyONA6zZnQTMLlReizM%2Bb3ee1ym0WJ18QwaReMFDj4Dj446vWOJSGIgKZGbP52BTDktuVXgwxfogwRnQHxDiqBGQ2T6SCoHLRIHY7yB9D%2BnD4cOj&X-Amz-Signature=f08d0f55b9942a50d59d890d73cb6113cb1a11628738eb4c11d53cc5f614accc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
