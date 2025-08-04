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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=030daeadc7c28e6db1b59dd56cfa23b1d37dd555f3255e4fadfdacf3e2d8ebd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=29631250c4d7988a0002666e6e6a1ba70e2159522d8e0072e7a2570d8a71509c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=acb48e4b7d91fccbbdfc22096745145e955e05dbf91dbf57f39d769ac4ba691c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=d98e9bf2c04b080c4c774abab688f7ce5a8a3ced2f45e54165079d4f7fff859b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=b3b8607756b980f3533a1353f556c551c5aa275359b60b6c9b519f45e6520759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=4eadd2c28132f739477fd3c007ddc69b582cec651792b9a4f13793efdb585f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=31930128d3cbb369d07b977b527b71afe0cb82404835773a63c6cf58fa7b6c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X73SLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEPaPunum%2F6OXblUN8bg4%2FPqUGfveLQVKvIPrp5DcUg2AiEAvXHwd0iNibC6jce3v99%2Bida5xLjQ3%2FGF7CkB1BGRam4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPb0zZdDH8sxc0dGkircAwWH05h1ZmRktHWSvoycTmW%2FOPcsves0OvTQlMR%2FAJWCisnP%2FlqTyOwAT0Pmbm6WfiL5YdjWP2KQJXocJnngzjVsnF1IMPDy8DjC5PtdTe4Yhj2rBiiJB8yD5WnUUhgx3d6tXIsEW29WjaVTQ8frymPl%2BwrFbFCy%2B6zDF4TRxykQ5siNVrxASsnfF0fG5%2Bq4Grl5vx0UqSp1qlbadt2X2Pp0erttXIxo0Ejt1dOBwc%2FF5NBJLOGs5KDJ7QzmEqvR9FSyJs2YcI5YLtpZhIg%2Fzfo491e9t8PSwxqXuUgQ%2B1BSO9wyjNWJ%2FVnPrpogcq5o1hvMxjZpV8J0J8GBaJ0Bob3RTWvUJaj5C2oYGHDEWBNN2jGAtKc801eIEvhsLRdFaFQWUht%2F9pcsbPi3691l0kPG%2BMpkcYgQXLFlmMjEUJ3%2FuE8Mno9MYWvEQsduuqZRpOq7K3PC3FEtTG4bEXNlX9qUWAbpG1RnFt2o5sBH7bHkjRNcYla7Suhy60BnmSJTlffukvGVRhx9hVvVx7Xn5onQt4TMqbHLWJaDnz9cnNhnyciM4FbdqFz1Q9eOVeawffREbY7nun%2B87j%2BdXDOaunKM8lzpvHJUh9qBdZ1qxaJY1gSs3018QdZHkDQYMKjOw8QGOqUBWA7XEECAm4tOEiBcwhe0UWGOTlzE6Y8pj3x7MN3TMpLqmbOINEL88UNUeWeWYFtXFTpYqMYK05Ob1QtevoY5J14qfqpm7GSZ4Lb%2FzeNFwGzZw9bEweIRPgZIZ8YmgznuXVVORGneocL6fqGir61%2FshyOeEeVm8fub4Cw5jCA5RhIc1F8xNtp9V0ZgoeNAUpY5wkSmi6PkSaC0c6mv1uF8P%2Fc7gSy&X-Amz-Signature=f25ef1fc0e43c8c39de70f2c84370974417a3e48d7c690b33c627b5a7764646a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
