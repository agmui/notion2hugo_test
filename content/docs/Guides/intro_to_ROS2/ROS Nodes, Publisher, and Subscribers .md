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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=463cbffa5ff944e0d1982241bc6a6bde21bead29abe97e25557872dd95da7716&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=ff6596d1373ec0643cc08ed7703a066945641e73499d8b0aef4e9dd237abe5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=880216b34f7e7a418e33e32fe48941286040e13896c279ae7f594b096bfd5c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=37842d43c3bd8710e57ce95fa99717a64532fdd18edfee8254420312aa0f56c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=9fc398e89906eadc8d2ce54f1ad7cd8301c4ffbf1e60720d06feb002a7aef272&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=d03e6eb04c1126668579ee590e3a9fcfbe7f6e1437d815fd141babeec6a572e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=da1f41744cff0457598838f421723e5f4003a39a6e2c642b1b23854e830d661c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4JUJX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnApqTeKYLZr2W%2F61oQIFhvw5QbaJb9PU0VH5Gm82n6QIgLD4LiStwUKLAaI1k1ELz4fAGWSIv4wvh53CUKrNhzvsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzI6nYbYQMT2k%2Bf%2BircAxRvE4C6xMXThCa3C6NY6WQg8jpHLuapyvtYxXP5Gh2oBDHG%2FGiw3qBEvn26kFMIKm3RRuIDBhgL0MTER5HWKg8QCM69DLSQ5HuORdwdlDws3DIvmBJPtAq7YYtC9xIZOodOtkTb6F%2FEanmdk6drauVaOQtY1ttrXhkXZHOI55RufU%2B82PKiLjfcEkj1H8TcUrG9ld7lersqqKagw7OjXsnyoectNMKxDURM4S1W1C%2FkFvk2vnFGcYaStZn%2FihrNEAFLdp6OyIDR%2F8NTe4vaZyOom0%2Fsg1872fiUFoTcu9zX%2Fuzd1POPXJ6DRZQQE9D35zpRIfvgB8arWlOVP%2FdutFwYbWktqyWTTU7EcQFTNQ78hfG6kiBsDsZTyornMeiC4pqJX%2F%2B6tXCvY3%2FYATKgHe8yDWGv2mGghQCqaXNJLWEZvp3fDLHRBHo93og%2B9Xl251hz0BkG7FYZY0IiDhNzDLGUFgqkt4YiI4CW2JRq%2FUiofg4NXQJSFEtPqsGFP0m05MVR9qBDk5JPNjySjrijNW8ceQ5YqrQlX1E%2B%2F7lBzNk7rRkHA2zumKiSa7hrd04a6K7LcwqiI99sKOckKjY15fSV6GjvK133OPnol2mD%2FuORw9N0ZUlgEN4r4bPyMPaXs8EGOqUBJUsVcKRULS5HTtibJEXfG8OR%2F5Rr7btl24GjW4Cqr5vFyonBxGz7itPfGlrsFthcmn4MQhn56L%2FGzkBHncNwz0UPnYyrifLi7FBnhC5mBvOFkxZkdaq%2B3UBoftXTKEsep4On%2BWSQSKwsDn4uHxipSJ9g0GHLqAr6gmkPU2nsBTJBPqiWNJmYg7oziWqwAG58dG8DXGiEgsQjK3Lmk8XwB6fgOAet&X-Amz-Signature=389ddb714a3ecbf3cc428723a3ca9be4f905835af13f7b7e245536edfbf45f81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
