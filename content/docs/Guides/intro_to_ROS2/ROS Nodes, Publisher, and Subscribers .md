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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=827253fbcd3c1afa453a22b72963648188e799302c41f318216408ec76fd39b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=95196d93dc6a6fbc6fa196877645dc5b4ff2ae9389e3ced50ebe9f20d18e30dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=d9bbea4e7f3d43f0d55ab8b48d155cafacea104f3c5fd0c81d073c9510456f32&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=90d0a165e059a3ed4faa3f295e61144c95b6e65a8ced809d3cfe0bc0af1922d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=cc7cd17e4241e3743167072d832f8b27c8adcf4a1c381311c6cd4934343d089b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=9b02db3c81ebb9af4088f63fbc013bc00474c23383cf0954b24ed116b3a75854&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=cbb967302ae7d9b1a0507027d85b01abe1a989baf220ee3abc799ddc7d7a37aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QNW673%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbIaC7aydF44g%2FacM%2FaVLb6BlZnxDWkGkFbvgRxe0X9QIhAOteOydZWZ829mMKVxl1T09nGTMceQiGMJ7O2awXNOBBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2F1VKnTigSock0Uoq3ANPTeHNaEHK8xdYsBOjXHwVd7H5FQtEOda2TeoZRvpdGU7QZUIbcsMG80xb18fXzVDxw4sb2rijcZr6Y34WzGkhGRp19qru%2FpwZhxbztoImbtpy13t8eTAKOMU4wnrwxHDGCqnH2nCdCIEdP8Or4xjpuG%2BA7J09Eeip%2B64GLSCgSTA24gD5nryqZ3hXUrPsx2eOkGPaIXmchAE9%2BN6bBtz0noyAnmkxrB6hdygFcyjDfjmroVSNlAz1%2BLAqQGnlVw7Ze88FnWtOZouzqfyz64yKU14plgRPHVDp8CdWJ%2BFe178JkewIWECQebzip088FxneT3dCxUQ67HaZhVNdvIogVgnXf%2Fdppafd%2B54R9wG7hK4o6i7L7BcIxLuBABSIA6eebnsA8CLKbuFYGd1G%2FFnv0IzyznDSsdYbi0%2BNQly8KIFOXTmRmwiErv17MNmCHH3JBM0TwnSakl0m5blyTtSd3VwlhlBtQ1PDs6qMOP1nPGdP3VqyC92vsbaoN2iCFc0L9Zpk0e%2F%2FkwmsoQj%2FbdnLXxvJdJOQjlJAjpu7bXYxzUDSeHYkjMAwYXUOyXToIK0KKzPzmIRMqEJBAzYdfuUHFqhN%2FvZ2ZHtlMKTx1%2FAdiyVn9BM2ka1js0ADvjCsxqXABjqkAaex6SL1P0%2F9UxF6HNr5XxOhp%2BD0u2aiMgfwEzvrirmb0RdFesGZne8I65E438Kx3d0cLFrKcvsQkpAAXCRcBPKdRAqj3Cnspmj4qkBT1xWXLXCGiM8GbkKZ6gl9A8VQDlM8btd6nkiCbWWwasxZw%2BLNG%2FVcn0dUnyhPOMVBnJuwm8X0pqypFcDYvGENB8f3l36k4rcDXWfYiY2FuIvCKqDaSeY4&X-Amz-Signature=a99d12286cd144ed5ca236b5c3b9c66be2fcc49c2879135ae7b88a87d4661ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
