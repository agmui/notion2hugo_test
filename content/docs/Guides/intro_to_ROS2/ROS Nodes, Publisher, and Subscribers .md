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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=c2ef8cbc3ade59bd23eb144221ad8614c543b6c473ecd3e8c593228c739459fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=0e004aa73e48d92148a61d3d72c55089fbcb7989657cddbae8bfdd95689a2856&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=3fe32afeee59cbbdc9cddbf19626cffd4defd5d4766e3202b4e4841f2d48ad75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=f1e181980cca39185342a16ad26999bb815c9ab300e8ebab93a962de6c878d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=423932d1d2e9aa2d0251f534020264cc4d68222e375b4db5988ddd2bf69d530c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=ea6500ce906571e852431dd263e9b9ba035c9fc8a102735ffd1d9390f5ecb94d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=8174cf70911b22a51d9885f6c62248a6fa7ef7509c81984724fbba6a625b2bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGRAIQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbR7B3ndaBlHiyuossncHfRxLlu3QeTpcaOXqv8nHyBAiEAyAzFYzxagBeypmUiwl%2Br6%2BLlPCcDn2z32RMMvn3Y7%2FYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm3j1pvwi9XbsbxQCrcAwZ5mW58L70vSj%2F2bokRAnj248uZo3ybT0MnG9qz7F%2BKDLTd0Qwb8VU4CdltEdTpblTJZkOqSeMzefqz7FWi9dSQqt8d%2FI%2BGpAeCFXSk3f%2FKMn%2FD2w1%2FXgCOOex%2BUEhIAuucw9UhMhfjKBX9ysSv%2FOH8R23LBZH%2F71Vu4eDPpqln0iL2S98Su5fDBK7KAvebirSDCyrUGlZ7KhMOKu%2FR0ynAanVzWNbtsqBrLOM25IkQOPRNpvFpN7bFBu%2Fmluk9e59WTrgvFdZjFS2%2B9rGLQUZrcV5xGULrgptMNTWGwJUnCPMpgnWE2H2NfzLoOQ3Svbh6x4u%2FEt5PKguOEepGjEA6SmSgNgsBAEgO2EO%2FvanVizoWSbKMz4uuiwkjP3X8PYGh4jpm2XaQVZdawelaGGvt4ovo9DZrGN%2BXZscHudbqzC7J9r19idv%2BWQSKv3WB2%2BZvWDR7DubLS19MVFbKnJQy0Idz3rpuuFlhQ7eK3LtaO894N8mrrr24v70FYvRLkC%2BISMumJIPAWa7HeA3lVI8Yq3PTQjqjghNTCqgv%2Br3Z5e7VwIy6KAN1TJXxqUFrEmClX6hXvqkI%2BL3cf%2F5ub%2BwumxuLuU6G88V%2FYzsdlTekIG9YxzMsyxmv0notMOGN3r0GOqUB7HqKQGtAPyvPxBrgzapzvNg5ga5nJp3YA6XSFJeckBuvfx3W352AJrNvt492tTHioFumvazWZVzJB4PQeInKlephYlrN3ovtKIx9JClpVCQtwKfurKPmabkwYQZA7l5uUM8rO7Yq1mIkDab7geUg%2Fw7YAJRNf257UXPWPtAKACxNVQEjtLPXqQto%2FTyGIIjbHxuLGUQfsisphAZhzFEn4kmcz64o&X-Amz-Signature=3132a492c5cd44127b637372b396ba8f7113ce44313b23e21c5b000b4464b152&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
