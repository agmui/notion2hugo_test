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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=88299033180d44765f59a195fa9447cd59646d3842eee1e72ce09fada5193d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=f3f71a654e2e6bfb613920fdceb4510a5be108228e9213586747aff989a10ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=88b6a07f725bc9005d1f0fb005063c278d755d08cce62a269b9b89c7b46d2920&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=868a4f0b275ff4a644fe67476494b5b1614e80bb2a3c760a2d88dfe229533202&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=37f8978b81cf4033e34187dc689e8d8b90fc45752c7b71fd71c46d383ac45f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=173ef469ead89f675bd91b9039137ad544bbd67cfd56d0b03b8aa0912611ba4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=566337f38b37eef25e3ae4e713a671a3451d55a0ffe826aa77b90f13dc94276f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6OGNU4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQgGafL57jiHgc7S%2FivihTXoRmcX7p99cJBqqS3XcWAIgMQbbc256aup8cBHhI8N57tIEEK%2FyVbf7g5TdByb%2FiL8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLf76Eq2Fw7XEXd4ircA7QshU%2F5qRAUxEsBQ8f4KRzMvaHUXBdvGzkBSpLk6Wn5QNOT%2BdiLF82RzC8xOXfW%2F42lZk%2BzHLbsq4C%2Fuy3%2B1taHepW78CGadInAl%2FcCcO%2B0hObBvX%2Bv7%2Fn2ZCU0fmJBgZUKLjYRmCLY4OBcvvbhlxBEnobTDGS%2BtxHZ6h%2Fm2cQM2kA728eXLiqqqJQ2GPMnKpSyjfBlcgaYIyHCj3pLB6R3s9zwGR%2Bd9PItbhGfZBZr9GHUBgiCGv9nnju%2BoohmTttrw3fYBrEDJBvODiUF1F9jhy7bGliwRE0qEra%2B5umjeyjWTYbDdr64C6N3FfgUQ11zAgmPOYK3yNS2BR08HtfmS5kB82uPisQ6ceS1p3XaldXNUo72lHOHNjNjZfmOPc9Fo0kFP5PAMetiOmFKKbHabYsJQe7fQgToKNilpJjtm%2FWKI3DG7E3TIWmYG5%2B8iyg9%2FdfVAJD1y1kAsoNOEIDx2AolMS5cCLwpLMAMkKTzTZAVX07PTbSL7yX9q%2B3hZB1LBc24%2Bm8FqNM9rW%2Fi%2FYujqPsg3fQGR5jp%2FBKxzt3cdSaCbtr%2FFQhS5LnLgRFa42JsmoS602d4RvvHzaKz570v%2FXUEeuv7g10YR%2BP98Nm9NfwF8dKQrXntkBxEMMn%2B9cAGOqUBrbSNl0AXHMt1Lco101E%2FWaUz%2FbSMp8vqDvVoPw%2FAZ5yiYKVJ2XViN%2BL0AdY4a7E1wrpllMXkihrv0X2qFI1BFVcoFDXAG%2FnNbOeWhmSyjcqJ2NlWhmXLfKhVcNH4poR1Gk3ZIOJZQpJgBIREiwfQTONNbtt6aHn%2FizvY5jRzsr%2Bzkqo3WlRrRmw5LQ%2FAywHhLFxtYUFBLkR6Jss%2BkQPwrr25ze6w&X-Amz-Signature=b2db101aa8651a618c72114dbfec014230f663ab2536af53340f476e815f8fde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
