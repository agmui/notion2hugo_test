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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=ca61aa34787f3f15a25cbbb6772a4b5112d25dde5e327c14ef0797c65f1f8142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=c221e27dd9023c7b071918e00545e756cfd844b9d4fd6632ed3d095adedf85fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=4765dd29f8d4f06e80c0e06c5f1cab494ac5f011282d65a6af94d33dec50fe07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=e62fd3d0547bd3333030d0816109aa966e7a713ce1c23de07f603ed42a4ac260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=7fc3abd45d22359296207ff75513a465707f5f45a66106953f72b0146b267b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=83095d6bb9d16f775b85f7092bb89cf095f33e16d14fa4eea9d8533ea6c9ccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=3ba915ffa4b6aa5d4e83c59f5e48b21214a4cb350ccdedd47ae5333fc69d605c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2MQ4ZL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fIOWHvjowok9mKRrrpkD2VnFavTcByjuALiN%2FgBRUgIgJB0D1a0bFfsjSFU%2Fw7XU2msw0QVWQlUmUL6kNKMfB8AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2FHEVLNwAxtWfKrSrcA4VMJTlOI2aFbmI5EUnZEfjy%2Ffutayws2WJFYjSFo35kFsFm1XAp1zZoLR9Tx9e1UzMVT8%2FU389NRXhGWaYukMA0EpBIixVhFgy2MtcYKCtT7YjTCY%2Bzpf%2F9ZQGmMwGCTNNd1xdKJqleOIsNJwk9UWDKpI7YUZ8XEbIQ7NFv3DdHHo4IuGVB8nZUXsrqKKqNZVrf1iSXCnmSjjN9DTrYMBq%2F%2B4C6if%2BW9ACpLcwEad9ueuqXcJGHa3Mtmc8aO6BmJ9j74qc4Ams7zIhLeFOR3VwylRI6GeYX5PjhVWs1LTRqYmKccKgRE9RUiqHlVWi6b1XedQcSsr%2FVygquxYcPkO3RCBmeCkCydd3q6f9cScAARBmKBx1cjOq0pQC%2FLH4RgYFp%2BQm4LfQVT5OiyQvW1083ZJT0WqYrjFZVNRrPzMBukwZ%2BfXa36lZ62ilj8tX8JRLOX9oYhJtHmd%2FYIHcAr7LYSoegCdu42%2F3p2C%2F030xctuVIMM1qXXJv976vci1xRRRAnn8lBSTRjn2rEcs7eoCDjmeFkxJmJJnoLIT5wnIes9%2Bzmji8DzBbvsIvKedcMFCqbUwqFW2ND8aBJBm7U4PthyY0PXxRuIBF3lb8Ce1aacx4LpyoUTBwhq2EMO6Ar8QGOqUBWBmMwoXWr%2BNcmSJJFk5Bn1xnKeWYAmT1wN20HRK%2FEXuxZ%2BI%2FXn9o%2BwBCfb3AtcIYk%2B0cgpBnr4j1rFoR%2FH%2FkuCqxV6DHzy3pzMq0j7OBUCR2kzbUC8ZWQZFbka7PnihrNc9Osssbqz6z0T72IdeOpUMAq8EK5y4ec6R5%2B1cFvBAgubkXvEbJlHx2s6rP45V2vMF74x9jbWmSqhGdZTJ3iu%2BRf2df&X-Amz-Signature=bf3b0cf23d435bd503f8be85c0f3cd194f76e61fc8e2ee3f68f089c64832f675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
