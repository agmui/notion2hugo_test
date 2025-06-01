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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=f08a40d40be70d03ea2b6e24ce576138c1ad6eb6d8ef27de744895ea627b9571&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=970c65691254d5c60b04182f7fd4dc07e877826381338a5a72dcabb9caafafb1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=b70d8ddcf5539e8b2a71ca6672328c3a93690f876c4231681d15e8455739e12b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=d36b69791a199364ef8c266696f4276c18788a18fad5da06d52fb0b1cf822e95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=407d347ccfcefe7af5394c26f13e2a1ffc00ed7dd84bfcc4b5e9258b83622418&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=e7e33bc920767d075ed913d6604b9a4240b085b9d3bec450c33abcb9349ba856&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=9b1c0db204721e8553541a6d1be1a06cd851a7e273e1997ca0226d09b7653de4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOS3A6C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU19%2BVRF6iPJL2t2f2JC1LcYb%2B7XBISeuxz%2FwSym71%2FAiBZbARp%2FHh79X%2BukEk%2Fc9UvktY2MNcFyMKKNsqBCGcQ5CqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CauZYAcGF0Y848bKtwDT0duVc1lDrs9xjM7D8SWxxcBW3xdwb3f42EHhicqahrFG9svEeQ2JmMHpr70aWIJA8UX5ApZyPvQGJph9OnoJpRQYF6L3EoJBK1OyzgGa1LhqzWg6ajh3rAS3SbAQiVaMg%2Fji43q7IrW19a8pv%2BmraM%2BWzPlJy9RNn576UoQ8JbWlzByqD7Dfr7UZmQvZ4hYbc%2FfHIz3D%2FFeIqz347Pa6RYSrWNUdEuLBfg02EBcjCSdUNKSkpENvGu4H5WcIirlscLXsdYmzKDlZlPHQkV9OKC5tpIY9x7WdXKsQ8mrYeljMre%2Fq%2BuWRcxEeeupKQP5fRr1eJH5wbBsSDEDBGDuXxsX2Vzk4AP%2BAmU%2BZTtsiWT%2BZf9yStjhQaOMjpRqVRlfZiTms%2BEWrTkOCjAGwvoiWK0nMRTSHo8YjiYwa4EjgXZ1jGiojNNOhrRJstbjZlMW0okter27F9frwsrn8WzslOri90X0i6U5%2FHge3b2E4OJM16Z0AMueX85ymM7mj0Abg7BCpxQYS1w7cS0R5XPJb9nRt9SRXL%2B1UHAfJPrz6YfcVy61U8k4i53%2F0k%2FBzL7iC1ywIhq9ZdXiNLWSa1ANI3KVuuxAElgQXK%2Fg0SYio0ZGU3W3e%2Bz0WBnS2FUwrJPuwQY6pgHBP9uT02LZP8jxLsdYe%2FkpVzBiobMURgXtTuasQ1vs70IGQYV0uB%2B%2BTMv1C59sUWT81nnDUR%2BHvVpMhavuNJqSg%2BGyMnm2ZqYS%2BZKRiEncN1VT2aX%2FZ3%2FSoYicD6EeAFtHJG6Gi2LVhE3h9PzDLKv53aAJqUXMakG%2Fxks4nViV67gU5t4RetsZ%2BKwqtKxETQXAVZNXmA8Er5HhlAZ5M5swoAxvFRUu&X-Amz-Signature=12e9b1b021c4753d2944347f81b6f239fc2c3e2a4c45b08a451adc950635864d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
