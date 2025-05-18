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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=531e801235a6459d003ecdc595e3b5ee9a6f18669cac885de7af89555889cf93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=3dcd7c68500070f24d49825183160300a3abbfb7bb11918327fb9ff25eaf9e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=dbf7645777fbbcb4b2bd708a4d5fdb71a9bd332b883e29725e528b0cfd1342ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=af521419aaef3737ecaa2dc6505cb8503c30bbc8950f277f07a635cc10d1302e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=c446129eb14bc5e6b4e09847325f8c62909079f4f2df640262420b9f8a1c1f90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=ad542d069b46c29f52047c59aaac97649dab59bc04d501aed5db40a78a9f35f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=fba9a2bbbae90112ec57c28d6e5b34f86696304b1818ebbc5fa6acd2a3b2e032&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKWE6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOG1tLzJi4C8JKHMSEyreDuUxdNnnI884rCy12dCOrTwIgHjA9SW0CqbItvR5HSxBLriBlAlldRah%2BAoUUOIWBAwMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMBHZR3mFDQK7STQ3ircA%2BJqWnUfBNyndN28BnYN15yC42kOuPyi2TAqyDCfgOtR9%2B4aAJYnziLGOJoplUz1pVqQjgy2Z34s0rvE412dtp1pF5Sku8Igtjp%2BW5SzSg89e%2BEpQyl0AefYIazvacU0ZL9Bi0XyLOhyrDAkAGLwVAk%2F6YsxrE%2FlQJCrQWzEWZE9q5YPx3Gy3KACG%2B8s7TV72tGqjNke7i5DIXO%2BlxjzmqE9FqHY4ljwwnbExnvGNKqdLj9zoV0DAZV3X9lBrL7fxE7%2BllCkY7DixH9Z3qkyzO%2FHwCa4PNLRe2XqJU2Sr6s79yQYpHngBwFumZ%2Bo9MOU3QMdQPpQZnnkSxy33rLMFQSERCm7e4xRWUScJHRe%2BdumcliLWanqmtIDPMf5AWC0FyE1bAJqDQovWqQqXDkNMtat%2BunpFk2TThe2F5RhjDBg%2FI9Ck6NkZXHoD%2FrLmSY2%2BB0ZG7qx7XC3zWb8DP5YGa7z%2F9H1Kgp64g2m6We96tK5kcoCJ%2BzZ1W5ZNAFNU%2BMglibCpx9YNNVcJlMdLLzoOH2JZPVaPle5ysW5lV2WEiQFSmvenlBp94N%2BwLrixpsDcqOY6rueU2vvbWmVvNp46hK1SkYEH7q6ni2CWNNt8hk7VYgYb126SOoUv9s5MKzRp8EGOqUBeobNTzbi8NBQxeLO7dIICS%2BGlhshDVK8chTEgzPJ28oN14YMGD%2B%2F%2FkZ6ysW%2BHbXOMA2nKIAebR2ccb%2F%2FLyHRXSZZzqlV4YUdE1Dr%2F%2FwhH9qNiSXwnOc3r4LykJYsFx%2F6p0%2Blj1Hbwtpghjeh476LgbQaqfD04vH7dS3M%2FLoU2Ffv2diCAAzfkBXC4VPViZIfrI%2BM5t9bq9wZ4gVjY4maJLJS1a32&X-Amz-Signature=49a5066fa9a2a1b595c54829590f8ea30358fa557cfd8eb751047476814e1270&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
