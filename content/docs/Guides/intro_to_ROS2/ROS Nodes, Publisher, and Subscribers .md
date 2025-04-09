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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=2528d40a7de209959565481be04346468d7d1411402910137c261f79bad24f32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=42aeeaf07d4f99b582166ac7a8ec6bd9d0100c508282a4684a959bcc0de798bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=81ca1ac7ea12db05508fa5fb155f1e0ba542eae696e86d5449f0627b85c0b6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=5ca602ca37ae87c7ed01a1a0783dd870e70b99d0b52d9f848a396e2df00a09f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=0c58a33907223620ff90dcb7a35312b4cb22f0bf925ed29535c65bda0f2a3be9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=b62404019c3d0b257333653888ce2bedbe9dc15443c0f920e6142961f0f770df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=45bbe4c863551b38397575b63eab346cafd047e33c3f6fa67773ccffd6ce34d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQC4NFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCjKyjepS5S6zNXHmRQiTVuSeBjbanZjYiHwcqkR67CAQIgJdi0BsS2rniy%2BJZIZIiKAbjNzOQX35%2BnqnXjn3wArGwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64%2BbJrAf3UNshYFyrcA4djzx8CnYRx3i1Si283pDMIet9bi9kzFadUmTtJqmFgm2IDsne4Eq1iPjZQdlgB7mD%2FWkRUR80LQrJBIXMNdT1gyQ%2F86Un95Va193thswme1AVhedv2ySQpPq5AvPxg2MWzLmURst0R83e4qYoI8%2Fruna7ugT5lc5Y67Bfayulo3yZvEDf55%2FMFfyRiWxW1DFwv%2F1%2BQryAkVcljbChDbcyfzA8MM7gRG0ojq54d812t2wDOU7%2BtNddqGTBT7ZrCuSCWJVuuiA2np5EduXsxELyx50rHGyqAh9%2FFOZl9%2BfO41smehaaUu%2BipfbLQkMFDp5FhExAMAfwFE6Zw2tEb4Ly1lrMwzYPYhH6e2r5s8VmfSkmLXlyWG3tntz3A19Dye%2Bu%2FiNf8bCAkNr2HYhixSVc0Xy97SuiAVbHBtAuRrpzK%2Fs%2BSaSLE6Mj3K4Ip%2Fjx1iOL9dzbz4ptc7N3F7Uf32AhDC1JJxg06o5S5EHCCmmv%2FL%2FfM87eAwAirhFxfeBIM8rrr%2BMXETfP60Vyh%2FpzF8JCCb3pNoie8TSofiI5g4y39QW9hoVSA90%2BDKIB1iT469am81myqOe5oSGrGN8jr3GfkbG0ZJkx%2FcP2NUzwItXqls3qE24ruzr9HXelvMNOU278GOqUBKmNBNARU9AlLozTlcPgON2XVcHF8nQjIdkON7Jj9EIRvj%2F7ueBJwMsNzPpDC1zS9MNCxdG%2FFfgmEjONdnViLpUcq1XjX8Zqq6pkW7BTGML00zGhmxDD9BuVylzHqBPTQNGmoUTYY73jUF1rtPpNjMLzzWntyzkT68u53xzzgpMaa7ZRcis%2BoKaQnwr%2BiM%2BRvjB23oWuKLqnAvpq5%2BU3o30XWCT7a&X-Amz-Signature=598b455b3cc82f3bfdee08565220004ac1965550838fcbb6f1bd274707cbe384&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
