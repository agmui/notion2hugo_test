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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=5d5ae776bad40f88c81ec0ccb8f044f57970a58ee57d166347fa52cdcb9de711&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=c21373431a8460f4b95fe39cce3361e91b9b7f7b0d4ee3ad85a9ff40966da320&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=4a5443112b17aa1bd3d70f9bdc76860191164ab9196b18e416cf186b8b7182b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=b34f6c2523a18fe4376b8348c10a25fbbe268d6c0625eddf5998aef899ecc76a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=0db9bd13669e0efd8e1e5c666120d086874bd4753ccded3d97ef950380b145ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=9bfa4b000ba6c171e1bbc4861a6a37f32a63ba58d2380e74387fa55b2ba096c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=fc580910101ca6a5ed8d563f0bd7de1ee4cc3a39272b0dab1fab0240a0d92f11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLCTOUK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDqMgwMPCdekRiAIjsqS1t63CttAXr6iTffLPt%2F%2FUR50QIhAOiKXwMcBJuwpV7czBt80lyhXNuS2Sgh6rlwrmanIbDdKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyra9MGejAn3XqJMIq3AOVktX8InAeMZPjCYjTtJSW3hdCnJHqJCDJ7CEukDrBNIRlbVCIKz3RSRUpLImtgtaA20z%2FHEbXS23Xt5Zk0pVCsi7lLyFyKpovCpvVPcSj%2F3SzdnKyHW0FYz1BBe843bwum%2FWQccXSDjRa9XIfnGyawvaRyHt0xQmLxgDrO3pOyc%2BLmg9dNxjAZhHbI%2F3iKs%2BZqr9jORVF4ONu0KLh7%2FvBygr28Gj59gYnFJzokxN%2FoZurpKcKk%2FvG4lkttcQvCDTPgdRno44KqHy8HTCeNP9dW1EGGtDP7AaoceA8uOR%2BOwwD4aoP3UtgTaZZGNbgL9GxeJxVzN74mDuGiohkU2orteQXEif%2BSXEnZVrsjhraagMwJeumpAca0I6jqdteYgdNvxI1HnnSKA2puwJhikEM0gh27CXurGrGvZ2jjkIaqYGGptytNXELBvp7qIlpPZIR5H%2F0qr1uqG6ncwvS%2F%2BkpmbsAa4WIbfjCmfjZCFaM7JtVJZNJRoGX10Weq5Zv0Sg7oru9qFwqUE0o%2FEuLTu462uCSO3O2W55%2Fwi5AuYXGTdGcywCntmUeCUZuLb7Ac6eolpSfvzUMKa%2BdzRCepv05zSdqUY8FCaGNUZn39kAK9x8DKeA8sd9Xa7g0ZTCY18LBBjqkASMTPXZwxOyQPaDQcfMY684XSt6oXPh4CQtBjzk%2Bw4M4Zhk5O89RXISJCJwX2hvmI4xWJ1N3bR04MZ3atDAVffkLwqRAwoIjkXLFK81Vh0UbYc3NeJyqGLq2mHwj3zYAYWo%2BMHdYJdEQep9AwYvvCT6Hj2yDWq17oNugeUMl321Kdy95ljxqNts%2Fq9RvVUXS3OEd4enbvCbtwA5eOEpPNs4%2FODys&X-Amz-Signature=8fa7bf49c85c71209ec73d29b8e6c260867c2b1bf0e7994ba326a0206a059ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
