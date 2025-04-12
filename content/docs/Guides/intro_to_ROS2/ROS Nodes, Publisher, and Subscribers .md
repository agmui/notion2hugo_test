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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=b6b8130286199f9271049e4fc3c6ca585dbd49434355a0b8506b4fa3dc7d47ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=bac6602a829dcaf22ef5cc33a33175296cb9b25cd72a327910ee502ac1ffa7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=8f7e6c5e26dd406e033ce25a79f1ceca6158d2db8060f4f6764f9830d9acfe73&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=7736621e58a50aa81195cbb19db4796ba0b7382667794e135bdb567687e9479b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=f23ac6d38b6ea50507d193b27db08515fe3951ca1ec2d2c23d4dbdb43622dec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=99aadce67353479abaf6d4177052039702b8b68050a163037fc61dba99a99263&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=59bbee5ac21773135a7615048202cfa087768f4ac5cb9fe65a8ab7fd48eebe47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7PIWHQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCKryNhTQuR0w8%2BPX4fTNpGhAI58E28ltIKpZ4Puja6SwIhAN4VHcFmoz5zQcoehBecNZY1C%2BWW%2FR%2ByYH9kBTUpBJ5yKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFs5K9mQM8nZwmMBUq3AORBezhSaRHRzMYNjDegHwnkxCY8nOZP40JmPbL3iLe3MoUl5drFhZt09K9njFG5VJUPsBZj%2BEs1cWD1AHYqg4BopFC07vSkAm0PejLx18%2B044wSKfA9XJWb1CQWv2%2FeDH5X3n0cTsPlF4Q2lYeVkTOzumw0boTdtJF6lnYJSf5f7QW9m3WfFoLooeVxMAFHbyCiTTR7K0UzOr7uTrbLjmZ%2BWtawkS02j3BqOzu%2BD9T%2FB0gfEcQsRyYZ4zTmN0bJSznMfnqjgxhSqExHrSF85AvCl9Q5U2kkXujQt%2F%2BXxSbdKCBGbJ85M7N1l64kITdesRdBRPpNHjrnZ7Hr%2Fi90ibWu7sXf7lkQnq4Ea1L%2FWq46ASit9K%2ByylsqY7M7bYA4647XXegYvPzVl8JBCbd%2FZswZ5SLfj12PrbhM30iuONS8Ey%2F23y21OGIcLNVD0brMpNfbujwCjBYUSyBvyOeN%2FlmYOvUwKQdWQF1dLsi4t6SZcoOo3ReDaJFKS8wrUnKXI9VY%2F0TQYVr8C8wOmiuUdUG4bewbGw3yeQgbczj4VrsKYBxwaelzSO3gDVP2xWKXcn0oYN%2FtyKdtjEA8rGi%2FKngud8UWQd%2BNzbkWSKm4zsZBnevStJdDE9%2BGFiBIjCa7ee%2FBjqkAa4eWsTB9T0llgWPFaIIluNDYU4DxmEFPUESoM6DEG94K5d%2BNtT4UE22zVQcnLM7xOoZiTeQE5mH41fx69RKfqFRJLnTaoBjBJxhSjdQZonVUHA6CQxmMef2w%2FxYQO9OlCg%2BCesR2AbjLRKVz4JgkNTHTuRSfiI3M8VHNVv0mPwhPrmt6JUrV3UUY8Un0%2F2Fi1PiJqm5u2cgflMkoFlbQ6Smuafe&X-Amz-Signature=1dc9947f030940bf8eadf6e598fceb4834f4c3c0b0da632f9c11f5018a320266&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
