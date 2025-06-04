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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=aafb8e149f993aca22e277fa24cc0e3016a14b9b2a50106069112a2aca55b4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=fad5a063e6d4b7fb0881c82068ff52bc911c707873e9fe98df83d0272ae91255&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=e15c8e8461246e223ea4f20d945ca1cd7945010284f1af9572a9664b17d39139&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=46f7b2534518f726c20559771e945dac8f8d205359fbf43c5e98cd3de4acb82a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=9f13b1bea3e9189b20bb33ec42ad1676ae42fbaa446a9d0f8ce601c10a9a1355&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=da5463bbea8c3b28e2bd0e3078064065c7efb5dd7b24530444c1a48f33a0d558&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=d3b851b649be82b1000f7a1451fb41eeccc2a83580f6ba5572ff75c289dc6209&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBQU44%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIEUfxHAGV44UuIoUesQc9o87ydfNz2w2y8IFTAah%2BnIPAiEAzqa2gcJrvrDH2kFqEPpBmhHG0YAx%2FZSTiIM1yCS6bU4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2BbduAZsHxqKuRFHSrcA1XZXRWiNNPMKZy7Q7Sd9bjTKUsAcPYo5YD5ADIODE%2BpfzXVfHj6R4wViHE%2FFvrYfZvVhrxLtxLiu3T4sAhxiAixDDh9Ohfoe%2FhLrnYzXzYEi2YvjMZvfF4HTSZuhXT2NEuavPgdcQaIZzESDLxagUJx2F15onCqBZAedfbzEa7vmLDsawGpmqwDZTwPPuyyX4NHmM20sPlKatdS5BNj4a3a1QjZBhXen6PQh60GRgMnyqnXA89nz5ihvTaO9eskbw66QeHhY5%2FIVhYPaKXfpjmm19Sdz1TClHl9tyW047j8%2FdE3rZeyEGWgV6IX8P6%2BOJqIAOdvGGvrhlo9xT0eUXiiqexpyImq6yDw7BKAMDZGtQm8I4Kmdpsz52D6oR2F7ckvTr%2BMxbhbvPbr0Zi0KSjd%2F67rk5BC30%2FO4Rk5JGclMM2PsKjA%2BNhzad5GkQ3eb5abHZ6K2a4JdGkgprY%2FCm9CyjR5J3onsxUAAeDt4CZChqZXymboin9%2B6%2BDUNruAXa37k5vqmlXY9pdvZD4KNJBqCtrLQCz7r0kyRkHP%2F3edeKhRwaZxKF3x45JV3qgNtHtiu3biZzPJvdcQDzBjgNROnX4KcJ%2FGpKUjNXxqwIqY40YiUyD4oBeu7%2FWUMMuI%2F8EGOqUB54jE%2BExqD6oxuO4c4ZoZBxguKX%2B%2F8LTDsgxymNnMkVa54CbPmIkSoA%2FaDH1t23ihtA63q8I%2FmzGlguiYARzdU124tnkEfenF%2FedceMAa6%2FQFle%2BbXl9iQ57v%2BWHQhXkJqKNOB10tYvqSJPqzdIlGKWg80u%2Bs1X4bnx0U9aREs4hg%2Bqtjqc32lMys88U%2BraXqNkT1hzUe5cnX%2BBf6%2Bq6Rr9WtiPEQ&X-Amz-Signature=d1cf07cc9d4f39d1b6ead5321f502e698b694f297003f0e6cd444c2981d0a342&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
