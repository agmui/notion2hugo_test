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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=9b602e04ea3781d43933d646210933f035d28e68e5c217b7271778c8e2dc78ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=d7639e34fb4f99ade3191375223e2c406ad6ac5bc82be219ae5936b4cd98f75a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=2a91195a1ead20e8d28afe8f034d8837d76a550d2cfa9b698108711713da106e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=71e785b2217f037f50dd722e0f3f871f6cd4e66d52de612f89b8491f5c4d7da0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=82006050eacdd952f1871603f15dc073b50bbbb78a49530ebf4711ce9fba98ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=721033b65a66bf22a4197c2e12f2b26fec2090f1a5e38eebfd725c7cd14a2dda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=181332f2cec79d45d479b1b63245f4ceb9ae653689fb5de5942fe8a9a225ff3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK64LKS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEAByZR9twM%2F3%2BLQQxqwKEcx%2FXa0Y8prwwkdnGv2FgdNAiEAqeaPgcmMWzEhNS6cBXGB%2BFRgzRM1YteWZ0Xj7%2FzwelYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKdMCwLt3fHKLlGufCrcAwlXhvjwvFK06F6Jk%2BukVvExjxAHM6PUOVP7oI7ppkt12yfovw2Z5YgJ2TWiv1TJx82s9RbhxzTen8xgUCr8PC43ePbl5Cf%2FgHY7pKUtiwD9jCbvp9wJ%2BzOG83NbCxDnoZ%2BGfNQkTXIrXCNrlyj7lXKZujUs0COx7LJde2NsiNVzlQSfjqKjeCp0ZWLXf9ZCIzKB6apZj05YnOqOzJNqLAzP0ALMxm9OpSbzv6rdCGRdT4cknFs8CIoZ%2BY8btu2M3Fzgv951F9En%2BSSD7Y6%2BwdzO6LcgkWWqtPnitN2Xv5tKoA0uVuMiB8PVVHNau1gkJq0QQRVAYPVa5163Dxth4PAI9ty85ox2Gidmz4ZzX9vwuNGR8YNzhWAhKwUy%2FKbViDITgHVoiGkMQHf6bWPGNPXezcYF5JTgtkF4sfZfymYvpBhsLN8b5hTROZms%2B0859kbXwx41tf9%2FdPrXWFtj2XiRnxMeLTx1oyVQnpLWPLUhTaNY5Z362iISJvV%2Bwa1tRV4yv67rfZKKC7tU9%2F4be5r1U%2Bnw0f4lTZyI%2BIhs3aZ94958uIeqC%2FNSAL2MXd6yIiCAJtXaO0s%2BlkHjhNtaW1mvnt%2FUdm5S9nnSOXYahlmhicuHbniOZLfVWJPAMMqGgsIGOqUBH4fr6ACOmgM7dyr2sSeJZgVj8B1tRgu11v5PDN1NIVSsEZvaojgYI%2FrVq6FhWQLhBeb3qxB6AngmluVOXhHpKO%2B%2FJ03QZ2rtWPrfyMVseWdZlsRAmMDWAj%2FGkUnOpOKcsZHzfAj8GV1ROzKeoYSlwqFU4J4hMX7wD%2BGAelTP2Wky1CvJVT7WE%2Fn%2FJaBEAnOs2WzHylKlW1ajIVhYlB6avlamaer3&X-Amz-Signature=e73596fab9da39545eb881e87635b5a8035b6e968db74d24d614c5fbed284f58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
