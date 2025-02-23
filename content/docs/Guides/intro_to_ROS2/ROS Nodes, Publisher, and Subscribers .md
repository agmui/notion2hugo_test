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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=482de930a5c3dcc8854204da0e8b7b53acdf7b7a00e8f4fa4ae3df1ef7c29c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=dd3acfdfb1993faea473ec8ef3d27ae31ee33f68fdfde797ebe1212516a195f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=81cd076c8ad62b5f177b1b1206cd15933a83d12f2fc5ed81db6715bba65b4837&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=800357a0d68e64a175c67b82009aebcd7027348ec9930333281c321879632b26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=7175ad24b495effa928e4210cbf4bacdb71680a06efc2a9b51196726e76ee7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=a18d1cc2e203b6c5b77d13812d78530a24d64bcdbf9eb39808f197c4bad67b06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=3fd7a4929101c1d8fc2e6adb7b405d8ed0b685f6cd400e83719b2850bca30e06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGNH25Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4RA8mTAkSPE3cWZwr0d%2BYfeyx7N6FMdK7kSKw9a%2Ft0AiADQGx0Uj8zcjiOdxGMdusG%2B4nE8iDDHImN7uMYtuQ1gCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkbB%2FbExuWSESDwwKtwDlCPPuKbhMt0YvgFnBg8YfbpJq1s8z%2F65TBC0AIiBp3nAJ%2FjxL72Iwb5YM1O1kVoFG1B7aQrzXEFs0T8li5m7U9mJZW3tXEa04wpvvOgZ7npc%2BgOTwZT7GeAJfiHlrKL7S7p9Xr7si2c%2F2yc1mz7UohbTAOctuhZNDPFSuSZFZ2mBon6OWu53kiIjY4UHOvIWCQRRLnz0y4FbySKR7u0yfaAs%2BFCtzpEfVCVh4D%2FxGDrsJCuuBd9Zu70f24zliuzM2vYeeVPlerqfsTf4aU3IWQiztn5a%2Fkp54FnXyOJing%2B9lRQ%2FOkxWxT%2BVSid7BIWqj5aoU4VmPbgEVpFVFvhkXoxQnVVFN%2FbQ2LyW1fctPWkK42OAzo4%2BDpMO3r66%2BxZFiRuRBhJ4fwWd1d1ZunkW%2BhHYnuVIdDwQf7JCb12CkUKr56asGw55jlwLoDmlcQBKSLetghQZpDNMBCr8o8m7FQzhjdS8zQtgpn7yzYNHGFPlDmLtNObTJWtG0zPq%2FASq4ao1A46%2Bd%2BMucfkEFB9Bbc0oD09mAn6vAyVXwngKQvqV%2FUXhRUBP1Rfgs9M9NqrUtwDPlmWUBl5NT3yryJt2XiQql7vuvXSL6ub%2BEhKJ1OiQBI8OF1AMGwTjVOowy8%2FqvQY6pgFpNmkGv44k0Dqh3%2BZk94B8Kdy8H0tWx1PeygS1%2FpIlmVRd3%2FveSbXNo0f%2BeRAVKkRgDMxTRrXL7E0ImnHLmuc7QlGlhXrbWA35y833OBIng2UWIwEA2xvStjIVrbhz3lJ%2FwlVdRabW1NQn2wLbQu0eHN%2BOGwuJC548i6t0eClzITb8JtdX3aanZhv%2FFyKmbTrMV%2Fqg%2BS%2Fr%2BhxVDhIZgqHSWYNqBj4B&X-Amz-Signature=f9d1cfdcc6dbba121f87d020869800630560de21eb67552242bee05a8e33f9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
