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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=5887f7acda7714e11bc6b6f7910a43568a2e98199e9daa710395ac905811ce68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=979e8107928dcc7f4aaf415db77c90708a94c476e19f4b3f406f50038347089a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=bea506899903e5ddc7085924ae396236902b47fbed84692974ce347baf1864c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=01095c7fb51488e029278e6c318e77f840eecab22a215546b38338ef344d58ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=9c27689c5d2757605dfed67be5f7f2533927b91bfa7d3267fb668ceebe1173bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=8397715640e50d7e10453441ca3fac578a9707d28f800882604f64640e5784aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=c6876b054598335b2904e796bef15efaf873af45b984251cf4c0bf560c7a80f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFY6QXKG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD1ZcebncljxefxSrBzN8CkDi26fcVPvEDXMaODWTR4TAIhAI0elcfGf6oFeebrDSrNmxjYuK1mW23fNaO7JQ7oEhjIKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN3%2FWsH9vYBzCLI5kq3APV76GL6LLA3dwHxXojtFFVCvid5ZlIdvRq4rLkSpClfox4%2FhQIhvXbIOyrOxh3r7IQa8MoSvkW9LLizEOXj6LzDRW6XB56%2BFKRb3c0APlh8OnyH1YpTlEPdLXJQ8WSbqSFxFfarEPk8KhfPhIVzrlbvfc%2BPYd0AprGsJXtMwk75R26qyw%2FdXAZ9EgKhLqzonyRDw1FiRohtAQlS2ZFO1q7QIGq0t7y6PozgQva96Z2%2F%2FLMu9qvdCS1cQkv44NSCxzix60CdsyGyIVZccKar9MahHMF%2BmkH8dQq5%2BwTtjge9l4GKkcLtI3aQvbXhjqC8vN%2Fxl7TacVRyS4Smo6ciXo%2FNwqrwVznFGZ1MOTD%2B0bjqH1P4XcLCQ0OwRlzAmC%2Bavg9XbEnh0TtaPbvFOJfkXh8S8M2juTVI08C0CTW5CSoM4TU6fP3y6lpm9LFRbhufOkLJeChbMQz2FjZUT4566hj8qZgZ9uq4mycXP2H1f212LDnYIvuI6QLI%2FLLRKrK3c30%2B9mDPGbCxvsUzMTNa1Jq90anHeN%2Fou4MAhlKJDMHrwag0NpZuQkr6uKy51ghNFD0%2FOw8JaUR2eesF4Gjw2fhhx9i%2BNNpnvM8V%2BkaJUgbNxr8HBNz6zxMQTp%2F0DCw69vABjqkARplz7e1dAeaVqK%2FNtPTe%2FoyH%2Bee%2FZhTKj9FcCD2EkXykuKdUPbWG7X9%2BEDtHYzUJg6N1ubeqpBlUYqfdR%2B6mb79pAqZqaLxlX4y1xobdLK3aUM2OaJ6o%2BXG4DPA6NpKdxzjyMtP7bjmprUCDLQXnCyJpNN4SzNNnKyjqbjwI7ejPIeb6%2FefDhXNjbmZKGHji4MzHDxdwJNZb0HgGTU2Z1UnnR1E&X-Amz-Signature=cf7eb0317d06809538e4f05945e4d318eb32ad5ac29b15addaa9aaf2f3d0551d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
