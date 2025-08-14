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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=08437570d5b4978c18fa63af011a7828f47ab91cf6c6e42cd9c155ddad51ba53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=f93685f50a8d457573664e519eb9ff5dd8c6b02be705a336fa93d2fb7bb1bf3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=6e7e06fc10463eef810466ce6451a933b45645455df78e209a12fc2ff48b0b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=09570ff27d3494a5095b07b256e43d441d03390b308b9a8e6630f764c537dfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=2be120cd65a58459676aeeab0fb7c9c59252b6bca5e3a7d34ed61893726a50a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=5ade1bc425f016fd6404e96c0ae7d46af02f22e1c966f6169d432ca295241fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=dd626b8d649000b916002c1c7753f5ece93884080d2b2ef304031828ca5c4b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3GXUMQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUxLEI6T9F1xUswl6E%2F1fPfw%2FCjNSAQNtNB5Pj3wf%2BwIhAIpo%2FqlrOIJBlkTW4SYCt6uaGhF4dPJagSA8KxyzfjvyKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDKnssJjV4yzlnQFcq3AMB7h2a1iwcQ7V%2FPZU2vVgVvJxmU5DjlJ5tX4SlfyNvBgmBcRlYlUz6sJvPNVpVYbZw7b2nEUAxBbaZrMvuYb8qtvA48mmnvDLkhKvI7YtxNTte6NpoUUtpG3L3YHbeDnAedvx8KgN5T3CF7lxEmUqI%2FwNZr37fGdkSO1B6nNlOSDqaUrJhSlq13%2BGnRJHHB3yXESgtTeKbpCUN9Wl4VjGGC9aUWnAWDkonzpitqsHTVCN6VxoA27PGMFSOqlV8l882snXmFr8bJH%2FZ0DG5fR8mFjiNFkiRo3BUk3HDlDEeLFUw8cUh6fxK9iQqMzWnuSBNzKj%2BdZndgMX87%2FA5LdLXjKoy8BA95feoC%2BYOhv5xVJo2JQOryt4J0Q7l7ee3xlgerClW8frtZ3lBEa1USxR8BdV1H%2FZagKtWpL9X7CXRdhlb2CSrZBr8%2BBIS3m4NMF04qZr8MmvCYGJpVY%2FmDAO%2FTbt1kdStkgJ3IBdXdwFIWxWEYpnNlqorrKSGo35UzNN1gNCBqSl5udQReXCH5zHgs%2BVtej9jWb3SYTtoC5tUCHeSI8gvGlBFrvL8JJjniS85%2FUHxGwiWJRDh0ZwP1A9hZpbX%2F6sJqnfX5XIcrDtfyetl25PfKTwis5GMnTDurvbEBjqkAfspEPI1EQWnYHBlSZF0Uu%2B96%2FTIJzE2%2BiUH7PO%2BS%2BCOOrgMz5nK908Dhu64nKC8%2FytUY0XAFl1FbouNVB%2FNR%2FsAwDo4jTEot8rMhMJlhlhzwfqw%2Fdnjgu1wqqD3tqX21rvOVVBKEzrHxD0Dc%2FS8Y3ZTuFylZbvnLTJq4aIINM0f5cqnf2dBzG8YNBbfX6QM7f2PT6gGrREtTYGnFzvC2nY6oMvf&X-Amz-Signature=592ee3ffcb9cb8c5f21c85fba4550f9c777a1bdbec2b17836651fa36d508a26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
