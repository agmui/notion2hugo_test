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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=a48d1fd907c58ff7d1f4a45eb658606b25dbeacd0e54d7f4463a172b249564f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=bf8cb5e1490b2131c3b0838423e3b437131866b8e7a7d9ad8096cc28b4fc7d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=96b30e020d0d68575f6624598f0cf6aeabd80f01e770592451df18512600421d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=e17a27541d5d7368849ee3461808723b42ada6c1e83117c52dab4a7e852f151c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=c4299f76bfefbf39b28836923cf7c047815f6ac603e9d1b51ba38626177e6859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=4c1b7f4ac6667b96375b243a29e9f4534d964f9ad8483e5bfec8606c717cc589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=e3fb093af361c129d50dd50a7a3964bf985c00f7e6ef20bfe26cf2829277da90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BT5FA3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHmCcqimlR0%2BI0bKwe8qxDKNUUJ%2FOXYDLiZauzPUHzgIhAJT3INSe1YkHLz9nRhoG%2B3xNUxOMhzejqNhXsPil0T1cKv8DCCIQABoMNjM3NDIzMTgzODA1Igxrtn0wCaNVKe2CxdQq3AMDXEGDX%2BzV6FoKpz63TxeXP1U8MFd0FpjzPfjyavodwKYj25n2y3DKUN5hesAbllsFh%2B05tqSlqS8fhSqN5KPJ8cZCWCrXAYaxapIGBIMY0U3Nw1Z9813Zgi9ckwY7VhqnJryOV3ei565iy%2FA677VQTI3GcYN88CAa%2FXHoEp33SAbuJUxwxwhypSN4SU3J8YtlRUiXdwqWaOSnKvV4M855tilx5I%2FAK2RTS2t%2Bsle9WjNLqwnNujXRnbBwnSrmqUYfr2FRp9Yiy5y2LnRS%2BvP1OmEzvlCBLdiwLskB4D2g5ukI0WpZx8i3bNgpkKw3Xyapi8C0bPzKkGJBUg7TV3O2HxvmO5Sjygzz8MgTbWQn5VcF0Kg6%2FiRDqH3SX4JxI5Mn5fgi46urZFhEksqbPm66BHicFQY43jsPmLmi%2Fbq7SI69Olrc7VHECAE9vk3MIQctHYU7C43QSbo7vILe2sG0E6ZEDnwsyZz5HO%2FIAqf%2Brj7zZ03END6x8t1MfvCS4uVVy5codEOEGQ%2BDu3sY%2BdUCngefiLcr9LIUSL4aTee5OOPnAb0PtIUyef34y37Cji7OJOsHGVjh5fhkk8bvoIxSoO4pSa54nz5oW1YzJ6FVCOBsgih8a4qBujk5BjCZitnFBjqkAfg3S%2BxB9gXQxe9EVniA2s4xMYK1ueNBKjI9ci9R4b3TtLEqsLeyl9KbBRkwz%2FTUawyyGBnqH3UhpXyX5HOG95cV4EcfKS6R4yDmvpEfsLMf8ipRMqAuzBfYssQWam8dgRhnXn%2FQW%2FSvi%2BPgVrb0IuWrKcHmi9jMj4MRbI7r3F8NJefJc1wc57PEdKc7Ua8ukLo554NV%2BmmdwBjumMD1SKrNjeJ9&X-Amz-Signature=d2fa5585b6e22e1e670b5ec3c52682596eb9c5d867b79e5e30a9c221daaf1646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
