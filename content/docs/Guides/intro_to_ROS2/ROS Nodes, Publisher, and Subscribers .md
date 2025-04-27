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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=8e58cdabb03c9f27b0ed966afb644b155683db1ee44f306ce8e469588c55d1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=b7a05a06bdb93bf5fdc6ff5848b734f571a620d4ed1632eb52b04e9e67c7886a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=41529312d5778eeabb20cab53e34386ab1ae503cb366f8b396675452111bf428&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=d74f31c8b999c1368d75378e23412e80e9f5ec206bb14c0f67d43440e26ffb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=f39c6e389709bd1fdc1edf00a72d890bbfcae275c5971e7396f2ddda963b9446&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=34c5b7077ca9c42a29e11315a5c8bfa7e1462af494e907b9e449c8f8e22e0f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=a9aaff57212402d9356a65b543d673cdf9bcd3fc9883c6b21d3b22fe668b940b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PS476E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7V6DFFCh%2FcDZtir0g0%2BJOI7uWC%2B8XHfqmerUM2QreAIhAOKMKi7XgdM56gVljH5aheCiA3PyL62O1Z5lnwPZZp3hKv8DCFAQABoMNjM3NDIzMTgzODA1Igxy8ra%2BLd%2B65%2B02cN8q3APzfHGRvcI349CXl8jn27M2IcpjkOTI8il4wOzwHDdCJzD7aO3eqlyg4ejcxda16FyBfMlDJ38IUqcLRQyLcfoyKsW4iMt6X%2BjCC2%2Fbj9vTzQU%2FFm7gl8oEedQsKjHSECH%2F0fu7qvHrkoXk%2B%2BObUC3gB%2FUnEft8F%2BWIW5gg7Lx44rznOLz7km5sDqSc1LK1tOj9QN1GtpDxhGjqyKgYpawwC%2BllV%2B2iiw%2BRUtQsqI0YuQYW1ur3ft2WN1IKv6hIgUpYp0jotDXvs2bX3%2FfHBG99UT7AJc90FTLby9y7J7hK%2B5Q%2FduMXKRmVWM%2FnCG0kjq968PPkjyCelROi1kKLpqMosuFrJ3PosDNWdnO%2FeVv9A3qRJYvlUU%2BaTkRt5ZkoXOpK%2BzqdzJEl3SWI0Jp%2F2%2F632Ce%2FM79R%2FNn3mbnm7MH9%2BbhyzTrzDGJjrRoknJV5h7Rp4e6EcHJF0MDOnrccCvMWfRfAqy1sEfPyvNNSergepM6gM%2FwL%2BQT0m7V7SDlJ3T5y64JXqdpj%2F7C96zDLmBMqqx5f18GjymHs0hvHRcsidi2od8nSHfiEXtDJ8vMcC%2FYhhk2WqNSRZCwCOtn8m499JF22j9%2BuhkGmKm0fXypGD9cULVW9FjLnRKFpZDCAwLXABjqkAf1tumLGclKlMYFBtWXpkpsz4mvPbI2FSXN7phn%2FG%2BE74K%2Fp8uPnpfKpX4GHuytrZGs0PUDcg002NOk73m3yhfmuKhcOODp2WvHcNDKNyMg30lNVof18TlV1Ml0u5hQq1SVgdvQJ%2BNr8IjKiChYFeHRR6fNEAP9%2BUmK3loI02VwGC52DU%2BeUQ8JIcdsryeO5z7aUe5rJQb8pXqbk0eS%2B2ILrThrr&X-Amz-Signature=d8fb0f8a87766b97273c39eba76444620d8bdce719225092af98886d2abc5d41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
