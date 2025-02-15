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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=6502c215e5070f01646732348ee09009b0247e960c0afacc630c545c29c678f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=c3a735174c007e816629ece63a83f60b7683feb8527c32028aac942697baffae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=6eaaf7cfba788036c6f717e68604c5b7a8786654d942f24e0c8dd499619b7a35&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=ee7cb709a87a278402323f1ca46f68fb82f0a6e441b2756ee6f767223cf11d12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=e14110e8a1338a161fd5715e41fd25994893c85774c6a13145ab458e2b389c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=2db73920781fdf96e874205f9b4af9d6f167df3ac9e651f479e9bfa824fc1a83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=73770b745498f735dffbc60a810a1c60f324aa9bdc48eafad72f8dc9f6bafdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAYORIV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDDwfCAUmiI0qx9DxXnh48ANgZl%2BcqVtYHvyK9nNecLPAIgHoqMo62pxyFSuP6T%2F6gzDp2JgbB%2F6V98U7qWcgbxF%2B4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFDWM%2FXInXP%2BX97eKircAxoAgIpwllrPWZMoUi5%2Fm63p4M17pY89tVzPRqVP1V2aUt5nAzz%2FtAPeKUn5F%2BG8t9Pm%2F9zSjvQdi6LsPC4gzsbd5Y7C5um%2BMauDK9mZpTcCUbufGmEgvwWjc2yRKy%2B5ZDUV7nDuqT7m6dHvjscmrL4v8d%2BRs%2Fs3tVckLDRTfNBDxCarjmVf9PU%2FbatF1DsAsqDQrKYrEIp0EFMxv0gShZjXYO2uY0dPWMxE14wslqOqFpdFNSSf4MPl6p1Mrdz5z8bCCSXgFjREeyPTnMOVT1fSRub2ANv51gwADlVONJue4m0lR43vG%2BtFgpFGkStmZJF676f0vVkAbDTF5Kh4MORr%2FHs2uh2Bzoa39xxk1oRLJVlC14xJjepN0UBGa5kDxIebNz%2F%2FGwcL7f4Ik%2BsR0COsENOwDK5GAV%2FZb2yB5x%2F2WWNUbEoK1wCWGZqQGCG4M%2BMk1YTyzzNfE0M1K6xtjwvFTDdKWHdH5S1tWLDL9qLbVFT6oYRwrJMjRYf2CMAe5QCswluGH0lCGHkFL%2F3XZSwTYMc9j3ehL1zqsSY6HBIgq1AnxY23595HmjkdGWClIjWf0z6nHNsGqrN1K8yKj8zkQZljO9TdpPjt8KAJamosZ3WjLBCIPYmLnJoyMOXMwL0GOqUBYXd3MBAJDYafSnNAPylBC9NJnJAoewKxp43YqdEJzzt5s61O1XiXFhpWlC2%2FyXKBFMs5JQ6rgx0qhrxCJJX4xcbmcx8tjrgvx%2BooXNyAr%2BAdVwkoUi8E9kOvc%2By04IZ1ijbj3jgHlzX56hWdZ8WhBB%2Fjxu8rM7F4EKuaMH%2FJbfu839PIrGAwEwGSN%2Fpx4szzIZAc5B8RUuY8pnt8Mqtnt2eckciF&X-Amz-Signature=bbf3a8b7bc999cf6e9be538380566c79748e8d13fe30cce1e4953e555d4cf572&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
