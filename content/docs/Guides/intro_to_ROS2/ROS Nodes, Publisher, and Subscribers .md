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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=d0a2a077c24f5f6bbacbe2320970edf6f0e3e19b278db169caba0faf9152ca53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=af2f29a10c6b4c10a5e3074c9234e8c9a88e5e383ad4081921ae760851c20a29&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=5e034d4df1301861f099d7a7c7edfb18c647f925ebd5617b3a5dc29766ff6b65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=3c60e33bdac11af2c57f6300a3a8ddd10cfbfe8adfc9cb0309d53a0b61a0e824&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=e5cd8a2e4cd13ba8b7bb47cdee8b880d2a4de87a436c21e3ef741d57d72f6528&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=47af238028d555e27dfe1133bd26323d882ec43329b23190aea33a608fd78237&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=84c6f1d8b4407b9816e73af83a861a82793127e99f5b0046d867c929fdb4d9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRZXPXB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDdTKgnKyXitvinWaEVB8%2BvcbbLQFORKJ1%2B5ou9tcUqdAIhANceHYgfbQPU%2BUswfBfnxkIfsMHtGheoBMAyZ5swmo2TKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6DIioeWLoRbsSI6Aq3ANr9bGB6I3tJNMTgFaBlEX%2BO511p1Wq7RRsd1BDB%2B2q5wyNH82W5YVKxJ%2FLedlHXz8jNXuK72Id1hGtgtnfksREr4SAi6IU1A%2Bt3bICzrZSJmR8RstE5dIRi3r8jFsURxkBvB1iavZlMyMfMm%2BBpj1LJyJuXk5NOJ92M3UNdcLaA%2Ffb3Yz04k5pP76hexu97YkZNLZQkDiGjpW0NU7ptMhqvREQQOme2T7%2FS6q8ci58vSTc%2FeO2dlLjkv3XYnR1RpiM9ktQDOiZU3QEyMy%2By%2BRf90hzLePMdUWnc3B12bLDFEDR55VZ1CZw3gosaCidRtOwzCDRHTCzKS5yG0Tl%2FEVStLyn9Xy%2BRBKxzRqpzTlYGLaATUESF0%2FoGRL9HuJH%2F1MAwch2kYWs1cDyqPsl0%2F%2FrzvYtbe9kHM5JKak0a14QLGYWZOMOpHjuI47GS9Q7HQUVbVf9EI762xL4Jipnlj%2BMK%2BbF%2BNeMr6lC54oaeI%2BqCgPLZGJJmalraEsl1fIGPQ%2FLffp6CobNayOzFCkO1bZAhZJS414y6WPC%2FJszhfAFgFocoWI0wLD3HEm21Yzvnrvh3Epp9it%2FY46VMTyFFgBRBrJHUAbC%2B4Ljc8nnmjdf1LniJrOc6sZJkxYUEjCa5abABjqkAXMh2j0%2BHItJgnNdETND4Jh%2F0nlAEUef%2Btthg6lKGSYcaCMowSbmytYxH24C%2BUkv1PWEWM2Kpt4vkPns4NP5jHB2iYDfQPOVTfd%2BgaedSJJO0ezhyynhNxgt8KXfcDjXfpKF3yt5yjNKarp9mMjCbfOdc43eaoUFysHigFgVHbRyHi%2FGMjQbeaGJ5HRS995sUFmJmBnObN8ifdIau%2FHRfHvm0GgM&X-Amz-Signature=fa23c5cf8e117782ef5a50a7dc0968eb11a708b276b5b3b95d665519494b5df1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
