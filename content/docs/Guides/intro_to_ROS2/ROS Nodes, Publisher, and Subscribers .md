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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=105a6092a64bfc76b559186e30e03c971ceb5927f47ac19dc9a638f3f780923a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=71e4c524fa9ebdecfffd5888e847aad6b19170deedf027df44d05e2e73931f45&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=8a924eb8d3b29cf6969eeaebdb3a43e5accddb27819f40be87ec2ac3ee0a7222&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=c638671231341b43298cb7c1a6f28f1505277766bcf747c38b52162e7b54af88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=35e0faf943c981a5e9400b3855f1eaeb7c5daca91a74f5ffce57aa66fd449445&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=161586aa54d8bc76b4c1e62529c0dc14518d6799ce385b19ea5edecdb62c88c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=15a6937db337f9d7f0ebc48f9580120e1a796554c6a28617a5d57e0e180d6ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4C4EPK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHleaikOzM04N9AvkMYUBV8mkPq%2BQgNF26dC%2FXOZHs%2BwAiAWm8KpDwUsjknf43h8G8QEWpSae4IxGgLjOZg8UxB7jir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM29Jkz5G48xYA3ECYKtwDkZ1ImNyAT1sCZXw6619T3tp7xTfh3hypYcazCphWz4Nd3WaETqgLdw%2BmpCtuY03ReLVuWpN%2BPQVAWnXPDCvxUu72FRCPd334f%2FnkM8CKGajyzrNa1yjDHRrlEQ0bXlGba1MAYQq%2FZiuifYwleS1WygkRRnNd%2FYtPZ5%2BI%2FWtMB6eNC2xvJj3BLWtqU23MbcFm4Af3IaGIERdvniFw2abcWLha6vhQq1LyjO8G5ZpZxzhzytwh6SjyXBIZZhAkpE5JN6xrwahkSb1hRmsU9OdvrQRa%2FYSvBBngtL9zxyzndA2d0XyhpmDXaH5iALn6uMvVANDTlgV02SnByPhJ1TSZ5jgwg2y7DNVImrglKBjGRGyGh1DB4Bwyzs9nKwz96TxpjSfM0rixFtti5lIXYHKkufU3P0%2BFeoamLMEw1Q8UlnzY2q17%2F0b3M2HLZbFSt4dX8jjzyhKjLA6Ehyj5QMML%2Bapob8eJBhz%2BOqW5789cffSxBytpL8WYlbeesWLZq%2B8vVHEtDiRa9ONrmbqz5HEcCVuXWOMiApxHdGvMf0Rp2H2JzDu0jPLIEzIcYXtj3hS6mvt6E2DwRlcBRvGD65e%2BJXuODroCEHOKMeZT8yYv%2FM%2BDEK%2FQ9hYNYs%2FJFikw84WXwQY6pgE%2F%2BdUtzxCRSmy04ZqYq1csNSbpWCv6ve%2BCsrw%2BPt4KVn6LFPP0rxwQgtTzYdo32a9WXr6LC6kZDx5f24YXZE8lfRT9QdV5jDZ10KwfrUZ6I%2B3fWc%2FWDLocY8GheUHG0EXuqvJtqi6pNtICMX8mRXEyeo3gmv4cAgyO4loR0snU32hgfMGCrN4pQH%2Bj2QjFjmEb%2B25gZzdv1zPyd3luweBWjg%2FM2iDK&X-Amz-Signature=88880910f305fe37d975eea78eee89f1becd703c791a526996a56f33d205f7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
