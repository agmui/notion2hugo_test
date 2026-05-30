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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=547d3e34045879aefb4da0dba0978c83fe6df48fd5a2dc361d3398f1aec0f26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=1fd8dc041ccb14ab6a18a0f636e09b3dd03e39e93183f0d354a742903d7259f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=09278aba11078120c61cd3f7e81d298f747065d48e793b05da5bc430b6ee292d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=a57bcdeef935d36375e269941f4305016f91aa314082e0d5ec72486b66e6551c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=8420e9151ce642a4fc3222600152366f7038488a5ac2c10dd625a7ce29f01b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=326962bc5734a31382968a6d2914241712328046932ca6f511c8f35b50b1502e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=3ab6f4212cf93c6230ccbf0d1d83c1743733f74caef2a60d930874b09e45e15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP3SRMLM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCbx%2BigWdeFiC0E8Wf9xgiJ0NutTXDNdhy9EyuYg%2FL3QAIhAPp%2FqKxzrcr5bDKBWqpstn7AkV6hxUu%2F991p4dKHcA%2BTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqhgef0CB7bZNH2vYq3ANjB4IisKe7XeRutfTGXfawmJ7%2Bi0VwjzBitYQwnBt4K6Iq5%2FbyMxhwye4qgx9TkKNIA7fzKymvNInFu25%2BK3AlsaoczdA22tBw%2Bkie%2B%2B7zJ5mTXotfjE1FtUWpueBryjIrSfrKCo2IBbE1d%2B4mNOH7uzUafVtoEFfHcTWErkXw8Zo6EO88%2FfTFB7eFQyNjbld%2Bgp6S2nfgU1AM9%2F9Ev5zDINJ1o%2BOwYTK3tcMXd9YE4UjYqZUhXDC4Xkdy7dhRnPY0o4sc8q9cvqyFL%2FpfwHFi8D7jx2ykAMWKwOWfugSE85boCfI3kR0%2BxB3r9%2BilBNoAnUDOnxv4Mv1JvMq5FYLgjgCLtew3qGdz5y%2BPCJ3YJVOEnv6RMmmR5LPYhTE45HTGKiAECSJrKrtxTD1c8cLWovsej2F83m6S1YNko%2BVCI6tiFsqpeghoiajEVnBYoJ%2FFC%2FrK1oTAnl%2BufW2X4iv8z7sXv1AfaDCA2O5VXyxMaAb4a%2FJKySd7vJFz%2B1Bz5ajVYgxo7dqG496WgU%2FV6gsPLC5iv%2Fcx9mSLxYtDxkX26UyeM0NxqaHqeOHPucd5HW4ZiryN%2FqwNZuPhoTOit1qDR0vxvKgIWukZdLf1%2FkAhiT5h3cJP4o1awuMesTDZpunQBjqkAbWIaf3zaE%2B%2Bj6%2FZwC1nkFwrOhVqYmqsnfDss65256KF2CENmbQY5537diYErovjMeAr%2BPIZ8EzgcjTZ2V4EOvkoyTp4rzixy8Rs0p4fll8uLbDAW6usHmgoy92mzS0z7RXubRN8i8vwWtEmvtA2WG2c2ZSz8siBTQVAKDSqkcufYiatBqtsFnLw97663H52A3a30d2r9rqofPsfXzctuGodDW8d&X-Amz-Signature=38e21bc9f9bf883dd8b533c9421a17b109b2e704fce3ca0c9ed76fac279ec36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
