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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=85c9b048df1601482014d51e060165d8e0c875d431469c037473014cb4898539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=504b49352b6dfe7a1b3c5d3ba1aa80ea1e9b3669055f9b42d4e9874a182b1d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=36c9e856297efabf146cf32b59c8f4f1c5c772261f4747723564b846b5592ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=c4e3b5ade8d368b381f4cc3ffb03cac98462d5ae37f36fe89d8e75fc1d4d091f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=83851a514a03e454c8625f81c9c4f4b44d2bc71024939f0cf81e15ece1f4be0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=d742cf09ae5878ca4ebc116ef734c1bb120dd0633e9f140ca1433cd503c44b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=049c8bbfac33a5e46d653f8076f84983bc94626e286513d6b1b5ab107716e914&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=b971d0d3d0ad466b2bae2ed216e7e9fe99bae7aaca211ff9db3a53def17d2b94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
