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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=fd4a44e564e0438a682f618b22a646b0fca281a66dc8872cc37fe7e4bc10a8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=cb8e6874ab341091fd3f9da7e5649143b071fc395c279734113cdb5af899011a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=52b189bf6a1f811943a5263840ea191c100ca06d294d85c30ca0301784599e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=e4fc5c1d25d5e3bcf781ce46b365ad62e7825c5d86bdca5ed8f1d0925a2987c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=1ab97738cd869414a2f80a99adbc6b780894219c96952cdc8c398849902df855&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=c9b1a3ac75f86f6c539eb37704c0698ab9b7d24344a1973cfa2761c7f2ecf12e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=2c4834090808008a875ed7280298a5ffb8b1f854cbcf881c773dadbd9d00f2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX6ACT3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGu%2BOJPrYiQ1Y9sI3MVmyALLToKLZBIrguGH8GEIjhk5AiEAgCtZAw8mOrrtwN3PGdP1jIbNjxxv3CZJ0TKIYs%2BG6tYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDONBxVkkohUD7HKnKSrcAyAfDvf2zjxw8BOpVlGj8pvoIiT%2FgGh64KkWAekxHVgnsw65HOLljX5IJC5pcq1un5YkBsJyHcqne29tDnCDcp0jIVKthkyeoq3IfBuhBIrmoVqc8uZJTi81YNMIr%2F3Z1DevrrzMVr6ostJp4wsvIz5nsxEGF8k2mzjVkvoZpOKzocSJucscYra0k%2FY5K73vnnEvxSs20ikFVn4IloPs6lKwaC5kQ1nFAwMQWyFENLpuKJYxWn8UBDHf4PLraPvxripi%2BZJCl35u52WYIqejMIVTlfqFIv%2B%2BGOr1l5S0E7KPT3XT24aE2TcPXew3XAEfnjWCZaFne6%2BwjvX5MA8KlUD6S8G0K8jTa0F5yQ5Vc%2BPyTfUd4gYsCE6cjuCO5Jc2FQFH1pM6Ge95HmRT6iQMStWMiZSEIf8QLJs1nzdAg5OwaWh5p9NbuiUONtQA0w1RzmgkxDXee5XlMgHjEJyBwNejFC3ngMQgo7TiD7nc%2F%2BFyLTotT0fNalf3fTW3YCVTC13FNX0EmdpocwcKkWBmKT3Jyo8mLgLk5%2FCzMskH9OUsMa8hAOe0WEvMGjjlWQsyz7PONaD%2BEkAA9ol0BVcho8K%2F4N3qwLFDdLYYxsVzFI5nv67c1WZofJVzXYf4MJGblb0GOqUBne466sfjRi5eU0EfoEzlgj4YDh9xoP7nqzKMiq%2Ft1lPc0r2WK4XZ7P%2BLwsMHzCREsSTjYK2odHL1Yy0UeyvfG0ORvRXLO2YaXkJ8JZyt3%2FPTom8vLcQJNMtBsCqh14qcO1WFUoSmE%2FfdfInwhlc4fB9XcTWNnmNDrPxVLXlwmm4iAgM%2FZwJ85fK9EKOkS7IBoOTC0kNeWIKe6G5MJxWgOLB1uU51&X-Amz-Signature=3eae76d5cfba50e2bc98e43232f990c968e0cee4b633b6b5df34c396a4438ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
