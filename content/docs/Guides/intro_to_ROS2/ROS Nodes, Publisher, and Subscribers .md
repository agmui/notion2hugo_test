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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=cdf570eae1bd62d24fc0bd111a2f1382052f9160f89e6931d4c3ed65cbc76da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=fedd9aca39049f95881a651815041f079446072225e1cfb2f6b4aba457a78867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=9571c394cb4a23c205044cb6d0bcac1cf102b32c4f4b57356704b919bef5b83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=b36b3f188735c032782f54198a3b6d4dc98f6a71cddf0a337abe9b413d6eeaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=ffab954d158cea9b9e8781200ee1439c9ac7108aaca91f6a0a2a3af2c98c74d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=6196f781138d5a102deccb7133bc0b8c3aceeb5ac0accfb066d7310010181dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=03ac18d192ab56e60e0a4bd42e883ce0443bbf52cca75cefc681109aaca36162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ76WNK2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCuOkza3qS2edhOaVSbrTq6i2a9YM%2F0URXw%2BYxjLqEQKwIhAOawRPlghmudM6OOtAa1AziBGPJenmirwFiQ3m%2FAbK0IKv8DCFcQABoMNjM3NDIzMTgzODA1Igw7jgEDEhEaxaVPD%2FEq3APhB3f8mdgvMKbDe9xHhITcpU2gjF5K%2B7NtLlQ6spZgcXfOeXvhe0ypTOZXAiOxs1ov2rQUoRKzPj5NR0FzgRseOY5%2FP3xvv302n3Lpbk3mBDZhoLi35X%2FrgNb084LsasztgiX4Gk2J6RtjINN%2FPp2WGOCFrcvhn7CyOg3%2Boj1o2du3C9f6j8TxbSVNDpPHzZJz1WzGczlVyDfAK6xaW%2FcwDnd8lx2CPRIc0wKG1UvDgm1%2Ft1kDb4h0%2FgUeguDQAPxR6ih4JSHm6SnBaGAilZQW6CokyT5t5U0YwjH57yM1UVYcBFe4t5soMerOhTMr%2FiNg0NeAwPBFesZqi1FlWfmF8LMaHutHzo5kYb6dmiv2IxbXTwq4BHwuugvswPfnXIqcEQmYwzTGr2iQS8LQ66xzU54eUv1%2BkKwx%2Fa6cCXQgFR9DhymA9lErekh7%2FrsI9XgEDnlFesSDHIQOmeOdqKVQu1kYx7w%2B6Gp4APEHV355CyOqnrhfbNokITxmTI6Rgr%2FnMrLUH50voAMX5o2E%2FP5t25uJZJhSSL7W11y8NZ2zbnZ72mq1TlXQHprbROG8fcYqmBoV8NRbUOPzrEhZO8MJz02CcakhvlElWd2xtuvBGkdD69VLwpAZXsqfBzCz4pHEBjqkAXPSFMOl6RvDdkzx7xBeKfcVoDRymj6rY7nVrjMWDqPuXjS2hQWKYvLmSmqIzE8xdNbODcHohZ%2FhOtEVWMYS8pX7Prp%2BCQEkGj0uqakmetdGkcL0IRUmmAiISgD2MPhddAdcrK0ysQ9lT6VaSkR85NzYULnDBJ1VIkEhjmYQ98n%2BFJclDHHJBN%2B5Fs7uwd0xE9rDAWQ5I0xxXeKq9S1Jjj0OUyfi&X-Amz-Signature=e77244ff423a384bba0ac96ccc641abb7a5932fe15124cb3ae194e939b3793b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
