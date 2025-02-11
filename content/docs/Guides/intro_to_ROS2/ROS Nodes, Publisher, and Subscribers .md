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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=47f85d04a61d7a27cecad5e80811a3bb5cc643844dbb6a59775dd866936ac7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=8f2c2f8c4b7dfc0ec4f1ca69d4bbfae1be9d996cfd66a744c9435446dbfdf805&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=6d857a75181302d46f5bfd81d62723b4af9989532eebd23125925f8d3fb65ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=9ba8abe15e27a2dd854fe574439f276ef698a61c3b089011ca523e99d3643595&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=29e15368d359579f070a8ec7e1194de61bacfea08bcfc74421249c8717042a20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=e7ef435766f31fbc9951845bef553da46308eafb747d8a8a6496e7c2915623f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=1f9747c3754f5d4e7197a36a9a1d79c31ea69b09128d39583b9b15a6d4883123&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSPCMCB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB01KbgVxM76PlMmdo93JmR3TLN%2FqjnJxZ3YY8yFoxEuAiEA07TA9rZJqNKiZHS92TGGN1a3laSLpSVOrw%2F9Smg8%2BDsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE18s%2B6I1g%2FnfMgMZyrcAzsm7pnvuoTkk2HtG5pKo1uuFdrzUzTbsDAx79wIBNprpu1sVAcQAVWeqvIneIYQ0XbKki5FY8onxiOYtK97JmaqPIkVMZi5E49UDdeETxdJowsw8M4ADzG2hDizPGxnzVtRl%2Fr%2FAN15D22G0Me0UtK6wyxC1hbZEHRChQ9vS9XZTdZksVO1KLH38izKOsthgkcsLUt9SR9zzezyB28BEKvvQE4DIfXaiGTdfQmZCH6jZI%2F21q%2BQ9nCpdw%2BKGGJb2W6bWkCtFEHFN5nZMdRZ34GRCvxpzcwfCZa0NTKFh001OawqvmEnzwQvtuBWrKW6x4rp5UUbnVXC9TObPcNezBzloZR8dLRjxvXcl%2FALufftRFkvoobIqxqpVpG7QTqjM9trUeAbGkdPgb3smrBHnWEA1RS02MQ6l40PVuUoQnETvvr4VN8aGSW1hdyN3ZlptAf4jBe9ZHEv0G6Ii52LCUAzWTgK5AntgnWda9Y3kv3ByaIW9QQo7AQeNKzfW42DAgfR2jV%2B9ihEUbyLmKWhZ%2FMtbf3fgxRdjOgjUe%2FviyPU6tvRUOfBJa1fUi4KSii9Nd7ThNEvVK6ANfVI66Ve6p%2BKD9sikkInXGIjLDb2%2F0DZpqi%2Bsr3vP3u7VA7zMOzjq70GOqUBHX%2BM%2B5FIb5paaGYYulnsGbnWjm3CUdApOYwRDi%2BeKJSnP1zTphLENQQHrOofrDMcrGSuic%2FJKR8BkraTsnhX3pGTcY1bfe3%2FmVImu0bJotsmt31nslTsy1Qc8J39KYAP7TMJh2nKmdooObHZYKIF%2BKeUQ65WK4fkItYqs1VSEBaTQzHozFPkAb3P1rU6yLbwxsRlu7nU9w1cXfFbfWxceiFd%2FkpH&X-Amz-Signature=a55a86401b2768526b47d8a3a07afcd71095a4e14861c2b308fa88dee081a522&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
