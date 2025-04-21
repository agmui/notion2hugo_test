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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=e9c539091a80de50a71f7ab24c0f795124112070949dbd851a0bbfa007ba30c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=7c427a575dd0b3d86a920188a9ff54acbcd721f6e9e73932ca8603f1ab290b31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=28075aa0290a44f5133939338dae5c72f1f06afed04ba10729690759dcefac96&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=d37ccf57ccd98a237f4efe257ddd129da4e83ea582d83721ec6b5cf76876bc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=d55e2d98a91153b8ff0cba7b422c1ee9edfa82e16c23de592743cd245229e500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=f28e70b326a8424ea1203038c2ebcbab41c79f081b4273008defe4af2cc1a0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=f937ce08c87bb683f62d482f0c2214b0b96f79f7751c25101e275f6041c292f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536KFY24%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA62FDUhOFOLkYd48hCKPpeTVENIdce38DlPyWjh9VGZAiEAyFWY%2FYJq4tucPK81OcjCquhOlBWEyz72bmspC%2Fb%2BCDYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR1cN8ECTz6STO1IyrcAwAmfCgDaEZIkio8AteR%2Bz%2BqTut5OKNPRuc5QGbNxMjcQF1qCa6HQEd7Z7KKMiEOYBgAnQrPJMy6tnlti3EwnTg6JQ1U60Nj8Z34LKeRLrtl23fROwBqy%2Fsp2x%2B8xzOWhBW%2FUphVMjz6VK7ZUz9rKrJDOw4oJpKe2BzzQRnzYTkQgIQKHPglE8zireAQQOimpGZF9HvAv6TjauDxd7oL5cQcu%2Fdkd1qbxYxqB7awCKjoq5PNKSpeNmHRkM3t6YJGP3JLombYiBifqR5ympvBlWZkpJTznqBlxmuWDLzTLWZ5%2FIhjiyeTyTQa3M10OC0xMVGSXse8qC4AfeNKNB7b49OvU2WcOpAVBDH6iAQTdnnSRvgIfqZapWYoikqDBQs0sBnC%2FSiK06Qw1KCcpRtdy8c987Cy7ZwiORYHlfLi7iA%2FpKEQwbLVXDPy6lVYEB1ViUNYsF7DMcehaWHtIrdaJViAneMSpcOCpEFtoEZiXDuxeWBqM5vXjKJu2yhxEkY3YNvp5QEp%2FK0T%2FEOR5OxyItRZ916kWTLMHQKy6Q20oJBbNsR7JwChNkXbx%2FDFgXq3zzKWLVJlBgLMgePb59su5rgd%2FxQcY7XD1h4wcKPsQy26EanLHbvF3GkCjIkjMKy5msAGOqUBvQ9Q9kgkFgSfBce1I%2FyC2FeYzyj31vKghV%2BFPbWIOuW37AHMQORcvNSqMQQGFOv5zT0yfjLUnv3KuPzKYEMVfCJErF6DzH37qmzfWArtZ8uM5QJOoHNfjsuUmLF6QeD%2BQNEU%2FWyvkW7PzG%2FZXqyp1g7VFzQmuFR6GZrYagWXbZ%2FPaW1pYRgNpIkDxncbN2%2B2re8xdvG6muwYN%2F%2BzYpZimbBAizFo&X-Amz-Signature=036987419d028f4fd787c9c4bcc8daab8c37a33bd867cb34995a4cc172ba88c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
