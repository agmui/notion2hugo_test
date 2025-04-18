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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=acd0da804bd9a783f2f12c1393f5475f4d1fd26d1b4b4d4c3e4ff30dd9ae1fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=a51a4a92ab89d157c5f320a4bf8bc6e44c50875c3fca1fe34435a64b08592ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=414817c532abd6e673b9ae42f2c1780d735c739e851a02914716f49100b92af2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=79f030d05d8d47c9cf7e4590fc3b3ec13bf94d24c5c09c2faf7cd9b8f84278fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=5210193f259c299e1f82ea29c0d8978f05e8c9eca36099b73ef8cfee10e6afb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=83acb5aa98680161b913b4918ec815982494dadaac8a90c8ee6270aca42aec77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=59722d4ef27c81b9c9e53e7f0fe3e80fa3a950cddeefa4d37e33554946ca0fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAWZK5T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkGsF97Huf1QYFuXPy6CptykeeqEQu8ZucwO%2BTbnicDAiEAo54%2BeDOdeGvv8N1zR6Araak5hV9Rf3UnkNwRPONbJr4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFaOPIVfd47g%2B4yRDSrcA7zK%2FSRjmVjAhw3%2BvpHlGprWO9bCyad6PcvgbuNlEN0EFeC38wbGv%2Fz6XkT3%2BE0MkqD9xYFqGjUjcVklXiCysI7zzaQJLgrFZVgLsXZCPzB1XhJ%2FRJppBlgHA9q30KuKY3g3vEBxaq6QcLc8iZKjZl3yMfhmOk%2FydY2NHhzWw4mh8XtDFgbdqnjtWf4gH9FYuVijy3eVtNcDTlQOEcwvWqA94i0BKad3F1TABm5R8CnqChoDfsi3JRZ4q2XmYVA%2BhL9lD1G6LznsRZ8VJyI3Dpjo%2BcPRcUk4Hf4ze7nUUKZX%2BXPWpaqZPHmC37fC5xz4si8N8jo7QEVZAwYl6RTG%2BOzwYAC16nyuFdkLVZU%2BczLM%2FYRL6WdMh3C%2BX4IkFGbcVK4gETFY4TG96zg6FiSNGbNbbhElJ2md3u5nrIv9YCPfY7USIz6%2Bel4uv6ObXigrQlBLi6fQkKqlFSQHqK95UI3pagE3tNuEwKUsZRVDEj3HO1Th0wbyNy7mRsi4pQ0nEoSUWqnfx8XXnNunqo1wpQDnLz3kHJd5Z8Qs%2FfkN6JrZ%2F0Knz1m%2FZjisKOcI7iLGsO7YvSMU%2BXruHGVkVryoyJ4ZgS5NlFEfD%2F9HA26hEbn7oKKkL62etOzG3gasMOfYhsAGOqUBOY2J6UvuYu%2FoipgYtsBi8XSv0YzuCWEFafJeOLBJ3xrHrAQMbZgwmS7MCm%2F90PU3eDu5rf1PNO2wk3FH0WB05C7sS8bzWWmbc4j5J%2BLHPWAHub1mkcl4aMGS5tOybACg2Abh1ZSU9Z0zZvcQYXY7JQ8ixc8xPCTJO5RO9oLs08RaGshQ0pmZBMQXoa1XMOq2s16WFTb7l8sllLk8r5zbR9vCGVTP&X-Amz-Signature=f31d36aa1f6af9acbb7de3df55d34b27c6696e36707114586f84d7c40f2a4c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
