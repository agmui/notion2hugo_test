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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=1813e9521af6d12d7bdb02711c429bccb58a38cb63f73dd25c5d81a3088e90c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=1fc1ee9b421ec169e927d0ace55e7e62918a461403d318886d86f361554f8187&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=aa1b2facbe9050b2f88dbf58944ac430827f23aecb0be4ee1b22c5148b9da6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=90c104fc47fb06b3a3e9d279db41776b53a923c8cc52a1086eb6361a8e848a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=814affd1c8fad683aba975446281d15bcfdb72806b10c78d9f638e95ff935960&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=98b282f58c37d6c60ce489ee1c903432439424747f89a173eddc299685a248c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=01c3afb440c71587f02f7a549c11a861061c16e2ed09b6379724548c52d4ea7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QU7Y5PN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRdupu3%2BnL4SKtey19hYSGPSqE0ihasIYY7Ei%2FKCIrNAiADzVceZkdUaqezhTTxowUWSw4%2Fl6wJcXbjnXbLgvtkhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1eHa3%2FzsU8pO8YfPKtwDAQUVZUZ4%2BdjVnn23RUkB5Vk3xrcgZbNXSuL%2B%2BGu0wBq69R8%2FCPqiXCJ%2BbpvD6c1rrfjxRIXaqAYZ%2FINZzh37qqT3IIfVa8%2BZQLQSQMF6JbEsNWRyKjsGVsIvmzyuscSrq87kx25zzP1ZRJ0hridrqQ9sPKu4mREokdNDh1bNlkueMIMErBsniYRlqMA47PeSPcqiCItJWICIPDOikhcysFEa0GikDIfNwcP1%2FKmSzIYFh%2FQ9B0NK7rsCYd5BJQcFRVKAYXTXKKooqQlXlqnAQH3L54xux8zSiffO0lb0iLJUjnUxtIDxCP342ldBcVJQD6V5NBlZzZmefO4C3QlsxiFBKundzkwry7lA1m%2FDdVfbFhUelxqQia8QhWGv2fv45XKFMzVgJx%2Btpz2InZYtxJHadCHUXFaDu6A28DGS5QCiFPTwY3Iu5UBe1bNN9lKc92jfEp0RRU99XL4UL5IG7raWKZkaett%2FmGpjZuvNLEQjEczM%2FyDAtcP7k%2F%2FGYp84C%2FCZ%2FPa4497W1ZEsePD4P7YfGW68bqE249p9woMORgTiNcXw0%2Fm3pOhE3q5uJR%2Fjfm%2F1mHLaSSiOxKGeCXJlWYWWwwVgepevZhtt6f9pKHr3Vns9aRuL7WokA5gwrs74vwY6pgFda7gA%2Bhd%2B4pknxzOc16iAVuGocZ29iFYRWlhKCmZ4xjmm4fVmNytIfjYVIEZzIBCdgPS%2BkVNhcgLSZ6L67jjFm8r%2BFuNeSvc1M6WERCitrjGbq3ft31K%2FV59oOog1sNqog8QNDpPtP3sKqccmbpuomhrsq2doHE17mDzSVIqo%2Fe5BXzrsulGwuoGhk4tOfUTC4EXHnVZMn6f8zwVlSoCgklR5IYQ9&X-Amz-Signature=5c6fa4f800cfd2958b37ba7810f1f301f35adc85bf3db6c0bb8ca67194214374&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
