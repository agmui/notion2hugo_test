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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=96aeb139960e7e5a7a082be4f5c7964b1fd2537339dabca4961fc396194131c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=aa9d666b7f3bf8fe2572c419b27ebb848299f5ac500e3ea85e9f65ef7f3ef743&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=99cca83d133300f156161c554a6f91e6c7466cb5c36d0f5c4b840592e2c2403d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=5500a372714cfa499ed4bf71f7ef497ac43a7ac0fd5448c275c711a466327e44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=4daf1aa212d3b80e6fd026ccaa38fc0bdc252ab224fb5a6aaba537a06115c75a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=8b2d6e4884503b57bbedb86318d048c115f6e9b2cfe4a9105b91244901ac757e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=113c572afb78d32ece5ec9010f6924b65d2330a6243ca7ee51a8a94668ff8c64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZQIECL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGvFJGmzrj2u5zZrYyyEgZU2Ct52bu%2FJOUHOpAa8YYJAiAM3M1WVpZdVNcvd9LVKGWZSohWrOCrIZbk08BavdXi0iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPNZsqZ6Sb1ERJYOKtwDkG8HQ8aWgPRHlmyxgJX88UYSJ58ER70CYdPHVrZZ6%2Fk2jeVC4hkNOJu45HXWZLzJ84O3IWFjhVCuLJCPE69IyjoOZHKzN0P7I77c6ZTRgJmwZHDeIAIMW6cBqHfPJPv2%2BxTdmlmJwjrbaTYRoaSTVPIRt7FAFVhE%2Fx4iI16kQymU2Q%2FPSHBoZ%2FydAJd3iDynlzWt5PdSnT3X0cwJxiJz2A3%2FUPsrpvfmBtSa1FwtZPaZH3Y8gpMTRyt%2FjWXCu45FgJnzLE69iuSsUPJj1YHwnMl%2B8lbw4K3ujhJbylv%2Bw%2FzKKkkPHmFoiVEnRGCXm9QC9b3cTtKibZmPcAcbRtP7CjHuvpt8JPU0bcD%2Ff6T7CX3Id8CcgFZ2zuo7jy1okGZQfHU1egxPoIKSxXBqtI2unXDDNOelBQRLCOOfDM%2B35QwjlbyFBSbU9x%2BW%2Fr42hmM5npOOjEPJ2fvK5eZ1oJ5XVDeVk%2BVqymSEAqoZ3JiDzQubNJ6DuKCOOEa4qb%2BpWLwlwoCa8LAfUATc5MNby2j27A9Lk9NrVLiKgA9xm%2BMbWGWi%2F3BJmUtQ1bPa1GiP1cCb%2BeDrHJ%2BSBqbB8iYvO58EGfUWNi41DOU3Vrib74k5psdOswbPQ49Yor%2Bj8oww1rnQvgY6pgEaVtJYPVg%2FTL%2B24TQpclGitMvNfzAtZfSy%2BhN23n%2FgR9JSBPNjR5EpTsb%2BwYBG0zoJK%2B8qOKNzcPHOCGCzPKuxSF98l8wSs9C2pqDfd%2FmRJFRNfuMqcIXI8R8TmN%2Bco4WDL%2BbEvxU0J28PZPXGE%2BLe0NIhCAX76F5k60d7BqdMpDRcx3qWuGSVHFP0pNAof6Dicp0UdQIvU4ZPbpAVaKzqkcMCH9MN&X-Amz-Signature=1ded27cad5a8c9e2292e4d10c0740ec5faea086c15a6dff61b938c8f7284dc3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
