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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=cc8076a162ce28a76794c1a642abaa3d306229e4365e81c7eb66735a144a49d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=438bbbfab808eaf8cd75a10e60aadb1ff71d498d022f547c8f14e6bb0f3a8f30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=0d28b6290ab192b5f7aa8330ebb8c7e12eb330ae8469527ae1cffff1b22efeec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=5f4b848e522228e8bf32f5392e2d8e386083d12f77515d97ac137d7b832ab9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=cdf7a81e56e13172968eb2b4332f8e066b3f4e2953f8a8bca3cec00b84479d42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=ccbafd06f24e9ff3e28d0206f3f3195bf8ab20e2ed0befb8cb68a8e14e4c13d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=4cf2c1251aaf063ee512c5af6695f7eee4eea0a57e211375105806d216c10108&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLPKPO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF92g8nnH6Z%2FlBkLycuf5a198sdj3FsUeaUzylJ9VtQ%2BAiAxzpd1GBP0YkoENw0SfizpcvZfSThxs5QJ5n5tg%2BkUOSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrPsx5yUObQEAhLx6KtwDjxvXQdkiHz7RNz%2FBT0Y4RCsBLqWK0M%2BhBj5dyolDOWliq0uwpGezJjYYew2HCZ37lF1v5T1Qq1%2FpbTnRDCcHQU9E2Yll3a81Ff0igFOLwCtMz1Z6J0l9SOyOBUoOtS7f507o53UgTlgWl4LfUWZnt3ZMO1e%2BCzHySyv2vo1mPqcIrwtZeGXS%2Fa2gERVjg4f62poRo6XaKIvyycxy4TWGyj0%2B6u6GB1dxqTGDpYQo%2FTaOT%2Ba2exKko7qPARBe5JsCqTOVBPT8igtoTGCYbqQRhoO3K%2BTF%2BXDqk0Ky0jrjKxnsL4%2FcWYRWKImK7xoi1fLy%2Fy5jQ7k1DpVFjcjBgOGR1py5pdaoHpewA8YqG6qstiAJ22xuIwFq58rFYfxCQOOBXrCuNJrTMEUfn9e63lqN2lykNlNNHLXG%2Bryg6DWY73TH2PsxRrUk5ODz%2BrC3W5aDjniqL4iGU%2Fz5ufF7BLc2fwE6vPvD3Fjlk4vPnRSjmqEO%2BpYCHVGa5DSJC0tALXlUY8CjYf6md%2Bxx119jlu0w9gPzSBC7kwl9Da3z1j8sbdeI%2BvaITFgWm4KzAm8HdvOJdtB%2BY1Mii2t8F3U1DSyAcr93%2FHwvgStqW30KqcpNlJ9caMm7xdxm7agkimcwmu71vAY6pgFTVHxZeSPr8seplq9hSZFz29o6koopkseb%2F6Qog%2B8nISWSWpoLdyIoFMoOc0xMgAz9uzoostssB7reXOmNABZbSEcWZgr8MKwbLy4HhZZHIksGCTBDwdqYLiQKE%2Fu91lYU0ANKhL%2Bgd1%2F1rt05Wcl1WlR7%2FKH8xWrgl%2F4lYS5wKZzr1ASiIiJemTS26f%2BciO%2BWubte3wOEIsRuo67gwMqCtWY%2F3KEs&X-Amz-Signature=32596fe3f1689b32c0deef9c99ad37799790580d0f0ab43cc8bbd30d1454c207&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
