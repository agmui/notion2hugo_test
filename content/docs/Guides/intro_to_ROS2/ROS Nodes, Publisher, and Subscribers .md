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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=3c165b31a0602f2a8dd1fe2b11b07cec07ea3be43e3fdec157dbefb9a2c721d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=e5332db31ea759eefaa16d0443af3d60a662610d95c6172ae102a71335ca1768&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=e7a6af119bbcc305647ff09d0481da6e51428e252da0761497d121603eb50387&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=9fe7ac627c6d4a615ab90b7bff3e53e56bd48ce2d12738c24ac3a8a2f98408b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=8ba26983868a0b955b5e9d66c2cc18659cd1c7a591fbcef4beb0bdd80bc65a87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=431c8f3052dd3e7bbac61e86cdb80b711746260f2a880d4980606d2f90513d89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=d2e874200143d564335523cce794051e746b580527d074dd69de7d6e22adc94b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55WX3X6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFRsnhNMnThhoJAsGQ9JjqhtcirbsMtyf5DFtO0x4xS6AiEAt1Wi5xfIqUW9KMsXAZl2Vi%2Bf6DVLuQy88mrvC6uaZV0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOSYFRyCz8db6V2CrcA983JJU9Jvyb1E1xa9ItHUR1WX295ZXtqPZLfLLcmA197Eco5ixAq6TqYr8t%2F%2B8N5cLp0t%2BVlLCpe8qn2yBI8JnAbeKynIh8BK2rt%2FloWS42K1ljk3h6yvZRq6%2FaZOrjy3A8xgGvwJE%2BttHDFaO0gEyMXLc6YEXb%2FZdbtFDs0sdd9IvU%2FOF0HooSXX2ScTNuWj70e7jUqpgRHzki1ewty5TnBW%2ByN4d5PoIdwFmTTiBR%2FXefsfRKRoZmKN9ZsHBTKTljkR7lNwMq7d3azBLoiIO%2B%2B%2FBUqs%2BX8sWk1AfDUHu%2FG2STfSZP%2Ba4J0thSK9su%2Bj7aCv6YOHPgvlAks4tSd%2Bz6meGqt%2FAbctCtjrUgaBDkInOnnpDzIZNZ2QOaLaFkjgqMf4klpoF7RSEu8Os1MjucxQqAbshk3LYDWp9HE2NwOEeyRURvcOwjkU8Y6OFQWF2lB%2FEgjDGmmXOr3Ov3KHJu67GaJB%2FOwvQKrs%2FSKfnsqPC%2FmK7uXYmRoc47KtboKO0zfSo17e5T7fcubaCLp7KVwL1BS8x7WX2rU8Y%2FpZu9Ar%2FNWL6eBbgyFUVq3nB%2Ft%2ByaZby7hg%2BXxtI737G3O7zPhDraXzIp3A%2BJcwvmWlR6jBF%2BWv9eymPo8q5KMKy5gcEGOqUBqIKZFc6aknT%2FwopNHMayilAOInkCTl4QorDGnKT%2Bx5g5SF1C1LBVTL%2Fa205ELH%2BXnmOyjyOcoWcyd01rut8NrdpkeEtmhDTpMLNKgCbAgrxB%2Bib8KunUk%2FfmsCGcfIjm%2F4btpV%2BlOYE2tKvsePQjR2XVVzQtyvMPBpHSg%2FkQI%2Fv9A74%2FhVPLpKRngulCkQP%2Bpozk3xN%2F1x%2FPen7c50rYTxgIAQju&X-Amz-Signature=03a6ef26949b8f9dc3236a6dd43043060178f18304137e9a7b1ed53a534c536f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
