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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=5db389ba5eae0405f6dc955fcec2c6d502ea20538d2387f111ad3786a1555009&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=497e92d2f2c07531692a2cece026b969b68ba58c88ef4210f251474595bec8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=c5f2b6997377b5665f99e304faefb537fc8a1c6beec4ebbca3a1645569f1a50d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=e89012e4b3e48f617e388cc298fd035f307a6571985909a85c9473c130aa1779&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=f91614fd45938e2e79a00590c0776c3f6e2956040a18a8568e9e6c3a64037e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=baeec787587495f2fc60010bcbf6d180bcdfc46a9c0f90a18c51364f34cacf4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=72ae6799f2f899f96fe096c9c5bf9614464b290b7b54ee367d684de7671439c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSYCWA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3qo2lnxnjqDCL%2Frec5xHYyomK3tfhddt8n%2BlptpJ3KAiEAmMJZ%2FBtwPSPbIiMUG339S8HZJDVTN47OW60I%2BeqIUGMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN%2B6VUQ962X5B3x8kyrcA9nL6u%2FDBMabf%2FDeAFkXAVFjyIdtxiQIIWe4w7poIcpyeDIZOhRZZgko4T6Me75PW1zjIEzaF607EtSK%2F7TIeeE%2Ba3wtErNYZFzSw6lsRZGUUD3DAICC60n6NLihRPTgv3TPLeBhYMyALg%2BnWo7QERK47rk7PI6VAnRZaNcxUoxsXbBMW42SpeVIfBrE9miEEk%2BkdXQiCSfVkTcvvXdByq2oBhS2Xq%2BCgEKPGNtPzNLApV%2B9aYbv2IaVdOvFfGMIzgnkPzZ299g2TgIjB7uCvUK3bOjIkdOy1fE5iObRWHVwlPjmC1WQXgHSAwPl%2BJdk4rwtb5jKwC5cELH9dHOLOti3fIC%2FuUwJzFcL7a5J26ZFFLjfTehjLyQfTD6sDxrsO0XI63eXFmUu9TCJJ1xzuJjdv93IG42ilXkah%2BRf6LG20P%2FROYr8%2Bcs0kqokh3ZwrzIQ7WOWu%2F4yzzC4gDkVaELq5X%2BB3dblyy5ldmvyMTqCOKlEcq0HnFt%2FPgp%2Bxu1hYqb12WxIllP%2BaKzS%2B5%2BPFD%2FEHhyXkRCOKIqVnZcnVdS3tPTK8AYXeeaecsncuRkTV2CzF0LVzTqDvWEpAukR7gZdSrPjOO7orrePaU4vwMQzy8iIzkRFAEwh0cgNMNzbmb8GOqUBL%2Fd1pfY6vcDltuf4IeiSngcl36R4iBFDggmCKoS0Zz0w4htaK7vYVDYXHBwD%2BL%2F2hNjCUZvnVxcHbBW4Sdp5VmiF0yoYZyxKiF%2F8IG3lFYcSOL8PcVncIrKOLh3sc3Bad3VKIgdhB8Pv8QcjcCiv1EwsN5X7Cnnc8ut77AlKHWzUAMHaEocAmhdefBSyXSovFnTwjnn91J1zso5lpb4zrTmIJl20&X-Amz-Signature=a15671d92a498a6494bc2f280464bcc7b9265afa82071f32bfd7968999fd291e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
