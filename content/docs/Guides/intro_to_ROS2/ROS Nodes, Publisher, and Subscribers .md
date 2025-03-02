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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=d7bb1bc47b5c7dfa08541cb479cdb24cef93acd2c454d435908a3563850a95be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=a6ab43793cd1bd38198dff468b737eb404cfa69e2161529cacfc672ce4a47624&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=2008da624aa725757eb74a527e4696c84af4d3bced6ac7d4a02d9b8dd4e05772&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=c61dfbefb340ad5e82fe9bce3c89d607a59470e1f08acd457c36ff9344004282&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=18eb6f1b4c708527050ebdf2d263c76e79ef9ec6949b399d80c5a282eff9f760&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=810b89bcb23896832f1f8db18d2562c728324f2083e83b5f13bb1c69cd35f025&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=d20ffb88b7f3808053a0de790ebdcd673591b5344456434b724b047e20bb3654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=8f4fd729b00ab7a33d5db2022f21afb6ab9ef83f7b390d3df3e92869b18c0e71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
