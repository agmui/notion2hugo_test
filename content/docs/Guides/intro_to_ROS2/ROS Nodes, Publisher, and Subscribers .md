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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=6a489153c43a4f4b25a3bce70477470fd4afd658346194cedf05ba4b72dfc878&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=ab31bbbd32d04f28d63441c445302158f84de00bce5b6491f166dc8f2d146e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=e844f3b4f6c501c10f2d088d6b452690f9c5a695c13ceb2654630e5d9f8a031d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=049f4d593c899d92ad39e7bc0aefab2bb29ee74e4c5e9703a2221f2badb5e676&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=acd2e0af7d9ef643a6d6694d8817cf5a2f6c5b9926293674cd8c175f44e61f21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=8abf678cccf577c1c1e595f62e950f97848d8bb61f4dc80104e7c217412bcae0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=cbaa35787153c7cd312cf7132e2fcd7cde1ec2c4268471eb3dc263064a4339d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XFR5WZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2B9v7p1ZVnOptCmIDyDI8qdjdvluAfIeqdwzmB%2Bb3cjAIhAJqCTRRnsymjDcaT63rONczceoR5tzYz2CykpxMDz2fhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVOkJ0xGFK9UcXqIq3AMcx7oBuF1sjn5WDuNMQW9nA4FoWjTWFQNcZnWLqYpAQn61lgr9nJbuQR7z0kh2%2BovlfjugEW2jdhT5amQi7Em2gyAZlnl9x9MQIVTODp%2BMlVdeZdKIFNhKKNOgrH2wlajCHmhx8kyaDyK7OxU9Rl6F0H8o4x%2B83DxzdVrf4HpaXtuBQRH%2Fu8LcsUj0XsEHDANd1uN3F%2B%2B68l41njKzgshASN4X8hw69nXhe6FJ0fgP27sQZNn%2FkQcUA%2BWVnXBiMdTL5TeueKEjYmICNZnezU5Mp5a984c9IZlmoaiJyni0exwBYpMv90%2FF6VaLZVbk967YKI7z5Yy5xrUX4oHdbja9GcPt35FXWmxPQgoawDuOwSo4La8hbIguOXck5R0ny0WmJQagCNapVte2wDcaYnxNrJs0KcqLaH0KnaJFh0N7LdyyhXucos88bmdHjAcmUWh9b3nwvqbfwXKeOU%2FagRxfAiqn20b5UquQh23FA1fo6oEZcS5bDUNOWPCyrQjdySOycIaCzE2Uuf1QatyDboS06yPskJtrc9mId4WFnurafgSdkNxmyDd7ZRy2V0MUQloEm55QI2UQoevZacR9ewTi908Tg3CE5mTVg09Gg8wAe1WGGTo96o78D90%2ByjDh5ZTABjqkATwFPY2rVIgcx0wcSmCuoWqxsZlumNcp%2FVXcbqkoN18D8O%2B09fAljDF1B%2FY%2Bptx74oISJBnIT8rvyHEO6qPccyCZJuQa5w%2ByMyhyKkyq5YA6LdZdzz2fH6%2B%2FOsSZX7ZXyIgweKqjA6g%2FdGDcZsBU5ueW%2BMOZ2qe4oAxXLIuYtghbANEjFk%2B%2BAG1THjnwLtW9hcXh4JTaPIhbEN6vFFtVKPVdYgB%2F&X-Amz-Signature=7f9a97b583d0c596a28fc6fb7849f044136ab8863d414b52f6b9504c6dfc97a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
