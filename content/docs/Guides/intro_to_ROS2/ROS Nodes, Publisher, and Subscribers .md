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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=21a7c760fbd6e60bbb34fc5c82274800126ec542dc2dc81afd973ba6df00e7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=c2a0c55bb547db0e46a92d3bdafd11f347eada7a8af1d4074bd03fa29e8a548d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=6596b5c04b20f07269de87c825cfe7900d46d3f0798e7faa86d7284fd5689a05&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=63ea603ef84b51cf375fdda19e966a81a6656a392ae26756426f5f42a4a90271&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=7ff3f6f08e7c6eb18287e149bd6deb35d6e49ab08730072bb8bcdf4259adbf56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=8e834f647483b5cbd6ccea031f4ae7336db0b6bbc3e9c1441049424f9b7b4ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=67a187ec09169ac96c7f5949c3b64b567bd46bf55a76f9be2f72ad93dfdb9f48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXM3WO7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID6uu4iCx0dA03mx1j63Q2ircADHmHV7kWXN774Vb5iFAiB1I2T6RXvUyljMfitMdzGBQAbADLmRjDc0STnJDCFJjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAENnhNtUgukkkY7JKtwD%2BLRZNb5bNN27OSf%2FF1RcMlm0nr7WRLFimNwY3HyosFaPu057Husul7PwOU5UaJWbWKZhM6zE%2FJCUJP5MqpQjCgxUF2ww082wI6dqNgIl9u%2BdbzSupfRP5PZqsCnDa1T9HoRLwLBKpFzDRyYJdHHR3Q%2BHD82Zp3aBW2a6ylBJEdnaj5%2FjqavG9LdQief83wTaUmSY4bze7zFaphV0ptkMZk8qcR2%2FdtcoQpuIoi3Nz6b6NuFBcV6FfMCV6YPqhfNna7jQlZHtJe%2BSqDVHEZVCpldNG1%2FUHcymdeW4BcPu%2F0eqqD89YNYBqM2loyvSsfh19ZzGEzFw9FXbOEfQpNgoVRmUlyrHZJWFlU%2F1WaZCoaj9rJdKP1cjbyT4%2FuyExvJkwfliWiTRkGx11DvOi3Dxs8o%2B15dTsOpCgrSw0EyQ%2BO0fJYQT8UBHIN%2BrZCTuN2EVf13qgWRf2a%2BZuTgXklgFJzW4KnJknlrO8%2F1xxd%2Bq9EcPE%2BSrx3QE2xdoXxP6iz2A%2FE51ThSO1VA%2FWHgpW9f11CyXZ8YUorovscqJSnZ5Br1cN6%2B4%2B1y5CfrRfT%2Bnfgl6F4xwF370pTGGxn19SpXbT5nLiErg5DJvoYXmtfoF1wIj7q7XR1av11qMXMUwoKbIwAY6pgF2aNTC9TBZEq0QU7ehfq5YECoAOVD27mJg7yr1HaeQZRED8WRx%2FbkJ5BB4BOy9H8VWc4MiimGmzTDgoH26ci5M9UeOmUPCE8%2BsjtwOX9dhMIUNnt27hRjCEQ%2F3rFJABC0fPiC4oZfI59jb01JSfipg2ksc%2BS5cGQ64RUCxgwUPJUboS00ZDUtS5Dk2y39%2F5PxLSr9a8mzaUQffG5hX1BNNE67PGy3k&X-Amz-Signature=df09e2290eae57ef516ebd5ca3a908c832ecdaf86a7642b30a64d2485cf6cb54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
