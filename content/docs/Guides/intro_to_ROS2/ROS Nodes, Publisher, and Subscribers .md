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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=accaa999c1122f948e4d325185619b3ede658c72d968545ee8fb827b2aa93f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=eced44fba3179ae9dcebcf17f02840058c1df16f0ad5b5c5c6dd8798625174a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=2c6e8945ee0b7d536732f91f7038e4fb08e0195681dcc4b9d41a0daf24e71bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=ac39f8cfb3971c2e57eccdb7c06b863725c834b365670f819c97b2cc5d6d3372&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=237ef38b0f0a485c0ce469b78115b56dd7fbc8864a0d5df52d1fd00ecf0f13aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=03772ca0e273b522fdd95bed1f5fe3dc34f991bfeeead1a5f5b61c8bec91820c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=7ecaf73f842a4e24aa8ee994cff8591aeff49d451679a6de5f71079b7506e34e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG77YFT4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxz%2BzAcMmWICbzdkTAa%2FuHqiXxI4aTfGqPsbPq%2BlcXgIhAOzgXtF%2FJsJDKdx0d8WW3wwhZ1pi5jdtIKngHM9XaSb4KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEWK87%2FYfufpH9W0gq3AOib57sTtH5LAdwkTKFYcdR%2BmKVNyv7Ejn0ks1OJv0JCnTClE5s5v2j2tE5%2BTeNqopXzSpfMuXfQFtuxGTSNcRc0QX0BELvJX4hap2sg96vHcCIZprbh5zyCMIqxX4rGe2x%2Bq6OqxAvgrXXWL%2BemWrm3Mj93RVnxwAD9LpU4nOoNhX20NSFKlZ5P5TmezJTaZvdAZQfTNwDLNf4o4dmxHStwKT8%2BXy1lM2jeGEnnjs24d7%2FAmP5WhOeQhUFk1aatMM60zoUNyaqAmAWfcKpI7MA%2FsXM6ZeWzdhSJcfPB9Cp8sTGNxCWlteWz0uegLsMyn5pAey3ojZYyqJmqPQVCgz9Ro%2FT2kKvxaBZqjgCviytIPA9FOJINLRaHJEdDQAPJVr4TdkBCqRgCAD556vKghJDlMML1dZ4kKPBFFFhIscJ5UdOEePCw%2FPQI3T7E8Xag50lKBiJClFDdBhVOlaK%2F%2BaSZ1fjg0N07nxUwmoIl8K0UWsyBhkgzRd1V%2FAvMQZWofmGZhf3XWFMru8UOvwsux%2FAkeZYiDE9s29mS5zDs7xZNH8PVfYkb6w6xjP5kHywzlBAO1dpwx8taZT9XpiW7hWrIZjm6JDBk04FRp6daX87IWR6cvRg3zoCVrOfDTCoz%2Bu8BjqkAR7kEgvz%2F9z0lJEpQdAIu33YZeTEBE6k%2BF1wR8T03pErmj0wGsAzdTPs3vbI4bRUDe75ocvepzBO1bXboC1nYFLDcAjgzmS415VGKKqB0I6E6V0UEQnTCuXOGklR0AVld%2FujP0xX%2FF4ZnjyYiCro%2FbYhzgTaaS2g9WRu2VFZpsbhSN1jT4CfQs1hVP6aT7yiE2CmPZy21OoT7wSzr5IKhuyqbEvC&X-Amz-Signature=0e234882877369d33a1299264d6db466e4fff4130107bf88c87303ee2d0940a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
