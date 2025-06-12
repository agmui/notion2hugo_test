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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=c0f5954bf1741e5ec4d7c21358d32a3ee836b9b4ba0324d4016ae879557b082c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=7d7d1a1ff1f2f4ad6d1c22c24ce89f20c097aa5b5d4cde331f62c6c14e913f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=a6167097ecee54d7a1e0d9d0d94908792889e8b4e1ce0318d8ea420b251a9db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=1ed2c408f268c034027e57adcb1b08a61b0310188611c23b638b821fbe588d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=9a1157eefd6e7d242586df8fa1346c2cb374f6282cb836f4d1c606fcefdc71e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=06b94abb0de0643ee66eb749547b827a6ec0d73229dd6bff69898dddc804e5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=c097bda4ac86e8130fbbd8a0e3d0430a2bba04e23e4f16066158c64c508cd287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCIL6GO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFm5gC448iJGDOsVo8vYu9qPMwG6HatqoTznuMrkrpUCAiAvYcNX6bQWWG2DxEGp3ExplYmcoVt5utLqDFbRtNh6VCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMddmQUXSXRqce5NveKtwDjKEsd%2FjabjdfOsWggzYnhf3SBJuJ71JG7a19TwOOb4wZ2B7VUzzRZV7EtB5gmuf7pBX9rQYh7A%2FLLXl6BL60gR8vQth95C6NOa0%2FkPBX9NTZ8yyVxszkK%2Fh1LUY6c3%2B2fUPXqA5RqotlEJB9kU4aVZgg37FgJ7%2FC%2Br6M9gsGA0bWczXyr3yC0NcsxpGkEFyB0PzZIvySoBUTpzkG6m1ADDol%2BvTIhLEaMe66LNJzAPKkXp48bQGOSrSFSqnXnhwM55ihtUd442%2Fjl4UTwKaSZtnEvJhmb2LAIXArD%2FAOwpauVNSZIDHYZLZmPLIFud1u%2FDlDKbNVem6Q2p5d1CWPQj%2FpbztVqefVBKAgFp42T1SBfWCcrN3WKJgpATisQnXH9mAx0UVzTGKy4Q5puneaqur2qve8QEfB08FlcesOf2NaZsjbrRb%2BXRMYjobNqOk9xMo%2Fj5tJ8hvMZYlymAALqoViM12pqCfV%2FQWAj2qp2CD7wWD8lF4A8vMZM58Gmg4CyaXWO%2BBkYa%2FvYcctFPZv9D6ZviY9fkmR34u8zUdGYJ77UySY6gBqvMFiVM5OQh71T4ek%2Fp2gNTfglbUMYMd2MqYeltzRlqWxHEUhPSPx0a7evL0aogVB%2BTUWDiIwwO6owgY6pgHYvYhbIbpYP3k9TEv7coF3iU5s%2FbH32leeqbO8KAhemYEWwt0vQZ9GmLUnkfoO9eR4%2BE9MIJ%2Bm2n%2BQOdeJdDHQgV%2BXB8rnxP3ZTJ2IcPdbj8N1kykeVYofnZFbZ95Jf%2Fj8rpXMTq%2BN4HLt8mpD7yaV5F%2BXUUUDOSZ3fFJQYQ8PSYlCXvKHnwTLb4cCgIikX%2FdS6owtPWdimGG0G3ZKukV%2BTOeacKex&X-Amz-Signature=2f4255c039d820e562eb27e45c2940a59a77f0083179df519df35dc08de9c631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
