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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=7cdb7ee2fa7f65d25e8c204d4dfd160b18670f847c8e00dde2ac58e02d7c1672&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=25f897fa5d0700fdde9faf40046d3ccb4e76725d8135ce4ead40ff3bda322e30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=8fd37ae3113700000cede491dd411bc70c131cca0eaddf9905f45d7507f1a631&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=a0f6caa524401eda47e8386c30b0b1d6647589c63b4939f87ca4c55be02c6c40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=4669f74e24c72ba8bea557c5e4938a85f783a649cc3b21a5bdcf82befec44079&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=b25e8a6c2fcccc2bc6ada86f15058599a977b5ce5c704153685ed0bd4abd597d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=57cbffc689aa742542df830792e2244adebd798c7b59485c6106a60b2c7f8550&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVGLXUIT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KqacdrcEp9x%2FViXYZZ2Yf914J3y0EabgB8BqTvsR6gIhAPzRijgvYK1OgEgrZeFGQr9JrNuHU1W3YNtoKEFrw0FrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77Te%2BhuBBAXpvSD4q3ANPrLCdhufUyQCnZNv3gCqZgdk5BY%2Bz7y4HH5OVaurvqKdEMhdnQyzM%2FEcnALLEdtHrPvLPe%2BeIm7spLc%2FTOipwsGAX1M8WF5XiIMF9FbkAndzGxNQhi52DxhgQNPUCKNsu6ggSDrit%2FML4rltKXav232c6HU1XUYHouJBpFPUExvRrwS214F04osC8Z%2F0Pv9q0H3B1olVIfl%2BYny3g4FmclUuIN5tHUvZDOTvif00j%2B42zDSNvouZAHShen4AWKmeEPhAdbTwrqBz2QajWLEXp%2BohUb2it3IvJdQjYmSufjeaokLbxGn05y8f4yOMxLRetZEeOuC%2FUQmMH9AoAVHIBqbDFsn85VjMtOluHOaN9cGhnKsO3v0fTqZrYlMh4fIyP6MdCo%2F4zUSkRgs7ilpIXJEKSzWrKufKaKy5jInNpswPBuy50QGAEPhn7Kbuc9Ie1P9GvfwfVkig%2F%2Bk9JF5LiiKnbV5a2Z28Ov%2FC2Gxi0vmmnG230bZZMXil%2BoVqC8TogGpmJbZ7h042EUJG80RU%2BW0Q0vqdjnRWXF%2FGSAU9KwRnGXx3if5AAOuUqi4De02lp2ZiRDM3KKOHs5%2FVIaNZxYL3EgJeUxo%2FPySyMEkQOXOQKu2wBzCq%2BFIAX2TDPgazBBjqkAcgK8IUZdQlM3%2F%2FAOmoCXHAocx2WuokmD2YXJDSLyPH90TXtJo8ghiDjUmFSClItMxEfAtMP8MAHAL2gokcnKo4ts8WIuInDXz0L4BREmpBugaOY3zvilcSMLXZS1aA5jnSpRB%2FyUw9elNdEfKsBdooOTe6ZdUSHr5eC%2FFCzJa6iHe376aW%2Fa9oHz7%2FV23HaWPseIRDX7XB09tz4NVSz243G1ta%2B&X-Amz-Signature=f41323565dece1773cfb08109dda3d4e137d3e4f3dd3402574a5b29e2bbf7a92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
