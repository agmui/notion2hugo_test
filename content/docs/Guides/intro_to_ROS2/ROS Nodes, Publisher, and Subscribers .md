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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=4f3cb80fdc2f04bef24403d7171d19886d84c4f0a5d99e0f9c9092d526cb7211&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=90e1c2c51f861a01d1daff04a460d3763da9b2f30dcbdc3f68744b709785bfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=be730a51059ac27485ee8443cecfa23d862915140b0e8825ac603a2be3342222&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=5ae8efda059b809cb658e5c27a3f47eeb754222d821e0371dd6a94663fd8a5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=76f68863130f76dbd730a105478ed17b208c7d4dc61d98b1dffe0f11fe831065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=e116b3cde005037ec657baad59f2dfd1d175e3ea1b611b66211973a521c7afe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=5fd25f7de3169a2c86e3b0be8265eba0903f1f4b2b0395c76e1666b7ca2c3a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SSPOTP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA2Z5aHvAYcayV7erWh8CFH7zMNJo%2FMk6ctb9aVo6gYUAiEA835pvLLlTjkHpm8PU0c%2FcjsyvZzv%2BeT7FHXGd173Sacq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMwmjMEZiYdINV0AOyrcA0o4hMSL9cmNjniwa4Dr2hRR%2BMjKMbfwRWXqWuzW2LpWtwdQEKSvgHvbyMn9LvsqRIcersdVKBzUfPb0DjYsKocGpg87IKp%2FlH1AUDUty%2FZ%2F45Gti%2F7JtN%2Bz%2FV3V2IizwTVkqj8bPCH%2FU%2FnAiu8e8VuVk9AJaeNnl%2B8XEtR7hHIFtKMan%2FPQWbp%2BOf2QxXoDG976HQ0PCekAKorpAMTwLTVQ%2BagJVmUa786czWf5mV3d6CK9fYAAZ%2BOgDqZb%2B3Jgw3QauifScOrrwc%2BGc9JGy43xhVST7k9s4TwYvoe2bKGeXsl4GbW8pL3z37Zlitl%2FFrUtTYFvDMzJ9RzaDiDlR0WGZw6V%2BjjVEVxpEkKX4ex8nIVhYSPttOzzUJg6RjyC7khqyCZkya180azSG4xnBQ17%2Bbi9pQCW38D0uMl5rgydDg651b8%2FYyCITKFBMkz93XM4hfCM9FWhSjzvEPGmUnXPX6FXDSIH3DKTyo00WraeIuIbOs1LKPtG4DmB11gfvR8arbwZmPTHmGt8i%2Bi2CATgCzCSXMUcA0y3XxH5FdbiBP3gzz9SniZcaC3zJ2SGDEKdiA0sGL4m%2FuikcjT98YxfeiuNCN6toH7T9SboGlk7mOjgit1k32SpQqXwMOP59r0GOqUBjAvvqecdbUVoL0728EdjcBi0fBvSgNE3j6USRlbS1WLW7uRFAk8VWNqL0dOMFde8Jf1oS6I%2Bl3jWl8XK2pEvpjBhGw9Yv8yTZV7g7fyAx9E3%2BI8Bcu4QQhGTWfPhFAFWOOGl5EsWBvuzIaTfDf7Cx3tcx5FsiOoRlgOQCJyIfLbJnRdDlGjh6jIbdbkiWS8MLVPg7d0nVYMYRJPOpTH%2FMYNpUdZN&X-Amz-Signature=9a73580e791410a31e98a7b1c4ebb0d9fc13e8eb43b49f00bb13d08ff58c9fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
