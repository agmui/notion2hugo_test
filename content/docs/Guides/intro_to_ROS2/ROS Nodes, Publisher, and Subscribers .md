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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=4fb3f164a8cfd0c3ad774e89b91c8901981adeb755fd4ec16337fdf2b11b1f63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=ad7d51494b8e8a5f17113ba410107ed8f231621ed11b5beb60405e0424545313&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=5eaf9ea4b3a2e19db3d660cd71a30c8c78aff2a217be5f4dc0a67aff984bf9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=1564b82b61701ac3c5f5cd07fc36ddc2615473f5291660ecff59f9a3aa3e0b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=1dcb337c64a31b5bebf153c0d455fe616556889faa4a8f4ffab570c2fb044de1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=de745a010d88e9997ed795de0299c2f2b979910d74554c3c0523aedaa95e4944&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=97498fa9fe164ada508d11ad69072ab021455fbfbb9f38747e098a18c0cf0115&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKEMIK5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5kp4QJHkiWHN%2B1ceeAr2JZnGOVFfVZtQpXs8ruU5VzAiAS8vL70mO39HEE4HK6Na89o1QcJ6WYcZkDOw8zDK1zZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLvjRJOj9SaezR1utKtwDAYLUfPXWfHjqUIxZ4EakszFHqOZ%2FCI0NJWMaxrqd8MRQwlCtPjSpIXC20tpM0Pmno6k6lgNMhkbu0o41HoS0%2FHYUsH92Nsl2efFfCOwxdsYYI%2Bj9STDFR%2BShrch929TTp%2Bv3pM6Zcyxdx8ZmOSl2HZnlZzMZ8kCRufT5lAVohV4yJmSfmUcDoiq2f8pMxUCV0qYjPTffOOU1tz4xvtsyEQbu%2BNnmsEu%2BeqeHMwtvwWuly0FM61cJPS%2FIMo2P8rfgxRXPHThnAtQScLpph5VfUh38omlToZvZTm3ejsjGC6ejV9Duwz71LkflrA%2FzTj8y5OGzcSrwdDDmPxbtMZyYj5oqdzx2NDIZ8tUCTqVCbfccAfKhXgg9bDvYrsUeDgJtfmOOfwCVhSZRgJhsQea4cpN73TgOCB4UvxxyBAdVshTWslAOGR3Xkp96AGct%2FZQ994IqTcUKHOeblcUKK7aL2zbk74q0TPIlBeDu3jMY1wp1c6P27VgRaKYkwM%2Bkxhv0C0GVS3QiiJ98q9cmEZZTkq7o3f8LNjd5nT70fkzF4DKlA2mUpxsqKhetkNSIHnJIfWlGzD%2FZnj8UbO61UkCtg%2FZjzCMZ5Afh4ba4JVK99wMmjZcqwsNl9ktr6Nwwl8OHwAY6pgFy7ER%2B7ZJVbBWfGez1eyPOJbZg0%2FP3UoaR0eqxB83ATIZWrJS8eqxVkOQCxD5QMh%2Be3erL91ADmCFk2%2Bopkdk61RHmQ1jkid%2FWKO8cYO3xRL%2FVUuoOVi6e6Y1YeSTyKY%2FMBfXa00ny52VeR9fb%2FRH56VPbV1%2B4aB6q0CjpT0tQaAnsDqTterijgP52d5H9HK6vcP%2BK1%2BkdqQgLPNuPK9gJAlUHtj6m&X-Amz-Signature=3cb6410c83924ba4800bc745ae34d63c655e381d9a95419206796d4a808bf24b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
