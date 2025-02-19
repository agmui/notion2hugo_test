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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=63fcf16f5ea590cd7e49f2aff5b7c407e712d27cbbc549b136678100fd863431&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=12cadac8061e26a7c56d4e171bdf92b02af259a0f28112a2376e67b3dd32fe7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=8180a47472485b8a97b236dc75b8bc9996c1c88d9377c08e7a960b9b845c2ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=a99d2dff2a526515832f1858fd0777a8b3f85aaa75fddf8cbb35db09d50297ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=d5822a9eb2a2136c212dd4a59987c0bc75991c771fa19a7616de4315359d0764&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=33924205523c802ab0c56d9572f6f631f68bab7d71b42bdd146d69ef3524988c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=44151a3ed6dcc16de00dffe915ba56993c73584a39a2a260fcd5481547ecc521&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQUJPCL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hEeNV5A8CIBazgpq3eqiucKETjyi6vSkN2Y36nwYqAiBo5HQZgW2HxaBH3mX4WhBpK7zvMozGKtZjnFD7tuECsSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BURfRnB5arZBagxhKtwDRpEFlWMq6BLtnsszjhrIOAo4GiA320SidbWvkq5o%2B6eMS9BG0Kn3iWqB34lmk38jPKnd8Da%2F5KdR3Y9nlkQ9kH%2BSFhxvkzHby7L9II9zhkoXnUO%2BhdGufxPRYKJ6eQKOjc%2B16YbakT0RY%2FqhCKi%2FzNsJ%2FLhsURp%2BG57JiWlslDsIqfwWI4rhrWdGY%2B2ksY2RlYelsi9bIJ6hmAWuRf4qyOKU06HcWQENwwv8DYFXYwo7orj5mdKRh7o94A6VLmoXW7sLg0yMtb58UICNxthVqTh4NjJfhajgRVyySx0cps3%2B9Nrw7D%2FEfVJ1yi7XtTNOaFXq5pHWfAPcKfg0gmh6zJWc%2Bluox1%2F%2B%2B6zwJMJVmEo5nsJPLhcL%2Bw%2B4ugciaXdjhnrUo9zLC5uGodFGOasLumJxNo0G5mUvtwSIRnWthTPX87gaSdqaUawzwBkLgrYOqxBVRWXuu7tAbgNR43bzeFYEQQTuQtu6gUhCOD3B3mrmcSkjcvrAsXL%2F951M7bF2djixlVpnPZG62nENqJyIYlebVRJBTL9ega8%2FPKV2BJTdd5ImMm%2B9TBWNk9CGtuwxg%2FwMJVa24rF4SL0fbj44BzG2GRO4cTo0dRbY0yBT1YYk9XspH2SbArJLlrQw4q3ZvQY6pgHW7bXPhC6LJNSU7fi3YxnBa6vHxUoxnvZ0Ii6Zvp54iB%2BiwIkci9wt6YfW0G3wVMG6cBmrsuB2rddHfWD%2F0vYwESfhVUoWuw%2FoiI97Ki68S%2BM2TGTkz0wk%2FZDfoxqKWHD%2B2sCBs3sDwGlB6uOBWWjTDP0N1DuzKAd4C6uO8%2BHxsmaasmW7FWN28tu6wiF7rl3pWFcMAg1Nud7cn0QpmOMqElI0zimH&X-Amz-Signature=d6dab2f7053c7e5f3fd5409501d94faabefb4d36d23f3ed9b5d5e2d8d522882d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
