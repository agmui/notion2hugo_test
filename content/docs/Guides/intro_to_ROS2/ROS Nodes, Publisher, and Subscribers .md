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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=e2df8fe1948934ab4de37ee199410682c5baf56f682785ad99fbdf77bc862ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=9f4b55877b4ed23542f8ec6e84be318eccc56cc36ae1eac28f9b540f2f7376ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=0acef9d1258df910a38346673b700b697b169250c25ebd516db9e29d528dc69f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=e89bb559ef06370eb9fea277ad7f1da0bb7e86a9173c28a84cb89fd83557f1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=9abc01d21ba4e765e6230088528664176f13ae4bbc239ce3ef31706d6263ad60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=98a9e6f081d8361eacfb4d06839fbbfed5f033e1790ab5d7575148551831f09c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=88918874dfaeac535f1ee3b61866041d6594c8917480f7d7f48725feb1e6d69d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DAGVEW7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2J2IoGqcUy9INGP%2FlerPrgDFaFOvWGCAmbUCGBp%2FLrAiBF1h52tKWGuWTkp4N4YoSlHAL3Qf3RHjBnqmlfIIo9nSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNuZZE6S3j2xp1AiKtwDqz7juLbUEAMTwybIepgv41ATgZ4HkxuH9BPEAlqSLhKJUisph%2F1lIfySdPHBrS1lam18qIgLqd5fsESJlWRu5ZEUumKc0SCUNz7ZWMPr8CXrzPl%2Bynbi4bkgoUVVr0ziGwJd%2BdnWvoEzssyVD0o3OnNxP5E9Zt5mZhfMso98N3gCUnAyr01%2B2hZvI6tDbYRWrPfgbTAJ9BzdGiIQkqnApbib0mdu7xGG1fQLcDaMd%2Bo7k5%2FW4RT8xINDW3n52I6eyzojwD25MhWGi0fuJiTb%2Fk9MCe4gEy%2FhoIuyajSTEdZP0vcdxxMz4SbTpM%2Brq9LnTZRZ5GQ2RmrsRgCWXF1AU19jxpEUdEENlccSm0rTmGd8YuTTPN4CnDuBoOBToGgFejK8nUy0%2FgMJx6a7k1lFTTrevXIdYzgpkyf9fbI7q3E3rZ5asV6z1fEGPwKWzeSpnww2ly6hNXzS%2BFxE7r%2BHtcF%2BBW%2FPymXkWd5yeP3HjqqXT7xq7ebs0iYxBDTnp5f9VHiwB%2FPYkutwzRDLdiylBH60tohq0pq5uuPUTrvNO97ytoZuSlxL64SfqsNlN4hLw2ErnPysUgoxjWRojrw8ltaethWXZwMaROtVCRMWeian5PgoCNjaz1hE3vQwhJ6avgY6pgFYD1brquViekN06iKa9%2FAvznGZri5MiZejAo5qZQFDw8b3ovPsxhYvUvSwwN1X2kCZcS4mFP4yqLmJojvb2LXsCJFCMfwIx64z57P%2FhH5XDi9oUZiW91rt9tC44dhzMBFq83FrINaSYYn9EWr1enAHXaarZWb3%2BAz34JFu77hMuAiGmflrIjECRZ6mBiSb2%2Fti0Mft9jaAv3TuOyStdpzRhaCU2x%2Bi&X-Amz-Signature=e7a8bf32daa68a05badd08cef49e3c9c1df374dc14cae66b31782b5485e956ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
