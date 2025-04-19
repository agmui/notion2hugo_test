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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=8bb4d355bd64bc612e5ff2d965e1cf60293f4fc94eefc78c4689abc305b3a98b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=37a7daf03d05dcdf333ffb00784a74d67b61ce4d80aa2ff9df31e5d049810649&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=f0b3aec688304ecc2d30d2a93f8dd603370a7829562580c6ff0bf37a80a4d596&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=676dd94d3cd79925fa6246bb2110127da8e7025d629f51ec087ce18424ffe723&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=8436754dfef4a3d60faed2403056bfd557431c613fe7879d4bfdee82fab2582d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=b7b678f3e7fb141c133144c6806097b4e8384e31a6fb37e42cd896a92ea6d667&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=4736701052e76425554ff8ac5da004cf0be48a9345bb5f31a46f774b8c257174&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZSNEJL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F7fxU1Z22CrWcwvv%2Bs3evFlmoAlIcme%2Fuzbn0NIMADAiBZSkKNwrkrHWlO5kn3JANvNvxrXM3PhZ7aJk7ahazo8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPmNvImIV6jm5BGlKtwDk7h0%2BTSfsZ%2F8dK3ntIUhRui3DIUwxWpvpbN35nt8Zbqqs297xch70gn%2BqxW8HR%2FnY6pTeik%2BZeobTsdL1SnmR3H3vCrUIE6et51NNYC8ge0ztBKoHlor%2F8TpNT8sr%2Fx4ckvziK8wvlxW%2Bpe8TYKVj4%2F72oHyoy6hP0sCcrc5Vh0mdrmkxG07OGj%2B0f82D7S6i4RRjcV7EuVh0PgrU1OGGPRjf%2BgGbee7D78PZMoo8dN%2FlUUsMNfcuw8vEtszxUmAUxLjHO6nWi31mQeJsvqOWpXkCQOZQh%2BwCHwnekHIRzrN%2BP%2B1m4SMXXv86rzw45VBqLj0DhZ5o%2B%2BfPB0Kc9xo4CsAJQssuKKoCPdfMQiBYFlj3YvXsaTLP7OlY7RFtoTMN46LInGsckEBdVv4le6lY1zpRbGMOuqps5v8dC8tk%2FhX%2BPhr021%2FDDvCrqjxLAFibOS0Bo3fHwN5i4uYq1NoacnOlNYw7u2Cuk2xalK8ttD37QAV%2Fl%2FdN5mniu%2Fl2CYPnyEkyeg%2FgqNQMj3pePzSKr%2BhjgauJ7cqsfzfDZx1E8AS2j294%2Bq8SWReCgcdyt%2F2GEeQUj4JSyH5jG5dXjtT3oKZKAqM38LEEl5IwLsgwqqZJQnLr6R8bO7u3BIw%2FfuMwAY6pgFo4OKuCpenuwnMjokkzroAujJMX81k1%2BJQrpFASByvYRhFI3dDUfdvuZzJKbfwe2xoCWCLdnNzuZSXyr%2BQPJD%2Fva3qYgIcJ3Btow7NhtlqQ8AhgvG8xL3Wz6Db5Ym%2B%2FEj7pT0ORMX8swfrqO%2F3G%2FCjGTGgRa6Xz0FHZHyjiuU60dhRxEyk%2FoFjHwqF%2BqCigNMBLaZdjmvsg%2Bis6qkxhg84pXZw%2FcoS&X-Amz-Signature=9b2bb28edfbdcff26e9cb3da15c45890f24f1d17abd46a762bd693294262ef22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
