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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=6e2de29aef8a5ab7143c928ef11b53307c5daeaa3ec90f17154f944a504602c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=40c728b5bdbdbf2e74ceca22f5fb8858d9f6df2c43f06ed3662318849e6a47e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=1a5389d069ffd920a49a565b78b2b2aeac7d5d583c519c624e2dde8bca5e1cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=fb117f047194ed81a3c43a4207811ca8da03d12fedd7869b4dbca7b9caca4057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=9ed4e8965693c07c6bf0141ab0d4ed71d280c77f5ce1aa8e13689cbe48a58348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=bf9614c1ad3eaa2ce3e5459baebdd0d137620a76720e79dce22cd57fa7a35a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=a3b762675b7bf192872998e288eff47b434f7f4cf8ac4bec16558be2e089fc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUHM5DJ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFwlYSGMpEV2ZP3FDnZz7pO0dY3KArmXLUMU2vdhF52fAiAzov7emNJIK1cW%2F0cFWDBs68KRrSWM5bnzI61JzxyLmyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhxw5WiO3sjA%2BZpGHKtwDyPmbc4EJSsliOo1TPunKuqQDi1Wmarvzy%2BLJ2VByJGdRF1%2FQc8oe2jLpiuLaIsrLMP0vwgnh3SKVRSYn8aOUbQf4Y8ZZYdPhKCZHIehIY8b0SRXjS1zfGOTL6%2Fle%2BMHWtdfd25kHmsKaRmA7YwCWxAnvMs8MUiD%2FylYq%2Bej6ufVaQYymkrfQHcEDuYkZ%2Fq8W2L91emmUkN9YRB4YKuAADHfD7LNK4tONGWgKn1yF%2BKd6qVoqKqtoLww9G3eRkMo4V%2Biuhszi6f6g9EtmgT6Wzw%2BpqeuyYlwLp%2BjO9CSmDNsmrDyS1sAAOEp9sdQlugbfM%2F80aA4U5lcsDDD7Fj%2BNHLdc2y30bA9WKs92QgMmhMZc7SWg5pBFca8%2FGU24hJvofibkf98LwCbV12whrSL3oH9qbZX8u3BLktLIrdc6CEmV9pHqmspOO77F22SuMDTPkHxd1S0I7i%2FUckrQ4ODMszplV3OuX4EioVt6lxL1T6HeMH1Ft82er4nwL8StI%2B2pV%2FGzTXgB%2BYgK94%2BIJ8QlTJUBHhqicVm5ipMIQZWa9lyxnoHzIB1NKQtk7m4bgeHcO4JF4BkLjdQ389nBOtkm7SswtSlBX12BGtxc4S57S0dEToJiTex41u%2FAVy0w%2FpO0wgY6pgFniE1sVDbVCwHDENR8NHei5DAbIFU8gRA%2BZEncAbm1I4wd65eOy5gSIjieAdTJpgXC2J%2F26LVhY8u8xa8SKnsBdtj82G3hFeJIW1UgJzYT1BB%2BX3Cvonl7QjJuiEv8zCCfGJnU%2FEBRAWASHtxj32WVnRqw4Ti0KQKw31hW1Ap6rSLbC6FnHLa9PvX2lUF1%2FAWt4qi%2F9Go7jxtCTgl5aiFJgorfcXqU&X-Amz-Signature=41dd358e3102fcb128473d61404cc2b2ff7a163aa5591778335e8da8ebb5ccb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
