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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=23db90e0d836c55ad7681107104a5ec28341e9caa0acbcd9a7242b25cb09881f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=843bd852e2bd07332d1b07ec87e807605e6e1bfd3dfdc268c587fb407ba00309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=ccf0b0ff716a2aec180116fa7b272d33398b35cf6c1c62f9200cadcbda39fe38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=518faa71a53844c7dd8abefe98ffe351035b26649df4bfc001bf108ee73bffd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=0e3c00ed60298028256017f4875346803e2bdae66aab53c4f4e3e9b52a0c6951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=837360495347819f506e445570471547b6f86f8fd154a912becc559192728ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=d6839fcd41fc972d22d34c4538d3a8ec3a3afcceb6361b124dbfaf2b91b33c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G4LQ35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD4SL3PivEIfJzI%2BwT2NxDWE2plWCfEZDIkqJG49ybycAIgaa4rpxzqtYNePMw2Nl4Y4XiwfsDyVZbDA4fq35nS5QIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeqofgE4QgtMp3XzSrcAzCU%2BwW10%2Fmxziy3SVIni2ZKB1FWglcH1psOy3KXTVShpyJKKClQFvJxZAyn%2FtmqSSLnjZB6QcdKYlLxwczXOX1DuK9w9s0JS3ZnFUU7lTMN%2BqzJwHBRF79WBZhXj3kP7LFJy%2Bo4J62B%2FpbVVIa6mQslbX%2Bbw%2FOruWIPH%2BN9cYpl5Mo3udbY%2Fw7iFqtisl5leJCHEKe8KOkocynK8OY86REn9d%2FN5Ie%2BL9azae5%2FxZK%2FtfuUvRqoNFz%2BHEqAmd9Vaq8NXf1kZ4LZtAbKEGN%2BmieFZ1vK5C%2BF%2FoOJ%2B6fYl9fl0DWu0UZZbelY8und7RPNk5iDzMaMCPLhzexSRTK1mU4qiSOFN4%2FXYvCUa57UendIf1UQSjZwfvTgn870sWS4unLBjTwOtDn5Ho8rvFCURxM58KCPup998G2ivNKFDTIYP0fgRS3eRBHoxB4LPrqhPkd2z3hL90ZuAtqy846XFRr2RpmvZowgC0%2Bcj6FNnL1RXX%2F04U1AjjlkVJeixqrDg8Q4fRZtXRFUwhCUbL3Fg4JWEZgV%2FzXiG8xziqwX64xZuKJeIpKoer0aUqMog%2Fs7KzM4194TcT7pqsWvw36HwObRsF9fhACgG%2B5Z5PQe2GfDsU8Xy2jvnyPUkVnHMOrRnsQGOqUBwrFABMxwuNzIN40oJ9jyh1hxSCQxnbctm8SkxYFCXivXsecsIEA3NkWSf1t08%2F2woVlwOu5piQAms53D9zN9EH1TaxplRDC1t9x5Jxst%2Bw4G%2B0f0J7gS%2FlvsNjGba6w7Ve8XVobZ4Y%2BajFJnqrJTac4Qhv%2FA5ZdkaMbvo46YYxnnxJfCsjV6fvDruegQvUL89Ho8KxQX2FVdlu6H6DEo2hBPbnBm&X-Amz-Signature=2c62c8da0d30dd3b3fa7e06c0b87e7fa4c830b233b812e2f5d2f10569f0ff6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
