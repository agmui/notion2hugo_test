---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=a52e598a73e2f600638c1238eb4007873a5649978efa79e8953016419351953e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=bc35868973ac9b00145b085e8d48ce58608a10273197051ef2912232d0a3bc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=3a73a4f01568a40637a95d53290dc80068f79fcee25644b943f734ee06e30385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=0eae9cfbffadade50eb55a6b0863409337d3984ec75cfdd0c81276d27d81928c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=bc8814358358201ec5b3a7dec45e140db53f4cf5be19eb9816f9dac7500602ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=a132ae1dce22c1f335c6ff4fb0e2a585b86041ade4740910c807e50450321b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=c7f2136389cff70ee5d8f6434b4f6f8932f7129e73900b1e8ff254a7a8965872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJB4F7PT%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICRzrKkaMDrB1b%2FHTrb7%2BpW7PUlckrUkcePdlGGjsjRHAiEA9J1Yqjo%2FiM%2FMZKEzjUzuDJlKOMUTqaVtccxT9eM64HgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEg056VffjmnRv0XCrcA7m2wqeAhSb4hZvuq3HX6JYu17IojPYgmq0IPrZcoA8O8HyCOJM3sXN5uZwL2kijzj%2BEuaXh6uUoMpOHaPN37cR2tVNjyzSgA1wu%2FYSO29HVfO8U4wXIW3MRfHn%2BK7nN0dfUnrIFKTg%2FXsX%2F1mha5o5%2FQxl9%2BMdj7Kq4gicHD6MPDHrk1WRE6ldwFLD6YCLmQM6TqTkPpWiPQzxMDasqWnLhi1M3DmzgjvhJU11Pe5RJwJ5O0zuoaO1W8i4ZY8qq4awk1%2BPTWX45seb2qwj7apju3KRx4KAnlAJLEyWWKP%2B%2B8ennH%2BsblfVtBigc8lCfi92Vu58Gs3ImFmG14tqhajqp6dMGTSgdrag%2FUBhyHpGl86kc9aHyxAItOk7cgP%2Bv%2BwKsNi3YASoB3WRHnTB9g1XkZNfkoAtfM40Zz0CvjYAR4cn6D3lZ%2BKX347dcCV%2BHBN%2FLeDXAFb7IjLe3ZwN9ygdMK08a%2FdWzZGDHaD2jknr%2B2Sa%2Fusba7FzWZIBILz80xT2Gk3CCpm7sbBHlpmlgMqnUwc3ClhSaZAhCGur%2BktGe9ZOgSizqGIF17VMa0LeMHrN226T35OE%2FCj5uxubXbIqDl7oU7KUCrcV48ipSDYm4cbkWU5GzgOEQDhp%2BMNTwosYGOqUBMG0%2BYvxZW9kLuJfUtx0KMVaxgdAm8NSfPFnNpf4Ojwg182wyhAzumJPRUt8EB7%2FGM8jg7KaGk7XL%2BhCDG36IvIvkD5JqKuOp2TbHknz29qRa%2BbJf%2FKaMxEeOasxFHtwUy2zq3uUgJGBUpLDFryN765Y9fSkwOEkj6OitPBdUt2uBnaoOIzqwy57ccl3itrVXlVi0RaNAAmsKAxEsIzk5WQNwth%2F6&X-Amz-Signature=e75e83c50e9e36a1f46aef85a4be9a111b5d5bdeaae3c766302f6c16882e6dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
