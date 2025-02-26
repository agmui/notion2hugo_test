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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=b75e71e1fe1bacffb050447448e8c7d184fc27c9cac32826e3b64bcad76c0058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=54801a22c2cdc74ce0a2e280beec7d93346d933ee06e45c8847d2d55cb0b62e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=f1651d414d84771cd5cb56c0d76e77c6e60f13cd9598f7908e22c21feeb075e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=2fda68f31ed00f45fd5607faa6d89f159786375b08ddbdd480820f2df236ecba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=cfbe6d64f0fa048e55db6f5510bdae173ef9ab4a23ca757236873912089a2f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=60c0713f8adcc4a3cc637c39c6f6ff290674acfae6e94bb669ff99ff555885e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=e85f86e36c70686ba7496531d8665ec53b7c36519bb8c9d502d0b30478e85615&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPZ6IO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIENwMA9LdUqmmyKG7LT6axkHgL%2FH1y%2BMn3LuhPeEqg1nAiAN8YsdT3OYHuO9btwfoInlH8QrSicvRqmGmTCjFb7HYir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM8rHB%2BTWg1ZyX28oTKtwDj9tF22ZuNKSXqKioLVNi40tl8x2TAxTQE%2BMdVtnv37gQS2A%2BJOe9W5RYxsX6ytkw%2Fsg4C1i0u6JwKZ3Z3TqTuz%2By%2FCqerfqvEhn6safRUKbPAs%2BjNzeSabeF8DdjB8Y3FPOQUXl1asa%2F4CLLLKxWjR9%2Fnd0lD%2FGNqbDCQfkNUXwGRkmtO8%2BTr9mq%2FCpoQ2mzPALCLT8P%2Bo9OWo3dfN3yQX8JfEzFtIWI2JsFVa5vZ%2F%2B2GmA1KWMoks5%2BSh7mZRba6M6jN%2BKZB5BXJaeotFRedLYQUEHHDFdVkatz1%2BgIgxH3YdSPBj9IOMQcuACPRW3e1LNm%2BLh4GCQ6%2BxqMxN0Y7u%2ByWXpRvn6c2jdMVfEOycUsgBUQJneHeAh72sH%2FJZ0FM8nJfCiz5y8owBjzpY3ThHUpnYAldXGygfE192CqkrcZPhUfjoLnAqH5odHXI50zSZOGkj77UxbiTCi27SHa8DAz2tl%2FLEeTENQj4swnatCKVhQpxRDSX6JBY4kDDB4alCj3TRJXdJZTcSyhg0cn4LHeChyPpGOUlC8PnTFADiTDlIVm65ln6FrVLNEaXkOSMaVadVcAMIC%2F17ea97hltU8akbLGYaS7hxQgO70qtPiBIrWiyrDYMjfTAGEwg5%2F%2BvQY6pgGQsrWBKfm4yJ1V9xc5ff%2F4%2B14TP601j9q9ogQv%2FKW40wnDfD76nhrsVMjvWnVnVy3k9p5eMDG%2BJHXoawH3aWUBbQN4ZoyHadY3y6hwfFUBxKn6U3j9lvdkMSqihULGpjl8C%2FeHA2PcUEbEPlzxWuGBJv2ij%2BRwdO5doYJfGUXwvGCeH4SYxvqO29bvqjB9jHpsY9BLK64TQvBLhNhFac%2BHDWQBxz9k&X-Amz-Signature=119ad8e20b5d19406633a326615b4124cced2d5e8d4a92c9fae6279a92570998&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
