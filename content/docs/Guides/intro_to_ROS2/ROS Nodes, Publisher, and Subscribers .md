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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=1e1343a700264dee46328d73b532fda04a6e0ca459a2ef22ccd8ac636b3a9623&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=d023f70d80b2ca15da039b2d460a853da4cbdedbcd1f7d46ba41aabbbef8df04&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=e85b8afb087523b9d8ffaf6da478ff6156ed7665b5270036349ce23219cbc5be&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=713bff68f6becd7b5c47d633423d7e6f259f4ba63e0de309c8137621b48193bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=75937052b9eee45305682b4f1ae86b8f7deb4c0f39a54d6f3cb2f6bb8a2c51c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=11d0f66623d89992e799d985e86370780aed0471c77657aaa5d97b08ec37a87c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=5a10092728c103e16b680a52645c61cc1010c249874be55f9faa997d7fa39965&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EERYIEC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vN%2BDnw1Gmnua0dUytstpp5CFXtxuGqJaJBQCRVIXGwIga6Awxqbi3jPql03obMScfnq8NWQeI5rXFuPKBLT0qN0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzXlpcRPw7rUtPS%2FyrcA6%2F1mBH%2FMqyw%2FdIlDTByFoP2LAfLg0ESEzp9UFG%2FTpdHK%2BRVDYxCSRapTSrsEnd9fSpxJWHBl%2F0IacLKUWSQ3NXZy4dab%2F%2BWP%2F1wsZXE7xZIgVvDvvksXXiryNfEpsEVLdiuMcKimxQWqMiFCsjpt%2BW8ccoxVKQFJ1hiS4OT3wk5z%2BYwr%2FQoLxM9wUXkxVRzFyg9WU5ZtgcQjeCsSUn7jnInIxgFU6CpzygoSCyof%2FLVtxPEuAsiSmUIQgXvl%2FV5M%2BZpmjo4gO2MjIz4%2FNPGUhoZvLlPfjt%2Fh%2BR0eGFi2v8D6AXw87x%2FjsjZQa1B7dOWLYjKlah3l0z9NA9h4NxOmOgROkEy1WDJy3IgjV%2F2f9Obwir0q2PQ2PCTnfXHhKhHQK2LbaQHj%2BbfFsD%2Fcz2gy4uEdrFt%2BYmmSzmKR%2FCVRCZTXO36ERV9eN%2BM%2FdPgw8ZCC07gbEd%2F%2FJqdFPhLVAbVct6OnbqhZ8BF0Uw8kryiX4hGtewrqstox5T0gEGS4nkyss2PVy2vqhVN1hA%2BxWzR1pnXJNSq4Y%2B8k%2BzYXqna3w%2B%2BeZdoo6nEHq35lSUdb06%2BmKFHO%2BUj3d0p0Yv821K9QnBYzeaHkc1mWSwNDDBkBPYy0oiRj4RYF0A3k2S8MJ31kL4GOqUBkvmZ5HdrnXjtXETFsXhA1PRi4bThPEGFXrgA11XATUT%2BmKnnY7k%2BU%2FvSwAB2%2BCd1uVoRkgtAT%2BHB7NRG1xchC3kYsynEoeH7HKHjFQoeQWq8lGoQujLAZQ8jY%2FXMzvAvwGyHMMQ4lfm4sYDCAYHmdqICEEztvhR4IBv9bbXrmrSXx%2BYuOm%2Fj5XCdOf3TgLBR8kZXj0MQGI0bIQGSGLaxw9DD31b%2B&X-Amz-Signature=a827e9cdd190cc5facd1b5118cb19366d6bbeaebc85d2380de9b662d79494de8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
