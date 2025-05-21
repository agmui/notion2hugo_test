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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=9b9039d47d422e6af12cb732637610bd565ee88b1c074426eca17fffedd0bd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=d1107528025fe14570cc797dd9c2f9d450a344d8dbde8df95a10c12cd1862f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=e4c99c7fc4d299c4c8f057c7036a81bf2a550ab424096c8a0597cd9970bf6ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=6a6e540309391bd86ee800d8d7720e0691f40f8f08102b35c6a78fe0adc0a4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=0641fabf88881c1e47a442ff80f3cca4fa2d94ebc00699fadccaaa7cf516671c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=aa7aee3b4da5ed0458c323058eed183e4d4b6fbaf6bfb72436fe574298613f27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=654eaa74f322b360a542c9b76bc77cabe4cefaa7fceafd61c8623b8c10a0b981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVNIXJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDrpSSSbAg2eCLjSVOsYmyCHA%2FpcIlIwfzyoMs07eQEKgIgBOBI2hfX1vUkdmxxJWdsy%2BjYj8qdrqzyFcif%2FsfaCOsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy%2F5CmXSkpnewuYtCrcAwhOTj63fzffs7Mz%2BGYhFJGczqCde%2BFTiK%2BjYE6XFQZKBPspesU%2FWXsNc86j6%2BkAW2rqqsfm9VxoaSe4M7nWNJCGJR%2BELhFTDba44BIR%2F%2BvAGYezFlIegrrdZAI4Xy%2BwmCeDi2rel%2FTN1bGVVbD0Ha1LoIbfcdlUXEMFdHHQHlurf9iYqYKX1Ngs%2Fs%2B20ZrwFkk%2FAbZT93EeUrsd0QO1X9mPzOpin3Js9vh6sVOpJAd1emXY7DFYHdHL5cm4mqbc65cylcQeM5AHaUOwa3925cC7G%2BzSZ2eZBjlGxgXd%2FioebUW%2BaKaSnqX8j4ZpHY%2FBerus%2FcjA0SQoakxvUKgaEjpTWadJELizBokxr4ny%2FznVB8TvBzIZdGiI3MsTu%2Fz8MWLDXj0SirHgWm2DhGyVFHDa0w5F5e6ESf6eG8mTzikytuJpORp78kpr5p0GDA6vOi6t9jceySYTzncjq39N4aUMJ3mnHizHx9d0ZeYjGisQPGU9wnXwh17shp6aHCOgVvY4S%2FLyeDGUw6XUwJ7HTelj7JaRlIzmyL3T5mmMVbfMfT4tXyfGV%2BXRPgF9VvSDiCVGobTRVPj7tfzoznjxvbgML%2FrpYmYKBSecidShgoGTq9rAY%2FhqiL3eZ%2F4zMMHvuMEGOqUBETuORvhjuSyrBPHeMWMwouXUCcSwe%2F9DIsChZMpe%2BPIa1W7EVMbIfa7KDTzNE6sN%2F9YRgzrZgvvRDhKE5pT%2FU0CEZy%2B36Nzk%2FWZYU97r4%2By1jnDYi4%2FW30jKfJuReFS4c5YhzhISW3DE9tpdcCFDTEMnmqW5pesLyaHi0Rva6qiOEBgkL9Fchp5pWKpj4F5BrLWd54Vl7shP1xI9gOWxupMyK0ST&X-Amz-Signature=5c9141196c2a6d26f1fa346314a17b19fdba1012a224ffd468e72b4f9d987b47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
