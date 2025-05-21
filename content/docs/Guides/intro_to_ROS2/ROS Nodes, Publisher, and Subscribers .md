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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=d280c8ce18181eeed1f7183d5b0d9a049e3dd610a324f063f874ae750cff74c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=94beb2017aa893cf8cee9b4e7605ea577cf721f98b1de609335326d14d7e725a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=af31fe5ad9cbe27892784d9ea4074e5d3817e3254ab1ace434efe0d7fcdaeae3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=e7093126f2f8dc7159c35cc14623440322a39d6094f0eddbd6677d867d7e2210&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=54f9809c17990687141741ef3d6216c7d7488ce2e16d0cec63bf32ada367667a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=b814f37524711e4158f6a5fc6d0a484f7167bd94ff79a3d1af874e9fe799b5ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=5498350a492fb27ce5aa937c53592f7d914220220f41a19baba931c84dd3aef4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5UEEBJV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMQjrhOPzxh%2Bj8hpl%2Bi0DNjDTs5yvpf2j5iNch3IQiJwIgMhcLDeP1FS0WdwQ3zKxLMDtsgp2NQg4gPYMQDWq1OZwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqoF1dv8%2BYnrEC2dircAy1C%2BBG9uiRxS4NUukRhWjNThtfucw8oy42Trd0NwVQUCuYKgt%2BCpOA%2BDi1BSMiB7xHDXWB0cJIx%2BthzjOAMwl8Qqu9lBY7HAX1FyC2myr%2Bx%2BwZkK09pxaEEoWyv7rBknSoRXVXMkKGmh0KXGtduIMLc%2FjJ%2FvCOsD6j%2BhBViORW0uDyU6r8a0wDXWq6Hdx0ozWvvWzNqlpEuOduCntfaCrMRrRZQ7HhFu%2FAnGlseKr1Qz9WXpi0q8xgDDoxO0tH7DoztBSVraXvmxCk6mAXZyvJKj9qxy9BJ0wWU5mTqlBqQ%2B%2FmLOunIFYcl9SjyL4AlEknwVVzFsC5ShrzFUtYK6DdL2e4qxxpvyS5vt5ykz58foJbcklneBYSRqzB6D8V1MWxgmQx3aRf%2FcO7mc82zUUHVEKTQrt8sEWA7QdV5zL9wU7DFsv0ltKK%2BIlM4exp8R9iArJ%2BJa5JHV%2FYi3K6eGLlvNmK6TyIP986rROEnyGR0c%2BU1xpMzW9zDTBm626KwaR2QObIanU4tSvCe0zOQH1QpYMe5wMWZc6DbdJ4PUKRP1BeuQIWvxCoffUtLg%2BhjZKAT9Gk%2FFJuhPz4qs%2B3aj6BItux0hegDWWwvpY78DuG95GqeXOB%2FjhzdxgBGMKWOuMEGOqUBm%2FV44LbCXbu3w04ba1VqeswGPaNHNDf4tToRoCoNdzpb2AF5DJ8dBuMf6mKzlFafP%2BHqwDLEdtyhGzg8mfEaKoYme5nCEMgqb2NpCUrdQmE6Fl0OBeu17%2FLfAThgaaMNA48BkN9oov8TjIKhctgkeD3ZMEFfdoD3TpI6QhDtN%2FHvVnDxLwMtl8qSv%2BvK7MyP%2Bi%2B1IOLP0qvoPy1xzeaB7pSjOVkW&X-Amz-Signature=11464fa5512aab1686985fa3bdf90f107454ae3f95ca289ea47d7b77a3744c35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
