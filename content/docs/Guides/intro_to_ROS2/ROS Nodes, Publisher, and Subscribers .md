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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=391638bbb35399c946e8159d9db676ec0e655c5163d293834e27a2caf08607a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=287bbcd7874cd09e780638dee7ea8c56a553d24ac964122c72091e9501d7ca5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=754d8c6f0339cc5ef927338f959e1960c6b6b534a3b9d1b8e8189526628b8937&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=620ecf3113e8ea93d548a8439d9d3b818276f53ab6541413c431c5346dc44e71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=60bec8ea54ddb00dc43773bb99f6cacd3f4501b7685217a75e88c09af7119b08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=cfcd9ef9b96f073ad53e8ec43db450a28c6ac425a4272f65a97ba5e893cdfc6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=8ff0fbedff5f38c3c19c4e349a60f75ab58f119b37d8ae262e4e97d9228acd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYMGN3J%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgITfr%2BBHofkCe99o2NoBl6eQzKkAalcCnv%2FVqh512yAiBULSkMS2SA2sKhbHfHE2gyEDeDuZ7vlhscpSAUs%2FzdtSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUnIoJGezOQazw6UUKtwDkenLjwnsXN474X8H8sD23F5TED2TvRbfal70VEwiEOZZlFQypT9tgZgx3%2BGkRQuLGE2HmHopwfGy%2FKMT8iFHXEZ35XE6kXrsr2jsJWJPEdWZv3oYToNPl2M%2FcTkj8Xv9QJ%2BWh0o2yjVWSEJBNEDNw66qQ7aaZn%2BT8OMtlYdFUu6j8SxFdhoNMzptxgyxzTXVK3AKSJ2XUMvIgyareqWKkCKAaXHajHZpUERpcP2zWlTzLFinvHzSOwlmKzBqncGCWhmg5%2FLn7eWByv7u9RDNL0pJbkU7IJafW7MbB4Nwg4QI5PLYOtAzSp63xceIlWbejZvheoEPHpxknfeVllDRmHa3EDFBZCfSONSxzDYWCvEZYg%2FeJHwk2HMvhnn5cMPawIRMienOlGgbiFcOcu5WZzxsWZWh5UXxslCk1ekgkDEMo898nui%2B1D5fEUl3I2ZltAWBQ8hfDPX4N6a51VQuppQy1BC2fjGcJNRyXZzwXzFzbxAfGRs4Xi9B6zFsWftoWVpyhQWyLxne693UvPMYA9jOnMY8Zrog1dpc%2FdLLY9FqoVn8qdvDRN8sRymnRS3clzmrywvbYF4QWTy6kwa7olRcsH2mKCblNOBdNiFIBJx4172SAK4HlAA11Wows7eFwAY6pgEVKZOQezRqoBPI4l%2FthIAbRq1y0WJWxQwnI3XudAIriJW63ZXofENkkH6ciZIBHFX2opuetqfcZnbMf3ZmwNo5ftMKLn6KYnkMhRu10wX4G8byBQkf%2F6MpvsL8DgV3WU12a%2FuB7Tr9yZn412Vt%2B%2Fe114DUZkMIC2QU%2FCuYU5n3Q59KZXDFNhNIqmNnHsfi%2FGk4es5Vhu%2B0Oa295lD2QW2wI6GxVLGZ&X-Amz-Signature=546c6a0f460c857d9981d37586a002ac91fc7ad0427d05f8ec95a6501b66ef02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
