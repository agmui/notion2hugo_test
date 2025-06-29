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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=9539eb843a51731137ac632f1f52b65c2f11c76f950a9d3bb9a3627914e01b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=ae01326f90351e453978d3eb976c48b5f24ab6c4f0dd93b4acb87c8b221de106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=f6be81f80c43c2dd1c157bc1018e0eb250139407a9ca75391f6413afad2c691f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=b5b1d1c3d2dafb19b6d2784c29e7a69c8507a07dd90f4f94bdddb496f576d823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=a51bd1fbe189929190c273d63d619327a61e63dc60540e954f2e60f160e38499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=0cd15201c0635aa782f875e76ec88d4adc6ee1ef4efb3cd643d91be888eee36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=3aa6569b5e335cdf79f2c7e0db6f7a7b810de93ed966853a18950ae43eb3733d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4CJVPE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcSHC%2BjkHv36n0sbeAfWQEqdKgdTzCFTMq71aJ27C5uAiAWlZRbQmI1LFWS7zpRGab%2FxrtYmkqojlZtqHGAyD8IyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVNiZlzH1uExHe2ZKtwDST8Az0KDbiu320Euevd5i5hV1O5zbr%2BJ9scgtVX440Fje60QCEnVBl2uWMGLwY59Imu%2Bb8HH3nN97CJOi9T0HccV0lMSX33jXcPI9K79DxPBKF2IiSckEdhO6T4sCIZePCZgyyrAWQl%2BoHS9AJaVCEbTyQTkNkKf5SA%2BveXuschFZHY%2B0KuI6O1PAudBUVaR7lOthAkGRTIjRbZ9bTe1uu4UgJ0CqzTHuP5utdqYaLDcMp1GLpNBTEmlWqqgw3nMLA5MPABkimbCpcl%2BmrqpLtP%2BxHwQu0G%2FdNwOxhjp9tO6A%2FE%2FSXTpCIWHp%2BNLq8PEkX22NwAd1bbQdGHGl8jGCHET9n3BlItPYNl%2BrizQKSD%2F%2Ff8euNqltZZT6YQE%2Ft86XoWjqFtdNlMomsdhl58LFoPjiNztIGYzphrzxvOW8D7Stk1P0Y3wbNx7oi3m0CoEv4SgPanEMIHvU%2B0N0CqAJPtPMWCDvZH0T1a%2FkcYy3bsjV8EFUBsiz3nhM7I9B1RajMUnPPzGW6eA5nunZc5kMgSOdxE0BJQNEUQL0MNgP1E%2FJx%2BXX7cq%2BsLkQqseb9cc1DJ6gDFChOFkYl88L9bASuKCpUdjGuaisexiEr41s8e3SPHpsatwrppXskIw0fuFwwY6pgHEsYrzyl%2FvwUUCjUOGESWDKHMtXx2c5eXarBkfQpWfA67n3fVrC3LBUmLjs5nVUdmj8pv9W5CAQlOuXMxGRd5lxkLWzM19BR7B6zuYMzuLSEp2%2F8XdNMpirdkFAxcm6D%2FPaUHewyt8BeaF0lY08H87WjT25PkDWbQl3wW0NlxqeHVVpMmkhwPLb7EOrfivUbe%2Bf%2FmrF5eLZ22mnwtfWbpNlqfPKqb3&X-Amz-Signature=849a8cf6093200171d14627257500280e8671f667c8da0a147db211090c9bdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
