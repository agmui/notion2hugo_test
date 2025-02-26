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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=38abfea00ed20eb1dc1fcb671d766aeb4310ab28702f7220342ff384e8ccc343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=f27e3acea72c239308fa3f0f383b8433011a4787c2c04fae558fe4fea4c88475&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=eef8b3ddb29792b02d631f33ccbc3d061fbedcd48ebb12818b562ac5187b92cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=83fd68006d015dbbcdcc8fa443960905a116feae533d09d97c0881ff9b42f5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=d7949b88244b05dd359bbd894586356e6741d6a830c48d767883690f7bf359aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=49ff4e94825a55dc044ef77eafa6d066d7fcf2b83139972ca19e4e3cf4ade326&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=8b4025a40487761133b3499ac8d4bf9915309f2bb609a673b0c2a06f0d15b8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FNTSTR6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBT1bw0C3VeCUFjlKJHiigmEn7ABHkVTsTHmsNVf4426AiAUUJcqf%2BMiIS0dFPte2Xic3mtv%2FYvHmmgqbkYIj6eW9Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkB74RSws2Onc6rXKKtwDvDFWFZaEtwVkImF9tljlVAlOOhCdFc4%2FYIrfVEKSGkWOrqFnTdgc9RZMvLipj3OKeNQZ3XY6vfk%2B%2B%2B57TK3ElabVf2%2F2zG198zI%2Fn0Yp75TVtAqppCV8ExAx5lwXzVZPl%2FI%2FrHkoV%2Fn0XMV4qBFTzlE8BBmvf53ZnWKWF5CehM9g7X1vuy9IRkOMBWBAIxkkIXxwe1WY7Z5dLSnbY3cXcKx9bmgCOmQ%2BE0G7vG5sl4naBiBdtX5qIhdRBq6qS1bhvILnDbzLwCa2z7XSSRn2YIPuYU40Yb2nb56c%2FoAizt1S0XiJhoGYre9HPUxtuJy4wbcwHo0vrzAk7xcc6PLe7fX9C%2FkRxa8qfijTdSr%2FK6DUoWOA43sb%2BzzeUg1zsmiTv%2FZTq7p8hpCDDQqTft%2BP9ZT53Qsy%2BRrviNVW10%2Bj4pGFi60JKqgMqcL522qmbg2z4nba42krRWMh92QKy8AR%2FilSTS0lpTk3WjjUMal4FUzCLbnzT3gaW2BiTEoEwaBt6P57%2FznH3d1uqOv4L1CMfh2eMKmASK%2BjcUxlSPWXjmtCtLl92gsVN4loDTLiY7AYkuwg%2FXZz8KjvTDXsvczOiHeOa22ID1jUe3ZjokXkOdfXV9x4dgoo0PbEexEwxYD%2BvQY6pgGlTkU1BqySoNkCsf7Fnt5%2Frrj410dOIXrLZL5H5MUyp6vucPEC%2BJixCTn3g7r%2Fj25kIkjFr2lH0uaHgJaCg8Sa2dE4dUljPjRC2XI1rbllBlLjwHURiAK9T7%2ByhS%2BBhH5T3l6nzhVfSbu1R6n%2Fg42hepFKlEIrSYXFsisTvyijQByulfLLnb%2F2iOPR0Owk0Yb%2BdJAZidjxu8IQTGui9s%2FUJWjD6S21&X-Amz-Signature=0ab94fa187b22d6086228a156a2ce0e42bafbda5fac013a63798881e793edf75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
