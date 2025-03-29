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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=f1529b29ac4c02fb45c474fbb37e010c6db9338c03c1ad8a25730ceecffb7f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=2577cff25c32bcad05ef9f423ef889178e30132e3df7f74ed1eb6f33732384cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=fd520f03a04fe00e621ca98c43dca10d2254029ca8594c6a572d7d2e9f36e52e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=cec470d2b1f486a8c661313d56839565b039261e2656414ea4e5fa339b1da815&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=b391bc14ba7da58c9a00acc64d40caf0d30264246e8dde346e5b7ef080154986&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=de7a4a7c4572d93bc11f8fc49e0178eb2addbbfeed44c3a56eea0e5c52ede537&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=8328511593103662f95d507e964e34d8e6301624e13962b5f346f76fc7775507&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSK6TLQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4mBxTpRw%2B2ZytIywW8YyljSe%2B76x77svD7FZ2ukHYqQIgQv4LRz2BcLocezb9p1zsroFFgml1YAP%2FjoNF5FmTgGkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNero7eTzwxsUvQuuircAzRv6b5aObE48L612QsA1rnpuFcWzd9wibLOsq%2BX7%2FyD3rhE%2F0FYY1g7fv7m8gbKQ5Bt%2FhFRUzRD4WD%2BJBGfEebXBILNIMpUD6WZ2ybJ3PJAQN5FOcUgyK%2BI%2F8gGxN%2B%2FQwov7mJnL2eMG8kgeMe4XCuTZcg373PxSvbGV6leBblmGvmLGgGeHw4Qs2p9fL0mGiPf6JhJARsi8aw3t92SXoSDZd92HyxyOHglJYtWkdv%2BZ5UQ3Tuu2m15QaRmI0rgUQSVgy5JuFNtHIips7658lBEUgAT9y3AcCG4RGGrn8ecx58DuQPsnVlIZQ2F9y7tKMBSH7nAvCEhIHN8vZa1GMhiyHZQs7%2Fy7BdLjEu34zLqnJXmiZmty7Q0IFeCHmKGMMx1nA1%2BY98cUGG4zYrUTa8fzMti9M1Pnet5JGJTjcHoqdX4mHc2konU%2BvpdBovRbDpZFzzd0%2FfvXaF8veBHK5g0i0lkGNRkz0sXmFONQmD32XAFxtcNEiL2MuppudRtAmQfMkFbg1uQIvTnKwZqDMuZHygWDJyLemtNMmSA7SezVR5tNaQ96jPfrrrDnXjMZcKAgDaX0aP43D2i%2BxuGLhTvJ9kYg1y%2FZ%2BZ%2BVbbT5%2F3x7Sq417pKjKoIdryWMLWLn78GOqUBmGIE%2BXA%2BwRh%2FSKTcvKNWOZpb1H8NLS2zX3kFOX2dllgXcqVw6FATqnzcb7PSzvlAH8GSADBaYZqYll1ifOxjpUZLNKerlsKCPRT25dblIkfMVB2HJ0cHOjC40KBCeEURw9xkIYwope3E3nkU1L3F0wqok2Kxqiv8TnzHKiI6Sa%2F4RKclJ80vJW4fKt%2FdaXma5m5EFfzTFZzpMe%2BRbrXyJ133zPJS&X-Amz-Signature=d27baad9f7c70f3e3dc30541d749bbcb0d61c557a1f8bed5a13454f1a92fcf6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
