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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=05be2c4b545fef88ea982c879066b9d380fa74fc35b807704b14dd4c701f2273&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=82917f016752501a82c28d9b1986fd5b08373cc4cd9e6f5383b02024af0d7816&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=deaa453416677541123ad9bf388f33ad8d99495b71e54e8c8835a4470ad7c5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=90da9eb9a78c1c6c9785d708249e7fe83730d574464d005e02072e92729e2594&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=dafa285d0152bc547e25a8facc603013a97f675fc91009f263144c9c0ccc87ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=c76a8e41011af9bd046cdfa4a3462d34dfd41aafbf896631f5a37f5e7f93fcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=7d648ebe8abf0e24d6b43b3853ff60c720e58e0c0df8b6d9cff022da76437a99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY436UYA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyacvsxz39e82TYy4bTuVrWHZzdWCIoaiDZx%2FjcGBISAiAtdKsvacJSMcg5HxNaynMJvh5Bl5tUvIoIBRGDs6j%2FqiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLMtIe95Qi78NzE07KtwDWYOfAHFb2ljqfqW4bsjhygYsJHA4O%2FfF0601BUyz8Em7Bm8Q8zXjt%2FitNqMJYRYHyrmxtHRdI7a%2FWonPcxZ0LVgxSfbeU5eHaDm5FMG95RB2q7oulImhZi5hUwA651LDRBRQOdcBzLNycZZ2kEKc0iMvyHXmPPi97lpE37bSVD%2FMjuNB05bw6WNFZujmImpIn4rS69qhvmpYfaRZgQzoYBcb3ezVuQ03zhzACYO80MojVbeTESC7YHwhAoJ1QdyV8HftIvbc%2FiCY3%2FRc5GiOGVD63kOaqmwr%2FcRLCPzOZA6q4Vg5zOF3MDaoGOvB0sL2ZU7bp6OFiHYl%2FCjbRrjGot7y5Mps8odnmdAIemhl13EQRtXxKtP7687vwJTKXWa8wRoji9k4iEJ2Q7uQVqS%2FnL6L8Q0k8hulHXq9VpvXh7dLavyrj5MxZxTwTO0x3obofGPsufZ0uEhz%2FaYGyOyDorHDCqGagQAzZrneMZbnha26JkneTo7Pb7lqu5njv2D8wkT1vohmyN8TmUHeYRwArWFep%2BZ8C5RkIn0ts9%2Bsso3Ez7EVFk3Cays8Sk%2FguRjI0%2BcxATSeWq4Ea0Xg63SLs1ZBCnx3aWkmN%2FMqrM3Jr4HISXu6CMOp8guk6%2FEw8OX%2FvAY6pgG5e6YTmdNDqTlZwOCJhjk34%2Fnr%2F5ZYFX2kpwjdyDSBCC241XV%2BLVBb36FMvglwn0k4GrENqfYF7KthZNsr9UqXwzWbjHm9gY9aseCJNFgsQP3ogJb6sd%2FykAYRLd9jVtGIWSazCmXPAiMlxMnHu%2FASZAVRFAghtfgzpXXBatRAc4fd4Za%2Ba2Vy7InUZ0meiamF0WPH81x3svynDxqxrgQW%2Fiyc40Vs&X-Amz-Signature=117a203ec4dea9c694858915bc0f4f9a4ae3f103e5ef4d3c14d85756e90e1677&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
