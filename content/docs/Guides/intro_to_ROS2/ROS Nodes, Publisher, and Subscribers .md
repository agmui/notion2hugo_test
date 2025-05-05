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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=453db5f34a7ad77571da5364eed345d3b9666aed08137119165010cd214ff533&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=c4aff345ec24e7d719b66e3f3a77acce45ebe6dedcfa6e5df514837cd50e367c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=d96f27fa97dbee4a6d4597fa9aaa6ad275e7de1f60b98195d72220761eae52cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=edec1fa831113aa51cacfabef832ca6a7858baf5f26528ecfd3df89d8c407f47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=23456263aeec2e242e91d4719bfddbf9813192c8e492fbb34b4f7d8f9f6d142d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=3df6c0737e13f5ec94598f6bf0640886cb0ffb1f0f565df7f08db7a84b98e98c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=85544157b30e7193cb95e5ed49ed67324a2a154395acbd6ff1f7d654ad65074f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAGTMR7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4oz11Wrh57jffPb%2FiH5tzT1ntSpBABFI0FJCXvl0m9QIgEeAHbUqBj0eQ1fFGBKhnff2YWnYvwNEHYsgyfo%2F%2FJJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJPdDwufCcnCXLxWLCrcA05UbuikDMkwp3TPSH3rUCxxF7gA7dASFo7pHv8kktwdW3q8DhVCzv%2FghCXY4ZYFDFrQyX%2BFmD%2BwCr51LvpHseyKRq4KvFBZcG%2Bsy8uLjE8eSZazY3nru2IcfZyiOyyDCx3isej%2BkbdjS0%2FKFOVGaomG5T4DhDTvxVZ3DDJrgd4VEcov9Mx8YwjTEla2eVsnsU%2BVHVsIec3D%2FSj99nx99UjTyZCIksvkviGopjv7j51bqrPhzgyFvxRld%2FBrdx8v%2FG2OU%2BKsT5oD5BgBgwJMwnbWFyhk7lWvko%2BxL2SX8F2qQ5Rbz0%2Bz1NuUZiKa48Nq74%2BqHZLY%2FObcrQkW8iyJTmmPjrah4TsT9fI%2FtKCLsndugc%2BCSpou0e275tXacPMQ3xOr9%2F%2Fhc19nnl3n6GCsXJmAftrk00MDoXw7aRWpmjI3ikC0hyUu0haaQcwGPvyoOKiv5Z49A097F9AXEa3zhZFCUSCZ4bEz1yb7gZsYoXwn1GYyf02dKwyEeI9Jxvab41ElUul08gkU5p86lQ0a%2FIX89bYPzbYWwJFS4vZNGIqyfgyrjcgKiW21jwRZ17%2FDMUSkqxyZFWgT80AbskizgKOH6z0DgNKUGKrXbzOCRiduiI87koz%2BHyzvbzuAMMnP4cAGOqUBHPG5ez2pKXeIEFGHSK6jAFFrDPHRA1RxieZC7favBZY8Q0nW3UfWV0puwheh0hGSOIM9ogTdTVLahq6symZF6j2ASxs4d5OTO5d5%2F1lcF%2Bdg7xnAt%2BQqqkkxJXdJpMQQVie0pnKT7MwGetLJSXR1nSGJu7Dp0SLhJRqm4sAyDBCnXkIxCaangW1mkb%2BZmlEKfwgI%2BMLr8cpyfHywegFFguaABc%2B%2B&X-Amz-Signature=2138853b8de2442823ce2252eceae2bed201fee6e467b503355dfc7de48f4259&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
