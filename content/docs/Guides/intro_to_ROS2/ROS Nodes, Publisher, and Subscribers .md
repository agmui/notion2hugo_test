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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=67892786195e741d25c1482cb68dd5a9aa94808520617aef8cada5ded932809a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=19071057f720880d9652b5027668a6ae26f7c02076d6913b31ac71d2c77fdc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=e15674c3a7ea93b3a9c7e2c4ea006d6594ea34c6a84a9624a5ca2adcd0e8333b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=0d52030c5cf21ead97a7e86dfa1895ba6a008cf266cb9d9c8ef7b42d50d79442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=2ddf726385e9a3ce8cc62058b5ba36f63b400815cb87a3c606b5fd417d397a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=d386712a11942fb95727261c04aa3446565e0ad7c2ebb751831e830f892000d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=c731f4b237e1ae17831af6b9a11b89983ed1b714791bfbce93f44175eda1319c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNP3UNT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fc8mIe%2FFPnZcI4CHZ3Lqig2K5w0AAPwk0L8RwXqimJAiEApek04bGhNg6s9OB62ISjwdX2StC4YjeeOR6jcHxQ148qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHI222umuBG1EUZYyrcA%2Bd%2BJZXBEmW5BajAr%2BYKgCiU3kc6yjrVQo3HbHVgmYXJJNprss%2FZfpGTlykpRFER9bmG8canHG%2FSUBDWZ72ZvXBQ%2F5FCE8EjfuucTmSjG2ZDPJcQbgjqneVXPW%2BO4rdrDLWn%2BYCEUwNMzzypfW%2FSC5jiorDgy5%2B7OKAVAZ%2FjdhM%2BSDlRciRIMvXsiPCp5qCM6JsJ%2FFQDPTZWkNecdRUHkEtow2rbuYRAUgMNXlKUhLYKDIfpHnEE8jqkJ3oq35ED%2BkyYT2PatH1MPSPmDDf67HXjKK%2BL0iZ61tK8O%2B8%2Fll%2BDe92CigcXlFp%2FCcNGNqSoiTmuZEzdUHjDpNNOfQRE%2FEEivm8L0j83F5%2BOVtz%2FOqQFdLr8e0BgZ8KwBXgb7DDnZvPgQsypIBg5C2bQWugfNktq6IaTSKZJqnJ3EeCz2ovpZ4au5v%2FkvgLYgvkf06yvtSS0YgY7eTVIlQ45fC%2Bt3FMthaqteH%2FxVwmZl7SDaGBY%2B3nIsIizt1tNR2elrJqybU9gkhoaG8B5Hk7oz8rve15l%2FyLSBvqct9UT4bAuUwiWuxZihfdVKGWfY0XnCqTPzV995nGB4p1Gvrkv6Op3uOwO0cXkSATntIIdXNfmdSMjaiiu615fL9zCvy1CMM%2BTlMMGOqUBU9uYUC7C2Q4f07BVoZTe9xj34XZNlv2rOWKb1DKnX1lZnomQ1D4kOWmTgIEGqjuvYrwNXUTpg%2BM%2FSubbh75hcgFInn9ryWaaW6WlfaE%2Fqa3hhk7qsAGrSGeE78XsV5fwESOoQ25fEtNUNsKkTxXKFcg5TCILZFjk0McPr8kTxjYjO%2BtzKePBHhvtue30bWaGL9Cg%2BASSZrgLizLQ3HkIl2P83qCf&X-Amz-Signature=e7cc6a7053cb3eaec42ca62b1649133accaf63475a8558fb42420e6a40f15d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
