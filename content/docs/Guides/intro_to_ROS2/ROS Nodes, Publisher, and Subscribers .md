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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=1ca7cd65527eb0b7c8681ca972c8b6fce9c0537a9d23b0506501803a03a5c527&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=f2d5f7540d8b159ed76a98c025f5a83eac39ccb6fca8e0f885f500a145464583&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=8e51ed57a0f5069c200f4b6e1722d0eb2c76bdb48ca1f55a47d306fa6a9ac93f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=e117595e3031f4dfcd8a2a95e06914944a3c9f5661ebe9d735f9f6d59702c17e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=5e6d394daca94eb20bcb8fe1cc18897103752493c1726e89ef4df1722a4d5f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=dfdd5b6c926a842db2bc64efd11699203bdf3f483fbcbcb0c9efe56f67c1c466&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=3c838ce4b05cf7194d1a1aea376e26f0841d1e2f43db4760aae1eedb1047850e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITUUEQA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFbdIomSoRbdiZhz7bNkugp2bzbY9OOmcrENlU%2FRLOEQIgU16GmnVLzHFAoOExLQyuN2LhIzbAYjdWzOiv6uq3egIqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh7r0WMGVUGhWHAqircA%2Fmr%2BAGthlnJIH7ALqJqXBaiv6qKTcFJDouTO7fmbQ9z1YTk1Dm1VQxd9JJHef7nWetZeNJGkNxwSIBlKYWhh8f%2F2VK4sU2HdSr66QlDifffEsv9zc0cySCOw%2BoYqvGoSXb8tjngoUV2LjXwBmAjChVaIldYe4Xu%2BBMoAXXRUNSxSYL6K5bsmMKW65Cnj6XlFXnXzVxlz1%2B4%2FBt7LqGW6iW6w%2Fvc0TD1qXAdbqzMpm0hikY5SQhwVcMZ9TwR%2BnQ02WZZYnRaQKeB6BGiMHm%2F7Em8n6%2BqdV%2FWVWl2R%2FeKBTFv3kJmK1LVcJJqHNT7EiQgq%2BlnCYOdLFUKkBeZi%2FaYFtcrg6JvziRRPMDlHhrCCSGsPB74j0Tzbd%2FAg10E5KE5ZYaPoIgfn4ZuV0NXg0jcje4dBpBSZdt14LpwLjzzhTOr9cmo5TNHHvinS8ReopAshGORIYBTf3PR0vkDZtR%2BcZybvM4AS4eiKtMxBN7KvzQ0iiQl2AkM7awHYGZIgxqQna15hhvNl%2BcNTU1gk2njGMZoNwRzMGJAlSFF0TDAxRKcsGlmwdA%2BW1x0AWnOlhphSpInmrWup4P0hni3myBDmE7Cy8%2Ff0MAjmS523r3%2BhuXnUtYDJaT%2Fj1mf%2Fi30MLz%2Bhb8GOqUBU9wi4qgjuH%2BvSp2qO%2B23BvZHuWtQFlFIDqMq7fHGG9KNOax8fPXiXOMt9eAS21S9yGAOhXv4N4zuRJX5fx1bLhi070%2FDpRAinQZE5I8WxBKG%2BF7WzB%2BkrAsBR8x4aYOQgSV83mwqf1xbn6HHiVlt%2BtmpF3O6DPQp%2BbrBu3HbrOBstp%2BK%2Bvonjd8SJP6a9dQYBLnfPTurDZQsM1zEEizCFfkHdq6G&X-Amz-Signature=b089ca9c23129abab67328b01aba716920bf8e9f94d59c84ae0ddb71d2e8c634&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
