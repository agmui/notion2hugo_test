---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=7fadbd23634dce767595b80bace8662ca03f671f8557bec5bf72fd409d09eb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=32cc78991f05ee1ae2d84f8190b7e0a18ffc8ec73172b0009c4b1a8095606611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=02e0d17ed72a44191d3227bb0d4f2ca6b3114abe483d4b414dae1f24ce3e096b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=b40fb966723cc6eed5c4d9ba35a3b2af1f3fae32dae22c83cb2b18e66073278f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=fbc5310e9577721503118973b16512770d333365b9034c81fddb2428f5abc7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=1fb2518d1ca68db3133553e82d8ebddd853ccd5d7e1fbd4aecd0e29805aeabbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=6709dfa33bad545fb746ab2ee3e69b2214811545a572c9263ba2d8cfa5ab5f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYP3Z73%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FQpZovSfqjWBDbqIZBxsKdZUSTnn1gtSbLQHPAlBvNAiB0RCj4r3aor4AUFgbc9kTjFESXwfVA9ujJ2SrM7PNf3CqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSn867%2FC%2BtAVzLRrKtwDHsZi17CR3z%2B2OgUCfk7JTdcCA4%2FNGla3W5n9w47xZRBdPc5fe%2FrXl8xAmSRob%2FOv4MFP88wRWai12zSiR%2BmN2Oqx5S4MIgSaG5jtYsp6yIsPd5pfJPBJOfe9sWQi6s4v1HEVDnmptf5hnR4nQwCGVvcI2MIow%2Fk5nRQHkYGs7Ekf8uj3flDMX6Uv0n6xVN89831y0u5D%2BDmfmAyPYqQJOVtzmPkNUMQdSHtXH%2BGu5ixwtatfRYm9SfEzpzXg0bwDl8r4rfw4S2Z00YucznhGzF6TUR8VfQsQCX9fSONnXGYBMdkMZ37FUzzlkJgHeR7Hfe2G1lzroWSLgWFUM8CYPvxUdDk%2F6ABzltLwcUXvb7w%2F0p4703T%2BQHBDYU%2BeBGvUdGFhOQmE%2FS9jeB3eF9cD5Q0NxHXmVNSwJXEn7SGq3G1zZITFGvRKQgdmpQvXYKaj1UchF5YrWeXFTS%2F9BKI2Djfl0gord1LXtjan3ug5EeCCZmRKO8tByHcYCY3hlnHMouX9G3rksGzI8kyHqC8Aed0DqZ06SZR%2F46eDPyylfobYkojdCDXs2OvtdrhXkUyG2y1fNe9YXwF2KkvF2pbUcZf749bHzo%2FkVy45p9A2TBISsIzfqgD0LtuuT8Awku2xxAY6pgEbCkR4UBPyNabGCGE04RNNFejjx7Zy%2FYkWIH3e5y59YpV8ME7eAWDm1AgGMF%2BLF%2FDHo9Al%2F5BkoYQzn6iqgnn1jtl1XRZnT12VWW9f7QuxjVNU0GxEopATS5KUSKGALiy2Q%2Fwr7kAmwW7szgyZJFSi7cAGTRp6Ig6s8izA9X%2BYoBPuqas%2B48gUjCHMIb3w4RVsNcfvBYRHPFuTUjLWkkM%2BBAODcQ4U&X-Amz-Signature=1c99832df5eebd2037d15b688d7940d11bf9dad02a2c077b925310ef120364c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
