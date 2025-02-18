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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=4787fa8b9530759d4846759be6759033d3bd8ceb94c80d74f3f30fd5dcb11c86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=2a86c0df95362d37b7155b81afcad970b8b5fb0e70f059173ecca019bc263ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=004bf642ae4aad6ed67d09a61b8346d9c595ba1997282d38a48ac1640bf764ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=f6df14b7ad8eb4087546f15eccaa2ac6c186eba7cba720c95e6b0e02a3a64877&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=068c992aaa0aa3b7fac5ddf405b42dffc60893e514e32474a89ec14c6e152739&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=84ab34fcfe34056c5c44a3ad9f5bfecb5a3306eda9d59f868265e2ba04644282&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=48857da5b7d310dcfa3bd06f0842b4b554f63889a9f65cdd46981559ca8b792c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6EIGF5B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCiT7OGePnWCA1PhwuuVfsGZEs7Zm6YmSYd8SRs4Hx5aAIhAIfs3%2B2Y9qGRZICd4rqBLHe1Wj%2B9%2FlOkq9ZP%2B1bIrI2EKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc0rvRXDlBRj9Mc4Mq3AO35E5oJ8x2SDZVdCM0ROQF9e99TMZJ2YmzFoM6MOqZ2um69tz2pJVv6zuzirlHmHdJXUnMcZHK2mV5qy5eRrXpcZuMqFbiOXGN3yqPzIpN6jb0efviMrQ34Wd5cgFZ3Czfd1Dya%2BdXgVhXLD%2BpC9VOGquZgcnUeuyhVyf%2FyJoIXwARBFx%2BIs2gngHIFx%2F%2FlYxcJBBaq1a7xeiwKGOuBvzSFyZZSme946PMst9jnFf7djUJbIEG%2F4Zn5ztXXsQELeoJ1IZ%2Fh6Wvtwy6ykRpsK%2BtFeOum1lksZ3s59Msf4O48Eeb%2FQStV27xNNXVPS1TflKnnqryKWpOVqv3DM4NN88ISTXUy8iI1g4B0s%2FLpBMD55lJTwCdVjEpRDkJ4%2Bb4Yhzb%2FxwE7M3jrldEFVx5BSEBBSyPxqc%2FcCPxYHk7EuSvzLJMC5LJXtx8zcpu2aSmHSX3PODdaEWyIzN42u7WmmzwQaEGaM3YlZxf2h8oQgXx%2F3iesbC2BH1%2BvEHLeYJqtADhkCO65IB6J7bFNzHFeDEpsXw5%2FW%2BEoZ%2FujkwwHeSxT9L37KHqh9YA2OtbEeDIYp78zqX93mCiynhpgmetWWPsrqfjTWDoC%2BXmKI1cOvBroAzn5Xve2A1YhJBEQzCd%2BNG9BjqkAa6g23nfTBqcz5LZtiSfupg1oAe5EpAPfIc%2B3zHcOjokAMwu%2FnW7y5FQSBzWOQPnPCCuQ4Xl%2F1azSbxQkHVmAbBf9PBKawPk7rZBugrwTS2uY4j%2BDE7imbVqZbTlimAIWnRNt6N59rPoe%2BAwI3WFjjlU%2BJ0xJF438rmNhhgnFkLynbfNfQ%2Fi8PzkT%2BfHV9Y9DH4%2FjdWGI18ija7%2B7uWoc5KopOBj&X-Amz-Signature=b0b9c7042d38d143d34ea7ae76a597280af0cf4bfe71b122593f4e0e10f8d595&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
