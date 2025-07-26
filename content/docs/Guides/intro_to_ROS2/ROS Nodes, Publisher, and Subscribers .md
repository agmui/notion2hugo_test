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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=7be9846969cc4174527c62798f0b090dcb9c94f7c7b5a2b72c3901233279fbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=b80677f5253b453649c5826d07903be6c096ebd488bb49b8d444133acc5755b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=c8fb0878a3221d722e26901351dcfe708658812217a247f616fe0f07cefde567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=5957b0aefda57e5aed37aebb0d9f5c851a94deb1de51db31cca0c8d87b4cb353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=cd3bdbcbfd9fc5b307a661c6f0adbda5ae11ce071453e0a1e24b9e9ddda2bdde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=cf8d47445b5a950f3da66975d4d91c3eaef38267d461134ceeb05f0275e8a287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=c80df9a6c79f05c3cfd4965667e095126a2fa07a3d5061521b9f9bcd9327f959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34J77N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC7AC9ZPdC7qvlXYUwHSdPsfK1Mq20Rwf2bqqRSkiQv4gIhAPUHbL8cOyHbjwozfKK7bcx59gue6VQKNYs1yiOXwRm8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzssVqQ3xvLczgO8Rwq3AMdkQJD%2Bl%2BjHa8s%2BJLvojcXFS2hiW%2FTSHnS5MQ%2BQwD0Gvdmx1dFf7FoErUBLz0aHd7iU%2BVN0znXY5RxdJGOh0SikX3tj0rALoED6%2Bi4V16h61O%2FCMXbdjZkTZSEJZJ68PbgICqn3C6WAPfqjveGluflOotZsvqdYPPhgXkxQ40P%2BbIXmh4%2B1eo35NVteN0Ekx6v1huwXtUsBF5DvZyKnPlIrdocQfhYwOvi1lgOVFJ01Q5inZk2oQslovnbLgHqkWeGrvvvfW93Cw5YJZsYYbAv7WjCFs%2B28XE2HVZl8P%2B4qmwwJIIU2vHC0R%2BUOjcgTdw39eUgyBBGvfbfEecUmoaL8ub83EYqhh%2FFqMmokMKlPMr9d1B%2FvhT7%2FHRRPOfIchMHVqvdLgbim%2F3KzAXXEt8nax%2BsBs8MCIT52YWZGnYueZj7CgqXxYC38zPG9sKE8p%2BHgCsoj2aSCHj84lebltOgOTiDfSAGP89FAMwBv0F7k%2BzReAF93ts5dx6Q3LPWag6sBB5sLiLOOCyKEyL1muGODkpGJ18YaMxnfMftfKdw4emNQ32NqthcvWp5D6aJw2qFznTv1O%2FYUQ3xL2A6tiN7Vm4bMiaSTe3XQ8DT%2BJtR4YH7jZ3%2BJ8n1xM9pBTDcwZPEBjqkAVr%2FzlvJ6yJMzQsLQmGfRpKmmNKnEQHwqqFBs5xcK10NMd%2FJHkPR9snpYIcfUAl0CjYnxg021IlOONnXMARVvjM72ZgShkYmkNbSpa3rRJgCarE%2BU8nuO4vn2uroyNpKAG0BtWLo6OTg9bpD4m356PpdG7CI6%2FbPI6cRjPIY5phofqpaKIcjV9%2FN7TlhvfiXZggpwAuYUDB2Ermj%2FqS8qGb33I9p&X-Amz-Signature=a63f464441bb67528137095ead2e023265e607ff1994c13d931f1eda091d2726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
