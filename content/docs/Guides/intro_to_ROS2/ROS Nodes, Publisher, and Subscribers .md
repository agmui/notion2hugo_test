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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=481beb27c133fa4197906e629532454dcb9e8530b3d168e12eb359ddd8c2c83a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=099a0de4dfbf9c226b09a61af4e8f09f8f52147e227be14a94e53b7c07de4507&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=240c3c34c3f957b0ebfd0d8a8ba72cdf141bfdb462545ff1ca82463e62b35886&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=4156d2ffce5f06fa830ed7663b5932bbf8539619da2666674db7c88ee092d7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=c6c59ec6ebe563f10bdc2966e03ab37cdae7e9aa0695d9e9d585d3632f8ff51b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=9be25b414c02a9648e7327c2c07fb347867eab7b2996e025dc5ff528b0371851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=472c1022b7617762d3e9bcdd1364141ac83538e66fdacca38f4af7c9ae677e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPCVM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDhYVMZgtKLUpk3QnZHcf%2BF4d2eJbzMJCg%2B9yjieli6yAIhAKkb4uOXf6sLMQCiAkLdHd7nGnRxzVI6o45dNzkv7gogKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzolONsgK63tBMCpjMq3ANidP4l2Em1AMl3fodri1OClZgU5WucIc%2Fwd0dPrQHl9k6BKPTDtjWZVBB8Jdk8D5hBupsncX8zMFIQtii%2BhTjzMH1lVZ5xmP0z8cXXYrJObPVLnh6hrCryqVEbEkfu8u6IHw%2BSqvabSIT%2Bt%2FBKFnH9VoKnFOP5vPO2o1kYH3g5XKDETxKcQyvWF763ibXB%2B7d0rwbdDkHoYHh85gfH13%2Bw3fPcrWvxME9TEcBJPPpto0gFrIePVqxu%2Fkdpw%2Fe8uPrHhGhyJvX7I%2FkR8ySPFN3Giva%2BqCEf9l%2BAoVQcbycwfRlK2yFxNaX3uL3dKqTfIxctQh9wVxrRMuhfYuvdNVeuf2bVdS080iNpJrASXWIn0nKCj0LL9rSs4UhSNuwdcHJ7tqaostctXW8izViI%2FO3RMdVgh6GTgIjFa63nJn%2Bj8iZw9BR0%2FP847RSV2z8ouV3ke9pdNKLzhMux4bViKl6j8CDsf8AX2mXU3IYiNjF8NAWaQc6oWqEa19BbBVjhz1tZYs6D93XOrM1d4L7xUPQ5b8oZKQcbzjHgYVo7FW6zsXGy%2B%2FTPWSPHpyWA9O8XIIZjlhETEa4AwJRWOujUJMWE8z67IwbsdL3CCGKPICFnBE8tpjpMxGA%2FfS6VMjC0hb7BBjqkAchAfyJsVv%2ByyM1jGg%2BZmDSD0n1pwy3urNLIPejSu213I0Il9rQfGHfkqZDPVYW2w1pjTsNYNas4wSfdgCCfuZXdYJxY8rie75mcgeV5lSdVYJ236VrbXhb1LsBtkSVeW%2FJwR9Ctw73fJBBeyEQwjxFuZtsXfDl%2FohHc8n%2BMrhB4xZ%2FJD8gG1zn9T12I6905mTkVgWrkHG%2BoH6yV2No%2FvosHJJck&X-Amz-Signature=55050497df0530b0787815de0ff545f3f8f84db83dbfe2da6dd840dbbfec7a66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
