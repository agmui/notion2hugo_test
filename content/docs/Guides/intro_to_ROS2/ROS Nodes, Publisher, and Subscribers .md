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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=f66fdd628244195327b0f4091cffaf353eeaa2410e89223908345a34de3408ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=59a62124d0b8e363fed981fa4cd7c7c8df36e36303450581dc0e6a04a69b1a13&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=27d7a82083a2801809ed1a19e21a5551d34905fdf45e4780d67b211f7d1a432d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=0f57268376d4f7531251b7bcbd1f19a6a860076fd3c321867265eb39b9f36b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=3e2f92139bc37978b04f6cdc0a20bdacb29d7f1d061db9f6801bbd87e0a3716e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=8efe6c3608f870b2cda9c173be66c2664c5b4187339d23c9020c6f3fb32bfad3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=6f5517adfd018cea2547b0e21bd3f34fb9436fd4e9fe13c9372703fb898f237d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICWJ4HZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC776iLLYq5L7vxA6mfyWTmN75bCEvLOw%2F9CMcS9NhNLQIhAL5bcxyNSFJJyZjaM0EvMwT2JnbCRnES7ZskLHVJcP0CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyAaEEfdJ8KTM6MqMoq3ANrUcWi9p5lcMxZHpwQ1CzPqiM8kSVbajrtBXt81a4iIi4pqf7MwVmZZpGJZKowjx6FW73KSr42qIv6HAyddU0JC4o5CLkVH2pWqZ9nV%2Bbkx%2F1VIfB7oznlTYHCZw4iWLPA%2BmCpVop0vwVfMAOeWB6oX8EMnssW7CPfI%2Bo%2BCUvgnlZFzcxOPRl01q%2BwT4%2F4U%2BLkXFgBge2b1l7%2BeHB4mJgFordIw48bSEZojNF3DNCDt2mJfadulhJPaIUIuJcvvr6PsxLSj%2Bg3xFdQbA6bYHpzzpuBagEqECpT0t1INt5ffiBWG%2FFmAYegnwM74kET%2FrvTVsbIo%2Fbf6mmjEsQThfZEf8SZ8%2FINPnZsnTrUY6XKoZRHBNYGPM7Apz8%2BP0RtJ8ubU1Na6nDSOPqUpD5v8P19BE2xDkhAJlo4fvGh3FkS298ylwq%2BxjQAmPRiOSb8jcoxBht7FzxIzhM1lDh2Dapw0AWW65qPESGDLAEi%2BQf5K00mGxbf0NguvoqO8stZEfJZg%2FjNA2mGO2eIzbvEZ%2FzQH6KrMrjOSGAIOyk%2F%2FTlT%2B%2Biq5eMZXfvj4MB7sRvJ8sYd8GAokug%2FhApaBg9TMV64FhhunNNMd5K%2Fec%2BxEt9IaR5kv%2B1AzE6y5dmCQDDCyePABjqkAdtA%2BOdpCN937ggIlHY%2BohfT%2BHoAGgekMpq%2Be%2FzM2zxH8RftI537RKhhDyjvkhOyN2tRW9qTqf1l6xU5rt4aB8IuFaaxyKn35ZVk%2FwK471IVCckktzNcFT7GPdiv9PyBaiIi50Xxts9ACUy7BBVrBkMJ04G20dMKw4D6W8cTrggnUQGZyUP5Fio%2FK2VmGu93nSKzsBiY7mkaiNJQI0p5E3OblHHU&X-Amz-Signature=a1fb3e0ac9843a71bf66f7125d0e0b8337e1166486fc2bf6c9fd3ff59de4ad73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
