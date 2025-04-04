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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=d224587f21465966acc157fede27157385b66c3e3383127c9bad4438ef4ce626&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=6e49f7829bdc6572254baced39e393cde0ff2c9ecd25d3c076372d2ad1d14f80&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=0f6764a9a31418124a4c7bff21b85c2c032430f33fed8b4fabec24ce179dce65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=4f34b16d0791d86dd947c6404fe7415557a0c3fa5ff36326a64e318e708f8569&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=3b8672b99e7ff56f30a18f76becee9d47fc3acca10d710245ef85c0bb1a32a63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=a6ae6b4a70c33712aa0c69d5824aba151505543c732bb2776a90a25696f91272&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=ecdac481e77be8383f080145292e1aac636aa04be65afe7598bc85b08bb29809&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNH76X6I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAbS4FOPn6wL3ky1ekVX3EQyGKWYYqc3ooeml3pJdRwIhAIhF3%2F68X5QxZjpWRMrnPqi%2F1Oey9ztGoDjYLywrRwPOKv8DCBUQABoMNjM3NDIzMTgzODA1IgycJlmsKUbAvw9lwR4q3APZvcwqVmCUjVu5ZwR4r22J0LfROhchts%2FV35gY3rrVCfngoGpwTqHFOJpUeG7zF4yWzA%2FdULIO6FqJWvNcC7F2n9VL3gAAF5nwas08ddhWq2VIXqt8LtGozI9WYeIEyTMEcAhE6hM4n%2BI4XgJqamz7X%2BxBG468riAVZSsGEoOGQ7crwHF2ha3rL1G8UXB6%2FdE7Iw8Wev1y98iUqyzarR9X9luiLqiLJzB3DwbzeAktv4p2gVH3SEsiV2WJdCsQK2L%2F%2Bxz1DujFGrLcna7IkRycJhuIoIM%2B68e4OV0KkzIXYw6JZDQuPw9giU6isG%2Fuz4lry5VGGqel8P30mXPoLXwzbdBs57an%2BwsrbEw%2B3Vn7VRsriVQt4FKO6vTt0m82fWtzx7S5sOrROuu87WcB%2BGnIZAXJw6F9ZSX3nGwBPR%2B3Jr9VV%2FosS0MI4oX%2BNZdQBbKP5J1UHEYGtSXIkKwaL0nLQ25nezvZKWyR3QufJOGgkUnblpA9UpomxewC2sHVniRrgE1nUG8AQerwthPRvVX9jBOz%2BVbNvA9N2gBZu4t644luffFMhnHWBilf%2Fgh9bX%2BsC2G%2BemsHQHjgLpZTXz2gr2LDtoxVEakD7WoXIM0FevmzYbTGgPgXlvJKdTC8l7%2B%2FBjqkAW4tK0A9ZCvsVZVd9bfTIjlAGqbPAD9IAZUFXjXiHkA00THhvWOCPX5b7kPtYynpQbTRlN5rw9QteDFultN3SRR6Gu%2F%2B1TimLY1F%2F6H%2BkI%2BHjVEdYPKN4oCENGZMmjDtsypz7dpc5nWrDZlJeXxE8pi2OwZixIcXKFtFrpuHoEqRGa60Eqo3h0S4tyrfwAlZN3FDzGDr%2FnDeGGLwJ7pbdJ18wv%2BN&X-Amz-Signature=2c2bb006386567d0ad9b2ee121f98c90854bfc863c39a5b50547e78cae08e3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
