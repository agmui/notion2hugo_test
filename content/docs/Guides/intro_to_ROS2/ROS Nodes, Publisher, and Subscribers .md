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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=aa72167bfdcb983f159d2718e2d113dfdcb14d7f3d091874accdecd5c5b75728&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=3033eeaee7b305a3319287c5f37fc5d745cfeae1ea0d0cdc017a4404fcd92ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=87c74a9edbdada7e1046f1d902bb3192ef343a7fee869c9533932648a2cad01a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=7eb66cfac6e8e33b570e197261edc7b091b8983018c59c8a45f5454d7bbfc884&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=8253e5307f50aaffb7bd9d9be55bf0c3a7b8c45dc118ec144f7dc67dd34fe3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=1c0e283be1e08d83106793d3e82c9e70b771d30334d5989f1999f6807872c9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=c3a3b87f7186400531be7acb1ed1429b0e20373f666cfbe147ef6536efa5e81d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKXMXS3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE5gvL%2FFQJdhSbQYCXtHSI8McGX12eG3VvI9RYCWcJ%2FYAiEApvGyAS52ZJuT%2FXVvx%2FIJRPTFu5qTZK0ZvfUz1y9v3hAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFs1OaZZ%2FvWDN1Ew1ircAytARdrZ6y1B1%2FdIGYWpd9gJccbCofugm%2Bx2bmUPLCwYaLS7h4HQtHz5FgBBNQ2In3IIcUDSAKEA14K6ZZJoq5Z9pgbHZA4%2BWwI4UQ35TKbQgJl3f5IT%2Bxy8klLSsDKnzVYDtoxLaI7psCCkLPqGCQCfLlkqbaR6Rev%2FezHQ4yp9tdkRumi7JXChw6aKYG8DjGYclPTAnM9t0NZJrxwui%2BUAJvgsiCKP0TtL2HnMXhmI8oiTtG%2Fqxz83vFG8uaVdszy55XWCEc5vhYad6r8W2Tc9%2BVFo67%2Bn9mVx7VqBWzNCm9Xu9B20p52HQeRi8c1VHRNpTmgW5ZqiWEgc1HSe9iXJ7rOISBBB5zSBkCVFjapv%2F%2BMBODM2s4iFeJJuVFCCtCew2ne8DCJdfccEjIEFfvvVxKkoTHqnv%2Bg2WSkrIc%2FPhHB7kTTqO1jgH8Lhqv7eS7%2BPSkcBDIPzjZlp4kjtl9hbZT9CJSM7xBrMzriP4803Sjr5RGV15deP5lTFGZHAJuuxGtA7cU6e%2BmpYjP8DVBumQj%2BcLyacKd0TMfZWzaB1Jj%2FwO9aKuy7Rpka9k2FL88u8yXFY6raYXTziszahXO%2FZ0Uz3PJg7uUpmtAYWZF3btp61B1XcckE34oMrMN%2BfqMAGOqUB02BDnMuHzk19OhhmIIT68GUDTzDpOukO%2FCBesLW2zZNTPHgKxDvlJD26aOOPOcKkgvPeEV1EgwwtPLMoX8uJN2sF%2FJAdmstGHggHI07Bx98vjv7v1NYHpkCko0NZHQRvdvjyPSNB%2FYGTFgUGtSSaV%2Bvnrh1on%2Fd6jgjmL%2BTBSMYWtkdqY0y3PGAc5KPtf3EVHSMAGsCtO1Ct9%2FHaOxxD6S0PUGzq&X-Amz-Signature=5e321428e79c144165ffe2b8cde909415595a82c06454561c4ddc4c3552215bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
