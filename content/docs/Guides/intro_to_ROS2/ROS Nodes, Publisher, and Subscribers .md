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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=6d3409e62395e1efd45a08c30eb0c4af2f2d0724c2e2f748934dec4b15739ece&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=4ccca0b4c30fbbab3ba32d787755275a090c13a6526d656979b9824c8aa88bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=00f79b8c91ec8594b3b91928e3ada174c0de809d79bc99413da14e472a428c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=96e0937e4483dca154859ad87f40d45f107cdcf5e112d950f40beb612469a436&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=6e696e7e0e7f02cbe9c9ef4e2e9b99b70d3c4a287befc78fdfdfbb16a65e5017&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=8173b415b90633b2a31f3be8d801e7200e4e184c2fb2bf78d7c593fb1edef4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=f5b63d68889b7a95dc4552a6f8f3012679f20a81437eb0afe5c19cc8ce0a95f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WU5IIMH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHH3%2BaJPRLVEREfJ14n%2BTXRyerc2I8NzjHkeUpvWanatAiBjO1QeP42F57DEDvrAoDhJT4m%2FCzQmkMjWrPWLndsbOCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7VVdqoKzu7adICXKtwDJzwBMmtIfFif4w7DtxQLiZetnumgO36AvdAR3ePeZfQBLRWBdiUVAbx16PxMh5Qzlt9QAQZX0aOkeErSjtLjJprG9lDS04ZPtVDo09dAI6BQfBiCi9Aiohvb%2F%2BHUiWtOaWVy1K5pbvAbb%2Bn9oLcK8U1OweonQ%2FiJdF46Wd5RLHAZSxw9O2rVB8XSRav9pwTKJJK%2BOxNQUGkpsP7UWIhkPyGGX%2F90k507fxUeWreljXLfH7f4p1IW56hVFIBNCPJldcQAv0ViYW%2FI%2Bz%2F77MRwxsrCDLf3UrOtJ3bgiXZA4txZEZU9s3D1FdHAAi%2FSD5uKr8CxTPsDjgvJ%2BP5YwkvQN4YfQ4%2Blsqzfrym6%2FyOHyX9HWcUMgojL7DNxZLfqNJVT%2FCeQieO1t8if%2FrZ4gpEfGO0l%2FlvXGL7m2dMRB1qC%2FdluCJZDedG%2FQv%2FqmFNG0CQNMF9kel4HGVzDJVdq%2FC7pQLe79Fd1O1hsxiQYvNR5OCqWhi7qvlxzpWZTz0ZqMdgsjSgazkDIKmGmD%2FUYRLiWKEXemXUNFB2xYRvs2SEWQ9ggARhQRoujOoo6JRgh%2FcAq5wjoLDPUKlTeq%2Bc39eA0857T%2FgjtFfVgf7qWQjOE2Uqb%2BDwjOuW9jq49kW8wvdmIwQY6pgFPb6fK6B1vi8q%2B2v9D62jvldHvTW%2BPH5BSRxHXz8n8P%2Fzqt8x9siC0cpQ9cDj%2Fh7gNm%2BvXtmjfVuqmMD32%2FlMY9opmqgRzbwE9t6K8aemM%2BzAOPBjzyqFVWGefuvvNNXtJGeKUx5Hvt7dzzVq%2F1lkhZuYqSi7zokhd63yNRbFBxOnMzvvVoz48sdgjFMja%2FN2bsecdIOSg97anrW%2B79SEWncA7NIIl&X-Amz-Signature=b82e4ccf54c228d209dcd8f4120e1bd1a9dc87a93566c9270ceea009ed90d389&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
