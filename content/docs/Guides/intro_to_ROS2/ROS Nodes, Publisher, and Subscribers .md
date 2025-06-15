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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=8e5878964e7984d6e29d9e0bbf74be737935e473f49b70ce8f27a71496b8fb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=6a079312699810afb275511d09202c3344eb1eda2bb7893036a7131e5ff6dbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=7c605649c99719de7709557c4a13f021456df5b9f878ba1aa5a5b65003b96e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=02eaddf6b88f5c07ac16f815eb2413c91ee558f6ec8bcc855b0aac207972f5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=af34363d0dfc933edb47d9f3c8f29cca5400bd0deeb4361a70a068e54ca75f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=fce761c5b203eedeff2bff9b54ef16d81f81da06bc2d116073d03c1e3e14d353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=c277653ee1c023deb7fc9e689bbf65116b8002fd6e4cc2644a80808753e2558a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TWAVA25%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDrq2JMJr8o03VSdJLhUwVSmETuADi6RM9jXC%2BZsqe7gAiBoOi%2F165Tm3OW5rtUUrpYDwcN9T1iEydVHTJFS70F2ACr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCttDnK%2BUNNVlqPxxKtwDG4wLKkJwxYv0c0jaQjT%2FN7ScwdDjQdGN4MnZ%2Fbmdx%2FtFKb3Ws22FWL0kZrfjkjUGOVIztUyCTu9%2BPW%2Fd4BDf1m7aREDfs%2BFdtkpHzHmTx18r4%2BfGlNIc4aTQUcPD10avf0cUCJmKt0l0m2NOOJCkka14%2BmQ2Qs5o2mQrFX4TuPPT37uzH2vPDAB4ia7%2BQA85hlJh5KJiIWMK87A2oPPMuarjKPvRPttmMd2uyyyHlAIV2wQgWWiJIvX8mAzoDbRp8ebHe%2BOdLiUF%2B4U80sO3M%2Ft1YoKlTGX2Hg7ywcIZGFfyW8yOZlzzs6xpbjsiTyKcc4jZxqrvK3EiKgdEYcMzk7S0QguEwLwQtTNstk1gHBwyJ8ssrYR%2FiAvXCNyILhZxBfMZNz3Wifp%2FtrGPj%2BL6%2FnkOiQj9oZzDqVol0rq1iBwbMZ1eu5yVZSZXsd9LDPG1idZ413j6ZSNYapMsCjs7N%2B3tDCgqNpjHWc%2Fypl3C1lIwpvD8koLg%2BdqfupFOD3C%2F7%2FHBHI7anDXHqOdtEP9v7ezJQF6iPffqX%2FsN%2BHLpjcuUbBmch6CN8xmlkG1HO6cIXLLi%2BT0hovyFzmUjM9exdLl01rUafLLmTOdysGI4Es1ScoGnXzxRJFUxs3Uw8IS6wgY6pgFnb8%2B1I8WoJ4yITy7WmfQVfytSbtFvjDNCrSvH8pkhQVv3%2BLP72nfRt2q5oW2BL2xALV5mA%2FA3Oc8Gz2bPzjnNRE%2FIFGXlWyKcyDZF4LcxT7UG4XPhX4ERvMS7f1Nbltt10US5IruqsukxfsIAvuc0cbr3epxaL2lBSxGtTdRkln6WhUW3oMBZsmNrAzYa5aDajqgookdHVk8HFBIP42BsMq%2FP4al4&X-Amz-Signature=fc6ada2f41c6c4aaec5fa270d88bed7caa4b9beffebeb1f869f2d97688823532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
