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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=32e809376ff8e8f9c0533dcad70c3016f9d33a76a50db06a5638ac71012142df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=baddf3ada887a4b601218a5bdc8758052b9f26ad6046c2b171bff27f32e1c6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=cc55ebdd0b1cbaa03acdbf836619b6c46231446cc757d1328fe8a47dd6496dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=860e909e0cd8af63fd84b4af72eb92341e0b00b30a7eff3956ec3a11a44bbc83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=1564d76bb6c575ab221ba9a8ba081a96e9dd1587f9bf8292978146809fdd3510&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=0366eab081ba26a36335292959042738565e5e444c2f91bda76ce750ff49bca2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=059885ac2730d5004e5ee2ec68e812713b266bbb61eb4884eb0f4edb15b91ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G52GEF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCX7ZpYzXxZ%2BetGm7Obeyj5NTLQRaHG1Qt%2BfkAlqGt1RgIgWoXQR3p%2BC%2FvqXTT282lLX3s6Plf3O83M39YtCiKMDyIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAbXBdo9E5EOFtZZCrcA06%2FP9FE6dW48Et88uC2pd7qPGb2j27Y8X5PROGSbrbtw%2BNOWzsWaOyh0dELwQbtuKrzD33%2FOFU6%2BuqC7q35cHlYVL03E4K20LI0gxMUMqFiWUPzZxilMDmAjSZdAdzGrLS%2F6laE1bQmX9v5LqgU5NoBecZtJTso1BZV2LIZ2eCekET3ByKaDxE3K%2B8MX6yHJVIic%2BGQKJGC9%2F8pwj%2B9%2BjHXzKEldXZyCqPT3U%2FLJsU1bEiF68Lrgkz%2BOEwqRlnG9hsl2ED5fHgEP5KmzrtQJ75w53OeaevqWyTKMbaDHn5vdD9s%2BS3QAvV8OkIvI9Ayu0bea5ZPnbkmC44e3fj%2B0WUfr8B%2FFlCi9ICttsNibclLKVTF7VT4p9BobaoDWWkALJbchAQ89XZqSeTnPrhG91XSST02k724b6E2VwgkzHZiDZkuxf%2Fomk4BebBqzUjOMUhSJHvjw3rb76fIQ6NXJVwwXggJWcHRNrXy9ThtNDVIycq1XwGNOBhk2K%2BMEn5s6W6%2BkFqeN%2FfYg3EkqcQ9qvqDTYh8ptc4nAzqSyERzmgA3re3KUZcdXyR7cp4CN9J1B51XOv1bOAkWnln%2B2Ao2HWaZH%2BgVZx%2BBXwGhjddNuqJtvZ0X3%2B2lXMJl1rQMO3rkMEGOqUB9LcyVRikW1mR8odX%2FJ1WAKUkeVpR9jwfeurSodpiCsC9V2%2Fd2gNcB1Pr%2F%2F1NYnjMxLN2u2rsE73cbti3yrNeMu4iyTq3LwYPHczyyv%2FVR2TEGGd5hkwWr7q8cJ%2FjcRse1AnYhVUKh%2F0gn4oFsRrE%2B9kPLu7CrrlpX5CPM8Epmy9UTU%2FSFBEyyVCeq5ZP34QiSrqO3U7InuNEHAjwifzIZW6bHhN6&X-Amz-Signature=c0cf0f31379df60e488a5fa9126469819d6e51b27d61fde1c9052aac31c287af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
