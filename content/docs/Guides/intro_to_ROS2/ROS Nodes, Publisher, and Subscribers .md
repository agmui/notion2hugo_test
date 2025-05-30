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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=95bae6f806760dd64a24dfcfd29b9b748df84fb486c9a8575824243a568053e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=e370359cd24164e218795e24263bc99c96d5967bb64abd48e6a982fed10dedc2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=9ec6e59896dfba7af521c4fd8f8837eca0ef1e81aad098fc95ec6e3f2c61e382&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=155915b7ddfb09363449f8f3fe66c950a8c5071972d7edfd17be1282f201c3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=71d21033c6667e53c3e7bf1d0a75238d872339b8dd693b87a016283a61a52701&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=e1803a9cab404b4c3619166c59a0621f0ae77075cd1ad4886ad3fb3339ffe0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=7cbb7a9320ceb472f86f7929649642ae70690d982245402cbcaab97c8b4f41d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMZB2K%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK3lgkxw%2FBqOyXkKja6%2FZZXHIfy0D%2BcvPjjHWcnP7jAiEApZ22ivw6iZf8ftJEJ3jeTO6cLRwU5HJeiXR2HepnPPQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlWuNRlRyQaVuelzyrcA2Fkx%2F%2Ft9fYht7O%2F6b4%2FhCIlXnJCXynW%2FdA4DPLnERNuq8qHpKu6edkwTgRxlxYyla3bw52rqk1%2BDXEhNPPbtCC7SB5%2FKMOieFS9DSh9o9tzNEseJB9%2BJOjl1GmU%2F27Ozb4an0yJa%2BoVv9FMitRFVc2P%2BELco%2BYfBOCmhayzPM9pdpTUjK7H1FC2DrZalC0yljOfWQIRXiB89sdHI8OgNzEud182laBCxaxvO7kSJCzjFz9U%2FRN2ibLCI6e9BqMWn0lm7EazkPS09U4vGJ3ghV4D39Q3zevEyXEPSHIlm88%2BST0SiSV5DaRXc4mR5FvhEv6ofdgHfof8vqhq1AvqGU3zQ05seouaY9JERg6XLbkHh1yGM4%2FePpCavqZGa2M95QmnHtdkpIlkcRMRZik3lGvpNEOjbbltbv5j3ojITJl7ZSKH8atwtE7%2BQSH3ctkZzQJrtchabALI8z3X2URd%2FyvgI4b23CO1MljnQSZkYnUkkULzHdHWDyY4HEETj1%2F7TEI6Rq4CdKQPRyx99RI15xjFNPaUAFtWIRa840baUMKXdN95cZNuHbZQVQE68BzfWbOTR7XfJ0kG%2FsfLFHHDD6fWAfEkrKBQCzm5nncb24G%2FO3%2BATRpDCJeMa51%2BMLny5sEGOqUBc4NFHEx3B1Netu3wEWfENb4k8%2BH7N8CV9DTDeN5%2BGNQxD%2FJndHgdPleQGKxnBYwyccfsPGMhi77YtGMwyEP9aabG6D84zLV%2FlZJCiOWH0eJlN%2FCIWS%2Bcgqb1F%2BEneVe8ZoGqy8Xk2FRHafcPh3LWW859FiI04CPEzk2u5lREmeXxx3hBteDUgKglULboBdp0d3zs%2B8nb8Xta5%2FiaTL09nf8g35wz&X-Amz-Signature=290e279e0efeb18abb76843b1676b475ed146d5f2a32c7d96a9b780cc1c8bdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
