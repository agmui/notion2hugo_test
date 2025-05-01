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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=1892bd3f6d1c7d7e71da466541345b5930d23d689c6551ae79ca73eb297c72d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=7f6173763b15ef8bfe3db0ec79a4b8b98c91ac5c4e7a104149d964aa70a64339&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=3e99c25c0235084a08a8d12b21d23f6d8632ea72d0c30aed12eeff574e5fc296&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=fa1b91626ba95fd9397469bf1eaffa1c9e8b22ebeb2f4a3caaaeab62e240fcf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=fddec37a3f0eba7340476dfc6b1e566b102d10a93f2159ff9699aced84105b69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=55f6891e0dc81b8749abe7bbe3de50b8f4f5844816e479a32143bdcf3a045ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=c1aa37fd4ab0f561fc48091bd3a8a738e3927df4b684a6c55a270110bc351194&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGB5ZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIASP2LD750hYfO6JROTfxnf%2BuoHzArLOQO2JZirOAjMMAiAFOGe2sRwsu9Fm6XoxdwWtht4StyrKKEyK47k69bswUyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUewHGUGne1jwx1cKtwDTTg58lGFdiozAjsXCQiS%2BUvSHubl7aYbvFvVckru0OMPZM7h09jnDllNxLsDXSS%2FcNuPL4I78hwi0dJj5lCK6bOOMET%2FHdYyjMoTYAkhfJHi52KsDMx8k7GLvuRe%2Bp2wvI4Pd6f8mT3W4meTrJl7V7BBjMH%2BX0FRB2UMxzQpVcfogME%2BpFK%2B2qsrFwhDiKqe4O8SM15TE74zuQVsCFOVcWC6w%2FaV%2B3X2RD6cJnpdhrVL5Z05QkL9AOLGgp%2BJCKB5DLqsO9eqnbD9J8I%2FwBotZES%2BzuH0SjldQhsP4QXEXxLIQ3G7dYJ9vne71SjroeRrbFeEJML0iBLYYNYSfhAk8aUPgkBPyKZfylSFZEvkkGUmPDmJqAdpueP8tiOhMt4hJNyA9dsXE3xINRaroLhRy1wXOB9Uynl%2Bys09EBeycYzNBf5vTYe%2FNnjajQvLojjhwA6RiH44zUecIkLVa8BxXMcnmFXXGrqHsu84n%2B4g80vw8iHukePhJpNNHEpUGrXC5T%2FZLunl49OGu6krhB%2BdGzDIHM3GZAUWnOYcaUJvbxNAPN14BhPFWzR8ACY%2BfLv3bAesEWYZeTi0%2FxiUmIb9Tc8uUpfUMc%2BnlJAK6u3rGjr64nOQ0c0jpmExgXUw2aDLwAY6pgEBHtIQFStD8xVD8kYNeen%2FlDl3uJYhyuGxYYXjd%2Bk%2By%2B3V3y%2BQNfVU7geE%2FeUZ7fA77zzwIKNdDMeayL5tsVgWFjp2qcuBnGRnZY3m4JUQ2DXC0MwZcbzNQc5KmGXQn8LXX7J2kJBJ8onSjQjEKaa6VlEDbKZJla3uaMeCiBoLmwoO440PX6vXt9Ptk3E7jAoJcWsUbfGvVnhEJvM1wzJtdqdKvFtE&X-Amz-Signature=42022d5636a04f8259528d14c04ce7e1ed7f2fc999d1e60093393761df15f6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
