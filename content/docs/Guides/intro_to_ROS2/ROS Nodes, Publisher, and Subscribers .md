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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=97bc41be3ae4f7f22615baf8fa43b6d1210517d61cba3e0cfb9819d9030ea63c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=d7c82badac379d79725ebe75cd7ab7029a788d2b0ddd845ed6b6bfb3ddd0aa09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=10ad0f41a53b6cf0d446308f278d34fd66cb2a25ffc05f54a30ea63ddcb7dbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=92349d4e4a273347f9adc3c94356881882dc86cbf35221459dda8dafb41f9ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=442e472334476987a4022f29e0341854a88dffdd00e296a91dc9d8913efa3714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=a8d46403eb168bf6ea2b091a0f468cbe6c276f7c12247828a1b73fa84ee08745&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=3cb6cb899c8843ce66659389318c1f1dfe8d5dc27e76bd298cf6ac332b011fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDCLNET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BU6Ql8NLxU0SlSThG6%2BaA6HfQJagNEQHeDkNgFS5odAiA3N1WSJDnNpIxwWb98QWVFohA0jgYBe6jPKh7UXv44sSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ6mIz%2Fk5yTi5%2FQfKtwDMaBLWyWWLM6fTCN5f9tmc2YAKMuB489UunOicpe8xJhiPgzkASdMzvY7Xk5GZNyxbmCGYhR82kG%2BA3CUNKNqODto54XZvQACsKlkf47OQGsT4FJni0TwKcW2%2BEBwNGYROHNlUi5FsHJPhmgkvjsyOuoUKy8APN5k1zyTgE4LSKpC97Uj1PsZzNzT6lg%2FKcFuIfiVK5CTalVICk9o6rp0hNAxdrwjxBjUdJ1ZdW2YVE3IKWThUitfAOZp%2F5GmmcsePf0ubmiFnh8fS9gM%2F2UunlsWzL%2BqWM6P5CanVGw40o52vaIAPv5luvYckm8cO%2Bm%2F37HTuMqcaCAUHrG%2FUMzZF%2Boy6glD4hW5Q%2BDaAnSfIjVlE8XrkgGnonqwIvdwPR6PQrk1%2Bp61%2BukOYGco5ieAt3MyxMU6FQS6epAmAtss0cEo3zFNw8RgLpzxS6EKAOH2Z540riLZncLw5sItFSSJn7LYBqjp311uRNdbplgkm0K5a5X%2BaE%2FoFtTdBCOtwEuK9zCLD1gQzcqM2ihEZSSbDdlr4%2FNx%2B0DRu%2FexXaT0YiAe9u9nPtD1nX5drhPtjWpTUlUQByD4PgyZnGXBDrTXp3kd0w18RIwTK6cDyHljv5j7G4GbknddZe4C8kswgOK8wQY6pgFhRC1d8%2BlESfrtkgTKHziDwjHGs5pbiGUl1zBdaO90AYJ8M%2BGQM1DFZFh8dEPw5ldXiAiuQFJYE6RaPRlxxvI5o3Up72lt6wTF2%2BRvot3hh5FNLqXjmJTvmxJHoJyPh8Cb3bZOuKeXcvmU6Wpz4n1zOU6QzILUCquXA9%2F2M8JDfon4kFe9NP7oeokiFFWszupfWDFgVZBFErH9EV%2Fw5TJPvAQg40hz&X-Amz-Signature=b0a50d64f9a5c4e228f07f8efc32f7e2b76a6dcfe97f300c7aaf92c3469958d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
