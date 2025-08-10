---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=bcda41e73fb07826ad27c3bd4e4720a09843ddcd3f9613891cc8dac5841947bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=7982c7d73cc62b47dff62d73c1787c68f5c5a787cdcaeb8ac782b3d4f60b8eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=ca0e6bfef7b77a8acaaa451d0d3cf6bc3b3e9793b15d9e3bdadde07c485ae5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=0bb4b83c898d7996e22c3b30b345328b7ad340c13b0b12c80371e41d9a6bc87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=8c84a56245fdc776cdecfe84210d324dd38c54a34241c8592291955e5380e3f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=cab91275bba4b27bb9ccd593b77e4a4452c2d0527a6b101785e1e5ba2ef15482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=e69857f3a3feef00854cbb9ed63bc589f47788926c1d86ac6e0b99373d0a92b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRYHAC4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaj%2Fd2hmu1ErN4YY0QTXY5PvdHBzFLwgn4Xe%2FbbH5lSAiEAlbBrdCouVz8pPUakKx4ZAJQ5bQz%2Bs7c4jSpEJLpNP8AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXmKlumcOfMaolpxyrcA3UXz8KmwQvq3L08M%2FY8o4PFOf9JY4vKlcJxL4GIAU4bN7Blf4OLN5oHZx%2B8wzg0gHAjQnsH%2FtX0iZZy7ZiDO9bIFy9H8gU7Sl6ejFu2TXTdWFpJ7CyCY7NrbbDvOcNuLhYMGSt6z4U4U7w%2BgFFWuiHCwTrH0yVVmF%2FI4hf2XDhvwweg1CwRt%2Fk0e%2B8%2FVNGBF7Q6Xfs0rHdWTqxN1DoHPZC3g6%2FWcRbGeATw2JGRUSc8coitjhWRY%2F%2BTbESBTJ2NbJGMhCRVKprND9iIWu6YScZHaRh1D22Xya%2FS5KRus2wfMCC9%2Fdtx3KXxCXjXJ6t75FKlW4LKJ5k0SIq88ZG05%2FNTeUNYbMIYfExs576%2FZ7maVdZHqrGQwEueG60Y7t9saS%2BXyYIt3WfqYErcDWb%2FLv%2Bx9qEHKEDMbIV3rDF1wI77n2ie%2FM1BFgJk0JxEZniEaLCaPWWBQh5F%2BU5cwQZUlo9%2BE5wCILaXjUMUneIY2ehWWinP453oTpELakYNfAW91g5rgroRSF4vJBVkJX1MjY44U5huCiUWiRNUXZmj20OKseSMvVa5xp3SdDUw6X1%2Fr%2FkIr1McYJGz5X65kK7jQFLXqTYwueTZe7vOb2b8gfm7lQHkD%2FGPzCWOfJRRMMW648QGOqUBPyFQ2W%2F%2BJA1sZDQNx94Z5tvSl0K630hGDy65%2BnkTa%2FrEL6j%2B4qLIgnHZoK%2F44PkBgeB2CAklzuNlmJywh6Wj1P6bzdWKNB5FPpCsB%2BUch37mA9uDqd3suAtAOajy4OO%2FK84YBcDVd29pF1UZqALglKQ8VHwAOeKZS4sHEL%2BrO6LxoDGtqB1NaXu0u%2BdU7%2FP43Ue01vomq%2FGfRniQogx%2Bg8QPiRfO&X-Amz-Signature=79527f9b0c447777ffe9a1866f4822a9a0852b3fda3bb82be1661a6f7065bb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
