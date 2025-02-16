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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=6855f6ced2296a1db56a1879b6d2e640d41ac182670f36bc2238b130d3619daa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=f05ae4cf84ef7afdef3d1abba74672f56557f584a528affb152487820028bb79&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=27d2126812797e2d8f73ed194632b361ae23df6b202d2cfecda96c75951b6db4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=35b59acfbf552b96024c4ce3da6d3c2a10cfacf21ff45f19501c24b4dadca59f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=5616bfd5564e880bb06567c1fbedbb4fe541b7b939a584ece7c3384876ca7623&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=d92a8d2aff9a7ce10799d05cccc455d4fbf273c663ca0ef947e24a3dd004fa0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=dc0ac6e7a04a0ef148678c9106f75d901170002bd82c1e15dd0717b80a2daec1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4LPFB7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIA84e6yXJQWu95duOQLopyOjifXIOoUzkMz%2FkydNeYQJAiEAlkZWDdBijOLhe9IVxrFveeRKmIc6080tBpiNQnnE128q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE7VPM3EyCL1Grkn2yrcA3X%2FjYr0AXG4iSmxJwyJbGa2yTu3L39YP8wP3EfSH4%2F%2FRfkeHZRnC%2BAlp%2FKt%2BEkHFEhbugOJFSwudzImz9OBlN6Kwu23%2Bj25IS%2Fv9f2qRNHgVSa916GkWOmHaDgWbyDwi4SjCW9DzT0v4jucRsmJCbHa1vAOLff1ldBg0%2F2GT%2FNmbQgT%2FdkCAb3tkhh7t3E8os1Pkbh9VyO5W1X0JUXjLkFeY2IXZ0OElzZurPkvS2IFizg3qogG0ldJDKC%2BOsrSP7m%2FSsScXm%2BNE5e7C1%2ByJyNZ4CWcEQEHVDB5tF0G%2BsJ0%2F1CzJSZF3Bt3T%2B2W6NcJ%2FFSW8QDDnIo78ldWFmzn4VaNHMqWRdDd8EAerMW8Xs8l8VWzPfYhmReZuUL%2FAcRQUEQE5WgDRLctjW%2FPrOeHVTJUapdPNbw5J0KusrMPyNx1Z6CGxSPR71P5QFUj8TnpwWW8sQiRcKUg9RyFe3sxNAgojfFFHW4Kc3R7wWElFpb7wW8FJ3YrTBJaMh4S3plkbFpVP1RI3MJxREH3BAAUCTATCHsSOPiFPAgx2sM9HKeheepASk%2Bsi9zorvHmzwyARsoy6f7sq877sKM2YuatIX%2BJRYO27yLSKAKOqyHtUgKvvd6lDd18vLoPBJjTMJmhx70GOqUBE%2FC81%2BhNpTkP7SyaCx09F6U%2BUvfKlDlxOcHDeiWHv9pA90USA7V%2B%2FLAmyRR0rBK6hBMG53zVSNP8Z4UpmwcblA5WgyDZ9CS29irwSJWJTMlxtdDo3QcTPcKHoMsPfTQrfCRL7%2BdeqbB%2BtpbF%2Bm%2Frh8qdPX%2BvnLI7N9cy9BQl7gOG4gt06JkyEH4srneM8%2FvMs4hmwfriZfwqSw%2BFodU68eKVKinP&X-Amz-Signature=fb5e4871793c0b1363c4a49bdcaeb9eecdf645e126c3cd70b52b92c671618180&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
