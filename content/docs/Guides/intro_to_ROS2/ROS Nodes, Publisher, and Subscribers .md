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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=884ba22538a49c0c82b23c60857bf367e8827dac2dc97f3220ef6d69f9614f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=4e599ac2e0110282cb932f2e75bdd1bc6b351fd600f521cee633f5319e527e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=ade041bc7e69d578e7c3a590c3956037a3601d9a6fef65408a7a88d9972768c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=fdafc44a7dd305558df2728f841a9950a0abae277ba97a99666e53c3082da3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=c9c50fd53ede3bc701fcb02b8f7a0a8bf4bbc7e7d595fe76190dadaf5917631d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=a3e5823a5c0ad11d8981fe5741310595444542ed971058fbfda8c65cfb5e9bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=9dd17cc1f680de299f6f965ea66d59f100708ecdc1e0d0014d4e3e241c49ef4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFR725Y%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJQ7b2rCtnvdapDkFiP9CeUElxY%2BfqNtr3n%2BdVCpa2hAiEA3PHex%2BtAunfIZn9za7NChladSdm0SxnKebUGbQiF8skqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj%2FX%2BnUPG5eyFhNbSrcAxPeaqx6tOi6mObz1cWXTiirJgOQCQDkcGlORv9ywxu%2FisZerk1hIC4Y8QKQW%2F1BVAABDedFqOcNNAZGdUx4GurbWOD1SIYP%2BK7tNh%2F5BKoc2PqV4tvcuQQPhw%2BQAGTWOhlSxX7%2FcDJntduI1gNYLp9VXZj7OrhVEDcdNst%2Fh%2BGhVZQwOg40sFtumAl8nBAyJxUPWhTlix%2BNtzyg2itzaao8n069Fd3Pt7D3Bo7yB%2BHhxGGBLkO%2FrO2e%2F2JYBd%2BUXQavx0H22c0cHVzDsi5tc49oa%2BUfOmMMN5kN1uuyUyFcImij7xVKovA%2Fq8KGvMKnjHJhwazR%2F3fBQTHRWdY3rvd2zGFzVSx4%2F0otv8FJrDlrzuoklSSbNSZOt4iJruzNPpDCx1Z2sg7xuRRpsStYuLb%2BeuHWRicqnJOeTDFlK8%2FsXiidnh05jUI9WwNDwJaSWlYu0lvEFqSrRKo0Wr363VlhDZYxdBe4AHYkArGOJbhjVMhXOe1oWxyuYW%2BfsLey4cK9%2BLPagunByMNmZnV%2BLPaX3xY7Kfazyplab75%2F9ODWzu%2FDUQDNgnZHthoI71TWJYHFT60XfdUQFhJc%2FmVMzgFKkYU2V3yImnA4i4Lt9i7b%2FIxo6KRjaDP0WhXEMKz8y8IGOqUBxMdSycO%2BHb9BpuOT72KzFhbFC6XR40Ib4xT0%2BxCtmTyxj24JttbcmIlrI6EU5KlruAelfJwGS53BgsS9dcEypHxHqjNWiOmGV3zQPV8VE28Z9%2BCs1e8rc%2F44QWhG0GU%2FiPgrA46ouCad6hY4k4Z%2Bl7pFZHoSBnYX093yo3DeGr%2BHDrG5MKN4mAPLQWe0Sdaw9AvKeK1%2BVc39vkDeXOyRcY2xJ27d&X-Amz-Signature=29a4800e75b0d35950979ae3d7d2277349a11c233f6aeee94be5444daa66a900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
