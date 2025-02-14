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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=873983f5bf1708fb04cc3ac104300962883e3a7923fa66cb65fa02c3586a570f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=6afb1d607b9afd5fa44cb30fee918bf631954da3b40196a3653d482399e1a3af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=d4771091bb7d2def2029673e4689b7a8866ea57aa7a99bc2a485a8a47c8efd54&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=0b6422a49628a6bbf3997fd8cc5944c79111ec81e2d8e30c0364f06a317f6511&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=dceeb048b43cb647eb22c625eb19b6d28cfa7a86a8cd223f83f4149e6added48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=bf1c50bafcb079deddda55ac355a98a967ab5a9f839c0c898777a48209c3bf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=e9b776423af6b96c9c83f355775debddb654b538b215576da91fc692ed41a8de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISOC57D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC9s8aI7505EZ9Ra0bWP11oHEw03FIRjPRilEfprAF1EQIhAIPZ%2Fp%2F8yW3RHCJea%2F1%2BPPz8Rrt%2FLyKvmfDgGCoMOrlxKv8DCDQQABoMNjM3NDIzMTgzODA1IgzFZ9Fshv4wCuO1bJQq3AOO0DyM7KhAYKXPDpmjrHZ6UAJe4Fa6pA9m%2FADMF3sfVck%2BknbsGwTEjJGkBUMhdQ299bf%2BiWYnkOJ%2BvdTdRDiKaqG1YOf3OnU02N9nUryh280wOXPB0OAWIKNonL3QenaEWMycunbToKhvc%2BlOzTH1VGwaLJyOtli4hatB9vOY%2F3MhPuwdYqxC%2BK5Gu2vXdAI1y5EM9drptUUj9sX1pP7KLmH3i7kR%2Fb94W8tRF3Y7bfwsG9KtS2My7buyi7aynxdQzmZflI%2Bu%2FjiusNCRONKHfrWSg6Y8edgF6Z2QFJPBYt8KKCHPNqdkXa3mZ7qSDRaX2%2BiAmVqB8zkiRUYa9EzcEStU4nPIp5sYqnsau10y1WqtKwE2ondQsF%2FQPOdJAbyoVJ6MN1LSMH5ziQ%2BRTQwzhpjjmjsCwtlx5fGUUx5lvSsclTF8t3rrvCcpC3qi%2F4b6fb1WtVIhszGvU049%2BT0XVoEq%2Bx6z1qATOzO%2B64n%2BH%2BqhSOyRKjO2Fi2Eowmo3OAmUVrTQnSXf76JYERUkXZXWnqyn1CNJAMOYSaXHlunCNEMs%2Baw0PpL5KlWmnSa%2FPqonv9g2U7HONLSF1GNkoEMza%2Fe%2Fyx2bSJo9%2FAVYnQx3czfil7HQ3ohWSYHXzC1nL69BjqkAUKhTUOEEx8yQ7Ygxxn83EeWoScQQtkPX2aBdjIg8v4DO%2BsCG2r8OpNR56oI1RTtY7ao7UZlTl1xnkR79BG8ikDDDShqG2fTiN2lIS9%2Fqm6aCvSD8lfP8t6l1N%2BypsXsg%2BbN9tQr1m9YbbmTPKmW0jC80n0hypjqYcrJ2qaa8qF0U%2BZsGKY4NAndmNm%2FULRs6DIX6DlOJZSEKFByQiyKPESUtQ8H&X-Amz-Signature=71171086931c6e6b5bccac2713bf80883f092e550ced558d31b9afa7a41baa8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
