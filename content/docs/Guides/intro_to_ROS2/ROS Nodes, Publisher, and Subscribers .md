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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=8dcb877fe5093b46b6b6c29cc601be8230a2ddab44db220918be08dc98df0a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=7cddd32017c2028059d7290de31f21b43d178d84171994531cbda61d984dbbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=362874922d714381886ee27f748f75a4fbae3d5dc9c1992c50abb443d5fd0f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=9eed14e80f5f19a9f5ec02f3ef2a5c84192fd51f9ed89d98a4f67bdc51b9899a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=eef2f51fd4cc2c180b266fdc954b3cb92e750aa241259555819135ddedb047b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=8a58fe0a762a0f7192429d8bb3f669ebb2791b1d4e9eff763ada8ee42d8af058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=6f78484ba288466e9a2aa43837fe8cac05fa5140fe008ba22874d1577f17adbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBX7X47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWipQltv%2F1Llbmsqo3%2FeuGzYNYrCXe1E8mXL3%2FAWCf%2BAiEA6UhiObc1XOM48oZY%2ByW%2BMJh6ihyA1LU3Mt0xSqnV9XwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWki1pguJxzMgUaircAw3C3KvCVM%2Be2pV4QSKgwcyKHRBs1OIYVdTYVfQvhkSBIm9QRrIcNOoj0OsKBjMq6TNe7U43BPJuphYxYW4uuyfsihxkqTJ9C%2B5a8u1Co1o%2FvW1EkzQOIDH5%2BsDw856EbvjGOnSj3a%2FoZ4NPauVgF8ezCJMJJz0Q5mDvjv4vgQV1ARleQYLDwy1GK7wsgNZaCL0kb108JBr%2F8VTDVzpT5VIG8qgwtgxi1NRGud68p69pi825J8llL110%2BA9CoGKWkiVSv5BfwOrF5VE%2Fze%2B%2FuXLT921%2Fvt3dwKHs7w7%2BlEVsQDa5CyjQpKL7l9jWbtO6%2B6t%2BhxyjPV3DEuEWsTrMhMn3HOBtsp8nXmM1Rc4V03G%2Bqdzx%2FXiA%2BkxOpqp1StjE5QliL2yFA83kLw317qzHveVtyar9LhLeoueX9qnTIdDVnKScfxK2iVZUy5QYk3CXaWvjGs%2B9KL4ZIOqfPy2ApnNXMSn8foTfE2kVpMyx0gdops%2F16eNevsby0fUfxCpi%2FY5xKywzkLoKkqluCgZsRiJZ3k4brkDchHk1b%2FCg9MGGKl2VZgzaoJTfnuIYbRVbFT2qvxJuZfEznYnuqOLlDQCOBFPC2hn8pWa9wFS3rJCIK7xZceH8ulMYFQoAMOG%2B4sQGOqUBrnpzKk2Jare%2F34%2FS9svruDerm26oJMRRvy6bD9qD6ieGV3EB3mkY3rvcuD49JfMPmGBXh3BusUx5S3PL%2FucBUMX0zgpV6N%2FOrjU2m1FSmGdgC6VKqj2l8ACJI%2BEnLOvPRymSAzsguvs234Lk5dr9t2P6RJ4zdTagkAIMgyw7AyKUWOXszWhJyw3uZr5THYVotsP97ERD9Dh8mwDykZTa4zAU%2FpV8&X-Amz-Signature=f5cbfdbe2e6ebf1dc35f58d6a052d1c93a2db1d000c9c227d1f07fcee8ad6648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
