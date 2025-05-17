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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=669774a4bee7eb83e192f9cbf4eccf01157368f8099295f4f4c925be5485d547&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=f17c7468677639320cc3534235eb4f7d5dcfa8d2f0367a4b68658004a2f1fe53&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=5986f5b34f5a9d731d8b3700bb79780bd6efc0dfb7afe19fc67ee2f98016f91a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=eef9b089483200d58e4fd8cfdf0bfa2f6d8e219acffb9cf2ac75e7e4394c8b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=71d8b5f60a1e1145a8a345ca3e5a5314ffa05a22282584604273d51b8bf9be9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=80e9f206dfcaaffba0724d32848756525bb07c2f1e8a5d6fb76860f5b34cc802&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=56d09055b32ef317e9efaae925e4f806b79688bd5c709acb918e6e2ea1dcc41b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZI277T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD55b8XKqRvh6GOgUPFdPAkf%2FpmQogKVDPIITP3fSZR9gIgS0yx5CrJk7ielMHQ%2B2C7OwqdaZrQ3jK4knWSZKoz1oIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO6TxeDb2GZOc%2BGwiCrcAxAUP2Nu6TRNxAo3YC7jqnM2thzRs52D1K9Vtq8Xf6xYr4fqzatF2JGlQMsiW0LSYMSpPpVhuIqTKX3P7YoIGR9ecuUM%2BQvZIIQb%2B8dpapLFSGsmpMpZsNwh4cjkVgWtoVu7AN9%2FMU0l4wdRa1TxyIIsZPvh26WHvegPT9xJKqk2GrW87lSpV2gaxYW%2BWrvbRtzJLCagAbSMOqkxV%2Fkgyt%2BY4L43dQvnr0rsARzfJlp06BLxUzU753pMNBRT06ImUqoT1E8NnxbDnYkXZA1Wg57QF3Drll1B7JhCuSV1SBsORkgbPbB0yjsHtQmPjZyE0eJAFOua0I5%2FzAHE8dCBllAlIP9EI5hGubt2hFJz8GUEklzvjyxEkqiaVaHBWv3PvjE975icQSYjGCm6D%2F8%2BT8hYztbjgv0JDpVVw1N18ObLEJdxNjoQxzyjcRYmzRHu0ht10t3ES5NO6SVvoD25D9gNuMXiE9HjT5V43YZVvcRkxoH64ytLOXcIBDmtXmvVFfdumzzSkgKl9MrKimeZN3S7u4OVAgoFYETv7VGiAUKQ9z9gF1PpWQnFqHjKuMnJW%2BICm4aR3AhLjamRAE1QLwmGrX2HYgkuOst1ls6uKayMhJwPd3CNXWoJZisnMJrEoMEGOqUBAe28zaOVvs7WsIMbUlkjbn2qyWOIMyp7FExLoM7IeKw1MlI%2Fy5MAN0I9osabUQHcTJy%2B3a%2BGkQ5MKUmQlNaQ4duaLrlazNQ2RTRI7Uq0cCcROJbY7%2Bps3K2vBToW4Y16ggiSjc%2Fk%2B%2FlyBDFla1HIj9kmlnxjyNUfzV5F3aGaCXRreEiHSZNGQQCpEwDSROa1qXNf9dnmCEuW61PAG%2Fsp%2FzhnzPn5&X-Amz-Signature=2792a71fbea3bea7f5f1232715787e7dcf1c6fd870158133cae2e2a0b6a5094d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
