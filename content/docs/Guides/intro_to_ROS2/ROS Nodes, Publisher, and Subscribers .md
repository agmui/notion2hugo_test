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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=f72b22256ab8a5e60953133eb18ce8732a3992c6944073d34ee696a9da565f10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=418f8c13ba34372a43eb1cff266f615ddec38b0c1eef10c58e224886d685c4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=3dc49c57085399df39aaebbce6aa8768c2a1d16143d41315b25b24ae65d6dbcd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=0782f44bf72c8db07be517c8b76b1f61c2f591d56fcdd37d0f6ef6d74d8e961f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=4c73c34f4d1ac94fed21fb8871f59b8dc51753a5a010cae2ca97a8a9d7373fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=4a72eeaaff31f1a04a1f8c1fd4db56c369c962d381f6aedfcc99cea164e20043&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=428a9e51d9326b2b06616b87ff61e836f62492bdd93bf7e963984636ea050add&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRGBMKLV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZf7kxVBPL%2F%2Bh4hxde7VTUB%2BlijeHiH3ppijiw1n%2F28AIhAMOulUocyxKHHgGyuqZDj0d47M9DWA%2Fc8Rm3cF6VQKEIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwajx9PGCLtz2J8lm4q3AMUmegt2DklI6lDgadtpPjKSJLrEMR7DtNYVQt%2Ft8cfs637vCULOd7lLK8jPk6skXt6lRZ6BdCiIX7uI%2FRFYKz3z%2FImFYy8V1skjhqdR1VYKBLCro%2B2a1lT%2B3YmnTdLhQbFU7gCYTD8wKtvaSSh5m2NP6qm7k3PjMonoMbL1EQuKAHxEvl5OLBTkYiMvnyB8InPUPxuj74KrLeukGMRcaK5a0PQQqUZJdtHlgP7KTc07Elw%2F6YW7YWZjwZBBtOz5LYn09%2F5dexEzGKB0wYID6yv5tRwiuM7R%2F%2B%2FRAaXmP12U9NIvaVmpyFvSaLGzNYhsLAD8hwrVh6BWluaqqNibtAXR5YNdm5LqNBVuPSJzdJv3K8nZsTtJHdqAMCQb9GQ095LjXKxCoEI8uAf%2Fhp%2BjhSmUyQLuORRqX2gWtMLTy2Bhf7DoML6uKezJuQOA%2BcaZDEsDRy5h0NFxUEllOopupFXjXN%2Folmvq2QE786T%2BsUSKHhi1cJDnsJfmNiH7IYY0WEtcJAWE5LdJ6A0a5z09n1WhcqMK5P4pKzXf6FIzoIUtbNcR7YQigZSr7pVvbkt5ocIC0LmUzkydNyWB3nh%2FWSbg8PttL8oZcHe0cMQKMDscRk7xlyUfGTE5u7HtTCWnZPCBjqkAel4WlUJzfD5LUEWT9MEJGksJCVc1RtvrAqKgFtyCzBizOP3xGux2nwgNHXOJ6cjycOUZDuWWodcVvxBY1RT3hjhG51oyofAdAarzTIGDcItO8KFE4uxpxoplyGcZqQbBzv%2Br%2B%2F7PH%2FEbpM2LHEkh4Xd1%2BzixzuHg%2BSAg0VhTeBusfiZ%2B0gtJ00kLbJRIxuwLBEEGtL%2BXCtAkdttwRNMiaPMNTjn&X-Amz-Signature=02ca1d4331260c7a506fc022a8d5b7b0f945aa2d22359d26cebb193b48068f96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
