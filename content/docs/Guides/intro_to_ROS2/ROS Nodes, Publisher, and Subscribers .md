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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=21940c51d75fe1ff3a888fd252f91b2c30fd24becdde48c816c78488434ee896&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=d6d5b03efbe840d747e18afc4f0b9590254afd50a0da9882f0dd88eb8fb6df60&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=abc222a7467b6ba99992dcaeed903d855e5517ef20bf485c06d1b11086a480c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=dd562403950cf6ba78f5f29090f61c573ae12d43c9b2c7d68054237f3abdb80b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=e6f321acf5406b230f698d47fffa278d546e47fd6cddddf92cdaaad8f0047deb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=c28e6720d924b031ed631dbfebc6e65b9805002fe86e7ecb63f2e122ffa2de18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=81e03f5607db3bf995994c2766408dd9a076f81f2823a24b28aa92617c6a703f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTIVPPL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsQLjNObaYUgIN8Ja%2FlpPhSMo6iuPOVUJeYTcC8yCWKgIhAI3fyb1Pr%2BhNvkRR38r5GhgzVNddtJW7%2FrzqZ39zss%2BvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU9b%2F0oDUH03eoqGYq3AMXuV7zuM3KL9qo9PqlmsHzhbfr0b7W7wFyoDcQlsZTO%2BOS2E1J1ETfI5e%2BM%2FIR506PedP7lb0NhK4H4kvXbseONWdgyIWqjKO%2Bsr%2BK6oJzDTsffdnuhKCiyQKqliI99zcNveHomh2clWc%2FzzKP4ND6B9iU4HqOX0asHD8Zef8cqtp0X0mP3IHKBtSCspBZYTii4cDGU63Dkuqx5wo%2Bbdp4%2FRqvLDuPXR2m8fL5clqKFjJxMnpB%2Fh2YDWTPwSsyLBje6ubLizEgqOYrlhrqjaufUt5%2FTAFoavyrctDHhSOVGRGIn22wqHpgEQZtRMcNPyhAHAwmubATmLHJNUA6LDeK%2Fo%2Fght0K06AiAom8GBoYWvbHg%2FDPfGGc83XZ4V9PwT3FwRIVNJQ5aOdDNc0INnYyfW1eLfCm7dNyjkeYZUtkLkZPN%2FaA1BWzUIZbfEYGJ0j%2B6HqUZbXeE214dYevK2YwF%2B%2BNDUIwzxkPeRVcbU5JabW6zs%2FOIEjZ%2FWW%2FQZCtozkyKBR39sYy2GEDDDGk9%2FGUCa4yodrD%2Bzewykq8PnrZ%2FfqEou5ry9M%2BIvztnp%2Foj4vsn%2BGwuXOSg%2BoCwQHKFCjOwJG7aFRzzZPG8yPdD79jWHGBT7OHFo7dWbZqzjD6%2FOfBBjqkAX%2BEXf9Bt2g7JLcFfWGGSw94EWLTWqXK8mBLgTX%2BrA5qYhLOr%2BorZJJvsyZrs77HswAbNu0TAsmn5KpqCpVIw9YZAdkVX2ZADcWncuWsgCYtrNHWOu0gOEn7njEVOV9fSfeoJBY6D%2F4o%2BpmqRI9G2a3S6YdKMUau8AC3jnqfcc5bN%2BbiFAcifHV%2BnsI97ONxtz0jv3TXD7LvmIRHakMZ0dKxk7k1&X-Amz-Signature=d7e4f56d1087fa1c1c8d82d2b7f50a44cd7c614f240ef93e9bbfd7141da0fadf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
