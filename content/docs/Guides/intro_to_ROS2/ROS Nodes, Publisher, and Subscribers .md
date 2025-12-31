---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=57d9e4a9ec26682e775cb430e09d1b57c1f0caeb0d1f9a96d1306dbe1b08efab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=f314579d5af178f62f3cc883644e90f44df443da05224653b7b411d279ef471f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=28bfc88fbcc579e655c96f558ae81e84327fa708b408038fecfaba2411554b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=564d48a62b42ac5d30484039495a612974968917dd0aaaaeca95f1b43ae3c285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=9c69a3ce603c9edb62048142913aac5b8d57253e21cb680a7cb0a8d5496dc6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=7e5e68f066b694185e1ad52eb6b9dfa61606e13e447bc2fb159d7ed9c12330a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=2f49b9773d27b7a973bd23d922b1dd75673a674caa0924acf25a2a88229e5e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IN67FS%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNgaxTlqa0o%2FhVnq8Y89GxE6EGw2DktQAwB3YCpblmwIhAIvz20tnaZ3J8Uys1QXtpXnvfPid%2B5quC4xEp71Wu6ALKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaoVCoBi1ndhuYaIgq3AN%2FNoNQb64Iy8aHXykXsQxdxdaEczClUPfbWw0W4TexgJ1vny7pa4uz5Qc7nDLBljay1AH9%2FwwIbFYz2Rv4bZ6SkgC3UfMYzkg4MK%2FDF%2FEO71KdRr3crrNdnw2yrFH%2BJlb6WHwhko0gJOeJljTcSCsjPitm5iZCSVY8iuof1K9WF8SYyQeXALBfrI5vvQMvhTOYugPYBRAIyF324EjqHjPrlNQPEly%2BhVHLQcUYWw9ki%2BG5xchgkek%2B4eumG90f5hcCZWRRZ3GweQwYQpBhrdnC%2FkrZyakS4jyCs%2FrN4Cg4iGgnSJari7xonmSiW3sN22oa9SPxN0Owd9kLHxC7yQnoDZ1lFJvGawr55QbFgO8zM7FrbOMAX8QkIpN%2BPCocqvu7oC%2FdfQciCk6PUj4ro5wjZOB55rINVbF%2FAzTknmUqk0RE61p2UUE54gGVhgjPqvAdYdobVj8tO%2FGNWxIW4GDmpinaUl6FPlq%2Bhuh5%2BPMare6dhNcCc4xK%2FMew3r6gEqsQHcDwF7r98pxmoeJX24uMKq7%2B93o%2BkhYQ67ia306aZWLjLKvuOSRgkSfvSirwuAXOtUCIcZzeH4ykv5A4QL3J0ba%2Fr2aImrQwhSDEjvxmlVKk10wBOUYZP88U1zCy29DKBjqkAYPRzXyJAr1RkBjA3J%2FFALHVFURh3xf50kSrDrqusg75g74IJcV%2FULdVCGQdqIpipgZOIyrZ1U2stPiXyLaqqZ1Ph9DUE9h%2FbmkZzebZqpACs6fkk4M0aIRO6YROSkkbyACQh36bvU5Jn2%2BM0PgfPp2zyaQygUNtl1HsTbMJUsio5fpk8eKO4cWbbh67cH89SEVArSyx2qH72QuENT9wWERLvOIT&X-Amz-Signature=5f58a36e6a3fe2c1a3d991c7b52c15b830f82fbc56f5bd1112f394fec4c2a8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
