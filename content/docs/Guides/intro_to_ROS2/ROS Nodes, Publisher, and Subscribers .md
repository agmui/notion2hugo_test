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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=d1ea46e40d9f67dd094cdaab78cc7511633290084b93cc019e564875cae158f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=d189aced51bfb216af19ea4c32c8a58fbd564b6922c3902f94fb4a941b8dcdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=b346aadffffefd656066a479680dcad1f3d2b12decbdc8f2f98a168e805af11f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=fb90fa6103a6bdd96e3d329b54982cb0825fcc4a415452a16a2580c6a12e4e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=a29fe3585d51d0b2d9c209b0d1c54bb12589e0f0f120bfa07efd467bc7e7db72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=9ab16eefbe7dfe35ef629ef98c588432fdbd1a34ee4f638ef5de00904d7c7b89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=66675b8c493e37a217201ddf44b54864327e93de19058824d196d0757c8cd47d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDPPCN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmnOkLtucYEDLl7qg0ilGjT%2BGhq3ORn2tgpqvuWpcZAIhAM2EaNbLDX2pWUDo%2BrXEY%2BoOzSqGheKChL7WsqHxBhkcKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX7QUWQ47PPmz29Zsq3ANoFIGZlGQ%2FOq3JDD3d%2FLaRWQEsJHllh3RiZ9svxaqHZ5cmWSNTXYa1B8wwl3KC0XxguvGN9dUm%2Ftt7FCDfMSVNuxPwElPfm3i33gbESgS57tBCv2MW7chXDa61qFFt6sIj4xGW0a4c27WY35DJCQP9U7iMj9IDUhnGo623ATzWyIsUgUKoi%2FFrJNIx2q2cmLTbsCxGVVXTqH7h3TE9qjfg4Bo92M%2BQJQQzLNTdy3s7yRWJTQ1O8w2d%2FRVRr0nYDt%2Be1bRDnXN2c%2Bn0SvsDUpYg2fERw%2BCxdMiVHgQihMxX%2Fyovc247WOWRHHJey7OOlgvTMN7RokVLdiA%2FZ6O0orF1hPGmnouRNPn0a%2Fo%2BY%2B6Ox6ad666xIPuGTitigVUsri9kj1iiK3PNEuB4DdyI5DzuyynQ17EBx2Asud91eX6FnRL%2FfqAyuPs1QXyuxaQnheBcys9vYM%2BGpyVnDb%2BfEdZsZQil%2F7wbaqyeG5nc3V%2B2zS54H9UB2mun6yrxRfiZ7m7UMfw2MFuJTUvN0BtG9Q42iwiEYpN0srSBm3gK36qf3sWs59nCGZsTo7TLMuS6tc5H9lLU6NZN8U%2B3nft5gwTBrW3BkBZU1cK2Y5kXXc2DlVTW4ZtzJyk1GjhnATDPx%2BW9BjqkAQEGm9LBZBN3gDd352iN6qCvH4MnCoj0VnGNuLjrxuuGHF5k5ReZJ9vi4rPVvQ0Hl9hHOZFXcB8NAPtHUCavQsvleibq4VI%2BugbxbVawxBekvkqDZ0KTa6HwfcH5P8DKh%2F5%2BmAGa6%2FYfNO1t5z8Vj5DoPWXwgLg2E5vh%2BpHtyXxFCbbVYbAaZnXCV1XlRNyKahvfHPbi5RFjGibfQFhtSdW8x%2FvQ&X-Amz-Signature=be4a842ed1e29ae49558973b8de3d630c498e52197bbef1a44ad4fa2a2fca848&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
