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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=6dba9b12d88a0508269505426b4f486766aa7b9291dd4b812edda90bd34037bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=83dad899e607d89624dbf42160b568809a7e632474903debae6d414915882ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=a0d69a6ed378beed93c5e4d3e7dd7bc2146c2c5a46125e0260b23672d3a12982&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=cf80df435491aac2762912664f4d73b92c6be0c4accfdee05a682e6e050f7424&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=b6e157f958bee9bf1681a42ec00fcbba24393a65937558311b0cdca51325e786&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=29d57c00989ba321e69ea5e348f40df2e8b173d46cc024de955ef0ed16ad5d66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=04eefd543b3e6afbdb72aefab3f62584dedf8b0611210500063672cc2c7f99ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4ATYGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQChNUffnvsqIatEj790IEqE2tpxiZp1P34JX%2BJVkJQj3wIhAKNVqskRtDb9LM2KQ2wtlehfeiZPmnGPAxxAmMuyFHxlKv8DCBEQABoMNjM3NDIzMTgzODA1IgzaYagJlTYWMWl%2B1fcq3AMTpyNsCd7JrR8X8fHyrYMlO3TCrE7%2Fffajw2JgayWQ7pvbpG%2B5%2F9KFLrGwCuAVuuqLlgPoS16eQMMDAjVY8Dk980j9h005LQkNmsw9w53XmwYejhiU8bSgpTdAWB1kd2TabjYzZgNAzL%2BsSO65LVbkwg9cf2tmFhBIcjRHkrCXvGbZ%2BwZ%2FGf0NhMjcDS1f4u7BhOZwWtzXUdcAnaxrl9kHktIF7Uy5%2B%2Bp3xBMib4DbLlcE9UC9Lx6FkN6RPGvqp1fQS%2BEMFzWuZO2yJkN6HAEgusg3vTkdt2H7CAkgD8ixnO3%2BwgvNvr7pTP1EHDt9WmrbTsB83HrJ9D2med010ksC8FChd8j0XfrCeyzuw0SJnCUFcx0YUq3WWGUzgJbBYgRO9b2I1e%2BqKKYaj%2FjUP7P0HpDu55oi8Hw5bEAbxknsOfsMkkv%2FXSUUC7Ry30WEvukdVha4IThaU3z6ZF3J%2FI%2BWr%2F7Bq%2FBFCA3kNzm0nNKomgmtHN9285AXQ3PVeKjFekUEiwB0jHqf4t3XRYb1uk7RkICAjz3oDs85Nf4v4cOp5mMZwoV9QkvpANp9jvv9kM6wHmui5w6FdXqhDjmeJCtMI3d394YdDAe%2FfV3V%2FyVqu1awSN0UO9huEqK3gjCEgcbBBjqkARyoDA4rFArM1p82fQudGHRd%2BCdnAQIq%2BA5a%2FLwTf5QiDA%2BvOS3EPOS%2B9bkbTswnGHb8Gyc7SPo8XtFqVyUmC2Gh4ZHKlofFwIw%2F%2FxSG%2FdSYzskMVqUouZAEv9E47JEk%2Bq%2BOyvRHRGbbh4TxwAkVFTyOxl6tlXg5XfxxMkT%2FL3OAurK%2FHtz0ZJ7Q%2FJ%2BM4Vcyws5gbJT5R8OsWa8ixmsfERPWrtqY&X-Amz-Signature=987c72c4bee12cd760a5670ea60e426b00574d22e09bcca56b0d25f8c7cc3b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
