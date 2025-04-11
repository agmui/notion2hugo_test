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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=5bc310570315d3345317069467e0e28d3c19c09247e78e7211ff7de368a1eb5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=a196052f8fea395c8319b9dd7de1cb0a7091c3f92bea1f66806ec10ce5a78cd8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=d2b2eb175d0e51453a5931ffd94c6b8992a890dd10fd09f6be63a34aaeb8d28c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=e9aba570fc4306a1e208913e253d463c24f982f5f7e9fc234ef574b7adf38c17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=cf6309b0b90e89c7c5dafa0925a965e35279efb9fed211bf250597179126fccb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=f62a6bc96b5a1685b3bfd7ee66e18865284458dfb778a204ede6262baa4b69b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=2457066e3370e6b7f852c9667f004a0ab7db0e2f0e223a0eb5ad4db856e8759e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZDUYX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDL53RXH6mj7ikG76tkolPFcDS2oiHb5qjmhIVUXe9aCwIhAPDefCm%2F6QIqf0DrVJ3770983yQxcyLmBEGSrMdgRv4PKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1Voo8tFd49KQM%2FEq3AMNisr7PG6YOsXG6fwvdWl0Luo7k1lz1Fb6fF3SSXH%2FbahCcQ1WcxTjYgem2PbYR8vj4S%2FVzigz5LApEuQ0Ix4VgeG9SyZqmVLhGqEQsSRYE3FuwIqiz%2B36oqjTwePrxsoT0eDNqMNh%2BJzHX3VSpcQ2r40thgcbhfiN0spQW4qt1AeahjicIJEgjuUNoLTD9W54PDCT5CMve5gYct9LGJBw0vskeACn2lD%2BC7IDsmTQykhMfV8yNDPmvsK0FhngmRPHVmTQDObWLi0e5V95HnzYzpj6o1RpzkgiETuuIucL4pnUZSG79%2FB1P8w9oLEQFppdU652jJO1u7yscocNlCk5jwDfuC5cZVmVW0DYWlgY4yA70abhZvU7JdWDnIkutHk2x13zc%2BIlaEJ8dxbHJZRS9lCNGkkMi1zAFAhCbeDhX9glsZnKJE3JQGcrwFu7FZweTkfgNH1PEUYtSugxmvh2YFj4d8yaqmukiYupc6LfnBOb27rQ7LZx4sy5bjt8vPMoNFGc%2Blx13eiIW9Wjhle6FJxY0Mq8K%2FYi7ivlt2yGoqGHJDhVyfiPyKIQ%2BJgaKkGH2%2FtuPQxvjOsrI4w%2B67iTgc24nghdbxjlXQOn34qw9qGAMcqmGthWdK2kwjDYjOW%2FBjqkAXMVMjBUUHs%2FHgoXbvtzVYa3N8kJf6iClHdA6CchcJBCScMWc114r5%2ByDaCAtjafl6aFFLsBCcMf%2FEyxp2kHT0BcIZXKlL8INZSASyk8mKq9IrzUCNB1OJi73faUk1RsXy%2BvcGsszuf2xydGFiryAlmpk37tCuU3HBfbAx05a9DrVRPBXV6x%2BpYmLWJZPwKAl9P64hhHHUxntBY%2BUPeaalg8ZYAT&X-Amz-Signature=15def3b2b8a56d5510612cd7efbadb55ba415b1ff96cb69fa66480dac44bdb48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
