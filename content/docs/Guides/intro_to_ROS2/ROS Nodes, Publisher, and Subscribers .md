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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=f961b9f9b7c19a4484f614aeb7900f04a219d52670d4cd0d61a7097254ac98f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=c9cc7939849a19ec912c5dccdec2c952066e3c9f1fea86b29812fbea425da865&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=9ba2ab09164ff6679fe3c83a06bcc64ca2f8a399faa575047b39b6d062847381&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=0130ae65e1a67a58377b45990bbdf228bde2d4bcf29e76090d363078857fb6db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=306d700e7dbc693c95b71d11a8c9d40441aa94bdad45ca1168c7ee1941496877&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=09ad91f89a27601fd0c8cda025253e4f086f8830b3b002e17359efcf1f870df6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=bc0f69e4d0ed51f2203ced67b9173b6109cdd47a7ee8a195e583bbe1dcdc789a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNVYVS4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzrI0cRVWtf6xDIbqZpFcEGgQRFDeqPfncizqM1H5ECwIgORjq9bso9n1Nf%2Bi5IDEGE8yvloBhKgVmUYAMU37tczoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJD7cyMkmJkmiMs0yrcA6AOAnt%2BQfhzKjK9mMPj6eMpOXViVey8yl5BnRo7quJpuJ6iw8TZROvE6zi8U3Wwq3EoZI73KL%2Fr%2B4ik3BqPv%2Bz3cymEv0UXFrwlz%2B9Bw%2F5YZn8YMA8NUVYrPYF1Ef0dBuQjd%2FLs0RModeV8H2gaKenimo54ssqWQ8e1%2FryioddvEnJ4p1G11GHwADlzXe22rDJ3hlUe8GhO%2BqYuUFRu4Yx4YkEeVxY9WwVztUqO4yEaug6in5JsOsgidwCA6GxPAwCRP9upJT8v7Me3kmIJjWcFFir1x82%2FO8nyPPz7zEdtGiE0cyCuLRmVeXedb9tJPQOvKGNW150dMzORL4B5uHAm6XDwLXmBa%2BjjsfVm1pbFljr2gB0nkftjDO%2F2eS3KQGZ%2FNS7fObM%2BhyX8f%2FSAxUrl88eIKWhHtILlX4xgnl%2Bui%2BF4W7%2FjvGBtSPisCN1CiUesn0pLo0ZhXOCX90Rl3Oy7nM0g0Rxh%2FhbSRZHVba83h4KgyftXS0gmeVWuhCHbGQ9kr70yoIy3V8Z09hcAxVt8msqVydY97MQQEHIG1pBocPkfiBO18uwi0yl99XgeQGtcGbRToqSM4QeiVLWukBauqz2Rp%2Fsia8tku7ugCmaXjp2QApeLC1%2BUnF%2BgMK2Gyb4GOqUBsL90%2Fs0TR7jJyWM55py%2BZ8t0K53yuXcTkb2Poni7Tf%2B4Hskg3DHPHoSDIslrCPmlP54M7mDUQ160t%2F6C2V9Uk1zNtPZgHIHQ%2FwVWJ0HVN56ey7r%2BvbKEUk93EdL6Hhfaba8q%2Bz9fwGNxFYjJgehaYWesUIpck9gvqNBqsIgouMqIpGrf8E7LrDfFMPbiSpt6hwut%2FkDqirEQj95uyWJcQYi2WPAH&X-Amz-Signature=9e166950df15ec0f8602e8febedbec1005200bcaaca010853078d8859a3c07bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
