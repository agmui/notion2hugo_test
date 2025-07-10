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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=cffb1a2a4aa1ef87010f951811d0d4817faae75becb9e93768edacc1a78061de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=b86c6bab258dfa1e31c4d75926a70c2c1814655216f302797830f199ef2d2af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=0b9ee4e406526e901034e5700804a1fe7202206407524efeecd67c981f2cf2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=fb4bc711c2ba229a0caa2dc69beeac25f4c59c0654a2046d248684e4a74a24de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=b4ec689b7dc88633e4d40034072b1301829f4e80b9006619cfed0590dcfb27bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=fa623024ec2f1f610b0863ff56862d7332c16fdd7ba177d867ef13b23ad5d94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=9d4861209234809152c820a7e546f88ba62c1bd8e36ac046587d98aad14e2a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVMHN7Q%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvbtRj8rdSguq0RZYspdE91FREx2SeHFF2qRY1jWAbAiAcbWgOUoNTMxz8RX4tNgPR6yzg8iA7OTMzu04hg7YqqyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDfveqVgkr4eTEshkKtwDVoHsm%2FxVsKpsPjDTytND3TKK0B5GW34ZrkV51mOgW5L7cUeWg2TTICEzls23xw%2FUkvYeFAIkbvMAnExRHaaCj7lDjgnw%2Fc%2FULp3GTsy51D0sN4sTdDMBAwvr%2BBKXie1odL49pWCcIsMk1Rc5o%2F3kCkDDpe7T8hbqliZAsPqnL3xv8Bps4GwXf0RWNBQRaL2WpunIghRiKmOz9%2F3PAv6JIP%2B7VCvR96wNz1sLHC93rXcNQagTK0GLo3UCt4E0RT%2B0Lh2Y9x0%2FnmxXkv0xwISSERX3qivj707Askq68KSmTuVkIp882XB7ToJS4FqTNWQAqqpO2bteggwp4SZfuerz5SuCkUY0Y2BlpeWbVA%2BvLr78GvwEH6oUhDNXyZnmyHGYAIrm1qvG8lVDdsTE8Wpzy724pvACjjyUXmYC%2BRE5%2FcC5njQAttC63u2dP9wdGNlrD6MSPW8fRI67YfNOCuGI%2FOx4zypfVR2A2L71W1qutems1vU%2BQAHFax5EY8HV2TWe3zjxpYWemVPUpajQg%2BsfiEKFUjIiNjSNbss7Mib1KxrHcLx4K99g0vDcxh3Bb6AodTbLjyXGJytF8mfyzx4qtTryWqBr6B0iQWhYwLHzwRP%2F3N4YRk0ls78VVeMwrKi%2FwwY6pgEd2wx0dqzXtpSan8AstRulGt7ysNfeMykIiyv3%2Fc4NavxiM4evrTSh4%2B9%2FMtVTHLgRRgzCKe3S33wZxokI43vmzFVLXQSCv5PBdvsC0VZNyjy3E8j%2FvY4%2FI7XrSCzuQhZ7sYz4uKOBn4U27RAd%2ByT5t1%2FkOMKhEWnrnB3fs5RBHsxI1Sl8Z7u7%2BDXOgEsrziuzddRVma%2FDbTgkELZZcpiW5UBXQUAd&X-Amz-Signature=deec2df6d711ede5f64b7f4e1bbc585ff9e895f5b9d12e694a518b69a4b8589c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
