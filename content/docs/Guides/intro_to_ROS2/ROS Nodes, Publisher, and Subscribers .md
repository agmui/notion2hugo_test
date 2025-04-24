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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=9061e2429f5fb0b488a0b3baccae74b9bc5c70794619c4f1b226210c2df27af6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=697186115faffcab3dbd1c6a1d92e0942bc959d7adb39e1ad03c4eee1fbd8af6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=09bb4ea8e6dfb876381893453c8ece8ffd730e8f69db1f8f1a49bad5d7cf3f34&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=df36e55f8c843185a85b92302b0411d31bc6327ac97be2effdfdafb8f7044bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=82ab622f7a8a6ea1afd1e07d991627628adaf6b00516f527df2a7ff5e3f5bbd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=8bfa55488ef199d91e4a837a173dfd0195a97909950633677f0c8e1938af2d55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=2d9b97423860f739b08f978a2971a450fc87734f70690ee720f0e56bd060871e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DZYYF2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiinR1lpjgsIaJ1TFXzow0KcacvCPTE7YF1sE6M6T8GAiB4Al4qARBDE6h2fMtzlyKAGxBUVw4vP4G6rZt5XBozVCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMBvaVKWDbGDxbOyvtKtwDroAf%2BJjdu5IQXq5VnvxxpWO56Lyn7jh9rATWpJengSsKDJCFnJyb4EAx11PU1oQVgLIrLRpdyZR39BnVH2Fc0qNsDpQ7x8T1oBRYw3mxy7aOGzbtA9As6c8NFYG7s8nWH0IwdmUVfnb6VUlVehYdj8QKQeUp%2FyVLMeLlkHs77TYrWbXFefvXUbv5TRWqMEFSuLQq%2FMdov3n950LBORkBQIrEEpKgHaPi6RHIcOJN1%2Fgot8LAKaKtcXlkxKErl8lPDRWoaRvb%2BR7FeoNcgq93VUKk2Sd28gYyqwEHdTIdxRPsmMX%2B7c6gFNhj7kv1SJHHpuw%2BRPGkbUuNC%2FN69LlEl%2Fd%2Burm2Cn8%2FqG%2FSHTz7h%2Fm8accKmtHGqCmcDwZHlrUyYnyyd8PqPDNtEgQ3Un9JdQjfSLIrzRBidrhn1CSQ64TZ7hbQJm0cM9GloR5rsUx5XeePkwfGnwBzZ2wf512%2FHeM%2FxGVU%2FuWsfM09BebbTHKBfwekcgSDepbhPjrn9yeiFmxrSv%2BmqO3aJl0092DZADKAFG%2Fptv307fAuYw23SI7w8sYRCllFnl48h5d%2BLJNI5ZsM2YFaKxSsL7mrTRUykkOWUei%2FPoc29l0WhmaB6eI%2Fy%2BB8ZezBlbg7B5kwovSqwAY6pgG%2FlPW5tnGG3w5PnGSNj5BCUVYql%2BkeyRiA9l2t8AzEpsOOQLzekIVpvw3eeydRjTtU7zUszc0jkMYG7I7lFshxc8UFn3q6%2BeBoc%2BlgHizB0BdMD69R5Z06I0Nmh%2BDZ9bCnNA6qll183u%2BiqIhA7Ba%2BoKWD2U1DUWB2e6%2F8ozUpIRcq12TgZliURDjdKSzGVICsLT7o96lnujpSfjSYD9zoXECFP4EO&X-Amz-Signature=fe433706fe89cbd5affa6a58df9ed202113bf44e64819d715e566467ba962ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
