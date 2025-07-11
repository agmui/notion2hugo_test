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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=5b94919466c60e2a2d544e8575e54e4fec2a9a13c21f4fd3be5f4f12e1627075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=9c00522cd6442929caf9b16b931ce560e469eb9c466ffd447689d8469beb24ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=1f69b81d43c1c81966d2ec829a1373ad1ca42a3cc7693e47061d3f15743b9aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=703a298a7628ca3146714c148b25383e145a7d7b6d12ab42466fa589351eb719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=f4f80b5ddb0d02c4bda87dfa81a0f6461d3e318e8df2587201e30327e2e9b067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=4472a5f7d30f7a5f8223e8461f8b5f583e01596319402e0ee102cb7c5873b7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=0f5497fc0a154dfd4b9ebd6afe91b23c91864ec84c4bcd2960145efff1fba0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUL2ZKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaxRnZ6pzyb4gsY1iB8lNX87DohZ4qnovJShXmL7EeQIgPRdFw%2Ff4lkcLH30vZAtLxE2GiJiHOemDsiY4b0UGcsQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHndrp3xMIgXHm3wmircAypHuEhABahMmCh2XPIQ4b%2B7X35kTJ5pFx6Ydz9oGcjgabZqFzqUE1ACIP1YXEsdikCr0by3u4CR6wuB349p8wWFhCkCLMV9qDGHqo3twzFp%2Bse%2FfFQ%2BV89OHEComzdK2uzkFoQrXhKEhzsIAQWAYIi6EoKXN%2FXjTERE5N0Whm0g0%2FY%2FY49wdrbIBQwi1Rr2BOV52CRhCr21KDf9TC%2BOIYwL7cpHsqFa6VECxnyCotgPMOIRuTVEnJ1cgw2YEKyxdjhqcaIGZq2E29knrq1SOSOjOVHNi0sFuKE1ZxnYwL4mFqehZZKsMQQjSYRsg7VquefCQbNa0iFWjpNqZVEsdlUbna%2FRy%2BxmOVrYX2vbVTjKo%2BlvTPKqPbCPg3lBv4lVlBQNGpOiPHb2BHAQyOfdhr6bfgg0%2F7FWK%2BG1zULRe%2BWemiXirt2bHWmgXQ22Ibe3arYyql0tE%2B%2BBVl7XwuD1blo8N0wRieWdLm%2F3I2L2L0gzWOsuCxR4%2Bgea7q9yAbgIE6oJDHNwaS75bCFLkQVpY%2Fs8w5G0mJp7yhfSKFGdmM470BrUf8FpwyeoQq2IliPWo9CI%2FQTWwLeh4qQLmfFWWGHatlBzFo4V%2BETDqEly5ZaaC%2F%2FPSJ4qzNMw8nb1MK6ow8MGOqUBPbCAOy8T%2BwRWMi%2F%2B19DS%2FIvHGUaZmC4VGK18T%2FjpRgGFDkBV3ovjsRuiy9hLhAPvOr8%2F4JoCvGE5EKU3YONumqHQqi%2FytEmi6f2BJIKQ63SvqPRmVpNbdaNehqoyCnmPcfaSdjgveW%2BjXgBnRavT%2F830BZBYHyRC4Mtv9B5Klz6%2BiUlDu4NeaUzyuKRSXIqvE25%2F86wWd76oM47p5qc0auvamo5I&X-Amz-Signature=f715ec421ea234f5d328935b1b1bdb2b83f2e4d30eeda4973536397fb26ff45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
