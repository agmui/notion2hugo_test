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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=262414103b1d475c6e2d8b3fe5943f0bf7dcb315db847e2ca4f31024dd225546&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=3cf0055f78e69f3b3563f87c3e3fdfdb1cf22d284dfa13f796050b7230cfe871&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=7cff39cb0b2bacbd74fab6b4ba71dcc80d6c18da7d4596e781617e4d9106b890&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=3b39cc056f53d6078527cf70ed0b492dd2ee6ed3698772dfb7d649e7ed160cea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=4ca7b7afbf4e44afdbfdc456c761b2a335823c768c358b24772e34ce38967efc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=40941ab4679a3c47fed84b405be7e6fa2060c05f4ecdb716d02a90e2cf045099&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=afc895ec0e3ebb46acf8455f05b139c52a80eef1ece3d702915cc74eee7051dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWM3UT3S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAztXQwt4qO3xo9nvhpHTPyYhljJq3vkbb4rVgCUP7pKAiEAlWpNF%2FlFLKt6HLTw2A7RXHSvgYOYOk%2B6IGcQwx7BMyEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDF76hEfKupAXcRpQCyrcAyiXktOQrasROoYtIxLinRa2b2TW2W4yV%2F1B8Sap5sB3NBltiAmJWqPJLF782OuDIqEMEuu95YxZ7bzmQuuV%2BAuNxHvZOIUqsKMZrGhhldxvZ1vcYE7EF4xEQIJoKD3XBl9ctggvbMCFLdOrQULhQhe%2B8br%2B0x4E7C35IBcsL7oyMEyXShq7IA5wFJzmd66X%2FN3DRT2N454d7lxB6RJ1TYsVbZczyPpGeGKkavjNSfJDn%2FDzQl5RPOWN%2FPJPhIiaOUHYuaw%2FDCPIwXDUg71DeepMy7Op9%2BbAQNiLs3irxXZHb3%2F3wExWLZ1UZ%2Bn86uu6Mrk4XwMGRs%2Fuqn2q2gskVD5GOqWUyWQ8ZR63h%2FwrGTtcjRKMNx%2FGIs16XCYaOsSU2LdndswqK84h7fc4IJYibCRzXZW6%2FgQOi5l32lbLDNtvE%2BYNXJlIayDDJCKbDyezx8mEIZyW8T3FE3lxmH9yoCd1QpgillDliLYueGoWYKVCBmWCy%2B9DTHcDPKazSu80SNSM3pFCjOyrd0Km6ZqCLlyZZ3e4VMtRYPQoG1q1TCPykrOLs%2BX0X7jfrE7lRAD1pkw3nXsSXynZLSCrpSUdPRA5%2FGJOnhiKVP29tKu1ZCqE6N5md9trV8NEuDizMNugqcAGOqUBbNQJnWLGZDP54joZHPU8zg35iEengHuIrc7WgEgWb0s9UoIfaLptDwf9Q%2BoQl2cntBYoTfoO8otiWtYHV7jM72COYBS2xZg8jN9zJgL1hs2Duehd7P9VVQrw6I9EZZITtT%2BidkvZWSBQIQ6CT95jgkPvQAIMJYI%2FIyDUjqcVFJmAmJ7xOywwtdE7%2FCQ0dGwVo0y6rlW0t5f9Bh3e7cqdLGSLd6Va&X-Amz-Signature=ded130172bb802ee8830d76b10123a68488df63f2f4c15e6df8dba2ce664578b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
