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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=afb83613b309613ca7e27ca691af5910e195e88b35e6b8e4b6a546198ca6affb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=7da73cf1dc8d03ae2abf9d05b873f801c1a1a189f5f6dd08ae9d29f81a4da49e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=556db7b86911c566fcf7681b102bce05b9763ba48c35f68380762ddc958ccd60&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=15fbfccefc32965a8f29b33c447c5af135138ce92f0e88a5e4a032066fb3ef7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=cea0f46dc5501a9534c4ee9de89d8dcdb530b0652c60f995644f8bbfdf4028ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=4b13cc56ec2fffb77e540e449a14842d153df15f0e116671b7d95af46cc017ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=e6bfd00ffcc388405fa9bb42ad3dbc57c864520b9c8da3db7e3020f561b3ec0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CXWPJV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFDABzotytki1SgW3x1rl%2B2jynb7ZB%2FkTGJv4ZjW68ibAiEAmZt1lwaHT0HrGHQ1pNUPCqucCrK7mQ3VB7D%2Bo5qA0MEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcohzzP1s%2BDNeEnpSrcA%2BfMx9sSknBc3DF3aRia1nxxw5ia7bWq5E%2BQ6B5M5s39V2E7Jvfve14Qf0zQnfpc0mpTwQ1UjOFsuRvaFrfporV8CtcqZh1CvyojGg70cp0xk6Ezw02bmfLFqaCdwcrI4Zj454hoTbGli%2F3g7L97GF0BJrn6yCA3rcLi%2BOJ3H%2F%2B10DiAlUgRUdGRSHEzjQ%2F5Taiuifp6LjHw7mA2GI%2FZE5NcMjkaYxSO2iCX2Cb8udmY2f231893aFW7p1QRVa9GMPNohr0AkpLjNXXKR%2B2bw9MpPihG90VGcv5A8UmuPwrZpN1lpweEVTf9lT%2F5TdFZ5QEdm5O8pE6RaeB2Px05BJ0Hmz4xuC1y7ZV1MUD40l3N76kAUFqcu3BhvxZfVr9mRCeTdLtkVq6MH14VEfyETKfyvpXfMv9GlC3XieGK%2FdON9GXO%2BYYxrsWf%2F%2BfOmhOyLovVJ479r5fnhxMVxR6Pu7VViUp8YMt1l7J%2Fbh9%2BuA0tDVmgYL1x%2BIsqeeaAKLND97hnada8yX1eGhFOCbKdcxc8ltXhy8OcFi60wc%2BvWLQMKUEl%2BBqugTIvHTnfQgIkMET7BOdmmudYwdbq7D6uUjzmMVAKYIouyx52lrsiR2Xt2CLDNftvdJA9KQ4QMNH2usEGOqUBuDBGfSJ%2BOFMnUmlvpkrfxZlpP7uT0rbB3%2F3Lbyrp9e8jLtrCVV0rP30qe%2BQlUOsPN0SJil0Am7l%2FfBLeJyH%2FMVo7X2HrrescxNZ7MI8njlBBuV%2Bmc0%2FYDMxVG317Z9b8DoOn6ChysYID40YEYDD%2FUfT0GTPGEUmhv%2Buc1Mq1btwtBEQUaMDEx%2B%2FnyX1drjEJ0yFM5JKJuB%2B72Q8gnMCrzCFik%2BQh&X-Amz-Signature=d66cab2a52936a80fd4c98408e7c2d794afe201cfeea3f584e8d19a259432565&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
