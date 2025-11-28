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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=2e37bfe4e7c604ba0e21a034a9d84cecd7a809283672ae67346fd7590634bc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=9c0ca3c1ee84a09c55aa316abdc2e0938d85504eb692b388f557200fb69547d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=e6bfc5ce01c349e4a962252b5d931ba721ae62b333c8c35bca7725ae905083a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=952d981faef21d3802d84a7a21ca51ec9f1b42570b7ed375655c6cf307ed78cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=256e8102621351c3876b93adc0d6ede5b9904c39fccea38539f7f7495ddd9994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=719767200208a41ce4582de550208f97c070fcd32528799ab269270161acd7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=82c2cc4cba8be241d8a62deac316419f77fa2db640733a9ed61114e40ebd8c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQDE2YM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiyuSyaUMnN8JU4MCWf0QuMtFK%2BOARioFR5Ksj%2BUsr%2BwIgTzE8T97Sl4ztEUaJSIufKIqwaW37D3l5UkYfI6YQe7MqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH83YrtRXMQe0LwC0ircA%2FxUSot2Be%2FqFCGLS43mCEoC0hKcvdqZo9jFfjleoltm6a3GA6WCRrlJYUPIW6muFVxxdXX6An97f3A1sGEM1rRiKsvMMJrtsGP58A7PnQLASt18E03HkN3eRkaPsCs16dYtEodyJA8tcMpUkhdvF5GHrH3qvb4IG499Bh%2FME5NGtiBVFtnGpgtoZojR4hC0EPiqooJCEIoCfEe4vn3OBuPGJKDAliuzDhfQCDuk2LaiC87HPJ1%2B5fXno2zWS1n8c7ktFRy6Ss1zgACWcN%2FkgWv4emoLdsDaLWiMoEoFbsIknfsVrKvBt1hclb5A7DBsBa5NM0M6vIoOHA0vAOIdMo75vS1x4kO0AcEA0ZX7Lm0rcFvwmwlPpq%2FT%2FwSqj7MpU%2FqEr%2FgG2OhfTGP5H%2FdSn69CsdBjGEXiGZtPEeOifwrXaDFWHUJ%2F%2FNpkj1W8ZnaWICa2ozQD3pQgmXKV8Qth%2FDxlibEwxmsWr0vlMAeGpgtlJ9MkeoP36cNJWRpDkXH3zQRfCTzIxi6%2FFJEHHna5bM3EhYPefr%2FCqTHvratcHo3SPe0yZP5EDOdLsfH3JeTOj2l8GvA8QzdzZYexMTL%2BWO0b5rY08iQft%2B6s6wocMNo5%2B6REMBwCp4hZhw20MKyZo8kGOqUBAV9nWMIvFe4wCNh%2BBnl9uoM4o5uB%2Bfb%2F%2BRH5TlbY6jD7iH1bJoOk1c2XuWftTKSVg1Z6tbiwu1ZvoACy5aJjq%2FHYLV07twOWthlVxy%2ByBoecnsxNsJOyBiXqNECnLs%2FTAv42Dx1YdLJQIyIGPwFBuNLCOtVUKw9hVsCfUBw7LTaNHHvWhsGfJ8VH9Zv%2FN4Chl1LlH8I39gOHuB8%2Bjd1xaKuIlZd4&X-Amz-Signature=ae20fb4044a87eadcc66beb48a9b333a80176b621f8901e964f35b924c490aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
