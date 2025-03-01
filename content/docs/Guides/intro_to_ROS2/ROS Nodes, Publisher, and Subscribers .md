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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=063ec53216683feb50efc4c4aedbe79306af437e72e67a4da8bc7c686221d50b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=f61e4c19e6427b585e373296422f1bc6bb6ca838430e4c297099cbaa4b68cb48&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=4b6f4017fb45be8dacda8297705166016bafd25e6b784c22c97a5097d5c3fdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=d9c4784b6603860c025390b8fec441e97bad19dbd5bd96c922faf1bdfc71f925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=cbb3ec972808d5a7ce9e455478401ced2a99640c7693eeff96d9115a4536efa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=91cbd0380e02975639047ddec138842637489a235be0ffaac002c8e9fcc7e520&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=d0321d28590b316d494da22a5ab87f9d0acfdbd1cbce8dfa31100536c996dd13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=f13ef78b9d05c53c8908381a04c97c1ad4180a1a57faa0cc70870996a18da30a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
