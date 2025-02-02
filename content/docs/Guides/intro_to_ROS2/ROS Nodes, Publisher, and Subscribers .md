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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=db2a8008539289b0fa143baff6e794611cc1f8a233ba40938ac1a5ab647a401e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=e3d793812d30052fec00cea52ac77999ae9bd10befae9447ae3a80aa32956edd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=d7b4c01e1d6f8cdedd6dd44a74495db0db093e05ef0bea7d7a7c70c033638adf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=53d8789f3411f624d209b25f82c9eb6e5c4aa6fb3eda52d89a04e2352cd68135&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=081203dc36e3d745fd6744ebb4a339964dfb28c0a691e870b3e771e79a6a85ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=b7a902680e584970b0c89e3426f62c1749db596ef99848770af450cbb89ebd30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=93840f19607c95348de7a5aec6e87b68dedde64d7b8252c9044b9f615fc70e14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHATFJ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5jD0nfOjYuAd3481YpxBoXZVexUpcMf7fI6oax3k3QIgPDFlRMA%2BZQgOcyDR3xWfAllNPDYQPDtOQjUhOKQ9B3kqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEXikaWEBDtRib55yrcAwMJTXt1987MLS44J45WDbMwUzYpkZmmpiVe6zsn2RxGK4k52eXo11cqS3jsjRyv5pbfuIYv3PDa9Rec1nQ6EWkr%2FdeVqNzJKuyCv2v5PfHPGVVMuRPMrv6rC5GNIiV3EMoVHg33DkfKBS0bl3mdWXtthSbhD7OEfUUBzhvS9RyV1GoCKvWVvsPL0ZL54FR7gOhgWU3ozfVCs8TeUbtYfDZh4yFd1rG5CVIzMc3XFqGwAI5wM3rSFC38l8F2pBKs9tRqRZqrF5%2BzWBWs0N8zw2o0eBdINkmouG76A2169%2BxNnMm4aw1iQr9UW3GPB%2B5NlQ6TxZmG6Nip5Fqn3AnuuWSH0AHnB1EPumm89bprA%2F2UwTf9TcnW%2FNy5Y4SfldihqwXdhIYhBnO2wRoGU%2B7Ba83qQ%2FEPogGqpMeH7Q%2B1C%2F4K1q2dOt9b%2FdDh3lw4szXAfwV%2FK5reIOr8YO60A%2BI8R%2BfCYyib6ABMMFGWYZ4Sc6qdC0bbXF%2BlBIs9LmoMhqCNonOhZEYFeEGwxfpGZkjRyrLq5PFkG%2B%2BClY3CTv4WBc8I%2FlQHCtl7XZJUYMhW3RH8OQM2bSjUH3wOZBbr%2F9MT51%2FcCkFElKDytqCA2W2ez659oPd3Lrnq8mQSZhjwMOrh%2FrwGOqUB%2FbozyPk9WC8UZ%2FTUjIEhQmPsWOkeHpA6pkqGR1IDFCjUEZb5tbLpLkU92ZYaFLcjzfCqtYWvoJBzcjIG7mkz72mYXucdnNBpBLQjLnr6TSjl5tKoymTkbFdx1Iyfm%2Ffo61jHCMvzikhMQEltvGWAc07hAu%2FGPKUM7oqaYTbnZc%2FGj0driFzRN3wq4Z9ONOLRDPn24%2FwtGHyLvxGY1w6EZvz1oV%2Fu&X-Amz-Signature=a71838778bcab949b55243407729db43d1d828bafb354296ef9b54c4219dd9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
