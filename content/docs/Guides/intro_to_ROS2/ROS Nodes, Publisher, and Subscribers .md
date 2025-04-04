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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=6d3f743ab9a3feac31faa5e87c8371c85621fea3c26af93e48e1864561db1999&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=8eb322a1bc410d7a40711326549852cb8cdd4312848aed740373c1c45cbb6276&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=8396bf0dde20e02b1b1b8d33541ef203068d74764e71f2ef2e6045a5500ea46e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=8764de934df0b949c2b416a49825a2743fc04671c32e68f837284d8232c5de8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=6148780045c7b0588798484eba9f858422a3fca390e70965c643c7ae09a82246&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=e10ba9e9cf905f4a682b2ee19bee30f309d498081fc3395294d5ce20648fc962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=f81b1d30b09820da1159c22315dfbcfbd6d3d5d8bcc9819c38409bca19aa0c96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2JZ465%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe66hvKhucXUEkHSMf5XHUAC%2BO9xFCPtk3XU2c5E0jPAiBJRj0rMid4v5AZgaoYRMG%2B%2FmNwptCmbrfMSv1XWoFUBir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgfuu%2FHMod79khHmJKtwDbmtDrKFGBZhjXhVMVaYVnvOyDu1cfNfh2fx2A66LMcrNo1fcX0rCvvk5vG0qZXpadDEDC8%2BWBwnmKvYD2vliRKkq6c%2B6foZtRmlxT4Tjv5JD1aWQ0wRKDNjRkiYBV9DaIAFm1trOc2CjO1M5iz7324zP3JAJNuT%2Bl3W0F9N0XqdpJNhlWtp4D8svTqSjv05W9BypbTQlsH5JdSvtnbgivgtY80Jxx2XbMmx2SEeqGcEA1dTxWwHlLB03x82bcvIoiuPMAj3lOpmjao7WxsC9mw5q4Qqd6dGlaNytqaN9nfO7qRQ%2FseZvVyE3xjVgIkHMt19AdMricBh6ocy6fjLDuxPxBGUoTrfKlBxtwUoJkxR425JL0l%2F77j3v4mrUkmI4gzjfJOx1gnGkzg3nLsW5uTAjmURqD7iLWqxZKIv0yVSuDNP93mII9mvkr5tb2pWymHO0oozZiwhZJw0gB2OidJr92HgY3jdaLpRKI2WItG8LMO5FY7J2J9T5%2F%2FFcgTp1dthO6y2KiI0tUINyA3LdkV9DzKVwBWO8Ye1D2JMQeknDqvjDfMiQbyqT1mHGryZVfyjH5BW5twLnPLh0L%2BRNKD4UsuUbwQ3AwZXnG89bxrccWmf0Z7q0GBEv8lcwqIjBvwY6pgFFXLTqlvtAGQWArqwn4EDsoOPeR5b0eyfUCIMzdbtrVxRGH4L5mVjWp5lJ1iyBgLC5xKmRDk%2BtqUmIeoeBtrk%2BJqdTaZMrOngKhLiQHcLA9nGWlYwXnweM6eGBDzWNfimEmcvv5Pce7rBqjnUhdleKcFsL1lHxQNPlej4AkmLfXjNVlvupkIEfpR39gD%2BkDbCRLxtGdPCfsQDExjPfQE5Gm8chGbTc&X-Amz-Signature=73923d461fb76bf37cf8a861abdc82da832287383bf6bfdb220aefdc64abb936&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
