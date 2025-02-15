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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=25cf8babfdb4a165e4caad0105750a438b3d580bc0b9293379f91d015234a94b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=822fa9c89539e16b54bb6e547f3b06e72bee255fc7912544b440eb2b2cdc633c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=59021a832d104460ecd0730f8c1fb9de9b0c2b3b89e6ab6cd864166458ac8682&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=c2163a70f8bd5545a4e356c9e91acc793e68df76b20b284a85a967d02b897bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=ef1409c1d349e0fb5828c2a544b29370e1d9f86478c9ea349941a1544e049d10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=982e4810d156e91516ec92b7af39e980616b3ac29c22fde3d814ab525a6d72f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=d9870e923f8bf5791ebbda5866a177d56b5e06a6e7d71a0ed0a10af4080c2a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFSMBB2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEHl%2B97Ap7CGlZr49mu4khZmBBZy2fy7ev9vrb%2BPXxzpAiEAmAxN3Vkqk%2FoqpOazyv2FF6EzvQzd3Je4VCqtvbYLKqIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEhtGti34rZSIGoxOyrcA6Oy%2BAZ8m6LMkKv%2FOyGAgaV6KUtf3PnJe8fD51Y4OAwlmQi7s%2FCpu%2FeOReiFrViNohzFtWYnOFhvthDSLPIRuqpx0fUAGyvXZoaRjvV2CWZMi%2F0GMUyvRwj%2B4qChPdC8JP3Fnv7iF39w%2B69vnIJWqF%2BKEIfybOw77%2FW9pn0vKO9k9vxhSXogqB8aYv8pjqmx%2FAlA0yXEUfZnNOOf5xqQUhTayzqxgfNPC3HNYHu3Vzr3BpNN9NXxfSQ6X9qFCbwB%2FSZRhVip36wBw9C7WgivyPqhKVeCp%2BDMX38a4u%2BESN4aTBRzzLDrlskLy2O9ypEjwQCaHBa7NQJ38YcCejLIYaiMnyrf9MEyjazGaOIU26EVyO%2F4skicBtM0yMmx6ac2JwgCKi11k4D0Dd0VfsPiCWZQvzH56EvI34rSNESoNqFpQzhdUUGQINFEyn2jyAo5xJE7EM5Ktq8%2BJxByaLrg7IIAzHwVYx%2Fwft%2BxqBcfg1PNvl6mJdF%2B1ahdk4JNOvzt4%2BOvi%2BLrybHlyJ%2Bz22IdDkgriS5FL9tYtw5XWsFPNzPEKXBlFU0175OuiRbz8gcnyDoj0w%2BVGeubDWQcyRH7v1z01y35qIBarO8VC2pSV%2Bwvby1zS%2BnhZkD2Nd9vMNXowL0GOqUB0OckoA7gVkmBL5V2IglqPBlcjXz08PBW7Xq6MucQzXH91hKX8iFckcrgCHiAw7NenkiDXQ6nn8ROZVCcgVsvMWNqiVLbtqCjDSQDbWJE3%2F2lX2hGUNkEyAl%2FYCMeJJ2IimH9BFZLFKwXKkBnzhnJbFHkQsjZgNSYKfRGQ4BcfEIMQzFmz%2FbgXgA%2FBzxDI8PyLyz4HKdwHKrqNX6UEU%2FJwRwUpDAO&X-Amz-Signature=4887a86c184c490d1baecaa7b0c6e2e324ec0b511966b1551d23ae0832918f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
