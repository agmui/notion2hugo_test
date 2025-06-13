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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=ef40ab8b019bf95530e2e8c52d6d746c1aa4002b912934c7c7c39518b2e3d74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=713b94190eb498d9542831ee4a78e895b5cbc670a966868f53022d45bcb97399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=da9fb3ab21ef95931ee583a78a8bb3f4d2e093da921dc8cbfaecb756b3e4f093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=fdfa4d93e451623ba23c596b940c4f627e648b84b57ee2ad17cb47e4ecc24d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=a13ea31b147c7350276458adb76b6dd33972972eb1fd2874382886490778e4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=045917a4d3490cfc94c2e5033dd213a8be6a2f03d607166663b35f4018d834fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=8da73c9ec9be9fb9683f268170f89a8d03ed03a82a4f3d24a33558493834a1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634L2TY37%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC9px4AcxZ28TmUH6lUUSZ6xXu7Tv2aGEvUvzqB3nJnKgIgXzNZv2l%2FPaeR5i6eToMQp%2FvlFFZgKtLcrBbv7x8TwHwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhjAb7ScDTC6V%2BU1yrcA0gvLkGPKObqRsHVkqNpu4dE2hu3BMIz88jXN0WiHDqAO89sitIsKzFGEiFQR%2BQ444pYGur9HT3hYczvTk6lstxDQ6I%2FQpV%2FzieM%2FadoN9fF67zK83u5PQLw8xN2Lnv36UzVFbex9FUZJi3T3fir%2FwrRXZ6Cic9uHNly1iojWFJqcClX%2FIecMj5eBi2exhByG6tiwuwSSx%2FT91N8X5em2jUT7e820QyjtLQAEEXXm5M65czd8X7u9N%2BvTSDvBMBrEYiaF0uQnj%2F89bQMsrR0rd5sm%2FI65%2FeRGLN7q0Y3h1pF%2FhKpC%2FrxfLromMludTfgjXkMySRP9msACMQ4QhG4Jww5oOvVqjROaqqYTtQVKPCtx0Qgyxkb4Ii4%2B72GqxuinxEDViryUWpjO09akF9vUHJ23cn0%2BffhIwSnvo9e6cfI79TktXqd6dYW%2BXtX0SM0t9AFNOLh%2FXMwaxe0uFaAEWHfmskcUxc0AT45pRWRr2Ed7lnLanlF14dsxYTkmhYznbNQe6zXL%2F%2FBLS29LNUxDfnMAS%2Fvfif%2B5RQefxCWq15d3gYQg63kCgjYwlZQKkJp%2FMy4b6j8KAtokCHnoAQZXOjh8eGXNFCaqxEtxa1Sv22Brz1uqsUkq%2BA0wFOLMIbXrsIGOqUBO8DbxPA8Nr%2B%2Fc%2B7OaSoMux0beNvHMRZ0yNW3Wc6chXn%2FC2n0CjuHLTDd%2F%2BUwlqTwXIB3V8P4nfnSRztafltGqGYHRrNiZ%2FjbZkVIEYNHQO9BvcaaC0OHagf9fPb0xPzXFkZ7BA1IxurYN4e5vU%2BVD41z8ReBphl%2B09mYA1yjcn90%2BV9U7FDoH8%2ByEITxWLNDqU9QQENqobWDRCg2vjbIYeP6g%2FQR&X-Amz-Signature=8bbe2a4f8d816b89545230f0348ec9647ee9818e5b60cf8ab14f96cacf219867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
