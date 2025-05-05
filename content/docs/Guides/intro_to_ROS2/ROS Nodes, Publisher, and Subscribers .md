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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=79874eda9376c972fe71f9013c8f69f8a82cd3dbdc38322dc4fdd839080915c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=5139f52d3d02f5a1532ed08329a6a67f7bdb2ca7ef69a668911da99bfc32f996&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=f93aea1baea654670afcbe91ff8f21c64ec3c441d45b763b54aaa84b0cee4d23&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=bd6a2393b4dd5fa21ca7d53b52b35d92944a73c84fdd39841734fff4a15ba090&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=3187697a7d50a6aba9b405d86c37f06ed2f360d656d9e022382fd8651e0da08a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=cc1cd7248444a7c42938b0a8fc41f1edb8ee60f34bd99f6c00e66749bae58001&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=b2ce56208a27974fc6f5119f10146ed42ae2ac752e46b776b75afb602480a8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTW2XIP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkztRyGfDIkZ8ewCpQRBdR0sreaKn2rFkhLfsVtu52fAiEAvoEN6CysOroSf7P1FlB0n%2BxkjhxnC%2BQknYICKzsxV5Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBH8kzTf8YLTB69GjyrcA%2F8Uwt%2BR9Gj4s1P6dvcDjEsB%2F2HlXdgb%2BhsdxVpY6MEMxY%2Fb2mzvGcqRNzRKU84YoCXTtA0oQ%2BEi3BVSjZnAMYceuq%2FTcalvZpJBKNfUj%2F%2Bv1gOZdmRF4wZ1%2B1cmBhBF5IFb686XkeSV8%2BEcnaA7bhsZrK3iUfAV74ceNTefHXutsg6ULYC%2FL7i7c1sQUhmyA1eiEwy%2F2ZzRn3f3b8o%2BHqJj0M27Ux1JMHyuJswUS6o%2F%2F%2FFzEpXxymngb7tnT8yyYGArE42Howsf%2F5AaUZTREtJ4F8X2TLayPBItG1FjXsDG3WovOzJ684ZpkkHifpIqXxSwU8TbAA5eCln4KT0LEPBEwa1rASt84Yko6b7llghRlGr8cBked4jAMG9DqyKcGzVGW0nBpBOc%2Bdcklbup4WW%2F0V%2BTNKrWLjWcYj0tl6JFda4UHndXfVfnbFFs2h5kVeR0iimzU445wIA7diSD53nA6KHCl9rky%2FWw5xn%2BBJS7VIOF9o1%2F%2Ff5T%2BQa2QbNfj5pexf5kwbJzkVtWldBKueRxK44xFC1fFgzOzKVGFDst6NsskydgGoswZbCkpxtuqt%2BvqSeHmkctJ9JpT%2BarBa8CjdvWFEA891DtkqShyUg%2FRuEgc61dkmON6ZHqMKnL4sAGOqUBCFoDCp%2F2dVo5FSqt8kDuYtoAf%2B69TmLm6MTVyrImKjjrHX7f7Oi1ayGeLv06sBSd4QN8C8pIl3e941Xc15KJgG1J41fZxhl7O2AfdFCTI%2F68FulBfkky677f%2F7K5P9oksYmBNWw6DaM1eHWWe%2Bjp2Pox9W00B9A66HuvmItu%2Bgnk7AcYA4r78t2QpU3khKq5U4r8g8AS0FR%2BmmkQUKIOCOC5UtWI&X-Amz-Signature=6c99a57a184f2e0b34eacdc7cc5251353a304f52e0c301c60889334edf96aa0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
