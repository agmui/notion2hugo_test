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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=08ccfdb74157d83e64fe92ca13cb4033416b53f908a5b409b2f42c67d3ee14ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=2ee6f073ab44e9929f4b70d1228397798b4a02abb5e1dec48f06b492242824c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=188c6ab2e690daeb9e380a7b6a239fcab01ebbdd4694be24a0a2b54a26f0eb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=d3fecdcbb1c0cd357cac5e6ad7a02fa021401649443797644c055df50d38ef75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=cad35979b2ed74dc7da5b36411b72b2513cdc8da04a1f97181dfe093bc74fbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=1728bc1d73a9281c0858e3b96732ec9676f5feb63a11abb4efc5f25377bb3dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=f9255773f5aa2e11f66088d221fdd0b4aa67363dbefd69643cc6b4033b2a4ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC4SV2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2BM7RvcNaDQIMObTVrqzerA66oGIf1RqaVDoYj2td6RAIhAMvvIHYLNhPj8PVSI7sGl3WyP4x11%2F8P%2FX%2BHLQVb3Sv%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzazgoSUnJC7YL9kmQq3AMdVafpdy%2BsqaZIfqDrnOye%2BBJuuiVMDlyLpBnLRWPz19ZitAl59R7nFPgynN4OonKLFop%2F3xMil2EeN0JLGSmsNSFI52dinJ7nUdk%2B%2FGbCOt9FXfdOWmLEWV2tzkYrc3%2BgMRD%2BN%2BCIAqS2%2BOQNz4msQfgbm1knb7bMEcMJJRop1DszmPXiJr%2Fl6ZcBFi6ieNKe8kYKH2ehbyXnyJJrwUa4cNy3FXOMOl01%2FGbKZpsKDVDXB8XJfgiiR9zDY4BHFktRtSK0kMihnZEMVjwRA5P%2FkdyH9njL4UINxUza1v%2BSpvYEPG0GMBxpTNPsUJHhSlSWQZHrjUN5ThV%2FRjwiPvoqroidcxcJUwu1QklPKFfuSExePayr%2Fi1UBvQavV4d8lk3KWnkAYRh7zTCe4DYYKQEI8WyU7GtGhKWt3RaaOeGBvDmUaYdZB6CxgVvARRMAjmB6LlSeCrXhsWqhUbiooERjBe29TaYxPgJUBcQ5w%2Bxk8ztilNKXqkB6m9zsfFiK48Xz97OfmdFAgMtWqqwG0n5pjr0VZeV2Wg087pmEbb1fAh4Nrjvp6v%2FI7XyoCGjMOhWdAAI3ciQZBi0CeB5XFKU23ArSaxst5M54JchdJAXzXcxh5c1Ihps%2BqZNLDCZ3rvBBjqkAVxtWvcauNlke7%2FcL7SaKwCdtYEpZ7V7p3W2Gk9FnZLIFl1xxqjS5QL%2BszJMQwZ3xgJd1mC%2F%2B9PbCt%2Fow6%2Bm8uV3mfWqD3eDLZd5FghCiWQKoqryuOzrS7HmJYzEYv0Z67VyEeuxmNfFumc4Lai9xdRj4e9TO7G8szoyKNdPLCH1BKdx9JaLUuE18bL%2FWQvVADO2RIfQ3Y%2BvfNncbSmulTUKSzcW&X-Amz-Signature=10ebad5d2d3a76573a445c135a188c8d1c594d8cfa6e61ff58d27ab0b984cf5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
