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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=7e2f0e2ab70ca03ea440f8892ae6accefef90e5ecdd9792c84e00e416d505ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=3e3da4c02f37eadb0eb38bdb5104107273e802f5ce623b58adb4589d8c549b45&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=d108f816f58db627239fc20aa0c87856091c85e6ada5b1a5c4bf336b225d8446&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=3beb9ec932c850aee6c995f2869ae94f2a7637cc6bbcdadfca3afbf9f2812352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=cd88c4e0f7406e1c76a2d1ca5c4997af072671ae9ca9d38981cac3652442b060&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=4e69fe2db645085845da47036c9a38840036c5947aaa9fb2de05e2d5bebb5b96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=460623d54362fadbd36b6dcbfcbb49d9e9ebb2686ca97b64eb4092679e12cc60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6W7J65X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFcUXS%2B0uf45jcSuwTmhwy6V8g30dDRwuNFFapHVPcjYAiEApOqCmgGSaHtpPidzUUmmy89AVOqCMw6U7Z1xIhrCLlQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWNDadX5xxHhP0WPircAz%2BUsZmj4Jece521Z%2BON2QiKFKM1nTZAudtKGq5V8tqlHVbsxU%2Fxh6jf3383ciExeM%2BGx8k80Bw4Z%2F93uiqA%2FNscGOnc1RCHtzcPjRY8I269ZK%2Ft%2FQQl4GCGdKPkccuvxZrZOGnno1Y2mfM3jGeTc4gadDi5RWH0YgRhIZNC%2BVhpMGplqY1h2%2FTmoZdHutPiDO0U34EBKf5wjy2BYys0b1jyWiv%2B8ELeEN1%2F5fOaKVXepCEkESJBRixluhlHCqLYi1RROwI%2BrCmh9UetD%2BBjtzK7NRyk9JZPl1J6SDcsrCKAkcc0IGEBgngvAnDPpty2lN3W6C1IN0T%2F5jMOrTlKn7nghS4rLKKO%2BydxGNlHKK2VoTO%2FRcW0AfDvc8TM9VgPpRIcn2l5HYZZ0P2lmX8nb8GKejKigR3YYlVRneXlsGJa0vmK4VpoEMMYxcdTsmLu95hYcoOZIn6fV6G6UoF4EUc0pAq8SqHSrSDu4fo7%2BFTteEvzlwxBdfpmM9erdjxC77r%2Bv38HlsSMYL9%2FtAJQB50dDQqN0vpqNMd0v89mHGY8pcVNkOuEHOwCsTp9RtOZZ4HSySHktM9vsBOBfrgIqErOCa6jnLZ%2Br59TaV6s8vxseSpOnj%2FJSfEzxUovMPTXsL8GOqUBf2%2FtfnP1h8lgteGPLU4OPZEXBNF2vNgy9DYssEFpgYBNNk2xQcO4BCt%2BsffJQsHK54CEPJPiepd2JP7AYBRAAXrlgjH8re12%2BwvQ513%2FbfRizF9LxJb%2BEljFgFHjsq5HJou%2FTKy0zNJbqkxlPIWm8LFMkbr1b4Wb1dx9a81ILZobJxywUCWK%2FWeWiXBMy6bHgTkZ%2BNKfiRNxDG4iIhU3e9hpYpHW&X-Amz-Signature=fd71f65b225a1f06dc57fb06049822e014d2d5e75cd9db149f17e756df9907d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
