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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=8f79fbaf367385e85b3091b0c06853a3b6969e0af9e241b199bd6deeefb66b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=0e688e07f41e7047056187c7418ad5b2406fc8b3709a017146c105b6839a611d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=e97a68227aa499224fbc5fbff069c57918f962129090dcca432b1ea0ce261d04&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=9970e5f06099055420b875565eea63c336feafb21d21e957463e3ada030d0cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=dfadf4c145ee912b0b4978d5a792f59a73143b57d88a61ea9f6b9335f47b7cee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=94ac3e6333950afc3038835569caa97bcce11d1f5dce8930a504050168ebd788&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=4916920c0efc32c49885f62538628bb92f7ed2458134a0a6230ab396608530a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6THOWZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEB6%2FHB8DUDOWJ4RNZgRC9LG3QBj8kVfSrdfptUl%2BFEfAiEA%2FVT5GAhh1vJ5K4YIxKUBjDBEDnGbmPfFzYm85%2F9f2Hoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNuYo7XaFaoUzbmcLSrcA6v%2BwNE5%2F6kaYna9K%2FWJKem%2BIsotNBRo%2FnNITYgScXWyTDzF1jwrFs6vlrQj0CRSD3ARw79fXSnLHnSXRWUKLe7usqscguoqpqhn4KxiUv84fHyCkGo%2FrIPcFxPU0jtexQ5pv0RvYkkF7QpvHnEeTNomBxSsnZE7Je%2FchY1neY1n32HYrzU1%2BpROqWbnThDYznq9DjcqZZz9jokF3pD5y4PtRheyzIrvjIaT4ZBAJ5oXzYWHZz3j8gE6zJgkpbqgQWe7xfWGaXaVMu4e5gbeGQeFCHbCDoYL4pfhX5GPF%2BZnDgE8QOMiiv%2FGltpiyRJTrzoK0PXE1wa%2BkhLTKf9ZNfHoOp7r6CIDlJI%2FpIu%2FijU7BDKLmPYv1elNhsRuzMB7FDDimdxf95xiyU8kMrGgZaVW1b1kRA3cEO5qIlPGmJty9xiVxWWSq23LoEd0u8Y9JCAoR65H8Uz22VmEDdd3WkToHU3N3E8gyNLORlrjXKF7Hmllid2GyOAjb%2BucM2KNGMcnEFiaGx3%2BsELOZOqn56eXf1bphJWCRnmm8Oz1QF%2BvKatMOhOzqbxv603Q1%2Fi2A%2BHLSF5TNRcHbKx4Ffmsu8sx9OtZA0oqLOJcIMku8FfJoUSX%2BhiR8j3tAhm8MM2k0L8GOqUB2MMIwbGTXmhzQOC%2BYs26gobXY5%2BEc1zRoDhL3Gsg931x9kO4hvVzVYOKQAJ0zyYvv4LJp9UBHAszK9sa6MDfoBxeqeNRnUi1Xzu6oT%2FrS9nuQnKvD4RWfqUlGoiniZlipmD%2FKfYpL2Kq%2FsJfY8uWKH78JgVEndfW5%2BHBqoz6%2BdK6FTohjJkAMc%2FvQriBL%2FBfSClB5n%2F2NVi%2BIJ4UVe1BEE7dDc6Q&X-Amz-Signature=0a8a4486d43419deb64a31ea454eb2314a7cb62cb804bbf0e62c1b8fbe8ad021&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
