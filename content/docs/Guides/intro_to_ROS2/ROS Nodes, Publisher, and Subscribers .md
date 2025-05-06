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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=b5f7d36c62f022f8f21dc5a6e6a770afdcbcb873522287c41f4ff2ab9638861c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=a212cdae301c170406809e7c1da4db08a7581b8249d8e2b8334efb22cb81b22b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=06af419e34f1bd75c538122e56960838cf898e3fa4bb42e8c6c186b96e40e4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=3fb066f4d5a3cd637b9272d63a6cf3f885f952e935a925d6599a25bb80f3f207&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=a3f5b3bad52470f5f616a7516675515f962bbcfff12245e794083fca0a2c0cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=5ec5c92452eb7e96bfd8666f89539b6c85fe63a245326d140799ddb4b9bd4bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=ed8959f1b58fb6fe2ed2a7278d432042d4e157eb5c5408fedf0b55d662f9a579&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZLIK4S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOaggeBRnb%2F5MP3l%2BVAemiM8rte5BKPiPZE%2BUVHIKfnAiEAo9F6ruJ69whwJmVwrHXuAQxAZKlcNjqJxA6CPGUALr0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOzPatiOQnUWUNgpsyrcA3r2zbvV%2FRnUzKeh4%2BSaW792573nl2qMxluhcMvIgDeBD58X03HkcPEMLJq5MK9%2BwkYkvp9vUc65FA9U5dJLhrlmF4J78O9%2B%2F6cibYjOv%2B5Xe4TEVXamE4SPW%2FHVfY1c6bqDCC0aWhlxS%2Fn%2FpqdBgshrXg%2BICMTMua02Zkj2RNHUFuf4wa940DMAtqFowt5k6rdqaGfV%2Bg3yE0XvGmJCU8HFPMm3KwXsgCZp86kXfw9qKcACYW9Di9jwREBEwkcHE6oPBgxwZKMkIbhXYsOhbShdHexKpQAJUgoGBcER4U%2BLDQGl4p%2FWaROMes%2Ft6hXFaPxq%2FsbRxUM8ZtjcqUgjG7NymW3sKqA4ulGAVOO2KGuTG9PennN9%2FNk6c212rjFw4hOQxD59c1uMICxcNoqL9%2BVxiSYMOBprLhMUvottsjfouxunt%2BqO8ykbrR3Z0d%2B9LHgyXT5kKc7V2EqBZVuZl14%2FDhBzv4jqHLp9X6T4YioKy3BfXtJa1qoTb0Igce28pj%2FhVPZ%2Bk%2BJDYbQ1V7OsLIejx4k08O0PWPHtiY2rAvyRQjUAervyZMKkoKT%2BDzDN9T4rzmu%2BTEDBHp%2FkAKDW7laqYdlh5PTFTeaNj%2B72uQYQ1yk8WuybpvG8p4cpMIi06cAGOqUBidgvbek%2F3E%2FjNyzwDCx9dYZX8mVsDfGfWtljQzx5aMcFVYOTbDVP1xPJUdtXFfsUKmmg%2BX3yPbXqJTE4lbcrvzYl1iQlvKlTBKO9TAjeOIePyQP51mHTyloF5Xh1v%2BRFHWaEXwr06fClt2yKl7v7jZERDjpXKW0QM5GLdQ3iLGEmzZ6ByDSmHSaXIcgH0uDf89%2B61MYWldneoELcm6AuGR28jR8z&X-Amz-Signature=02b5a8b1d1649a81bd099638bed03393c2a2e7b4473d395e74f9c9dc40db00ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
