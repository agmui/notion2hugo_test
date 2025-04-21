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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=46eaca39fed5d0a458a54ed323992fe78f915809c2f3690d63812e153c1bd198&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=32159dc3827d2e7c445f9eb3765426becf58240bb28c83f6c7d508afbc74bd48&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=425164530b06480b6c14c9e34ca19243dc2ba81aea83a9c7ca419d60e6c23ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=b52fa226be573e93bd9002f7065eae0a5366e00fbffa57c75432b7df4121eaba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=9c58079a49ea863c43edd68f04204d93654b14eb92631d8214c4369b432fd0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=85354936755b067b662aae87f5144344a4370870f066b63dabf3f53422a20189&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=b0cfbb4e79aa9c93cdac184c4f21a43a5d43496e2f4cd5557902d8f882ecb40d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECNE4XS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr%2BQeHq6q%2BmyHZN8tg5KTTAn856AuJlZpAfs%2BPGByXVAiEA51eBOoh%2Fi1jfoB%2BqG6XW7JLxMq%2BKy8eiQ2EsWHl7Z6oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrHRxPMzHKl7IQ1gircA0tEc1VT%2Bu%2BKmsizek6ty4jostleYc7sOBs4MoqlJ4ee32AWfHLk37N%2FnFgde9grHtQcOpG%2BEXoMro%2BK4E5VwUD2NosNqFt17fUzsvfXW7IslplEu6YoWl37UVKxFmu%2F8pHGXwuUKuEjKeQx6XZDZBnE6wnwTwMTrVqlI1cURPK6OCGfAS7qiaZV0Vt8atkg1zA9NyIVjWNmF37UWNsoNEyPq7no3ORJsW3mXw00QH%2FqJZzo1pd7C28GD3TZDaYr8oIgNWUVrxSscrIZiUtyzimhdEGzBNlZ5k5fD%2BqCbakuk6ejl51RvQV64A%2BqU6tNbmSPRMlahRGCDN%2B5Gr7HHC%2BDktJOs8U1UUugE6KeOUfB8UFHdTIV%2FiScHIzWUZb%2BrumhEUD4jFbBbQ1VFJffDNv9%2BAOarGNK6Vx4vJVY8N2eN9d2%2FQOiHavjN41Gr%2BGw0AUpZsF6ic39XqS9xvN%2FQcwVxyestCw64b5EeYzOrA%2BuQu%2BdePo1Q4HxFYG%2Biko%2BnP67Ct9hdy0BR1ydcQ00ybnQsFSheKxCqPnzEfTtawknrsinD88cpYKYovTGGpJUlCWz2heV8by%2BxoT%2F6khrseEj70rbHnx86GhokxAnMqGbAYgqywyHlz0IJ8yDMPv5lsAGOqUB4Rp96nzHRsZufA3T3EH9mE1BfR502s9seMTf%2BNIioeXoRV11k6kU6bclMme%2B%2FQcdhOssSLfHtZzG1tpbKTQ5UDRcAsUQEIiWNna2KZogyhP%2FufHtV7TXENK3xFZNFa0o%2FHi141b5btwpWu4T91XC1zO8Ztn1s7LhiXriCtMd1Gvri7ha2AWGIeFOpgXFaqR4lgmdfWssUaLgLDlP6faQp3xAA3Mx&X-Amz-Signature=72eae9d9543c221463ef1b01bc92dc03dc9de8bfcf2c74ee949e88d7b882fd82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
