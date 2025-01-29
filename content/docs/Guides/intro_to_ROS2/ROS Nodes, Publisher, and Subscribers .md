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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=9cbe52bd7e20a425005caf74d851b90ce30878e335f9b90957e2920a2f212e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=9d78f5f9160d97def3a0ec3d495fd009f049c9695cf432c45aa0b80cf9b147b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=c033d4618406c5c8c39dbed1365576f23e70536c17ceba1a5b73dfb70ccf007e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=6635cf50317eff5297292c6c0a4bcb16f858a16a22c4ba4ddcea58f7679c2582&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=4104886ae6021c3d2c9f6a9ef9637663eb6815aad493a0c511637cafdde153c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=4297d966b2cc26c6ab67d2b2657eddebbafea509cc89ac475bfe8a9c297e87e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=c5b15259ab8ae79be3c4570c67de68a619683f91b20badb625f4783f3ccd36e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4MAHV5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDueUzJ4ARn3GmiKScy9uMJi2WJzfTlQjDy2jtbj5v4SQIgdfGRBnor71WUC9Sh0AM9uQWvE2SwzyM9qxUKFIxSGuAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWB39weShnQMyuQdircA%2FHy0YbZSPA6XF9g3u6nu3Wa4ayI7RQtjavNVKeADqARP9WzOPl%2FUWxbUUSIGlZJLgXVvAoKH771FvJtjg29n9l9FkfyIT9%2FIXY6P9%2B%2BOrLn7KbkVY%2BABT%2FL0rv8zcy1%2F53Lcj%2FjBAZ4cZ2Ura2xRO2vjmuZMv2vxTz3OKlT0oRRrpcT20G5JggVfAtNK%2B8zWxapBAx58u35%2F63Clufa7pXUMFFZY8L8EvuLGHIrNlkeHkRXkBbWHRzvsrGTkj4Dg8jg8p2OhW0oFXl2PLg%2FsSayW9Siun%2FILfNdRpSFK0FBFdYOqXVKDCBsAnAjNzyJ8RXZEUZ6Svj%2B7HPetfUfGVyqmfUiHwaKXFh6S6w7s%2FDmuqYH7MBPkdqE%2Bn919PSyE0Y%2Bi6QtLk1NkRAaTyHMr6sUHUrmIwDdqDtrvHQFZ5d5cNaTqgyX4D1jckbocZu0caUvrobtYkHSfuHErutmNu1C8YixUfxIP4n2%2BToBvfOuyRs%2BrgehsfUWZlv%2FWna%2B57xexFx7WyiN%2FoJexBdkiEYd%2B%2Bf9ICqxEkTmhXMgSPjLseHjPWvtXW7k5jgfag4WrwVnASAXJPPh%2BKlw9vXQNtkHF8B%2FA7Yz4urQVl9jdWGgAoGVtFDS%2F1TSzhPhMIqq6rwGOqUBmHujTonlxONCFZjPLAjCNojN5t1OhqYHJUlj79JbhWeEXmLRRWgVdU0vZ0ppbKm70k1%2FNqFcQCbOcPc56hS3iv73ATG%2FMDAUEqLxNRQWfptGX0h8%2FHBozKtV9zZjFmRtYuVmgqKJUvKX%2FFzvp9UQC1IihUcRser0phRU4x5NYpBSoswSb6x%2FaqoS4IWFbHLmjFfhTmVuRgV%2BjYUydZI8BGwLAWQk&X-Amz-Signature=5b7d35282bce65d0c706014eea10b111b93cb5d29ff91f95baa28ca44ae3ed2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
