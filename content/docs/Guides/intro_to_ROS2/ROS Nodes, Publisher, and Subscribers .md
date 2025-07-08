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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=c573fb57620708c66f7f49da11b69682a83252397688750303702417fbd7bfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=f12149083423615a68793e229ca3921680a9d2d45f7a41561b0729aba3bb12ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=31c23fa3be758c65463de2ab3615d6ff1aca434e63f8450f75a10a229b46a136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=4cde7c1dfc8726a7ef1de1483e7e41d42379107148f1d6d52210157da9236878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=9c2bfe09e0617c8bcd4d5315ca336a8df809b78d0234f1e06ede5b27e7aaec9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=e688e66c1081e6f519f6d05c77cfdf2fe6a2961583037b5956e08beb80497c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=6b7899b5b5a10a1682c44bc350d251422932f15ef5e6030bf3dcea6cc0e3bcda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DL7WXY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9G6EPEspQWd8fDJxHVHrZGqk%2BbtXafaliZO2IMGiGtAiEAlLFsvlo%2FsNRkKKPiKkky1CBRm7JV25iYBZb3cHINcVQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeWA9M%2Bd2zsZao4BCrcA9m1O3AP25LZSAwUOrvPC4Jyki6kRT4xGEAzEDT2rV3scnJhXu5nnaQYtZ721fLPN7vaLiABZdufFIpXuxvWVKCURjwGxsZKUwqt0v4eS3APFYjNfaNHiTchpkZ9I%2FZ4YkrnQw2fR2gnNY1mZzQH%2BZitcsGT%2BIXjy%2FZYSFDVcK3HFZzIZZjEN%2Fy2ZFu0VfoucLryQkO2GRk6N4xdZWTWyDxSOB6mtnSm2WNUFZYG1BFXsxK7oF6slpmoVgivRZZa5RH%2FhrmJaz0utbu%2B9U%2BQmaRvvUKorUXt6IJj3ifXNBzEgyRAEZaScEe0iBd3cx%2B6QK3kwmMMP1fzQgU88f%2B3y4j6VQHH6fPOWtKwJve%2BeJKKozNrql%2B8fx220Jnztbl5VptZYmOCvu3Gc5ZWtd1MH7bCMZRrIYMxgKXl40bOQSxL43TRp2e3%2F0aeL%2FX1FBItqpLywV2ZDWzpu6MIaatZ6PV3Zve4aU218GBGEuByW%2BMboJxVknL%2BU1AYoRlEVK5IBfMfqmDM%2BTFcmFXRy5tEh%2B8IQIWBZy1xVXguO33bt0A%2FG1Qzds8%2FvvtMlAhQtCW5kD8mW%2Fd4Jaq%2BEKqH7GIprGNVuG9g30BlzWLuFFM%2B9CLgGSBPa19Z1RLsgUEuMLintMMGOqUBz4wnkVXrgIoedY%2BfNTsS95%2FwwwdvsE6cpdnvRqGoKKCW3eB3DzqSuQztyuViT5sIwDzdu4PZMx8HexZbKmlY3bWgUmd9ki3RQ0wdx6Bf9lRID26cj4CgL4TXtFcP%2FdKVVues8%2FWjrF3qhdw2det0%2FkTwI1%2Fmw2hc4vMSxzRwSAlsJcJDPmCPlkfd%2BYG%2BsbiGROcoc5wQ%2FRU3SaJFgBPqcmDuGudo&X-Amz-Signature=4989b3c09bc8c1f646c5f321973eac7e1156445528b79c4d428da31c03f872f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
