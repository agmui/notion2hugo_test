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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=82c59a4eb0149d823ac17e760a2ecee3104b1d78364b1fad6abb6dd606bd102a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=1c33f1ad4426bd093dc1b1e8e8e176a47082f98c40f3762e10ebaf72e19c117d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=53111a31419af814863a5a1df44ac8022df93ef6e1ecb542396678bbc69281ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=72d5ae92ea380a47e8b709a38011134461daffa4740ce1d80fe8b7275d9286c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=ebf087e4aa88bf91514389844d7f782112874f8bb2f10e8bd786587c16c5c5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=e4de2585d643eb2e17438e662b3008fa4a962ccf9531e59461b51882d6f2976e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=762fffec34e5d9e8c02406904608096a4ccc4b8dc9196d3fd744be1f995ff23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROL6XEY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCepxwI05lXFt4iSdHb2KB5ERXRb54LHQxuWXc03OXtYwIhAKxOf89dBs%2BPoPshNBBaqUdONz1uKpFBnapoOwtHP8XcKv8DCE4QABoMNjM3NDIzMTgzODA1IgzLAyfJbU%2Br%2FLpelXYq3AMr5gpJdlAovD1X5nWk%2BdKR3jh0TBu0LKabM9V%2Fu9KFCvKvC6%2B6bctkQv6iTB1iYXQmgmyOTRN%2Bvzn9b7hSNb6tBj6WF8g5I%2F5IbKjvW%2Bg6zO632oK4lSQ5aW62qWXtKoJ2HF52IJ09p27gqjZKy3PrPGoZwZqD9Z5ky3hPWGUDn9zp1Ts5OsYOy%2Frv1OLVZu6rSYID4vz6NuXiZm1krrPwdmWg0czLdSGDQrUESH2pdssuaIqRm5SNaPNtKRmpszpjNPdwi5DBl9%2Faghd4P6vaEKvcqLJzfnx%2FiJAkKGoIjakfX8bGAGZUS8WkTVGgE5pks5LwH%2Fy1B21fFF7rjFc3JjaFb47kzLlYaQkXhDY78OA8HbC50NcL1dMfX6xy5IFuFps%2B1Xi4kPRaUSVlm89I%2BUt3rPTvAqIqZjzJXdRVuU%2BQ13hlNwOy1AePEhMGLvLZUig%2BRG826WpOgc4fKTkKahbRv%2FtMTIS%2FsbEwZXlEZbhIGbKxOhdKU3P4wPlvV%2Byym89jeQuAoVjah6IkniRUM5vhAYUYnMAHVbHeLy0%2Fsd4sROCKIr10Piq88uPnbcz1Z86YAxruUspIQWyLknVdm6Ta3vJn5VU6D31%2B9hZvUcd4Lgx72KHRfRqqazDJ9drDBjqkAYu%2FMz1J6WZrkFvEHvkxGMSk94p1FzsS63%2BMS9ExgGZV4V71Grsz6PRcoVKMbjvWWkLmJVE%2FrGeLAqky6F5dh9sbPyWgjFXjWTLGd%2BJX9O4ALxsOWxI3UiNWN4t5h1bwr7Ju3yKqrRb4bcmKp738xP5YizPwj8KqPZVcjl7eqiT1BUB6ZZdtKseNhHPjfChxmoy2wyKLjw9m%2Fd9qdn5iXcpv6fJj&X-Amz-Signature=5661d35c0866f3d92b7b883db860d8662f0b47c27310381e7f4e17296d1a7133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
