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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=052b87c9f114f4021e96715857cff6ee225e29f32004dc8adf4c911a721c1eef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=dc766c80e0ff06bfbbe5c5d90d3969715af47d11a20b8eff6b88e62b8bba35f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=0e932516545af94c8aae452baa09d7bae876b52087c7b49c2e9a5d2cedca7e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=8196e65f85ab420ff0a253fbedd3478bfe72d5292d1e81abbb0a65bb36f60236&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=45d308d4af20127b29b3b0518371f91bfb59228d754d4511a65bc6d84d3e103c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=471f2f8f89129cdc29dd68c15576cfdf5c65fc8b83f5f617531f73cdb827f036&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=7691337d5845b7ca05ba983891d2124b064ec454bf5fc5c4c2930df8beaf4ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SNNQFP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BcFhymwQJ0%2F0gjn9yEk7ArL7ayxX66la04K20Vd9%2BRgIgW0BZdEZrYyz6pprA2i%2FmBDevfDNi0UmLYLgdB%2FtRHusq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBY8PVC0Vf%2B5lB%2F%2FmircA9Fw3hMelV%2BQ0sUleuVpEgXwRKXqYRZMxMKmdh1lhmWnzd808GJwjrJ9i0odjZMbnFrQMbHUhT%2FTHb95A2iUNCKYdOt93%2BVh2FIm2UqgXm9TgYcLdeqpRjpvW4e6TzFQ%2FpNVdFnvnN0RDildqwTjhtPRkAg2yQhjFBJtvkoNu0PKNeY9bd4O59rYdEZyg7S3kk3KquWw5XDOD5KzkxZwRbeg00xd6J7yGe%2BBO3qQtvj6rM%2FBkV6rqd7mGVnLtpGonBSHj2kguafkyuqkzC%2FcSkiTRCj4OhDoQP3%2FGsP29Npd5eS1wncti8Xqf6kVSv8zYWOLn%2FtBi%2B1tYl%2B1Wsvxy%2FzsZDeFnxnW%2F6GA0zPlz26Lz07lSNlUQGlzjxlVBUGRorV7TivBFNjGegkMnmhvAN%2Br8DDGD091TAAppcKb9D34c%2Fg8uZq3soxewpmJWyEh4HnxaRmg7c8WVzf4tTIGXxZDoHmtDA4Ud333fOMovbCTFVm7qEyGQVD0y7D1podNCjEoiGW6V0%2BLCL5BchJYwWMkQ3OUBbks9z%2Bur6lhOrLVAw%2F2gjww1xglrXoYsWmvssJkZgYicsiAfgP5PUMe5lQ%2FYjDilUXaURszOAU96dNAMEkwr3oDqivVfilSMNGFib0GOqUBVm2dytGZdF00ks0PHsIGs1FIVhQKohu0Akr5v%2B9j8BaB8YYq0v9B7AQxvcFo0Jt3qVgdgddPUVMGoQHBVmgDogUuv64nXRKeQObT4G7I5y7q4hLoc5vPx9wDSrZ0QBx6AR35mii5GtmgHPUdgFfT%2FAibp7N7tcCVxyX4xUgs5rUI91hFGMiiv359ZmrT7aEzp25D9F2PhbG2lhtU1xkZFo3RQJ5K&X-Amz-Signature=02f717763ef7176241c4dd26dad72bbc990ddbbea37e312a504f28b5732ec26a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
