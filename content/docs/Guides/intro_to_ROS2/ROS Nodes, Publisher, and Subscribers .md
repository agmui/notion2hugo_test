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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=aeb9e58b95f375c3e7178914e64d2ed81c2dd7b0be079e258802d4459a6c1f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=9f018146e32c9e34cb0c95eed01a143ea66bf59b0366e8e4a22a4cdef9afe47d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=04b4f4664ed4c42a58fefe6e74590ee5f795d07e67b7e6d3c17a58f52450ea55&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=194d0b50b0577e53498e7b36e3933f5c3d94fd90f83623fc0280ced82b9e3f34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=3a11b2ce068e0642f92dc7251ebae360da795fff4fb69ed70826a1ae22389fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=43b483a96b1d8cb527811ff01d5c5e2075b383563674220948f35460ca62de5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=7f5527df6bee61981eedfb7d9f34b0f2def98c72b64225345ce5e6b5775e4532&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTFRYWQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCw6ge5VwKjrVXalraD1yz6o3G9itx3JCvpSVBu0BgiWgIhAMAf7od67ov3gVoFz%2BcevG%2FZbzOi94Bd98x0nqul6DY9KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8gO1cQNkykC6Q53Qq3ANv%2FOM09Gr1fLDSjihC2s8FedQ%2FgItsFJfRqZyYHQgjoB5i1tyuc0S8wcH3hkdzgE2VV3%2FvRNs5HhPsjLSsbIxLQysyi5XzHpOMT5UfKulSEBCM2V9WqItD%2BBhG9XjusoFTkIJRFFlhQJYf%2FN7LSM28PP5Ard4z0RyMzgg512NlqtlHziYSZ6qNfNX4WVOkvX3CoYD0Vre90v8g9oahDwCr1ChVfYBRFvKLbeB3rlf0f311KKuaQEMWTSDrLA3y9vH4QKkob5qeH2LNnnHNqTqUgwHK%2B3R0gmLVzG6ZNz9Po6MD0AL76aZPDkLgh%2FgQbQK%2BDMZvmTBbGPd2B72kzV%2BLwqvk8O5%2FM2rl1X4koSnRDHDxWr6ZcSWhiAJq0Obww4ptq1sxIruHcov3%2BIO%2BAS2ryCUkM%2Bvvzv2YBTvTy%2BOpAXu7RURgOlZBca5MijERvscftR90cUNvmiPelxinDywTq7fmXKlwHjWIc2zWr2QOLkLONlxwieglk1%2FDg5PMISY0oKGd8ojD%2B2miYnxwCnXxo9U695RGCsLqEDwZxBGFCaIhhEllXXxnXJbNVjgZZMK2rbRiZOuwjWsVBElHRFox99xnH%2FMqzbxZefp6f3sGgPMbbWp2AGn5R%2BLitzDLpu6%2BBjqkAZrKjBHHQjcHkpA7F29DU6L43mJQntxnrbYfMtophHgcQIFtgM49X5LUkXKR0IW30KWpUJq0u7CaaauVCGj117ELwmoNInL8IBVsHPfys%2FojK4T4TekdYPBpbrj0BF3XRv1Mtt%2FBdYU%2BvwGNyJi5H9dtHvs6ELfLV%2BOERI3NAoUVN0D6ulF6vpevon1t5x80OwZIU4VWEPTWH0OO5ctWGKw0T%2FF5&X-Amz-Signature=a50920daa04e88b03109688c4d099aaaf136f47188c9f5ae803206ed82be599c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
