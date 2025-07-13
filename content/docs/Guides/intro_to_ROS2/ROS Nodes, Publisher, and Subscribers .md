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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=048e461be53c359cf25e71c7bde239f19dfde5d61de8b336d5b714a8b54b5b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=2f84fdc3a64320afbbb67458fa5e36dbf534448fbee1528d88f19aab97039002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=0cc2cfbd9e03523b86a543727d156e74d86baadcbe0205d2084355a74f42034c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=367e120e7fb11a7c736b2d791c70fe9883da7c98d9e1c823763a5a02fe1bb0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=6effeaf85dbe368dcfda9f022c548de6393aaaccc5ff8146611349ddefeaa976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=d8376e9e1848b59620fc46e68ba77140a968ca5e0b9c80a9cca7e3ad210a2d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=4b638adf89662455804c4569013e2f8315fd8e2511df5f769490c42441aad523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHXYRDP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFepyRdoFwBjBTLGP%2FAoEZHjtIeJt0itZPpE3X%2FVhqAiEAsH5MV3Q%2FZXr%2FA6E8L7LtFuvHh1EIlJ3HtWh8OpM5gnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeLxyZjD1xHr6qpdircA6q15a26x0GMeQGjPrL2KRfAsAuoByEhav3LopMqAhX49eUcIX8Tcc%2FNoliM3VazZsTjM7zj%2F3R91wh4e2e%2BC1rzLawi6Z8kEoOx6QcD1GFe41i8rxXBIeDrNjqSnDagSgBOSS8n5ShItp8UdBj621ZXEKUyeiLXOU94QtPDKFUZlaMbV6a%2BbB8L9B%2FCSjw0zdhyh5JL%2B%2BgwDMEnsGw1nxRwWroObulfrAXSXkAHDn5TXnNbRk6TW2zmC30QBEhbFF8i0ba0%2Fk6QiuL1Coce1%2B1pUzqSqD4nsxr1H6EfihVynuP8rZ0sRkENOuy9dIq5FVaSZWVZEOG%2FtfjKyOcxhtFdYj8Idz6keTGEQCMfzZSFvXa352mQYN%2Ffc7wQUmpWh4%2BTnxoJhj3SzyhWJmqD7pfmAtDz4XBB2qOKYdKUWJhJXAlJ1o9P4nfQPfsOv1AvlGWQAL2sVe6ljpJ1TanRP6GaY4UI3L%2B12non8XBFuWOC1MJrRrv%2BoPAaHvIDuDK35%2BNty7Ra8I93VxNQVYidZC7tsFusoLzC9BGIL3O6FymDFenM98UA%2BrvM1uUfpURwhcSBD%2F%2BYv8jEPaSKo1y2W3Cg%2Fhr%2FsbtWqrTTrafrsR9bSqTSFj2QcYjjOTZNMK3ZzMMGOqUBc9PdxMGOfyntL8lN7AauPXyFNn8M891VDMyuIEH%2BdI7LhYt99n8aCQYzjIhXQfp%2B0I95Uy5VGf0N2NaskrskhR%2BAU8Ny60wjmnn5r4PKI1oO4SAaCy%2B7ZAawkfy1c6tMMtUgMqGUHwq6tZEuu2Bx42I%2FYNWmjFUWleaFU1yD0Rqp%2FBbciiT%2F8WIlpxTvuuDZOdDKtM9hizsyOBcrAKAAxiD2mpT%2F&X-Amz-Signature=0aff72c6fd44101e32036f405acbdc4c5556e014603a1e3a99c19423bb4539b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
