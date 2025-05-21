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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=e61b6bec0900e641b2f9776b8d203d81dfd2a57608728e768ee1124f763641be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=a00809f3eb45abe9dba0c73c64046974ce7739934c7eaec122da6fecf0382b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=ffe4a3b82d05725c7444ee01afc42e573883e1401f9aec3309646b2ff16f8f70&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=4c0b0805f2c75dedfd5fcb9d13bfa42d80bd915c02306f8cb71773b16f0c7366&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=12adbbf36ee8f20c00561e608ec9277b26ac000265d0b7daf72faaac49ab7113&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=4e372978bec278b8e4f750ba356cd3027ccacead22538db2dd40dbe39e82d016&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=8727c8c38093d953c0b601fde5063b8b3843248042073b66398dd69b24fab0f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKFGS55%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDX0nf5Fssv9y9c%2BwY355AgeF%2Ff1tQ2TA%2BxHBIXSOlulAIgXasei2Hk6LOuRWAAXE254FZ7hgEHp3ZhgVG%2BQumhT0kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeTji4jmeh2%2B06nJCrcAwJPSMQuRZ4upFxj8WbPah33ONbooJFXcdM7B2HtmYQExbYCM67HJMCu76L9ZhFko2vdfjgr1fn4%2BZzAy6cvSdHli6DaCKDTFft0yKnigLI%2FjbAGyKFzvfy5JD8AU0ZFCZTYqZuyGC4vpnjsPpU%2FfwORIXsFYAOozVdehUqQw76gDU8%2BtMO3rSF3Fn6%2FCiLz3X35uwY7fax%2FfCeKxXyvKhUGLLNFwMJ%2Fs%2FXLMCStbMAYtun8yUHnK20K17BlHGp32m70BVKrGoRv%2FexIhCxEUsqsN0bJXmKeHAD4cnpmbNXlU796QJzndURsxifDm0Ab7p7c9hZiunU52kdofGUGMv2hrOpoPt3Q2Ml%2BnDmAZv6XUJyRPCEFz3O%2BXzTfOMPbocgRAi%2FnZt80Gwi1ABLdmfOKJPxz1Whu%2BSwEAev1iYfJG7TvuH0eqdvJ%2BIJRAY16R%2BkQGbdJE23b3GEFac%2Bd%2BGTaAB2wYE7yMvw2VwSfSkl6L3jExL7cq2BnnMhlc0ajDDAX8e7D1wx19NGp0EWENCQcEnBRDXoq5FAioCyKpJ4otmvnN7wxjWxPPwt0ZnWFKysckYL0usNfaCXYItk4gj8u39%2F4TcEfmDOhh7jfjhtgYXVnsn7%2BiBhFZNI0MMCGucEGOqUBz85YyVq22coM%2BBZhHoExA2CeUIi%2B%2F5%2BwjpO6WzJh0J4oXL6QM30n6t4JzTOXkzBhM7rJfJfOQd4buvknew%2FCywKVWbOMV8u5h3lztXEhEy3gJdFWhUIi1W515SYjfHn5jwbG4P03HAgDqhsruHBoljoSKMuqh7QXwfv%2ByIxT3J4cvdE5g7d%2BV3mslcAAhJug2qX8NRRNJLYeovwTYq6SMfvwWEPZ&X-Amz-Signature=8567b601e3424ca8030b7640facb7650262805172337247d311462688538506a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
