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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=9d60d0d43cca145c3d8448b2d6430b394e75c942b9b74c19e2cf691a046ebf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=07f86a1b2ae15e920b49fd10130002ad3ae42ad0999ec04149d24b148f31133f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=d6b6604959effb93a38a79d45e8eae134a7426d6d0ddf59a0cc76c633684e4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=faccd670fa79e46363e17e827e2f91272361c164348636a93edee8adf29f31ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=a8e5f3c95c9c74f658878731b1a053b7b2a8bd66859dff1e286503fcabf81eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=8639deb82939e233fd3f8cf6f27589859e30e67824d62c8baf3da0f05c87fa56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=b6486dd5f21aa57ce56f3bcc6a3be7a8f6b7631cdc6c864ef6738dee060cf152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VO524P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEz6efgti2oqxWRkiHwpn3ybAkKgBDkODTr6lAH16%2FR9AiEA6G3hxNLOvWw1sZKQRYSMtZWPzd%2BqJD4FE1j2Oak34fsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQeNwACo2mU8pOD6ircA3uWQ3%2FQnW%2FG6d1%2FkBNUNW3u0WUeKfXPqZDqQH4alegDn0X8LHhvAQd2CATdcjGKTc35BzTiThkFJUQMEOzEQyklu2yfqjFXBrMhjVMB4yFSUfHFHFpQGT8O%2BV9hG98%2FdCGiq6Z5IJ7y8zvlDGaWn3l85bHxOIiuA8Wl0CS60R%2FD4DW4w5TiTsxAitvyaZS7ECeOVnhlfc3M1bXd%2BRgkUDpVg%2B70Cj75KUVPLhzaaymOINAJG8D9dXyzYkkX6g5bR6f8syq6QyfNw0iXMavsLU279aBaX%2FPvvXOb9yEr0STTLjnx6%2B%2BVDHDTNwr2OLrWJXFjw%2FI9h7VQ2xgbhy9AfAfNq%2FJlzhm8dxRuD%2BwKJQJ5eArJ%2Bza9bewT8rxW2O1X1%2FsN2%2FiatfL47bveddC%2BE9Pn3to5WbTBU9n8YUBku8TKT0YzpdQBagaG1z5Btq9B7n8q94EVGQ4S6NE6XH1ZzymchjpIPSYwAcGxtgwrOGtwfxWfUTeexmGdiM2hiYmuD7MK4tdZYjRrjf9Z8ixm5fKxJlLz%2FKejfysjj6j7Wehz%2Fnc7OycTZnL0w0XTwqnc5usu99P%2Bfz388kJ5oQtHwTFA0UjvVFpYnl1jn5oAD5RKOnWCp96%2BPZDoToXiMN2iqsQGOqUB%2B7qvrMa%2Bk89waEGv426x%2FZqUF9EplcAzPvjo9%2FUbOc08HDXa9Bz7I%2BnuCWrvaVZ6B%2FHeLXL3TZzkzCIgOwwLJhtQhdJ1Y%2B5KHgt7U3yb%2BpfZd%2BOI9oqdeHz33ASNapl5oY8EWuijHMBeVvd4aIFHmflWsBUR3eQ0dYsWVLvfGvY%2FAG3YrgPQ6dESk33HVoU9GuzjJ%2FjPtXKkdtjHCiW9H9UcaoTz&X-Amz-Signature=73357cd99eb32896f7b527498f2c2ac80ee2874c7ca41e8eec5efe3369d449f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
