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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=aecb678009b09c46e603e545555c91b5e5e61e14518ffe027cd51fc19ee4ef61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=34e69a8bddb30fa3a60627d33fee33d10fadd80496f47839b897a8a81f7a3155&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=c85eeb9ee9c17b8e52481ab3a1d201bc9031a1d43a78f48adc9ae6e79ff9b72b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=afc6fb767d7b0b374556e33e1f417b480da6f65e269852ab6810c1907196ed7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=fb62ee05235dc57a401563cc73bb70fd06d79761e3d8e07c418bb7cea7f61897&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=bf4e7777003a573674d9d3dc743a2fb284f89196d984b1f7ffbda62b3525c6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=44b6523f4977d66d1bb9ba20684dc19c8ccf1fe610523bff8d018bc2b8ae8f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC2IZTJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyq6EZJ7w9yEn72%2FCkoZK4XEhBWLx1NEYJ9mVBcrl3FgIhALCXRQ6PYoX2EV6MNlayNq7dqFo2gqadKPnCjI%2FdkoYhKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuJPwh0O4myvCjxKUq3APsARH%2FAGN5u5XKc%2FUayoJUWm2rR2lzJkWPSSWa%2BAHxMaTyTEn1bmiowoN%2FhleVfOqn8hB4qPpS4DkEtthzeCZX4Fk00AVDk7I4O14LsfZt4dzKIlNMaH55psenoVo5GGOwRGWs0eYUD7kv1BttL5PsbZq3GA4q7%2Fk%2FpqJXKc6mlNIY2qLtc0qMYxNWc8l2V42ZQ72dQSzwECZ22aBihbRXrRE52968Y0pCKNAlHX8I5%2FXpIJyGMEWUpCQiMHlo8zqfZCIIVgyf698Ao3uWRRVHfHiK6d2i823f0cSBtbpbVmpkMmEdO78o1C3DD6yVqZJJSmsCiVaEBdV1B9iJnayViIAfz2Gjy%2F97Z6WWhy%2B8Hfa9uS8rr05p%2FCXTF5B1Crk2b11jAtfkHqapYSWrbDbiqNAg5xHCD4ppCQEt9BZJFCOK0u8ZfKYvUXe6Y7AufsDnfzk2KKaJmBn5JmcgaxpxXakJQgYtpDmSfdt15LVNMH%2FNWkay9tuFot699oCzG8CbDXjMW4wAYbisskzn7nNWAZaEi7eKfvFPeWsQhLHaFCmyec0X3pRj4KdzdnDP7GMdqmdl4Ze2%2F5%2BwjWHK2hI6Uncp6tLiEx572Ybyo64uR89LK5%2FOjZV85LW6hTCE%2FIzABjqkAdQ%2BrRZBRmDCt03GvIptOM%2BAhP165WVemBL1nVrmdctOSUd40n%2BAcwcEqk5RHem6iURle9OdVPoq%2BaeGSmsvCLDl5cu6LhsKQmT8SUEfNTPZJWRJunQMhDOiXQBuRAsJspggRZghBe5utzN7fw8R5ZcLkapkF26kCcEE8Dw73CA8Y5iqpcLtMsVPSk8YD%2FbNGVXex1k9SQDGo%2B7YuZLFww%2B1YQM%2F&X-Amz-Signature=92f49cb3a8c068afae294dfd50932283640f34379b3bca8130c51f4440687ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
