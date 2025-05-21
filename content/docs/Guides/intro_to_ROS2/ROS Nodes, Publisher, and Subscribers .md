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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=b8c51df46cd8e630b2f759bcd5129f15f7a7a3760d94dddcfdee8e3fe89955a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=2aeb404eefd2f9ea97977d389c9ef87eff7d3bf4de5b301bbd83757bde9063b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=8e8fdb46dbebbac700a8f79df5baeaa76c94943fa08e558551cc0196714a804f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=ad34a73e0b4c4c95dd493274694d9e1869b86f7c5f710b98ac0f05476bed38f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=14aebaadc80875f40ce57664ab1244e8f2eb3ab593d12a4116765fc02813b130&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=32604583cdc0e42603ec8ad65dab81b2550d9a2cc2d8987904508d9b40b45da1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=2ef421ae6b592eb5bb22bfdd382cce7224f3f09241b371df232a0d99e1afcc29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSAXYPQJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVWYGHV1ifw0fv4EnMBrBr%2B6U8A2Rysi0zY7SZxq0MaAIgbxeDsddILSKW9p7MCPhi6lf8G%2BRY0zA%2FNypYNNbsRBoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlggMoU5q3xC1iIqircAyYfGJFegUhbRZHdEJ5cydN0Tm4Pq8hFO%2FzHZ2cAWYPeb0%2B9LvksIDZU%2FWpORBNkp611y%2Bk%2Bf6wnicTSucgOG958Bs9BHHxlLAHYSlif6lcZFqmz4tkmaE1%2BoC96PUyCmsBVYzeaHBr5QY7hIkMvwO5fRGljImcNVtCieZlOSkRd3JhZYMIrw531DGftd%2FfAq%2FHVn34U38dDrK8bab3aW06MwyNyteIa8fAl%2BC4LMonLUL7xvWqkZeLjWrb1a6hwoCSa%2F%2FZNWnYaF51BUl5upBAIBcsADw8hXHeSSZr6KihNccQ355wiJUgEoJXpwyxG5rqcvEf7zLhHwUZsxp1CaVjtvSl88oGeEj6NLkBXWfOS0eDyFVeixQjuIDA2E%2BU3rt2rcZq6yBWLBIak9GzhTY%2BCBlVEhA4Cr08GMq%2BuO8zR0KF7mXKIReljMlRd%2FZebOQG1%2F4ZXW1rI0Q8vQCXp0ewHIHywnRP8%2B7rIKn0q2jPKHVjc5D1o0QA4AhxY1mcuOs%2BiL%2Byk%2BQ5HpzcYUDwTM6qP13MY%2FZA2qZJYG8vn6WCUUyntO7VSF%2B3kgeR9AdJisI%2BZMk5%2Fs3v6a4VtlRETIslOh4r%2BeIVOtrbndKd3aJUlwR4YloenDyMNyAoYMLDXuMEGOqUBfwQNF1k2bNbio5%2F%2FoEji0gff1ww0W2bCQmIuPcz8sVjXF8Vxvlz9x9gJU8oAFHmYCgrQyE0qxroJmw9LirHLkv5wPxmunKQKPgqCv2rhoBmtIQ4R0rMjha4zk1TBNXeAE3NRTT3Bq7%2B2MXyWf06PD5T5wA4U3oVakSfVvhV4ISZr6tKOQII6Xfx95mze%2B%2FLHxEWqGw4dAY0BEwPLoHgQ1UjiR3oY&X-Amz-Signature=c9cb7ba207c1d783b7c9f5b22b598e05c8639ee71aac75eb8531eb54bcb162d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
