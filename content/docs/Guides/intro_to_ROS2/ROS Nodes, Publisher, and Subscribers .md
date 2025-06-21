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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=cf2976fe5efc9fe76896239729909617159708210815794469acb5f64995c731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=a9bac2bd00751e382827d2553dc039b8139c97d02941b98ffe0c0f7fef9f7404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=08a751738029ef7af80c202f6bb61b48e893f6cdc8d22aabfe7ad8b3077ce3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=ed15b08f4d843677827035a37a210c90097f34c412c9f30e4627253e1bd11489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=f8b239fdce2ed2cb9297b0903dc8c60b5e1dc2c5b185c77b20f6d81a853ad557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=c83c6cad15bb798ce6c206a7231fa6e8aa58dcd4b3a4b0c15efc98bca72f6d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=bee9847016e8d9fbeeb99defd9daa3d57b06240a2604cd106c7fc0d493caf818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAQZSO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgNWG%2BVkT5AwNZloOFE4IgKcKrzUZhINQwd3oLqO4c2wIgEnlMz5C8Yu15EkJv9e1%2BAVIib2apvcm9WCABq8ff9swqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAShBir6GOI5M3O1hyrcA53ifmbFvVQi0RfdV5ik8h9MYTZ1w6S4BThQs%2BM%2F0X5A85hAUKATnJb7QZxdgMbJoCrbWNXBzyde1KatPpQsV2dHNtXPJPYi%2FUPXWIs97comosJkLonDzDYA06syeDr5qicOFr98RpWbPdonm0KaQ5XAvNRKe1DGNsGWLqKnJtMc52vewiOC6ydBzuY97v9IDFUYClq1BQmrK07VAwTk0YSXZiwzRTIFyu1SHK4qOBnaCMk7dcLKZWvtGWc%2FG%2B9SGB%2FD%2BDIFkjOuBmlT5XFoVMXhWukdsqRjpbW%2FlLXvNHFLeWips%2Br3jcmfbqUk5Qlqd0hh8mmJp%2Bl4DtH0icqhFajWCeSswlBUIH5oS4RtCCgRo%2BCdq6QAYIYwrv%2FTBTMD5YHl0Gq9Pu4SJxhsdpYOXvVJWDXntaAp7Gjt%2BLahJgDr4cYaHNJzzi0yK3oqD2qq62UwbHihTaeekbEBVcrpVznlh3Kz5NfGABl5xNYxRK6yHq%2Bu3AOGxyri%2BhqZ99wHrWOdXjtYRHo823XDv8HDOqBALEjUWkXbLJbYqDK9clUR6FqEy1fZbv6iATTlLD6piZpHj95dfCg3bu2alwIfIIYYvqH31wDvd8f6FXx6ci8ZP8WzFiigHzgPVzQKMKuv2cIGOqUBAZ98%2B72ZS03cKJ2Sm4hjoZ%2BCm2%2FsKRyZqa0GxgmBeBwi2BZETEiGSYkCNIQBJ8NKsUFL4YuLdkKmENZh44w35DiJi99B%2FV%2BZRsb79M4eEyBGznX4ca50wZI5RVaQhaMh7Wx9v6gtGmmbGOjyE3F6gHZG8t9zLzOo902dBSxp7vXh0X3JHNFg4wdSyXgXiYEw92xWEvDt64mQgCY6O0BQRRosN0iG&X-Amz-Signature=f213a3955cad792ae464748f14a497791c7a5f96faaa769c605303fc30568589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
