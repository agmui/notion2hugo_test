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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=5b731c6c2f743f2fb9404a7cfb38d0488c559a2cb71883590cc48ac9c65921bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=5b69aab7c9e71a48395c605be07196b3b7175bebfb5d5dbc8ae530010739e13e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=906b6af6f945f6b3cbdf915cbc95f97a7026bc91bd0546662d9bb8303072140f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=38034a7a10a8b3c6d8b6fa68c2c36cf8b28559afa0cbc17819a32a3182faebca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=672588c87ec4ac63a8ae64df80fb69a601d8218098701c07e0742513820ef072&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=c48584b3aa80654611a285184ceea0a01f51f444ebc4ced364ecfaf44d136835&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=1149e4eb285b7c1725b36eb44289680f8748ba924ed7bac8c2f94a8804db3009&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLXLHUF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk7QW8tbXpDiWb7BSjOg3pTEOzHNCu%2FGzxkF%2BRMxNO0AiB7Gd%2Bv5%2BG1%2BBGbknA8GbNZaAaJp6Db5jNBkQ9pwdPleyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkIYFUhcouM9jQIaKtwDsOc4ZLCszOOfG97YqewB1Pku3RRhB4KE4nQrgo0UfQaBeLnG4MrfVNeqCzooEALUjtvBTkEo3p%2BzdRHA32q9x5ezpo6Feh%2ByMGd8r%2B%2Fp3sYaHvDSu9W7d0n%2FiMCFGjKSywexwKa9s9a7x0RTOCKQgwtKW9UUSG9KW3mPoEO7xjfVroshUnvRrpyD6nXQD7bPBh8tUOyLnzGpMjR0xJVsHIKSbyXgoGOeV3T%2FHb1h9T%2FvjNJtq4ncU0OV5onCsnLxQohdCM4Lxl%2B8VS%2B7%2BQ1WW67opyWeffQSyYaz3rIWOKf9WVA9LcNYQETMG9mvy8S6skDvxzLXBuPxCo131mq8rAz7npKnxyKhbgIIboYeE7AJnNq4k8eTMbmMkakLv6%2Fau1CTX%2FfxxMl5cwP7rlyW99xQE9fbxm1h29QtPkXC6WGQvNjTYE9fFwrxGRekAwXFghDZEBmEngV3wMiEJXUJpGTnGF797GVV%2FnS4iDEdADPaXvyCfPa8xrUdPfzud3Drl%2BgisqJrMUfIyOj51KBSaB18K62vuKV1%2BCtgcI8hVo2KTPXoF3Dnd2oPfYe0wmrHxBFhri040G%2FfSfYFYXISL%2FJRVKlZhKfIqayjbpWaBX7ckprGdJuRw5Bk1C8wz8OevgY6pgGB%2BTvjocl3pQSD2e61QQMyh30IixkrdPeHE%2Bi6aWi1nIiooZlANok9nGjvEtgZ0OUMmdlai2iaE3PpJAlmHiGSJPDrhxZ52irZBzRXW954XPzZIRJrhx%2BabFscXxS4NHKoBGOsYWtfvZ3Sokzfeec%2F3K2skCxDaNYdVYybItCR4OwJ5W5JxDZcIrWFlLRPXYy8Tb2GvOmCW8CHTeoyZBs9ShOygpFH&X-Amz-Signature=0bc3fffc00e06175c54b059e87766ad63290e72442e8867704450cd9c3a60755&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
