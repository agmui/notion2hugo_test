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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=62892735d67d121420f4c7d8b304e4cfaac4bee7b41027738a532383af126b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=9aa7c6dab2f556a8df7b9f60ad5f852cdd90a8ef354e329244344e4799955316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=729fe159f3968fd698a8b590645f0ea7fb089db7434250d3554846151c7980d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=fc5a6fd20be51f22e9804ca6e7c3e1aa500112138fbb0265974e30f1b40ca860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=88272f40fa5cf81bcf2142729e093cd87b819db3d5bad397fa57442f4f11cc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=3a2e5ddcb8e7b5df342eec9ab9c285dd69af0ed448bbe8db373250738c6af7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=706bd95b3a6fc93652664336cacec7886125bea1426e93d8fa5cf185a609f383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCJTGAJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhFQPWtDCH1YQqJn3EZYppR0uYsKAgH00HAOH%2BTSfJ7gIhAOgqyoAi4VJ4MY5INEiMUNSoLUPoPcjj5F2958VKG4FgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaRf3qrZLBMgMSi8kq3AOvqZ4N8Ooq%2BIKSYsWBiHnpVJuECOfS7K59EybzFr%2B%2BzSVgYjmQc%2B5d1QnO7q7yCCsszoGkFIbZizD5ykZOuRikBORnEd7%2FU0wzPlCPIfPqdu4%2FXlLRrEedIX3oeQr86FHvrHfvVsVEVnq21DVwDKjM4Muz%2BR%2BX9Cn23xG261K9vDSTsCStbtUcx1oI75IbVNwVaNXefca8qXPjp0ntT5FJpqBS30w2DolI9WcTCaOrW4qgAqpxFpLkw9fZl%2BIsBQv6BaMCb3FnOMDsDBxVyMrdgQO3E3QDWiQSnb%2BarAVvwcPjGO3a3H8mba2RZlDjauzu9PHIbbGdBzfhcSk%2BtGqPTnxsNykiGXJ2Tk3JkcXgG7px%2FLucKjraz0urTisj4FTCkiK0ysFLKvJIYoB5p26Z3qklxF2Og6kbOqArynap%2FDRNvdE2Zzco1eI3xJM5phK1Mv8vtKKGYUMIbnpRAUZOPxDUxqWN284ZsGW5MEPb8BilfuOpgNszuyolBdQTcZxo8hgIjHqxRrkSz8xPpJMIgTpg85PBdEYTcvnOdNyfCbUtpZT5OknZ%2B0aaLBAZGOtJAIaB9QoeTU7Rjh1fPVrXliW3WmesAoOZ8C%2F4G8G2ij5wzEGdTRRuTl%2BOozCHoqjEBjqkAQx25tC6wki3Y1KqsekZPOpqAmJqYwj9KttUl0FSX5Pn3Y87HtFGJE8PQ8WjfCi6%2F86tL%2B%2FFpZNcCJ0wO4nh7BtoActTcnMGQrxzHVVD2k%2FINbSxz%2B79RKQls1aUpOOKRxk48aPZC1Bbzwhh4KuTAG6dmutbr75%2BMt8zpBm08sf2OewlFdxscvIBxpN93brFWzhyT3H6TMTAZA49AMDbdt8FDZh8&X-Amz-Signature=f7f0796b2af7baa62f96bd286c07b03b29946066077187aff3b07b98c066066a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
