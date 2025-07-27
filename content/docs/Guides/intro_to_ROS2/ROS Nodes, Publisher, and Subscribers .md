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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=0f644d518bc8b8f8f03608f2cc0dedd2f6d21637597519198d36a452c6596452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=b9eb6ef54fa31fb30a15239d15017a071dae1c8a1dab78c9e5c6c187558b7411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=387e90a28e374ee4a07656c2f1cb10c18b335346577da4459ad0763edb3d698b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=95cad86f444e0df378a29c9e1fea3476ea2eef96959d5cbcf0dc4af060556875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=5824bc18aba0f27c7f53d007b4c81bad4247f579ae633760ffaaab69cb3dcf16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=64062c2f84b5431723b1459fd9b61b96668f6cc385a3a9596e7fb3be19052f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=8385b149b055f5c07d06c6ddcd55d1b5610a95afade4ce343ab401bfd9661928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GIAYUI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC7qMFEvUXduxo1w%2BTatwQ5c12Q%2F1ZZIL6JkRHYciwyJAIhAOO1MvHZHqyBpvumf6bxzvOIzNOxMTVQdqFpjSSTMWauKv8DCG0QABoMNjM3NDIzMTgzODA1Igz66vVrK7zLceUF774q3AN1AV8%2FaeyEloMG0aQTyuyK0Ew%2BgRH%2BmzSMXII6csUdiecvqRaGWaJAbhU3K%2Fv0ubFBRT4wwYHVBvmthK8clJzdEzT7%2BEVwFfy2I4TK7FyO8JLmoqopvb7ngkPleqEMCUuvDPbl7jxwJmIB8hbiEzSyzdvtttakg9wS8hE6C0DOSWD7uAlaoWxTswlP8o4plxuihX5ZfCbBtN5T3l50j4bapWLVWsIKmjYfRs1Y5XRS2wqqtMyJOOaN1UU9U8taBOv0NigKot92QrNEKf7rX9PcdnnSlP9gGCZJ6JdQFNfagduwGD20Y4sJzPVpdLmMjsAcMV3ggPE7JHsbeJ7jmh4247f9RG%2BrLRjAhEx0JyCvowoalhypZIBY4g8mEQyEpkGHINx7O8Asfe3zhGksMBnQEGGPfPg2WkO5X4y6v5d08021yCxoBy8kwBQKqSkmEuiWIwxNfJ9t%2BikOziO%2F2sc6YabhJ1q2z0mZW6MKNI%2B%2BTLhH650O5hi8UfGthjHaO5XbpIhICbH4suZHtu9QA%2B95XR%2F8pCc0%2Btvt0VkAWTu7PY%2FXKYYdg4j4vcqgwI9tFLVhxx1X2Mn72t0uwWIUaMoIeFHbO%2Bi2vcJbu6Ethd811Fo7ey4q5WiySQ9NUDCJu5bEBjqkAdh7mN7tP4WtVPVI9k8ldD7vEKdsUu%2FhcClMxKBw34OHvKc%2Bzx%2FC1Q8T03RYxxBTN0AInBpDYIY6SfXwU%2FVvMBrr5kWhTapIzBa224CYCIUOA9TmbaHOxlQIOzVHPf2BxdZTNhFPZInqXd%2FdR8E6fLGGLe%2BGHyF9j8bI9KYw8q4lpdL7gQNep%2BQDJLgSp%2F1JTft4Z661wUNx6WWQp1zfpDGfioPh&X-Amz-Signature=c527054e44e0383007abfcbe85ea2886f75d433a9e0df128bb3c4954613979f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
