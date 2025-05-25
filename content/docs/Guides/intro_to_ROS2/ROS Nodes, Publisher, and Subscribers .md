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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=cdee4eabcb8b398f1118243299719823ad031c648eaf25a4b1ea5785bf8c7fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=d07e7a69ac4b08a45577ff0058cf67dc0e58d39c9153dcbd2fedeb0ecdc4f3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=188287eb3bc43b2cadb97c13d12dedc9b77f4f1ca1f299ac3ea26b47fbe53268&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=002d72aea8eee4f219b64b563873c67c776abc81d292fd37e0cc773b93a41ada&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=7e09845ad98f1b0fd3601e36343aa87877cfb8ae50605ec2c395741cfee46a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=e220cc38a8bac8e25409e8397b84f9bd88308ef34e5f6b5f670e56ce13583f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=5606eb2a7dbdb1f007d9bc9f91ad4085a8a1066723cdba50512fd90bca20c84a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2HF6JS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF22rRlPUKpZi5eJ9rAKSJLMNxw5LhQJqnXuFKIuVhV5AiAf%2Fb9Cuw6913HmIFXQZ492xtqspU2pssQicJtMVXccgir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMkAIFmygOeLi8GISCKtwDYyMBltZGG2%2F04Y%2FY9wxhxTcpqhxuQVvCAnIJQqctT%2F7eAWFPgT%2BoBy2moOcOCOoxbt3hMAnAxTqA6CukfHDVVFZyZQlIYTyMX%2FYiuAxfZutEK666gZPvrzvGhhcrCuwPdrxOvBrUe%2BUM%2F60l%2BAIBX3zwBroSStPg0%2B1BAEWdvLpTy8B36o2c5bEANQ7f6xRRvmtgqs50Kag%2FEtoIrnwrD%2FLadq2XrZjohCskq7wmicp6hG9e4swH1G57f7Wu4DPT2kyIQBCseFalNJU3JH0trSk3N4ncz86HwlijFoa4OiZohEg8vRlCx49JDb3ENlgef7Icyg%2B%2BMPTaHBLagj128pOE%2BUt68eqiy6HTdfvVvfMfT7%2FuU32jPrgIN%2FiHnlqMDA4oQh3GgTWqCdcAB%2BFjJH8N4%2FDzy4581PQSiREr6dK6jzyJroq1s7pKjfuAb%2FVtTpS%2FcH3qoSbNg1otkluC%2FiEO0d4AV2yUhLrlPfDZ4kMjkWLMRwUJ1eW8c2EndCrSpBRx4KEJAYmala9ZL%2Foc%2FlDNQ5RDURo53VJ8F1MThgRj6Vd1BT2rsFfN0ix%2BdDwDguxGztdHfyil6LXz4yz8WxhgIvacr12e14Bu5626YdIWBtXuJlbpZfVq7qUwwtbLwQY6pgHJ1hNFuhwW2YEzmBXVOeFepX0JgrD35ctIt6ccuYB1R0rdKxDp971UR2V7Jt986U%2FNfBv8uuSQ%2BdVltYhsF7PkkJfP9LZnwxDGul%2BRc%2F8VrkEX8%2BDzvCVjfad%2FLTKjHkItw%2B7TseC2QJrJTuCSjv7Mip8tDmyZwdpuC7dDM030913hy6V33QlN%2Fu5oQGd5UUhdVtE2smwZQZC4wcRtTQD9MFwkKBqz&X-Amz-Signature=6a4ea491b4759e9a931204b78b2f9ccd74667f0b2f16d9a8559daa26106d2fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
