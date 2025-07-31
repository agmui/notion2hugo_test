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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=c01d971e2ef06fbde608cc60120d283d2a843b9f92ebb11c55ccc0559fa7b411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=27029bb3162a5ca81adb416e9e587c158be4620b799c1232b22d2a59b5205d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=9063a79fb1604871c52bceca0198eef11ff4d7070cee361b63cf9f9cce630c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=09a6be78e13d030917a7c1e6a931ba7bfb994e71c1392e3f3df21dfa1fdf386c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=ff7abedd8650aea498946a509b16146455ffe952ddb59fba46d245bd2ab65546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=4b4ecf612d5d9884fd1313ae5a6fcca7605a1f04a90cf0d265fe08b877c23791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=eb69d31e6695eb146d77f1cf85c33a2f468fc7c580718dfe46fcb0028f79e801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQN4N6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHge5x8kRvB6IwZKLajlIPGgqjprev%2BKRYK%2BxSIxvmSWAiEAzFjV55FOwH26ZZ%2BzFd%2BbMz%2FBqsogfaBT6zfBJLt%2B56IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV5J4xRF2hqWQNWACrcA8VlrMQ4zy4cyCrN92SycptYl4Nk4myRO%2F600BfhqkwC23CNRI03QGL8c2yga9r49dfURFV3UmuEeeEn4OGEk8ZoM9zQelgXW4qcr499igTryJTdfdFyTqaILMQ4dvB5VIbyOyJBIQ6BfZT0EK2mwuCgF0cMj%2BNPFDjNm4w3ahva65LFy7JiYjXYw%2BdWHqCZfmPY3AYTFE3QXu%2BcrC%2BxbARHiI28n0FYAthT9gUE1JmeOEYHecGBwLsqrepWzu84nB9DM2YoJVOLf%2BhBMhm4%2BDjBssnsO2j4077OV7Q8ZMrMHdf5JLf5%2BzxW3VNyDjFuMejoZK%2F%2Bjs1li7W%2F8yr7Ac7BLqWl3dK7EaGub42hsujhhaBSXGOizzeavAtj02M1zZHRkhZC55QcxEHmWhqVb8pMVZ1vcnFvRs1Eir%2BwxVmhtgkSWD5hRXEdfF3iXF2hjt3KbFmPGZjVM7NQOx5iLeF8HZCgOqcOgFq67WUf1OdKvi4Yttgg1EoR6SSECwhdDptADrqfeBWueYHTC6RxrQb%2BOfjIL2OLChRrtHAHWnVe1TUv%2BwfUMzJLwtg3irR%2FvQYNeF3gr6yrMuZtSt0XuDd5IsTzbgeXLOmF68S9geEjjQZO%2BCANrnCEjxjVMNX1q8QGOqUBBsPj%2BeLnMozOMI8pieB%2BTEg0lLjXgjAvqC6cse5pAg%2BJ2xdlslC%2Fv8oXoLDA2D2KZF45aNcRlhC%2BJio7x6KZ4ypm6P%2FUC91p6AceOPBxUXKo%2Bf4MaJqfj%2BNe2xGRYJ2tzn6cGLNjbobQQ3oOv4WYNwvF3g6pAhyNUGepenkBbnfH6PsfSCE%2F3tUUtrjVK5AAwRv2qp%2FFLYTp8%2BLjVVV5aRHCpqRI&X-Amz-Signature=33fbeefc818928fb6c6ba269812a8db8b9947fe04d541065260a260eb0c2f68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
