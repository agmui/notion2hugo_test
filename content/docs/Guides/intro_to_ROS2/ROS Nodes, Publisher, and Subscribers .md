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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=c911e96d8a8d4c5e95144f9160366deac31eb17e6882d690f8ade59ec1570ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=602111e932de9f311c5277291e25868173f5e987f5e7e4ec92c6e796872e8707&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=529c003c4b4336e2128fe19f759509e575792ec465a6da6c9be050a3624a91cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=edf8e269c9594c6f01ef2ccd67c50d52433154fffed74c72263786abeb8f2713&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=fbe6272bb38cc1ddf2c5b91b5b871f5dd03f1da0e7e4b01a4abdab174bed8e82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=997ae255e0b73f193c0e0d73956794e1ccfb8222dea9417cfe0a4412ad7f68e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=c165a344e993e797937bdbbe7f08fbfaef348aa1d8b1dd292db011933bb19ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKB7B3R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPZGUf%2FcQ6IF81TZ%2F5rK7i8q6ua7clgGudSiUjx5HsAAiEAzRN2P1ONvspfHFGEyEK7SVrGstukna%2BGgT0zN61m6Ssq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEmRqXIs1y2eWO5%2B0ircA4xh1de2UHP356Hy7YSbJxYYt60pGwvjpaUpGkWiYiPctKQERTUFt8B%2FVnbrV%2Figjc8l6SYCcuNG2fSH5EEZZZeManmi5rNbQcnxW%2FX1EBUdgiELeh6wGDO9xWHfGKN0%2BbkcKiz%2Blk99Rc7r7%2Bm%2BxZS9LU8QZFC47uIAo%2FVxMG4P%2FqwpjJmHfVcKS0HsXnMoLJnXChXBTQUYdjEbAgK9DkR9T8pSVcwWbqcRoG9snkHmH9V26LwvKXbq0qXnGNFAg6X1C5Ama3GLtPiqtcoSzJMX7dab4peVPW7gFOr3K2Kb2%2FVPteHS1vjUuiBdWzR30jQSr2UZA%2FsAMf4Zqvwcnfwp9dBRWpY%2F3xDYy1juG9RcpdhYN3wNeL97cAHymFVU2cNmsOFaru%2F5ssc3zYtMUmmyQ48IZGvjKzuEuZLNBN9GHfv3WCzA1YZTXLlF%2B%2FzXnq7TArMFV4qRquFx3WyGD0LJB9BClxvekzkNxbUgzDavFY4OBK0xVMKb0bhUGN2z07KnyVlkqL9gbx1dI2kptjX%2BdubC2nLnbXKa0l5mdkT71Go78hV56NSpZuqVi1qOYYe7mt%2B%2BV4EP1aEAN5Mi%2BpfH0azk9z9TZcsgezZnEeGEWX4NJKmbffDvwrwuMJuG078GOqUBNvPfwRVlFeBJhoYTjsrt5fO5cn7Qg5jcDKHmB6yW0dNLAZY62J87GVgpsWKLv6xuTaE49cQ8AWl%2Fg9%2FuC8R4D3ETSr104Xs7Tdlo2vzJE%2BFcJQu7q%2FpMfreLDBWSd1YN7zdcCQffh76D6P%2Bm%2BEGs0TfBpnjBUCeeqETaP6rGnrvdJpq8MizTd9BQUCtY29Sv0B8%2BBNGItjZUfS9zHKCkkexJb76i&X-Amz-Signature=bddada3567ea3b29599eb1c91443492df3050a3b4ac0fc920679eae732e40fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
