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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=2141d80c2047b6622a01bbd3a507ac8db7100cfc6e2b9cb7e7daade04ee93a49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=8382395ed1683560ca73225b4be88e39a3491e6d08f29eb23623389c12e65ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=e5c44f40ff0aebf901da62e8b7d412bcd637d242a633908040db5aa3e60fb320&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=ce84503bf802688089dbf4e9515bf363a43ce92cc470c7fada52ec13f3d3dad3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=c8a65ed9590e14f910b9029560d24e0b176f5a4cf3fd127aae1d930b77edf257&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=eec78acabe23a85ed411fb27decba3ff58f42a03398ab8268f0594fc110b2c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=aec8d841edcb7e02632eb109ea67a50845a8d1dae44755a24f3a640e0d0b0410&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WA6ZOF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC14oYiQ2fWbo3Q8PeGxolH7Br%2FhLKkzGmiBIIqYJHE4QIhAPzZ4%2FzJfUoDu1KlEWi%2BCIOL9NBH72S5gukOpa4e1J2OKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeQlS8FbUNE%2B2fOMq3AP%2FV7dEwyBS7rYtYZ5YqTcrQWrcROXGlLPBoZPVKU%2FbdHYTcdEtuv%2B28eSNQ6Avv5Miii0YkaAIMSNT5mbeClAovLAAbPT2BJLmSCYw7ssk9KI3DNUwfla%2FonWRU5vHPG1poCQ9DfXjyjB3%2FLjlWU8P0TxXuevk5M1SXJ2bCc%2FNDfi4FAQd3XeByYGohdWezd6Uz1WkjrjptKvqK0rAuWZGNrMRFriO%2BGDo9gtgHNfSJYpovgvX%2F2YLjNLmUAPH3RfO4wpvlK5FzaXqycOxAswC5d%2FOD3C2tpmR00DQcFCEgQEx4EDUYwkwk9hu0%2FPnVPQCpjg0JVvs8B5rbQQS35TsXypZRyh0%2Ba4KCcHu35EuAcB7gwN3dqr7gPPtlFfdLEb9taPseLE4X7jL0ZAwedN3eqLNLR%2BUbiOn6IfvZ%2BSGwSA5GjnB%2Bb2kbv635N6obmmKyonfVTB1BK0gSYcs02FcsQHM63%2B6aEADGREzDq4rgQfm0%2Fwe3Mrl9n8zSaBElc%2FAuTBzTGEulgO0YnXxv43rlkxe3wUFaZgOb6GWPGn9ghTjxLDrpsIYLYj7PFTMWGqQYfCi2v3uwEUCPjfDIA%2FAx9jjrXAv78zxq0V1ERbWdbQvdAagC20ioqNsaDCkna%2B%2FBjqkATBU1zYyMIZskcEqdA0DPlAsUrqM0JYlIq2jcF1%2FG0%2FGPWRI3hRJxxlC3kBaUe7tDchqNph%2FFaBALE34gQuxjSoaBiuSw3mH25c4CSEW8oGkyYDIdPX1kwhuOxRlSxHkTB1AhoY6xP1nDeAk3QgPwmrvwkQiOc5LVueP0aygOz9ibHVCa8xRn13brBiLDZizRfVPx%2BywTPwLruRTT5Db0RnIRc03&X-Amz-Signature=17f833986bde6877d3aad30d7872622ff9cb194ce1f301ea107b5d4cf610f15b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
