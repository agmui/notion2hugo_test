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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=9a413174dfe9f5adc1197246bcef5c04d9244f858de0ced5039db2589a412321&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=ff9a6cbf31238fb56a15d77dbbec5682cd7e183a006198b32319823ffe23d4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=a179b89d913f498275764035c769e84daeb0eeab6aab008159dc5a44ffdb25f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=89d56a5899fb56ef42e959a39fb52453bd4c03e55ea733c47497c84ff4e3c329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=92080e8707c62b785c7f37f6e0845bf5c3ea9d718e9542962cbacada9f89cedb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=f7ad39fb14293aa1fc26a103cec3467f610fc5f30a7a99aefbd272312b7b026b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=c7cb2065a1a00aa18c034e57b1cdcac4d21146b88558b1cc444a67dcc0734ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFXZWX5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfa%2F7%2FjM91IRqBdDBdm4gzGCPPRC%2BB7dyPctrHhjBFkAiEAiDGSok6hg49crIw8E8GjcjUypFnjY8ehV8BISuzmC2YqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr8mfn55y67gE6iWSrcA4pyp9jqj0%2FKARlcU41d%2FkoUkfMUb0y8AgHK%2FucxELqYAeN3nQq93tpZl%2BTUgVhXXXvvF5g9Eo77KuNP94TBACSp5z%2BhfNqt84%2FqtLsyV9PFvM48EhB2JPaxgXK3BGDK6jvrlOL%2FFojCehtUsDb006MiwBwIi5embLraYMDokxf23RWdkjI%2BjrkAeGwu4NUPFlXXrhDZ2d74y4kQCmu6QrCEfEDRhxqm5lUJEqeCxSxKWeuoyJNXwKIiQF7pqNvntLJntZx1ePxHPVeWavF%2BifUm4lh7qJ%2BG6pMdOQzUXzJmxakt5qEOFomoa%2FSUtaL3NJcJXi46Uxnc3g073k1crSp8xMtV6N%2Fx2aKpiqq%2BHmkqBfww%2FkH3wIXS7bbXSKqS4IqU2dLB2aSgvzLPvnV6n8heh1vu3WYJ8nY3Yi1uTor0yOdJ8wgh6nhCjUJcPuEkBFHRuDCYFjiitJ0O%2Fkb0TredkMY%2Fwq44FRloT7f92nj5k%2B8szaU8QXGHEO82NnS6ypCdbGyMGIFMjFjjYbKpooJHBwFLM%2B5lbs6%2BaTK%2BIqYVJRNiRc9nhUZzGPSk%2B%2FNBQRriOrSHY0JcNUDO1waJQJGB1vCNiXR8xowOFdcYr6255I5oo4xm1tEs88zEMMCGnb0GOqUBcTqfLtjtxVP8%2FvFb%2BUvkvXVnod6YrTuQGCUuOyhUMwAqX%2FXGOqqXBnlazRNFLW6wNEk3BZwdaGQBorUkJMyGkuMlVblhZ3zHaxT8oyJRAgKzK%2FMZTYo1X5A%2B57fqiHAFts9EqoRpGZiGqQ%2BDWUoFqu7kcUZWR%2BSsC47nNLRM4NaTmvqjcjgJSSWyiKJ%2FCJN1qMZkHtQZ3nkCRmOYqKPUUF9racT%2B&X-Amz-Signature=96ffad9f01660bad5f9b67f288d8977c7f49f2b4369a67e0c288893846b12418&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
