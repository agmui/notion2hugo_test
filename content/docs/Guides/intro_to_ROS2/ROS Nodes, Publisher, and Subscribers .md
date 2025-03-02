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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=eb822dea721811b21d2799a6ab2293fd779620795b0d903fb3df0d69e815b01b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=c6a7711bbcd671da67dcd6f9a9936036971ae417933c64cd12799b25b78698ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=8fc2db445ab9697f7535dff7969ac0a7a7f0835fb19033c6d851fe94bc14f164&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=7a017101545dbec9da76491f1ae2bd4ac73e2a22f4ad43e054e28c2321a603e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=2ffdac016fe635623abb2aa7f12aaa3d8770d1ed58bfb10b9622a7fe6269c43a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=412b646f423a0dad8bb6ee669907c1ce50fa9d9991527b8663e2a99228b8fbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=23a64b6dd44353e2aa31cb4a7a28397cb0f6fadec64be56011d72af290eeb94d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTO77I6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGijPZ4GgW1eTi6dLbwx20qWjd%2BFYbRH9bP5WPXN%2F1VnAiBmzbXZkBxJW3ra95%2FmBNkaplAQQB%2FfgXmOgnj1FnWiziqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzL3BqLPjTOjXGFjKtwDR6uH9zhzrKWlaWkFWlXLYMSOCBoCAcs69HXmdRI%2BpWQhZinyHOY0bYDaFj1VogZ%2FhPE4kaMxshtHe5mrfccydEh46iCWXIKVVBypq0N1FhwcPFjL7xq692dYDlqfaK5nV%2B4VSFlQLjDIlhpsbHXadPuqZH5iEP6VU4%2F66BNcXYTsQkyiZYUZ1vInCFD3Glt7zJ6sB%2Fng%2FSbWJNWsXWvqKiQmKQxgyIXhiZqf86X9cXOvV8rvTerN7L36u1AgrZP3bfZ148FJUYRgUgVVGMsScSoCM0aHZGAKXUMbSjEx97YkyNBkLE5ZmjKr6CUCkK%2FWA4PpJZq1C3%2FV3evLZCNlgTXqXn58XcTQ0sA7OIzRWjzkvHyCa%2BSbKG%2FYl2MSGPIJ881oRH7IkoEdF9tqiGBeI%2Fhl%2FjuoKGJsSALnkYTyYWNYq1zUv4JHpOaY%2BfkWCl%2Bi5Ynppj5%2BiyCxgGi%2FdGBRRIBQm0AsdVoUmEfLaLcuMGNN%2BY%2Ba6giGJSg%2By8FasDGqA4OBxA3uZfr2b2fTAQZV%2BkaTXl7UD3GR0qBc19f0ewYWQhAnsLoekycza4hssRLq4Hwg97nKDjYvko%2FgdUtqZe1azfDNlCU3lgTo7MSh%2BD7dz%2BNfEIznTBSgoJEw9NePvgY6pgFVX6vzX5PM1KyIIB6P%2F%2BghuOCT880uwXNnDsp0b6ltlVgRHUwpAyUdlC4%2FonXWpYZ5l2JGd4Jq4VIavUC3GAOt8kBYMeMnIov98jKfjpvAbNbWnFc7xdSkY8qF6uQxarqSmnkj12a6iN3dIi2AfeVD04z6Z8QG0vc8%2BGNRF59GQZUM9pJ1QLqFFE8ehUvrBeQ27zYPbCUwgauzGeubC1cicgZ26N5N&X-Amz-Signature=2311cb6315b089a8c7592212510b876ceecb324d6b8a5dbba870f6639a702041&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
